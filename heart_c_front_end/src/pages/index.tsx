import HeartHeader from "@/components/HeartHeader";
import HeartMain from "@/components/HeartMain";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <HeartHeader></HeartHeader>
      <HeartMain></HeartMain>
    </div>
  );
}
