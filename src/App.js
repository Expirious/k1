import logo from './logo.svg';
import './App.css';
// Our sample dropdown options
const options = ['BubbleSort', 'InsertionSort', 'SelectionSort', 'QuickSort'];

/**
 * Returns random numbers array
 * @param count
 * @param range
 */
function randomNumbers(count, range) {
    let x = [];
    for (let i = 0; i < count; i++) {
        x.push(Math.random() * range + 1);
    }
    //1,2,3,4
    return x.map((num) => {
        return Math.trunc(num)
    }); //copy
}

function App() {
    return (
        <div className="Random numbers">
            <p>{randomNumbers(10, 100).map((num) => {
                return num + " "
            })}</p>
        </div>
    );
}
//test
export default App;
