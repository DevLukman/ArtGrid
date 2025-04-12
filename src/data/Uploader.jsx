import { useState } from "react";
import supabase from "../services/supabase";
import { artworks } from "./artwortk-data";

async function deleteArtworks() {
  const { error } = await supabase.from("artworks").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function createArtworks() {
  const { error } = await supabase.from("artworks").insert(artworks);
  if (error) console.log(error.message);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);
  async function uploadArtworks() {
    setIsLoading(true);
    await deleteArtworks();
    await createArtworks();
    setIsLoading(false);
  }

  return (
    <div
      style={{
        backgroundColor: "#e0e7ff",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
        gap: "8px",
        paddingTop: "100px",
      }}
    >
      <h3>SAMPLE DATA</h3>
      <button onClick={uploadArtworks} disabled={isLoading}>
        Upload All Artworks
      </button>
    </div>
  );
}

export default Uploader;
