/**
* @@@BUILDINFO@@@ Move Items by Artboards.jsx 1.0 Thu Jul 27 2023 05:33:04 GMT+0530
*/

// Illustrator Script: Move Items to New Layers and Remove Old Layers
// This script moves all items on each individual artboard to separate new layers with the name of the artboard and removes the old layers.

// Run the script in Adobe Illustrator after opening the document.


var removeOldLayers = true;

// Function to move items to a new layer
function moveItemsToLayer(items, targetLayer) {
    for (var i = 0; i < items.length; i++) {
        items[i].move(targetLayer, ElementPlacement.PLACEATEND);
    }
}

// Custom function to check if a layer is present in the array
function indexOfLayer(arr, layer) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === layer) {
            return i;
        }
    }
    return -1;
}

// Main function to process each artboard
function main() {
    var doc = app.activeDocument;
    var artboards = doc.artboards;
    var newLayers = []; // Array to store new layers

    // Reverse the loop to process artboards in reverse order
    for (var i = artboards.length - 1; i >= 0; i--) {
        var currentArtboard = artboards[i];
        var artboardName = currentArtboard.name;

        // Create a new layer with the name of the current artboard
        var newLayer = doc.layers.add();
        newLayer.name = artboardName;
        newLayers.push(newLayer);

        // Set the current artboard as active
        doc.artboards.setActiveArtboardIndex(i);

        // Select all items on the current artboard
        app.executeMenuCommand('selectallinartboard');

        // Move selected items to the newly created layer
        moveItemsToLayer(doc.selection, newLayer);
    }
    if (removeOldLayers) {
        // Delete all old layers
        for (var j = doc.layers.length - 1; j >= 0; j--) {
            if (indexOfLayer(newLayers, doc.layers[j]) === -1) {
                doc.layers[j].remove();
            }
        }
    }
}

// Run the main function
main();
