import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 z-10 pointer-events-none"
      options={{
        background: {
          opacity: 0
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false
            },
            onHover: {
              enable: true,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            repulse: {
              distance: 150,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: "#4B5563"
          },
          links: {
            color: "#4B5563",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 0.8,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 120
          },
          opacity: {
            value: 0.15
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 2 }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticlesBackground; 