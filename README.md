# blockly-d.ts
Typescript definition file generator for [Google's Blockly](https://github.com/google/blockly).

This project generates the Typescript definition file (d.ts file) for [Google's Blockly](https://github.com/google/blockly) required to get type safety via the Typescript compiler. Currenlty, this only generates the type defintions for [Blockly](https://github.com/google/blockly)'s core folder. This is intended to generate the files that can eventually be added to [Definitely Typed](http://definitelytyped.org/) (i.e., `@types`).

## Use Typescript Definition Files
Since you currenlty can't [consume](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html) the definition file via `npm`, the last generated d.ts file is checked in for reference. You should generate your own if you're using a different version of [Blockly](https://github.com/google/blockly).
* If you need to generate a new version of the definition file, [see instructions](https://github.com/trodi/blockly-d.ts#generate-definition-file).
* Generated definition file location: dist/blockly-core.d.ts
  * The commit will tell you which version of Blockly it was generated from.
  * View repo [history](https://github.com/trodi/blockly-d.ts/commits/master/dist/blockly-core.d.ts) to see d.ts files for older versions of [Blockly](https://github.com/google/blockly).
* Let `tsc` know about the new typing file.
  * See [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) if you need more guidance in including Typescript definition files.
* Add matching version of Blockly to your project.
  * This project only provides the definition file; you still need to include the [Blockly](https://github.com/google/blockly) library.
* [Blockly](https://github.com/google/blockly) uses the closure-library and some of the reference types found there (e.g., `goog.math`). For `tsc` to be happy, you'll have to define these referenced closure-library types. I currently don't do this for you.

## Generate Definition File
* Note: Currently requires Node v8.x. Newer versions will fail to run.
* `git clone https://github.com/trodi/blockly-d.ts.git`
* `npm install`
* `npm start`
  * This will generate the definition file for the current version of [Blockly](https://github.com/google/blockly).
* Generated files found in dist/
  * blockly-core.d.ts - The definition file generated against the latest version of [Blockly](https://github.com/google/blockly).
  * blockly - This folder contains a copy of [Blockly](https://github.com/google/blockly)'s dist files used to generate this d.ts file for reference.

## License
[MIT License](LICENSE.md)
