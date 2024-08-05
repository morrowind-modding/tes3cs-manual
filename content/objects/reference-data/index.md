---
title: Reference Data
aliases:
  - Reference Data
  - Object Reference
description: Any object placed in the world is known as a reference. This is because it references an object in the object database (object window).
---
## Object Reference

Any object placed in the world is known as a _reference._ This is because it references an object in the object database (object window). So an _object_ is an ID in the database, and a _reference_ is a copy of that object. If the object is changed, all it’s references are also changed. A reference can also have it’s own unique data:

## Editing Reference Data  
Some objects include reference data, which appears in the bottom half of the object properties window. &nbsp; Editing this information will affect only the selected reference(s); other references of that object will not be changed. &nbsp; There are five types of reference data:

**Position**: &nbsp; the reference’s position and orientation in the world.

**3D Scale**: &nbsp; The size of the object reference. &nbsp; Objects can be scaled from 50% (0.5) to 200% (2.0) of their normal size.

### Extra Data

_Health / Uses:_ Used for objects such as weapons and armor that have health and objects such as lockpicks and probes which have uses. Used for creating damaged or used references.

_Soul:_ Only used for the misc Soul-Gems. Select a creature to place in the soul-gem reference.

_Apply to Selection:_ Applies the Extra Data settings to **all** references currently selected. &nbsp; This is a quick way to assign ownership to all objects in a cell.

#### [[ownership|Ownership]]

_Owner:_ Set which NPC or Faction owns the selected object.

_Global Variable/Rank:_ Select the global variable or rank (if the owner is a faction) that allows the PC to use this object without committing a crime.

_Apply to All Selected_: Applies the ownership data and variable to all the selected objects. Very good for shops or guilds where many objects need ownership.

### Locked

Locks a container or doors.

_Lock Level_: The Difficulty rating on the lock for trying to pick it with a [[lockpick|Lockpick]]. Should use values of 1 to 100. 1 is the easiest, while 100 is super-hard (the player would need a security skill of around 100).

_Key:_ The item that can be used to open the container. Select from list of all [[misc-item|Misc Items]].

_Trap:_ A trap that will go off when the container is opened. You can select from the list of available spells that have touch based effects.

### Teleport

Used only on doors, this sets the door to teleport the user to a new map or area.

_Load Cell_: Select the cell that the door will teleport you to.

_Select Marker:_ Selects the marker in the new cell so it can be placed.

Note that any options not available for a particular reference will be grayed out.
