export default function Footer() {
  return (
    <div className="bg-dark">
      <div className="text-white flex flex-col md:flex-row justify-between p-6">
        {/* Left Section */}
        <div>
          <p className="text-lg">© 2025 BootWind. All Rights Reserved.</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row mt-4 md:mt-0">
          <p className="p-2 text-lg">About</p>
          <p className="p-2 text-lg">Private Policy</p>
          <p className="p-2 text-lg">Licence</p>
          <p className="p-2 text-lg">Contact</p>
        </div>
      </div>
    </div>
  )
}
