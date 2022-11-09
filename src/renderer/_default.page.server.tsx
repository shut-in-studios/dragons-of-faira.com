import { dangerouslySkipEscape } from "vite-plugin-ssr";
import type { PageContextServer } from "./types";
import { render as renderToString } from "preact-render-to-string";
import { Helmet } from "react-helmet";

export const passToClient = ["pageProps", "documentProps"];

export async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;

  const appHtml = renderToString(<Page {...pageProps} />);
  const helmet = Helmet.renderStatic();
  const documentHtml = dangerouslySkipEscape(`
    <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="app">
                ${appHtml}
            </div>
        </body>
    </html>
  `);

  return {
    documentHtml,
  };
}
