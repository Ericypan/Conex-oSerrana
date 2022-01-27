// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Municipio from 'App/Models/Municipio'
import Evento from "App/Models/Evento";
import PontoTuristico from 'App/Models/PontoTuristico';
import Categoria from 'App/Models/Categoria';
import MeioHospedagem from "App/Models/MeioHospedagem";

export default class LayoutsController {

    public async index({ view }) {

        const municipios = await Municipio.query();
        const pontos = await PontoTuristico.query();
        const eventos = await Evento.query();
        const categorias = await Categoria.query();
        const hospedagem = await MeioHospedagem.query();
    
        return view.render('layouts/layout',  {
             municipios,
             pontos,
             eventos,
             categorias,
             hospedagem
        });

        
    }


    public async inicio({ view }) {
        const municipios = await Municipio.query();
        const pontos = await PontoTuristico.query();
        const categorias = await Categoria.query();
    
        return view.render('inicio', {
            municipios,
            pontos,
            categorias
        });

}
public async Exibircidade({ view, params, response }) {
  console.log(params.id);
  const cidades = await Municipio.query()
                  .where('id',params.id)
                  .preload('eventos')
                  .preload('Ponto_Turistico')
                  .first()
    const municipios = await Municipio.query();
    const pontos = await PontoTuristico.query();
    const eventos = await Evento.query();
    const categorias = await Categoria.query();
    const hospedagem = await MeioHospedagem.query();
    
    if (cidades) {
      return view.render('cidade', {
        cidades,
        municipios,
        pontos,
        eventos,
        categorias,
        hospedagem
      })
    } else {
      response.redirect().toRoute('inicio');
    }
  }

}
