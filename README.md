<div align="center" style="display:grid;place-items:center;">

<h1>FastRun</h1>

FastRun is a Visual Studio Code extension designed to simplify your workflow by allowing you to quickly run commands from a `.fastrun` script file directly in the terminal. Execute predefined shell commands with a single keystroke and boost your productivity!

## Features

- **Quick Command Execution**: Run predefined shell commands from a `.fastrun` file with a single keystroke.
- **Streamlined Workflow**: Simplify repetitive tasks by defining them in a script file.
- **Customizable**: Easily configure commands to suit your project needs.

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window.
3. Search for `fastrun`.
4. Click **Install**.

Alternatively, you can install the extension manually by downloading it from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=FastRun.FastRun).

## Usage

1. Create a `.fastrun` script file in the root of your project.
2. Define your commands in the `.fastrun` file. For example:
   ```bash
   gcc -o myapp main.c
   ./myapp
   rm -rf myapp
   ```
3. Press `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac) to execute commands in the `.fastrun` file within the terminal.


## Example

Here is a sample `.fastrun` file for a C++ project:
```bash
g++ -o program main.cpp
./program
rm -f program
```

With FastRun when you press keys you will execute commands.


## Contributing

We welcome contributions! Feel free to submit issues and pull requests on our [GitHub repository](https://github.com/CBatu/FastRun).

## License

FastRun is licensed under the [MIT License](LICENSE).

---

Enhance your coding efficiency with FastRun! 🚀
