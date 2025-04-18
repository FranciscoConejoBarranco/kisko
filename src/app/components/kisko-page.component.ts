import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar.component";
import { HeroComponent } from "./hero.component";
import { AboutComponent } from "./about.component";
import { ReleasesComponent } from "./releases.component";
import { ContactComponent } from "./contact.component";
import { FooterComponent } from "./footer.component";

@Component({
  selector: "app-kisko-page",
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ReleasesComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <div class="min-h-screen bg-black">
      <app-navbar></app-navbar>
      <main
        class="overflow-hidden relative px-5 pt-32 pb-0 -mb-0.5 min-h-screen"
      >
        <!-- Hero Section - Black -->
        <div class="bg-black">
          <app-hero></app-hero>
        </div>

        <!-- About Section - Gray -->
        <div class="bg-neutral-900">
          <app-about></app-about>
        </div>

        <!-- Releases Section - Black -->
        <div class="bg-black">
          <app-releases></app-releases>
        </div>

        <!-- Contact Section - Gray -->
        <div class="bg-neutral-900">
          <app-contact></app-contact>
        </div>

        <!-- Footer - Black -->
        <div class="bg-black">
          <app-footer></app-footer>
        </div>

        <!-- Gradient Overlay -->
        <div
          class="absolute bottom-0 left-0 w-full pointer-events-none h-[200px] bg-gradient-to-t from-black to-transparent"
        ></div>
      </main>
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }

      :host ::ng-deep section {
        position: relative;
      }

      :host ::ng-deep section::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100px;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.5) 0%,
          transparent 100%
        );
        pointer-events: none;
        z-index: 1;
      }

      :host ::ng-deep section::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100px;
        background: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.5) 0%,
          transparent 100%
        );
        pointer-events: none;
        z-index: 1;
      }

      /* Add smooth transitions between sections */
      :host ::ng-deep div[class*="bg-"] {
        transition: background-color 0.3s ease;
      }
    `,
  ],
})
export class KiskoPageComponent {}
