import { Link } from "react-router-dom";

function ProjectList() {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <ul className="h-list c-gap-10 r-gap-10 items">
      <li
        className="box project"
        style={{
          backgroundImage: `url("https://i.imgur.com/bKoQwCZ.png")`,
        }}
      >
        <h4 className="info">Cultured</h4>
        <div className="links">
          <div className="repo">
            <Link to={"https://cultured.herrguller.cc/"} target="_blank">
              Live
            </Link>
          </div>
          <div className="repo">
            <Link
              to={"https://github.com/mystictide/cultured-client"}
              target="_blank"
            >
              Front-end
            </Link>
          </div>
          <div className="repo">
            <Link
              to={"https://github.com/mystictide/cultured-server"}
              target="_blank"
            >
              Back-end
            </Link>
          </div>
        </div>
      </li>
      <li
        className="box project"
        style={{
          backgroundImage: `url("https://i.imgur.com/pEElGuJ.png")`,
        }}
      >
        <h4 className="info">Explore Spotify</h4>
        <div className="links">
          <div className="repo">
            <Link
              to={"https://mystictide.github.io/explore-spotify/"}
              target="_blank"
            >
              Live
            </Link>
          </div>
          <div className="repo">
            <Link
              to={"https://github.com/mystictide/explore-spotify"}
              target="_blank"
            >
              Front-end
            </Link>
          </div>
        </div>
      </li>
      <li
        className="box project"
        style={{
          backgroundImage: `url("https://i.imgur.com/wCzPHmd.png")`,
        }}
      >
        <h4 className="info">Trainer</h4>
        <div className="links">
          <div className="repo">
            <Link to={"https://trainer.herrguller.cc/"} target="_blank">
              Live
            </Link>
          </div>
          <div className="repo">
            <Link
              to={"https://github.com/mystictide/trainer-client"}
              target="_blank"
            >
              Front-end
            </Link>
          </div>
          <div className="repo">
            <Link
              to={"https://github.com/mystictide/trainer-server"}
              target="_blank"
            >
              Back-end
            </Link>
          </div>
        </div>
      </li>
      <li
        className="box project"
        style={{
          backgroundImage: `url("https://i.imgur.com/fvMMwjl.png")`,
        }}
      >
        <h4 className="info">Tester</h4>
        <div className="links">
          <div className="repo">
            <Link to={"https://tester.herrguller.cc/"} target="_blank">
              Live
            </Link>
          </div>
          <div className="repo">
            <Link
              to={"https://github.com/mystictide/tester.client"}
              target="_blank"
            >
              Front-end
            </Link>
          </div>
          <div className="repo">
            <Link
              to={"https://github.com/mystictide/tester.api"}
              target="_blank"
            >
              Back-end
            </Link>
          </div>
        </div>
      </li>
      <li
        className="box project"
        style={{
          backgroundImage: `url("https://i.imgur.com/HejkRMo.png")`,
        }}
      >
        <h4 className="info">Scraper</h4>
        <div className="links">
          <div className="repo">
            <Link
              to={"https://github.com/mystictide/artvee-scraper"}
              target="_blank"
            >
              Repository
            </Link>
          </div>
        </div>
      </li>
      <li
        className="box project"
        style={{
          backgroundImage: `url("https://i.imgur.com/tA97XRP.png")`,
        }}
      >
        <h4 className="info">Poetry Bot</h4>
        <div className="links">
          <div className="repo">
            <Link to={"https://twitter.com/orpheus_laments"} target="_blank">
              Live
            </Link>
          </div>
          <div className="repo">
            <Link
              to={"https://github.com/mystictide/poetry-bot"}
              target="_blank"
            >
              Back-end
            </Link>
          </div>
        </div>
      </li>
      <li
        className="box project"
        style={{
          backgroundImage: `url("https://i.imgur.com/MAZXOwq.png")`,
        }}
      >
        <h4 className="info">Framer</h4>
        <div className="links">
          <div className="repo">
            <Link to={"https://github.com/mystictide/framer"} target="_blank">
              Repository
            </Link>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default ProjectList;
