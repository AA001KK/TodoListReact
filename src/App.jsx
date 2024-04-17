import { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [familiya, setFamiliya] = useState("");
  const [manba, setManba] = useState("");
  const getNameValue = (e) => {
    setName(e.target.value);
  };

  const getFamiliyaValue = (e) => {
    setFamiliya(e.target.value);
  };

  const getManbaValue = (e) => {
    setManba(e.target.value);
  };

  // const [names, setNames] = useState([])
  // const [familiyaslar, setFamiliyalar] = useState([])
  // const [mansablar, setMansablar] = useState([])

  const [list, setList] = useState([]);
  const add = () => {
    setList([...list, { name, familiya, manba }]);
    // setNames([...names, name])
    // setFamiliyalar([...familiyaslar,familiya])
    // setMansablar([...mansablar,manba])
    // console.log(mansablar);
    console.log(list);
  };
  return (
    <div className="container mx-auto mt-[50px] ">
      <div className="title text-center py-[10px] px-[20px] rounded-[20px] bg-[#222831] text-[white]">
        TO DO List
      </div>
      <div className="inputBox flex gap-[20px] my-[20px] ">
        <input
          type="text"
          className="py-[10px] px-[20px] focus:bg-[#76ABAE] bg-[gray]  text-[white] rounded-[20px]"
          placeholder="Ismi"
          onChange={getNameValue}
        />
        <input
          type="text"
          className="py-[10px] px-[20px] bg-[gray]  text-[white] rounded-[20px]"
          placeholder="Familiyasi"
          onChange={getFamiliyaValue}
        />
        <input
          type="text"
          className="py-[10px] px-[20px] bg-[gray]  text-[white] rounded-[20px]"
          placeholder="Mansabi"
          onChange={getManbaValue}
        />
        <button
          onClick={add}
          className="py-[10px] px-[20px] bg-[green]  text-[white] rounded-[20px]"
        >
          Ishchi qo'shish
        </button>
      </div>
      <table className="my-[50px] py-[10px]  block  px-[20px] bg-[#31363F] rounded-[20px] w-full">
        {list.map((value, ind) => {
          return (
            <tr
              key={ind}
              className="my-[10px] block border-4 border-solid border-[#FEFAF6] flex justify-between"
            >
              <td className="text-center w-[30%] py-[5px]  px-[10px] bg-[#DAC0A3]  text-[#102C57] uppercase">
                {value.name}
              </td>
              <td className="text-center w-[30%] py-[5px]  px-[10px] bg-[#DAC0A3] text-[#102C57] uppercase">
                {value.familiya}
              </td>
              <td className="text-center w-[30%] py-[5px]  px-[10px] bg-[#DAC0A3] text-[#102C57] uppercase">
                {value.manba}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
