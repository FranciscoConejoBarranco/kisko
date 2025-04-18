import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contacto" class="relative px-5 py-24">
      <div class="px-10 py-16 mx-auto my-0 text-center border-2 border-solid bg-rose-600 bg-opacity-10 border-rose-600 border-opacity-10 max-w-[900px] rounded-[30px] shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_30px_rgba(255,0,85,0.2)]">
        <h2 class="mb-8 text-5xl font-extrabold text-white bg-clip-text max-sm:text-4xl">
          ¿Interesado en Colaborar?
        </h2>
        <p class="mb-10 text-xl leading-relaxed text-white text-opacity-90">
          Para futuras colaboraciones o shows, contáctame directamente en
          Instagram
        </p>
        <a
          href="https://www.instagram.com/kiskomai/"
          target="_blank"
          class="inline-flex  items-center px-10 py-5 text-xl font-semibold text-white no-underline transition-all cursor-pointer pointer-events-auto duration-[0.3s] ease-[ease] rounded-[30px] shadow-[0_5px_15px_rgba(100,100,100,0.3)] hover:transform hover:-translate-y-3 hover:scale-102 hover:shadow-[0_8px_25px_rgba(100,100,100,0.5)]"
        >
          <i class="fab fa-instagram text-2xl"></i>
          <span>kiskomai</span>
        </a>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class ContactComponent {}
