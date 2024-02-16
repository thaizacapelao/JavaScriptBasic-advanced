function calculateAverage(numbers) {
    return numbers.length === 0 ? 0 : 
      numbers.reduce((sum, num) => sum + num, 0) /
      numbers.length;
  }