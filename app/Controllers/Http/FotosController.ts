// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Foto from "App/Models/Foto";
import PontoTuristico from "App/Models/PontoTuristico";
export default class FotosController {

    public async index({ view }) {

        const foto  = await Foto.all(); 
    
        return view.render('fotosadmin', {
            foto
        });
    }
    public async formularioFotos({ view }) {
    
        return view.render('formulariofotos');
    
    }

    public async salvarFotos({ request }){
        const foto = request.file('PontoTuristico_id', {
          types: ['image'],
          size: '10mb'
        })
      
        await foto.moveAll(Helpers.tmpPath('uploads'))
      
        if (!foto.movedAll()) {
          return foto.errors()
        }
      })

    }

