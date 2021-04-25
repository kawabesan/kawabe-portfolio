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
          dis="晩ご飯候補を何個か入力し、ランダムで決めてくれるアプリです。"
          period="2週間"
          os="Mac"
          lag="HTML・CSS, SASS, JavaScript"
          fw="React"
          db="firebase"
          appLink="https://mealplan-4565a.web.app/"
        />
        <PortfolioItem
          pfTitle="RecipeBox"
          fname="portfolio_img2.png"
          size="100%"
          dis="日々作成した料理のレシピを書き込むことができるアプリになります。"
          period="3週間"
          os="Mac"
          lag="HTML・CSS, SASS, JavaScript"
          fw="React"
          db="firebase"
          appLink="https://recipe-box-f74b1.web.app/"
        />
          <PortfolioItem
          pfTitle="Kawabe Portfolio"
          fname="portfolio_img2.png"
          size="100%"
          dis="ポートフォリオサイトになります。"
          period="2週間"
          os="Mac"
          lag="HTML・CSS, SASS, JavaScript"
          fw="React Next.js"
          appLink="****"
        />
      </div>
    </Layout>
  );
}
