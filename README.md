# Expenses Tracker App

This is a user-friendly and intuitive supermarket expenses tracker app designed to simplify your financial life.

Trust me, we all need a good partner or an expenses tracker to have a free of debts life and someone controlling what you put in the shooping cart every weekk.

Who is the target intended in this app?

- But my wife of course
- Any one who has been using a calculator in their phone to track their budget at the supermarket.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Tailwindcss & Heroicons

- [Tailwindcss website](https://tailwindcss.com)
- [Tailwindcss documentation](https://tailwindcss.com/docs/installation)
- [Heroicons website](https://heroicons.com/)

## React Router & Zod

The react-router-dom package contains bindings for using React Router in web applications

- [Reaxt Router website](https://reactrouter.com/en/main)

Zod is a TypeScript-first schema validation with static type inference

- [Zod website](https://zod.dev/)
- [Colin Hacks README](https://github.com/colinhacks/zod)

## React Hooks

- useState
