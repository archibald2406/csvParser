import {parsedData} from "./parser";

export const csv = {
    headers: [],
    errorMessages: ["List of errors found in csv file: "]
}

class Validator {
    headerName: string;
    type: string;

    constructor(headerName: string, type: string) {
        this.headerName = headerName;
        this.type = type;
    }

    hasProperty(index: number): boolean {
        if ( parsedData[index].hasOwnProperty(this.headerName) ) {
            return true;
        } else {
            csv.errorMessages.push( "Row " + (index + 1) + ": Missing property " + this.headerName + "." );
            return false;
        }
    }
}

class AgeValidator extends Validator {
    constructor(headerName: string, type: string) {
        super(headerName, type);
    }

    hasSpecifiedType(index: number): boolean {
        if ( typeof parsedData[index].Age === this.type ) {
            return true;
        } else {
            csv.errorMessages.push( "Row " + (index + 1) + ": Type of property " + this.headerName
                                    + " is incorrect (" +  typeof parsedData[index].Age + "). It must be " + this.type + ".");
            return false;
        }
    }

    isAge(index: number): boolean {

        if ( !(parsedData[index].Age.match(/\D/g)) ) {
        } else {
            csv.errorMessages.push( "Row " + (index + 1) + ": Data in property " + this.headerName
                + " is invalid. Age must consist of numbers only." );
            return false;
        }

        if (parsedData[index].Age <= 0) {
            csv.errorMessages.push( "Row " + (index + 1) + ", property " + this.headerName + ": User NOT YET BORN!");
            return false;
        }

        if (parsedData[index].Age < 4) {
            csv.errorMessages.push( "Row " + (index + 1) + ", property " + this.headerName + ": User is too young.");
            return false;
        }

        if (parsedData[index].Age > 100) {
            csv.errorMessages.push( "Row " + (index + 1) + ", property " + this.headerName + ": User is too old.");
            return false;
        }

        return true;
    }
}

class NameValidator extends Validator {
    constructor(headerName: string, type: string) {
        super(headerName, type);
    }

    hasSpecifiedType(index: number): boolean {
        if ( typeof parsedData[index].Name === this.type ) {
            return true;
        } else {
            csv.errorMessages.push( "Row " + (index + 1) + ": Type of property " + this.headerName
                + " is incorrect (" +  typeof parsedData[index].Name + "). It must be " + this.type + ".");
            return false;
        }
    }

    isName(index: number): boolean {
        if ( /^[a-zA-Z]+$/.test(parsedData[index].Name) ) {
            return true;
        } else {
            csv.errorMessages.push( "Row " + (index + 1) + ": Data in property " + this.headerName
                + " is invalid. Name must consist of letters." );
            return false;
        }
    }
}

class SurNameValidator extends Validator {
    constructor(headerName: string, type: string) {
        super(headerName, type);
    }

    hasSpecifiedType(index: number): boolean {
        if ( typeof parsedData[index].Surname === this.type ) {
            return true;
        } else {
            csv.errorMessages.push( "Row " + (index + 1) + ": Type of property " + this.headerName
                + " is incorrect (" +  typeof parsedData[index].Surname + "). It must be " + this.type + ".");
            return false;
        }
    }

    isSurName(index: number): boolean {
        if ( /^[a-zA-Z]+$/.test(parsedData[index].Surname) ) {
            return true;
        } else {
            csv.errorMessages.push( "Row " + (index + 1) + ": Data in property " + this.headerName
                + " is invalid. Surname must consist of letters." );
            return false;
        }
    }
}

class MailValidator extends Validator {
    constructor(headerName: string, type: string) {
        super(headerName, type);
    }

    hasSpecifiedType(index: number): boolean {
        if ( typeof parsedData[index].Mail === this.type ) {
            return true;
        } else {
            csv.errorMessages.push( "Row " + (index + 1) + ": Type of property " + this.headerName
                + " is incorrect (" +  typeof parsedData[index].Mail + "). It must be " + this.type + ".");
            return false;
        }
    }

    isMail(index: number): boolean {
        if ( /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(parsedData[index].Mail) ) {
            return true;
        } else {
            csv.errorMessages.push( "Row " + (index + 1) + ": Data in property " + this.headerName
                + " is invalid. Mail must be like \"Sampletext@gmail.ru\"." );
            return false;
        }
    }
}

class DateValidator extends Validator {
    constructor(headerName: string, type: string) {
        super(headerName, type);
    }

    hasSpecifiedType(index: number): boolean {
        if ( typeof parsedData[index].DateofReg === this.type ) {
            return true;
        } else {
            csv.errorMessages.push( "Row " + (index + 1) + ": Type of property " + this.headerName
                + " is incorrect (" +  typeof parsedData[index].DateofReg + "). It must be " + this.type + ".");
            return false;
        }
    }

    isDate(index: number): boolean {
        if ( /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.]((19\d\d)|(200[0-9])|(201[0-8]))$/.test(parsedData[index].DateofReg) ) {
            return true;
        } else {
            csv.errorMessages.push( "Row " + (index + 1) + ": Data in property " + this.headerName
                + " is invalid. Date of registration must be in format \"dd.mm.yyyy\", \"dd/mm/yyyy\" or \"dd-mm-yyyy\"." );
            return false;
        }
    }
}

class PhoneValidator extends Validator {
    constructor(headerName: string, type: string) {
        super(headerName, type);
    }

    hasSpecifiedType(index: number): boolean {
        if ( typeof parsedData[index].Phone === this.type ) {
            return true;
        } else {
            csv.errorMessages.push( "Row " + (index + 1) + ": Type of property " + this.headerName
                + " is incorrect (" +  typeof parsedData[index].Phone + "). It must be " + this.type + ".");
            return false;
        }
    }

    isPhone(index: number): boolean {
        if ( /^(\+(375|80)) (29|25|44|33) (\d{7})$/.test(parsedData[index].Phone) ) {
            return true;
        } else {
            csv.errorMessages.push( "Row " + (index + 1) + ": Data in property " + this.headerName
                + " is invalid. Phone number must be in format \"+375 29/25/44/33 1234567\"." );
            return false;
        }
    }
}

class TimeValidator extends Validator {
    constructor(headerName: string, type: string) {
        super(headerName, type);
    }

    hasSpecifiedType(index: number): boolean {
        if ( typeof parsedData[index].Time === this.type ) {
            return true;
        } else {
            csv.errorMessages.push( "Row " + (index + 1) + ": Type of property " + this.headerName
                + " is incorrect (" +  typeof parsedData[index].Time + "). It must be " + this.type + ".");
            return false;
        }
    }

    isTime(index: number): boolean {
        if ( /^(([0,1][0-9])|(2[0-3])):[0-5][0-9]$/.test(parsedData[index].Time) ) {
            return true;
        } else {
            csv.errorMessages.push( "Row " + (index + 1) + ": Data in property " + this.headerName
                + " is invalid. Time must be in format \"XX:XX\"." );
            return false;
        }
    }
}

const ageValidator: AgeValidator = new AgeValidator("Age", "string");
const nameValidator: NameValidator = new NameValidator("Name", "string");
const surNameValidator: SurNameValidator = new SurNameValidator("Surname", "string");
const mailValidator: MailValidator = new MailValidator("Mail", "string");
const dateValidator: DateValidator = new DateValidator("DateofReg", "string");
const phoneValidator: PhoneValidator = new PhoneValidator("Phone", "string");
const timeValidator: TimeValidator = new TimeValidator("Time", "string");

csv.headers.push(ageValidator, nameValidator, surNameValidator, mailValidator, dateValidator, phoneValidator, timeValidator);