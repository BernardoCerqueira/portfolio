import styles from "@/styles/common/pages.module.scss"
import CommonHeader from "@/components/common/CommonHeader";
import CommonFooter from "@/components/common/CommonFooter"
import HeroSection from "@/components/mainPage/HeroSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <CommonHeader/>
      <main className={styles.main}>
        <HeroSection/>
      </main>
      <CommonFooter/>
    </div>
  );
}
