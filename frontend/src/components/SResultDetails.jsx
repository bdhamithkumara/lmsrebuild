import { useState } from 'react';
import axios from 'axios';

const SResultDetails = () => {

  const [dataTable, setDataTable] = useState([]);

  const showData = (e) => {
    e.preventDefault();
    axios('https://mocki.io/v1/113c1b73-f0b9-4df6-9b5d-90fb198228b9')
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  };

  

  const column = [
    { heading: 'Subject Code', value: 'subjectcode' },
    { heading: 'Result', value: 'result' },
  ]

  return (
    <div>
      <div>
        <div>
          <div>
            <div className="flex ">
              <div className="basis-1/3">
                <div className="relative w-full ">
                  <select
                    className="w-full px-3 py-2 text-slate-400  bg-white border rounded-md shadow-sm outline-none  focus:border-[#F1B81F] mb-4"
                    // defaultValue={level[0]}
                    // onChange={(e) => setLevel(e.target.value)}
                  >
                    <option className="text-gray-500">Select the Level</option>
                    <option value="Level 1">Level 1</option>
                    <option value="Level 2">Level 2</option>
                    <option value="Level 3">Level 3</option>
                    <option value="Level 4">Level 4</option>
                  </select>
                </div>
              </div>
              <div className="basis-1/3">
                <input
                  type="text"
                  name="IndexNo"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Index No"
                  required
                  // value={hashtags}
                  // onChange={(e) => setHashtag(e.target.value)}
                />
              </div>
              <div className="basis-1/3">
                <div className="relative w-full ">
                  <select
                    className="w-full px-3 py-2 text-slate-400  bg-white border rounded-md shadow-sm outline-none  focus:border-[#F1B81F] mb-4"
                    // defaultValue={semester[0]}
                    // onChange={(e) => setSemester(e.target.value)}
                  >
                    <option className="text-gray-500">
                      Select the Semester
                    </option>
                    <option value="Semester 1">Semester 1</option>
                    <option value="Semester 2">Semester 2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="">
              <button
                className="rounded-full bg-[#F1B81F] text-black p-2  w-[150px]"
                onClick={showData}
              >
                Show
              </button>
            </div>
          </div>
        </div>
        <div>
          <table className="max-w-[900px] w-full mx-auto my-8 border-collapse" column={column}>
            <thead className="border p-2 border-solid border-[#ddd]">
              <tr>
                {column.map((item, index) => (
                  <TableHeadItem item={item} />
                ))}
              </tr>
            </thead>
            <tbody className="border p-2 border-solid border-[#ddd]">
              {dataTable.map((item, index) => (
                <TableRow item={item} column={column} />
              ))}
            </tbody>
          </table>
        </div>
        <div>
        <button
                className="rounded-full bg-[#F1B81F] text-black p-2  w-[150px]"
                // onClick={showData}
              >
               Download Results
              </button>
        </div>
      </div>
    </div>
  );
};

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
const TableRow = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {
      if (columnItem.value.includes(".")) {
        const itemSplit = columnItem.value.split("."); //['address', 'city']
        return <td>{item[itemSplit[0]][itemSplit[1]]}</td>;
      }

      return <td>{item[`${columnItem.value}`]}</td>;
    })}
  </tr>
);

export default SResultDetails;
