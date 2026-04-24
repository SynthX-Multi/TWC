import BackHomeButton from "../../../components/BackHomeButton";
import LinkCard from "../../../components/LinkCard";
import { secretHubLinks } from "../../../data/secretHub";

export const metadata = {
  title: "TWC Secret Hub"
};

export default function SecretHubPage() {
  return (
    <section className="page-section">
      <div className="secret-header">
        <div>
          <span className="eyebrow">Hidden page</span>
          <h1>Link hub</h1>
          <p>A larger collection of links with open and copy actions.</p>
        </div>
        <BackHomeButton />
      </div>

      <div className="link-grid">
        {secretHubLinks.map((item, index) => (
          <LinkCard key={item.name} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
