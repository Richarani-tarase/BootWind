export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-black text-white  py-12 px-8 flex flex-wrap gap-16">
        {/* Left Section */}
        <div className="w-full md:w-2/5 ml-8 my-12">
          <h1 className="text-5xl py-6 font-bold">
            The Power of Bootstrap, The Flex of Tailwind.
          </h1>
          <p className="text-lg text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, magnam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            suscipit dicta minima, dolore dolores voluptate iusto omnis mollitia culpa,
            quod qui, pariatur ut?
          </p>
          <div className="flex flex-wrap justify-start gap-6 mt-6">
            <button className="text-xl py-4 px-6 rounded-md bg-primary text-white">
              Get started
            </button>
            <button className="text-xl py-4 px-6 rounded-md border border-white text-black">
              Documentation
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/5 ml-8 md:ml-16">
          <aside className="bg-dark text-white p-6 rounded-lg w-full max-w-lg font-mono my-12">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-danger"></div>
                <div className="w-4 h-4 rounded-full bg-warning"></div>
                <div className="w-4 h-4 rounded-full bg-success"></div>
              </div>
              <p className="text-sm text-muted">bash</p>
            </div>
            <div className="mt-4 flex flex-col gap-y-3 text-base">
              <p className="text-success">$ npm install bootwind</p>
              <p className="text-white">+ bootwind@1.0.0</p>
              <p className="text-white">added 1 package, and audited 2 packages in 3s</p>
              <p className="text-success">$</p>
            </div>
          </aside>
        </div>
      </div>

     {/* Features Section */}
{/* Features Section */}
<section className="bg-black text-white py-16 px-8">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-5xl font-bold mb-12 text-gradient bg-clip-text">Key Features</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center max-w-[1024px] mx-auto">
      {[
        { title: "⚡ Utility-first", desc: "Gain full control over styling with atomic utility classes, inspired by Tailwind.", color: "text-primary" },
        { title: "🎨 Themeable", desc: "Easily customize your theme with CSS variables for colors, spacing, and more.", color: "text-success" },
        { title: "📦 Lightweight", desc: "Minimal footprint. Only ship what you use. Easy to tree-shake and extend.", color: "text-warning" },
        { title: "⚙️ Easy Setup", desc: "Quick configuration. Works with HTML, React, Next.js, and more.", color: "text-info" },
        { title: "💥 Developer First", desc: "Built for productivity. Build fast, stay consistent, and enjoy coding.", color: "text-danger" },
        { title: "🔌 Extendable", desc: "Add your own utilities, components, and design tokens effortlessly.", color: "text-accent" },
      ].map((item, index) => (
        <div key={index} className="bg-black p-8 rounded-lg border-2 border-muted w-full max-w-[350px] mx-auto text-left transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-opacity-80 hover:border-primary">
          <h3 className={`text-3xl font-semibold mb-4 ${item.color}`}>{item.title}</h3>
          <p className="text-muted text-lg">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>



    </div>
  );
}
