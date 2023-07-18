import Link from "next/link";

export default function RestaurantNavBarComponent() {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href="/restaurant/milestones-grill" className="mr-7"> Overview </Link>
      <Link href="/restaurant/menu" className="mr-7"> Menu </Link>
    </nav>
    );
}
