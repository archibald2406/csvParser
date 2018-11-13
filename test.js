"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require('assert');
var parser_1 = require("./parser");
var validator_1 = require("./validator");
var config_1 = require("./config");
describe("HasProperty function", function () {
    it("Returns true if there is a property we want to find", function () {
        for (var i = 0; i < config_1.csv.headers.length; i++) {
            for (var j = 0; j < parser_1.parsedData.length; j++) {
                assert(config_1.csv.headers[i].hasProperty(j));
            }
        }
    });
});
describe("HasSpecifiedType function", function () {
    it("Returns true if property has specified type", function () {
        for (var i = 0; i < config_1.csv.headers.length; i++) {
            for (var j = 0; j < parser_1.parsedData.length; j++) {
                assert(config_1.csv.headers[i].hasSpecifiedType(j));
            }
        }
    });
});
describe("IsAGe function", function () {
    it("Returns true if record has valid data in property Age", function () {
        for (var i = 0; i < validator_1.validParsedData.length; i++) {
            assert(config_1.csv.headers[0].isAge(i));
        }
    });
});
describe("IsName function", function () {
    it("Returns true if record has valid data in property Name", function () {
        for (var i = 0; i < validator_1.validParsedData.length; i++) {
            assert(config_1.csv.headers[1].isName(i));
        }
    });
});
describe("IsSurname function", function () {
    it("Returns true if record has valid data in property Surname", function () {
        for (var i = 0; i < validator_1.validParsedData.length; i++) {
            assert(config_1.csv.headers[2].isSurName(i));
        }
    });
});
describe("IsMail function", function () {
    it("Returns true if record has valid data in property Mail", function () {
        for (var i = 0; i < validator_1.validParsedData.length; i++) {
            assert(config_1.csv.headers[3].isMail(i));
        }
    });
});
describe("IsDate function", function () {
    it("Returns true if record has valid data in property DateofReg", function () {
        for (var i = 0; i < validator_1.validParsedData.length; i++) {
            assert(config_1.csv.headers[4].isDate(i));
        }
    });
});
describe("IsPhone function", function () {
    it("Returns true if record has valid data in property Phone", function () {
        for (var i = 0; i < validator_1.validParsedData.length; i++) {
            assert(config_1.csv.headers[5].isPhone(i));
        }
    });
});
describe("IsTime function", function () {
    it("Returns true if record has valid data in property Time", function () {
        for (var i = 0; i < validator_1.validParsedData.length; i++) {
            assert(config_1.csv.headers[6].isTime(i));
        }
    });
});
