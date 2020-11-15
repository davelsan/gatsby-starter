<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter
</h1>
<p align="center">
  <i>A custom Gatsby starter based on the
  <a href="https://github.com/gatsbyjs/gatsby-starter-default">
    default boilerplate
  </a>
  </i>
</p>

## &#9733; Features

- [x] ESLint + Prettier configuration.
- [x] TypeScript components and pages, with strict type checking support.
- [ ] Tailwind CSS configuration and included examples.
- [ ] Markdown configuration to dynamically create content pages.

## &lt;/&gt; Develop

### Quick Start


```sh
git clone https://github.com/davelsan/gatsby-starter  # clone this repository
cd gatsby-starter                                     # change to project directory
yarn install                                          # install dependencies
yarn develop                                          # start the development server
```

The main site should be running at `http://localhost:8000`.

*A `GraphiQL` user interface will also be running at `http://localhost:8000/___graphql`. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql).*

Open the `gatsby-starter` directory in any code editor and start coding. Any changes in the editor will update the browser in real time.


### Available Commands

```sh
yarn clean             # reset gatsby cache
yarn build             # build for production
yarn develop           # start a development server
yarn format            # format files using prettier
yarn lint              # lint files using ESLint
yarn serve             # serve a production build for testing
yarn test              # run tests
yarn tscheck           # type check typescript files
yarn tscheck:watch     # type check and watch for changes
```

## &#x1F50E; What's inside?

A quick look at the top-level files and directories in this Gatsby project.

```sh
.
├─ node_modules
├─ src
├─ .gitignore
├─ .prettierrc
├─ gatsby-browser.js
├─ gatsby-config.js
├─ gatsby-node.js
├─ gatsby-ssr.js
├─ LICENSE
├─ yarn.lock
├─ package.json
└─ README.md
```

1.  **`/node_modules`**: This directory contains all of the modules of code that the project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to the front-end site (browser view), such as the site header or a page template.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4. **`.eslintrc.js`**: This is the configuration file for [ESLint](https://eslint.org).

5.  **`.prettierrc`**: This is the configuration file for [Prettier](https://prettier.io/).

6.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

7.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where information about the site (metadata) can be specified, like the site title and description, which Gatsby plugins to include, etc. (See the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for details).

8.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

9.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

10.  **`LICENSE`**: This Gatsby starter is licensed under the [0BSD license](https://choosealicense.com/licenses/0bsd/).

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how package managers know which modules to install for the project.

12. **`README.md`**: This text file, containing information about the project and other useful references.

13. **`tsconfig.json`**: This is the configuration file for [TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

14. **`yarn.lock`** This is an automatically generated file based on the exact versions of the module dependencies that were installed for the project.


## 🎓 Learning Gatsby

Looking for guidance? Full documentation for Gatsby lives [on its website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, it is recommended to start with their [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about the level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to their documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

  |   |   |
- | - | - |
__Netlify__ | [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/davelsan/gatsby-starter)
__Vercel__  | [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/davelsan/gatsby-starter)
