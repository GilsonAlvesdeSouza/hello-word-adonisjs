import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.get("/admin", "PainelController.admin").as("painel-admin");

  Route.group(() => {
    Route.get("/", "PainelController.index").as("painel");
    Route.get("/usuarios", "PainelController.usuarios").as("painel-usuarios");
    Route.get("/usuarios/:id", "PainelController.usuarioById")
      .where("id", Route.matchers.number())
      .as("painel-usuario-id");
    Route.get("/usuarios/:slug", "PainelController.usuarioBySlug")
      .where("slug", /[a-z_-]+$/)
      .as("painel-usuario-slug");
  }).prefix("/painel");
}).prefix("/api");
