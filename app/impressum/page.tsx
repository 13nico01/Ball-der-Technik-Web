import Image from 'next/image'
import Link from 'next/link'

export default function Impressum() {
  return (
    <div className="relative min-h-screen py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bdt_images/crowd01.jpg"
          alt="Background"
          fill
          priority
          className="object-cover brightness-[0.2]"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-pirata text-5xl lg:text-7xl text-header text-center mb-12
          [text-shadow:_2px_2px_8px_rgb(0_0_0_/_90%)]">
          Impressum
        </h1>

        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-header/30">
            <h2 className="text-2xl font-pirata text-header mb-4">Verantwortlich für den Inhalt</h2>
            <p className="text-white/90">Personenkomitee Ball der Technik 2025</p>
          </section>

          <section className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-header/30">
            <h2 className="text-2xl font-pirata text-header mb-4">Kontakt</h2>
            <p className="text-white/90">Email: balldertechnikhl@gmail.com</p>
          </section>

          <section className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-header/30">
            <h2 className="text-2xl font-pirata text-header mb-4">Haftungsausschluss</h2>
            <p className="text-white/90 mb-4">
              Die Inhalte dieser Website wurden sorgfältig geprüft und nach bestem Wissen erstellt. 
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
            <p className="text-white/90">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

          <section className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-header/30">
            <h2 className="text-2xl font-pirata text-header mb-4">Urheberrecht</h2>
            <p className="text-white/90">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
              dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung 
              des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <div className="text-center pt-8">
            <Link
              href="/"
              className="inline-block px-6 py-3 text-header border border-header rounded-lg
                hover:bg-header hover:text-white transition-all duration-300"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 