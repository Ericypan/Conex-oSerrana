// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
    //tela de login
    public async formulario({ view }) {
      return view.render('auth_formulario');
    }
  
    //método para autenticar
    public async login({ auth, session, request, response }) {
      const email = request.input('email')
      const senha = request.input('senha')
  
      try {
        await auth.use('web').attempt(email, senha)
        //redirecionar para a tela princal do CRUD
        response.redirect().toRoute('/Municipio/Cadastro')
      } catch {
        session.flash('autenticacao','Login/senha inválido')
        response.redirect().back()
        // return response.badRequest('Invalid credentials')
      }
    }
  
    //logout
    public async logout({ auth, response }) {
      await auth.use('web').logout()
      response.redirect().back();
    }
  }
