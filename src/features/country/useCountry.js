import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCountry } from "../../services/apiCountries";

export function useCountry() {
  const { name } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["country", name],
    queryFn: () => getCountry({ name }),
  });

  return { data, isLoading };
}
