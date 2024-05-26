# @gnome/env

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

## Overview

The `sh` module provides a simple way to execute
sh scripts or files.

The module relies upon the @gnome/exec module and
has the same basic usage as the `Command` and `ShellCommand` class.

## Basic Usage

```typescript
import { sh } from "@gnome/sh";

const cmd = await sh("echo 'Hello, World!'", { 
        stdout: 'piped', 
        stderr: 'piped'
    });
console.log(await cmd.text());
console.log(cmd.code);

console.log(await sh("echo 'Hello, World!'").text());

console.log(await sh("test.sh").text()); 

// runs sh command and writes directly to console
await sh("echo 'I am alive'").run();
```

[MIT License](./LICENSE.md)
