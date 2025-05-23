import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Banner from "./components/Hero/Banner";
import TaskBoard from "./Tasker/TaskBoard";

const App = () => {
  return (
    <>
      <Navbar />
     <div className="flex flex-col justify-center items-center">
       <Banner />
      <TaskBoard/>
     </div>
      <Footer />
    </>
  );
};

export default App;
