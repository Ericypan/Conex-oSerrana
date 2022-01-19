// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { Response } from "@adonisjs/core/build/standalone";
import Usuario from "App/Models/Usuario";

export default class UsuariosController {

public async index ({ view }) {
 const usuarios = await Usuario.query().orderBy('nome');


    return view.render('usuarios/index', {
        usuarios
    });
}

public async formularioUsuario ({ view }) {
     return view.render('usuarios/formularioUsuario')
}

public async salvar ({ request, response}) {
    await Usuario.create(
        request.only(['nome', 'email', 'senha']) 
    )

    response.redirect().toRoute('usuario_index')
}

public async remover ({ params, response}) {
    const usuario = await Usuario.find(params.id);
    if (usuario){
        await usuario.delete();
    }
    response.redirect().back 
}


}
