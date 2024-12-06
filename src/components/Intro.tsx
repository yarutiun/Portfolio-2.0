import "../index.css";
import git from "/Git.png";
import linked from "/Linked.png";
import telegram from "/Telegram.png";
import insta from "/Insta.png";
import user from '/user.jpg';

const Intro = () => {
    const socials = [
        { name: "Telegram", src: telegram, link: 'https://t.me/yarutiun' },
        { name: "LinkedIn", src: linked, link: 'https://www.linkedin.com/in/yurii-arutiunov-348719224/' },
        { name: "GitHub", src: git, link: 'https://github.com/yarutiun' },
        { name: "Instagram", src: insta, link: 'https://www.instagram.com/rezanyi_metaluga/' },
    ];
  return (
    <section id="home" className="flex shrink justify-center pt-44 md:pt-36 sm:pt-24 gap-20 md:pb-16 sm:pb-14">
      <main>
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
          className="w-full max-w-sm sm:max-w-[300px] h-auto object-contain rounded-3xl"
          src={user}
          alt="Yura Photo"
        />
        <div className="flex justify-center gap-5 mt-3 mr-1">
            {socials.map((social) => (
                <a target="_blank" href={social.link} className="cursor-pointer">
                    <img className="w-8 h-8 sm:w-6 sm:h-6 object-contain" src={social.src} alt={social.name} />
                </a>
            ))}
        </div>
      </aside>
    </section>
  );
};
export default Intro;
