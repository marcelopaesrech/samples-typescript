import { Company } from '../model/Company';


/**
 * Determina os contratos do repositorio de companhias
 * 
 * */
export interface ICompanyRepository {

    /**
     * Efetua busca pela chave primaria
     * @param id
     */
    findByKey(id: number): Company;

    /**
     * Retorna todas as companhias sem paginacao
     * */
    getAll(): Array<Company>;

    /**
     * Cria uma nova companhia
     * @param company 
     */
    createCompany(company:Company);

}