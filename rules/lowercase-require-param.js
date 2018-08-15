'use strict';


// https://gist.github.com/jareware/7179093
module.exports = {
	meta: {
		docs: {
			description: 'require module names in `require()` calls to be lowercase',
			category: 'Node.js and CommonJS',
			recommended: true
		},
		fixable: 'code',
		schema: []
	},
	create: function(context) {
		return {
			'CallExpression[callee.name="require"][arguments.length=1] > Literal:first-child': function(node) {

				var modulePath = node.value;

				if (isLowerCase(modulePath)) return;

				context.report({
					message: '\'' + modulePath + '\' is not lowercase.',
					node: node,
					fix: function(fixer) {
						var fixed = modulePath.toLowerCase();
						fixed = '\'' + fixed + '\'';
						return fixer.replaceText(node, fixed);
					}
				});
			}
		};
	}
};

function isLowerCase(str) {
	return (str.toLowerCase() === str);
}
