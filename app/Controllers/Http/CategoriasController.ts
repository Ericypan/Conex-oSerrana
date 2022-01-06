// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Categoria from "App/Models/Categoria";

export default class CategoriasController {

    public async index({ view }) {

        const categoria  = await Categoria.all();
    
        return view.render('Categoriasadmin', {
            categoria : categoria  
        });
    }
    public async formularioCategorias({ view }) {
    
        return view.render('formularioCategorias');
    
    }
    public async salvarCategoria({ request, response }) {
        await Categoria.create(
          request.only(['id','tipo_turismo','regiao_municipio'])
        );
    
        response.redirect().toRoute('Categoriasadmin');
      }
      public async removerCategoria({ params, response }) {
        //busca da notícia que deseja-se remover
    
        const categoria = await Categoria.find(params.id)
        if (categoria) {
          //remoção
          await categoria.delete()
        }
    
        //redirecionamento para a listagem
        response.redirect().toRoute('Eventosadmin');
      }
}
