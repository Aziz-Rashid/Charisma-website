import HeroImage from '../components/HeroImage'
import ThinkYoutube from '../components/ThinkYoutube'
import Skill from '../components/Skill'
import Profile from '../components/Profile'
import Banner from '../components/Banner'
const Index = ({newData}) => {
  return (
    <>
    <HeroImage newData={newData} />
    <ThinkYoutube newData={newData} />
    <Skill newData={newData} />
    <Profile />
    <Banner newData={newData} />
    </>
  )
};
export const getStaticProps = async () => {
  const newData = (await import("../components/json/data.json")).default;
  return {
    props: { newData }
  };
};

export default Index;
