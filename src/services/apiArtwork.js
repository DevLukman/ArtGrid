import supabase from "./supabase";
//Getting all the artworks
export async function getArtworks(filter) {
  let query = supabase.from("artworks").select("*");
  if (filter !== null) query = query.eq(filter.field, filter.value);
  const { data, error } = await query;
  if (error) {
    console.error(error);
    throw new Error("There was an error get the artworks");
  }
  return data;
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
  if (error) {
    throw new Error("There was Error");
  }
  return data;
}
