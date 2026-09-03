import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";

const safetySetting = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
];

const genAI = new GoogleGenerativeAI(
  "AQ.Ab8RN6Ltl8TNZ8IkSGQcrz8EUn72pH_Gh2cntEHeZRSzaN1naw",
);

const model = genAI.getGenerativeModel({
  model: "gemini-3.6-flash",
  safetySetting,
});

export default model;
