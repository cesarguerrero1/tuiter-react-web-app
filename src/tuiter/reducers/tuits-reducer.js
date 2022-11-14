/*
  Cesar Guerrero
  10/31/22
  CS5610

  Assignment 7: Redux
  UPDATED ON 11/13/22 FOR ASSIGNMENT 9 - MONGO
*/

import {createSlice} from "@reduxjs/toolkit"
import { deleteTuitThunk, findTuitsThunk, createTuitThunk, updateTuitThunk } from "../../services/tuits-thunks.js"

//We ere baking in Tuits but since we are loading from the server we comment this out

const initialState = {
  tuits: [],
  loading: false
}

const tuitsSlice = createSlice({
    name: "tuits",
    initialState: initialState,

    //Asynchronous Reducers
    extraReducers:{
      //Reducers for finding all Tuits
      [findTuitsThunk.pending]: (state) => {
          state.loading = true
          state.tuits = []
      },
      [findTuitsThunk.fulfilled]: (state, action) => {
          state.loading = false
          state.tuits = action.payload
      },
      [findTuitsThunk.rejected]: (state) => {
          state.loading = false
      },
      //Reducers for deleting a given Tuit
      [deleteTuitThunk.fulfilled]: (state, action) => {
          state.loading = false
          //Return only the tuits that do not match our ID
          state.tuits = state.tuits.filter((tuit) => {return tuit._id !== action.payload})
      },
      //Reducers for creating a given Tuit
      [createTuitThunk.fulfilled]: (state, action) => {
        state.loading = false;
        state.tuits.push({
          ...action.payload
        })
      },
      //Reducers for update a given Tuit
      [updateTuitThunk.fulfilled]: (state, action) => {
          const newTuit = action.payload;

          //Find the index!
          if(action.payload){
              let index = state.tuits.findIndex((tuit) => {
                return tuit._id === newTuit._id;
              });

              state.tuits[index] = {
                  ...state.tuits[index],
                  ...newTuit
              }
          }
      }
    }
});

//Exporting all of our new reducers
export default tuitsSlice.reducer;