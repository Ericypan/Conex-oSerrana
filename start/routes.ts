

import Route from '@ioc:Adonis/Core/Route'


                                     /* --- AREA ADMINISTRATIVA INICIO--- */              


/* --- AREA ADMINISTRATIVA Cidades --- */

Route.get('/Municipio/Cadastro' , 'CidadesController.index').as('cidadesadmin').middleware('auth');
Route.get('/cadastrar/Cidade' , 'CidadesController.formulario').as('formulario').middleware('auth');
Route.post('/cadastrar/Cidade' , 'CidadesController.salvar').as('salvar').middleware('auth');

Route.get('/remover/:id','CidadesController.remover').as('remover').middleware('auth');
Route.get('/alterarMunicipio/:id','CidadesController.AlterarMunicipio').as('AlterarMunicipio').middleware('auth');
Route.post('/alterarMunicipio/:id','CidadesController.alterarmunicipio').as('alterarmunicipio').middleware('auth');

/* --- AREA ADMINISTRATIVA Ponto Turistico --- */

Route.get('/PontoTuristico/Cadastro' , 'PontoTuristicoController.index').as('PontoTuristicoadmin').middleware('auth');
Route.get('/cadastrar/Ponto' , 'PontoTuristicoController.formularioPonto').as('formularioPonto').middleware('auth');
Route.post('/cadastrar/Ponto' , 'PontoTuristicoController.salvarPonto').as('salvarPonto').middleware('auth');

Route.get('/removerponto/:id','PontoTuristicoController.remover').as('removerponto').middleware('auth');
Route.get('/alterarPonto/:id','PontoTuristicoController.AlterarPonto').as('AlterarPonto').middleware('auth');
Route.post('/alterarPonto/:id','PontoTuristicoController.alterarponto').as('alterarponto').middleware('auth');

/* --- AREA ADMINISTRATIVA Meios de Hospedagem --- */

Route.get('/Hospedagem/Cadastro' , 'MeioHospedagemController.index').as('Hospedagemadmin').middleware('auth');
Route.get('/cadastrar/Hospedagem' , 'MeioHospedagemController.formularioHospedagem').as('formularioHospedagem').middleware('auth');
Route.post('/cadastrar/Hospedagem' , 'MeioHospedagemController.salvarHospedagem').as('salvarHospedagem').middleware('auth');

Route.get('/removerHospedagem/:id','MeioHospedagemController.remover').as('removerHospedagem').middleware('auth');
Route.get('/alterarHospedagem/:id','MeioHospedagemController.AlterarHospedagem').as('AlterarHospedagem').middleware('auth');
Route.post('/alterarHospedagem/:id','MeioHospedagemController.alterarhospedagem').as('alterarhospedagem').middleware('auth');

/* --- AREA ADMINISTRATIVA Eventos--- */

Route.get('/Eventos/Cadastro' , 'EventosController.index').as('Eventosadmin').middleware('auth');
Route.get('/cadastrar/Evento' , 'EventosController.formularioEvento').as('formularioEvento').middleware('auth');
Route.post('/cadastrar/Evento' , 'EventosController.salvarEventos').as('salvarEventos').middleware('auth');

Route.get('/removerEvento/:id','EventosController.remover').as('removerEvento').middleware('auth');
Route.get('/alterarEventos/:id','EventosController.AlterarEventos').as('AlterarEventos').middleware('auth');
Route.post('/alterarEventos/:id','EventosController.alterareventos').as('alterareventos').middleware('auth');


/* --- AREA ADMINISTRATIVA Categorias--- */

Route.get('/Categorias/Cadastro' , 'CategoriasController.index').as('Categoriasadmin').middleware('auth');
Route.get('/cadastrar/Categoria' , 'CategoriasController.formularioCategorias').as('formularioCategorias').middleware('auth');
Route.post('/cadastrar/Categoria' , 'CategoriasController.salvarCategoria').as('salvarCategoria').middleware('auth');

Route.get('/removerCategoria/:id','CategoriasController.remover').as('removerCategoria').middleware('auth');
Route.get('/alterarCategoria/:id','CategoriasController.AlterarCategoria').as('AlterarCategoria').middleware('auth');
Route.post('/alterarCategoria/:id','CategoriasController.alterarcategorias').as('alterarcategoria').middleware('auth');

/* --- AREA ADMINISTRATIVA Fotos--- */
Route.get('/Fotos/Adicionar' , 'FotosController.index').as('fotosadmin').middleware('auth');
Route.get('/adicionar/Foto' , 'FotosController.formularioFotos').as('formulariofotos').middleware('auth');
Route.post('/adicionar/Foto' , 'FotosController.salvarFotos').as('salvarFotos').middleware('auth');

Route.get('/removerFoto/:id','FotosController.remover').as('removerFoto').middleware('auth');
Route.get('/alterarFoto/:id','FotosController.AlterarFotos').as('AlterarFotos').middleware('auth');
Route.post('/alterarFoto/:id','FotosController.alterarfotos').as('alterarfotos').middleware('auth');

//CRUD usuarios
Route.group(() => {
  Route.get('/','UsuariosController.index').as('usuario_index');
  Route.get('/cadastrar','UsuariosController.formularioUsuario').as('usuario_cadastrar');
  Route.post('/cadastrar','UsuariosController.salvar').as('usuario_salvar');
  Route.get('/:id/remover','UsuariosController.remover').as('usuario_remover');
}).prefix('/usuario').middleware('auth')
//kdjs

Route.group(() => {
  Route.get('/','AuthController.formulario').as('auth_formulario');
  Route.post('/','AuthController.login').as('auth_login');
  Route.get('/logout','AuthController.logout').as('auth_logout');
}).prefix('/auth')


                              /* --- AREA ADMINISTRATIVA FIM--- */



/* --- ?????????????????????????????????--- */

Route.get('/layout','LayoutsController.index').as('layouts/layout');
Route.get('/inicio','LayoutsController.inicio').as('inicio');


Route.get('/:id/cidade','LayoutsController.Exibircidade').as('cidade');
Route.get('/hospedagem','LayoutsController.Exibirhospedagem').as('hospedagem');
Route.get('/:id/sobreponto','LayoutsController.Exibirsobreponto').as('sobreponto');
Route.get('/:id/sobrecategoria','LayoutsController.Exibirsobrecategoria').as('sobrecategoria');



/* --- COMENTARIOS--- */

Route.post('inicio/cadastar-comentario','ComentariosController.cadastrarComentario').as('cadastrar-comentario');