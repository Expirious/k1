import React, {useState} from 'react';
import './App.css';

let numbers = [];
let changed = false;
let ascendingOrder = "true"

/** Variable functions. Change according to choices. Don't repeat yourself ;) */
let comparisonFunction = compareAscending;
let sortingFunction = bubbleSort;

/** No longer needed */
// function refresh() {
//     while (true) {
//         if (changed) {
//             printNumbers();
//         }
//     }
// }


function printNumbers() {
    let output;
    for (let i = 0; i < numbers.length; i++) {
        output += numbers[i].toString() + " ";
    }
    return output;
}

/**
 * @returns {number[]} , an array of random numbers
 */
function generateRandomNumbers() {
    numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.trunc(Math.random() * 100));
    }
    //printNumbers();
}

/**
 * Swaps array[i] with array[j]
 * @param arr
 * @param i
 * @param j
 */
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/** Previous one, I changed how comparison is being done */
// function bubbleSort() {
//     let steps = 0;
//     let sorted = false;
//
//     while (!sorted) {
//         sorted = true;
//
//         for (let i = 0; i < numbers.length - 1; i++)
//             if (numbers[i] > numbers[i + 1]) {
//                 swap(numbers, i, i + 1);
//                 sorted = false;
//                 steps++;
//             }
//     }
// }


function compareAscending(valLeft, valRight) {
    return valLeft > valRight;
}

function compareDescending(valLeft, valRight) {
    return valLeft < valRight;
}

function bubbleSort() {
    let steps = 0;
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < numbers.length - 1; i++) if (comparisonFunction(numbers[i], numbers[i + 1])) {
            swap(numbers, i, i + 1);
            sorted = false;
            steps++;
        }
    }
}

function App() {
    //A little hack. Whenever renderTrigger is called, React will re-render. Doing this to avoid read only arrays.
    const [purposelessBoolean, setPurposelessBoolean] = useState(false);
    const renderTrigger = () => {setPurposelessBoolean(!purposelessBoolean)};

    console.log("rendering");
    return (<div>
            <div>
                <button onClick={() => {
                    generateRandomNumbers();
                    renderTrigger();
                }}>Generate Numbers
                </button>
            </div>

            <div>
                <p>
                    {numbers.map((num) => {
                        return num + " "
                    })}
                </p>
            </div>

            <div>
                <select onChange={(e) => {
                    switch (e.target.value) {
                        case "ascending":
                            ascendingOrder = true;
                            comparisonFunction = compareAscending;
                            break;
                        case "descending":
                            ascendingOrder = false
                            comparisonFunction = compareDescending;
                            break;
                        default:
                            break;
                    }
                }}>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>

            <div>
                <select onChange={(e)=>{
                    switch (e.target.value) {
                        case "bubble":
                            sortingFunction = bubbleSort;
                            break;
                        /** Must implement other function choices */
                        default:
                            break;
                    }
                }}>
                    <option value="bubble">Bubble Sort</option>
                    <option>Insertion Sort</option>
                    <option>Selection Sort</option>
                    <option>Quick Sort</option>
                </select>
                <button onClick={()=>{sortingFunction(); renderTrigger();
                    console.log(numbers)}}>Sort</button>
            </div>

            {/*<div>*/}
            {/*    <select>*/}
            {/*        //To eixame ylopihsei la8os, o monos pou mporei na exei epiloges einai to select :(*/}
            {/*        <option onSelect={()=>{bubbleSort(); setDisplayArray(numbers); console.log("here.")}}>Bubble Sort</option>*/}
            {/*        <option>Insertion Sort</option>*/}
            {/*        <option>Selection Sort</option>*/}
            {/*        <option>Quick Sort</option>*/}
            {/*    </select>*/}
            {/*</div>*/}
        </div>);
}

//test
export default App;
