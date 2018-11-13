var assert = require('assert');
import {parsedData} from "./parser";
import {validParsedData} from "./validator";
import {csv} from "./config";

describe("HasProperty function", function() {
    it("Returns true if there is a property we want to find", function() {
        for (var i = 0; i < csv.headers.length; i++) {
            for (var j = 0; j < parsedData.length; j++) {
                assert( csv.headers[i].hasProperty(j) );
            }
        }
    });
});

describe("HasSpecifiedType function", function() {
    it("Returns true if property has specified type", function() {
        for (var i = 0; i < csv.headers.length; i++) {
            for (var j = 0; j < parsedData.length; j++) {
                assert( csv.headers[i].hasSpecifiedType(j) );
            }
        }
    });
});

describe("IsAGe function", function() {
    it("Returns true if record has valid data in property Age", function() {
        for (var i = 0; i < validParsedData.length; i++) {
                assert( csv.headers[0].isAge(i) );
        }
    });
});

describe("IsName function", function() {
    it("Returns true if record has valid data in property Name", function() {
        for (var i = 0; i < validParsedData.length; i++) {
            assert( csv.headers[1].isName(i) );
        }
    });
});

describe("IsSurname function", function() {
    it("Returns true if record has valid data in property Surname", function() {
        for (var i = 0; i < validParsedData.length; i++) {
            assert( csv.headers[2].isSurName(i) );
        }
    });
});

describe("IsMail function", function() {
    it("Returns true if record has valid data in property Mail", function() {
        for (var i = 0; i < validParsedData.length; i++) {
            assert( csv.headers[3].isMail(i) );
        }
    });
});

describe("IsDate function", function() {
    it("Returns true if record has valid data in property DateofReg", function() {
        for (var i = 0; i < validParsedData.length; i++) {
            assert( csv.headers[4].isDate(i) );
        }
    });
});

describe("IsPhone function", function() {
    it("Returns true if record has valid data in property Phone", function() {
        for (var i = 0; i < validParsedData.length; i++) {
            assert( csv.headers[5].isPhone(i) );
        }
    });
});

describe("IsTime function", function() {
    it("Returns true if record has valid data in property Time", function() {
        for (var i = 0; i < validParsedData.length; i++) {
            assert( csv.headers[6].isTime(i) );
        }
    });
});

