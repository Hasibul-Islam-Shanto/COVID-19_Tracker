import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@mui/material";
import { Countries } from "../api/api";

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const countryApi = async () => {
      setCountries(await Countries());
    };
    countryApi();
  }, [setCountries]);

  return (
    <>
      <FormControl sx={{ marginTop: "1rem", width: "40%" }}>
        <NativeSelect
          sx={{ padding: ".2rem" }}
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="global"> Global </option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </>
  );
};

export default CountryPicker;
