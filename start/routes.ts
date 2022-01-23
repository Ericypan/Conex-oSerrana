

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('inicio')
}).as('inicio')

Route.get('/hospedagem', async ({ view }) => {
  return view.render('hospedagem')
})


/* PONTOS TURISTICOS POR CATEGORIA --INICIO*/

Route.get('/trilhas', async ({ view }) => {
  return view.render('trilhas')
})

Route.get('/espculturais', async ({ view }) => {
  return view.render('espculturais')
})

Route.get('/geoparques', async ({ view }) => {
  return view.render('geoparques')
})

Route.get('/mirantes', async ({ view }) => {
  return view.render('mirantes')
})

/* PONTOS TURISTICOS POR CATEGORIA FIM --- */


/* --- CIDADES INICIO --- */
Route.get('/lagoanova', async ({ view }) => {
  return view.render('lagoanova')
})

Route.get('/cerrocora', async ({ view }) => {
  return view.render('cerrocora')
})

Route.get('/bodo', async ({ view }) => {
  return view.render('bodo')
})

Route.get('/saovicente', async ({ view }) => {
  return view.render('saovicente')
})

Route.get('/tenente', async ({ view }) => {
  return view.render('tenente')
})

Route.get('/santana', async ({ view }) => {
  return view.render('santana')
})


/* --- PONTOS TURISTICOS DESCRIÇÃO --- */

Route.get('/rotatoria', async ({ view }) => {
  return view.render('rotatoria')
})


/* --- AREA ADMINISTRATIVA Cidades --- */

Route.get('/Municipio/Cadastro' , 'CidadesController.index').as('cidadesadmin').middleware('auth');
Route.get('/cadastrar/Cidade' , 'CidadesController.formulario').as('formulario').middleware('auth');
Route.post('/cadastrar/Cidade' , 'CidadesController.salvar').as('salvar').middleware('auth');

Route.get('/remover/:id','CidadesController.remover').as('remover').middleware('auth');
Route.get('/alterar/:id','CidadesController.alterar').as('alterar').middleware('auth');

/* --- AREA ADMINISTRATIVA Ponto Turistico --- */

Route.get('/PontoTuristico/Cadastro' , 'PontoTuristicoController.index').as('PontoTuristicoadmin').middleware('auth');
Route.get('/cadastrar/Ponto' , 'PontoTuristicoController.formularioPonto').as('formularioPonto').middleware('auth');
Route.post('/cadastrar/Ponto' , 'PontoTuristicoController.salvarponto').as('salvarponto').middleware('auth');

Route.get('/removerponto/:id','PontoTuristicoController.remover').as('removerponto').middleware('auth');
Route.get('/alterarponto/:id','PontoTuristicoController.alterar').as('alterarponto').middleware('auth');

/* --- AREA ADMINISTRATIVA Meios de Hospedagem --- */

Route.get('/Hospedagem/Cadastro' , 'MeioHospedagemController.index').as('Hospedagemadmin').middleware('auth');
Route.get('/cadastrar/Hospedagem' , 'MeioHospedagemController.formularioHospedagem').as('formularioHospedagem').middleware('auth');
Route.post('/cadastrar/Hospedagem' , 'MeioHospedagemController.salvarHospedagem').as('salvarHospedagem').middleware('auth');

Route.get('/removerHospedagem/:id','MeioHospedagemController.remover').as('removerHospedagem').middleware('auth');
Route.get('/alterarHospedagem/:id','MeioHospedagemController.alterar').as('alterarHospedagem').middleware('auth');

/* --- AREA ADMINISTRATIVA Eventos--- */

Route.get('/Eventos/Cadastro' , 'EventosController.index').as('Eventoadmin').middleware('auth');
Route.get('/cadastrar/Evento' , 'EventosController.formularioEvento').as('formularioEvento').middleware('auth');
Route.post('/cadastrar/Evento' , 'EventosController.salvarEvento').as('salvarEvento').middleware('auth');

Route.get('/removerEvento/:id','EventosController.remover').as('removerEvento').middleware('auth');
Route.get('/alterarEvento/:id','EventosController.alterar').as('alterarEvento').middleware('auth');


/* --- AREA ADMINISTRATIVA Categorias--- */

Route.get('/Categorias/Cadastro' , 'CategoriasController.index').as('Categoriasadmin').middleware('auth');
Route.get('/cadastrar/Categoria' , 'CategoriasController.formularioCategorias').as('formularioCategorias').middleware('auth');
Route.post('/cadastrar/Categoria' , 'CategoriasController.salvarCategoria').as('salvarCategoria').middleware('auth');

Route.get('/removerCategoria/:id','CategoriasController.remover').as('removerCategoria').middleware('auth');
Route.get('/alterarCategoria/:id','CategoriasController.alterar').as('alterarCategoria').middleware('auth');


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


