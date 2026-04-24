import type { ReactNode } from "react"
import { motion, type Variants } from "framer-motion"
import { BadgeCheck } from "lucide-react"

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
}

export const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export function AuroraBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-[20%] top-[0%] h-[600px] w-[600px] rounded-full bg-primary-dark/8 blur-[140px]" />
            <div className="absolute right-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-primary/6 blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[30%] h-[400px] w-[400px] rounded-full bg-primary-light/5 blur-[120px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(101,163,13,0.06),transparent)]" />
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(163,230,53,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(163,230,53,0.3)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>
    )
}

export function SectionBadge({ children }: { children: ReactNode }) {
    return (
        <motion.span
            custom={0.05}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary"
        >
            <BadgeCheck className="h-3 w-3" />
            {children}
        </motion.span>
    )
}

export function BrandLogo({ className = "" }: { className?: string }) {
    return (
        <motion.div
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`inline-flex items-center ${className}`}
        >
            <img
                src="/logo.png"
                alt="Logo BIP BIP"
                className="h-16 w-auto object-contain drop-shadow-[0_0_30px_rgba(132,204,22,0.2)] sm:h-20 lg:h-24"
            />
        </motion.div>
    )
}

export function PageShell({ children }: { children: ReactNode }) {
    return (
        <main 
            className="relative isolate overflow-hidden bg-background font-sans text-foreground"
        >
            <AuroraBackground />
            {children}
        </main>
    )
}