import OpenAI from 'openai';
import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

/** OpenAI config */
if (!process.env.OPENAI_API_KEY) throw new Error("Missing OPENAI_API_KEY");
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

/** Supabase config */
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;

if (!supabaseUrl) throw new Error("Missing SUPABASE_URL");
if (!supabaseKey) throw new Error("Missing SUPABASE_API_KEY");

export const supabase = createClient(supabaseUrl, supabaseKey);
