import React, { useState } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function SearchBar({ handleSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Grid container style={{ margin: "20px" }} spacing={5}>
      <TextField
        style={{ width: "40rem" }}
        id="outlined-basic"
        label="Search Videos"
        variant="outlined"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <Button
        variant="outlined"
        endIcon={<SearchOutlinedIcon />}
        onClick={() => {
          handleSubmit(searchTerm);
        }}
      >
        Search
      </Button>
    </Grid>
  );
}

export default SearchBar;
