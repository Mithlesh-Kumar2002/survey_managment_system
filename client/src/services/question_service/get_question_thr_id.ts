import axios from "axios";
import type { FieldValues } from "react-hook-form";
const get_question_thr_id_service = async (inputs: FieldValues) => {
    try {
        // console.log("IIINNNPPUUUTT", inputs);
        const response = await axios.get("api/question/get_question_thr_id",inputs);
        return response.data;
    } catch (error) {
        console.error("Error fetching tests:", error);
        return null;
    }
};
export default get_question_thr_id_service;