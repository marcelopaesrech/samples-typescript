import { Company } from '../model/Company';
import { ICompanyRepository } from './ICompanyRepository';
import { IPublisher } from '../messaging/IPublisher';

export class CompanyRepository implements ICompanyRepository{
    
    

    companies: Company[];

    constructor(private publisher:IPublisher) {
        this.companies = [
            { id: 1, name: "Vale do Rio Doce", ticket: "VALE5" },
            { id: 2, name: "Companhia Santanense", ticket: "CTSA4" },
            { id: 3, name: "Log-in logística intermodal", ticket: "LOGN3" },
            { id: 4, name: "Romi Industrial", ticket: "ROMI3" }
        ];
    }

    public findByKey(id: number): Company {
        let comp = this.companies.find(comp => comp.id === id);
        return comp;
    }

    getAll(): Company[] {
        return this.companies;
    }

    createCompany(company:Company) {
        this.publisher.send("sample", "valor meu");
    }

}


