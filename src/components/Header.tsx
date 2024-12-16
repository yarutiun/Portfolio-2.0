import '../index.css';

const headerLinks = [
    {name: 'Home', href: 'home'},
    {name: 'About Me', href: 'about'},
    {name: 'Skills', href: 'skills'},
    {name: 'Projects', href: 'projects'},
    {name: 'Work Experience', href: 'experience'},
    {name: 'Contacts', href: 'contacts'},
];

const Header = () => {
  return (
    <header className="flex justify-around items-center p-5">
    <h1 className="text-xl wave-text" data-text="Yura Arutiunov">Yura Arutiunov</h1>
    <nav>
        <ul className="flex md:gap-5 sm:gap-3">
            {headerLinks.map((link) => (
                <li key={link.name} className="inline-block cursor-pointer hover:text-orange-500"><a href={`#${link.href}`}>{link.name}</a></li>
            ))}
            <li className="inline-block box-border shadow-md bg-orange-500 rounded cursor-pointer py-0.5 px-1 hover:bg-orange-400">
                <a href="/Yurii_Arutiunov_CV.pdf" download="Yurii_Arutiunov_CV.pdf">Download CV</a>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
