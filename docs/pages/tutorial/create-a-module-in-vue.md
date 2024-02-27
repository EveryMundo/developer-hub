---
order: 4
difficulty: Beginner
demo: https://everymundo.github.io/registry/playground/?url=https://everymundo.github.io/registry/examples/hello-vue
---

# Create a module from scratch using Vue CLI

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia, turpis eu sodales efficitur, justo nibh molestie orci, id malesuada odio velit eu lacus. Suspendisse viverra, arcu a accumsan vulputate, justo ex luctus nisl, in feugiat elit leo ut purus. Maecenas id feugiat purus. Mauris cursus, mi ac ornare mattis, lorem erat mattis odio, ut gravida urna orci sed nunc.

<ButtonGroup>
<Button type="primary" href={props.frontmatter.demo} target="_blank">Demo</Button>
<Button type="secondary" href="https://github.com/EveryMundo/registry/tree/develop/examples/hello-vue" target="_blank">Source code</Button>
</ButtonGroup>

<Demo src={props.frontmatter.demo} title="Hello Vue" aspectRatio={16/9}/>

## Prerequisites

-
-

## Getting Started

https://cli.vuejs.org/guide/creating-a-project.html

Quisque eget nibh auctor, iaculis erat et, semper arcu. Integer a erat augue. Ut molestie erat et cursus ullamcorper. Quisque et aliquam mi. Suspendisse commodo nisi ipsum, vel lobortis sem ornare sed. Morbi non pulvinar magna. Phasellus condimentum risus et ante rutrum mattis.

## Generate a new site

Quisque eget nibh auctor, iaculis erat et, semper arcu. Integer a erat augue. Ut molestie erat et cursus ullamcorper. Quisque et aliquam mi. Suspendisse commodo nisi ipsum, vel lobortis sem ornare sed. Morbi non pulvinar magna. Phasellus condimentum risus et ante rutrum mattis.

```sh
---
theme: dark
---
$ npm install -g @vue/cli @vue/cli-service-global

$ vue create hello-vue
```

- Select Vue version (Vue 2 / Vue 3)

## Requirements

- In the project root, create (or update) vue.config.js

```js
---
filename: vue.config.js
---
module.exports = {
  publicPath: "./",
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    },
  },
};
```

- Copy [install.json](https://everymundo.github.io/registry/examples/hello-vue/install.json) example to project root and to public folders

## Start your site

Quisque eget nibh auctor, iaculis erat et, semper arcu. Integer a erat augue. Ut molestie erat et cursus ullamcorper. Quisque et aliquam mi. Suspendisse commodo nisi ipsum, vel lobortis sem ornare sed. Morbi non pulvinar magna. Phasellus condimentum risus et ante rutrum mattis.

```sh
---
theme: dark
---
$ cd hello-vue

~/hello-vue $ npm run serve
```

Quisque eget nibh auctor, iaculis erat et, semper arcu. Integer a erat augue. Ut molestie erat et cursus ullamcorper. Quisque et aliquam mi. Suspendisse commodo nisi ipsum, vel lobortis sem ornare sed. Morbi non pulvinar magna. Phasellus condimentum risus et ante rutrum mattis.

https://everymundo.github.io/registry/playground/?url=http://localhost:8080/

---

<Aside type="warning" header="TODO">
I need to add the code related to the <em>registry-script</em> and the creation of a component to display the received information.
</Aside>

<Aside type="warning" header="TODO">
Check Vue3 error with HTTP over HTTPS
</Aside>

```js
---
filename: main.js
highlight: [1,6,7,8,9,10]
---
import { isReady } from "@everymundo/registry-script";

import { createApp } from "vue";
import App from "./App.vue";

isReady().then(async (config) => {
  const app = createApp(App);
  app.config.globalProperties.config = config;
  app.mount("#app");
});
```
