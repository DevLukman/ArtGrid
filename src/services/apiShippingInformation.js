import supabase from "./supabase";

//Getting the current logged in user Information(if they have already logged in before)
export async function getLoggedInUserInformation(email) {
  let { data, error } = await supabase
    .from("shippingInformation")
    .select("*")
    .eq("email", email)
    .single();
  if (error) throw new Error("There was error getting user Information");
  return data;
}
//Add new shipping information(if that's the first time he is logging )

export async function createInformation(information) {
  const { data, error } = await supabase
    .from("shippingInformation")
    .insert([information])
    .select()
    .single();

  if (error) throw new Error("There was error with add information");

  return data;
}

//Allowing the user to update the the shipping information

export async function updateInformation({ id, updateInfo }) {
  const { data, error } = await supabase
    .from("shippingInformation")
    .update(updateInfo)
    .eq("id", id)
    .select();
  if (error)
    throw new Error("You will have to edit all the input to be able to update");
  return data;
}
