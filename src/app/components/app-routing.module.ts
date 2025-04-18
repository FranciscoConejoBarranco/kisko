import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KiskoPageComponent } from "./kisko-page.component";
import { PrivacyComponent } from "./privacy.component";
import { TermsComponent } from "./terms.component";

const routes: Routes = [
  { path: "", component: KiskoPageComponent },
  { path: "privacy", component: PrivacyComponent },
  { path: "terms", component: TermsComponent },
  { path: "**", redirectTo: "" }, // Redirect any unknown paths to home
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      scrollOffset: [0, 80], // Offset for fixed header
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
