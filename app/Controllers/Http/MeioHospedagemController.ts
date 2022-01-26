// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import MeioHospedagem from "App/Models/MeioHospedagem";
import Municipio from "App/Models/Municipio";

export default class MeioHospedagemController {
    public async index({ view }) {

        const Meios  = await MeioHospedagem.all();
    
        return view.render('Hospedagemadmin', {
            Meios 
        });
    }
    public async formularioHospedagem({ view }) {
      const municipios = await Municipio.all();
        return view.render('formularioHospedagem' , {
          municipios
        });
    }
    public async salvarHospedagem({ request, response }) {
        await MeioHospedagem.create(
          request.only(['id','nome','latitude','longitude','instagram', 'whatsapp','endereco', 'municipio_id'])
        );
    
        response.redirect().toRoute('Hospedagemadmin');
      }
      public async removerHospedagem({ params, response }) {
        //busca da notícia que deseja-se remover
    
        const Meios = await MeioHospedagem.find(params.id)
        if (Meios) {
          //remoção
          await Meios.delete()
        }
    
        //redirecionamento para a listagem
        response.redirect().toRoute('Hospedagemadmin');
      }

      public async AlterarHospedagem({ view, params, response }) {
        const hospedagem = await MeioHospedagem.find(params.id);
        const municipios = await Municipio.query().orderBy('nome');
        if (hospedagem) {
          return view.render('alterarHospedagem',{
            hospedagem,
            municipios
          });
        }
    
        response.redirect().back();
      }
    
     public async alterarhospedagem({params, request, response }){
        const hospedagem = await MeioHospedagem.find(params.id)
    
        if(hospedagem){
          hospedagem.merge(request.only(['nome','latitude','longitude','instagram', 'whatsapp','endereco', 'municipio_id']))
          hospedagem.save()
        }
        response.redirect().toRoute('Hospedagemadmin');
      }

}

