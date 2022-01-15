# Review of functions, variables, and arrays

- [Review of functions, variables, and arrays](#review-of-functions-variables-and-arrays)
  - [Variables](#variables)
    - [var declaration](#var-declaration)
    - [var assignation](#var-assignation)
    - [`var` vs `let`](#var-vs-let)
    - [`const`](#const)
    - [`let` and `const`](#let-and-const)
  - [Data types](#data-types)


## Variables

Ways of writing a variable name
```
camelCase
snake_case
kebab-case
```

### var declaration
```
var variableOne
let variableTwo
const variableThree
```

### var assignation
```
var variableOne = 1
let variabletwo = 2
const variableThree = 3
```

### `var` vs `let`
The difference between `var` and `let` is the **scope**, and that `var` can overwrite a previous declared variable with the same name without throwing and error, while `let` won't let us declare a new variable with a previously used variable name, and if we still do, it will throw and error letting us know that the namespace has been declared.

### `const`
`const` is used to declared constants, or values that will not change or we don't want them to change*.

(* Note: values declared with `const` can be modified)

### `let` and `const`
Are only available within the block scope they were declared.

## Data types

- Number `1`, `10.5`, `1000`, ...
- Strings `Hello`, `p`, `This is a sentence`, ...
- Booleans `true`, `false`, ...
- 
