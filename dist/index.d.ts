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
    SetGenerateDebugInfo(): void;
    SetOptimizationLevel(level: OptimizationLevel): void;
    SetTargetEnvironment(target: TargetEnv, version: number): void;
}

declare interface ShaderKind {
    readonly value: number;
}
declare interface ShaderKindEnum {
    readonly fragment: ShaderKind;
    readonly vertex: ShaderKind;
    readonly compute: ShaderKind;
}

declare interface OptimizationLevel {
    readonly value: number;
}
declare interface OptimizationLevelEnum {
    readonly zero: OptimizationLevel;
    readonly size: OptimizationLevel;
    readonly performance: OptimizationLevel;
}

declare interface TargetEnv {
    readonly value: number;
}
declare interface TargetEnvEnum {
    readonly vulkan: TargetEnv;
    readonly opengl: TargetEnv;
    readonly opengl_compat: TargetEnv;
}

declare interface EnvVersion {
    readonly value: number;
}
declare interface EnvVersionEnum {
    readonly vulkan_1_0: EnvVersion;
    readonly vulkan_1_1: EnvVersion;
    readonly opengl_4_5: EnvVersion;
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
    readonly target_env: TargetEnvEnum;
    readonly env_version: EnvVersionEnum;
}

export const instantiate: () => Promise<Shaderc>;
