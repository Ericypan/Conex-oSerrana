

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

Route.get('/Municipio/Cadastro' , 'CidadesController.index').as('cidadesadmin');
Route.get('/cadastrar/Cidade' , 'CidadesController.formulario').as('formulario');
Route.post('/cadastrar/Cidade' , 'CidadesController.salvar').as('salvar');

Route.get('/remover/:id','CidadesController.remover').as('remover');
Route.get('/alterar/:id','CidadesController.alterar').as('alterar');

/* --- AREA ADMINISTRATIVA Ponto Turistico --- */

Route.get('/PontoTuristico/Cadastro' , 'PontoTuristicoController.index').as('PontoTuristicoadmin');
Route.get('/cadastrar/Ponto' , 'PontoTuristicoController.formularioPonto').as('formularioPonto');
Route.post('/cadastrar/Ponto' , 'PontoTuristicoController.salvarponto').as('salvarponto');

Route.get('/removerponto/:id','PontoTuristicoController.remover').as('removerponto');
Route.get('/alterarponto/:id','PontoTuristicoController.alterar').as('alterarponto');

/* --- AREA ADMINISTRATIVA Meios de Hospedagem --- */

Route.get('/Hospedagem/Cadastro' , 'MeioHospedagemController.index').as('Hospedagemadmin');
Route.get('/cadastrar/Hospedagem' , 'MeioHospedagemController.formularioHospedagem').as('formularioHospedagem');
Route.post('/cadastrar/Hospedagem' , 'MeioHospedagemController.salvarHospedagem').as('salvarHospedagem');

Route.get('/removerHospedagem/:id','MeioHospedagemController.remover').as('removerHospedagem');
Route.get('/alterarHospedagem/:id','MeioHospedagemController.alterar').as('alterarHospedagem');

/* --- AREA ADMINISTRATIVA Eventos--- */

Route.get('/Eventos/Cadastro' , 'EventosController.index').as('Eventoadmin');
Route.get('/cadastrar/Evento' , 'EventosController.formularioEvento').as('formularioEvento');
Route.post('/cadastrar/Evento' , 'EventosController.salvarEvento').as('salvarEvento');

Route.get('/removerEvento/:id','EventosController.remover').as('removerEvento');
Route.get('/alterarEvento/:id','EventosController.alterar').as('alterarEvento');


/* --- AREA ADMINISTRATIVA Categorias--- */

Route.get('/Categorias/Cadastro' , 'CategoriasController.index').as('Categoriasadmin');
Route.get('/cadastrar/Categoria' , 'CategoriasController.formularioCategorias').as('formularioCategorias');
Route.post('/cadastrar/Categoria' , 'CategoriasController.salvarCategoria').as('salvarCategoria');

Route.get('/removerCategoria/:id','CategoriasController.remover').as('removerCategoria');
Route.get('/alterarCategoria/:id','CategoriasController.alterar').as('alterarCategoria');