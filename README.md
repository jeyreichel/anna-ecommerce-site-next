# Checks

An e-commerce site for Nike sneakers built with the new Next.js 13 Beta

> **Warning**
> This is not a real e-commerce site. Built for experimenting and learning purposes

## Demo

- This project is still in development

![progress](https://user-images.githubusercontent.com/73758525/210260803-e0725ada-ccd0-4c7f-983e-6d47026bfdae.png)

## About

- For testing and experimenting all the new features in Next.js 13 (`/app` dir, server components and everything new)
- Inspired by [Taxonomy](https://github.com/shadcn/taxonomy) built by [@shadcn](https://twitter.com/shadcn)
- Haven't built an e-commerce site, so I'm challenging myself to build one!
- Building this in public. You can follow the progress/updates on [@amirfkrlh](https://twitter.com/amirfkrlh)

## Tech-stacks (Currently)

- [Next.js 13 Beta](https://beta.nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/)
- [Material-Tailwind](https://www.material-tailwind.com/)
- [Next-Auth](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Typescript](https://www.typescriptlang.org/)

## Deployments/Hosting

- Next.js: [Vercel](https://vercel.com/)
- Database: [Railway](https://railway.app/)
- Image hosting: [AWS S3](https://aws.amazon.com/s3/)

## Setting up locally

- Clone or fork this repository
- To clone:

```bash
git clone https://github.com/amirfakhrullah/ecommerce-next13beta.git
```

- Create and set up the `.env` file, refer to `.env.sample` for the required keys
- Install the dependencies and generate prisma client (postinstall):

```bash
npm i
```

- Push and synchronize the prisma schema to the database:

```bash
npx prisma db push
```

- Run locally:

```bash
npm run dev
```

## License

License under the [MIT License](./LICENSE)
