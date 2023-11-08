# Use this repo

`git clone https://github.com/maangs/react-basics.git`\
`npm install`

## Run locally

`npm run dev`

## Run in docker

`docker build . -t "sample-project:v1.0"`\
`docker run -d -p 3000:3000 sample-project:v1.0`

# Getting started

Start by running
`npm create vite@latest`

When asked, provide a project name, select React as framework and variant Typescript\
✔ Project name: … react-basics\
✔ Select a framework: › React\
✔ Select a variant: › TypeScript

Open folder and run `npm i`\
after installation is done; run `npm run dev`

# Config

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
  base: "/",
  plugins: [react()],
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});

```

# Docker

Create a file called `Dockerfile` in the root\
Add docker commands\
Run `docker build . -t "sample-project:v1.0"`\
Run `docker run -d -p 3000:3000 sample-project:v1.0`\
