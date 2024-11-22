
# Installation Requires a (.npmrc) File

To install the package, you need to configure the `.npmrc` file in your project.

### Step 1: Add to `.npmrc` file
Make sure to add the following lines to your `.npmrc` file in the root directory of your project.

```ini
// Paste this in the (.npmrc) file at the root directory
@username:registry=https://npm.pkg.github.com
```

### Step 2: Install the Package

You can then install the package using npm:

```bash
npm install @oyy-gus/lyrics@latest --no-bin-links
```

---

# Example Usage

Here is an example of how to use the package after installing it:

```javascript
import { search } from "./src/index.js";

async function test() {
  const result = await search("viavallen", "toptopan");
  console.log(result.artist);
  console.log(result.title);
  console.log(result.lyrics);
}

test();
```

