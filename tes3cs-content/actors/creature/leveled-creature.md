---
title: Leveled Creature
aliases:
  - Leveled Creature
description: A leveled creature is a marker that chooses a creature to represent it in the world based on the level of the PC.
---
A leveled creature is a marker that chooses a [[creature]] to represent it in the world based on the level of the PC. When the [[building-and-editing/world/index|cell]] is loaded, the creature will check the PC’s level and load the creature in its list that is closest to the PC’s level without going over. The user will fill in the level here for when that creature appears. If multiple creatures are listed for the same level, one is chosen at random. If no creatures meet the PC’s level, no creature is displayed.

_ID_: The object’s unique ID. (character limit: 32)

_Calculate from all levels \<= PC's level_: Will return creatures listed as equal to or below player's level (level numbers are set in left column). If this is unchecked, only creature listed as equal to the PC’s level can be returned.

_Chance None_: Percent chance that no creature will appear.

_Blocked:_ If checked, the specific [[objects/index|object]] becomes read-only.

_PC Level_: level creature will appear at (defaults to 1; if multiple levels are listed, any new items added to list will have highest level)

_Creature Name_: Creature ID (or Leveled Creature ID, since those can be called by other lists)
