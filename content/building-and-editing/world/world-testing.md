---
title: World Testing
aliases:
  - World Testing
description: Several selections are provided for quick testing of a plug-in without needing to actually load the game.
---
Several selections are provided for quick testing of a plug-in without needing to actually load the game. &nbsp; The editor will perform a scan of all world content, and return a list of possible problem areas in the following categories:

**Model Test**: Runs through all objects in the file to verify that all have valid 3D.

**Dialogue Conflicts**: Returns a list of dialogue topics that share an ID with something else in the world, which could cause problems with the replaceID function in scripts.

**Non-teleporting Doors**: Returns a list of all exterior doors that are not linked to anything.

**Non-teleporting Interiors**: Returns a list of all interior cells that are not linked to either another interior or the exterior world.

**Test All Land**: Returns a list of exterior cells that have border seam problems.

**Test/Fix All Path Grids**: Runs through all path grids, removing points underwater and points without any connections. &nbsp; Also moves underground points to ground-level.

**Test All Cells**: Runs through all the cells in the world, moving the camera and re-drawing to check for animation errors.

**Test All Interiors** **Cells**: This performs the same function as Test All Cells, but only on interiors.
