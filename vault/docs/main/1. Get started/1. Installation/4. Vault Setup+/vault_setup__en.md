# Vault Setup

## Step 4: Configure your Vault

### 1) Create a Folder

Create a new folder named `vault` in your root repository folder.

Your directory structure should now look like this:
```js
{REPOSITORY}/
├── vault/
│   └── (Obsidian Vault lives here)
└── website/
    └── (Docusaurus Installation is here)
```

### 2) Open the vault 

It's time to launch your Obsidian application. Open the `vault` folder in your repository. 
You should now see an empty Obsidian vault names 'vault'.

### 3) Create an Attachments Folders

Create a folder for your attachments.

![|500](assets/obsidian_create_attachment_folder.png)

>[!caution] Attachments Folder
>All images and documents have to be placed in this specific folder. If you choose a different name for the folder, remember to update this is in your Obsidiosaurus plugin settings as well.

###  4) Adjust Files & Links Settings

>[!caution]
>Several settings for your vault and plugins must be adjusted to use Obsidiosaurus effectively.
>Follow the instructions precisely to avoid any misbehaviours. 

Go to your Obsidian Settings ⚙️ on the bottom left, and adjust your Files & Links settings as shown:

![](assets/obisidan_settings_files_and_links.png)

### 5) Plugin Installation

- Enable Community Plugins.

#### Obsidiosaurus (required)

Update your plugin settings as you need.
This are the default settings:

![](assets/obsidiosaurus_plugin_settings.png)
>[!caution] Attachments Folder
>If you have chnaged the name of your attachments folder, you need to update the `Obsidian Asset Folder` in the plugin settings as well.


#### Excalidraw (optional)

Obsidiosaurus can convert your Excalidraw sketches to Docusaurus, supporting both light and dark mode versions. To enable this, ensure your settings match the ones shown below:

![](assets/excalidraw_plugin_settings_folders.png)
>[!note]
> The `Excalidraw folder` should be the same as your attachments folder in Obsidan.

![](assets/excalidraw_plugin_settings_filename.png)

>[!danger] Filename Date: 
>Additional periods (`.`) in the filename will disrupt the conversion process. It's best to only use 
>`YYYY-MM-DD`, replace periods with hyphens (`-`), or leave this field empty

![](assets/excalidraw_plugin_settings_export.png)

>[!note] PNG support
>Currently its not possible to export PNG this will be added in a future version.
>Allowing you to also resize your Excalidraw drawings.

#### Diagrams.net (optional)

No settings to change available.

>[!note]  Light and Dark mode
>If you want your website to support both light and dark modes, please be aware that the
>current version only exports in light mode. Using colors like white and black may appear
>incorrect in dark mode.



