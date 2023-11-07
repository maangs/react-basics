# Getting started

Start by running
`npm create vite@latest`

When asked, provide a project name, select React as framework and variant Typescript\
✔ Project name: … react-basics\
✔ Select a framework: › React\
✔ Select a variant: › TypeScript

Open folder and run `npm i`\
after installation is done; run `npm run dev`

In `vite.config.ts` replace

```
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

with

```
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 1337, // you can replace this port with any port
  },
});
```
