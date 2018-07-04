"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompanyRepository {
    constructor(publisher) {
        this.publisher = publisher;
        this.companies = [
            { id: 1, name: "Vale do Rio Doce", ticket: "VALE5" },
            { id: 2, name: "Companhia Santanense", ticket: "CTSA4" },
            { id: 3, name: "Log-in logística intermodal", ticket: "LOGN3" },
            { id: 4, name: "Romi Industrial", ticket: "ROMI3" }
        ];
    }
    findByKey(id) {
        let comp = this.companies.find(comp => comp.id === id);
        return comp;
    }
    getAll() {
        return this.companies;
    }
    createCompany(company) {
        this.publisher.send("sample", "valor meu");
    }
}
exports.CompanyRepository = CompanyRepository;
