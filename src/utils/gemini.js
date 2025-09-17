import { GoogleGenAI } from "@google/genai";
import { GEMINI_KEY } from "./contant";

export const geminiai = new GoogleGenAI({ apiKey: GEMINI_KEY });
