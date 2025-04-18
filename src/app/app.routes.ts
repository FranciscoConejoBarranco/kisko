import { Routes } from "@angular/router";
import { KiskoPageComponent } from "./components/kisko-page.component";
import { PrivacyComponent } from "./components/privacy.component";
import { TermsComponent } from "./components/terms.component";

export const routes: Routes = [
  {
    path: "",
    component: KiskoPageComponent,
  },
  {
    path: "privacy",
    component: PrivacyComponent,
  },
  {
    path: "terms",
    component: TermsComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
];
