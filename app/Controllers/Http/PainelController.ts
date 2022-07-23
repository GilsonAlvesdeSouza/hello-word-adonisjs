// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelController {
  protected users = [
    { id: 1, slug: "mancha", name: "Gilson Alves" },
    { id: 2, slug: "fran", name: "Franciele Araújo França" },
    { id: 3, slug: "turned", name: "Yago Alves Franca" },
    { id: 4, slug: "cantinfo", name: "Wilson Alves de Souza" },
    { id: 5, slug: "desconhecido", name: "Ercy Pereira da Silva Souza" },
  ];

  async index() {
    return { response: "Index do painel" };
  }

  async usuarios() {
    return { users: this.users };
  }

  async usuarioById({ params }) {
    const id = params["id"];
    const user = this.users.find((user) => user.id == id);
    return user ? user : { error: "Nenhum Usuário encontrado!" };
  }

  async usuarioBySlug({ params }) {
    const slug = params["slug"];
    const user = this.users.find((user) => user.slug == slug);
    return user ? user : { error: "Nenhum Usuário encontrado!" };
  }

  async admin() {
    return { response: "painel admin" };
  }
}
