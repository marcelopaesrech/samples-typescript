import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import Company from './model/Company';
import CompanyRouter from './routes/CompanyRouter';


class App {

    

    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    public middleware(): void{
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    public routes(): void {
        this.express.use('/api/v1/companies', CompanyRouter);
    }

}

export default new App().express;
