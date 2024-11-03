import { Hono } from 'hono';
import { renderer } from './renderer';

const app = new Hono();



// Client Side Rendering
app.get('/', (c) => {
  return c.html(
    `<html>
      <head>
        <title>Hono with Client Components</title>
         <link href="/static/style.css" rel="stylesheet"> <!-- Link to your Tailwind CSS file -->
        <script type="module" src="/static/client.js"></script>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>`
  );
});



// Server Side Rendering + API's
app.get('/api', (c) => {
  return c.json({msg: `hello`})
})

app.get('*', renderer);

export default app;





