// Function to find the minimum cost of connecting ropes
function minCostOfRopes(ropesLengths) {
    // Check if there are at least two ropes
    if (ropesLengths.length < 2) {
        return 0; // No cost if there is only one rope or none
    }

    // Create a min heap priority queue
    const minHeap = new MinHeap();

    // Add all the ropes to the min heap
    ropesLengths.forEach((rope) => {
        minHeap.insert(rope);
    });

    let totalCost = 0;

    // Connect the ropes until only one rope is left in the heap
    while (minHeap.size() > 1) {
        const firstRope = minHeap.extractMin();
        const secondRope = minHeap.extractMin();

        const currentCost = firstRope + secondRope;
        totalCost += currentCost;

        minHeap.insert(currentCost);
    }

    return totalCost;
}

// Define the MinHeap class
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    extractMin() {
        if (this.size() === 0) {
            return null;
        }

        if (this.size() === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return min;
    }

    heapifyUp() {
        let currentIndex = this.size() - 1;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.heap[currentIndex] < this.heap[parentIndex]) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let currentIndex = 0;

        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let smallestChildIndex = currentIndex;

            if (leftChildIndex < this.size() && this.heap[leftChildIndex] < this.heap[smallestChildIndex]) {
                smallestChildIndex = leftChildIndex;
            }

            if (rightChildIndex < this.size() && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
                smallestChildIndex = rightChildIndex;
            }

            if (currentIndex !== smallestChildIndex) {
                this.swap(currentIndex, smallestChildIndex);
                currentIndex = smallestChildIndex;
            } else {
                break;
            }
        }
    }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

// Get the input value from the text element
const inputText = document.getElementById('input').value;

// Convert the comma-separated values to an array of integers
const ropesLengths = inputText.split(',').map(Number);

// Calculate the minimum cost of connecting ropes
const minimumCost = minCostOfRopes(ropesLengths);

// Display the result in the <div id="result"></div> element
document.getElementById('result').innerText = minimumCost;
