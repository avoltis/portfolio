import { portfolio } from "../types";

export default function Section({ summary }: screenProps) {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">About Me</h1>
        <h2 className="subtitle">{summary}</h2>
      </div>
    </section>
  );
}

type screenProps = {
  summary: portfolio["summary"];
};
