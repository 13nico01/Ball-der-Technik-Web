import Image from 'next/image'
import Link from 'next/link'

export default function Datenschutz() {
  return (
    <div className="relative min-h-screen py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bdt_images/crowd02.jpg"
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
          Datenschutzerklärung
        </h1>

        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-header/30">
            <h2 className="text-2xl font-pirata text-header mb-4">Foto- und Videoaufnahmen</h2>
            <p className="text-white/90 mb-4">
              Wir möchten Sie darüber informieren, dass während des Ball der Technik Foto- und Videoaufnahmen 
              gemacht werden. Diese Aufnahmen werden für folgende Zwecke verwendet:
            </p>
            <ul className="list-disc list-inside text-white/90 mt-2 mb-4 space-y-2">
              <li>Dokumentation der Veranstaltung</li>
              <li>Werbung für zukünftige Veranstaltungen</li>
              <li>Veröffentlichung auf unserer Website und in sozialen Medien</li>
              <li>Pressemitteilungen und Berichterstattung</li>
            </ul>
          </section>

          <section className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-header/30">
            <h2 className="text-2xl font-pirata text-header mb-4">Rechtliche Grundlage</h2>
            <p className="text-white/90 mb-4">
              Mit dem Kauf einer Eintrittskarte und dem Betreten der Veranstaltung erklären Sie sich damit 
              einverstanden, dass Foto- und Videoaufnahmen von Ihnen gemacht und für die oben genannten 
              Zwecke verwendet werden können. Dies gilt insbesondere für Aufnahmen, auf denen Sie als Teil 
              der Veranstaltung oder des Publikums zu sehen sind.
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