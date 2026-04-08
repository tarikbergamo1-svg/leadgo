import Image from "next/image";
import { client } from "../data/client";

export default function Home() {
  const whatsappLink = `https://wa.me/${client.whatsapp}`;

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_25%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-2">
          {/* TEXTO */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
                <Image
                  src="/logo.png"
                  alt="Logo LeadGO"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
                <span className="text-xs uppercase tracking-[0.22em] text-green-300 md:text-sm">
                  {client.brand} • {client.city}
                </span>
              </div>
            </div>

            <h1 className="mt-6 text-3xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              {client.headline}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base text-gray-300 md:text-lg lg:mx-0">
              {client.subheadline}
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-green-500 px-8 py-4 text-base font-bold text-black shadow-2xl transition hover:scale-105"
              >
                {client.cta}
              </a>

              <a
                href="#como-funciona"
                className="inline-block rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Como funciona
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {client.stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur"
                >
                  <p className="text-xl font-bold text-green-300 md:text-2xl">
                    {item.number}
                  </p>
                  <p className="mt-1 text-xs text-slate-300 md:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGEM CENTRALIZADA */}
          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem] bg-slate-900">
                <Image
                  src="/cliente.png"
                  alt="Imagem de apresentação LeadGO"
                  width={900}
                  height={1200}
                  className="h-auto w-full object-contain object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-green-300 md:text-sm">
            Benefícios
          </p>
          <h2 className="mt-4 text-2xl font-bold md:text-4xl">
            Uma página feita para transformar visitas em contatos reais
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {client.benefits.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center shadow-xl transition hover:-translate-y-1 hover:border-green-400/40"
            >
              <p className="text-base font-semibold md:text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section
        id="como-funciona"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-green-300 md:text-sm">
              Processo
            </p>
            <h2 className="mt-4 text-2xl font-bold md:text-4xl">
              Como funciona
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {client.steps.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-black/20 p-5 text-center"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-green-500 font-bold text-black">
                  {index + 1}
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-200 md:text-base">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO DE POSICIONAMENTO */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,197,94,0.12),rgba(255,255,255,0.04))] p-10 md:p-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-green-300 md:text-sm">
              LeadGO
            </p>

            <h2 className="mt-4 text-2xl font-bold md:text-4xl">
              Transforme seu WhatsApp em uma máquina de captação de clientes
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">
              Criamos páginas profissionais para empresas e profissionais que
              querem mais atendimento, mais autoridade e mais conversas com
              clientes prontos para comprar.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-green-500 px-8 py-4 text-base font-bold text-black shadow-2xl transition hover:scale-105"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Quer começar a receber clientes agora?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300 md:text-lg">
          Me chama no WhatsApp e eu monto sua página profissional com foco em
          gerar contatos reais para o seu negócio.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-green-500 px-8 py-4 text-base font-bold text-black shadow-2xl transition hover:scale-105"
        >
          {client.cta}
        </a>
      </section>

      {/* BOTÃO FLUTUANTE */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-6 py-4 text-sm font-bold text-black shadow-2xl transition hover:scale-110 md:text-base"
      >
        💬 WhatsApp
      </a>
    </main>
  );
}