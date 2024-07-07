import ExampleSection from "../components/blocks/ExampleSection";
import Header from "../components/blocks/Header";
import InstallSection from "../components/blocks/InstallSection";
import OptionsSection from "../components/blocks/OptionsSection";
import UseSection from "../components/blocks/UseSection";
import { contentStyle, pageStyle } from "./page.css";

export default function Home() {
  return (
    <div className={pageStyle}>
      <Header />

      <main className={contentStyle}>
        <ExampleSection />
        <InstallSection />
        <UseSection />
        <OptionsSection />
      </main>
    </div>
  );
}
