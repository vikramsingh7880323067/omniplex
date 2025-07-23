import styles from "@/styles/Home.module.css";
import AuthWrapper from "./AuthWrapper";
import MainPrompt from "../components/MainPrompt/MainPrompt";
import PaymentCard from "../components/PaymentCard/PaymentCard";

const Home = () => {
  return (
    <AuthWrapper>
      <div className={styles.main}>
        <MainPrompt />
        <PaymentCard />
      </div>
    </AuthWrapper>
  );
};

export default Home;