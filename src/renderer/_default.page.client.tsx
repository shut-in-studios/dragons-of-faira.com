import * as preact from "preact";
import type { PageContextClient } from "./types";

export const clientRouting = true;
export const hydrationCanBeAborted = true;

export async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  const page = <Page {...pageProps} />;
  const container = document.getElementById("app")!;
  preact.hydrate(page, container);
}

export function onHydrationEnd() {
  console.log("Hydration finished; page is now interactive.");
}
export function onPageTransitionStart() {
  console.log("Page transition start");
  document.querySelector("body")!.classList.add("page-is-transitioning");
}
export function onPageTransitionEnd() {
  console.log("Page transition end");
  document.querySelector("body")!.classList.remove("page-is-transitioning");
}
