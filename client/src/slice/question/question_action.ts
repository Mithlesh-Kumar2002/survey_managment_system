import { createAsyncThunk } from "@reduxjs/toolkit";
import type { FieldValues } from "react-hook-form";
import get_question_type_service from "@/services/question_type/get_question_type";
import post_question_type_service from "@/services/question_type/post_question_type";
import { post_question_type,get_question_type } from "./question_type";
import get_question_service from "@/services/question_service/get_question";
import post_question_service from "@/services/question_service/post_question";
export const create_question = createAsyncThunk(
 post_question_type,
  async (question:{description:string,abbr:string,question_type_id:number,active:boolean}, { rejectWithValue }) => {
    try {
      // console.log("Slice wala teststssss",test);
      const response = await post_question_service(question)
      const data = response?.data;
      console.log("data car added from slice===",data);
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

export const get_question = createAsyncThunk(
  get_question_type,
  async (_, { rejectWithValue }) => {
    try {
      const response = await get_question_service();
      console.log('Response===========slice Question',response);
      return response;
    } catch (err) {
      console.log("error In getting  question Yype")
      return rejectWithValue(err);
    }
  }
);