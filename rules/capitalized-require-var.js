'use strict';


module.exports = {
	meta: {
		docs: {
			description: 'require variable names for modules imported by `require()` calls to begin with a capital letter',
			category: 'Node.js and CommonJS',
			recommended: true
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				required: [
					// 'exceptions'
				],
				properties: {
					exceptions: {
						type: 'array',
						items: {
							type: 'string'
						}
					}
				},
			}
		],
	},
	create: function(context) {
		return {
			'VariableDeclarator CallExpression[callee.name="require"][arguments.length=1]': function(node) {

				var exceptions = getExceptions(context);
				var variableDeclarator = closestByType(node, 'VariableDeclarator');
				var id = variableDeclarator.id;
				var varName = id.name;

				if (contains(exceptions, varName)) return;
				if (isCapitalized(varName)) return;

				context.report({
					message: '\'' + varName + '\' is not capitalized.',
					node: node,
					fix: function(fixer) {
						var fixed = toCapitalCase(varName);
						return fixer.replaceText(id, fixed);
					}
				});
			}
		};
	}
};

function getExceptions(context) {

	var options = context.options;
	var config = options[0];

	if (!config) return [];
	if (!config.exceptions) return [];

	return config.exceptions;
}

function closestByType(node, type) {

	var parent = node.parent;

	// base case
	if (parent === null) return null;
	if (parent.type === type) return parent;

	// recursive case
	return closestByType(parent, type);
}

function contains(arr, str) {
	return (arr.indexOf(str) !== -1);
}

function isCapitalized(str) {
	var firstLetter = str[0];
	return (firstLetter.toUpperCase() === firstLetter);
}

function toCapitalCase(str) {
	var firstLetter = str[0];
	var rest = str.substring(1);
	return firstLetter.toUpperCase() + rest;
}
