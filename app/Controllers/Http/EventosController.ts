// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Evento from "App/Models/Evento";
import Municipio from "App/Models/Municipio";

export default class EventosController {

    public async index({ view }) {

        const eventos  = await Evento.all();
    
        return view.render('Eventosadmin', {
            eventos
        });
    }
    public async formularioEvento({ view }) {
    const municipios = await Municipio.all();
        return view.render('formularioEvento' , {

          municipios
        });
    
    }
    public async salvarEventos({ request, response }) {
        await Evento.create(
          request.only(['id','nome','data','descricao','municipio_id'])
        );
    
        response.redirect().toRoute('Eventosadmin');
      }
      public async remover({ params, response }) {
        //busca da notícia que deseja-se remover
    
        const eventos = await Evento.find(params.id)
        if (eventos) {
          //remoção
          await eventos.delete()
        }
    
        //redirecionamento para a listagem
        response.redirect().toRoute('Eventosadmin');
      }

      public async AlterarEventos({ view, params, response }) {
        const evento = await Evento.find(params.id);
        const municipios = await Municipio.query().orderBy('nome');
        if (evento) {
          return view.render('alterarEventos',{
            evento,
            municipios
          });
        }
    
        response.redirect().back();
      }
    
     public async alterareventos({params, request, response }){
        const evento = await Evento.find(params.id)
    
        if(evento){
          evento.merge(request.only(['nome','latitude','longitude','categoria_id' , 'municipio_id']))
          evento.save()
        }
        response.redirect().toRoute('Eventosadmin');
      }
}
