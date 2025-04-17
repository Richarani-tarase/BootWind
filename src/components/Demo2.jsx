import React from 'react'

export default function Demo2() {
  return (
    <div className='overflow-y-auto'>
      
      <div className="bg-black text-muted py-16 overflow-y-auto">
        <h1 className="text-center text-white text-5xl font-semibold mb-8">Responsive Design Examples</h1>
        <p className="text-center text-base mx-2 md:text-xl max-w-3xl mx-auto mb-12">
          Check out the responsiveness of our custom CSS classes. These utility classes help you build layouts that adapt to all screen sizes seamlessly.
        </p>

        {/* Responsive Grid Layout */}
        <div className="grid mx-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-auto">
          <div className="bg-dark p-6 rounded-lg shadow-md flex flex-col justify-between">
            <h3 className="text-2xl font-semibold mb-4 text-white">Responsive Grid</h3>
            <p className="text-lg">The grid layout changes based on screen width. On small screens, items stack vertically; on larger screens, they are displayed in multiple columns.</p>
            <pre className=" text-white p-4 rounded-md mt-4">
              <code>sm:grid-cols-1, md:grid-cols-2, lg:grid-cols-3</code>
            </pre>
          </div>

          <div className="bg-dark  p-6 rounded-lg shadow-md flex flex-col justify-between">
            <h3 className="text-2xl  font-semibold mb-4 text-white">Responsive Flexbox</h3>
            <p className="text-lg">Flexbox can also adjust the layout. On larger screens, items align horizontally, while on smaller screens, they stack vertically.</p>
            <pre className="bg-gray-800 text-white p-4 rounded-md mt-4">
              <code>sm:flex-col, md:flex-row, lg:flex-row</code>
            </pre>
          </div>

          <div className="bg-dark p-6  rounded-lg shadow-md flex flex-col justify-between">
            <h3 className="text-2xl font-semibold mb-4 text-white">Adjusting Padding</h3>
            <p className="text-lg">Padding and spacing can be adjusted at different breakpoints to create a better layout at each screen size.</p>
            <pre className="bg-gray-800 text-white p-4 rounded-md mt-4">
              <code>sm:p-4, md:p-6, lg:p-8</code>
            </pre>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-center text-4xl font-semibold mb-6 text-white">How to Use Responsive Classes</h2>
          <p className=" text-lg  mx-2 md:text-xl text-center mb-6">
            These responsive classes allow you to build layouts that are fully adaptable to various screen sizes. Here's how you can use them:
          </p>
          <ul className="list-disc text-base mx-6 md:text-xl max-w-2xl md:mx-auto space-y-4">
            <li>
              <strong className='text-info'>sm:</strong> Apply styles for small screens (640px or higher). Example: <code>sm:p-4</code> for padding.
            </li>
            <li>
              <strong className='text-info'>md:</strong> Apply styles for medium-sized screens (768px or higher). Example: <code>md:grid-cols-2</code> for a two-column grid.
            </li>
            <li>
              <strong className='text-info'>lg:</strong> Apply styles for large screens (1024px or higher). Example: <code>lg:text-xl</code> for larger text.
            </li>
            <li>
              <strong className='text-info'>xl:</strong> Apply styles for extra large screens (1280px or higher). Example: <code>xl:p-8</code> for increased padding.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
