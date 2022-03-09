import { Request, Response, Router } from "express";
import { UsuarioController } from "../controller/UsuarioController";
import { Usuario } from "../entity/Usuario";

export const routerUsuario = Router()
const usuarioCtrl = new UsuarioController()

routerUsuario.post('/', async (req: Request, res: Response) => {
    const {nome, email} = req.body;
    const usuario = new Usuario(nome, email)
    const usuarioSalvo = await usuarioCtrl.salvar(usuario)    
    res.status(200).json(usuarioSalvo)
})


routerUsuario.get('/', async (req: Request, res: Response) => {
    const usuarios = await usuarioCtrl.recuperarTodos()
    res.json(usuarios)
})

routerUsuario.get('/lancamentos/:idUsuario', async (req: Request, res: Response)=>{
    const idUsuario = parseInt(req.params.idUsuario);
    const lancamentos = await usuarioCtrl. recuperarLancamentosDoUsuario(idUsuario)
    res.json(lancamentos)
})