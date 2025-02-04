export default function Home() {
  const featuredGames = [
    { id: 1, title: "Cyber Rush", category: "Action" },
    { id: 2, title: "Pixel Warriors", category: "Adventure" },
    { id: 3, title: "Neon Racer", category: "Racing" },
    { id: 4, title: "Space Invaders X", category: "Arcade" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-amber-500">GoldGames</h1>
          <p className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto">
            Experience premium arcade gaming at its finest.
          </p>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGames.map((game) => (
              <div
                key={game.id}
                className="bg-zinc-900 rounded-lg p-6 text-center"
              >
                <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
                <p className="text-sm text-zinc-400">{game.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-zinc-800 mt-auto">
        <div className="container mx-auto text-center text-sm text-zinc-500">
          © 2024 GoldGames. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
