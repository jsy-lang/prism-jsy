# prism-jsy

JSY JavaScript dialect syntax bundle for [Prism](https://prismjs.com).

JSY is **an indented (offside) JavaScript dialect**. We believe indentation is
better at describing code blocks instead of painstakingly matching open/close
sections `{ } () []`.

Think modern JavaScript — ES6, ES2018 — indented similar to [Python][] or [CoffeeScript][].

Please see [JSY language docs](https://github.com/jsy-lang/jsy-lang-docs) for details on the JSY dialect.

### Quickstart

```html
<head>
  ...
  <link href='https://cdn.jsdelivr.net/npm/prismjs@1.20.0/themes/prism.css' rel='stylesheet' />

	<script src='https://cdn.jsdelivr.net/npm/prismjs@1.20.0/components/prism-core.js'></script>
	<script src='https://cdn.jsdelivr.net/npm/prismjs@1.20.0/components/prism-clike.js'></script>
	<script src='https://cdn.jsdelivr.net/npm/prismjs@1.20.0/components/prism-javascript.js'></script>

	<script src='https://cdn.jsdelivr.net/npm/prism-jsy/prism-jsy.js'></script>

  ...
</head>

<body>

  ...
  <pre>
    if true != false ::
      console.log @
        'A log message'
        @{} ts: new Date
            meta: import.meta
  </pre>
</body>
</html>
```
