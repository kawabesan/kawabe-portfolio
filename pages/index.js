import Layout from "../component/Layout";
import Image from "../public/Image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Profile.module.scss";

export default function Home() {
  return (
    <Layout profile="/" portfolio="./portfolio" skill="./skill" title="Profile">
      <article className={styles.profileBox}>
        <div className={styles.imageBox}>
          <Image fname="./DSC00138.JPG" size="300px" name={styles.pImg} />
        </div>
        <div className={styles.profiles}>
          <h3>Kawabe Koshiro</h3>
          <p>
            鳥取県出身。
            <br />
            フロントエンドエンジニアを目指し、日々学習中。
          </p>
        </div>
      </article>
    </Layout>
  );
}
