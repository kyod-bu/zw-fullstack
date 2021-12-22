const axios = require("axios");

class Question {
    all() {
        return axios
            .get("http://private-8ebb2-dozer1.apiary-mock.com/questions")
            .then((res) => res.data);
    }
}

module.exports = {
    Question,
};
