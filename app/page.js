import { supabase } from '@/lib/supabase';

export default async function Home() {
  const { data: mines, error } = await supabase
    .from('mines')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    return (
      <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold">Error loading mines</h1>
          <pre className="mt-4 text-red-400 text-sm">{error.message}</pre>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Lodewatch</h1>
          <p className="text-gray-400 mt-2">
            A free dashboard tracking battery-mineral mines worldwide.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {mines.length} mines tracked · live from database
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
                    <span className="text-gray-500">Production:</span>{' '}
                    <span className="text-gray-200">
                      {mine.annual_production}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Status:</span>{' '}
                    <span className="text-gray-200">{mine.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-800 text-sm text-gray-500">
          v0.2 · {new Date().getFullYear()} · built by Gallo Patel
        </footer>
      </div>
    </main>
  );
}