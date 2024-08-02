---
title: CellUpdate
aliases:
  - CellUpdate
  - Cell Update
description: Updates the current object's cell position.
---
CelUpdate

Updates the current objects cel position. This should be called when moving objects over large distances. The game keeps tracks of objects based on what cell they are in, and if an object moves a cell over from its starting position, it may not get processed correctly when running its script.
