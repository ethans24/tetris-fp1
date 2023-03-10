import { defineConfig } from 'vite'
import { html, render } from "lit-html";
import { sketch } from 'p5js-wrapper';

export default defineConfig({

    plugins: [sketch(), html(), render()],
    base: '/my-app/'
})