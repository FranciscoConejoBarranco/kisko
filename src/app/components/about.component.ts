import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="sobre-kisko"
      class="relative px-5 pt-20 pt-44 pb-24 mt-11 bg-neutral-900"
    >
      <div
        class="flex gap-16 items-center mx-auto my-0 max-w-[1200px] max-md:flex-col max-md:text-center"
      >
        <div class="relative flex-1">
          <div class="image-container relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fe316b2b587734f20ac5502f6ddd6e0c7%2F0c68db2f48264e4f8bec5dff24cebd1d"
              class="object-contain overflow-hidden w-full rounded-3xl aspect-square max-w-[500px] shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative z-10"
            />
            <div class="neon-glow"></div>
          </div>
        </div>
        <div class="relative flex-1 z-[2]">
          <h2
            class="spray-text relative mb-8 text-5xl font-extrabold text-white max-sm:text-4xl"
          >
            Sobre Kisko
          </h2>
          <p
            class="mb-6 text-lg font-light leading-relaxed text-white text-opacity-90"
          >
            Kisko es una de las voces más prometedoras de la escena urbana de
            Murcia. Con un estilo único que fusiona reggaeton con sonidos
            contemporáneos, está marcando un antes y un después en la música
            urbana de la región.
          </p>
          <p
            class="mb-6 text-lg font-light leading-relaxed text-white text-opacity-90"
          >
            Su música refleja la autenticidad y la pasión por el género urbano,
            creando un sonido distintivo que conecta con una audiencia cada vez
            más amplia. Con cada lanzamiento, Kisko demuestra su evolución
            artística y su compromiso con la excelencia musical.
          </p>
          <div class="flex gap-5 mt-10 max-md:justify-center">
            <a
              href="https://open.spotify.com/intl-es/artist/1Kk5uLhR4fkYFOX96cEPzJ?si=MWocgfK3TVKheSYWuvCm3w"
              target="_blank"
              class="neon-button px-9 py-4 text-lg font-semibold text-white no-underline border-2 border-rose-600 border-solid transition-all cursor-pointer pointer-events-auto duration-[0.3s] ease-[ease] rounded-[30px]"
            >
              Descubre su Música
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: contents;
      }

      .image-container {
        position: relative;
        isolation: isolate;
      }

      .neon-glow {
        position: absolute;
        inset: -20px;
        background: radial-gradient(
          circle at 50% 50%,
          rgba(255, 0, 85, 0.3) 0%,
          rgba(255, 0, 85, 0.1) 40%,
          transparent 70%
        );
        filter: blur(20px);
        z-index: 1;
        animation: pulseGlow 3s ease-in-out infinite;
      }

      @keyframes pulseGlow {
        0%,
        100% {
          opacity: 0.5;
          transform: scale(0.98);
        }
        50% {
          opacity: 0.8;
          transform: scale(1.02);
        }
      }

      .spray-text::before {
        content: "Sobre Kisko";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #ff0055, #ff6b6b);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        filter: blur(4px);
        opacity: 0.7;
        animation: sprayEffect 2s infinite alternate;
      }

      @keyframes sprayEffect {
        0% {
          filter: blur(4px);
          transform: scale(1);
        }
        100% {
          filter: blur(6px);
          transform: scale(1.02);
        }
      }

      .neon-button:hover {
        background: rgba(255, 0, 85, 0.1);
        transform: translateY(-3px);
      }
    `,
  ],
})
export class AboutComponent {}
