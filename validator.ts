import {parsedData} from "./parser";
import {csv} from "./config";

export const validParsedData = [];
const invalidParsedData: object[] = [];

for (let index = 0; index < parsedData.length; index++) {
    let ageIsValid: boolean = false,
        nameIsValid: boolean = false,
        surNameIsValid: boolean = false,
        mailIsValid: boolean = false,
        dateIsValid: boolean = false,
        phoneIsValid: boolean = false,
        timeIsValid: boolean = false;

    if ( csv.headers[0].hasProperty(index) ) {
        if ( csv.headers[0].hasSpecifiedType(index) ) {
            if ( csv.headers[0].isAge(index) ) {
                ageIsValid = true;
            }
        }
    }

    if ( csv.headers[1].hasProperty(index) ) {
        if ( csv.headers[1].hasSpecifiedType(index) ) {
            if ( csv.headers[1].isName(index) ) {
                nameIsValid = true;
            }
        }
    }

    if ( csv.headers[2].hasProperty(index) ) {
        if ( csv.headers[2].hasSpecifiedType(index) ) {
            if ( csv.headers[2].isSurName(index) ) {
                surNameIsValid = true;
            }
        }
    }

    if ( csv.headers[3].hasProperty(index) ) {
        if ( csv.headers[3].hasSpecifiedType(index) ) {
            if ( csv.headers[3].isMail(index) ) {
                mailIsValid = true;
            }
        }
    }

    if ( csv.headers[4].hasProperty(index) ) {
        if ( csv.headers[4].hasSpecifiedType(index) ) {
            if ( csv.headers[4].isDate(index) ) {
                dateIsValid = true;
            }
        }
    }

    if ( csv.headers[5].hasProperty(index) ) {
        if ( csv.headers[5].hasSpecifiedType(index) ) {
            if ( csv.headers[5].isPhone(index) ) {
                phoneIsValid = true;
            }
        }
    }

    if ( csv.headers[6].hasProperty(index) ) {
        if ( csv.headers[6].hasSpecifiedType(index) ) {
            if ( csv.headers[6].isTime(index) ) {
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
        validParsedData.push(parsedData[index]);
    } else {
        invalidParsedData.push(parsedData[index]);
    }
}

for (let item of csv.errorMessages) {
    console.log(item);
}

console.log("INVALID DATA:")
console.log(invalidParsedData);