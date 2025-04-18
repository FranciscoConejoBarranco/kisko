import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="flex gap-10 items-center mx-auto my-0 max-w-[1200px] max-md:flex-col-reverse max-md:text-center"
    >
      <div class="relative flex-1 z-[2]">
        <h1
          class="title-glow mb-5 text-7xl font-extrabold text-white uppercase bg-clip-text max-sm:text-5xl"
        >
          KISKO
        </h1>
        <p
          class="mb-8 text-2xl font-light leading-snug text-white text-opacity-80"
        >
          <span>Desde Murcia para el mundo 🌍 </span>
          <br />
          <span>Nuevo single "High Rated" disponible ahora</span>
        </p>
        <div class="flex gap-5 max-md:justify-center">
          <a
            href="https://open.spotify.com/intl-es/artist/1Kk5uLhR4fkYFOX96cEPzJ?si=MWocgfK3TVKheSYWuvCm3w"
            target="_blank"
            class="neon-button px-9 py-4 text-lg font-semibold text-white no-underline transition-all cursor-pointer pointer-events-auto duration-[0.3s] ease-[ease] rounded-[30px]"
          >
            Escuchar Ahora
          </a>
        </div>
      </div>
      <div class="relative flex-1">
        <div class="image-container relative">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fe316b2b587734f20ac5502f6ddd6e0c7%2Fc349a6b34fea41968b2f54c98d796965"
            class="object-cover overflow-hidden w-full rounded-3xl aspect-square max-w-[500px] shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_30px_rgba(255,0,85,0.3)] max-md:max-w-[400px]"
          />
          <div
            class="absolute -top-5 -right-5 rounded-3xl border-2 border-rose-600 border-solid size-full z-[-1]"
          ></div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: contents;
      }

      @keyframes neonPulse {
        0% {
          opacity: 0.7;
          transform: scale(0.98);
        }
        50% {
          opacity: 1;
          transform: scale(1);
        }
        100% {
          opacity: 0.7;
          transform: scale(0.98);
        }
      }

      .title-glow {
        position: relative;
      }

      .title-glow::after {
        content: "KISKO";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-shadow: 0 0 30px rgba(255, 0, 85, 0.8);
        animation: neonPulse 3s ease-in-out infinite;
        z-index: -1;
      }

      .neon-button {
        box-shadow: 0 5px 15px rgba(255, 0, 85, 0.3);
      }

      .neon-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(255, 0, 85, 0.5);
      }

      .image-container::before {
        content: "";
        position: absolute;
        top: -40px;
        left: -40px;
        right: -40px;
        bottom: -40px;
        background: radial-gradient(
          circle at center,
          rgba(255, 255, 0, 0.2) 0%,
          rgba(255, 0, 0, 0.2) 60%,
          transparent 70%
        );
        filter: blur(30px);
        animation: neonPulse 3s ease-in-out infinite;
        z-index: -1;
        opacity: 0.8;
      }
    `,
  ],
})
export class HeroComponent {}
