export const Header = () => {
  return (
    <header className="font-bold bg-stone-800 p-6 flex justify-between mx-auto items-center">
      <h1 className="logo text-white">
        <a href="">Blog</a>
      </h1>
      <nav>
        <ul>
          <li className="text-white">
            <a href="">お問い合わせ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}