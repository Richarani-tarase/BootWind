import React, { useState } from "react";

export default function Sidebar() {
  const [collapsedSubsections, setCollapsedSubsections] = useState<{
    [key: string]: boolean;
  }>({
    "Layout & Display": true,
    Spacing: true,
    Typography: true,
    Colors: true,
    Borders: true,
    Shadows: true,
    "Transitions & Transforms": true,
    "Positioning & Z-Index": true,
    "Text Effects": true,
    Miscellaneous: true,
  });

  const toggleSubsectionCollapse = (title: string) => {
    setCollapsedSubsections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

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
    <aside className="h-100% fixed w-100 p-6 bg-black text-white border-r border-gray-700 overflow-y-auto">
      <nav>
        <div className="sticky top-0">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold text-xl my-8 uppercase tracking-wider text-gray-300">
              {section.title}
            </h2>
            <ul className="space-y-1 flex flex-col gap-4 pl-2 list-none">
              {section.links.map((link, linkIndex) => (
                <div key={linkIndex}>
                  {!link.sublinks ? (
                    <li>
                      <a
                        href={link.href}
                        className="block p-1 rounded-md text-white text-lg hover:bg-white hover:text-black no-underline transition"
                      >
                        {link.name}
                      </a>
                    </li>
                  ) : (
                    <>
                      <li
                        className="block p-1 rounded-md text-white text-lg hover:bg-white hover:text-black no-underline transition cursor-pointer font-semibold"
                        onClick={() => toggleSubsectionCollapse(link.name)}
                      >
                        {link.name}
                      </li>

                      {!collapsedSubsections[link.name] && (
                        <ul className="space-y-1 pl-8 list-none">
                          {link.sublinks.map((sublink, sublinkIndex) => (
                            <li key={sublinkIndex}>
                              <a
                                href={sublink.href}
                                className="block p-2 rounded-md text-white text-xs hover:bg-white hover:text-black no-underline transition"
                              >
                                {sublink.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </div>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </nav>
    </aside>
  );
}
