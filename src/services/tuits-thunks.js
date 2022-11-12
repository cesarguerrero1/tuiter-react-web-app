/*
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 11/09/22
 * 
 * Assignment 8
 */

import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./tuits-service.js";

export const findTuitsThunk = createAsyncThunk('tuits/findTuits', async() => {
    return await service.findTuits();
})

export const deleteTuitThunk = createAsyncThunk('tuits/deleteTuit', async(tid) =>{
    await service.deleteTuit(tid);
    return tid;
})

export const createTuitThunk = createAsyncThunk('tuits/createTuit', async(tuit) => {
    return await service.createTuit(tuit);
})

export const updateTuitThunk = createAsyncThunk('tuits/updateTuit', async(inputArray) => {
    let tuit = inputArray[0];
    let queryValue = inputArray[1];
    return await service.updateTuit(tuit, queryValue);
})