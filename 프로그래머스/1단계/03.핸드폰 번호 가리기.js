const solution = (phone_number) =>
  "*".repeat(phone_number.length - 4) + phone_number.slice(-4);

console.log(solution("01027893655"));
