// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import MeioHospedagem from "App/Models/MeioHospedagem";

export default class MeioHospedagemController {
    public async index({ view }) {

        const Meios  = await MeioHospedagem.all();
    
        return view.render('Hospedagemadmin', {
            Meios: Meios 
        });
    }
    public async formularioHospedagem({ view }) {
    
        return view.render('formularioHospedagem');
    
    }
    public async salvarHospedagem({ request, response }) {
        await MeioHospedagem.create(
          request.only(['id','nome','latitude','longitude','instagram', 'whatsapp','endereco'])
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

}

