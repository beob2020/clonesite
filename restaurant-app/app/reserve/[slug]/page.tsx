import NavBarComponent from "@/app/components/ui/NavBarComponent";
import ReserveHeaderComponent from "@/app/reserve/[slug]/components/ReserveHeaderComponent";
import ReserveFormComponent from "@/app/reserve/[slug]/components/ReserveFormComponent";

export default function ReservePage() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBarComponent/>
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <ReserveHeaderComponent/>
            <ReserveFormComponent/>
          </div>
        </div>
      </main>
    </main>

  )
}
