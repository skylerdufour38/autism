const fields = [
  { key: 'appName', id: 'previewAppName' },
  { key: 'bundleId', id: 'previewBundleId' },
  { key: 'version', id: 'previewVersion' },
  { key: 'platform', id: 'previewPlatform' },
  { key: 'minimumOS', id: 'previewMinimumOS' },
  { key: 'ipaFilename', id: 'previewIpaFilename' },
  { key: 'fileSize', id: 'previewFileSize' },
  { key: 'appBundlePath', id: 'previewAppBundlePath' },
  { key: 'archiveType', id: 'previewArchiveType' },
];

function updatePreview() {
  fields.forEach(({ key, id }) => {
    const input = document.getElementById(key);
    const output = document.getElementById(id);
    const value = input ? input.value.trim() : '';
    output.textContent = value || 'N/A';
  });
}

function buildAppText() {
  const values = fields.reduce((acc, { key }) => {
    const element = document.getElementById(key);
    const label = keyToLabel(key);
    acc[label] = element ? element.value.trim() || 'N/A' : 'N/A';
    return acc;
  }, {});

  return [
    `App Name: ${values.appName}`,
    `Bundle ID: ${values.bundleId}`,
    `Version: ${values.version}`,
    `Platform: ${values.platform}`,
    `Minimum OS: ${values.minimumOS}`,
    `IPA filename: ${values.ipaFilename}`,
    `File Size: ${values.fileSize}`,
    `App Bundle Path: ${values.appBundlePath}`,
    `Archive Type: ${values.archiveType}`,
  ].join('\n');
}

function keyToLabel(key) {
  const labels = {
    appName: 'App Name',
    bundleId: 'Bundle ID',
    version: 'Version',
    platform: 'Platform',
    minimumOS: 'Minimum OS',
    ipaFilename: 'IPA filename',
    fileSize: 'File Size',
    appBundlePath: 'App Bundle Path',
    archiveType: 'Archive Type',
  };

  return labels[key] || key;
}

function downloadZip() {
  const textContent = buildAppText();
  const fileName = `${sanitizeFileName(document.getElementById('appName').value || 'app')}.zip`;

  if (!window.JSZip) {
    alert('ZIP library is unavailable. Please refresh the page and try again.');
    return;
  }

  const zip = new JSZip();
  zip.file('app-info.txt', textContent);

  zip.generateAsync({ type: 'blob' }).then((zipBlob) => {
    const url = URL.createObjectURL(zipBlob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();
    URL.revokeObjectURL(url);
  });
}

function sanitizeFileName(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'app';
}

const appForm = document.getElementById('appForm');
const downloadButton = document.getElementById('downloadZip');

appForm.addEventListener('input', updatePreview);
appForm.addEventListener('change', updatePreview);
downloadButton.addEventListener('click', downloadZip);

updatePreview();
