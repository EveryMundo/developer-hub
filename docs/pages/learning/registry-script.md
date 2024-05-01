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
const payload = await getPayload();
```

## Events

### Enter in full size

```js
import { triggerAction } from "@everymundo/registry-script";

triggerAction("fullsize:enter") // Request permission to enter in fullsize
  .then(() => { // if success add code to enter fullsize (open dialog, etc)
    console.log("--- SUCCCESS");
  })
  .catch((err) => { // if error you can't enter full size
    console.log("--- ERROR");
    console.log("Error: ", err);
  });
```

### Exit from full size
```js
import { triggerAction } from "@everymundo/registry-script";

triggerAction("fullsize:exit") // Request permission to exit from fullsize
  .then(() => { // if success add code to exit from fullsize (closet dialog, etc)
    console.log("--- SUCCCESS");
  })
  .catch((err) => { // if error you can't exit from full size
    console.log("--- ERROR");
    console.log("Error: ", err);
  });
```

### Open search panel
```js
import { triggerAction } from "@everymundo/registry-script";

triggerAction("search-panel:open", {
  "industry": "airline", // industry of the search panel requested, for now airline or hospitality
  "payload": {} // fares o rates content
}) // Request permission to open the popup
  .then((result) => { // if success you can trigger tracking events ...
    console.log("--- SUCCCESS");
    console.log("Result: ", result);
  })
  .catch((err) => { // if error you can show error or trigger direct deeplink
    console.log("--- ERROR");
    console.log("Error: ", err);
  });
```
