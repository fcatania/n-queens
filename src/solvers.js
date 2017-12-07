/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, 
// with n rooks placed such that none of them can attack each other


// empty matrix that passes in to the Board constructor
// returns Board instance, where we can call useful methods
window.findNRooksSolution = function(n) {
  let board = new Board({n: n});

  let solveRooks = function(rowIndex, colIndex, nRooks) {
    if (!nRooks) {
      return;
    }

    if (nRooks) {
      board.togglePiece(rowIndex, colIndex);
      solveRooks(rowIndex + 1, colIndex + 1, nRooks - 1);
    }
    // _.each(_.range(0, board.get('n')), (colIndex) => {
    //   if (nRooks) {
    //     board.togglePiece(rowIndex, colIndex);
    //     if (board.hasAnyRooksConflicts()) {
    //       board.togglePiece(rowIndex, colIndex);
    //       return;
    //     }
    //     solveRooks(rowIndex + 1, nRooks - 1);
    //   }
    // });
  };

  solveRooks(0, 0, n);

  let solution = board.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  let factorial = (n) => {
    if (n === 1) { 
      return 1;
    }
    return n * factorial(n - 1);
  };

  let solutionCount = factorial(n);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  let board = new Board({n: n});

  let queenCount = 0;
  // let togglePositions = [];
  let solveQueens = (rowIndex, colIndex, n) => {
    for (let row = rowIndex; row < n; row++) {
      for (let col = colIndex; col < n; col++) {
        board.togglePiece(row, col);
        queenCount++;
        if (board.hasAnyQueensConflicts()) {
          board.togglePiece(row, col);
          queenCount--;
        } else {
          // togglePositions.push([row, col]);
          var tempCol = col + 1;
          if (tempCol < n) {
            if (solveQueens(row, tempCol, n)) {
              board.togglePiece(row, col);
              // togglePositions.pop();
              queenCount--;
            }
          } else {
            var tempRow = row + 1;
            if (tempRow < n) {
              if (solveQueens(tempRow, 0, n)) {
                board.togglePiece(row, col);
                // togglePositions.pop();
                queenCount--;
              }
            }
          }
        }
      }
    }
    if (queenCount !== n) {
      return true;
    }
  };

  solveQueens(0, 0, n);

  let solution = board.rows();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
