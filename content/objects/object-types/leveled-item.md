---
title: Leveled Item
aliases:
  - Leveled Item
description:
---
_ID_: The object’s unique ID. (character limit: 32)

_Calculate from all levels \<= PC's level_: Will return one of any of the items listed as equal to or below player's level (levels are set in left column). If this is not checked, only the items equal to the player’s level can be returned.

_Calculate for each item in count_: If checked, will choose a new item for each time the list is called in a container.&nbsp; Otherwise, all items in a multiple count container will be the same. Essentially, if you have 5 items from a list in a chest, and this isn't checked, the container will have 5 of the same item.&nbsp; If it is checked, the items may (or may not) be different - it's random.

_Chance None_: Percent chance that no item will appear.

_PC Level_: The level a leveled item will appear at (defaults to 1; if multiple levels are

listed, any new items added to list will have highest level)

_Item Nam_e: Item ID (or leveled list ID, since those can be called by other

lists)

_Blocked:_ If checked, the specific object becomes read-only.
