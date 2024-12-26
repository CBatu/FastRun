import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('fastrun.runScript', async () => {


        let terminal = vscode.window.activeTerminal;

        if (!terminal) {
            terminal = vscode.window.createTerminal('FastScript Terminal');
        }
        
        terminal.show(); 


        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders) {
            vscode.window.showErrorMessage('No workspace is open');
            return;
        }

        const projectPath = workspaceFolders[0].uri.fsPath;
        const fastrunPath = path.join(projectPath, '.fastrun'); 

        if (!fs.existsSync(fastrunPath)) {
            vscode.window.showErrorMessage('.fastrun file not found');
            return;
        }

        terminal.sendText(`bash ${fastrunPath}`); 

        vscode.window.showInformationMessage('All commands from .fastrun are being executed!');
    });

    context.subscriptions.push(disposable);

    const runButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    runButton.command = 'fastrun.runScript';
    runButton.text = 'Run Script from .fastrun';
    runButton.tooltip = 'Click to run commands from .fastrun file';
    runButton.show();

    context.subscriptions.push(runButton);
}

export function deactivate() {}
