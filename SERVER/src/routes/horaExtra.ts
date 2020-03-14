import express, { Router } from 'express';
import  horas_extrascontroller  from '../controllers/HorasExtras';  

class GameRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        // medico
        this.router.get('/horasExtras/', horas_extrascontroller.list );
        this.router.post('/horasExtras/', horas_extrascontroller.create );
       


    }

}

export default new GameRoutes().router;

