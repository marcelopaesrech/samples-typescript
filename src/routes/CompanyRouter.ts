import { Router, Request, Response, NextFunction } from 'express';
import Company from '../model/Company';
import { CompanyRepositoryFactory } from '../repository/CompanyRepositoryFactory';
import { ICompanyRepository } from '../repository/ICompanyRepository';


export class CompanyRouter {

    router: Router;

    constructor() {
        this.router = Router();
        
        this.init();
    }

    public getAll(req: Request, res: Response, next: NextFunction) {
        let companyRepositoryFactory: CompanyRepositoryFactory = new CompanyRepositoryFactory("static");
        let companies: Company[] = companyRepositoryFactory.createCompanyRepository().getAll();
        res.send(companies);
    }

    public getOne(req: Request, res: Response, next: NextFunction) {
        let query = parseInt(req.params.id);
        let companyRepositoryFactory: CompanyRepositoryFactory = new CompanyRepositoryFactory("static");
        let companyRepository: ICompanyRepository = companyRepositoryFactory.createCompanyRepository();
        let company = companyRepository.findByKey(query);
        res.send(company);
    }

    public createOne(req: Request, res: Response, next: NextFunction) {
        let companyRepositoryFactory: CompanyRepositoryFactory = new CompanyRepositoryFactory("static");
        let companyRepository: ICompanyRepository = companyRepositoryFactory.createCompanyRepository();
        let company:Company = req.body;
        companyRepository.createCompany(company);
        res.send("{'status': 'ok'}");
    }

    public init(): void {
        const create = (req: Request, res: Response, next: NextFunction) => {this.createOne(req,res,next);};
        
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getOne);
        this.router.post('/', create);
    }

}

export default new CompanyRouter().router;