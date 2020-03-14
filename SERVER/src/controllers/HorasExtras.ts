import { Request, Response } from 'express';


import pool from '../database';

class horas_extras {

    public async list(req: Request, res: Response): Promise<void> {
        const horas = await pool.query('SELECT * FROM horas_extras');
        res.json(horas);
    }

    // public async getOne(req: Request, res: Response): Promise<any> {
    //     const { id } = req.params;
    //     const games = await pool.query('SELECT * FROM paciente WHERE id = ?', [id]);
    //     console.log(games.length);
    //     if (games.length > 0) {
    //         return res.json(games[0]);
    //     }
    //     res.status(404).json({ text: "The game doesn't exits" });
    // }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO horas_extras set ?', [req.body]);
        // console.log(req.body);
        res.json({ message: 'hora  Guardado' });
    }
 
}

const horas_extrascontroller = new horas_extras;
export default horas_extrascontroller;