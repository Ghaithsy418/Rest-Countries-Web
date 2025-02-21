import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../../services/apiCountries";
import { useSearchParams } from "react-router-dom";

export function useCountries() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const filter = searchParams.get("filter") || "all";

  const { data, isLoading } = useQuery({
    queryKey: ["countries", search, filter],
    queryFn: () =>
      getCountries({search, filter}),
  });
  return { data, isLoading };
}
