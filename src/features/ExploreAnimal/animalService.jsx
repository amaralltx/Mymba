import supabase from "../../utils/supabaseClient.jsx";

export async function getRandomAnimal() {

  // Busca todos os IDs dos animais
  let { data: ids, error } = await supabase
    .from('animals')
    .select('id')
  console.log(ids);
  if (error) {
    console.error(error);
    return null;
  }

  // Sorteia um ID aleatório
  const randomIndex = Math.floor(Math.random() * ids.length);
  const randomId = ids[randomIndex].id;

  // Busca o animal com o ID sorteado
  const { data: animal, error: errorAnimal } = await supabase
    .from("animals")
    .select("*")
    .eq("id", randomId)
    .single();

  if (errorAnimal) {
    console.error(errorAnimal);
    return null;
  }

  return animal;
}
