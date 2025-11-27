import { cityData } from "@/data/cityData";
import CityPage from "@/pages/City";
import { notFound } from "next/navigation";

type CityRouteProps = {
  params: { citySlug: string };
};

const Page = ({ params }: CityRouteProps) => {
  const city = cityData[params.citySlug?.toLowerCase() || ""];

  if (!city) {
    return notFound();
  }

  return <CityPage city={city} />;
};

export const generateStaticParams = () =>
  Object.keys(cityData).map((slug) => ({ citySlug: slug }));

export default Page;
