"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("./parser");
var config_1 = require("./config");
exports.validParsedData = [];
var invalidParsedData = [];
for (var index = 0; index < parser_1.parsedData.length; index++) {
    var ageIsValid = false, nameIsValid = false, surNameIsValid = false, mailIsValid = false, dateIsValid = false, phoneIsValid = false, timeIsValid = false;
    if (config_1.csv.headers[0].hasProperty(index)) {
        if (config_1.csv.headers[0].hasSpecifiedType(index)) {
            if (config_1.csv.headers[0].isAge(index)) {
                ageIsValid = true;
            }
        }
    }
    if (config_1.csv.headers[1].hasProperty(index)) {
        if (config_1.csv.headers[1].hasSpecifiedType(index)) {
            if (config_1.csv.headers[1].isName(index)) {
                nameIsValid = true;
            }
        }
    }
    if (config_1.csv.headers[2].hasProperty(index)) {
        if (config_1.csv.headers[2].hasSpecifiedType(index)) {
            if (config_1.csv.headers[2].isSurName(index)) {
                surNameIsValid = true;
            }
        }
    }
    if (config_1.csv.headers[3].hasProperty(index)) {
        if (config_1.csv.headers[3].hasSpecifiedType(index)) {
            if (config_1.csv.headers[3].isMail(index)) {
                mailIsValid = true;
            }
        }
    }
    if (config_1.csv.headers[4].hasProperty(index)) {
        if (config_1.csv.headers[4].hasSpecifiedType(index)) {
            if (config_1.csv.headers[4].isDate(index)) {
                dateIsValid = true;
            }
        }
    }
    if (config_1.csv.headers[5].hasProperty(index)) {
        if (config_1.csv.headers[5].hasSpecifiedType(index)) {
            if (config_1.csv.headers[5].isPhone(index)) {
                phoneIsValid = true;
            }
        }
    }
    if (config_1.csv.headers[6].hasProperty(index)) {
        if (config_1.csv.headers[6].hasSpecifiedType(index)) {
            if (config_1.csv.headers[6].isTime(index)) {
                timeIsValid = true;
            }
        }
    }
    if (ageIsValid
        && nameIsValid
        && surNameIsValid
        && mailIsValid
        && dateIsValid
        && phoneIsValid
        && timeIsValid) {
        exports.validParsedData.push(parser_1.parsedData[index]);
    }
    else {
        invalidParsedData.push(parser_1.parsedData[index]);
    }
}
for (var _i = 0, _a = config_1.csv.errorMessages; _i < _a.length; _i++) {
    var item = _a[_i];
    console.log(item);
}
console.log("INVALID DATA:");
console.log(invalidParsedData);
