import * as vscode from 'vscode';
import * as shared from '@volar/shared';
import type { CommonLanguageClient } from 'vscode-languageclient';

export async function activate(context: vscode.ExtensionContext, languageClient: CommonLanguageClient) {
	await languageClient.onReady();
	context.subscriptions.push(languageClient.onRequest(shared.GetDocumentPrintWidthRequest.type, handler => {
		const configs = vscode.workspace.getConfiguration('volar');
		return configs.get<number>('formatting.printWidth');
	}));
}
