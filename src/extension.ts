import * as vscode from 'vscode';
import * as cpt from 'vscode-cpptools';
import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('meson.debugTarget', () => {
		vscode.debug.startDebugging(undefined, {
			type: 'cppdbg',
			name: 'Debug Meson Project',
			request: 'launch',
			program: '${workspaceFolder}/build/demo',
			args: [],
			stopAtEntry: false,
			cwd: '${workspaceFolder}',
			env: {},
			externalConsole: false,
			MIMode: 'gdb',
			setupCommands: [
				{
					description: 'Enable pretty-printing for gdb',
					text: '-enable-pretty-printing',
					ignoreFailures: true
				},
                {
					description: "Set disassembly flavor to Intel",
                    text: "-gdb-set disassembly-flavor intel",
                    ignoreFailures: true
                }
			]
		});
	});

	context.subscriptions.push(disposable);

	// Add a status bar button
	const statusButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	statusButton.text = '$(debug) Debug';
	statusButton.command = 'meson.debugTarget';
	statusButton.tooltip = 'Debug Selected Target';
	statusButton.show();
}
