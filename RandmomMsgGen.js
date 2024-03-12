var first = ["Autumn coloured leaves",
"Summer's sun falls warm",
"Winter's here again",
"Spring brings fourth new life",
"The leaves of Autumn",
"The Summer shaddows",
"Blossom falls in Spring",
"The winters shiver"]


var second = ["but work is so dull, so please,", 
"The passing years lumber on,", 
"existential thoughts come forth,", 
"yet I'm stuck in the office"]


var third = ["I just want ice cream!",
"bring on holidays",
"Can't wait till Butlins",
"wonder what's for lunch?",
"bring on hometime soon!",
"I love rhubarb crumble.",
"Jelly and Icecream.",
"Rhubarb and Custard."]

const haikuGenerator = () => {
    console.log(first[Math.floor(Math.random() * 8)]);
    console.log(second[Math.floor(Math.random() * 4)]);
    console.log(third[Math.floor(Math.random() * 8)]);
}

haikuGenerator();


