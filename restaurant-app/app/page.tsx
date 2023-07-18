import Link from "next/link";
import NavBarComponent from "@/app/components/ui/NavBarComponent";
import HeaderComponent from "@/app/components/ui/HeaderComponent";
import CardComponent from "@/app/components/ui/CardComponent";


export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBarComponent/>
        <main>
          <HeaderComponent/>
            <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
              <CardComponent/>
            </div>
        </main>
      </main>
    </main>

  );
}
