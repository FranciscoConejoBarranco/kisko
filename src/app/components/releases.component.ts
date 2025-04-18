import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-releases",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="lanzamientos" class="relative px-5 py-24 pb-24">
      <div class="mx-auto my-0 text-center max-w-[1200px]">
        <h2
          class="mb-12 text-5xl font-extrabold text-white bg-clip-text max-sm:text-4xl"
        >
          Últimos Lanzamientos
        </h2>
        <div
          class="overflow-hidden p-5 pb-8 mx-auto my-0 rounded-3xl bg-black bg-opacity-50 max-w-[900px] shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_30px_rgba(255,0,85,0.2)] max-md:max-w-full"
        >
          <iframe
            src="https://open.spotify.com/embed/artist/1Kk5uLhR4fkYFOX96cEPzJ?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style="border-radius: 12px;"
          ></iframe>
        </div>
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
export class ReleasesComponent {}
