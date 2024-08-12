---
title: Armor
aliases:
  - Armor
description: Defines a new Armor piece. Armor also acts as an object that replaces body parts for NPCs.
---
Defines a new Armor piece. Armor also acts as an object that replaces [[body-part|body parts]] for [[actors/character/npc|NPCs]].

_ID_: The object’s unique ID. (character limit: 32)

_Name_: The object’s name. This is what appears in the game to player. (character limit: 32)

_Type_: The type of armor this piece covers. Includes: Shield, Boots, Cuirass, Helmet, Left/Right Bracer, Left/Right Gauntlet, Left/Right Pauldron

_Script_: The [[gameplay/scripting/index|script]] assigned to object.

_Weight_: The weight of armor (in pounds).

_Health_: The object’s health. When zero, the armor becomes unusable and needs repair.

_AR_: The object’s armor rating. The higher the number, the better the protection.

_Value_: The object’s value in gold.

_Add Art File_: Art used for object.

_Inventory Image_: Art used for icon representation of object.

_Enchantment_: The number of [[enchanting|enchantment]] points the item has. Used for enchanting.

_Enchanting_: The [[enchanting|enchantment]] attached to the object.

_Biped Object_: The body part for clothing piece. See [[body-part|Body Part]].

_Male Armor/Female Armor_: The corresponding body part ID created for armor piece.

_References Persist_: If checked, the object will remain persistent in world.

_Blocked:_ If checked, the specific object becomes read-only.

## See Also  
[[character-body-layout|Character Body Layout]]  
