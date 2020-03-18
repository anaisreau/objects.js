const wilders ={
    name : "Anais",
    city : "Marseille", 
    age : 30, 
    isLearningJS : true 
};

for (let key in wilders)
    console.log(key, wilders[key]);

console.log(wilders.hasOwnProperty("name"))
console.log(wilders.hasOwnProperty("isLearningJS"))
console.log(wilders.hasOwnProperty("is LearningPHP"))

wilders["knowHtml"]="true";
wilders["knowCss"]="true";
wilders["hobbie"]="Dance";

for (let key in wilders)
    console.log(key, wilders[key]);

delete wilders.name;

for (let key in wilders)
    console.log(key, wilders[key]);
