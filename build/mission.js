const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  //
  promptmodel = "systemContent";
  roleSystem = "gen -DevOps";
  roleAssistant = "Professor";
  roleUser = "Generator";

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
        
      {role: "system",name:"[🌌_system", content:"[📔.codex]_phase1:Conception"},
      {role: "user",name:"[🌴_Groq]", content: "[🌴_Groq]+[promptmodel]+[🤖_emojis.sh]+[[💬emojispicker]!" },
      {role: "system",name:"[🌌_system", content:"chemtrailAlerte-app est une application qui vise à détecter et à surveiller les chemtrails(L'ensemencement des nuages à îodure d'argent) et les émissions de gaz toxiques dans l'atmosphère Provenant d'un avion grace au connection satélite IP/sat. Cette application utilise des capteurs et des technologies de détection pour collecter des données sur la qualité de l'air et les émissions de gaz toxiques, et les analyse en utilisant des algorithmes de machine learning pour identifier les anomalies et les sources de pollution.L'application chemtrailAlerte-app offre aux utilisateurs une interface claire et conviviale Pour tracer les émetteurs Lier aux G7 pilotes d'avion à l'origine ou à la source de ses Chemtrails L'ensemencement des nuages à îodure d'argent.Notre interface permet de visualiser les données collectées et les résultats des analyses. Elle permet aux utilisateurs de consulter les niveaux de pollution atmosphérique en temps réel, d'identifier les sources de pollution et de suivre l'évolution de la qualité de l'air dans leur région. L'application Lydée est un outil précieux pour la prévention et la gestion de la pollution atmosphérique, et elle peut contribuer à sensibiliser la population aux risques liés aux chemtrails et aux émissions de gaz toxiques."},
      {role: "assistant",name:"[📔_codex]", content:"[📔.codex]_Phase[02]: Créeation de l'application, Développement du système de mission, étape par étape suivant un modèle de Gantes. T'es Réponses devront être rédigé avec une approche métaphysique plan de développement à la langue française]"},
    ],
    model: "gemma2-9b-it",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "mission" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation généré par Gemini et enregistré dans " + outputFilePath);
});
}

main();