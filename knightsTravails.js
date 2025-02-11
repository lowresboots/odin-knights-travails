function getPossibleMoves([x, y]) {
    const moves = [
        [-2, -1], [-2, 1],
        [2, -1], [2, 1],
        [-1, -2], [1, -2],
        [-1, 2], [1, 2]
    ];
    
    return moves
        .map(([dx, dy]) => [x + dx, y + dy])
        .filter(([newX, newY]) => 
            newX >= 0 && newX < 8 && newY >= 0 && newY < 8
        );
}

function knightMoves(start, end) {
    const queue = [[start, [start]]];
    const visited = new Set([start.toString()]);

    while (queue.length > 0) {
        const [currentPos, path] = queue.shift();

        if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
            console.log(`=> You made it in ${path.length - 1} moves! Here's your path:`);
            path.forEach(pos => console.log(`    [${pos}]`));
            return path;
        }

        const moves = getPossibleMoves(currentPos);

        for (const move of moves) {
            const moveStr = move.toString();
            if (!visited.has(moveStr)) {
                visited.add(moveStr);
                queue.push([move, [...path, move]]);
            }
        }
    }
    
    return null;
}

module.exports = knightMoves;