import logoImg from "../assets/images/quiz-logo.png";

function Header() {
  return (
    <header className="my-8 text-center">
      <img
        className="mx-auto h-12 w-12 drop-shadow-md"
        src={logoImg}
        alt="this is logo image"
      />
      <h1 className="bg-clip-text fill-transparent text-4xl font-bold uppercase tracking-wider">
        ReactQuiz
      </h1>
    </header>
  );
}

export default Header;
