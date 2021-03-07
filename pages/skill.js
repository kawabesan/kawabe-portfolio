import Layout from "../component/Layout";
import styles from "../styles/Skill.module.scss";

export default function Skill() {
  return (
    <Layout profile="/" portfolio="./portfolio" skill="./skill" title="Skill">
      <div className={styles.fBox}>
      <div className={styles.skillBox}>
      <h4 className={styles.skillTitle}>フロントエンド </h4>
        <p>言語</p>
        <ul className={styles.skills}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        </div>
        <div className={styles.skillBox}>
        <h4 className={styles.skillTitle}>デザイン</h4>
        <ul className={styles.skills}>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
        </ul>
        </div>
        <div className={styles.skillBox}>
          <h4 className={styles.skillTitle}>インフラ・バックエンド</h4>
          <ul className={styles.skills}>
            <li>Firebase</li>
          </ul>
        </div>
        <div className={styles.skillBox}> 
          <h4 className={styles.skillTitle}>フレームワーク</h4>
          <ul className={styles.skills}>
            <li>React</li>
            <li>Redux</li>
            <li>Next.js</li>
          </ul>
        </div>
      </div>

    </Layout>
  );
}
