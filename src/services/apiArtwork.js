import supabase from "./supabase";
//Getting all the artworks
export async function getArtworks() {
  const { data, error } = await supabase.from("artworks").select("*");

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
