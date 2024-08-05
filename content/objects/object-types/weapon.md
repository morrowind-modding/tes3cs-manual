---
title: Weapon
aliases:
  - Weapon
description: Weapons are any object that is used for attacking in the game.
---
Weapons are any object that is used for attacking in the game. They are equipped as weapons and include long swords, bows, axes, and ammo (such as arrows and bolts).

_ID_: The object’s unique ID. (character limit: 32)

_Name_: The object’s name. This is what appears in the game to player. (character limit: 32)

Type: Type of [[weapon-types|weapon]] for Skill and hand position.

_Script_: The script assigned to object.

_Weight_: The weight of object (in pounds).

_Health:_ How much damage the weapon can take before it breaks. This is the maximum health. References to this object in the world can have a lower health setting for placing used items in the world.

_Value_: The object’s value in gold.

_Speed:_ Attack speed of the weapon. This is the multiplier used for swinging the weapon. A value of 2.0 will swing the weapon twice as fast as normal, and 0.5 will swing it at half speed. In general small weapons like daggers are given 1.5, and big weapons, like hammers, are given 0.8.

_Reach:_ Multiplier used to adjust how far away the weapon hits. Not used for ranged weapons.

_Enchantment_: The number of enchantment points the item has. Used for enchanting.

_Enchanting_: The enchantment attached to the object.

_Ignores Normal Weapon Resistance_: If checked, the weapon can hit creatures with the "Immune to normal weapons" ability. &nbsp; Should be checked for everything silver and better.

_Add Art File_: Art used for object.

_Inventory Image_: Art used for icon representation of object.

_Damage_: Min and Max damage for the three types of attacks. Ranged weapons only use the Chop damage.

_References Persist_: If checked, the object will remain persistent in world.

_Blocked:_ If checked, the specific object becomes read-only.
