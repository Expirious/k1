import React, {useState} from 'react';
import './App.css';

let numbers = [];
let changed = false;

function refresh() {
    while (true) {
        if (changed) {
            printNumbers();
        }
    }
}

function printNumbers() {
    let output;
    for (let i = 0; i < numbers.length; i++) {
        output += numbers[i].toString() + " ";
    }
    return output;
}

function generateRandomNumbers() {
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.random() * 100);
    }
    return numbers.map((num) => {return Math.trunc(num)});
    //printNumbers();
}

function swap(arr, x1, x2) {
    let temp = arr[x1];
    arr[x1] = arr[x2];
    arr[x2] = temp;
}

function bubbleSort() {
    let steps = 0;
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < numbers.length - 1; i++)
            if (numbers[i] > numbers[i + 1]) {
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
                    {displayArray.map((num) => {return num + " "})}
                </p>
            </div>

            <div>
                <select>
                    <option>Ascending</option>
                    <option>Descending</option>
                </select>
            </div>

            <div>
                <select>
                    <option onSelect={bubbleSort()}>Bubble Sort</option>
                    <option>Insertion Sort</option>
                    <option>Selection Sort</option>
                    <option>Quick Sort</option>
                </select>
            </div>
        </div>
    );
}

//test
export default App;
