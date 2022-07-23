import Route from "@ioc:Adonis/Core/Route";

Route.get("/", "HomeController.index").as("home");
Route.get("/sobre", "HomeController.sobre").as("sobre");
