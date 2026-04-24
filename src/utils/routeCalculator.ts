type Coordinates = {
	lat: number;
	lon: number;
};

export type RouteCalculationMethod = "osrm" | "haversine";

export type RouteEstimate = {
	distanceKm: number;
	durationMinutes: number;
	method: RouteCalculationMethod;
};

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search";
const OSRM_BASE_URL = "https://router.project-osrm.org/route/v1/driving";
const FALLBACK_AVERAGE_SPEED_KMH = 40;

function toNumber(value: unknown) {
	return typeof value === "number" ? value : Number(value);
}

function haversineDistanceKm(origin: Coordinates, destination: Coordinates) {
	const earthRadiusKm = 6371;
	const toRadians = (value: number) => (value * Math.PI) / 180;
	const deltaLat = toRadians(destination.lat - origin.lat);
	const deltaLon = toRadians(destination.lon - origin.lon);
	const lat1 = toRadians(origin.lat);
	const lat2 = toRadians(destination.lat);

	const a =
		Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
		Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	return earthRadiusKm * c;
}

async function geocodeLocation(query: string): Promise<Coordinates> {
	const response = await fetch(`${NOMINATIM_BASE_URL}?format=jsonv2&limit=1&q=${encodeURIComponent(query)}`, {
		headers: {
			Accept: "application/json",
		},
	});

	if (!response.ok) {
		throw new Error(`Falha ao geocodificar ${query}`);
	}

	const data = (await response.json()) as Array<{ lat: string; lon: string }>;
	const firstResult = data[0];

	if (!firstResult) {
		throw new Error(`Local não encontrado: ${query}`);
	}

	return {
		lat: toNumber(firstResult.lat),
		lon: toNumber(firstResult.lon),
	};
}

async function fetchRouteEstimate(origin: Coordinates, destination: Coordinates) {
	const response = await fetch(
		`${OSRM_BASE_URL}/${origin.lon},${origin.lat};${destination.lon},${destination.lat}?overview=false&steps=false`,
		{
			headers: {
				Accept: "application/json",
			},
		}
	);

	if (!response.ok) {
		throw new Error("Falha ao consultar a rota");
	}

	const data = (await response.json()) as {
		routes?: Array<{ distance: number; duration: number }>;
		code?: string;
	};

	const route = data.routes?.[0];

	if (!route || data.code !== "Ok") {
		throw new Error("Rota indisponível");
	}

	return {
		distanceKm: route.distance / 1000,
		durationMinutes: route.duration / 60,
		method: "osrm" as const,
	};
}

export async function calcularRotaViagem(embarque: string, destino: string): Promise<RouteEstimate> {
	const origem = embarque.trim();
	const fim = destino.trim();

	if (!origem || !fim) {
		throw new Error("Informe embarque e destino");
	}

	const [origemCoordenadas, destinoCoordenadas] = await Promise.all([
		geocodeLocation(origem),
		geocodeLocation(fim),
	]);

	try {
		return await fetchRouteEstimate(origemCoordenadas, destinoCoordenadas);
	} catch {
		const distanceKm = haversineDistanceKm(origemCoordenadas, destinoCoordenadas);
		const durationMinutes = (distanceKm / FALLBACK_AVERAGE_SPEED_KMH) * 60;

		return {
			distanceKm,
			durationMinutes,
			method: "haversine",
		};
	}
}