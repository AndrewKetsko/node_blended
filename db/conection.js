const mongoose = require("mongoose");
const { DB_HOST } = process.env;

const mConnect = async () => {
    await mongoose.connect(DB_HOST);
};

module.exports = mConnect;