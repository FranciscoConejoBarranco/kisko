import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar.component";
import { FooterComponent } from "./footer.component";

@Component({
  selector: "app-privacy",
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-black">
      <app-navbar></app-navbar>

      <main class="px-5 pt-32 pb-16 min-h-screen bg-neutral-900">
        <div class="max-w-[800px] mx-auto">
          <h1 class="text-4xl font-bold text-white mb-8">
            Política de Privacidad
          </h1>

          <div class="space-y-6 text-white/80">
            <section class="bg-black/30 p-6 rounded-2xl">
              <h2 class="text-2xl font-semibold text-white mb-4">
                1. Información que Recopilamos
              </h2>
              <p class="mb-4">
                En KISKO, respetamos tu privacidad y nos comprometemos a
                proteger tus datos personales. Esta política de privacidad
                describe cómo recopilamos y utilizamos la información cuando
                visitas nuestro sitio web.
              </p>
              <ul class="list-disc pl-6 space-y-2">
                <li>
                  Información de contacto (cuando nos contactas directamente)
                </li>
                <li>Datos de uso del sitio web</li>
                <li>Preferencias de comunicación</li>
              </ul>
            </section>

            <section class="bg-black/30 p-6 rounded-2xl">
              <h2 class="text-2xl font-semibold text-white mb-4">
                2. Uso de la Información
              </h2>
              <p class="mb-4">Utilizamos la información recopilada para:</p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Mejorar nuestros servicios y contenido</li>
                <li>Comunicarnos contigo sobre actualizaciones y eventos</li>
                <li>Responder a tus consultas y solicitudes</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section class="bg-black/30 p-6 rounded-2xl">
              <h2 class="text-2xl font-semibold text-white mb-4">
                3. Cookies y Tecnologías Similares
              </h2>
              <p>
                Utilizamos cookies y tecnologías similares para mejorar tu
                experiencia en nuestro sitio web. Puedes controlar el uso de
                cookies a través de la configuración de tu navegador.
              </p>
            </section>

            <section class="bg-black/30 p-6 rounded-2xl">
              <h2 class="text-2xl font-semibold text-white mb-4">
                4. Tus Derechos
              </h2>
              <p class="mb-4">Tienes derecho a:</p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Acceder a tus datos personales</li>
                <li>Solicitar la rectificación de datos inexactos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos</li>
              </ul>
            </section>

            <section class="bg-black/30 p-6 rounded-2xl">
              <h2 class="text-2xl font-semibold text-white mb-4">
                5. Contacto
              </h2>
              <p>
                Para cualquier consulta sobre esta política de privacidad,
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
export class PrivacyComponent {}
