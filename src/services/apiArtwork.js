import supabase from "./supabase";
import { PAGE_SIZE } from "../utils/helpers";
//Getting all the artworks
export async function getArtworks({ page }) {
  let query = supabase.from("artworks").select("*", { count: "exact" });
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("There was an error get the artworks");
  }
  return { data, count };
}

//Getting a single artworks
export async function getArtwork(id) {
  const { data, error } = await supabase
    .from("artworks")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    throw new Error("There was error in fetching data");
  }
  return data;
}

// for search
export async function searchArtwork(name) {
  const { data, error } = await supabase
    .from("artworks")
    .select("*")
    .ilike("name", `%${name}%`);

  if (error) {
    throw new Error("There was error search artworks");
  }

  return data;
}

//getting related Product
export async function getRealtedArtworks(id, category) {
  const { data, error } = await supabase
    .from("artworks")
    .select("*")
    .eq("category", category)
    .neq("id", id)
    .limit(4);

  if (error) throw new Error("There was Error Getting ReatedArtworks");
  return data;
}

//Getting all the Featured
export async function getFeatured() {
  const { data, error } = await supabase.from("artworks").select("*");
  if (error) throw new Error("There was an error getting the artworks");

  return data;
}

//Get all artist
export async function getAllArtist() {
  const { data, error } = await supabase.from("artworks").select("artist, id");

  if (error) throw new Error("There was an error getting the artist");
  return data;
}
