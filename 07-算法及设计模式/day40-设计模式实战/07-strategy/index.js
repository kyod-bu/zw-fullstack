const { StringSchema } = require("./string");

// 构建策略：
// 多于 12，打印 too long
// 少于 6，打印 too short
const schema = new StringSchema().length(12, "too long").min(6, "too short");

const errorMessage = validate("123123123123123", schema);

if (errorMessage) {
    console.log("error::", errorMessage);
} else {
    console.log("correct");
}

function validate(value, schema) {
    return schema.isValid(value);
}
