# Challenge the first

#### Goal:

To evaluate understanding of the concepts outlined in this guide https://medium.com/@voltx180/a-beginners-guide-for-creating-command-line-programs-in-node-js-42d1ebfe9c08

## Beginner:

Create a calculator program that accepts input for 2 numbers and applies the appropriate calculations on those number and outputs the result. You should include all basic symbols (+,-,\*,/)

For example:

`node calculator 2 / 2`

should output

`1`

## Intermediate:

Write a program that uses an npm package to accept user input. (Suggested: Inquirer or Prompt). This program should only close if the user selects exit.

For example:

`node calculator`

outputs:

```
would you like to perform a calculation?
> yes
> exit
```

If the user selects 'yes' then they shouuld be asked for input like 2+2 and output an answer and the initial prompt again.

## Advanced

Write a program that can accept infinite arguments. Example: `2 + 2 - 4 * 6 / 3` should output `-4`
