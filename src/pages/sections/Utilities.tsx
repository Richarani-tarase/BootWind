// src/components/Utilities.jsx

import UtilitySection from "../../components/UtilitySection";

export default function Utilities() {
  return (
    <div className=" mx-auto px-6 py-10 ">
      <h1 className="text-3xl font-bold mb-8">Utilities</h1>
      <p className="text-lg text-gray-300 mb-4">
        BootWind provides a comprehensive set of utility classes that allow you
        to control the layout, spacing, typography, colors, and more. This
        section covers the various utilities available in BootWind.</p>


      {/* Layout & Display */}
      <section
  id="layout-display"
  className="mb-12 bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
>
  <h2 className="text-2xl font-semibold mb-6 text-teal-400">Layout & Display</h2>
  <p className="text-lg text-gray-300 mb-6">
    The Layout & Display utilities provide control over the element rendering flow, structure, and spacing in your layout. These utilities help you build fluid layouts, control the visibility of elements, and manage how they are positioned on the page.
  </p>
  
  {/* Block & Inline Section */}
  <UtilitySection
    id="block-inline"
    title="Block & Inline"
    description="Classes for block-level, inline, or inline-block elements."
    code={`<div class="block">Block</div>
      <span class="inline">Inline</span>
      <span class="inline-block">Inline-block</span>`}
  />
  
  {/* Flexbox Section */}
  <UtilitySection
    id="flexbox"
    title="Flexbox"
    description="Flexbox utilities for creating flexible layouts."
    code={`<div class="flex">
      <div class="flex-1">Item 1</div>
      <div class="flex-1">Item 2</div>
      </div>`}
  />

  {/* Grid Section */}
  <UtilitySection
    id="grid"
    title="Grid"
    description="Grid utilities for column-based layouts."
    code={`<div class="grid grid-cols-3 gap-4">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      </div>`}
  />

  {/* Visibility Section */}
  <UtilitySection
    id="hidden-visibility"
    title="Hidden & Visibility"
    description="Control visibility with 'hidden' and 'invisible'."
    code={`<div class="hidden">Hidden</div>
      <div class="invisible">Invisible</div>`}
  />

  {/* Positioning Section */}
  <UtilitySection
    id="positioning"
    title="Positioning"
    description="Control element positioning (relative, absolute, fixed)."
    code={`<div class="relative">Relative</div>
      <div class="absolute top-0 left-0">Absolute</div>
      <div class="fixed top-0">Fixed</div>`}
  />

  {/* Display Flex / Grid Section */}
  <UtilitySection
    id="display-flex-grid"
    title="Display Flex / Grid"
    description="Toggle between flex and grid layouts."
    code={`<div class="flex">Flex container</div>
      <div class="grid">Grid container</div>`}
  />

  {/* Overflow Section */}
  <UtilitySection
    id="overflow"
    title="Overflow"
    description="Control content overflow behavior."
    code={`<div class="overflow-auto">Auto overflow</div>
      <div class="overflow-hidden">Hidden overflow</div>`}
  />

  {/* Float Section */}
  <UtilitySection
    id="float"
    title="Float"
    description="Float elements left or right inside a container."
    code={`<div class="float-left">Left Float</div>
      <div class="float-right">Right Float</div>`}
  />

  {/* Clear Section */}
  <UtilitySection
    id="clear"
    title="Clear"
    description="Clear floated elements."
    code={`<div class="clear-left">Clears left floats</div>
      <div class="clear-both">Clears both sides</div>`}
  />

  {/* Box Sizing Section */}
  <UtilitySection
    id="box-sizing"
    title="Box Sizing"
    description="Control the box model for sizing (box-border, box-content)."
    code={`<div class="box-border">Includes padding and border</div>
      <div class="box-content">Excludes padding and border</div>`}
  />
</section>


      {/* Spacing */}
      <section
  id="spacing"
  className="mb-12 bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
>
  <h2 className="text-2xl font-semibold mb-6 text-teal-400">Spacing</h2>
  <p className="text-lg text-gray-300 mb-6">
    Spacing utilities in Bootwind help you manage the external (margin) and
    internal (padding) spacing of elements, allowing precise layout control.
  </p>

  {/* Margin Section */}
  <UtilitySection
    id="margin"
    title="Margin"
    description="Use margin utilities to add space around elements. You can apply margin to individual sides or all sides at once."
    code={`<div class="m-4">Margin on all sides</div>
<div class="mt-2">Top margin</div>
<div class="mx-4">Horizontal margin</div>`}
  />

  {/* Padding Section */}
  <UtilitySection
    id="padding"
    title="Padding"
    description="Padding utilities let you add space inside the boundaries of an element. Just like margin, you can apply it to specific sides or uniformly."
    code={`<div class="p-4">Padding on all sides</div>
<div class="pt-2">Top padding</div>
<div class="px-4">Horizontal padding</div>`}
  />
</section>


{/* Typography */}
<section
  id="typography"
  className="mb-12 bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
>
  <h2 className="text-2xl font-semibold mb-6 text-teal-400">Typography</h2>
  <p className="text-lg text-gray-300 mb-6">
    Typography utilities in Bootwind control the textual appearance such as
    size, weight, line height, and letter spacing to improve readability and
    design consistency.
  </p>

  {/* Font Size Section */}
  <UtilitySection
    id="font-size"
    title="Font Size"
    description="Adjust text size using predefined font size classes."
    code={`<p class="text-sm">Small Text</p>
<p class="text-base">Base Text</p>
<p class="text-xl">Extra Large Text</p>`}
  />

  {/* Font Weight Section */}
  <UtilitySection
    id="font-weight"
    title="Font Weight"
    description="Control the thickness of the text using font weight utilities."
    code={`<p class="font-light">Light Text</p>
<p class="font-normal">Normal Weight</p>
<p class="font-bold">Bold Text</p>`}
  />

  {/* Line Height Section */}
  <UtilitySection
    id="line-height"
    title="Line Height"
    description="Modify the vertical spacing between lines using line height utilities."
    code={`<p class="leading-tight">Tight line height</p>
<p class="leading-normal">Normal line height</p>
<p class="leading-loose">Loose line height</p>`}
  />

  {/* Letter Spacing Section */}
  <UtilitySection
    id="letter-spacing"
    title="Letter Spacing"
    description="Adjust the space between characters using letter spacing utilities."
    code={`<p class="tracking-tight">Tight spacing</p>
<p class="tracking-normal">Normal spacing</p>
<p class="tracking-wide">Wide spacing</p>`}
  />
</section>



      {/* Colors */}
      <section
  id="colors"
  className="mb-12 bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
>
  <h2 className="text-2xl font-semibold mb-6 text-teal-400">Colors</h2>
  <p className="text-lg text-gray-300 mb-6">
    The color utilities allow you to control the text color and background
    color with predefined color classes. This helps enhance the visual
    hierarchy and accessibility of your content.
  </p>

  {/* Text Color Section */}
  <UtilitySection
    id="text-color"
    title="Text Color"
    description="The text color utilities allow you to change the text color using a set of predefined color classes."
    code={`<div class="text-primary">This is primary text</div>
<div class="text-secondary">This is secondary text</div>`}
  />

  {/* Background Color Section */}
  <UtilitySection
    id="background-color"
    title="Background Color"
    description="The background color utilities allow you to change the background color of elements."
    code={`<div class="bg-primary">This has a primary background</div>
<div class="bg-secondary">This has a secondary background</div>`}
  />
</section>

{/* Borders */}
<section
  id="borders"
  className="mb-12 bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
>
  <h2 className="text-2xl font-semibold mb-6 text-teal-400">Borders</h2>
  <p className="text-lg text-gray-300 mb-6">
    The borders utility allows you to manage the borders of elements, including adding radius and controlling border styles. This helps create visually appealing components with defined boundaries.
  </p>

  {/* Border Radius Section */}
  <UtilitySection
    id="border-radius"
    title="Border Radius"
    description="The border-radius utilities allow you to round the corners of elements. You can apply different radius values to create circular, oval, or soft square shapes."
    code={`<div class="rounded">This is a div with rounded corners</div>
<div class="rounded-lg">This is a div with larger rounded corners</div>`}
  />

  {/* Borders Section */}
  <UtilitySection
    id="border"
    title="Borders"
    description="The border utilities allow you to set the border width, color, and style of an element. You can apply borders on all sides or specific sides (top, right, bottom, left)."
    code={`<div class="border">This div has a border</div>
<div class="border-2 border-solid border-primary">This div has a solid primary border</div>`}
  />
</section>



      {/* Shadows */}
      <section
  id="shadows"
  className="mb-12 bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
>
  <h2 className="text-2xl font-semibold mb-6 text-teal-400">Shadows</h2>
  <p className="text-lg text-gray-300 mb-6">
    The shadows utility allows you to apply shadow effects to elements. Shadows can add depth and visual interest to components, making them stand out on the page.
  </p>

  {/* Box Shadows Section */}
  <UtilitySection
    id="box-shadows"
    title="Box Shadows"
    description="The box-shadow utilities let you apply different types of shadow effects to elements. These include regular shadows, inset shadows, and various sizes for more depth."
    code={`<div class="shadow">This is a div with a regular shadow</div>
<div class="shadow-lg">This is a div with a large shadow</div>
<div class="shadow-md">This is a div with a medium shadow</div>`}
  />
</section>



<section
  id="transitions-transforms"
  className="mb-12 bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
>
  <h2 className="text-2xl font-semibold mb-6 text-teal-400">Transitions & Transforms</h2>
  <p className="text-lg text-gray-300 mb-6">
    The transitions and transforms utilities allow you to add smooth animations and effects to elements. Transitions provide a smooth change between states, while transforms allow for manipulation of element position, rotation, scaling, and more.
  </p>

  {/* Transitions Section */}
  <UtilitySection
    id="transitions"
    title="Transitions"
    description="Transitions enable smooth changes between properties when elements change states, like hover or focus. You can control the duration, delay, and which properties are affected."
    code={`<div class="transition-all duration-500 ease-in-out">Hover over me to see a smooth transition</div>`}
  />

  {/* Transforms Section */}
  <UtilitySection
    id="transforms"
    title="Transforms"
    description="Transforms allow you to manipulate elements by rotating, scaling, translating, or skewing. The transforms utility in Tailwind CSS makes it easy to apply these effects."
    code={`<div class="transform rotate-45">This div is rotated 45 degrees</div>
<div class="transform scale-150">This div is scaled to 150%</div>`}
  />
</section>

{/* Positioning & Z-Index */}
<section
  id="position-z-index"
  className="mb-12 bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
>
  <h2 className="text-2xl font-semibold mb-6 text-teal-400">Positioning & Z-Index</h2>
  <p className="text-lg text-gray-300 mb-6">
    The positioning and z-index utilities allow you to control the positioning behavior and stacking order of elements. Use these to place elements exactly where you want on the page or within a container.
  </p>

  {/* Position Section */}
  <UtilitySection
    id="position"
    title="Position"
    description="The position utility allows you to set the position property of an element. Common values are `static`, `relative`, `absolute`, `fixed`, and `sticky`."
    code={`<div class="relative">This element is positioned relative</div>
<div class="absolute top-0 right-0">This element is positioned absolute</div>`}
  />

  {/* Z-Index Section */}
  <UtilitySection
    id="z-index"
    title="Z-Index"
    description="The z-index utility controls the stacking order of elements. Higher z-index values place elements in front of those with lower z-index values. Use this when you need elements to overlap or layer."
    code={`<div class="z-10">This element has a z-index of 10</div>
<div class="z-20">This element has a z-index of 20 and will appear above the previous element</div>`}
  />
</section>

{/* Text Effects */}
<section
  id="text-effects"
  className="mb-12 bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
>
  <h2 className="text-2xl font-semibold mb-6 text-teal-400">Text Effects</h2>
  <p className="text-lg text-gray-300 mb-6">
    The text effects utilities allow you to modify and style text in various ways, including applying hover effects, text alignment, and text truncation.
  </p>

  {/* Hover States Section */}
  <UtilitySection
    id="hover-states"
    title="Hover States"
    description="The hover states utility applies styles when the element is hovered over. It’s useful for creating interactive elements such as buttons or links."
    code={`<button class="hover:bg-blue-500">Hover over me</button>`}
  />

  {/* Text Alignment Section */}
  <UtilitySection
    id="text-alignment"
    title="Text Alignment"
    description="The text alignment utility controls the horizontal alignment of text within an element. It includes options for left, center, right, and justify."
    code={`<p class="text-left">Left aligned text</p>
<p class="text-center">Center aligned text</p>
<p class="text-right">Right aligned text</p>`}
  />

  {/* Text Decoration & Truncation Section */}
  <UtilitySection
    id="text-decoration-truncation"
    title="Text Decoration & Truncation"
    description="This utility combines both text decoration (such as underlining) and truncating text that overflows its container with an ellipsis."
    code={`<p class="line-through">This text is underlined</p>
<p class="truncate">This text will be truncated with ellipsis if it overflows</p>`}
  />
</section>

{/* Miscellaneous */}
<section
  id="miscellaneous"
  className="mb-12 bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
>
  <h2 className="text-2xl font-semibold mb-6 text-teal-400">Miscellaneous</h2>
  <p className="text-lg text-gray-300 mb-6">
    The miscellaneous utilities include a variety of helpful tools to fine-tune specific aspects of an element's behavior and appearance.
  </p>

  {/* Object Fit Section */}
  <UtilitySection
    id="object-fit"
    title="Object Fit"
    description="The object-fit utility defines how an element's content is resized to fit its container. It works with elements like images or videos."
    code={`<img src="image.jpg" class="object-cover" alt="image">`}
  />

  {/* List Styles Section */}
  <UtilitySection
    id="list-styles"
    title="List Styles"
    description="The list styles utility helps you modify the appearance of list items, such as removing the default list-style or setting custom styles for list markers."
    code={`<ul class="list-none">
  <li>No bullet point</li>
</ul>`}
  />

  {/* Cursor Section */}
  <UtilitySection
    id="cursor"
    title="Cursor"
    description="The cursor utility changes the type of cursor to display when the user hovers over an element. Common cursor types include pointer, default, and text."
    code={`<div class="cursor-pointer">Hover over me</div>`}
  />

  {/* Pointer Events Section */}
  <UtilitySection
    id="pointer-events"
    title="Pointer Events"
    description="The pointer-events utility controls how an element responds to mouse or touch events. You can disable or enable interaction with the element."
    code={`<div class="pointer-events-none">This element doesn't react to pointer events</div>`}
  />

  {/* User Select Section */}
  <UtilitySection
    id="user-select"
    title="User Select"
    description="The user-select utility controls whether or not the user can select text within an element. This can be useful for preventing selection in certain UI components."
    code={`<div class="select-none">You can't select this text</div>`}
  />

  {/* Opacity Section */}
  <UtilitySection
    id="opacity"
    title="Opacity"
    description="The opacity utility controls the transparency of an element. You can set it to values between 0 (fully transparent) and 100 (fully opaque)."
    code={`<div class="opacity-50">This element is semi-transparent</div>`}
  />
</section>
    </div>
  );
}