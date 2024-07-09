import { Uri, CancellationToken } from 'vscode';
import * as cpptools from 'vscode-cpptools';

export class CppConfigurationProvider implements cpptools.CustomConfigurationProvider {
    readonly name = 'Meson Tools';
    readonly extensionId = 'upcliujie.meson-tools';
    async canProvideConfiguration(uri: Uri) {
        console.log('canProvideConfiguration', uri);
        return false;
    }
    async provideConfigurations(uris: Uri[]) {
        return new Promise<cpptools.SourceFileConfigurationItem[]>(() => {
            console.log('provideConfigurations', uris);
        });
    }
    async canProvideBrowseConfiguration() {
        return true;
    }
    async provideBrowseConfiguration() {
        return new Promise<cpptools.WorkspaceBrowseConfiguration>(() => {
            console.log('provideBrowseConfiguration');
        });
    }
    async canProvideBrowseConfigurationsPerFolder() {
        return true;
    }
    async provideFolderBrowseConfiguration(uri: Uri): Promise<cpptools.WorkspaceBrowseConfiguration | null> {
        return null;
    }
    dispose() {}
}