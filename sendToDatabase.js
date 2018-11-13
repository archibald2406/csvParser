"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite = require("sqlite3");
var validator_1 = require("./validator");
var sqlite3 = sqlite.verbose();
var db = new sqlite3.Database('ParsedCSV.db', function () { });
function createDb() {
    console.log("createDb ParsedCSV");
    db = new sqlite3.Database('ParsedCSV.db', createTable);
    db.configure("busyTimeout", 1000);
}
exports.createDb = createDb;
function createTable() {
    console.log("createTable userInfo");
    db.run("CREATE TABLE IF NOT EXISTS userInfo (Age INTEGER, Name TEXT, Surname TEXT, Mail TEXT, DateofReg DATE, Phone TEXT, Time TEXT)", insertRows);
}
function insertRows() {
    console.log("insertRows");
    for (var index = 0; index < validator_1.validParsedData.length; index++) {
        var info = [];
        info.push(validator_1.validParsedData[index].Age);
        info.push(validator_1.validParsedData[index].Name);
        info.push(validator_1.validParsedData[index].Surname);
        info.push(validator_1.validParsedData[index].Mail);
        info.push(validator_1.validParsedData[index].DateofReg);
        info.push(validator_1.validParsedData[index].Phone);
        info.push(validator_1.validParsedData[index].Time);
        db.run("INSERT INTO userInfo(Age, Name, Surname, Mail, DateofReg, Phone, Time) VALUES(?,?,?,?,?,?,?)", info, function (err) {
            if (err) {
                return console.log(err.message);
            }
            console.log("A row has been inserted with rowid " + this.lastID);
        });
    }
}
function closeDb() {
    console.log("closeDb");
    db.close();
}
function runChainExample() {
    createDb();
}
runChainExample();
