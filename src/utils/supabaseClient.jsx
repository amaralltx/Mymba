import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
console.log(supabaseKey, supabaseUrl)

if (!supabaseUrl || !supabaseKey) {
    console.error('Erro: Variáveis de ambiente VITE_SUPABASE_URL ou VITE_SUPABASE_ANON_KEY não definidas.');
    throw new Error('Configuração do Supabase faltando. Verifique as variáveis de ambiente.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;