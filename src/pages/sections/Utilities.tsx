// src/components/Utilities.jsx
export default function Utilities() {
    return (
      <div className=" mx-auto px-6 py-10 ">
        <h1 className="text-3xl font-bold mb-8">Utilities</h1>
  
        {/* Text Color */}
        <section id="text-color" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Text Color</h2>
          <p className="text-lg text-gray-300 mb-4">
            The text color utilities allow you to change the text color using a set of predefined color classes.
          </p>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
            <code>
              {`<div class="text-primary">This is primary text</div>
  <div class="text-secondary">This is secondary text</div>`}
            </code>
          </pre>
        </section>
  
        {/* Background Color */}
        <section id="background-color" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Background Color</h2>
          <p className="text-lg text-gray-300 mb-4">
            The background color utilities allow you to set the background color of elements.
          </p>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
            <code>
              {`<div class="bg-primary">This div has a primary background color</div>
  <div class="bg-secondary">This div has a secondary background color</div>`}
            </code>
          </pre>
        </section>
  
        {/* Padding & Margin */}
        <section id="padding-margin" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Padding & Margin</h2>
          <p className="text-lg text-gray-300 mb-4">
            You can use utility classes to control the padding and margin of elements.
          </p>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
            <code>
              {`<div class="p-4">This div has padding</div>
  <div class="m-4">This div has margin</div>`}
            </code>
          </pre>
        </section>
  
        {/* Flexbox */}
        <section id="flexbox" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Flexbox</h2>
          <p className="text-lg text-gray-300 mb-4">
            Flexbox utilities help you arrange elements in a flexible layout.
          </p>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
            <code>
              {`<div class="flex justify-between">Flex items here</div>`}
            </code>
          </pre>
        </section>
  
        {/* Grid */}
        <section id="grid" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Grid</h2>
          <p className="text-lg text-gray-300 mb-4">
            The grid utilities allow you to create flexible grid layouts with ease.
          </p>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
            <code>
              {`<div class="grid grid-cols-3 gap-4">
    <div class="bg-primary">Column 1</div>
    <div class="bg-secondary">Column 2</div>
    <div class="bg-success">Column 3</div>
  </div>`}
            </code>
          </pre>
        </section>
  
        {/* Border Radius */}
        <section id="border-radius" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Border Radius</h2>
          <p className="text-lg text-gray-300 mb-4">
            Border radius utilities allow you to round the corners of elements.
          </p>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
            <code>
              {`<div class="rounded-md">This div has rounded corners</div>`}
            </code>
          </pre>
        </section>
  
        {/* Hover States */}
        <section id="hover-states" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Hover States</h2>
          <p className="text-lg text-gray-300 mb-4">
            Hover states allow you to change styles when an element is hovered over.
          </p>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
            <code>
              {`<button class="hover:bg-primary">Hover me</button>`}
            </code>
          </pre>
        </section>
      </div>
    );
  }
  