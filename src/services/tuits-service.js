/*
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 11/09/22
 * 
 * Assignment 8
 */

//We want our react app to make calls to either the Node JS Server we are running OR our remote server
import axios from "axios";
const TUITS_API = 'http://localhost:4000/tuits';

export const createTuit = async(tuit) =>{
    const response = await axios.post(TUITS_API, tuit);
    //We are returning the newly created Tuit
    const newTuit = response.data;
    return newTuit;
}

export const findTuits = async() =>{
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}

export const updateTuit = async(tuit, queryValue) =>{
    const response = await axios.put(`${TUITS_API}/${tuit._id}?update=${queryValue}`, tuit);
    const data = response.data;
    if(data === 204){
        //We did not find a Tuit to update
        return undefined
    }else{
        //Return our updated Tuit
        return data;
    }
}

export const deleteTuit = async(tid) =>{
    const response = await axios.delete(`${TUITS_API}/${tid}`);
    const status = response.status;
    return status
}