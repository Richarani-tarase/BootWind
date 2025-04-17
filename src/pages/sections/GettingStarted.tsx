export default function GettingStarted() {
  return (
    <div className="mx-auto px-6 py-10">
      {/* Introduction */}
      <section id="introduction" className="mb-12 bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
        <h1 className="text-3xl font-bold text-teal-400 mb-6">Introduction</h1>
        <p className="text-40 text-gray-300 mb-4">
          BootWind is a modern, utility-first CSS framework designed to help developers quickly build beautiful, responsive user interfaces.
          Inspired by Tailwind CSS, BootWind focuses on providing a clean and customizable utility set that works right out of the box. Whether you're building a personal project, a full-fledged web application, or just experimenting with new ideas, BootWind has the flexibility to grow with your needs.
        </p>
        <p className="text-40 text-gray-300 mb-4">
          The core philosophy behind BootWind is to give you full control over your layout and design without having to write custom CSS for every component. With utilities that span from spacing and typography to colors and shadows, you can style your elements directly in your markup and focus on creating functionality rather than wasting time tweaking styles.
        </p>
        <p className="text-40 text-gray-300 mb-4">
          This approach allows developers to work faster and more efficiently. BootWind provides a responsive grid system, utility classes, and various components that you can combine to create any type of design. The utility-first approach promotes code clarity and reusability, making your projects easier to maintain.
        </p>
        <p className="text-40 text-gray-300 mb-4">
          One of the most powerful features of BootWind is its flexibility. You can easily customize the framework to fit your needs through its extensive configuration options. From defining custom breakpoints to adjusting the default colors and spacing, BootWind can be tailored to suit any design system.
        </p>
        <p className="text-40 text-gray-300 mb-4">
          BootWind was built with scalability in mind. As your project grows, you can rest assured that BootWind will continue to provide the tools you need to build high-quality, consistent UIs without overwhelming you with excessive boilerplate code.
        </p>
      </section>

      {/* Installation */}
      <section id="installation" className="mb-12 bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Installation</h2>
        <p className="text-lg text-gray-300 mb-4">
          To integrate BootWind into your project, you'll need to install it via NPM or Yarn. This will allow you to benefit from full integration into your build system and customization options. Follow the steps below to get started.
        </p>

        <h3 className="text-xl font-semibold text-teal-400 mt-6 mb-2">🔧 Option 1: NPM</h3>
        <pre className="bg-gray-100 text-sm text-gray-800 p-4 rounded overflow-x-auto">
          <code>npm install bootwind</code>
        </pre>

        <p className="text-sm text-gray-600 mt-2">
          Then import it in your main CSS or JS file:
        </p>
        <pre className="bg-gray-100 text-sm text-gray-800 p-4 rounded overflow-x-auto">
          <code>{'@import "bootwind";'}</code>
        </pre>
      </section>

      {/* Usage */}
      <section id="usage" className="mb-12 bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Usage</h2>
        <p className="text-lg text-gray-300 mb-4">
          BootWind classes follow a utility-first convention. Here's a simple example of how to use them:
        </p>
        <pre className="p-4 rounded-lg overflow-x-auto shadow-lg bg-gray-100">
          <code className="text-sm text-gray-800">
            {'<button class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark">\n  Click Me\n</button>'}
          </code>
        </pre>
        <p className="text-sm text-gray-600 mt-2">
          This button will have a primary background color, white text, padding, rounded corners, and a hover effect.
        </p>
      </section>
    </div>
  );
}
