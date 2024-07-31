---
title: Landscape Shaping
aliases:
  - Landscape Shaping
description: To shape or edit the height of the landscape, either select the toolbar button or press H.
---
To shape or edit the height of the landscape, either select the toolbar button or press **H**. **H** switches height editing on or off.

Once you are in height editing mode, the pointer in the render window will select vertices on the landscape as opposed to objects.

**Clicking and holding** on a vertex allows you to move it. **Drag the mouse up and down** to change the height.

You can edit the speed of vertex movement in the properties menu.

_Edit Radius:_ &nbsp; This is the radius (in vertices) that will be changed as you pull the vertices up and down. A larger radius will create larger hills or valleys.

_Edit Falloff %:_ &nbsp; This is the amount the vertices move based on how much you move the vertex you select, within the radius. A value of 0 will create a linear (straight) falloff, while 100 will create a curved falloff.

_Flatten Vertices:_ &nbsp; When this option is selected, all vertices in the edit radius will be set to the height of the fist vertex you clicked on as you paint.

_Soften Vertices:_ &nbsp; With this selected, all vertices in the edit radius will be set to the average height of the surrounding eight vertices and the center vertex. &nbsp; In effect this will smooth the shape of the landscape.

_Show Edit Radius:_ This simply displays the red edit circle in the render window or hides it.

All Landscape starts at a height of –2000 units. Sea level is 0. Anything below 0 will be underwater. Thus when building a new area, you must pull the landscape up above the water.

## See Also
[[landscape-texturing|Landscape Texturing]]
