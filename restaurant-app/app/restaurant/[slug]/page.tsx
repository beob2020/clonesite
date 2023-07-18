import NavBarComponent from "@/app/components/ui/NavBarComponent";
import RestaurantHeaderComponent from "@/app/restaurant/[slug]/Components/RestaurantHeaderComponent";
import RestaurantNavBarComponent from "@/app/restaurant/[slug]/Components/RestaurantNavBarComponent";
import RestaurantTitleComponent from "@/app/restaurant/[slug]/Components/RestaurantTitleComponent";
import RestaurantRatingComponent from "@/app/restaurant/[slug]/Components/RestaurantRatingComponent";
import RestaurantDescriptionComponent from "@/app/restaurant/[slug]/Components/RestaurantDescriptionComponent";
import RestaurantImageComponent from "@/app/restaurant/[slug]/Components/RestaurantImageComponent";
import RestaurantReviewsComponent from "@/app/restaurant/[slug]/Components/RestaurantReviewsComponent";
import RestaurantReservationComponent from "@/app/restaurant/[slug]/Components/RestaurantReservationComponent";

export default function RestaurantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBarComponent/>
        <RestaurantHeaderComponent/>
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavBarComponent/>
            <RestaurantTitleComponent/>
            <RestaurantRatingComponent/>
            <RestaurantDescriptionComponent/>
            <RestaurantImageComponent/>
            <RestaurantReviewsComponent/>
          </div>
          <RestaurantReservationComponent/>
        </div>
      </main>
    </main>
  );
}
