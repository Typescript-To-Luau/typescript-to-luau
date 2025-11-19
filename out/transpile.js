import fs from "fs";
import path from "path";
import { Parser } from "./transformer/parser.js";
import { Compiler } from "./transformer/compiler.js";
import { tokenize } from "./transformer/Tokens/lexer.js";
export function transpileProject(src, out) {
    const files = fs.readdirSync(src);
    for (const file of files) {
        const input = fs.readFileSync(path.join(src, file), "utf8");
        const tokens = tokenize(input);
        const ast = new Parser(tokens).parseStatemt();
        const luau = new Compiler().compileStatement(ast);
        fs.writeFileSync(path.join(out, file.replace(/\.ts$/, ".lua")), luau);
    }
}
//# sourceMappingURL=transpile.js.map