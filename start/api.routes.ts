import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.get("/admin", "PainelController.admin").as("painel-admin");

  Route.group(() => {
    Route.get("/", "PainelController.index").as("painel");
    Route.get("/usuarios/:id?", "PainelController.usuarios")
      .where("id", Route.matchers.number())
      .as("painel-usuario");
    Route.get("/usuarios/:slug", "PainelController.usuarioBySlug")
      .where("slug", /[a-z_-]+$/)
      .as("painel-usuario-slug");
    Route.get("/docs/*", "PainelController.docs").as("painel-docs");
  }).prefix("/painel");
}).prefix("/api");
