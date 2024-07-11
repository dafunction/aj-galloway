---
title: TIL - how to display a directory tree in terminal
draft: false
tags:
  - TIL
  - bash
---
This is a neat package that can display a directory tree in a graphical way within the terminal.  There are multiple uses for this, and a few that are immediately obvious for me are for any developers writing technical documentation.  Additionally, this could be useful with [fabric](https://github.com/danielmiessler/fabric) (which i'm planning on writing about more soon), as I've been playing with it for the past week or so.

If you'd like to install, you can install it using your system's package manager. For example:

- On Ubuntu-based systems: `sudo apt-get install tree`
- On macOS (with Homebrew): `brew install tree`

Here's how to use it:

1. Open your terminal.
2. Type `tree .` in whatever directory you'd like to see a directory tree of
3. Press Enter.

Your output should look something like this:

```sh
├── advanced
│   ├── architecture.md
│   ├── creating components.md
│   ├── index.md
│   ├── making plugins.md
│   └── paths.md
├── authoring content.md
├── build.md
├── configuration.md
├── features
│   ├── Docker Support.md
│   ├── Latex.md
│   ├── Mermaid diagrams.md
│   ├── Obsidian compatibility.md
```

h/t: https://oldmanprogrammer.net/source.php?dir=projects/tree