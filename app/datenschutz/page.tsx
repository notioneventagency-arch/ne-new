export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-10 text-5xl font-black">
          Datenschutzerklärung
        </h1>

        <div className="space-y-6 text-zinc-300">
          <h2 className="text-2xl font-bold text-white">
            Verantwortlicher
          </h2>

          <p>
            Lukas Schnorrenberg<br />
            Notion Eventagency<br />
            Igelgasse 21<br />
            8401 Kalsdorf bei Graz<br />
            Österreich
          </p>

          <h2 className="text-2xl font-bold text-white">
            Kontaktaufnahme
          </h2>

          <p>
            Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren,
            werden Ihre Angaben zur Bearbeitung Ihrer Anfrage gespeichert.
          </p>

          <h2 className="text-2xl font-bold text-white">
            Kontaktformular
          </h2>

          <p>
            Für die Übermittlung von Formularanfragen wird der Dienst
            FormSubmit verwendet. Dabei werden die eingegebenen Daten
            an unsere E-Mail-Adresse weitergeleitet.
          </p>

          <h2 className="text-2xl font-bold text-white">
            Vercel Analytics
          </h2>

          <p>
            Diese Website nutzt Vercel Analytics zur Analyse der Nutzung
            und Verbesserung unseres Angebots.
          </p>

          <h2 className="text-2xl font-bold text-white">
            Externe Links
          </h2>

          <p>
            Unsere Website enthält Links zu externen Plattformen wie
            Instagram. Für deren Inhalte und Datenschutzrichtlinien
            sind ausschließlich die jeweiligen Betreiber verantwortlich.
          </p>

          <h2 className="text-2xl font-bold text-white">
            Ihre Rechte
          </h2>

          <p>
            Sie haben das Recht auf Auskunft, Berichtigung,
            Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Widerspruch gemäß DSGVO.
          </p>
        </div>
      </div>
    </main>
  )
}