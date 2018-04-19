# HTML App Starter

A template for starting a web app, particularly for the HTML5 zip content type for Sushi Chefs! Attempts to format text according to the [Kolibri Style Guide](http://kolibribeta.learningequality.org/style_guide#/).

File structure:

```
.
├── index.html
├── css
│   └── styles.css
├── js
│   └── scripts.js
├── img
│   └── kolibri.png
└── fonts
    ├── NotoSans-Bold.ttf
    └── NotoSans-Regular.ttf
```

- `index.html`: Place your HTML code here! This is where the main text body goes.
- `css/styles.css`: Place your CSS code here! This is where styling (e.g. for fonts, spacing, colors, etc.) goes.
- `js/scripts.js`: Place any JavaScript code here! This is where code for an interactive webapp would go -- logic, click handlers, animations, network requests, etc.
- `img/`: Place images here.
- `fonts/`: Place fonts here.

## Test it out

Try placing the following HTML code into `index.html`:

```
<img src="img/kolibri.png" height="80">
<h1>Install Kolibri</h1>
<p>
  See the <a href="https://learningequality.org/r/kolibri-changes">Kolibri changelog here</a>. Documentation for <a href="https://readthedocs.org/projects/kolibri/">other versions are available here</a>.
</p>
<p>
  To install <strong>Kolibri</strong>, check the system requirements first and then follow the procedure for the operating system on your device.
</p>
<h2>System requirements</h2>
<h3>Server operating systems</h3>
<ul>
  <li>Windows
    <ul>
      <li>Supported: Vista, 7, 8, 10</li>
      <li><strong>Not supported: Windows XP</strong> cannot be used to install Kolibri server, but could potentially work as a client device if the browsers are <a href="https://support.mozilla.org/en-US/questions/1173904">as up-to-date as possible</a>.
      </li>
    </ul>
  </li>
  <li>MacOS: 10.6+ (install with <a href="#osx">PEX</a>)</li>
  <li>Ubuntu: 14.04, 16.04 and up - anything that’s <em>not</em> end-of-life</li>
  <li>Debian/Raspbian: Jessie or later</li>
  <li>Linux: Any system with Python 2.7</li>
  <li><strong>Android: not yet supported</strong></li>
  <li><strong>iOS: not yet supported</strong></li>
</ul>
<button>I am a button!!! Click me!!</button>
```

... and then run the following in this repository's directory to start a server:

```
python -m SimpleHTTPServer
```

Now open http://localhost:8000/ in a browser and you should see your sample app!
