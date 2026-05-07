import BackHomeButton from "../../../components/BackHomeButton";
import LinkCard from "../../../components/LinkCard";
import { secretGames } from "../../../data/secretGames";

export const metadata = {
  title: "TWC Secret Games"
};

export default function SecretGamesPage() {
  return (
    <section className="page-section">
      <div className="secret-header">
        <div>
          <span className="eyebrow">Hidden page</span>
          <h1>Games links</h1>
          <p>Open or copy any link from the collection below.</p>
        </div>
        <BackHomeButton />
      </div>

      <div className="link-grid">
        {secretGames.map((item, index) => (
          <LinkCard key={item.name} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
