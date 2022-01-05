// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Municipio from 'App/Models/Municipio'

export default class CidadesController {

public async index({ view }) {

    const cidades = await Municipio.all();

    return view.render('cidadesadmin', {
        cidades: cidades
    });
}
public async formulario({ view }) {

    return view.render('formulario');

}

public async salvar({ request, response }) {
    await Municipio.create(
      request.only(['id','nome','latitude','longitude','historia','eventos','meio_hospedagem','Ponto_Turistico'])
    );

    response.redirect().toRoute('cidadesadmin');
  }
  public async remover({ params, response }) {
    //busca da notícia que deseja-se remover

    const cidades = await Municipio.find(params.id)
    if (cidades) {
      //remoção
      await Municipio.delete()
    }

    //redirecionamento para a listagem
    response.redirect().toRoute('cidadesadmin');
  }
}