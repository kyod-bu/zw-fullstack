const { decorator } = require("./decorator");
const { Developer } = require("./developer");

// 实例化一个 Developer，并且用 decorator 来装饰它
const developer = decorator(new Developer());

developer.send("frontend");
developer.send("backend");
developer.send("CEO");
developer.send("designer");
developer.send("QA");
