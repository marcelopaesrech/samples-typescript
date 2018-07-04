"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a company
 *
 * */
class Company {
    constructor() {
    }
    toString() {
        return this.ticket + ' - ' + this.name;
    }
}
exports.Company = Company;
exports.default = Company;
