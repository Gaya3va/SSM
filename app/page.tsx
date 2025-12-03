export default function Home() {
  return (
    <main className="p-6">
      <section className="bg-white shadow-md rounded-xl p-6 border">
        <h1 className="text-3xl font-bold text-teal-600">SSM — Skill Sharing Marketplace</h1>
        <p className="text-gray-600 mt-2">
          Learn & teach real skills through 30–60 minute micro-sessions.
        </p>

        <div className="flex gap-3 mt-4">
          <a
            href="/browse"
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            Browse Skills
          </a>

          <a
            href="/teach"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
          >
            Teach a Skill
          </a>
        </div>
      </section>

      <section className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="bg-white p-4 border rounded-xl shadow-sm">
          <h3 className="font-semibold">1. Browse Sessions</h3>
          <p className="text-sm text-gray-600">Choose from dozens of peer-taught skills.</p>
        </div>

        <div className="bg-white p-4 border rounded-xl shadow-sm">
          <h3 className="font-semibold">2. Book or Barter</h3>
          <p className="text-sm text-gray-600">Use credits or trade skills directly.</p>
        </div>

        <div className="bg-white p-4 border rounded-xl shadow-sm">
          <h3 className="font-semibold">3. Learn & Earn</h3>
          <p className="text-sm text-gray-600">Teach skills to earn credits and badges.</p>
        </div>
      </section>
    </main>
  );
}
