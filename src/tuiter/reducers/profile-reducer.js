/*
  Cesar Guerrero
  11/2/22
  CS5610

  Assignment 7: Redux
*/

import {createSlice} from "@reduxjs/toolkit"

const UserInformation = {
    "firstName": "Cesar",
    "lastName": "Guerrero",
    "handle": "@Pomonakid",
    "profilePicture": "elonmuskfunny.jpeg",
    "bannerPicture": "astronaut-visor-banner.jpeg",
    "bio": "Just taking it one day at a time!",
    "website": "https://github.com/cesarguerrero1",
    "location": "Boston, MA",
    "dateOfBirth": "1995-01-04",
    "dateJoined": "November 2022",
    "tweetCount": 127831,
    "followingCount": 27,
    "followersCount": 1092123
}

const profileSlice = createSlice({
    name: "profile",
    initialState: UserInformation,
    reducers:{
      editProfile(state, action){
        const obj = action.payload;
        Object.keys(obj).forEach((key) => {
          state[key] = obj[key];
        });
        console.log(Object.entries(state));
      }
    }
});

//Exporting all of our new reducers
export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;