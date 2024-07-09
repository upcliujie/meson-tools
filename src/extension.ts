import * as vscode from 'vscode';
import * as cpt from 'vscode-cpptools';


export function activate(context: vscode.ExtensionContext) {

	const disposable = vscode.commands.registerCommand('extension.mesonbuild', () => {
		vscode.window.showInformationMessage('Hello World from MesonBuild!');
	});
	context.subscriptions.push(disposable);
}
