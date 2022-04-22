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
    const rands = [];
    for (let i = 0; i < 10; i++) {
        rands.push(Math.random() * 100);
    }
    return rands.map((num) => {
        return Math.trunc(num)
    });
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

/**
 *
 */
function bubbleSort() {
    let steps = 0;
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < numbers.length - 1; i++)
            if (comparisonFunction(numbers[i], numbers[i + 1])) {
                swap(numbers, i, i + 1);
                sorted = false;
                steps++;
            }
    }
}

function App() {
    const [displayArray, setDisplayArray] = useState([]);
    console.log("rendering");
    return (
        <div>
            <div>
                <button onClick={() => {
                    setDisplayArray(generateRandomNumbers)
                }}>Generate Numbers
                </button>
            </div>

            <div>
                <p>
                    {displayArray.map((num) => {
                        return num + " "
                    })}
                </p>
            </div>

            <div>
                <select>
                    <option onSelect={() => {
                        ascendingOrder = true;
                        comparisonFunction = compareAscending;
                    }}>Ascending
                    </option>
                    <option onSelect={() => {
                        ascendingOrder = false
                        comparisonFunction = compareDescending;
                    }}>Descending
                    </option>
                </select>
            </div>

            <div>
                <select>
                    <option onSelect={()=>{bubbleSort(); setDisplayArray(numbers); console.log("here.")}}>Bubble Sort</option>
                    <option>Insertion Sort</option>
                    <option>Selection Sort</option>
                    <option>Quick Sort</option>
                </select>
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
        </div>
    );
}

//test
export default App;
