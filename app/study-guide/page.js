import BackHomeButton from "../../components/BackHomeButton";
import { studyGuideSections } from "../../data/studyGuide";

export const metadata = {
  title: "TWC Study Guide"
};

export default function StudyGuidePage() {
  return (
    <section className="page-section">
      <div className="secret-header">
        <div>
          <span className="eyebrow">Study Guide</span>
          <h1>Revision plan</h1>
          <p>A cleaner version of the pasted guide, structured by subject and action.</p>
        </div>
        <BackHomeButton />
      </div>

      <div className="study-intro">
        <p>
          The original notes are strong. This version turns them into a practical workflow: study the lesson, then
          use short recall checks and quick subject-specific revisions before tests.
        </p>
      </div>

      <div className="study-grid">
        {studyGuideSections.map((section) => (
          <article key={section.subject} className="study-card">
            <h2>{section.subject}</h2>
            <p className="study-summary">{section.summary}</p>

            <div className="study-block">
              <h3>During and after class</h3>
              <ul>
                {section.duringAndAfterClass.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="study-block">
              <h3>Before tests and exams</h3>
              <ul>
                {section.beforeTests.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="study-block">
              <h3>Changes needed</h3>
              <ul>
                {section.changesNeeded.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
