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
    SetOptimizationLevel(level: OptimizationLevel): void;
}

declare interface ShaderKind {}
declare interface ShaderKindEnum {
    readonly fragment: ShaderKind;
    readonly vertex: ShaderKind;
    readonly compute: ShaderKind;
}

declare interface OptimizationLevel {}
declare interface OptimizationLevelEnum {
    readonly zero: OptimizationLevel;
    readonly size: OptimizationLevel;
    readonly performance: OptimizationLevel;
}

declare class SpvCompilationResult {
    GetErrorMessage(): string;
    GetBinary(): Uint32Array;
}

declare interface Shaderc {
    readonly Compiler: { new(): Compiler };
    readonly CompileOptions: { new(): CompileOptions };
    readonly SpvCompilationResult: { new(): SpvCompilationResult };
    readonly shader_kind: ShaderKindEnum;
    readonly optimization_level: OptimizationLevelEnum;
}

export const instantiate: () => Promise<Shaderc>;
