// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Evento from "App/Models/Evento";

export default class EventosController {

    public async index({ view }) {

        const Event  = await Evento.all();
    
        return view.render('Eventosadmin', {
            Event: Event 
        });
    }
    public async formularioEvento({ view }) {
    
        return view.render('formularioEvento');
    
    }
    public async salvarEvento({ request, response }) {
        await Evento.create(
          request.only(['id','nome','data','descricao','municipio_id'])
        );
    
        response.redirect().toRoute('Eventosadmin');
      }
      public async removerHospedagem({ params, response }) {
        //busca da notícia que deseja-se remover
    
        const Event = await Evento.find(params.id)
        if (Event) {
          //remoção
          await Event.delete()
        }
    
        //redirecionamento para a listagem
        response.redirect().toRoute('Eventosadmin');
      }
}
