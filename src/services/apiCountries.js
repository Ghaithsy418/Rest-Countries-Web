export async function getCountries({ filter, search }) {
  let apiUrl = "https://restcountries.com/v3.1";

  if (filter !== "all") apiUrl = `${apiUrl}/region/${filter}`;
  else {
    apiUrl = `${apiUrl}/all`;
  }

  const res = await fetch(`${apiUrl}?fields=name,flags,population,region,capital,cca3`);
  let data = await res.json();

  if (search !== "") {
    const finalSearch = search.toLowerCase();
    data = data.filter((item) =>
      item.name.common.toLowerCase().includes(finalSearch),
    );
  }

  data = data.filter((country)=> country.name.common !== "Israel")

  return data;
}

export async function getCountry({name}){
  if(name === "ISR") return null;
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${name}`);
  const data = await res.json();

  return data;
}
