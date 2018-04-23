const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const TITLE_PLACEHOLDER = '<!-- insert title here -->';
const CONTENT_PLACEHOLDER = '<!-- insert the content here -->';

async function buildHTMLString({title, content}) {
  const data = await readFile(`${__dirname}/tpl.html`, 'utf8');
  content = content.replace('/"', '"');
  return data
    .replace(TITLE_PLACEHOLDER, title)
    .replace(CONTENT_PLACEHOLDER, content);
}

module.exports = buildHTMLString;
