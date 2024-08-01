---
title: Container
aliases:
  - Container
description: Containers are unmovable objects in the world that hold or contain other objects.
---
Containers are unmovable objects in the world that hold or contain other objects. This includes chests, crates, dressers, bags, and even bushes. Objects can be placed in and removed from containers. Bushes and such are referred to as _organic containers_. These containers have contents such as berries and leaves. They cannot have objects put into them in the game, only removed.

_ID_: The object’s unique ID. (character limit: 24)

_Name_: The object’s name. This is what appears in the game to player. (character limit: 32)

_Script_: Opens script based window for specific flag setting either before or after the container is opened.

_Organic Container_: If checked, container is flagged as organic and cannot have objects placed into them, only removed.

_Respawns_: If checked, objects inside container re-appear after period of time. (4 months)

_Weight:_ Containers cannot be moved, so this number represents the total weight the container can hold.

_References Persist_: If checked, the object will remain persistent in world.

_Animation_: Animation used for object.

_Add Art File_: Art used for object.

_Inventory List_: A list of any object the container holds. Items of a negative value are [infinite](<InfiniteInventoryItems.md>).  
&nbsp; &nbsp; _Count_: Number of that item in container.  
&nbsp; &nbsp; _Object ID_: The object’s unique ID  
&nbsp; &nbsp; _Type_: Type of object  

_Blocked:_ If checked, the specific object becomes read-only.
