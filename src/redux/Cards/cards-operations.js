import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/photos";

export const getAllCards = createAsyncThunk();
