import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <Image
        src="/expense-resize.jpg"
        width={160}
        height={100}
        alt="Expense Tracker Logo"
      />
      <Button>Get Started</Button>
    </div>
    
  );
};

export default Header;
