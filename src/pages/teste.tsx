import React from "react";

const Teste = () => {
  return (
    <div className="min-h-screen p-12 space-y-16 bg-background max-w-7xl mx-auto">
      <section className="space-y-4 border-l-4 border-primary pl-6">
        <h1 className="text-5xl font-extrabold text-foreground-white tracking-tight">
          BIP BIP <span className="text-primary"> Sistema de corridas </span>
        </h1>
        <p className="text-foreground text-lg max-w-2xl">
          {" "}
          Este aqui fica de texto padrao (foreground).
        </p>
        <p className="text-foreground-muted text-base">
          {" "}
          Este fica mais suave(muted).
        </p>
        <p className="text-foreground-low text-xs uppercse tracking-[0.3em] font-bold">
          {" "}
          Escreva aqui(low)
        </p>
      </section>
      <section className="space-y-8">
        <h2 className="text-sm uppercase tracking-widest text-primary font-bold">
          Botão customizado
        </h2>
        <div className="flex flex-wrap gap-6 items-center">
          <button className="btn-primary px-8 py-4 text-lg">Botão Primário</button>

          <button className="btn-outline px-8 py-4 text-lg">Botão outline</button>
        </div>
      </section>


      <section className="space-y-8">
        <h2 className="text-sm uppercase tracking-widest text-primary font-bold">Cards aqui</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background-card border border-stroke p-8 rounded-2xl shadow-soft transition-all duration-300 hover:border-stroke-light">
            <h3 className="text-foreground-white text-xl font-bold mb-3">
              Card Padrão
            </h3>
            <p className="text-foreground-muted leading-relaxed">
              Fundo em <code className="text-primary-light bg-background/50 px-1 rounded">background-card</code> com borda{" "}
              <code className="text-primary-light bg-background/50 px-1 rounded">stroke</code> e <code className="text-primary-light bg-background/50 px-1 rounded">shadow-soft</code>.
            </p>
          </div>

          <div className="bg-background-subtle border border-primary/20 p-8 rounded-2xl shadow-bip btn-hover cursor-pointer group">
            <h3 className="text-primary-light text-xl font-bold mb-3 group-hover:text-foreground-white transition-colors">
              {" "}
              Card com Glow e Hover
            </h3>
            <p className="text-foreground-muted leading-relaxed">
              {" "}
              Este aqui usa <code className="text-primary-light">shadow-bip</code> com a classe{" "}
              <code className="text-primary-light">btn-hover</code> para destaque
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-sm uppercase tracking-widest text-primary font-bold">Efeito Glass</h2>
        <div className="relative h-64 w-full rounded-3xl overflow-hidden bg-[url('https://media.istockphoto.com/id/1964203344/pt/foto/portrait-of-a-father-driving-a-new-car-while-riding-with-his-family.jpg?s=2048x2048&w=is&k=20&c=8f0rUWsYWDBObXigRhK5r_yC5eZiCdr9hZS9wCD7e6I=')] bg-cover bg-center flex items-center justify-center">
          <div className="absolute inset-0 bg-background/40"></div>
          <div className="bg-glass p-10 rounded-2xl border border-white/10 shadow-2xl relative z-10 text-center backdrop-blur-xl">
            <p className="text-foreground-white font-bold text-2xl tracking-tight">
              Efeito Glass Ativo
            </p>
            <p className="text-foreground-muted mt-2">Transparência moderna pro fundo</p>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap gap-4 pt-8 border-t border-stroke">
        <div className="px-6 py-2 rounded-full border border-success/30 bg-success/10 text-success text-xs font-black tracking-widest">
          SUCESSO
        </div>
        <div className="px-6 py-2 rounded-full border border-error/30 bg-error/10 text-error text-xs font-black tracking-widest">
          ERRO
        </div>
        <div className="px-6 py-2 rounded-full border border-warning/30 bg-warning/10 text-warning text-xs font-black tracking-widest">
          AVISO, VOCÊ FOI AVISADO
        </div>
      </section>
    </div>
  );
};

export default Teste;