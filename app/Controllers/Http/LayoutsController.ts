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
        const hospedagem = await MeioHospedagem.query();
    
        return view.render('inicio', {
            municipios,
            pontos,
            categorias,
            hospedagem
        });

}
public async Exibircidade({ view, params, response }) {
  console.log(params.id);
  const municipios = await Municipio.query();
    const pontos = await PontoTuristico.query();
    const eventos = await Evento.query();
    const categorias = await Categoria.query();
    const hospedagem = await MeioHospedagem.query();
  const cidades = await Municipio.query()
                  .where('id',params.id)
                  .preload('eventos')
                  .preload('Ponto_Turistico')
                  .first()
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


  public async Exibirhospedagem({ view, params}) {
    console.log(params.id);
    const municipios = await Municipio.query();
    const pontos = await PontoTuristico.query();
    const eventos = await Evento.query();
    const categorias = await Categoria.query();
    const hospedagem = await MeioHospedagem.query();
    const cidades = await Municipio.query();

    return view.render('hospedagem',  {
      municipios,
         pontos,
         cidades,
         eventos,
         categorias,
         hospedagem
        });

      }

      public async Exibirsobreponto({ view, params, response}) {
        console.log(params.id);
        const municipios = await Municipio.query();
        const pontos = await PontoTuristico.query()
        .where('id',params.id)
        .preload('Municipio')
        .first()
        const eventos = await Evento.query();
        const categorias = await Categoria.query();
        const hospedagem = await MeioHospedagem.query();
    
        if (pontos) {
          return view.render('sobreponto', {
            municipios,
            pontos,
            eventos,
            categorias,
            hospedagem
          })
        } else {
          response.redirect().toRoute('cidade');
        }
      }

      public async Exibirsobrecategoria({ view, params, response}) {
        console.log(params.id);
        const categorias = await Categoria.query();
        const municipios = await Municipio.query();
        const pontos = await PontoTuristico.query();
        const eventos = await Evento.query();
        const cat = await Categoria.query()
        .where('id',params.id)
                  .preload('Ponto_Turistico')
                  .first()
        const hospedagem = await MeioHospedagem.query();
    
        if (categorias) {
          return view.render('sobrecategoria', {
            municipios,
            pontos,
            eventos,
            categorias,
            hospedagem,
            cat
          })
        } else {
          response.redirect().toRoute('cidade');
        }
      }
    }

