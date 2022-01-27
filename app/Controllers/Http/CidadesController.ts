// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PontoTuristico from 'App/Models/PontoTuristico';
import Evento from 'App/Models/Evento';
import MeioHospedagem from 'App/Models/MeioHospedagem';
import Municipio from 'App/Models/Municipio'

export default class CidadesController {

public async index({ view }) {

    const cidades = await Municipio.all();

    return view.render('cidadesadmin', {
        cidades
    });
}
public async formulario({ view }) {
  const pontos = await PontoTuristico.all();
  const eventos = await Evento.all();
  const hospedagem = await MeioHospedagem.all();
    return view.render('formulario' , {
      pontos,
      eventos,
      hospedagem
    });
    
}

public async salvar({ request, response }) {
    await Municipio.create(
      request.only(['id','nome','latitude','longitude','historia','eventos_id','ponto_turistico_id', 'meio_hospedagem_id'])
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
    const pontos = await PontoTuristico.query().orderBy('nome');
    const eventos = await Evento.query().orderBy('nome');
    const hospedagem = await MeioHospedagem.query().orderBy('nome');
    const municipio = await Municipio.find(params.id);
    if (municipio) {
      return view.render('alterarMunicipio',{
        municipio,
        pontos,
        eventos,
        hospedagem
      });
    }

    response.redirect().back();
  }

 public async alterarmunicipio({params, request, response }){
    const municipio = await Municipio.find(params.id)

    if(municipio){
      municipio.merge(request.only(['nome','latitude','longitude','historia','eventos_id','ponto_turistico_id', 'meio_hospedagem_id']))
      municipio.save()
    }
    response.redirect().toRoute('cidadesadmin');
  }

}