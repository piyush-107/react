import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="
        w-full min-h-screen 
        flex justify-center items-center 
        bg-cover bg-no-repeat 
        px-4 sm:px-6 md:px-10
      "
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }}
    >
      <div
        className="
          w-full max-w-xl 
          mx-auto 
          p-6 sm:p-8 
          bg-white/30 
          backdrop-blur-md 
          rounded-xl 
          shadow-lg
        "
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* FROM BOX */}
          <div className="mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(val) => setAmount(val)}
              className="text-black"
            />
          </div>

          {/* SWAP BUTTON */}
          <div className="w-full flex justify-center my-3">
            <button
              type="button"
              className="
                px-4 py-2 
                bg-blue-600 text-white 
                rounded-md shadow 
                hover:bg-blue-700 
                transition
              "
              onClick={swap}
            >
              Swap
            </button>
          </div>

          {/* TO BOX */}
          <div className="mb-6">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
              className="text-black"
            />
          </div>

          {/* CONVERT BUTTON */}
          <button
            type="submit"
            className="
              w-full py-3 
              bg-blue-600 hover:bg-blue-700 
              text-white text-lg font-semibold 
              rounded-lg 
              transition
            "
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
