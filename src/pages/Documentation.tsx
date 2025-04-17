import Sidebar from "../components/Sidebar";
import GettingStarted from "./sections/GettingStarted";
import Utilities from "./sections/Utilities"; // Import the Utilities component

export default function Documentation() {
  return (
    <div className="flex h-screen">
      
        <Sidebar />
  
      <main className="flex-1 overflow-y-auto">
        <GettingStarted />

        <Utilities />
      </main>
      </div>
  );
}
