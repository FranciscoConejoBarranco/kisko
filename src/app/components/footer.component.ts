import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="relative px-5 pt-16 pb-8 border-t border-solid border-t-white border-t-opacity-10">
      <div class="mx-auto my-0 max-w-[1200px]">
        <div class="grid gap-10 mb-16 grid-cols-[repeat(4,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:text-center max-sm:grid-cols-[1fr]">
          <div>
            <h3 class="mb-5 text-2xl font-bold text-white bg-clip-text">
              KISKO
            </h3>
            <p class="mb-5 text-base leading-relaxed text-white text-opacity-70">
              De Murcia para el mundo entero.🌏
            </p>
          </div>
          <div>
            <h4 class="mb-5 text-lg font-semibold text-white">
              Sígueme
            </h4>
            <p class="mb-5 text-base leading-relaxed text-white text-opacity-70">
              <span class="cursor-pointer pointer-events-auto">
                instagram kiskomai
              </span>
              <br />
              <span class="cursor-pointer pointer-events-auto">
                tiktok kiskomai
              </span>
              <br />
              <br />
            </p>
            <div class="flex gap-5 max-sm:justify-center">
              <a
                href="https://instagram.com/kiskomai"
                target="_blank"
                class="social-icon"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://open.spotify.com/artist/1Kk5uLhR4fkYFOX96cEPzJ"
                target="_blank"
                class="social-icon"
              >
                <i class="fab fa-spotify"></i>
              </a>
              <a
                href="https://youtube.com/kiskomai"
                target="_blank"
                class="social-icon"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 class="mb-5 text-lg font-semibold text-white">
              Contacto
            </h4>
            <p class="mb-5 text-base leading-relaxed text-white text-opacity-70">
              <span>Para colaboraciones y shows:</span>
              <br />
              <a
                href="https://instagram.com/kiskomai"
                target="_blank"
                class="text-rose-600 no-underline transition-all cursor-pointer pointer-events-auto duration-[0.3s] ease-[ease] hover:text-rose-500"
              >
                kiskomai
              </a>
            </p>
          </div>
        </div>
        <div class="flex justify-between items-center pt-8 border-t border-solid border-t-white border-t-opacity-10 max-sm:flex-col max-sm:gap-5 max-sm:text-center">
          <p class="text-sm font-light text-white text-opacity-60">
            © 2025 Kisko. Todos los derechos reservados.
          </p>
          <div class="flex gap-5">
            <a
              [routerLink]="['/privacy']"
              class="text-sm no-underline transition-all duration-[0.3s] ease-[ease] text-white text-opacity-60 hover:text-rose-500 hover:transform hover:-translate-y-2"
            >
              Privacidad
            </a>
            <a
              [routerLink]="['/terms']"
              class="text-sm no-underline transition-all duration-[0.3s] ease-[ease] text-white text-opacity-60 hover:text-rose-500 hover:transform hover:-translate-y-2"
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      :host {
        display: contents;
      }

      .social-icon {
        @apply text-2xl text-white transition-all duration-[0.3s] ease-[ease];
      }

      .social-icon:hover {
        @apply text-rose-500 -translate-y-1;
      }

      .footer-link {
        position: relative;
        display: inline-block;
      }

      .footer-link::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: #ff0055;
        transition: width 0.3s ease;
      }

      .footer-link:hover::after {
        width: 100%;
      }
    `,
  ],
})
export class FooterComponent {}
