module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      backgroundImage: {
        gradient: "url('/png/hero_gradient.png')",
        'gradient-one': "url('/png/section_one_gradient.png')",
        'gradient-two': "url('/png/section_two_gradient.png')",
        'gradient-three': "url('/png/section_three_gradient.png')",
        'gradient-four': "url('/png/section_four_gradient.png')",
      },
      scale: {
        250: '2.50',
        130: '1.3'
      },
      backgroundPosition: {
        'section-two': 'center left',
        hero: 'center -150px',
        heroMobile: 'center',
      },
      backgroundSize: {
        'hero-size': '1200px',
      },
    },
    fontFamily: {
      body: ["'Inter'", 'sans-serif'],
      display: ['PPNeueMachina', 'sans-serif'],
    },
  },
  plugins: [],
};
