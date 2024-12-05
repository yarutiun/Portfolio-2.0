import '../index.css';

const headerLinks = [
    {name: 'Home'},
    {name: 'About Me'},
    {name: 'Skills'},
    {name: 'Projects'},
    {name: 'Work Experience'},
    {name: 'Contacts'}
];

const Header = () => {
  return (
    <header className="flex justify-around items-center p-5">
    <h1 className="text-xl">Yura Arutiunov</h1>
    <nav>
        <ul className="flex md:gap-5 sm:gap-3">
            {headerLinks.map((link) => (
                <li key={link.name} className="inline-block cursor-pointer">{link.name}</li>
            ))}
            <li className="inline-block box-border shadow-md bg-orange-500 rounded cursor-pointer py-0.5 px-1">
                <a href="/Yurii_Arutiunov_CV.pdf" download="Yurii_Arutiunov_CV.pdf">Download CV</a>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
