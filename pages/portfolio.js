import Layout from "../component/Layout";
import styles from "../styles/Portfolio.module.scss";
import PortfolioItem from "../component/items/PortfoliItem";

export default function Portfolio() {
  return (
    <Layout
      profile="/"
      portfolio="./portfolio"
      skill="./skill"
      title="Portfolio"
    >
      <div className={styles.portfolios}>
        <PortfolioItem
          pfTitle="Meal Plan"
          fname="portfolio_img1.png"
          size="100%"
        />
      </div>
    </Layout>
  );
}
