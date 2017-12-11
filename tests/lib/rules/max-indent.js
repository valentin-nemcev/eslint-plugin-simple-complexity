/**
 * @fileoverview Maximum indent level in a file
 * @author Valentin Nemcev <mail@valentin-nemcev.com>
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/max-indent");
const RuleTester = require("eslint").RuleTester;
const fs = require("fs");
const path = require("path");


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("max-indent", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: fs.readFileSync(path.join(__dirname, "max-indent-example.js")).toString(),
            options: [12],
            errors: [{
                message: "Line 5 indent (16) exceeds the maximum indent of 12.",
                loc: { line: 5, column: 16 }
            }]
        }
    ]
});
