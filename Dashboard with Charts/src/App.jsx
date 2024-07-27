import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="w-screen h-screen bg-neutral-100 overflow-hidden">
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
