import React, { useState, useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Selects() {
  const [dropdownValues, setDropdownValues] = useState([]);
  const [eachDropdownValue, setEachDropdownValue] = useState(
    localStorage.getItem("eachDropdownValue") || ""
  );

  localStorage.setItem("eachDropdownValue", eachDropdownValue);

  const handleChange = (e) => {
    setEachDropdownValue(e.target.value);
  };

  //http request
  useEffect(() => {
    const fetchSelectValues = async () => {
      const response = await fetch(
        "https://resume.redberryinternship.ge/api/degrees"
      );
      const data = await response.json();
      setDropdownValues(data);
    };
    fetchSelectValues();
  }, []);

  return (
    <>
      <FormControl sx={{ mt: 7, width: 371 }}>
        <InputLabel id="multiple-quality">აირჩიეთ ხარისხი</InputLabel>
        <Select
          labelId="multiple-quality"
          id="multiple-quality"
          defaultValue=""
          value={eachDropdownValue}
          onChange={handleChange}
          input={<OutlinedInput label="აირჩიეთ ხარისხი" />}>
          {dropdownValues.map((dropdownValue) => (
            <MenuItem key={dropdownValue.id} value={dropdownValue.title}>
              {dropdownValue.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
