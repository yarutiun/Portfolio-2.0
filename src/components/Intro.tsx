import "../index.css";
import git from "/Git.png";
import linked from "/Linked.png";
import telegram from "/Telegram.png";
import insta from "/Insta.png";

const Intro = () => {
    const socials = [ // TODO: Add links to socials
        { name: "Telegram", src: telegram },
        { name: "LinkedIn", src: linked },
        { name: "GitHub", src: git },
        { name: "Instagram", src: insta },
    ];
  return (
    <section className="flex shrink justify-center p-44 md:p-36 sm:p-24 gap-20">
      <main className="">
        <h5 className="font-semibold text-base">Hi, I am</h5>
        <h3 className="text-2xl text-orange-400 font-semibold">
          Yura Arutiunov
        </h3>
        <h1 className="font-semibold text-7xl">FullStack</h1>
        <h1 className="font-semibold text-7xl ml-20">Developer</h1>
        <p className="text-lg mt-5 max-w-[calc(100%-2rem)]">
            I am a Full Stack Developer</p><p> with experience in building web applications using modern technologies.</p><p> I specialize in JavaScript and have professional experience</p><p>working with React, Node.js, and Express.js.
        </p>
      </main>
      <aside>
        <img
          className="w-full max-w-xs sm:max-w-[200px] h-auto object-contain"
          src="/user.png"
          alt="Yura Photo"
        />
        <div className="flex justify-center gap-5 mt-5">
            {socials.map((social) => (
                <a href="" className="cursor-pointer">
                    <img className="w-8 h-8 sm:w-6 sm:h-6 object-contain" src={social.src} alt={social.name} />
                </a>
            ))}
        </div>
      </aside>
    </section>
  );
};
export default Intro;
