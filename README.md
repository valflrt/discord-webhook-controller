# typescript-react-template

A very simple react app template (typescript) for those who **don't want** to use `create-react-app`

- [typescript-react-template](#typescript-react-template)
  - [Features](#features)
    - [Examples](#examples)
  - [Installation](#installation)
  - [Running](#running)

## Features

`react-router-dom` and `styled-components` are implemented already so you can use them right away !

### Examples

- **react-router-dom**
  - The `Router` [`Router.tsx`](src/router/Router.tsx)
  - An example route [`Main.tsx`](src/routes/Main.tsx)
- **styled-components**
  - An example style declaration file [`Layout.styles.tsx`](src/layout/Layout.styles.tsx)
  - Its implementation [`Layout.tsx`](src/layout/Layout.tsx)

## Installation

First initialize an empty repository with:

```
git init
```

Then pull from this repository:

```
git pull https://github.com/valflrt/typescript-react-template.git
```

You're done ! Happy coding (≧▽≦)

## Running

Two preset options are available:

- `npm start` - Start react live site (open **localhost:3000** on your computer)
- `npm run build` - Creates an optimized build for deployment (build can be found at **./build/**)
