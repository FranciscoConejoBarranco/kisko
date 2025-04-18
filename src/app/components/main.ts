import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { provideRouter } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";

bootstrapApplication(AppComponent, {
  providers: [provideRouter(AppRoutingModule.routes)],
}).catch((err) => console.error(err));
