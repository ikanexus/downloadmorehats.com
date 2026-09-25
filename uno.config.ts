import { defineConfig, presetWind4, presetWind3, presetIcons, transformerCompileClass, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3({
      dark: 'media',
    }),
    // presetWind4(),
    presetIcons(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Actor',
      },
    }),
  ],
  theme: {
    animation: {
      keyframes: {
        zoom: "{0%,100% {transform: scale(1)} 50% {transform: scale(1.25)}}",
      },
      durations: {
        zoom: "2s",
      },
      timingFns: {
        zoom: "ease-in-out",
      },
      counts: {
        zoom: "infinite"
      },
    },
  },
  transformers: [
    transformerCompileClass({
      classPrefix: 'hat-',
    }),
  ],
})
