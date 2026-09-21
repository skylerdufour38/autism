# Create an App on App Store

A GitHub Pages + GitHub Codespaces-ready web app for creating and previewing iOS app archive information.

## Features

* Create an App form
* App Name
* Bundle ID
* Version
* Platform
* Minimum OS
* IPA filename
* File Size
* App Bundle Path
* Archive Type
* Live App Information preview
* Download ZIP button
* Browser-only JavaScript
* No backend required
* GitHub Pages compatible
* GitHub Codespaces compatible

## Project Structure

```text
create-app-store/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Example App Information

```text
App Name: Animal Sounds
Bundle ID: com.smartbabyapps.animalsounds
Version: 2.0
Platform: iOS
Minimum OS: 3.1
IPA filename: Animal Sounds 2.0.ipa
File Size: 798.3 MB
App Bundle Path: Payload/Animal Sounds.app
Archive Type: ZIP-based iOS IPA archive
```

## Run in GitHub Codespaces

Open the repository in GitHub Codespaces and start a local web server.

For example:

```bash
python3 -m http.server 8000
```

Then open port `8000`.

## Deploy with GitHub Pages

1. Push the project to a GitHub repository.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Select the repository's main branch.
5. Select `/ (root)` as the folder.
6. Save the settings.
7. Open the generated GitHub Pages URL.

## Download ZIP

The **Download ZIP** button creates a ZIP archive containing the generated app information as a text file.

This is a metadata/archive example and does not create a real signed iOS IPA.
