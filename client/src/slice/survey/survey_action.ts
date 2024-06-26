import { createAsyncThunk } from "@reduxjs/toolkit";
import type { FieldValues } from "react-hook-form";
import get_question_service from "@/services/question_service/get_question";
import post_question_service from "@/services/question_service/post_question";
import { get_survey_type, post_survey_type, put_survey_type, update_survey_type } from "./survey_type";
import post_survey_type_service from "@/services/survey_type_service/post_survey_type";
import get_survey_service from "@/services/survey_service/get_survey_service";
import post_survey_service from "@/services/survey_service/post_survey_service";
import put_survey_service from "@/services/survey_service/put_survey_service";
import update_survey_service from "@/services/survey_service/update_survey_service";
import axios from "axios";
export const create_survey = createAsyncThunk(
 post_survey_type,
  async (survey:{name:string,abbr:string,survey_type_id:number,is_published:boolean,options:{modality:string,languages:string}}, { rejectWithValue }) => {
    try {
      // console.log("Slice wala teststssss",test);
      const response = await post_survey_service(survey);
      const data = response?.data;
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const get_survey = createAsyncThunk(
  get_survey_type,
  async (_, { rejectWithValue }) => {
    try {
      const response = await get_survey_service();
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const update_survey = createAsyncThunk(
  put_survey_type,
  async ( survey: { id: number, is_published:boolean}, { rejectWithValue }) => {
      try {
          const response = await put_survey_service(survey);
          const data = response?.data;
          return data;
      } catch (err) {
          console.log(err);
          return rejectWithValue(err);
      }
  }
);
export const put_survey = createAsyncThunk(
  update_survey_type,
  async (survey:{name:string,survey_type_id:number,survey_id:number,options:{modality:string,languages:string}}, { rejectWithValue }) => {
      try {
          const response = await update_survey_service(survey);
          const data = response?.data;
          return data;
      } catch (err) {
          return rejectWithValue(err);
      }
  }
);

export const delete_survey = createAsyncThunk(
  'survey/deleteQuestionOfSurvey',
  async ( survey_id:number, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/survey/${survey_id}`
      );
      return {  survey_id };
    } catch (err: any) {
      console.error("Error in deleting question of survey");
      return rejectWithValue(err.response.data);
    }
  }
);
export const delete_partial_survey = createAsyncThunk(
  'survey/deleteSurvey',
  async ( survey_id:number, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/survey/${survey_id}`
      );
      return response ;
    } catch (err: any) {
      console.error("Error in deleting  survey");
      return rejectWithValue(err.response.data);
    }
  }
);














