import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.helixFeedback', () => {
        vscode.window.showInformationMessage('Try using Helix keybindings!');
    }));

    // Register a listener for text editor commands
    vscode.window.onDidChangeTextEditorSelection(event => {
        // Check for specific keybindings usage and provide feedback
        const editor = event.textEditor;
        const selection = editor.selection;

        // Example check: if a user selects text using a mouse instead of a keybinding
        if (selection.isSingleLine && selection.active.character !== selection.anchor.character) {
            vscode.window.showInformationMessage('Try using the Helix keybinding for selecting text!');
        }
    });
}

export function deactivate() {}
