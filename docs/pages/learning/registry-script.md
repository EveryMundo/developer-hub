---
---

# Registry Script

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia, turpis eu sodales efficitur, justo nibh molestie orci, id malesuada odio velit eu lacus. Suspendisse viverra, arcu a accumsan vulputate, justo ex luctus nisl, in feugiat elit leo ut purus. 

![Registry Script](@/assets/images/learning/hero-registry-script.png)

Maecenas id feugiat purus. Mauris cursus, mi ac ornare mattis, lorem erat mattis odio, ut gravida urna orci sed nunc. Quisque in est a est molestie dignissim a nec erat. Integer et finibus magna, rhoncus egestas sapien. Quisque vehicula lacinia pretium. Phasellus fringilla eros sed arcu efficitur, vel condimentum arcu malesuada. Curabitur vulputate mi neque, a volutpat arcu ultrices commodo. In lobortis euismod sollicitudin. Integer at commodo nunc, in sagittis sem.

## Payload

```js
isReady().then((payload) => {
  // Start module execution
});
```

```js
const payload = async getPayload();
```

## Events

```js
import { setFullScreen } from "@everymundo/registry-script"

function () {
  setFullScreen(true); // Open fullscreen
}
```

```js
import { setFullScreen } from "@everymundo/registry-script"

function () {
  setFullScreen(false); // Close fullscreen
}
```

```js
import { openPopup } from "@everymundo/registry-script"

function () {
  openPopup({
   fare: {}
  });
}
```
