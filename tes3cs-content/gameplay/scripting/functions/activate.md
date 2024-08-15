---
title: Activate
aliases:
  - Activate
description: This function tells the object to do its default activation.
---
```mwscript title="Activate"
If ( OnActivate == 1)
	Activate
endif
```

This function tells the [[objects/index|object]] to do its default activation.

| **Object Type** | **Activation** |
| --- | --- |
| [[objects/object-types/npc\|NPC]] | [[actors/dialogue/index\|Dialogue]] |
| [[container||Container]] | Opens |
| [[Door]] | Opens |
| [[weapon\|Weapon]], [[armor]], [[misc-item\|misc]], etc | Picks Up |
| Book/Scroll | Reads |
