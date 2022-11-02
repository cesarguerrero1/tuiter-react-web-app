/*
  Cesar Guerrero
  10/31/22
  CS5610

  Assignment 7: Redux
*/

import {createSlice} from "@reduxjs/toolkit"
import tuits from "../data/tuits.json"

//We are baking in some defaults for the person posting a Tuit
const currentUser={
    "userName": "NASA",
    "userHandle": "@nasa",
    "image": "nasa.jpeg"
}

//Default Template
const templateTuit = {
    "topic": "Space",
    ...currentUser,
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0
}

const tuitsSlice = createSlice({
    name: "tuits",
    initialState: tuits,
    reducers:{
      createTuit(state, action){
          state.unshift({
            _id: ((new Date()).getTime()),
            ...templateTuit,
            ...action.payload
          })
      }
    }
});

//Exporting all of our new reducers
export const {createTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;