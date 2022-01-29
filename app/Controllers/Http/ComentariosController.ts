// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comentario from "App/Models/Comentario";

export default class ComentariosController {


    public async cadastrarComentario({ request, response }) {
        await Comentario.create(
          request.only(['nome', 'conteudo'])
        )
    
        response.redirect().back();
      }
    
}