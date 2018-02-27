module.exports = function solveSudoku(matrix) {
    // your solution
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            if (matrix[x][y] === 0) {
                let result = [];
                for (let i = 0; i < 9; i++) {
                    result.push([matrix[x][i], matrix[i][y], matrix[Math.floor(x / 3) * 3 + i % 3]
                        [Math.floor(y / 3) * 3 + Math.floor(i / 3)]])
                }
                for (let i=0;i<result.length;i++) {
                    matrix[x][y] = result[i];
                    solveSudoku(matrix);
                }
            }
        }
    }
    return matrix;
}
