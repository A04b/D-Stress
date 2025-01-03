import { Link } from "react-router-dom";
import S_header from "../S_header";
import Sfooter from "../Sfooter";
export default function MainGame() {
  const gamelist = [
    { href: "/stressballbounce", img: "/assets/games/game5.jpg" },
    { href: "/wordsearchgame", img: "/assets/games/words.jpeg" },
    { href: "/mazegame", img: "/assets/games/maze.jpeg" },
    { href: "/connectthedots", img: "/assets/games/connectdots.jpeg" },
  ];

  return (
    <div>
      <div className="md:hidden">
        <S_header />
      </div>
      <div className="md:hidden h-[100px] bg-blue-600"></div>
      <div className="bg-indigo-300 min-h-screen min-w-screen">
        <h1 className="px-20 pt-10 text-2xl md:text-4xl">Games</h1>
        <div className="w-[85%] mx-auto pt-[100px] grid md:grid-cols-3 gap-x-5 gap-y-5">
          {gamelist.map((gamelist) => {
            return (
              <Link to={gamelist.href}>
                <div className="bg-white h-[200px] overflow-hidden object-cover">
                  <img src={gamelist.img} alt="game 5" className="h-full w-full" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Sfooter />
    </div>
  );
}
