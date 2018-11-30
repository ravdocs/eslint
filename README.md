# Eslint Configuration

[https://www.npmjs.com/package/@ravdocs/eslint](https://www.npmjs.com/package/@ravdocs/eslint)

## Usage

To use this npm module:

1. [Install](#install)
2. [Configure Grunt](#configure-grunt)
3. *(Optional)* [Configure Visual Studio Code](#configure-visual-studio-code)

## Install

```bash
npm install --save @ravdocs/eslint;
```

## Configure Grunt

1. Install [grunt-eslint](https://www.npmjs.com/package/grunt-eslint).
	```bash
	npm install --save-dev grunt-eslint;
	```

2. Create a new file in the grunt tasks folder *(e.g. `grunts/eslint.js`)* with this content:
	```javascript
	'use strict';


	module.exports = function(grunt) {

		grunt.config('eslint', {
			options: {
				rulePaths: ['node_modules/@ravdocs/eslint/rules']
			},

			backend: {
				options: {
					configFile: 'node_modules/@ravdocs/eslint/configs/backend.js'
				},
				src: [
					'*.js',
					'grunts/**/*.js',
					// <file-patterns-here>
				]
			},

			frontend: {
				options: {
					configFile: 'node_modules/@ravdocs/eslint/configs/frontend.js'
				},
				src: [
					// <file-patterns-here>
				]
			}
		});

		grunt.loadNpmTasks('grunt-eslint');
	};
	```

3. Fill out `<file-patterns-here>` in the `backend.src` and `frontend.src` arrays. *(additional info [here](http://gruntjs.com/configuring-tasks#files))*

5. Update `gruntfile.js` to include this configuration:
	```javascript
	'use strict';

	var Pkg = require('./package.json');


	module.exports = function(grunt) {

		grunt.initConfig({
			pkg: Pkg
		});

		grunt.loadTasks('grunts');

		grunt.registerTask('check', [
			'eslint'
		]);

		grunt.registerTask('lint', [
			'eslint'
		]);

		grunt.registerTask('build', [
			'check'
			//additional tasks here
		]);

		grunt.registerTask('default', [
			'check'
		]);
	};
	```

6. Test with `grunt` and `grunt lint`.

## Configure Visual Studio Code

*NOTE: This is optional.*

1. Open `Settings`.
	* OS X: <kbd>⌘</kbd><kbd>,</kbd>
	* Linux: <kbd>CTRL</kbd><kbd>,</kbd>

2. Add to `USER SETTINGS`:
	```json
	"eslint.autoFixOnSave": true,
	"eslint.options": {
        "rulePaths": [
            "node_modules/@ravdocs/eslint/rules"
        ]
    },
	```

3. Create `.eslintrc.js` in the top-level directory of the repo (next to `package.json`) with this content:
	```javascript
		'use strict';


		module.exports = require('@ravdocs/eslint').configs.backend;
	```

4. Create another `.eslintrc.js` in the directory containing frontend files (e.g., `public/.eslintrc.js`) with this content:
	```javascript
		'use strict';


		module.exports = require('@ravdocs/eslint').configs.frontend;
	```
