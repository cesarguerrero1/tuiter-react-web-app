/*
  Cesar Guerrero
  10/31/22
  CS5610

  Assignment 7: Redux
*/

import {createSlice} from "@reduxjs/toolkit"
import tuits from "../data/tuits.json"

const tuitsSlice = createSlice({
    name: "tuits",
    initialState: tuits
});

export default tuitsSlice.reducer;