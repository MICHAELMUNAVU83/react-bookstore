import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getBooksApi =createAsyncThunk('created', async ()=>{
  const getComment = await axios.get(
    "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jSMjZ6S2cXk83xcKQ4qa/books"
  ).catch((err)=>{
    console.log("error", err)
  });
  const res = getComment.data
  const lapa = Object.keys(res).map(key=>(
    {
      id:key,
      ...res[key][0]
    }
  ))
  return lapa

 
})

export const addBooksApi = createAsyncThunk('adding books', async (payload, thunkAPI)=>{

  const gotBooks = await axios.post("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jSMjZ6S2cXk83xcKQ4qa/books",{
    item_id: payload.id,
    title: payload.title,
		author: payload.author,
    category: "Fiction"
  }).
  then(() => thunkAPI.dispatch(getBooksApi())).
  catch((err) => { console.log('Error', err); });
  const books = thunkAPI.getState().books
  return books;
  

})
export const removeApi = createAsyncThunk('remove', async( id,  thunkAPI)=>{
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jSMjZ6S2cXk83xcKQ4qa/books/${id}`)
  .then(() => thunkAPI.dispatch(getBooksApi()))
  .catch((err) => { console.log('Error', err); });
const books = thunkAPI.getState().books;
return books;
    



})

const initialState = [];

const bookSlice = createSlice({
  name: "books",
  initialState,
  extraReducers:{
    [getBooksApi.fulfilled]:(state,action)=>{
      return (action.payload)
    },
    [addBooksApi.fulfilled]:(state,action)=>{
      
      return  (action.payload)
    },
    [removeApi.fulfilled]:(state,action)=>{
      return action.payload
     

    }
  }

});
export const { addBook , deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
