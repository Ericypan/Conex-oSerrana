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
      request.only(['id','nome','latitude','longitude','historia','eventos'])
    );

    response.redirect().toRoute('cidadesadmin');
  }
  public async remover({ params, response }) {
    //busca da notícia que deseja-se remover

    const cidades = await Municipio.find(params.id)
    if (cidades) {
      //remoção
      await cidades.delete()
    }

    //redirecionamento para a listagem
    response.redirect().toRoute('cidadesadmin');
  }

  public async AlterarMunicipio({ view, params, response }) {
    const municipio = await Municipio.find(params.id);
    if (municipio) {
      return view.render('alterarMunicipio',{
        municipio
      });
    }

    response.redirect().back();
  }

 public async alterarmunicipio({params, request, response }){
    const municipio = await Municipio.find(params.id)

    if(municipio){
      municipio.merge(request.only(['nome','latitude','longitude','historia']))
      municipio.save()
    }
    response.redirect().toRoute('cidadesadmin');
  }

}