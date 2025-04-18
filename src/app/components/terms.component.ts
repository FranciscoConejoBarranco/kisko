import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar.component";
import { FooterComponent } from "./footer.component";

@Component({
  selector: "app-terms",
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-black">
      <app-navbar></app-navbar>

      <main class="px-5 pt-32 pb-16 min-h-screen bg-neutral-900">
        <div class="max-w-[800px] mx-auto">
          <h1 class="text-4xl font-bold text-white mb-8">
            Términos y Condiciones
          </h1>

          <div class="space-y-6 text-white/80">
            <section class="bg-black/30 p-6 rounded-2xl">
              <h2 class="text-2xl font-semibold text-white mb-4">
                1. Aceptación de los Términos
              </h2>
              <p>
                Al acceder y utilizar este sitio web, aceptas estar sujeto a
                estos términos y condiciones de uso. Si no estás de acuerdo con
                alguno de estos términos, te recomendamos que no utilices
                nuestro sitio.
              </p>
            </section>

            <section class="bg-black/30 p-6 rounded-2xl">
              <h2 class="text-2xl font-semibold text-white mb-4">
                2. Propiedad Intelectual
              </h2>
              <p class="mb-4">
                Todo el contenido presente en este sitio web, incluyendo pero no
                limitado a:
              </p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Música y composiciones</li>
                <li>Imágenes y fotografías</li>
                <li>Textos y diseños</li>
                <li>Logotipos y marcas</li>
              </ul>
              <p class="mt-4">
                Está protegido por leyes de propiedad intelectual y pertenece a
                KISKO o sus respectivos propietarios.
              </p>
            </section>

            <section class="bg-black/30 p-6 rounded-2xl">
              <h2 class="text-2xl font-semibold text-white mb-4">
                3. Uso Permitido
              </h2>
              <p class="mb-4">Se permite el uso del sitio web para:</p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Acceder a información sobre KISKO y su música</li>
                <li>
                  Compartir contenido en redes sociales mediante los botones
                  proporcionados
                </li>
                <li>Contactar para colaboraciones profesionales</li>
              </ul>
            </section>

            <section class="bg-black/30 p-6 rounded-2xl">
              <h2 class="text-2xl font-semibold text-white mb-4">
                4. Restricciones
              </h2>
              <p class="mb-4">No está permitido:</p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Copiar o reproducir el contenido sin autorización</li>
                <li>Utilizar el contenido con fines comerciales sin permiso</li>
                <li>Modificar o alterar cualquier parte del sitio web</li>
                <li>
                  Realizar actividades que puedan dañar el funcionamiento del
                  sitio
                </li>
              </ul>
            </section>

            <section class="bg-black/30 p-6 rounded-2xl">
              <h2 class="text-2xl font-semibold text-white mb-4">
                5. Enlaces a Terceros
              </h2>
              <p>
                Nuestro sitio puede contener enlaces a sitios de terceros (como
                Spotify, Instagram, etc.). No nos hacemos responsables del
                contenido o las prácticas de privacidad de estos sitios.
              </p>
            </section>

            <section class="bg-black/30 p-6 rounded-2xl">
              <h2 class="text-2xl font-semibold text-white mb-4">
                6. Modificaciones
              </h2>
              <p>
                Nos reservamos el derecho de modificar estos términos en
                cualquier momento. Los cambios entrarán en vigor inmediatamente
                después de su publicación en el sitio web.
              </p>
            </section>

            <section class="bg-black/30 p-6 rounded-2xl">
              <h2 class="text-2xl font-semibold text-white mb-4">
                7. Contacto
              </h2>
              <p>
                Para cualquier consulta sobre estos términos y condiciones,
                puedes contactarnos a través de nuestras redes sociales o los
                canales de contacto proporcionados en la página principal.
              </p>
            </section>
          </div>
        </div>
      </main>

      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }

      section {
        transition: transform 0.3s ease;
      }

      section:hover {
        transform: translateY(-2px);
      }
    `,
  ],
})
export class TermsComponent {}
