

import Route from '@ioc:Adonis/Core/Route'

Route.get('/inicio', async ({ view }) => {
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
