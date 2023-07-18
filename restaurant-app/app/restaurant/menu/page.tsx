import NavBarComponent from "@/app/components/ui/NavBarComponent";
import HeaderComponent from "@/app/components/ui/HeaderComponent";
import RestaurantMenuComponent from "@/app/restaurant/[slug]/Components/RestaurantMenuComponent";
import RestaurantNavBarComponent from "@/app/restaurant/[slug]/Components/RestaurantNavBarComponent";

export default function RestaurantMenuPage() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBarComponent/>
        <HeaderComponent/>
        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantNavBarComponent/>
            <RestaurantMenuComponent/>
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  )
}
