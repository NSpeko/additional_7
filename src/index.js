module.exports = function solveSudoku(matrix) {
    // your solution
    if (solve(0,0,matrix)){
        return matrix;
    }

    function solve(i,j,tempMatrix) {
        if (i === 9) {
            i = 0;
            if (++j === 9)
                return true;
        }
        if (tempMatrix[i][j] !== 0)
            return solve(i+1,j,tempMatrix);

        for (let val = 1; val <= 9; ++val) {
            if (isValid(i,j,val,tempMatrix)) {
                tempMatrix[i][j] = val;
                if (solve(i+1,j,tempMatrix))
                    return true;
            }
        }
        tempMatrix[i][j] = 0;
        return false;
    }

    function isValid(i,j,val,tempMatrix) {
        for (let k = 0; k < 9; ++k)
        if (val === tempMatrix[k][j])
            return false;

        for (let k = 0; k < 9; ++k)
        if (val === tempMatrix[i][k])
            return false;

        let rowOffset = Math.floor(i / 3)*3;
        let colOffset = Math.floor(j / 3)*3;
        for (let k = 0; k < 3; ++k)
        for (let m = 0; m < 3; ++m)
        if (val === tempMatrix[rowOffset+k][colOffset+m])
            return false;

        return true;
    }
}
