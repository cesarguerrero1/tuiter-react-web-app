/*
  Cesar Guerrero
  11/2/22
  CS5610

  Assignment 7: Redux
*/

import {createSlice} from "@reduxjs/toolkit"

const initialUserInformation = {
    "firstName": "Cesar",
    "lastName": "Guerrero",
    "handle": "@Pomonakid",
    "profilePicture": "elonmuskfunny.jpeg",
    "bannerPicture": "astronaut-visor.jpeg",
    "bio": "Just taking it one day at a time!",
    "website": "https://github.com/cesarguerrero1",
    "location": "Boston, MA",
    "dateOfBirth": "1/1/1995",
    "dataJoined": "11/2022",
    "followingCount": 27,
    "followersCount": 1092123
}

const profileSlice = createSlice({
    name: "profile",
    initialState: initialUserInformation,
    reducers:{
    }
});

//Exporting all of our new reducers
export default profileSlice.reducer;