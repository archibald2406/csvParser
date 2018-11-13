"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("./parser");
exports.csv = {
    headers: [],
    errorMessages: ["List of errors found in csv file: "]
};
var Validator = (function () {
    function Validator(headerName, type) {
        this.headerName = headerName;
        this.type = type;
    }
    Validator.prototype.hasProperty = function (index) {
        if (parser_1.parsedData[index].hasOwnProperty(this.headerName)) {
            return true;
        }
        else {
            exports.csv.errorMessages.push("Row " + (index + 1) + ": Missing property " + this.headerName + ".");
            return false;
        }
    };
    return Validator;
}());
var AgeValidator = (function (_super) {
    __extends(AgeValidator, _super);
    function AgeValidator(headerName, type) {
        return _super.call(this, headerName, type) || this;
    }
    AgeValidator.prototype.hasSpecifiedType = function (index) {
        if (typeof parser_1.parsedData[index].Age === this.type) {
            return true;
        }
        else {
            exports.csv.errorMessages.push("Row " + (index + 1) + ": Type of property " + this.headerName
                + " is incorrect (" + typeof parser_1.parsedData[index].Age + "). It must be " + this.type + ".");
            return false;
        }
    };
    AgeValidator.prototype.isAge = function (index) {
        if (!(parser_1.parsedData[index].Age.match(/\D/g))) {
        }
        else {
            exports.csv.errorMessages.push("Row " + (index + 1) + ": Data in property " + this.headerName
                + " is invalid. Age must consist of numbers only.");
            return false;
        }
        if (parser_1.parsedData[index].Age <= 0) {
            exports.csv.errorMessages.push("Row " + (index + 1) + ", property " + this.headerName + ": User NOT YET BORN!");
            return false;
        }
        if (parser_1.parsedData[index].Age < 4) {
            exports.csv.errorMessages.push("Row " + (index + 1) + ", property " + this.headerName + ": User is too young.");
            return false;
        }
        if (parser_1.parsedData[index].Age > 100) {
            exports.csv.errorMessages.push("Row " + (index + 1) + ", property " + this.headerName + ": User is too old.");
            return false;
        }
        return true;
    };
    return AgeValidator;
}(Validator));
var NameValidator = (function (_super) {
    __extends(NameValidator, _super);
    function NameValidator(headerName, type) {
        return _super.call(this, headerName, type) || this;
    }
    NameValidator.prototype.hasSpecifiedType = function (index) {
        if (typeof parser_1.parsedData[index].Name === this.type) {
            return true;
        }
        else {
            exports.csv.errorMessages.push("Row " + (index + 1) + ": Type of property " + this.headerName
                + " is incorrect (" + typeof parser_1.parsedData[index].Name + "). It must be " + this.type + ".");
            return false;
        }
    };
    NameValidator.prototype.isName = function (index) {
        if (/^[a-zA-Z]+$/.test(parser_1.parsedData[index].Name)) {
            return true;
        }
        else {
            exports.csv.errorMessages.push("Row " + (index + 1) + ": Data in property " + this.headerName
                + " is invalid. Name must consist of letters.");
            return false;
        }
    };
    return NameValidator;
}(Validator));
var SurNameValidator = (function (_super) {
    __extends(SurNameValidator, _super);
    function SurNameValidator(headerName, type) {
        return _super.call(this, headerName, type) || this;
    }
    SurNameValidator.prototype.hasSpecifiedType = function (index) {
        if (typeof parser_1.parsedData[index].Surname === this.type) {
            return true;
        }
        else {
            exports.csv.errorMessages.push("Row " + (index + 1) + ": Type of property " + this.headerName
                + " is incorrect (" + typeof parser_1.parsedData[index].Surname + "). It must be " + this.type + ".");
            return false;
        }
    };
    SurNameValidator.prototype.isSurName = function (index) {
        if (/^[a-zA-Z]+$/.test(parser_1.parsedData[index].Surname)) {
            return true;
        }
        else {
            exports.csv.errorMessages.push("Row " + (index + 1) + ": Data in property " + this.headerName
                + " is invalid. Surname must consist of letters.");
            return false;
        }
    };
    return SurNameValidator;
}(Validator));
var MailValidator = (function (_super) {
    __extends(MailValidator, _super);
    function MailValidator(headerName, type) {
        return _super.call(this, headerName, type) || this;
    }
    MailValidator.prototype.hasSpecifiedType = function (index) {
        if (typeof parser_1.parsedData[index].Mail === this.type) {
            return true;
        }
        else {
            exports.csv.errorMessages.push("Row " + (index + 1) + ": Type of property " + this.headerName
                + " is incorrect (" + typeof parser_1.parsedData[index].Mail + "). It must be " + this.type + ".");
            return false;
        }
    };
    MailValidator.prototype.isMail = function (index) {
        if (/^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(parser_1.parsedData[index].Mail)) {
            return true;
        }
        else {
            exports.csv.errorMessages.push("Row " + (index + 1) + ": Data in property " + this.headerName
                + " is invalid. Mail must be like \"Sampletext@gmail.ru\".");
            return false;
        }
    };
    return MailValidator;
}(Validator));
var DateValidator = (function (_super) {
    __extends(DateValidator, _super);
    function DateValidator(headerName, type) {
        return _super.call(this, headerName, type) || this;
    }
    DateValidator.prototype.hasSpecifiedType = function (index) {
        if (typeof parser_1.parsedData[index].DateofReg === this.type) {
            return true;
        }
        else {
            exports.csv.errorMessages.push("Row " + (index + 1) + ": Type of property " + this.headerName
                + " is incorrect (" + typeof parser_1.parsedData[index].DateofReg + "). It must be " + this.type + ".");
            return false;
        }
    };
    DateValidator.prototype.isDate = function (index) {
        if (/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.]((19\d\d)|(200[0-9])|(201[0-8]))$/.test(parser_1.parsedData[index].DateofReg)) {
            return true;
        }
        else {
            exports.csv.errorMessages.push("Row " + (index + 1) + ": Data in property " + this.headerName
                + " is invalid. Date of registration must be in format \"dd.mm.yyyy\", \"dd/mm/yyyy\" or \"dd-mm-yyyy\".");
            return false;
        }
    };
    return DateValidator;
}(Validator));
var PhoneValidator = (function (_super) {
    __extends(PhoneValidator, _super);
    function PhoneValidator(headerName, type) {
        return _super.call(this, headerName, type) || this;
    }
    PhoneValidator.prototype.hasSpecifiedType = function (index) {
        if (typeof parser_1.parsedData[index].Phone === this.type) {
            return true;
        }
        else {
            exports.csv.errorMessages.push("Row " + (index + 1) + ": Type of property " + this.headerName
                + " is incorrect (" + typeof parser_1.parsedData[index].Phone + "). It must be " + this.type + ".");
            return false;
        }
    };
    PhoneValidator.prototype.isPhone = function (index) {
        if (/^(\+(375|80)) (29|25|44|33) (\d{7})$/.test(parser_1.parsedData[index].Phone)) {
            return true;
        }
        else {
            exports.csv.errorMessages.push("Row " + (index + 1) + ": Data in property " + this.headerName
                + " is invalid. Phone number must be in format \"+375 29/25/44/33 1234567\".");
            return false;
        }
    };
    return PhoneValidator;
}(Validator));
var TimeValidator = (function (_super) {
    __extends(TimeValidator, _super);
    function TimeValidator(headerName, type) {
        return _super.call(this, headerName, type) || this;
    }
    TimeValidator.prototype.hasSpecifiedType = function (index) {
        if (typeof parser_1.parsedData[index].Time === this.type) {
            return true;
        }
        else {
            exports.csv.errorMessages.push("Row " + (index + 1) + ": Type of property " + this.headerName
                + " is incorrect (" + typeof parser_1.parsedData[index].Time + "). It must be " + this.type + ".");
            return false;
        }
    };
    TimeValidator.prototype.isTime = function (index) {
        if (/^(([0,1][0-9])|(2[0-3])):[0-5][0-9]$/.test(parser_1.parsedData[index].Time)) {
            return true;
        }
        else {
            exports.csv.errorMessages.push("Row " + (index + 1) + ": Data in property " + this.headerName
                + " is invalid. Time must be in format \"XX:XX\".");
            return false;
        }
    };
    return TimeValidator;
}(Validator));
var ageValidator = new AgeValidator("Age", "string");
var nameValidator = new NameValidator("Name", "string");
var surNameValidator = new SurNameValidator("Surname", "string");
var mailValidator = new MailValidator("Mail", "string");
var dateValidator = new DateValidator("DateofReg", "string");
var phoneValidator = new PhoneValidator("Phone", "string");
var timeValidator = new TimeValidator("Time", "string");
exports.csv.headers.push(ageValidator, nameValidator, surNameValidator, mailValidator, dateValidator, phoneValidator, timeValidator);
