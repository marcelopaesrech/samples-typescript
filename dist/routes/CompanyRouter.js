"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CompanyRepositoryFactory_1 = require("../repository/CompanyRepositoryFactory");
class CompanyRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getAll(req, res, next) {
        let companyRepositoryFactory = new CompanyRepositoryFactory_1.CompanyRepositoryFactory("static");
        let companies = companyRepositoryFactory.createCompanyRepository().getAll();
        res.send(companies);
    }
    getOne(req, res, next) {
        let query = parseInt(req.params.id);
        let companyRepositoryFactory = new CompanyRepositoryFactory_1.CompanyRepositoryFactory("static");
        let companyRepository = companyRepositoryFactory.createCompanyRepository();
        let company = companyRepository.findByKey(query);
        res.send(company);
    }
    createOne(req, res, next) {
        let companyRepositoryFactory = new CompanyRepositoryFactory_1.CompanyRepositoryFactory("static");
        let companyRepository = companyRepositoryFactory.createCompanyRepository();
        let company = req.body;
        companyRepository.createCompany(company);
        res.send("{'status': 'ok'}");
    }
    init() {
        const create = (req, res, next) => { this.createOne(req, res, next); };
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getOne);
        this.router.post('/', create);
    }
}
exports.CompanyRouter = CompanyRouter;
exports.default = new CompanyRouter().router;
