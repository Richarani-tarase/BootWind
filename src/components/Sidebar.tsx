import React from "react";

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
        {
          name: "Layout & Display",
          href: "#layout-display",
          sublinks: [
            { name: "Block & Inline", href: "#block-inline" },
            { name: "Flexbox", href: "#flexbox" },
            { name: "Grid", href: "#grid" },
            { name: "Hidden & Visibility", href: "#hidden-visibility" },
            { name: "Positioning", href: "#positioning" },
            { name: "Display Flex / Grid", href: "#display-flex-grid" },
            { name: "Overflow", href: "#overflow" },
            { name: "Float", href: "#float" },
            { name: "Clear", href: "#clear" },
            { name: "Box-Sizing", href: "#box-sizing" },
          ],
        },
        {
          name: "Spacing",
          href: "#spacing",
          sublinks: [
            { name: "Margin", href: "#margin" },
            { name: "Padding", href: "#padding" },
          ],
        },
        {
          name: "Typography",
          href: "#typography",
          sublinks: [
            { name: "Font Size", href: "#font-size" },
            { name: "Font Weight", href: "#font-weight" },
            { name: "Line Height", href: "#line-height" },
            { name: "Letter Spacing", href: "#letter-spacing" },
          ],
        },
        {
          name: "Colors",
          href: "#colors",
          sublinks: [
            { name: "Background Color", href: "#background-color" },
            { name: "Text Color", href: "#text-color" },
          ],
        },
        {
          name: "Borders",
          href: "#borders",
          sublinks: [
            { name: "Border Radius", href: "#border-radius" },
            { name: "Borders", href: "#border" },
          ],
        },
        {
          name: "Shadows",
          href: "#shadows",
          sublinks: [{ name: "Box Shadows", href: "#box-shadows" }],
        },
        {
          name: "Transitions & Transforms",
          href: "#transitions-transforms",
          sublinks: [
            { name: "Transitions", href: "#transitions" },
            { name: "Transforms", href: "#transforms" },
          ],
        },
        {
          name: "Positioning & Z-Index",
          href: "#position-z-index",
          sublinks: [
            { name: "Position", href: "#position" },
            { name: "Z-Index", href: "#z-index" },
          ],
        },
        {
          name: "Text Effects",
          href: "#text-effects",
          sublinks: [
            { name: "Hover States", href: "#hover-states" },
            { name: "Text Alignment", href: "#text-alignment" },
            {
              name: "Text Decoration & Truncation",
              href: "#text-decoration-truncation",
            },
          ],
        },
        {
          name: "Miscellaneous",
          href: "#miscellaneous",
          sublinks: [
            { name: "Object Fit", href: "#object-fit" },
            { name: "List Styles", href: "#list-styles" },
            { name: "Cursor", href: "#cursor" },
            { name: "Pointer Events", href: "#pointer-events" },
            { name: "User Select", href: "#user-select" },
            { name: "Opacity", href: "#opacity" },
          ],
        },
      ],
    },
  ];

  return (
    <aside className="fixed top-0 left-0 h-100% w-100 p-6 bg-black text-white border-r border-gray-700 overflow-y-auto">
      <nav>
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold my-8 uppercase tracking-wider text-gray-300">
              {section.title}
            </h2>
            <ul className="flex flex-col gap-4 pl-2 list-none">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.href}
                    className="block p-1 rounded-md text-white text-lg hover:bg-white hover:text-black no-underline transition"
                  >
                    {link.name}
                  </a>

                  {"sublinks" in link && link.sublinks && (
                    <ul className="space-y-1 pl-6 mt-4 list-none">
                      {link.sublinks.map((sublink, sublinkIndex) => (
                        <li key={sublinkIndex}>
                          <a
                            href={sublink.href}
                            className="block p-2 rounded-md text-white text-sm hover:bg-white hover:text-black no-underline transition"
                          >
                            {sublink.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
