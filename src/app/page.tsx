import Image from "next/image";

export default function Home() {
  const featuredGames = [
    { id: 1, title: "Cyber Rush", image: "/games/game1.jpg", category: "Action" },
    { id: 2, title: "Pixel Warriors", image: "/games/game2.jpg", category: "Adventure" },
    { id: 3, title: "Neon Racer", image: "/games/game3.jpg", category: "Racing" },
    { id: 4, title: "Space Invaders X", image: "/games/game4.jpg", category: "Arcade" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
            GoldGames
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-zinc-400 max-w-2xl">
            Experience premium arcade gaming at its finest. Join the elite gaming community today.
          </p>
          <button className="mt-8 px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full font-semibold text-black hover:scale-105 transition-transform">
            Play Now
          </button>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-50 animate-pulse" />
      </section>

      {/* Featured Games Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGames.map((game) => (
              <div
                key={game.id}
                className="group relative overflow-hidden rounded-lg bg-zinc-900 hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                  <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{game.title}</h3>
                  <p className="text-sm text-zinc-400">{game.category}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join the Elite?
          </h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Get exclusive access to premium arcade games and join our growing community of gamers.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full font-semibold text-black hover:scale-105 transition-transform">
            Start Gaming Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-zinc-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
            GoldGames
          </div>
          <div className="flex gap-8 text-sm text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Games</a>
            <a href="#" className="hover:text-white transition-colors">Community</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <div className="text-sm text-zinc-500">
            © 2024 GoldGames. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
