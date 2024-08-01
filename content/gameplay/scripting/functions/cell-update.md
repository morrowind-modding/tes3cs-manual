---
title: CellUpdate
aliases:
  - CellUpdate
  - Cell Update
description: Updates the current object's cell position.
---
CelUpdate[^1]

Updates the current objects cel position. This should be called when moving objects over large distances. The game keeps tracks of objects based on what cell they are in, and if an object moves a cell over from its starting position, it may not get processed correctly when running its script.

[^1]: "Cell" is misspelled as "Cel" here and on a few other pages. This is not a technical distinction; both "cell" and "cel" are used interchangeably to mean the same thing.