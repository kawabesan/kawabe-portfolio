import Layout from "../component/Layout";
import Image from "../public/Image";
import styles from "../styles/Profile.module.scss";

export default function Home() {
  return (
    <Layout profile="/" portfolio="./portfolio" skill="./skill" title="Profile">
      <article className={styles.profileBox}>
        <div className={styles.imageBox}>
          <Image fname="./profile-img.png" size="300px" name={styles.pImg} />
        </div>
        <div className={styles.profiles}>
          <h3>Kawabe Koshiro</h3>
          <p>
            鳥取県　米子市出身。
            <br/><br/>

            趣味：　読書、ゲーム、サイクリング（愛車を手放したため現在はできてない）
            <br/><br/>

            ウェブ制作に興味を持ち、独学でHTML・CSS、Photshopを学習。<br/>
            その後、プログラミングにも興味を持ち、スクールにて3ヶ月間で<br/>
            JavaScript・Reactなどの学習を行う
            <br />
            
          </p>
        </div>
      </article>
    </Layout>
  );
}
