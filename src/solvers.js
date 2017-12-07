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
  let emptyMatrix = _.map(_.range(0, n), (index) => {
    return Array(n).fill(0);
  });

  let board = new Board(emptyMatrix);

  let solveRook = function(rowIndex, nRooks) {
    if (!nRooks) {
      return true;
    }

    _.each(_.range(0, board.get('n')), (colIndex) => {
      if (nRooks) {
        board.togglePiece(rowIndex, colIndex);
        if (board.hasAnyRooksConflicts()) {
          board.togglePiece(rowIndex, colIndex);
          return;
        }
        solveRook(rowIndex + 1, nRooks - 1);
      }
    });
  };

  solveRook(0, n);

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
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
