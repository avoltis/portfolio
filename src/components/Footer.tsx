import { portfolio } from "../types";

export default function Footer({ social: { email } }: screenProps) {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Portfolio</strong> by{" "}
          <a href={"mailto:" + email}>Voltis Agolli</a>
          {/* . The source code is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The
          website content is licensed {' '}
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY NC SA 4.0
          </a>
          . */}
        </p>
      </div>
    </footer>
  );
}

type screenProps = {
  social: portfolio["social"];
};
