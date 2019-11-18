This is a coding challenge for Chattermill

This project contains Home page, Login page, Feeds page.
Logout form will be in the next release.

Feeds page contains theme selector and reviews list.
User can select some theme and see related reviews.

* `npm install` to install all depencies;
* `npm start` to start the app.

## Folder Structure

```
chattermill/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    containers
    components
    services
    utils
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.
