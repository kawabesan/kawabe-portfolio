import Layout from '../component/Layout';
import styles from '../styles/portfolio.module.scss';
import PortfolioItem from '../component/items/PortfoliItem';


export default function Portfolio(props) {

  return (
      <Layout profile="/" portfolio="./portfolio" skill="./skill" title="Portfolio">
        <div className={styles.portfolios}>
          <PortfolioItem pfTitle='meal_plan' fname="portfolio_img1.png" size="100%" />
        </div>
      </Layout>
  )

}