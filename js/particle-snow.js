particlesJS("particles-js", {
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 900,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "image",
      image: {
        src: "http://www.freepngimg.com/thumb/snowflakes/14-snowflake-png-image-thumb.png",
        width: 75,
        height: 75,
      },
    },
    opacity: {
      value: 0.7,
      random: true,
    },
    size: {
      value: 35,
      random: true,
    },
    move: {
      enable: true,
      speed: 2, // Slow falling speed for snow effect
      direction: "bottom",
      random: false, // Prevent random directions
      straight: false,
      out_mode: "out", // Allow particles to reappear after leaving
      bounce: false,
    },
    line_linked: {
      enable: false, // Disable lines
    },
    position: {
      startValue: "top", // Particles spawn only at the top
      width: "100%", // Particles span the full width
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "bubble",
      },
      resize: true,
    },
  },
  retina_detect: true,
});
