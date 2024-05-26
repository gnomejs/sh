import { ShellCommand, type ShellCommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("sh", {
    name: "sh",
    windows: [
        "${ProgramFiles}\\Git\\usr\\bin\\sh.exe",
        "${ChocolateyInstall}\\msys2\\usr\\bin\\sh.exe",
        "${SystemDrive}\\msys64\\usr\\bin\\sh.exe",
        "${SystemDrive}\\msys\\usr\\bin\\sh.exe",
    ],
});

/**
 * File extension for sh scripts.
 */
export const SH_EXT = ".sh";

/**
 * Represents a Sh command executed using the `sh` commandline.
 */
export class ShCommand extends ShellCommand {
    /**
     * Creates a new instance of the `ShCommand` class.
     * @param script The sh script to execute.
     * @param options The options for the shell command.
     */
    constructor(script: string, options?: ShellCommandOptions) {
        super("sh", script.trimEnd(), options);
    }

    /**
     * Gets the file extension associated with sh scripts.
     */
    get ext(): string {
        return SH_EXT;
    }

    /**
     * Gets the shell arguments for executing the sh script.
     * @param script The sh script to execute.
     * @param isFile Specifies whether the script is a file or a command.
     * @returns The shell arguments for executing the script.
     */
    getShellArgs(script: string, isFile: boolean): string[] {
        const params = this.shellArgs ?? ["-e"];

        if (isFile) {
            params.push(script);
        } else {
            params.push("-c", script);
        }

        return params;
    }
}

/**
 * Executes a sh script using the ShCommand class.
 *
 * @param script - The sh script to execute.
 * @param options - Optional options for the shell command.
 * @returns A new instance of the ShCommand class.
 */
export function sh(script: string, options?: ShellCommandOptions): ShCommand {
    return new ShCommand(script, options);
}
