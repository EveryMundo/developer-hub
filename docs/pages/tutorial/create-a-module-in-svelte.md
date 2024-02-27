---
order: 5
difficulty: Beginner
demo: https://everymundo.github.io/registry/playground/?url=https://everymundo.github.io/registry/examples/hello-svelte
---

# Create a module from scratch using Create Svelte App

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia, turpis eu sodales efficitur, justo nibh molestie orci, id malesuada odio velit eu lacus. Suspendisse viverra, arcu a accumsan vulputate, justo ex luctus nisl, in feugiat elit leo ut purus. Maecenas id feugiat purus. Mauris cursus, mi ac ornare mattis, lorem erat mattis odio, ut gravida urna orci sed nunc.

<ButtonGroup>
<Button type="primary" href={props.frontmatter.demo} target="_blank">Demo</Button>
<Button type="secondary" href="https://github.com/EveryMundo/registry/tree/develop/examples/hello-svelte" target="_blank">Source code</Button>
</ButtonGroup>

<Demo src={props.frontmatter.demo} title="Hello Svelte" aspectRatio={16/9}/>

## Prerequisites

-
-

## Getting Started

https://www.npmjs.com/package/create-svelte-app

Quisque eget nibh auctor, iaculis erat et, semper arcu. Integer a erat augue. Ut molestie erat et cursus ullamcorper. Quisque et aliquam mi. Suspendisse commodo nisi ipsum, vel lobortis sem ornare sed. Morbi non pulvinar magna. Phasellus condimentum risus et ante rutrum mattis.

<Aside>

**Note:** This is a note.

</Aside>

## Generate a new site

Quisque eget nibh auctor, iaculis erat et, semper arcu. Integer a erat augue. Ut molestie erat et cursus ullamcorper. Quisque et aliquam mi. Suspendisse commodo nisi ipsum, vel lobortis sem ornare sed. Morbi non pulvinar magna. Phasellus condimentum risus et ante rutrum mattis.

```sh
---
theme: dark
---
$ npm i create-svelte-app -g

$ svelte create hello-svelte
```

- Select sveltejs/template-webpack

## Requirements

- To allow open the page inside iframe, add to webpack file

```json
---
filename: webpack.config.js
highlight: [4,5,6,7,8]
---
// ...
devServer: {
    // ...
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
    },
  },
// ...
```

- Copy [install.json](https://everymundo.github.io/registry/examples/hello-svelte/install.json) example to project root and to public folders

## Start your site

Quisque eget nibh auctor, iaculis erat et, semper arcu. Integer a erat augue. Ut molestie erat et cursus ullamcorper. Quisque et aliquam mi. Suspendisse commodo nisi ipsum, vel lobortis sem ornare sed. Morbi non pulvinar magna. Phasellus condimentum risus et ante rutrum mattis.

```sh
---
theme: dark
---
$ cd hello-svelte

~/hello-svelte $ npm i

~/hello-svelte $ npm run dev
```

Quisque eget nibh auctor, iaculis erat et, semper arcu. Integer a erat augue. Ut molestie erat et cursus ullamcorper. Quisque et aliquam mi. Suspendisse commodo nisi ipsum, vel lobortis sem ornare sed. Morbi non pulvinar magna. Phasellus condimentum risus et ante rutrum mattis.

https://everymundo.github.io/registry/playground/?url=http://localhost:8080/

---

<Aside type="warning" header="TODO">
I need to add the code related to the <em>registry-script</em> and the creation of a component to display the received information.
</Aside>

```js
---
filename: main.js
highlight: [1,7,8,9,10,11,12,13,14,15]
---
import { isReady } from "@everymundo/registry-script";

import "./global.css";

import App from "./App.svelte";

isReady().then(async (config) => {
  new App({
    target: document.body,
    props: {
      name: "world",
      config,
    },
  });
});
```
