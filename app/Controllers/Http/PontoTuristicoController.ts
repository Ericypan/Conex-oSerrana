// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import PontoTuristico from 'App/Models/PontoTuristico';

export default class PontoTuristicoController {  

public async index({ view }) {

    const Pontos  = await PontoTuristico.all();

    return view.render('PontoTuristicoadmin', {
        Pontos: Pontos
    });
}
public async formularioPonto({ view }) {

    return view.render('formularioPonto');

}
public async salvarponto({ request, response }) {
    await PontoTuristico.create(
      request.only(['id','nome','latitude','longitude','Foto'])
    );

    response.redirect().toRoute('PontoTuristicoadmin');
  }
  public async removerponto({ params, response }) {
    //busca da notícia que deseja-se remover

    const Pontos = await PontoTuristico.find(params.id)
    if (Pontos) {
      //remoção
      await Pontos.delete()
    }

    //redirecionamento para a listagem
    response.redirect().toRoute('PontoTuristicoadmin');
  }
}