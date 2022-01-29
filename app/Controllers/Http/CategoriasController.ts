// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Categoria from "App/Models/Categoria";

export default class CategoriasController {

    public async index({ view }) {

        const categorias  = await Categoria.all(); 
    
        return view.render('Categoriasadmin', {
            categorias 
        });
    }
    public async formularioCategorias({ view }) {
    
        return view.render('formularioCategorias');
    
    }
    public async salvarCategoria({ request, response }) {
        await Categoria.create(
          request.only(['id','tipo_turismo','ponto_turistico_id'])
        );
    
        response.redirect().toRoute('Categoriasadmin');
      }
      public async remover({ params, response }) {
        //busca da notícia que deseja-se remover
    
        const categorias = await Categoria.find(params.id)
        if (categorias) {
          //remoção
          await categorias.delete()
        }
    
        //redirecionamento para a listagem
        response.redirect().toRoute('Categoriasadmin');
      }


      public async AlterarCategoria({ view, params, response }) {
        const categorias  = await Categoria.find(params.id);
        if (categorias) {
          return view.render('alterarCategoria',{
            categorias
          });
        }
    
        response.redirect().back();
      }
    
     public async alterarcategorias({params, request, response }){
        const categorias = await Categoria.find(params.id)

        if(categorias){
          categorias.merge(request.only(['tipo_turismo','ponto_tursitico_id']))
          categorias.save()
        }
        response.redirect().toRoute('Categoriasadmin');
      }
}
