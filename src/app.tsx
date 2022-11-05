import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import './app.css'
import background from "./assets/Imposing_Radellia_finished.webp";

export function App() {

  return (
    <ParallaxProvider>
        <ParallaxBanner layers={[{ image: background, speed: -50 }]} className="banner">
          <div class="heading">
          <div class="title"><h1>Dragons of Faira</h1></div>
          <div class="navbar">
            <div class="navlink"><a href="">Home</a><div class="line"></div></div>
            <div class="navlink"><a href="">Download</a><div class="line"></div></div>
            <div class="navlink"><a href="">Discord</a><div class="line"></div></div>
            <div class="navlink"><a href="">Twitter</a><div class="line"></div></div>
          </div></div>
        </ParallaxBanner>
      <div class="content">
        <h1>About!</h1>
        <p>Lorem ipsum dolor sit amet. Sit fugiat voluptas est ipsum Quis hic doloribus internos qui iusto minima eos aperiam repellendus. Sed quia esse aut voluptates omnis sit velit aperiam. Qui libero sapiente qui numquam blanditiis non deserunt distinctio. </p><p>Est velit quae sed dolorem Quis sed beatae reprehenderit aut harum odio in commodi iste et reiciendis labore ea atque adipisci. Quo laborum temporibus ut autem obcaecati non vitae neque et ullam deserunt. </p><p>Sit rerum voluptatem 33 omnis nulla quo pariatur ipsam rem sint quae. Quo ipsum officiis est laborum voluptate qui cupiditate reprehenderit id recusandae asperiores id labore dolorem ea rerum illum. Ex odio dolorem in eveniet aliquid non dolor dolorum eos architecto voluptatem? </p>
        <h1>Something else!</h1>
        <p>Lorem ipsum dolor sit amet. Sit fugiat voluptas est ipsum Quis hic doloribus internos qui iusto minima eos aperiam repellendus. Sed quia esse aut voluptates omnis sit velit aperiam. Qui libero sapiente qui numquam blanditiis non deserunt distinctio. </p><p>Est velit quae sed dolorem Quis sed beatae reprehenderit aut harum odio in commodi iste et reiciendis labore ea atque adipisci. Quo laborum temporibus ut autem obcaecati non vitae neque et ullam deserunt. </p><p>Sit rerum voluptatem 33 omnis nulla quo pariatur ipsam rem sint quae. Quo ipsum officiis est laborum voluptate qui cupiditate reprehenderit id recusandae asperiores id labore dolorem ea rerum illum. Ex odio dolorem in eveniet aliquid non dolor dolorum eos architecto voluptatem? </p>
      </div>
      </ParallaxProvider>
  )
}
