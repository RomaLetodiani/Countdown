import CountDownDiv from './Components/CountDownDiv';
import { Bg } from './Components/Global';

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Bg className="w-full min-h-screen min-w-[280px] flex justify-center items-center">
        <div className="w-11/12 max-w-[600px] flex flex-col gap-10 justify-center items-center">
          <h1 className="w-11/12 max-w-[500px] px-6 py-6 rounded-md bg-[#000000b3] text-2xl font-bold text-center tracking-widest ">
            New Year Countdown
          </h1>
          <CountDownDiv newYear={currentYear + 1} />
          <h2 className="bg-[#000000b3] text-[#ffffffd9] text-center p-4 rounded">
            Time Until 01 January of {currentYear + 1}
          </h2>
        </div>
      </Bg>
    </>
  );
}

export default App;
