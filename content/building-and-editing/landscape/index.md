---
title: Landscape
aliases:
  - Landscape Overview
description: When viewing the exterior world of Morrowind, landscape is always present.
---
## Landscape Overview

When viewing the exterior world of Morrowind, landscape is always present. It goes on to infinity, and is present even below the endless sea. Landscape works differently than other game [[objects/index|objects]], though the game treats them similarly.

The landscape is a height map, with vertices every 128 units. When you edit an exterior cel, which has a size of 8192x8192, you can also edit the landscape in that cel. Changes to the landscape are stored on a cel by cel basis. Thus, one [[data-files/index|plug-in]] may edit one part of the world, and other plug-ins, other areas.

The landscape may be edited on the Z axis only (up and down). It can also be textured using the Construction Set’s library of landscape textures. Lastly the landscape can also be colored, using vertex colors to create shadows or extra paths. Thus the landscape has 3 modes of editing (height, texture, color).

[[water-layer|Water]] is at height 0. All landscapes start at height of –2000.

Press **<kbd>H</kbd>** to enter Height editing mode. In this mode you can edit the heights and textures. Press **<kbd>O</kbd>** to use vertex colors on the landscape.

## See Also

[[landscape-texturing|Landscape Texturing]]  
[[landscape-shaping|Landscape Shaping]]
