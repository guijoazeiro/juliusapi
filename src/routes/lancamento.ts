import { Request, Response, Router } from "express";
import { LancamentoController } from "../controller/LancamentoController";
import { UsuarioController } from "../controller/UsuarioController";
import { Lancamento } from "../entity/Lancamento";

export const routerLancamento = Router();
const LancamentoCtrl = new LancamentoController();
const usuarioCtrl = new UsuarioController()


routerLancamento.post('/', async (req: Request, res: Response)=>{
    const {idUsuario, valor, descricao, data } = req.body;
    const usuario = await usuarioCtrl.recuperarPorId(idUsuario)
    if(usuario){
        const lancamento = new Lancamento(valor, descricao, data, usuario)
        const lancamentoSalvo = await LancamentoCtrl.salvar(lancamento)
        res.status(200).json(lancamentoSalvo)
    } else {
        res.status(404).json({mensagem: 'Usuario não encontrado'})
    }

});