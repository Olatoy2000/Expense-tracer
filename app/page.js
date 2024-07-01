import { Button } from "@/components/ui/button";
import Header from "./_components/Header";
import Hero from "./_components/Hero";


export const metadata = {
  title: {
    absolute: "Home Page | Expense Tracker"
  },
  description: "",
}

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
