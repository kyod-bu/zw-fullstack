// const { Eager } = require("./eager");
const { Lazy } = require("./lazy");

const ins1 = Lazy.getInstance();
Lazy.instance = null;
const ins2 = Lazy.getInstance();

console.log(ins1 === ins2); // true
