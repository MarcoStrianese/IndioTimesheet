// =====================================================================
//  IndioTimesheet - CONFIGURAZIONE
//  Inserisci qui i dati del tuo progetto Supabase
//  (Supabase -> Project Settings -> Data API / API Keys).
//
//  La chiave da usare e' quella PUBBLICA ("publishable" sb_publishable_...
//  oppure la vecchia "anon"). NON inserire MAI la chiave "secret" /
//  "service_role": questa finisce nel browser ed e' visibile a tutti.
//  E' normale e sicuro: i dati sono protetti dalle regole RLS del database.
//
//  Lasciando supabaseUrl vuoto l'app propone la modalita' DEMO.
// =====================================================================
window.INDIO_CONFIG = {
  supabaseUrl: "https://ramccarlvdfhcudlrfvi.supabase.co",          // es. "https://abcdefghijkl.supabase.co"
  supabaseKey: "sb_publishable_o5P6aATao8AX096n7Vc5-g_t8oWqG0F",          // es. "sb_publishable_xxxxxxxxxxxxxxxxxxxx"
  nomeStudio: "Indiotech",
  oreGiornaliere: 8         // ore di una giornata piena (per anelli e calendario)
};
