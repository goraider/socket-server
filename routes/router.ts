import { Router, Request, Response } from 'express';


export const router = Router();


router.get('/mensajes', (req: Request, res: Response ) => {

    res.json({
        ok: true,
        mensaje: 'Todo ok!!'
    });

});

router.post('/mensajes', (req: Request, res: Response ) => {

    const cuerpo   = req.body.cuerpo;
    const de       = req.body.cuerpo;

    res.json({
        ok: true,
        mensaje: 'Todo ok!! POST LISTO',
        cuerpo,
        de
    });

});

router.post('/mensajes/:id', (req: Request, res: Response ) => {

    const cuerpo   = req.body.cuerpo;
    const de       = req.body.cuerpo;
    const id       = req.params.id;

    res.json({
        ok: true,
        mensaje: 'Todo ok!! POST id',
        cuerpo,
        de,
        id
    });

});

export default router;
