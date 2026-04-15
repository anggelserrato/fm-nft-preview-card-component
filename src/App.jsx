import imageAvatar from './assets/image-avatar.png';
import iconClock from './assets/icon-clock.svg';
import iconEthereum from './assets/icon-ethereum.svg';
import iconView from './assets/icon-view.svg';
import imageEquilibrium from './assets/image-equilibrium.jpg';

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <article className="w-[350px] rounded-[15px] bg-card-blue-900 p-card-300">
        <figure className="peer group relative mb-card-300 cursor-pointer overflow-hidden rounded-[8px]">
          <img
            src={imageEquilibrium}
            alt="Equilibrium"
            className="block w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-card-cyan-400/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <img src={iconView} alt="View" />
          </div>
        </figure>
        <h1 className="mb-card-200 cursor-pointer text-[22px] leading-normal font-semibold transition-colors duration-200 peer-hover:text-card-cyan-400">
          Equilibrium #3429
        </h1>
        <p className="mb-card-300 text-[18px] leading-[26px] font-light text-card-blue-500">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="mb-card-300 flex justify-between">
          <figure className="flex items-center gap-card-100">
            <img src={iconEthereum} alt="Ethereum" />
            <figcaption className="text-[16px] leading-normal font-semibold text-card-cyan-400">
              0.041 ETH
            </figcaption>
          </figure>
          <figure className="flex items-center gap-card-100">
            <img src={iconClock} alt="Clock" />
            <figcaption className="text-[16px] leading-normal font-normal text-card-blue-500">
              3 days left
            </figcaption>
          </figure>
        </div>
        <hr className="mb-card-300 h-px border-card-blue-800" />
        <figure className="flex items-center gap-card-200 peer-hover:[&_span]:text-card-cyan-400">
          <img
            src={imageAvatar}
            alt="Avatar"
            className="w-[36px] rounded-full border border-white"
          />
          <figcaption className="flex gap-card-100 text-[16px] leading-normal font-normal text-card-blue-500">
            Creation of{' '}
            <span className="text-[16px] leading-normal font-normal text-white transition-colors duration-200 peer-hover:text-card-cyan-400">
              Jules Wyvern
            </span>
          </figcaption>
        </figure>
      </article>
    </main>
  );
}
