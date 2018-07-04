
/**
 * Represents a company
 * 
 * */
export class Company {
    id: number;
    name: string;
    ticket: string;

    constructor() {

    }

    public toString(): string {
        return this.ticket + ' - ' + this.name;
    }

}

export default Company;