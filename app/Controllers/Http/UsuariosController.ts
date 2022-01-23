// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'



// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Usuario from "App/Models/Usuario";

export default class UsuariosController {

  public async index({ view }) {
    //listagem
    const usuarios = await Usuario.query().orderBy('nome');

    return view.render('usuarios/index', {
      usuarios
    });
  }

  public async formularioUsuario({ view, bouncer }) {
   await bouncer.authorize('usuario:cadastrar')
    return view.render('usuarios/formularioUsuario');
  }

  public async salvar({ request, response, bouncer }) {
    await bouncer.authorize('usuario:cadastrar')
    await Usuario.create(
      request.only(['nome','email','senha', 'papel'])
    )

    response.redirect().toRoute('usuario_index');
  }

  public async remover({ params, response, bouncer }) {
    await bouncer.authorize('usuario:cadastrar')
    const usuario = await Usuario.find(params.id);
    if (usuario) {
      await usuario.delete();
    }

    response.redirect().back();
  }
}
