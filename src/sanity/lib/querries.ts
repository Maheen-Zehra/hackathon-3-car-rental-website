import { groq } from "next-sanity";


export const allProducts = groq`*[_type == "car"]`;
export const four = groq `*[_type == "car"][0..3]`;