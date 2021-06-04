import HeroImage from '../components/HeroImage'
import ThinkYoutube from '../components/ThinkYoutube'
import Skill from '../components/Skill'
import Profile from '../components/Profile'
import Banner from '../components/Banner'
import Person from '../components/Person'
import Charisma from '../components/Charisma'
import Blog from '../components/Blog'
import Book from '../components/Book'
import Analysis from '../components/Analysis'
import Bonus from '../components/Bonus'
import University  from '../components/University'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
const Index = ({newData}) => {
  return (
    <>
    <HeroImage newData={newData} />
    <ThinkYoutube newData={newData} />
    <Skill newData={newData} />
    <Profile />
    <Banner newData={newData} />
    <Person newData={newData} />
    <Charisma newData={newData} />
    <Blog newData={newData} />
    <Book newData={newData} />
    <Analysis newData={newData} />
    <Bonus />
    <University />
    <Faq />
    <Footer />
    </>
  )
};
export const getServerSideProps = async () => {
  const newData = (await import("../components/json/data.json")).default;
  return {
    props: { newData }
  };
};

export default Index;
