import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <div className="flex">
          <button
            type="button"
            onClick={() =>
              window.open("https://github.com/ladunjexa/GPT4-Summarizer-Web")
            }
            className="github_btn"
          >
            GitHub
          </button>
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://rapidapi.com/restyler/api/article-extractor-and-summarizer/"
              )
            }
            className="rapidapi_btn"
          >
            Rapid API
          </button>
        </div>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
