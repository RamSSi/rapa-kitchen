import './App.css';
import Buttons from './components/Buttons';
import Cards from './components/Cards';
import Comments from './components/Comments';
import Calendar from './components/Calendar';
import Footer from './components/Footer';
import Header from './components/Header';
import Wish from './components/Wish';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="mid">
        <div className="mid-l">
          <Buttons />
          <Cards />
          <div>
            <p className='text-sm text-[#919BAB] text-start mt-3 ml-16 font-semibold'>09.26~09.30</p>
            <p className='text-start ml-14 text-sm my-3 text-[#919BAB] font-semibold'> * 위 식단은 식재료 수급상황에 따라 변동될 수 있음을 양해바랍니다.</p>
          </div>
        </div>
        <div className='mid-r'>
          <Calendar />
        </div>
      </div>
      <div className='flex justify-center'>
        <Comments />
        <Wish />
      </div>
      <Footer />
    </div>
  );
}

export default App;
