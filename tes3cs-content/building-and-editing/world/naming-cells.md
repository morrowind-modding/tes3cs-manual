---
title: Naming Cells
aliases:
  - Naming Cells
description: All cells have Names.
---
All cells have Names. These names are used for:

1. &nbsp; &nbsp; The name of the player’s location in the local map window.
2. &nbsp; &nbsp; The name of an NPC’s location for [[actors/dialogue/index|dialogue]] sorting.
3. &nbsp; &nbsp; The name of the cell as it appears on the large world map.

Exterior Cells can, and should share names. The large city of Balmora may be made up of 4 cells. Each cell should be named “Balmora”, so that the name is not flashing around on the map screen. Also, if dialogue is attached to everyone in “Balmora”, this dialogue can be filtered easily for multiple cells without having to define them all as separate criteria.

Interior Cells that are supposed to be in an area (such as a tavern in Balmora) should be given names starting with the city, such as “Balmora, North Tavern”. With this name, everyone in the tavern will be a part of Balmora for dialogue, but the map will also read “Balmora, North Tavern” when the PC walks in it. Remember, **all interiors must have unique names.**
