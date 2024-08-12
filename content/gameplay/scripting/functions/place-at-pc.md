---
title: PlaceAtPC
aliases:
  - PlaceAtPC
description: Places the object at the PC, in the direction you specify and the distance.
---
PlaceAtPC, ItemID, count, distance, direction  
PlaceAtPC, “Ninja Man”, 1, 256, 1  

Places the [[objects/index|object]] at the PC, in the direction you specify and the distance. If that location is not safe (in the air, in a wall, etc), the object will be placed at one of the other axis or at the player’s exact location (feet).

direction is:

`0 = front`  
`1 = back`  
`2 = left`  
`3 = right`  
