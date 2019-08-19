'use strict';

// eslint rules
// 0 = off
// 1 = generate warning
// 2 = fail immediately

// http://eslint.org/docs/rules/


module.exports = {
	"extends": [
		"eslint:recommended",
		"plugin:import/errors"
	],
	"plugins": [
		// "import"
	],
	"env": {
		"node": true,
		"browser": false,
		"mocha": true,
		"es6": true
	},
	"parserOptions": {
		"ecmaVersion": 2017,
		"sourceType": "script"
	},
	"globals": {},
	"rules": {

		/*****************************
		* Possible Errors
		*****************************/

		// This is node.js so allow console.* commands.
		"no-console": 0,

		// Allow unnecessary parentheses. We have not had a problem with this yet.
		"no-extra-parens": 0,

		// Allow direct use of `Object.prototype` builtin methods. We have not had a problem with this yet.
		"no-prototype-builtins": 0,

		// Do not use template syntax inside a regular string. `${var}`, not '${var}'
		"no-template-curly-in-string": 2,

		/*****************************
		* Best Practices
		*****************************/

		// Do not forget to `return` values in array methods like `map` and `reduce`.
		"array-callback-return": 2,

		// Declare vars outside of `if` statements.
		"block-scoped-var": 2,

		// Allow unlimited cyclomatic complexity (any number of execution paths due to conditionals).
		// The length of each exection path after they split has a much higher impact to complexity than the number of them.
		// Having 3 paths which call 4 functions each is much more complex than 12 paths which call 1 function each.
		// Likewise, nested conditions add much more complexity than consecutive ones.
		// A function with 2 conditions which have 2 conditions each is much more complicated than a function with 6 conditions.
		// Also, if adding conditions increases explicitness by decreasing abstraction, it will decrease complexity. Explicit code > DRY code.
		"complexity": 0,

		// Allow a function to return a value in some cases and no value in other cases (return early).
		"consistent-return": 0,

		// Allow one-line conditions. Do this whenever possible. `if (err) return next(err);`
		"curly": 0,

		// Allow switch statements not to have a default case. todo: revisit
		"default-case": 0,

		// In multi-line chains, begin each line with a dot instead of ending each line with a dot.
		"dot-location": [2, "property"],

		// Use `object.key`, not `object['key']`, whenever possible.
		"dot-notation": [2, {
			// Allow `object['a_key']`.
			"allowPattern": "^[a-z]+(_[a-z]+)+$"
		}],

		// Prefer `===` over `==`. To use `==` add an `eslint-disable-line eqeqeq` comment next to it.
		"eqeqeq": [2, "always"],

		// Allow `for (x in y)` loops to skip checks for `y.hasOwnProperty(x)`. We have not had a problem with this yet.
		"guard-for-in": 0,

		// Node.js does not have `alert()`, `prompt()`, or `confirm()`.
		"no-alert": 2,

		// Do not use `arguments.caller` or `arguments.callee`. If you do not know what these are, that is a good thing; JavaScript is trying to deprecate them.
		"no-caller": 2,

		// Allow regex which does not escape division operators. We have not had a problem with this yet.
		"no-div-regex": 0,

		// Allow `else` blocks which logically are unnecessary. Sometimes this helps readability. todo: revisit?
		"no-else-return": 0,

		// Do not write empty functions. If one is needed, write a comment which explains why.
		"no-empty-function": 2,

		// Use `if (!x)`, not `if (x == null)`, but allow `if (x === null)`.
		"no-eq-null": 2,

		// Never use `eval()`. It is a security risk, and using it is never the best solution to the problem.
		"no-eval": 2,

		// Do not modify builtin objects, like `String.prototype.toNumber = function...`.
		"no-extend-native": 2,

		// Do not use `bind()` when it is unnecessary.
		"no-extra-bind": 2,

		// Label loops only when necessary.
		"no-extra-label": 2,

		// Use `0.5`, not `.5`.
		"no-floating-decimal": 2,

		// Allow shorthand symbols to perform type conversions, like `str = '' + num`, `num = +str`, and `isX = !!x`.
		"no-implicit-coercion": 0,

		// This is inapplicable to Node.js.
		"no-implicit-globals": 0,

		// Do not use allow builtin methods (`setTimeout()`, `setInterval()`, and `execScript()`) to use `eval()` syntax.
		"no-implied-eval": 0,

		// This rule reports false positives, so allow `this` inside objects which do not appear to have a `this`.
		"no-invalid-this": 0,

		// Do not use the `__iterator__` property. It has been deprecated.
		"no-iterator": 2,

		// Do not use labels for loops and `switch` statements. Our code patterns have no need for them yet.
		"no-labels": 2,

		// Do not use wrap code with `{}` unnecessarily.
		"no-lone-blocks": 2,

		// Do not declare functions inside `for` and `while` loops. They often behave unexpectedly outside of the loop.
		"no-loop-func": 2,

		// Allow using numbers which have a special meaning literally instead of through constants (e.g., `if (!x) x = 0` instead of `if (!x) x = DEFAULT_X`). Many times, this removes unnecessary abstraction.
		"no-magic-numbers": 0,

		// Do not use extra spaces unless they align multiple end-of-line comments.
		"no-multi-spaces": [2, {
			"ignoreEOLComments": true
		}],

		// Do not create multiline strings by using a `\` at the end of the line to escape it.
		"no-multi-str": 2,

		// Always store the result of a `new` statement inside a variable. `var x = new X();`, not `new X();`
		"no-new": 2,

		// Use `function...`, not `new Function...` because the latter uses `eval()`.
		"no-new-func": 2,

		// Use `var x = 'y'`, not `var x = String('y')`.
		"no-new-wrappers": 2,

		// Do not use octal escape sequences in strings. They have been deprecated.
		"no-octal-escape": 2,

		// Allow modification of a function's params. Keep in mind that it is usually better to normalize values before calling the function.
		"no-param-reassign": 0,

		// Do not use the `__proto__` property. It has been deprecated.
		"no-proto": 2,

		// // todo: revisit. Useful for deprecating and refactoring.
		// "no-restricted-properties": [2, {
		// 	"object": "disallowedObjectName",
		// 	"property": "disallowedPropertyName"
		// }],

		// Never set vars inside `return` statements, like `return c++;`
		"no-return-assign": 2,

		// Do not use `await` unnecessarily.
		"no-return-await": 2,

		// Do not use `javascript:` URLs because they use `eval()`.
		"no-script-url": 2,

		// Do not use the same variable on both sides of a comparison. (It is probably a typo).
		"no-self-compare": 2,

		// Do not use comma sequences. (It is probably a typo). Use multiple statements instead.
		"no-sequences": 2,

		// Always throw errors, not strings, numbers, etc.
		"no-throw-literal": 2,

		// Do not write an infinite loop by forgetting to modify the loop condition's variables while inside the loop.
		"no-unmodified-loop-condition": 2,

		// Do not write an expression which does not affect the state of the program (e.g., `i += 1;`, not `i + 1;`).
		"no-unused-expressions": 2,

		// Do not use `.call` or `.apply` unnecessarily.
		"no-useless-call": 2,

		// When concatenating strings, use as few string literals as possible. `'something'`, not `'some' + 'thing'`
		"no-useless-concat": 2,

		// Do not add an extra `return;` statement to the end of a function unnecessarily.
		"no-useless-return": 2,

		// Do not use the `void` operator. It serves no purpose now that `undefined` is immutable.
		"no-void": 2,

		// Use these terms for lines which need more work and eslint will remind you to revisit them.
		"no-warning-comments": [1, {
			"terms": ["FIX", "REVISIT", "tmp", "dev"],
			"location": "start"
		}],

		// Do not use `with` statements. They always cause more problems than they solve.
		"no-with": 2,

		// Always `reject` errors, not strings, numbers, etc.
		"prefer-promise-reject-errors": 2,

		// Only add `radix` to `parseInt` if needed (e.g., `parseInt('8')`, not `parseInt('8', 10)`).
		// "radix": [2, "as-needed"],

		// Always have an `await` expression inside an `async` function.
		"require-await": 2,

		// Allow variable declarations on any line inside a function. Keep in mind that the interpreter hoists them to the top.
		"vars-on-top": 0,

		// Always wrap immediately invoke function expressions in parentheses.
		"wrap-iife": [2, "outside"],

		// Allow both `if (x === 'val')` and `if ('val' === x)`. todo: revisit?
		"yoda": 0,

		/*****************************
		* Strict Mode
		*****************************/

		// Always `'use strict';` at top of files.
		"strict": [2, "safe"],

		/*****************************
		* Variables
		*****************************/

		// Allow variable declarations which do not assign a value (e.g., `var x;`).
		"init-declarations": 0,

		// Allow variables to be overwritten in `catch` clauses. We do not support IE 8.
		"no-catch-shadow": 0,

		// Do not give a loop label the same name as a variable.
		"no-label-var": 2,

		// // Never use these global variables.
		// "no-restricted-globals": [],

		// Allow variables to be overwritten in callbacks, like `event`. Just be careful when doing this.
		"no-shadow": 0,

		// Do not overwrite JS core vars, like `var undefined = 'not undefined';`
		"no-shadow-restricted-names": 2,

		// Point out future ReferenceErrors.
		"no-undef": [2, {
			"typeof": true // `typeof` can swallow ReferenceErrors silently. `if (typeof window === 'undefined')`
		}],

		// Use `var x;`, not `var x = undefined;`.
		"no-undef-init": 2,

		// Allow `undefined`. todo: revisit?
		"no-undefined": 0,

		// Declare vars before using them. `var a = 'hi'; alert(a);`, not `alert(a); var a = 'hi';`
		"no-use-before-define": [2, {
			"functions": false
		}],

		/*****************************
		* Node.js and CommonJS
		*****************************/

		// Always `return` from function when calling `next()`.
		"callback-return": [2, ["callback", "cb", "next"]],

		// All `require()` statements must always be in the top-level scope. Put them at the top of the file.
		"global-require": 2,

		// Never ignore an err in node.
		"handle-callback-err": [2, "^(err|error|err[A-Z].+|.+Error)$"],

		// Use `Buffer.from()`, `Buffer.alloc()`, or `Buffer.allocUnsafe()`, not `new Buffer()`
		"no-buffer-constructor": 2,

		// Do not mix `require()` statements and variable declarations. todo: revisit allowCall
		"no-mixed-requires": [2, {"allowCall": true}],

		// Do not use `new` and `require` on the same line.
		"no-new-require": 2,

		// Allow both string concatenation and `Path.join()` when using `__dirname` and `__filename` in path concatenation.
		"no-path-concat": 0,

		// Allow `process.env`. todo: revisit
		"no-process-env": 0,

		// Warn when using `process.exit()`. Only do this in tests.
		"no-process-exit": 1,

		// // Do not use these modules. todo: revisit?
		// "no-restricted-modules": [2, {
		// 	"paths": [{
		// 		"name": "moment-timezone",
		// 		"message": "Please use @esscorp/occasion instead."
		// 	}]
		// }],

		// Allow sync methods (e.g., `FS.readFileSync`).
		"no-sync": 0,

		/*****************************
		* Stylistic Issues
		*****************************/

		// If one array element is on a separate line, put the others on separate lines too.
		"array-bracket-newline": [2, "consistent"],

		// `[1]`, not `[ 1 ]`
		"array-bracket-spacing": [2, "never"],

		// Allow array elements to be either all on one line or each on one line. Decide which one is better on a case by case basis.
		"array-element-newline": 0,

		// Use `function x() {return y;}`, not `function x() { return y; }`.
		"block-spacing": [2, "never"],

		// Require 1 true brace style for multi-line if statements. E.g.: http://eslint.org/docs/rules/brace-style#tbs
		"brace-style": [2, "1tbs"],

		// Allow snake_case. SQL: snake_case, JS: camelCase. Use snake_case for JS vars named after SQL vars.
		"camelcase": 0,

		// Allow the first word of comments to be either capitalized or not capitalized.
		"capitalized-comments": 0,

		// Prohibit comma after the last item in a list.
		"comma-dangle": [2, {
			"arrays": "never", // `[1, 2]`, not `[1, 2,]`
			"objects": "never", // `{a: 1, b: 2}`, not `{a: 1, b:2,}`
			"imports": "never", // `import {a, b}`, not `import {a, b,}`
			"exports": "never", // `export {a, b}`, not `export {a, b,}`
			"functions": "ignore" // `function(a, b) {`, not `function(a, b,) {`
		}],

		// `var a, b, c`, not `var a,b,c` or `var a ,b ,c`
		"comma-spacing": [2, {
			"before": false,
			"after": true
		}],

		// Commas at end of line, not beginning of line.
		"comma-style": 2,

		// `obj[key]`, not `obj[ key ]`
		"computed-property-spacing": [2, "never"],

		// Allow any alias for `this` (e.g., `el`, `input`).
		"consistent-this": 0,

		// End all files with a newline.
		"eol-last": 2,

		// `next()`, not `next ()`
		"func-call-spacing": 2,

		// When naming a function twice on the same line, use the same name both times. However, it would be better to name it only once.
		"func-name-matching": [2, "always", {
			"includeCommonJSModuleExports": false
		}],

		// Do not name a function more times than necessary (e.g., `x.y = function() {}`, not `x.y = function y() {}`).
		// "func-names": [2, "never"],

		// Allow both `var x = function() {` and `function x() {`. todo: revisit?
		"func-style": 0,

		// Either place all params on the same line as the function declaration or place each one on its own line.
		"function-paren-newline": [2, "consistent"],

		// // Do not give a variable any of these names. todo: revisit?
		// "id-blacklist": [2, "e", "callback"],

		// Allow variables of any length.
		"id-length": 0,

		// Allow any variable names. (This rule is too generalized to be useful).
		"id-match": 0,

		// Allow linebreaks anywhere in arrow functions.
		"implicit-arrow-linebreak": 0,

		// Use tabs, not spaces. Indent according to position in scope/expression.
		"indent": [2, "tab", {
			// In `switch { case: }` statements, indent `case` lines one more tab than the `switch` line.
			"SwitchCase": 1,
			"VariableDeclarator": {
				"var": 1,
				"let": 1,
				"const": 1
			},
			"outerIIFEBody": 1,
			"MemberExpression": 1,
			"FunctionDeclaration": {
				"body": 1,
				"parameters": 2
			},
			"FunctionExpression": {
				"body": 1,
				"parameters": 2
			},
			"CallExpression": {
				"arguments": 1
			},
			"ArrayExpression": 1,
			"ObjectExpression": 1,
			"ImportDeclaration": 1,
			"flatTernaryExpressions": false,
			"ignoredNodes": [],
			"ignoreComments": false
		}],

		// Use double quotes in JSX. (We do not use JSX currently).
		"jsx-quotes": [2, "prefer-double"],

		// `{id: 123}`, not `{id :123}`
		"key-spacing": [2, {
			"beforeColon": false, // `{id: 123}`, not `{id : 123}`
			"afterColon": true, // `{id: 123}`, not `{id:123}`
			"mode": "strict"
		}],

		// JS keywords and core functions must have whitespace before and after them. Keyword list: http://eslint.org/docs/rules/keyword-spacing#rule-details
		"keyword-spacing": [2, {
			"before": true, // `} else {`, not `}else {`
			"after": true, // `if ()`, not `if()`
			"overrides": {
				"function": {
					"after": false // `function()`, not `function ()`
				}
			}
		}],

		// Allow comments both above and beside lines.
		"line-comment-position": 0,

		// Divide class members (methods/properties) with an empty line, unless the member takes up only one line.
		"lines-between-class-members": [2, "always", {
			"exceptAfterSingleLine": true
		}],

		// Allow blocks to be nested any number of times. Keep in mind that more flat blocks > less nested blocks.
		"max-depth": 0,

		// Allow long lines. Usually, explicitness > abstraction. But keep in mind that sometimes terseness === explicitness.
		"max-len": 0,

		// Allow any number of lines in a file. Keep in mind that, when a file becomes large, it is probably encompassing too much logic.
		"max-lines": 0,

		// Allow any number of nested callbacks. Usually, more callbacks === less complexity.
		// When nesting callbacks, do not add code in between them (except special circumstances).
		// Instead, it is almost always better to encapsulate that code inside one of the callbacks or inside a new callback.
		"max-nested-callbacks": 0,

		// Allow any number of params in a function. Usually, explicitness > abstraction. But keep in mind that sometimes terseness === explicitness.
		"max-params": 0,

		// Allow any number of statements in a function. Usually, explicitness > abstraction. But keep in mind that sometimes terseness === explicitness.
		"max-statements": 0,

		// Allow multiple statements in one line. todo: revisit
		"max-statements-per-line": 0,

		// Allow any kind of comment styling (`//` and `/**/`).
		"multiline-comment-style": 0,

		// All ternary expressions to span either 1 line or 3 lines. Is it confusing on one line? Use three : Otherwise, use one.
		"multiline-ternary": 0,

		// Capitalize constructor functions.
		"new-cap": [2, {
			"newIsCap": true, // `new Worker()`, not `new worker()`
			"capIsNew": false, // Other functions can be capitalized too. `Assert()`
			// "newIsCapExceptions": [],
			// "newIsCapExceptionPattern": "",
			// "capIsNewExceptions": [],
			// "capIsNewExceptionPattern": "",
			"properties": true
		}],

		// `new X()`, not `new X`
		"new-parens": 2,

		// Allow both single-line and multi-line chains.
		"newline-per-chained-call": 0,

		// `[]`, not `Array()` or `new Array()`
		"no-array-constructor": 2,

		// Do not use bitwise. (It is probably a typo). To use one, add an `eslint-disable-line no-bitwise` comment next to it.
		"no-bitwise": 2,

		// Allow `continue` statements. Keep in mind that we prefer functional loops over `for` and `while` loops.
		"no-continue": 0,

		// Allow comments beside lines.
		"no-inline-comments": 0,

		// `} else if {`, not `} else { if {`
		"no-lonely-if": 2,

		// Group operators according to how they are evaluated logically (e.g., `(a && b) || c || d` or `a && (b || c || d)`, not `a && b || c || d`).
		"no-mixed-operators": [2, {
			// "groups": [[]],
			"allowSamePrecedence": true
		}],

		// Allow `var x = window.x = {`. todo: revisit?
		"no-multi-assign": 0,

		// Do not use more than 2 empty lines between code.
		"no-multiple-empty-lines": [2, {
			"max": 2, // max 1 empty line between code lines
			"maxEOF": 1, // exactly 1 empty line at end of file
			"maxBOF": 0 // exactly 0 empty lines at beginning of file
		}],

		// Allow both `(x)? y : z` and `(!x)? z : y`. todo: revisit?
		"no-negated-condition": 0,

		// Do not use nested ternary expressions. Use sequential ones or if statements instead.
		"no-nested-ternary": 2,

		// `{}`, not `Object()` or `new Object()`
		"no-new-object": 2,

		// Allow `i++` and `i--`.
		"no-plusplus": 0,

		// // Quick rules. todo: revisit?
		// "no-restricted-syntax": [
		// 	2,
		// 	{
		// 		"selector": "CallExpression[callee.object.name='Async'][callee.property.name='map']",
		// 		"message": "Use `Async.mapSeries()` instead."
		// 	}
		// ],

		// Allow tabs.
		"no-tabs": 0,

		// Allow ternary expressions.
		"no-ternary": 0,

		// `)};`, not `)}; 	`
		"no-trailing-spaces": [2, {
			"skipBlankLines": false,
			"ignoreComments": false
		}],

		// Allow functions to begin with '_'. Do this for all private functions.
		"no-underscore-dangle": 0,

		// Do not use a ternary expression as a conditional expression (e.g., `(x === y)? true : false`).
		"no-unneeded-ternary": 2,

		// `exports.search`, not `exports .search`
		"no-whitespace-before-property": 2,

		// Single-line statements should be on one line (e.g., `if (x) return y;`).
		"nonblock-statement-body-position": [2, "beside"],

		// If one object property is on a separate line, put the others on separate lines too.
		"object-curly-newline": [2, {
			"multiline": true,
			// "minProperties": 3,
			"consistent": true,
			// "ObjectExpression": "always",
			// "ObjectPattern": "always",
			// "ImportDeclaration": "always",
			// "ExportDeclaration": "always"
		}],

		// `{'a': 'b'}`, not `{ 'a': 'b' }`
		"object-curly-spacing": [2, "never"],

		// If one object property is on a separate line, put the others on separate lines too.
		"object-property-newline": [2, {
			"allowAllPropertiesOnSameLine": true
		}],

		// Declare no more than 1 variable per line.
		// "one-var": [2, {
		// 	"var": "never",
		// 	"let": "never",
		// 	"const": "never",
		// }],

		// Declare no more than 1 variable per line.
		// "one-var-declaration-per-line": 2,

		// Allow both `x = x + ''` and `x += ''`.
		"operator-assignment": 0,

		// `<li> +`, not `+ <li>`
		// "operator-linebreak": [2, "after", {
		// 	"overrides": {
		// 		"?": "ignore",
		// 		":": "ignore"
		// 	}
		// }],

		// Allow but not require an empty line at the start of blocks.
		"padded-blocks": 0,

		// Place empty lines in these situations.
		"padding-line-between-statements": [
			2,
			{
				"blankLine": "always",
				"prev": "directive",
				"next": ["var", "let", "const", "function", "cjs-export"]
			},
			{
				"blankLine": "always",
				"prev": ["var", "let", "const", "function"],
				"next": "cjs-export"
			},
			{
				"blankLine": "always",
				"prev": ["var", "let", "const", "function", "cjs-export"],
				"next": "function"
			}
		],

		// Use quotes around property names only when needed, but if one property needs quotes, all of the neighboring properties should have them too.
		"quote-props": [2, "consistent-as-needed", {
			"keywords": false,
			"unnecessary": true,
			"numbers": true
		}],

		// JS: single quotes, SQL: double quotes
		"quotes": [0, "single", "avoid-escape"],

		// Do not require JSDoc comments. This feature is open for discussion.
		"require-jsdoc": 0,

		// Use semicolons; Always;
		"semi": [2, "always", {
			"omitLastInOneLineBlock": false
		}],

		// Never put whitespace before semicolons, and always put either a newline or a space after semicolons.
		"semi-spacing": [2, {
			"before": false, // `next();`, not `next() ;`
			"after": true // `case 0: x = 'x'; break;`, not `case 0: x = 'x';break;`
		}],

		// Use semicolons at the ends of lines, not at the beginning of them.
		"semi-style": [2, "last"],

		// Allow any order in object keys. In general, sort them by their purpose, not by their name.
		"sort-keys": 0,

		// Allow any order in vars. In general, sort them by their purpose, not by their name.
		"sort-vars": 0,

		// `function() {` not `function(){`
		"space-before-blocks": [2, {
			"functions": "always",
			"keywords": "always",
			"classes": "always"
		}],

		// good `function () {`
		// bad `function() {`
		// good `function x() {`
		// bad `function x () {`
		// "space-before-function-paren": [2, {
		// 	"anonymous": "always",
		// 	"named": "never",
		// 	"asyncArrow": "never"
		// }],

		// `if (err)`, not `if ( err )`
		"space-in-parens": [2, "never"],

		// Space before ternary operator is optional. `(_.isArray(pkeys))? pkeys : [pkeys];`. todo: revisit
		"space-infix-ops": 0,
		// "space-infix-ops": [2, {
		// 	"int32Hint": false
		// }],

		// `c++`, not `c ++`
		"space-unary-ops": [2, {
			"words": true,
			"nonwords": false
		}],

		// Allow comments either to have or not to have a space at the beginning. todo: revisit
		"spaced-comment": 0,
		// "spaced-comment": [2, "always", {
		// 	"exceptions": ["*"]
		// }],

		// `case 1: return;`, not `case 1 :return;`
		"switch-colon-spacing": [2, {
			"after": true,
			"before": false
		}],

		// Do not insert whitespace between the function and the template string when calling tagged template literals.
		// But be wary of using tagged template literals because they are difficult to read.
		"template-tag-spacing": [2, "never"],

		// Never begin a file with `U+FEFF`.
		"unicode-bom": [2, "never"],

		// Allow both `/x/.test(y)` and `(/x/).test(y)`
		"wrap-regex": 0,

		/*****************************
		* ECMAScript 6
		*****************************/

		// Always use braces for arrow functions.
		"arrow-body-style": [2, "always"],

		// Always use parentheses around arrow function params.
		"arrow-parens": [2, "always"],

		// `(x) => {}`, not `(x)=>{}`
		"arrow-spacing": [2, {
			"before": true,
			"after": true
		}],

		// `function *generator() {`, not `function* generator() {`
		"generator-star-spacing": [2, {
			"before": true,
			"after": false
		}],

		// `var x = a => {return (1) ? 2 : 3;};`, not `var x = a => (1) ? 2 : 3;`
		"no-confusing-arrow": 2,

		// Use one import statement per module.
		"no-duplicate-imports": [2, {
			"includeExports": true
		}],

		// // Do not import these modules.
		// "no-restricted-imports": [2, {
		// 	"paths": [{
		// 		"name": "import-foo",
		// 		"importNames": ["Bar"],
		// 		"message": "Please use Bar from /import-bar/baz/ instead."
		// 	}]
		// }],

		// `var x = {id: 1};`, not `var x = {['id']: 1};`
		"no-useless-computed-key": 2,

		// Only add a constructor when necessary.
		"no-useless-constructor": 2,

		// Only rename imported/exported methods if necessary.
		"no-useless-rename": [2, {
			"ignoreDestructuring": false,
			"ignoreImport": false,
			"ignoreExport": false
		}],

		// Allow `var`.
		"no-var": 0,

		// Allow but do not require shorthand for defining object literals.
		"object-shorthand": 0,

		// Prefer regular callbacks.
		"prefer-arrow-callback": 0,

		// Allow but do not an unchanging variable to be a `const`.
		"prefer-const": 0,

		// Prefer regular variable declaration over object destructuring.
		"prefer-destructuring": 0,

		// Use binary, octal, and hexadecimal literals instead of integer conversions.
		"prefer-numeric-literals": 2,

		// Allow but do not require ...rest params.
		"prefer-rest-params": 0,

		// Allow but do not require ...spread operator instead of `.apply`. todo: revisit?
		"prefer-spread": 0,

		// Allow but do not require template literals for string concatenation. todo: revisit?
		"prefer-template": 0,

		// `[1, 2, ...spread]`, not `[1, 2, ... spread]`
		"rest-spread-spacing": [2, "never"],

		// Allow any order in import members. In general, sort them by their purpose, not by their name.
		"sort-imports": 0,

		// Do not require a description in a `Symbol()` because we have not needed symbols yet.
		"symbol-description": 0,

		// `${var}`, not `${ var }`
		"template-curly-spacing": [2, "never"],

		// `yield *generator() {`, not `yield* generator() {`
		"yield-star-spacing": [2, {
			"before": true,
			"after": false
		}],

		/*****************************
		* Deprecated
		*****************************/

		/*****************************
		* Ours
		*****************************/

		// Prefer `Async.eachSeries` over `Async.each`. To use `Async.each` add an `eslint-disable-line async-series` comment next to it.
		"async-series": 1,

		// Verify filenames in `require()` statements have correct capitalization.
		"lowercase-require-param": 2,

		/*****************************
		* External Plugins
		*****************************/

		// Verify all modules are in package.json.
		"import/no-extraneous-dependencies": [2],

		// Verify modules exist on the filesystem and that filepaths in `require` statements are correct.
		"import/no-unresolved": [2, {"commonjs": true}]
	}
};
