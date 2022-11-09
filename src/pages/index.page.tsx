import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import "./index.css";
import background from "../assets/Imposing_Radellia_finished.webp";
import { Helmet } from "react-helmet";

function NavLink(props: { label: string; href: string }): JSX.Element {
  return (
    <div class="navlink">
      <a href={props.href}>{props.label}</a>
      <div class="line" />
    </div>
  );
}

export function Page() {
  return (
    <ParallaxProvider>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Dragons of Faira</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lora:regular,medium,semibold,bold"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <ParallaxBanner
        layers={[{ image: background, speed: -50 }]}
        className="banner"
      >
        <div class="heading">
          <div class="title">
            <h1>Dragons of Faira</h1>
          </div>
          <div class="navbar">
            <NavLink label="Home" href="" />
            <NavLink label="Download" href="" />
            <NavLink label="Discord" href="" />
            <NavLink label="Twitter" href="" />
          </div>
        </div>
      </ParallaxBanner>
      <div class="content">
        <h1>About!</h1>
        <p>
          Lorem ipsum dolor sit amet. Sit fugiat voluptas est ipsum Quis hic
          doloribus internos qui iusto minima eos aperiam repellendus. Sed quia
          esse aut voluptates omnis sit velit aperiam. Qui libero sapiente qui
          numquam blanditiis non deserunt distinctio.{" "}
        </p>
        <p>
          Est velit quae sed dolorem Quis sed beatae reprehenderit aut harum
          odio in commodi iste et reiciendis labore ea atque adipisci. Quo
          laborum temporibus ut autem obcaecati non vitae neque et ullam
          deserunt.{" "}
        </p>
        <p>
          Sit rerum voluptatem 33 omnis nulla quo pariatur ipsam rem sint quae.
          Quo ipsum officiis est laborum voluptate qui cupiditate reprehenderit
          id recusandae asperiores id labore dolorem ea rerum illum. Ex odio
          dolorem in eveniet aliquid non dolor dolorum eos architecto
          voluptatem?{" "}
        </p>
        <h1>Something else!</h1>
        <p>
          Lorem ipsum dolor sit amet. Sit fugiat voluptas est ipsum Quis hic
          doloribus internos qui iusto minima eos aperiam repellendus. Sed quia
          esse aut voluptates omnis sit velit aperiam. Qui libero sapiente qui
          numquam blanditiis non deserunt distinctio.{" "}
        </p>
        <p>
          Est velit quae sed dolorem Quis sed beatae reprehenderit aut harum
          odio in commodi iste et reiciendis labore ea atque adipisci. Quo
          laborum temporibus ut autem obcaecati non vitae neque et ullam
          deserunt.{" "}
        </p>
        <p>
          Sit rerum voluptatem 33 omnis nulla quo pariatur ipsam rem sint quae.
          Quo ipsum officiis est laborum voluptate qui cupiditate reprehenderit
          id recusandae asperiores id labore dolorem ea rerum illum. Ex odio
          dolorem in eveniet aliquid non dolor dolorum eos architecto
          voluptatem?{" "}
        </p>
      </div>
    </ParallaxProvider>
  );
}
