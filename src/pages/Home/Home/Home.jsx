import BannerHome from "../OtherHomePages/Banner/BannerHome";
import Community from "../OtherHomePages/Community/Community";
import FAQ from "../OtherHomePages/FAQ/FAQ";
import ReadyPart from "../OtherHomePages/ReadyPart/ReadyPart";

const Home = () => {
    return (
        <div>
            <BannerHome></BannerHome>
            <Community></Community>
            <ReadyPart></ReadyPart>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;