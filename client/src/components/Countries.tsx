import { CountryEntry } from "../types";

interface Props {
  countries: CountryEntry[] | undefined;
}

const Countries = ({ countries }: Props) => {
  return (
    <div>
      {countries?.map((c) => (
        <div key={c.name} className="countries-box-style">
          <img src={c.flags.svg} alt={c.name} />
          <div className="country-info-style">
            <h2>{c.name}</h2>
            <div>
              <p>
                <b>Population: </b>
                {c.population}
              </p>
            </div>

            <div>
              <p>
                <b>Region: </b>
                {c.region}
              </p>
            </div>

            <div>
              <p>
                <b>Capital: </b>
                {c.capital}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countries;
