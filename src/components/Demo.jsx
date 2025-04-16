import React from 'react'

export default function Demo() {
  return (
    <div>
      <div className="bg-black text-white py-16">
        <h1 className="text-center text-5xl font-semibold mb-8">Easy to Use Custom CSS Library</h1>
        <p className="text-center text-xl max-w-3xl mx-auto mb-12">
          Discover a range of beautifully crafted colors from our custom CSS library. These colors are designed to
          enhance your design system and provide an elegant, modern touch to your web applications. Below are the color
          options you can easily apply to your elements using utility classes.
        </p>

        <div className="grid mx-12 py-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Color Boxes */}
          <div className="bg-danger py-6 px-4 rounded-md text-xl text-white text-center shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="font-semibold">Danger</h3>
            <p>Use for critical warnings or errors.</p>
          </div>
          <div className="bg-success py-6 px-4 rounded-md text-xl text-white text-center shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="font-semibold">Success</h3>
            <p>Perfect for positive actions or confirmations.</p>
          </div>
          <div className="bg-primary py-6 px-4 rounded-md text-xl text-white text-center shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="font-semibold">Primary</h3>
            <p>Used for main actions or highlights.</p>
          </div>
          <div className="bg-secondary py-6 px-4 rounded-md text-xl text-white text-center shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="font-semibold">Secondary</h3>
            <p>A complementary color for less important actions.</p>
          </div>
          <div className="bg-warning py-6 px-4 rounded-md text-xl text-white text-center shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="font-semibold">Warning</h3>
            <p>Ideal for indicating caution or attention.</p>
          </div>
          <div className="bg-accent py-6 px-4 rounded-md text-xl text-white text-center shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="font-semibold">Accent</h3>
            <p>Great for adding emphasis or a pop of color.</p>
          </div>
          <div className="bg-info py-6 px-4 rounded-md text-xl text-white text-center shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="font-semibold">Info</h3>
            <p>Use for informational messages or notes.</p>
          </div>
          <div className="bg-dark py-6 px-4 rounded-md text-xl text-white text-center shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="font-semibold">Dark</h3>
            <p>Perfect for backgrounds or dark-themed UI elements.</p>
          </div>
        </div>

      
      </div>
    </div>
  )
}
