import { Token } from "./Tokens/lexer.js";
import { Statement, Expressions } from "./Nodes/ast.js";
export declare class Parser {
    /**
     * @Position is where the Parser is currently at and what it is parsing
     * @Tokens are the tokens
     */
    private POSITION;
    private TOKENS;
    /**
     * Constructor for the Parser Class
     * @param tokens
     */
    constructor(tokens: Token[]);
    /**
     *
     * @returns the current position
     */
    peek(): Token | undefined;
    consume(): Token | undefined;
    /**
     * Parses:
     * @Variables
     * @Numbers
     * @Parentheses
     */
    parsePrimary(): Expressions;
    /**
     * Parses:
     * @Multiply
     * @Divide
     */
    parseMultiplicative(): Expressions;
    /**
     * Parses:
     * @Plus
     * @Minus
     */
    parseExpression(): Expressions;
    /**
     * Parses:
     * @functions
     * @statements
     */
    parseStatemt(): Statement;
}
//# sourceMappingURL=parser.d.ts.map