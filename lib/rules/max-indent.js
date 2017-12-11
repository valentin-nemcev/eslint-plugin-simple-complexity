/**
 * @fileoverview Maximum indent level in a file
 * @author
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Maximum indent level in a file",
            category: "Fill me in",
            recommended: false
        },
        fixable: null, // or "code" or "whitespace"
        schema: [
            {
                oneOf: [
                    {
                        type: "integer",
                        minimum: 0
                    },
                    {
                        type: "object",
                        properties: {
                            max: {
                                type: "integer",
                                minimum: 0
                            },
                            tabWidth: {
                                type: "integer",
                                minimum: 0
                            }
                        }
                    }
                ]
            }
        ]
    },

    create(context) {
        const option = context.options[0];
        const options = typeof option === "number" ? { max: option } : option;

        const sourceCode = context.getSourceCode();
        const maxIndent = options.max || 40;
        const tabWidth = options.tabWidth || 4;

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        /**
         * Computes the indent of a line that may contain tabs. The width of each
         * tab will be the number of spaces to the next tab stop.
         * @param {string} line The line.
         * @returns {int} The computed line length.
         * @private
         */
        function computeLineIndent(line) {
            let indent = 0;

            line.match(/^[\s\t]*/)[0].replace(/[\s\t]/g, match => {
                indent += match === "\t" ? tabWidth : 1;
            });
            return indent;
        }

        /**
         * Check the program for max indent
         * @param {ASTNode} program Program node to examine
         * @returns {void}
         * @private
         */
        function checkProgramForMaxIndent(program) {
            const lines = sourceCode.lines;

            lines.forEach((line, i) => {

                // i is zero-indexed, line numbers are one-indexed
                const lineNumber = i + 1;
                const lineIndent = computeLineIndent(line);

                if (lineIndent > maxIndent) {
                    context.report({
                        program,
                        loc: { line: lineNumber, column: lineIndent },
                        message: "Line {{lineNumber}} indent ({{lineIndent}}) (exceeds the maximum indent of {{maxIndent}}.",
                        data: {
                            lineNumber: i + 1,
                            lineIndent,
                            maxIndent
                        }
                    });
                }
            });

        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            Program: checkProgramForMaxIndent
        };
    }
};
