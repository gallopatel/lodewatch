const mines = [
  {
    id: 1,
    name: "Greenbushes",
    country: "Australia",
    operator: "Talison Lithium (Albemarle / Tianqi / IGO)",
    commodity: "Lithium",
    annualProduction: "1.95 Mt spodumene concentrate (2023)",
    status: "Operating",
  },
  {
    id: 2,
    name: "Salar de Atacama",
    country: "Chile",
    operator: "SQM / Albemarle",
    commodity: "Lithium",
    annualProduction: "~180,000 t LCE (2023)",
    status: "Operating",
  },
  {
    id: 3,
    name: "Mutanda",
    country: "DRC",
    operator: "Glencore",
    commodity: "Cobalt",
    annualProduction: "~25,000 t cobalt (2023)",
    status: "Operating",
  },
  {
    id: 4,
    name: "Sorowako",
    country: "Indonesia",
    operator: "PT Vale Indonesia",
    commodity: "Nickel",
    annualProduction: "~71,000 t nickel matte (2023)",
    status: "Operating",
  },
  {
    id: 5,
    name: "Balama",
    country: "Mozambique",
    operator: "Syrah Resources",
    commodity: "Graphite",
    annualProduction: "~100,000 t natural graphite (2023)",
    status: "Care and maintenance (2024)",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Lodewatch</h1>
          <p className="text-gray-400 mt-2">
            A free dashboard tracking battery-mineral mines worldwide.
          </p>
        </header>

        <section>
          <h2 className="text-xl font-semibold mb-6 text-gray-300">
            Featured mines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mines.map((mine) => (
              <div
                key={mine.id}
                className="bg-gray-900 border border-gray-800 rounded-lg p-5 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold">{mine.name}</h3>
                  <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">
                    {mine.commodity}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  {mine.country} · {mine.operator}
                </p>
                <div className="text-sm space-y-1">
                  <div>
                    <span className="text-gray-500">Production:</span>{" "}
                    <span className="text-gray-200">
                      {mine.annualProduction}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Status:</span>{" "}
                    <span className="text-gray-200">{mine.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-800 text-sm text-gray-500">
          v0.1 · {new Date().getFullYear()} · built by Gallo Patel
        </footer>
      </div>
    </main>
  );
}