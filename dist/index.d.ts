declare class Compiler {
    constructor();
    IsValid(): boolean;
    CompileGlslToSpv(source_text: string,
                     shader_kind: ShaderKind,
                     input_file_name: string,
                     entry_point_name: string,
                     options: CompileOptions): SpvCompilationResult;
}

declare class CompileOptions {
    constructor();
}

declare interface ShaderKind {}
declare interface ShaderKindEnum {
    readonly fragment: ShaderKind;
    readonly vertex: ShaderKind;
    readonly compute: ShaderKind;
}

declare class SpvCompilationResult {
    GetErrorMessage(): string;
    GetBinary(): Uint32Array;
}

declare interface Shaderc {
    readonly Compiler: typeof Compiler;
    readonly CompileOptions: typeof CompileOptions;
    readonly SpvCompilationResult: typeof SpvCompilationResult;
    readonly shader_kind: ShaderKindEnum;
}

export const instantiate: () => Promise<Shaderc>;
