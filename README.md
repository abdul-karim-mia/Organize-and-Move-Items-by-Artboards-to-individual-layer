#### Description:
This script is designed to streamline the process of managing artwork in Adobe Illustrator documents with multiple artboards. When working on complex projects, designers often create separate artboards to organize different elements. However, managing items across numerous artboards can be time-consuming. This script automates the task by moving items from each individual artboard to new layers with the corresponding artboard name. Furthermore, it removes any old layers that are left empty after the items have been moved.

#### How the Script Works:

1. The script starts by identifying the active Illustrator document and collecting all its artboards.
2. It then initiates a loop that iterates through each artboard in reverse order, starting from the last artboard and moving towards the first.
3. For each artboard, the script creates a new layer and names it after the artboard.
4. The script sets the current artboard as the active one to select all items on that specific artboard.
5. Selected items are moved to the newly created layer, which now bears the name of the corresponding artboard.
6. The script stores the newly created layers in an array for later use.
7. After processing all artboards, the script enters another loop to remove any old layers that do not contain any artwork.
8. It uses a custom function to check if a layer is present in the array of newly created layers. If not found, it removes the layer from the Illustrator document.
9. The script completes its task, leaving the artwork neatly organized with each artboard's items residing on individual layers.

#### Benefits: 
- Improved Workflow: The script drastically simplifies the organization of artwork across multiple artboards, saving designers valuable time.
- Consistency: The script enforces a standardized naming convention for layers based on the corresponding artboard names, aiding in better project management.
- Automation: The automatic process eliminates the need for manual selection, moving, and layer creation, reducing the risk of errors and inconsistencies.
- Cleaner Files: Removing unused layers helps keep Illustrator documents tidy, making collaboration and handoff more efficient.

#### How to insstall:

1. [Download archive] and unzip. All scripts are in the folder `jsx`
2. Place `<script_name>.jsx` in the Illustrator Scripts folder:
	- OS X: `/Applications/Adobe Illustrator [vers.]/Presets.localized/en_GB/Scripts`
	- Windows (32 bit): `C:\Program Files (x86)\Adobe\Adobe Illustrator [vers.]\Presets\en_GB\Scripts\`
	- Windows (64 bit): `C:\Program Files\Adobe\Adobe Illustrator [vers.] (64 Bit)\Presets\en_GB\Scripts\`
	- RU lang: `C:\Program Files\Adobe\Adobe Illustrator [версия]\Стили\ru_RU\Сценарии\`
3. Restart Illustrator
#### Usage Instructions:

1. Open the Illustrator document with multiple artboards that you want to organize.
2. Go to "File" > "Scripts" > "This new Script". The script will run automatically, moving items to new layers and removing old, empty layers.
As a precaution, ensure you have a backup of your Illustrator document before running the script, especially for more complex projects.

[Download archive]: https://github.com/abdul-karim-mia/Find-same-color-path-and-make-compound-path-illustrator-script/archive/refs/heads/main.zip

## 💸 Donate
You can support my work on new scripts via [PayPal] .  

[PayPal]: https://paypal.me/akmia51

<a href="https://paypal.me/akmia51">
  <img width="147" height="40" src="https://i.ibb.co/Z8Wd8Sn/paypal-badge.png" >
</a>

[![IMAGE ALT TEXT](https://img.youtube.com/vi/QgEM2E0ZD-4/mqdefault.jpg)](https://youtu.be/QgEM2E0ZD-4 "Find same color path and make compound path illustrator script")
