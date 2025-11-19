import { Expressions } from "./Nodes/ast.js";
import { Statement } from "./Nodes/ast.js";
/**
 * Compiles @Expressions & @Statements
 */
export declare class Compiler {
    /**
     *
     * @param node
     * @returns a string
     */
    compileExpression(node: Expressions): string;
    /**
     * @returns indented text
     */
    private indent;
    /**
     *
     * @param node
     * @returns a string
     */
    compileStatement(node: Statement): string;
}
//# sourceMappingURL=compiler.d.ts.map