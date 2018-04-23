# wx-artical-tpl
wx articals template

## Usage

```js
const buildHTML = require('wx-artical-tpl');

async function getFullHTML() {
  const fullHTML = await buildHTML({title: 'html title', content: 'html content get from api'});
  return fullHTML;
}
```
