import NavBarComponent from "@/app/components/ui/NavBarComponent";
import SearchHeaderComponent from "@/app/search/components/ui/SearchHeaderComponent";
import SearchSideBarComponent from "@/app/search/components/ui/SearchSideBarComponent";
import SearchCardComponent from "@/app/search/components/ui/SearchCardComponent";

export default function SearchPage() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBarComponent/>
        <SearchHeaderComponent/>
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SearchSideBarComponent/>
          <div className="w-5/6">
            <SearchCardComponent/>
          </div>
        </div>
      </main>
    </main>

  );
}
