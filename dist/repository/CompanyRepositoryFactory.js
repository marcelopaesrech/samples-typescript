"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyRepository_1 = require("./CompanyRepository");
const PublisherFactory_1 = require("../messaging/PublisherFactory");
class CompanyRepositoryFactory {
    constructor(type) {
        this.companyRepositoryType = type;
    }
    createCompanyRepository() {
        if (this.companyRepositoryType === 'static') {
            let publisher = new PublisherFactory_1.PublisherFactory().createPublisher();
            return new CompanyRepository_1.CompanyRepository(publisher);
        }
        else {
            throw new Error("Método não implementado");
        }
    }
}
exports.CompanyRepositoryFactory = CompanyRepositoryFactory;
