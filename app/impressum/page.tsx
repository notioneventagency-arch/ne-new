export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-10 text-5xl font-black">Impressum</h1>

        <div className="space-y-6 text-zinc-300">
          <p>
            <strong>Notion Eventagency</strong><br />
            Inhaber: Lukas Schnorrenberg<br />
            Igelgasse 21<br />
            8401 Kalsdorf bei Graz<br />
            Österreich
          </p>

          <p>
            Telefon: +43 664 1259454<br />
            E-Mail: notioneventagency@gmail.com
          </p>

          <p>
            Dienstleistungen in den Bereichen Eventmanagement,
            Marketing, Social Media Marketing, Foto- und Videoproduktion,
            Content Creation, Grafikdesign, Branding und Werbung.
          </p>

          <h2 className="text-2xl font-bold text-white">
            Haftung für Inhalte
          </h2>

          <p>
            Die Inhalte dieser Website wurden mit größtmöglicher
            Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität wird keine Gewähr übernommen.
          </p>

          <h2 className="text-2xl font-bold text-white">
            Haftung für Links
          </h2>

          <p>
            Für Inhalte externer Links sind ausschließlich deren
            Betreiber verantwortlich.
          </p>

          <h2 className="text-2xl font-bold text-white">
            Urheberrecht
          </h2>

          <p>
            Sämtliche Inhalte dieser Website unterliegen dem
            Urheberrecht.
          </p>
        </div>
      </div>
    </main>
  )
}