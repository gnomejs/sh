/**
 * The `sh` module provides a simple way to execute
 * PowerShell Core scripts using the `sh` shell.
 *
 * The module relies upon the @gnome/exec module and
 * has the same basic usage as the `Command` and `ShellCommand` class.
 *
 * ## Basic Usage
 *
 * ```typescript
 * import { sh } from "@gnome/sh";
 *
 * const cmd = await sh("echo 'Hello, World!'", {
 *         stdout: 'piped',
 *         stderr: 'piped'
 *    });
 * console.log(await cmd.text());
 * console.log(cmd.code);
 *
 * console.log(await sh("echo 'Hello, World!'").text());
 *
 * console.log(await sh("test.sh").text());
 *
 * // runs sh command and writes directly to console
 * await sh("echo 'I am alive'").run();
```
 * @module
 */
export * from "./cli.ts";
