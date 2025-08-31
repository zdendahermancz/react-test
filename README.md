# react-test
Testovaci projekt na react stranku vystavenou na gitlab pages

## Postup

1. Vytvoreni repozitare - v UI Create repository.

    - Repozitar musi byt public (jinak nepujdou github pages)

2. Lokalne jsem vytvoril pojekt a provedl jsem add, commit a pak push

    - npx create-react-app [nazev projektu]
    - cd [nazev projektu]
    - npm install @supabase/supabase-js
    - npm install gh-pages --save-dev

3. Uprava package.json

    - pridame do package.json - homepage == "homepage": "https://USERNAME.github.io/[nazev projektu]",


4. Vytvoreni supabaseClient.js a vytvoreni lokalniho env souboru a uprava app.js souboru

5. Deploy na github - npm run deploy

    - dostupne na: https://USERNAME.github.io/[nazev projektu]
    - musel jsem na githubu nastavit githubpages
        - Po npm run deploy by se měl vytvořit branch gh-pages v repozitáři.
        - Ověř na GitHubu → Settings → Pages → tam by mělo být vybráno Branch: gh-pages / root.

6. Supabase

    - Nutnost vytvoreni tabulky
    - nastaveni prav (bud pomoci sql nebo lze v UIu tabulky)
        -   -- povolí všem čtení
            create policy "Allow read access" 
            on messages for select
            using (true);

            -- povolí všem vkládání
            create policy "Allow insert access" 
            on messages for insert
            with check (true);
    - Nastaveni env promenych na produkci -> pomoci workflow deploy
        - v Githabu jsem vytvoril produkcni klice (mohlo by byt primo soucasti kodu)
        - Vytvoreni deploy (soucasti musi byt povoleni prav na gh-pages)







