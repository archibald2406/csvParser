import * as sqlite from 'sqlite3';
import {validParsedData} from "./validator";

const sqlite3 = sqlite.verbose();

let db: sqlite.Database = new sqlite3.Database('ParsedCSV.db', () => {});

export function createDb() {
    console.log("createDb ParsedCSV");
    db = new sqlite3.Database('ParsedCSV.db', createTable);
    db.configure("busyTimeout", 1000);
}

function createTable() {
    console.log("createTable userInfo");
    db.run("CREATE TABLE IF NOT EXISTS userInfo (Age INTEGER, Name TEXT, Surname TEXT, Mail TEXT, DateofReg DATE, Phone TEXT, Time TEXT)", insertRows);
}

function insertRows() {
    console.log("insertRows");
    for (var index = 0; index < validParsedData.length; index++) {
        let info: string[] = [];

        info.push(validParsedData[index].Age);
        info.push(validParsedData[index].Name);
        info.push(validParsedData[index].Surname);
        info.push(validParsedData[index].Mail);
        info.push(validParsedData[index].DateofReg);
        info.push(validParsedData[index].Phone);
        info.push(validParsedData[index].Time);

        db.run(`INSERT INTO userInfo(Age, Name, Surname, Mail, DateofReg, Phone, Time) VALUES(?,?,?,?,?,?,?)`, info, function (err) {
            if (err) {
                return console.log(err.message);
            }
            console.log(`A row has been inserted with rowid ${this.lastID}`);
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
