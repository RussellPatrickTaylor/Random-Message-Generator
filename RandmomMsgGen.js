var first = ["Autumn coloured leaves",
"Summer's sun falls warm",
"Winter's here again",
"Spring brings fourth new life",
"The leaves of Autumn",
"The Summer shaddows",
"Blossom falls in Spring",
"The winters shiver"]
var second = ["but work is so dull, please, please,", 
"This makes me think about life's worth,", 
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
    x = Math.floor(Math.random());
    y = Math.floor(Math.random());
    z = Math.floor(Math.random());
    console.log(first[Math.floor(Math.random() * x)]);
    console.log(second[Math.floor(Math.random() * y)]);
    console.log(third[Math.floor(Math.random() * z)]);
}

haikuGenerator();

