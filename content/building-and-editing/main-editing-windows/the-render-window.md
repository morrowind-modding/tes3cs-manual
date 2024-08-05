---
title: The Render Window
aliases:
  - The Render Window
  - Render Window
description: The Render window is the area where the world can be viewed and manipulated.
---
The Render window is the area where the world can be viewed and manipulated. Objects can be moved, copied, deleted, edited. Much of the editing process involves dragging and dropping objects from the [[the-object-window|Object Window]] into the Render Window.

## Moving your view (camera)  
The camera can be moved in several ways:  
- &nbsp; &nbsp; To pan the camera, hold the **<kbd>SPACEBAR</kbd>** while moving the mouse, or hold down the mouse-wheel.
- &nbsp; &nbsp; To Zoom the camera, hold down **<kbd>V</kbd>** while moving the mouse or spin the mouse-wheel.
- &nbsp; &nbsp; The **arrow keys** allow you to move quickly through the world by moving a half cell distance at a time.
- &nbsp; &nbsp; To rotate the camera, hold down **<kbd>SHIFT</kbd>** while moving the mouse. If an object is selected, the camera will rotate around the center of the screen, at the distance of the selected object.
- &nbsp; &nbsp; You can center a selected object in the window by pressing **<kbd>C</kbd>**. This is also a fast way of zooming in on an object.
- &nbsp; &nbsp; You can also center on a selected object in the window by pressing **<kbd>T</kbd>**. This switches the camera to a close-up, top-down view of the object.

## Selecting Objects  
Selecting objects can be done multiple ways:  
- &nbsp; &nbsp; **Left click** to select an object. A rotated bounding box highlights it. Other selected objects are deselected.
- &nbsp; &nbsp; **Left clicking** empty space (or landscape) deselects all objects. Pressing **<kbd>D</kbd>** also deselects.
- &nbsp; &nbsp; Hold **<kbd>Ctrl</kbd>** to select/deselect multiple objects by clicking on them.
- &nbsp; &nbsp; Drag a selection box to select multiple objects.

## Moving Objects  
Only selected objects can be moved. You’ll know if you are able to move an object if the + symbol appears along with your cursor. Hold down the **left mouse button** and drag the object to move it.

Objects move, by default on the horizontal (xy) plane. If you want to move an object vertically (z plane), hold down the **<kbd>Z</kbd>** key while moving the mouse. You can also lock the object’s movement to the world’s XY axis by holding down **<kbd>X</kbd>** while moving.

To rotate the object, hold down the **right mouse button** while moving the mouse. The default axis is Z, since most object rotations are done around this axis. If you want to rotate around the X axis, hold **<kbd>X</kbd>**, and if you want to rotate around Y, hold **<kbd>Z</kbd>** (yes, holding Z is bizarre for Y rotations, but it was better than having to hold it all the time since most rotations are Z rotations, so they were switched).

## Dropping Objects  
Press **<kbd>F</kbd>** to make objects fall. They will hit any object. You may have to press it multiple times if you have multiple objects selected that can fall onto each other. &nbsp; This is a quick way to get objects to “snap” to the floor, or a shelf, etc.

## Editing Object Data  
Double clicking an object opens its properties window. Changes made to an object here that are not explicit reference data, such as ownership, are inherited by the other objects of this ID in the world.

If you edit weap\_longsword\_07, and make it do more damage, you have changed every weap\_longsword\_07 in the world. See also [[objects/reference-data/index|Object Reference]].

## Deleting Objects  
Pressing delete will delete the selected objects from the world.

## Copying, Cutting, Pasting, and Duplicating Objects  
You can use **<kbd>Ctrl</kbd>**-**<kbd>C</kbd>** to copy objects, **<kbd>Ctrl</kbd>**-**<kbd>X</kbd>** to cut them, and **<kbd>Ctrl</kbd>**-**<kbd>V</kbd>** to paste them. Pasted objects are placed in front of the camera. &nbsp; Multiple objects can be copied and pasted at once; they simply all need to be selected at the same time, and will retain their relative orientation when pasted.

**<kbd>Ctrl</kbd>**-**<kbd>Shift</kbd>**-**<kbd>V</kbd>** will place the objects down, “in-place” or at the coordinates they previously existed, but in the current cell you are viewing.

You can also press **<kbd>Ctrl</kbd>**-**<kbd>D</kbd>** to duplicate selected objects. This places duplicates of the objects right on top of the selected ones. You can then move the new object(s) into place. This is great for duplicating hallway pieces for quick building.
