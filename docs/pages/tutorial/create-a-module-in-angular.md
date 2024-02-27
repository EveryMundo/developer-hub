---
order: 3
difficulty: Beginner
demo: https://everymundo.github.io/registry/playground/?url=https://everymundo.github.io/registry/examples/hello-angular
---

# Create a module from scratch using Angular CLI

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia, turpis eu sodales efficitur, justo nibh molestie orci, id malesuada odio velit eu lacus. Suspendisse viverra, arcu a accumsan vulputate, justo ex luctus nisl, in feugiat elit leo ut purus. Maecenas id feugiat purus. Mauris cursus, mi ac ornare mattis, lorem erat mattis odio, ut gravida urna orci sed nunc.

<ButtonGroup>
<Button type="primary" href={props.frontmatter.demo} target="_blank">Demo</Button>
<Button type="secondary" href="https://github.com/EveryMundo/registry/tree/develop/examples/hello-angular" target="_blank">Source code</Button>
</ButtonGroup>

<Demo src={props.frontmatter.demo} title="Hello Angular" aspectRatio={16/9}/>

## Prerequisites

-
-

## Getting Started

https://angular.io/guide/setup-local

Quisque eget nibh auctor, iaculis erat et, semper arcu. Integer a erat augue. Ut molestie erat et cursus ullamcorper. Quisque et aliquam mi. Suspendisse commodo nisi ipsum, vel lobortis sem ornare sed. Morbi non pulvinar magna. Phasellus condimentum risus et ante rutrum mattis.

## Generate a new site

Quisque eget nibh auctor, iaculis erat et, semper arcu. Integer a erat augue. Ut molestie erat et cursus ullamcorper. Quisque et aliquam mi. Suspendisse commodo nisi ipsum, vel lobortis sem ornare sed. Morbi non pulvinar magna. Phasellus condimentum risus et ante rutrum mattis.

```sh
---
theme: dark
---
$ npm install -g @angular/cli

$ ng new hello-angular
```

- No add React Routing
- Select CSS (or whatever you want)

## Requierements

```json
---
filename: angular.json
highlight: [4]
---
...

  "assets": [
    "src/install.json",
    "src/favicon.ico",
    "src/assets"
  ],

...
```

Copy [install.json](https://everymundo.github.io/registry/examples/hello-angular/install.json) example to src folder

## Start your site

Quisque eget nibh auctor, iaculis erat et, semper arcu. Integer a erat augue. Ut molestie erat et cursus ullamcorper. Quisque et aliquam mi. Suspendisse commodo nisi ipsum, vel lobortis sem ornare sed. Morbi non pulvinar magna. Phasellus condimentum risus et ante rutrum mattis.

```sh
---
theme: dark
---
$ cd hello-angular

~/hello-angular $ npm start
```

Quisque eget nibh auctor, iaculis erat et, semper arcu. Integer a erat augue. Ut molestie erat et cursus ullamcorper. Quisque et aliquam mi. Suspendisse commodo nisi ipsum, vel lobortis sem ornare sed. Morbi non pulvinar magna. Phasellus condimentum risus et ante rutrum mattis.

---

<Aside type="warning" header="TODO">
I need to add the code related to the <em>registry-script</em> and the creation of a component to display the received information.
</Aside>

```js
---
filename: main.ts
highlight: [1,13,14,15,16,17]
---
import { isReady } from '@everymundo/registry-script';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

isReady().then(async () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
});

```
