import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { FetchCountries } from "../hooks";

export function Layout() {
  const { isError, isLoading } = FetchCountries();
  return (
    <div className="min-h-screen w-screen max-w-full bg-gray-100 font-inter dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto px-5 md:px-0">
        {isError && <p>Something went wrong!</p>}
        {isLoading && <p>Loading countries data...</p>}
        {!isError && !isLoading && <Outlet />}
      </div>
    </div>
  );
}
