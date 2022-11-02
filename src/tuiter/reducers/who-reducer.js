/*
  Cesar Guerrero
  10/31/22
  CS5610

  Assignment 7: Redux
*/

//Remember create slice allows us to create CRUD operations for our reducer
import {createSlice } from "@reduxjs/toolkit"
import whoArray from "../data/who.json";

const whoSlice = createSlice({
    name: "who",
    initialState: whoArray,
    //No need to include any functions becuase this is read only
})

export default whoSlice.reducer;