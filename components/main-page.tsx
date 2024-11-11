"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import ShiftsComponent from "./ShiftsComponent";
import FloorsComponent from "./FloorsComponent";
import ProceduresComponent from "./Procedures";

// Main Component
export function MainPage() {
  const [activeComponent, setActiveComponent] = useState<
    "floors" | "shifts" | "procedures"
  >("floors");

  return (
    <div className="h-screen flex flex-col" dir="rtl">
      <nav className="bg-secondary p-4">
        <div className="container mx-auto flex justify-center space-x-4">
          <Button
            variant={activeComponent === "floors" ? "default" : "ghost"}
            onClick={() => setActiveComponent("floors")}
          >
            קומות
          </Button>
          <Button
            variant={activeComponent === "shifts" ? "default" : "ghost"}
            onClick={() => setActiveComponent("shifts")}
          >
            משמרות
          </Button>
          <Button
            variant={activeComponent === "procedures" ? "default" : "ghost"}
            onClick={() => setActiveComponent("procedures")}
          >
            נהלים
          </Button>
        </div>
      </nav>
      <main className="flex-grow overflow-hidden">
        {activeComponent === "floors" && <FloorsComponent />}
        {activeComponent === "shifts" && <ShiftsComponent />}
        {activeComponent === "procedures" && <ProceduresComponent />}
      </main>
    </div>
  );
}
