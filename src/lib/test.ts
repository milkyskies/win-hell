function twoSums(nums: number[], target: number): number[] {
  const newNums = nums.forEach((num, index) => {
    const rest = target - num;
    const restIndex = nums.indexOf(rest);
    if (restIndex !== -1 && restIndex !== index) {
      return [index, restIndex];
    }
  });

  return newNums;
}