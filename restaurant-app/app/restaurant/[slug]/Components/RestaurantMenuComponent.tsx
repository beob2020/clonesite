import React from 'react'
import RestaurantMenuCardComponent from "@/app/restaurant/[slug]/Components/RestaurantMenuCardComponent";

export default function RestaurantMenuComponent() {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
         <RestaurantMenuCardComponent/>
        </div>
      </div>
    </main>
  )
}
