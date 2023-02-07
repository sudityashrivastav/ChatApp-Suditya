import {createClient} from "@supabase/supabase-js";

  const url = "https://ohhskiimthcixwoiqvwa.supabase.co";

  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oaHNraWltdGhjaXh3b2lxdndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4NzU1NTksImV4cCI6MTk5MDQ1MTU1OX0.jfTS_Fc9wKOo_DBvfLOWPOdX0jladOl7P48fqJKowms";
  
export const supabase = createClient(url,key);



