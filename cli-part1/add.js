function add(param_num1, param_num2) {
  return param_num1 + param_num2;
}

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

const sum = add(num1, num2);

console.log(`sum: ${sum}`);
