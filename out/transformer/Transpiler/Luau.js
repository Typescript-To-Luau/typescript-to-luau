import { tokenize } from "../Tokens/lexer.js";
import { Parser } from "../parser.js";
import { Compiler } from "../compiler.js";
export function transpileToLuau(code) {
    const tokens = tokenize(code);
    const parser = new Parser(tokens);
    const statements = [];
    while (parser.peek()) {
        statements.push(parser.parseStatemt());
    }
    const compiler = new Compiler();
    return statements.map(statement => compiler.compileStatement(statement)).join("\n");
}
//# sourceMappingURL=Luau.js.map