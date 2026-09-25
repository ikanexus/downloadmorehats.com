import { defineConfig, presetWind4, presetIcons, transformerCompileClass } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons(),
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
    transformerCompileClass(),
  ],
})
