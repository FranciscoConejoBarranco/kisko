import { style, keyframes } from "@angular/animations";

// Keyframe Animations
export const neonPulse = keyframes([
  style({ opacity: 0.7, transform: "scale(0.98)", offset: 0 }),
  style({ opacity: 1, transform: "scale(1)", offset: 0.5 }),
  style({ opacity: 0.7, transform: "scale(0.98)", offset: 1 }),
]);

export const sprayEffect = keyframes([
  style({ filter: "blur(4px)", transform: "scale(1)", offset: 0 }),
  style({ filter: "blur(6px)", transform: "scale(1.02)", offset: 1 }),
]);

// Shared Styles
export const sharedStyles = `
  /* Neon Text Effect */
  .neon-text {
    text-shadow: 0 0 25px rgba(255, 0, 85, 0.8);
    transition: all 0.3s ease;
  }

  /* Neon Button Effect */
  .neon-button {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(255, 0, 85, 0.3);
  }

  .neon-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 0, 85, 0.5);
  }

  /* Gradient Border Effect */
  .gradient-border {
    position: relative;
  }

  .gradient-border::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #ff0055, #ff6b6b);
    border-radius: inherit;
    z-index: -1;
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  /* Spray Text Effect */
  .spray-text {
    position: relative;
  }

  .spray-text::before {
    content: attr(data-text);
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

  /* Glow Effect */
  .glow-effect {
    position: relative;
  }

  .glow-effect::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 0 30px rgba(255, 0, 85, 0.3);
    border-radius: inherit;
    opacity: 0;
    transition: all 0.3s ease;
  }

  .glow-effect:hover::after {
    opacity: 1;
  }

  /* Link Hover Effect */
  .hover-link {
    position: relative;
    transition: all 0.3s ease;
  }

  .hover-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #ff0055;
    transition: width 0.3s ease;
  }

  .hover-link:hover::after {
    width: 100%;
  }

  /* Social Icon Hover Effect */
  .social-icon {
    transition: all 0.3s ease;
  }

  .social-icon:hover {
    color: #ff0055;
    transform: translateY(-3px);
  }

  /* Image Glow Effect */
  .image-glow {
    position: relative;
  }

  .image-glow::before {
    content: '';
    position: absolute;
    top: -40px;
    left: -40px;
    right: -40px;
    bottom: -40px;
    background: radial-gradient(circle at center, #ffff00 0%, #ff0000 60%, transparent 70%);
    filter: blur(30px);
    animation: neonPulse 3s ease-in-out infinite;
    z-index: -1;
    opacity: 0.8;
  }
`;
