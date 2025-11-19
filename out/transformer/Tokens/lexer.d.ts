export type Token = {
    type: "Number";
    value: number;
} | {
    type: "Symbol";
    value: string;
} | {
    type: "Identifier";
    value: string;
} | {
    type: "Keyword";
    value: "let" | "const" | "print" | "function" | "var";
};
export declare function tokenize(input: string): Token[];
//# sourceMappingURL=lexer.d.ts.map