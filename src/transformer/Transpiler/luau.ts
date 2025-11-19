import { tokenize } from "../Tokens/lexer";
import { Parser } from "../parser";
import { Compiler } from "../compiler";

export function transpileToLuau(code: string): string {
    const tokens = tokenize(code);
    const parser = new Parser(tokens);

    const statements = [];
    while (parser.peek()) {
        statements.push(parser.parseStatemt());
    }

    const compiler = new Compiler();

    return statements.map(statement => compiler.compileStatement(statement)).join("\n");
}