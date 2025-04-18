import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav
      class="fixed top-5 left-2/4 px-9 py-4 w-auto border border-solid -translate-x-2/4 backdrop-blur-[10px] bg-black bg-opacity-80 border-white border-opacity-10 max-w-[90%] rounded-[30px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-[1000] max-sm:px-5 max-sm:py-3 max-sm:w-[90%]"
    >
      <div class="flex gap-8 justify-between items-center relative">
        <a
          href="/"
          class="brand-logo text-3xl font-extrabold no-underline uppercase bg-clip-text transition-all duration-[0.3s] ease-[ease] tracking-[2px]"
        >
          KISKO
        </a>

        <!-- Desktop Menu -->
        <div class="flex gap-6 items-center max-sm:hidden">
          <a href="#sobre-kisko" class="nav-link">About</a>
          <a href="#lanzamientos" class="nav-link">Lanzamientos</a>
          <a href="#contacto" class="nav-link">Contacto</a>
          <div class="flex gap-5">
            <a href="https://spotify.com" target="_blank" class="social-icon">
              <i class="fab fa-spotify"></i>
            </a>
            <a href="https://youtube.com" target="_blank" class="social-icon">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="hidden max-sm:flex flex-col justify-around w-11 h-11 p-2.5 border-none cursor-pointer bg-transparent"
          (click)="toggleMenu()"
          [class.open]="isMenuOpen"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>

        <!-- Mobile Menu -->
        <div class="mobile-menu" [class.show]="isMenuOpen">
          <a href="#sobre-kisko" class="mobile-link">About</a>
          <a href="#lanzamientos" class="mobile-link">Lanzamientos</a>
          <a href="#contacto" class="mobile-link">Contacto</a>
          <div class="flex gap-5 mt-4">
            <a href="https://spotify.com" target="_blank" class="social-icon">
              <i class="fab fa-spotify"></i>
            </a>
            <a href="https://youtube.com" target="_blank" class="social-icon">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      :host {
        display: contents;
      }

      .brand-logo {
        background: linear-gradient(45deg, #ff0055, #ff6b6b);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      .brand-logo:hover {
        text-shadow: 0 0 25px rgba(255, 0, 85, 0.8);
        transform: scale(1.02);
      }

      .nav-link {
        position: relative;
        color: white;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        padding: 0.375rem 0.75rem;
        transition: color 0.3s ease;
      }

      .nav-link:hover {
        color: #ff0055;
      }

      .nav-link::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: #ff0055;
        transition: width 0.3s ease;
      }

      .nav-link:hover::after {
        width: 100%;
      }

      .social-icon {
        color: white;
        font-size: 1.25rem;
        transition: all 0.3s ease;
      }

      .social-icon:hover {
        color: #ff0055;
        transform: translateY(-2px);
      }

      .hamburger-line {
        display: block;
        width: 24px;
        height: 2px;
        background-color: white;
        transition: all 0.3s ease;
        border-radius: 2px;
      }

      .open .hamburger-line:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }

      .open .hamburger-line:nth-child(2) {
        opacity: 0;
      }

      .open .hamburger-line:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }

      .mobile-menu {
        display: none;
        position: absolute;
        top: calc(100% + 1rem);
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        padding: 1rem;
        background: rgba(0, 0, 0, 0.95);
        border-radius: 20px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.1);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }

      .mobile-menu.show {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        opacity: 1;
        visibility: visible;
      }

      .mobile-link {
        color: white;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        padding: 0.5rem 1rem;
        width: 100%;
        text-align: center;
        transition: all 0.3s ease;
        border-radius: 10px;
      }

      .mobile-link:hover {
        color: #ff0055;
        background: rgba(255, 0, 85, 0.1);
      }

      @media (max-width: 640px) {
        .mobile-menu {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    `,
  ],
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
