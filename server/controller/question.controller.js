const { question_service } = require("../services");
exports.create_question = async (req, res) => {
  try {
    const response = await question_service.create_question(req);
    res.status(201).json({ response });
  } catch (error) {
    console.log(error);
    res.status(error.code).json({ message: error.message, success: false });
  }
};
exports.get_question = async (req, res) => {
  try {
    const response = await question_service.get_question(req);
    res.status(200).json({ response });
  } catch (error) {
    res.status(error.code).json({
      message: error.message,
      success: false,
    });
  }
};
exports.update_question = async (req, res) => {
  try {
    const response = await question_service.update_question(req);
    res.status(200).json({ response });
  } catch (error) {
    console.log(error);
    console.log("SFEGERTRTYTRYRT", error.code);
    res.status(error.code).json({ message: error.message, success: false });
  }
};
exports.get_question_for_survey = async (req, res) => {
  try {
    const response = await question_service.get_question_for_survey(req);
    res.status(200).json({ response });
  } catch (error) {
    res.status(error.code).json({
      message: error.message,
      success: false,
    });
  }
};
exports.delete_question = async (req, res) => {
  try {
    const response = await question_service.delete_question(req);
    res.status(200).json({ response });
  } catch (error) {
    console.log(error);
    res.status(error.code).json({ message: error.message, success: false });
  }
};
exports.get_question_thr_id = async (req, res) => {
  try {
    const response = await question_service.get_question_thr_id(req);
    res.status(200).json({ response });
  } catch (error) {
    res.status(error.code).json({
      message: error.message,
      success: false,
    });
  }
};

exports.get_question_of_survey = async (req, res) => {
  try {
    const response = await question_service.get_question_of_survey(req);
    res.status(200).json({ response });
  } catch (error) {
    res.status(error.code).json({
      message: error.message,
      success: false,
    });
  }
};
exports.partialy_delete = async (req, res) => {
  try {
    const response = await question_service.partialy_delete(req);
    res.status(200).json({ response });
  } catch (error) {
    console.log(error);
    res.status(error.code).json({
      message: error.message,
    });
  }
};

exports.get_deleted_questions=async(req,res)=>{
  try{
    const response = await question_service.get_deleted_questions(req);
    res.status(200).json({ response });

  }
  catch(error){
    console.log(error);
    res.status(error.code).json({
      message: error.message,
    });

  }
}

