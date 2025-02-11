const knightMoves = require('./knightsTravails.js');

function runTests() {
    function isValidPath(path) {
        if (path.length === 1) return true;
        
        for (let i = 1; i < path.length; i++) {
            const [x1, y1] = path[i - 1];
            const [x2, y2] = path[i];

            const dx = Math.abs(x2 - x1);
            const dy = Math.abs(y2 - y1);

            if (!((dx === 2 && dy === 1) || (dx === 1 && dy === 2))) {
                return false;
            }
        }
        return true;
    }

    const tests = [
        {
            name: "Same position",
            start: [0, 0],
            end: [0, 0],
            expectedLength: 1
        },
        {
            name: "Adjacent move (L-shape)",
            start: [0, 0],
            end: [1, 2],
            expectedLength: 2
        },
        {
            name: "Diagonal move",
            start: [0, 0],
            end: [3, 3],
            expectedLength: 3
        },
        {
            name: "Long distance move",
            start: [0, 0],
            end: [7, 7],
            expectedLength: 7
        },
        {
            name: "Edge to edge",
            start: [0, 0],
            end: [7, 0],
            expectedLength: 6
        }
    ];

    console.log("Running Knight's Travails Tests...\n");
    
    tests.forEach((test, index) => {
        console.log(`Test ${index + 1}: ${test.name}`);
        console.log(`Starting position: [${test.start}]`);
        console.log(`Target position: [${test.end}]`);
        
        const path = knightMoves(test.start, test.end);
        
        console.log("\nValidation:");
        console.log(`✓ Path exists: ${path !== null}`);
        console.log(`✓ Correct length: ${path.length === test.expectedLength}`);
        console.log(`✓ Valid moves: ${isValidPath(path)}`);
        console.log(`✓ Correct start/end: ${path[0].toString() === test.start.toString() 
            && path[path.length-1].toString() === test.end.toString()}`);
        
        console.log("\n" + "=".repeat(50) + "\n");
    });
}

runTests();