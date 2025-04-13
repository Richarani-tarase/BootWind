export default function Sidebar() {
    const sections = [
      {
        title: "Getting Started",
        links: [
          { name: "Introduction", href: "#introduction" },
          { name: "Installation", href: "#installation" },
          { name: "Usage", href: "#usage" },
        ],
      },
      {
        title: "Utilities",
        links: [
          { name: "Text Color", href: "#text-color" },
          { name: "Background Color", href: "#background-color" },
          { name: "Width", href: "#width" },
          { name: "Height", href: "#height" },
          { name: "Padding & Margin", href: "#padding-margin" },
          { name: "Flexbox", href: "#flexbox" },
          { name: "Grid", href: "#grid" },
          { name: "Border Radius", href: "#border-radius" },
          { name: "Borders", href: "#borders" },
          { name: "Hover States", href: "#hover-states" },
          { name: "Transitions", href: "#transitions" },
          { name: "Shadows", href: "#shadows" },
          { name: "Z-Index", href: "#z-index" },
          { name: "Opacity", href: "#opacity" },
          { name: "Display", href: "#display" },
          { name: "Position", href: "#position" },
          { name: "Text Alignment", href: "#text-alignment" },
          { name: "Overflow", href: "#overflow" },
        ],
      },
    ];
  
    return (
      <aside className="w-100  p-6 bg-black text-white border-r border-gray-700 overflow-y-auto">
        <nav className=" ">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold text-2xl my-8 uppercase tracking-wider text-gray-300">
                {section.title}
              </h2>
              <ul className="space-y-1 flex flex-col gap-2 pl-2 list-none">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="block p-2 rounded-md text-white text-lg  hover:bg-white hover:text-black no-underline transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    );
  }
  