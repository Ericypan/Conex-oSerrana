// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import PontoTuristico from 'App/Models/PontoTuristico';
import Categoria from 'App/Models/Categoria';
import Municipio from 'App/Models/Municipio';

export default class PontoTuristicoController {  

public async index({ view }) {

    const Pontos  = await PontoTuristico.all();


    return view.render('PontoTuristicoadmin', {
        Pontos
    });
}
public async formularioPonto({ view }) {
const categorias = await Categoria.all();
const municipios = await Municipio.all();
    return view.render('formularioPonto' , {
      categorias,
      municipios
    });

}

public async salvarPonto({ request, response }) {
    await PontoTuristico.create(
      request.only(['id','nome','latitude','longitude','sobre','categoria_id' , 'municipio_id'])
    );

    response.redirect().toRoute('PontoTuristicoadmin');
  }
  public async remover({ params, response }) {
    //busca da notícia que deseja-se remover

    const Pontos = await PontoTuristico.find(params.id)
    if (Pontos) {
      //remoção
      await Pontos.delete()
    }

    //redirecionamento para a listagem
    response.redirect().toRoute('PontoTuristicoadmin');
  }

  public async AlterarPonto({ view, params, response }) {
    const ponto = await PontoTuristico.find(params.id);
    const categorias = await Categoria.query().orderBy('tipo_turismo');
    const municipios = await Municipio.query().orderBy('nome');
    if (ponto) {
      return view.render('alterarPonto',{
        ponto,
        categorias,
        municipios
      });
    }

    response.redirect().back();
  }

 public async alterarponto({params, request, response }){
    const ponto = await PontoTuristico.find(params.id)

    if(ponto){
      ponto.merge(request.only(['nome','latitude','longitude', 'sobre','categoria_id' , 'municipio_id']))
      ponto.save()
    }
    response.redirect().toRoute('PontoTuristicoadmin');
  }
}