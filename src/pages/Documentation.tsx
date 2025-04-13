import Sidebar from "../components/Sidebar";
import GettingStarted from "./sections/GettingStarted";
import Utilities from "./sections/Utilities"; // Import the Utilities component

export default function Documentation() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Getting Started Section */}
        <GettingStarted />

        {/* Utilities Section */}
        <Utilities />
      </main>
    </div>
  );
}
