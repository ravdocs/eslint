# Eslint Configuration

[https://www.npmjs.com/package/@esscorp/eslint](https://www.npmjs.com/package/@esscorp/eslint)

## Usage

To use this npm module:

1. [Install](#install)
2. [Configure Grunt](#configure-grunt)
3. *(Optional)* [Configure Visual Studio Code](#configure-visual-studio-code)
4. *(Optional)* [Configure Atom](#configure-atom)
5. *(Optional)* [Configure Sublime Text](#configure-sublime-text)

## Install

```bash
npm install --save @esscorp/eslint;
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
				rulePaths: ['node_modules/@esscorp/eslint/rules']
			},

			backend: {
				options: {
					configFile: 'node_modules/@esscorp/eslint/configs/backend.js'
				},
				src: [
					'*.js',
					'grunts/**/*.js',
					// <file-patterns-here>
				]
			},

			frontend: {
				options: {
					configFile: 'node_modules/@esscorp/eslint/configs/frontend.js'
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
            "node_modules/@esscorp/eslint/rules"
        ]
    },
	```

3. Create `.eslintrc.js` in the top-level directory of the repo (next to `package.json`) with this content:
	```javascript
		'use strict';


		module.exports = require('@esscorp/eslint').configs.backend;
	```

4. Create another `.eslintrc.js` in the directory containing frontend files (e.g., `public/.eslintrc.js`) with this content:
	```javascript
		'use strict';


		module.exports = require('@esscorp/eslint').configs.frontend;
	```

## Configure Atom

*NOTE: This is optional.*

1. Open `Settings`.
	* OS X: <kbd>⌘</kbd><kbd>,</kbd>
	* Linux: <kbd>CTRL</kbd><kbd>,</kbd>

2. Go to `Install`.

3. Search for and install `linter`.

4. Search for and install `linter-eslint`.

5. Configure `linter-eslint`.
	1. Click `Settings` button under `linter-eslint`.
	2. Set `ESLint Rules Dir` to
		```text
		node_modules/@esscorp/eslint/rules
		```
	3. Set `.eslintrc Path` to
		```text
		node_modules/@esscorp/eslint/configs/backend.js
		```

6. Create `.eslintrc.js` in the top-level directory of the repo (next to `package.json`) with this content:
	```javascript
		'use strict';


		module.exports = require('@esscorp/eslint').configs.backend;
	```

7. Create another `.eslintrc.js` in the directory containing frontend files (e.g., `public/.eslintrc.js`) with this content:
	```javascript
		'use strict';


		module.exports = require('@esscorp/eslint').configs.frontend;
	```

## Configure Sublime Text

*NOTE: This is optional.*

1. Install [Package Control](https://packagecontrol.io/installation) if it is not installed already.

2. Install `ESLint`.
	1. Open `Package Control`.
		* OS X: <kbd>⌘</kbd><kbd>⇧</kbd><kbd>P</kbd>
		* Linux: <kbd>CTRL</kbd><kbd>SHIFT</kbd><kbd>P</kbd>
	2. Search for and select `Package Control: Install Package`.
	3. Search for and select `ESLint`.

3. Install `SublimeLinter-contrib-eslint`.
	1. Open `Package Control`.
		* OS X: <kbd>⌘</kbd><kbd>⇧</kbd><kbd>P</kbd>
		* Linux: <kbd>CTRL</kbd><kbd>SHIFT</kbd><kbd>P</kbd>
	2. Search for and select `Package Control: Install Package`.
	3. Search for and select `SublimeLinter-contrib-eslint`.

4. Configure `SublimeLinter-contrib-eslint`.
	1. In the menu, navigate to `Preferences` > `Package Settings` > `SublimeLinter` > `Settings - User`
	2. Add or insert this content:
		```json
		{
		    "user": {
		        "linters": {
		            "eslint": {
		                "@disable": false,
		                "args": ["--rulesdir", "node_modules/@esscorp/eslint/rules"],
		                "excludes": [
		                    "**/node_modules/**"
		                ]
		            }
		        }
		    }
		}
		```

5. Create `.eslintrc.js` in the top-level directory of the repo (next to `package.json`) with this content:
	```javascript
		'use strict';


		module.exports = require('@esscorp/eslint').configs.backend;
	```

6. Create another `.eslintrc.js` in the directory containing frontend files (e.g., `public/.eslintrc.js`) with this content:
	```javascript
		'use strict';


		module.exports = require('@esscorp/eslint').configs.frontend;
	```
