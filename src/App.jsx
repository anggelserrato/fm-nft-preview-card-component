import imageAvatar from './assets/image-avatar.png';
import iconClock from './assets/icon-clock.svg';
import iconEthereum from './assets/icon-ethereum.svg';
import iconView from './assets/icon-view.svg';
import imageEquilibrium from './assets/image-equilibrium.jpg';

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center text-white">
      <article>
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <p>0.041 ETH</p>
        <p>3 days left</p>
        <figure>
          <img src={imageAvatar} alt="Avatar" />
        </figure>
        <p>Creation of Jules Wyvern</p>
      </article>
    </main>
  );
}
