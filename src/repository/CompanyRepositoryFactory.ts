import { ICompanyRepository } from "./ICompanyRepository";
import { CompanyRepository } from "./CompanyRepository";
import { IPublisher } from "../messaging/IPublisher";
import { PublisherFactory } from "../messaging/PublisherFactory";


export class CompanyRepositoryFactory {

    companyRepositoryType: string;

    constructor(type: string) {
        this.companyRepositoryType = type;
    }

    public createCompanyRepository(): ICompanyRepository {
        if (this.companyRepositoryType === 'static') {
            let publisher:IPublisher = new PublisherFactory().createPublisher();
            return new CompanyRepository(publisher);
        } else {
            throw new Error("Método não implementado");
        }
    }

}