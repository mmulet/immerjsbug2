# Repo for the reproduction of an immerjs bug

When using immer.esm.js on browser. We get
Uncaught ReferenceError: process is not defined

```html
<script type="module" src="./testESM.js"></script>
```

```javascript
import { produce } from "https://unpkg.com/immer@6.0.2/dist/immer.esm.js";
```

Declaring the variable ahead of time fixes the issue.

```html
<script>
  let process = {
    env: {
      NODE_ENV: "production"
    }
  };
</script>
```

# Installing
```sh
npm install .
```

# Testing
```sh
npm test
```