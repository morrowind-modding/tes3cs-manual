---
title: Creature
aliases:
  - Creature
description: Creatures differ from characters (NPCs) in many respects. They are usually beasts, or things you fight, which do not adhere to the class structure and animation rules of NPCs
---
Creatures differ from characters ([[objects/object-types/npc|NPCs]]) in many respects. They are usually beasts, or things you fight, which do not adhere to the [[class]] structure and [[actors/animation/index|animation]] rules of NPCs (though they can be made to use the same object system for skeletons or goblins). They do not necessarily carry [[weapon|weapons]] and often have strange and variable attacks. Creatures do not perform the same actions as characters. They do not sneak, cannot have their pockets picked, etc. But they can be knocked out, and they do have attributes so that they work through the main systems of the game.

_ID:_ Like objects, all creatures get a unique ID. The unique ID is used in game [[gameplay/scripting/index|scripts]] and code. The player never sees this value. (character limit: 24)

_Name:_ The creature’s name. This is what appears in the game to player. (character limit: 32)

_Script_: The script assigned to creature.

_Type:_ Creature, Daedra, Undead, or Humanoid. This categorizes the creature so certain [[magic|spell]] effects will work on it. Certain actions *only* effect the Undead or Daedra for instance.

_Level:_ The level of the Creature. This is not used to adjust attributes, but used to approximate the creature’s power level to the player’s. Level is also used in some of the game formulas.

_Essential:_ This creature has inventory or information essential to the game. If killed, this creature’s body will remain, and will not be cleared when the cell is loaded. The player will also get a message telling them an important creature has died.

_Corpses Persist:_ The creatures corpse cannot be disposed of by the player and will remain forever. If the creature’s health is set to zero, they will be dead when they get loaded (used for placing corpses).

_Respawn:_ Creature will re-appear after certain time period.

_Attributes_: Attribute values 1 to 100.

_Health:_ Defaults to (Str + End/2) + ( Level \* (End/10)). Can be manually edited by the user.

_Spell Pts:_ Defaults to (Int x advantage modifier). Can be manually edited by user.

_Fatigue:_ Defaults to (Str+End+Agi+Wil). Can be manually edited.

_Soul:_ The charge value of the soul if bound into a magical item.

_Combat, Magic, Stealth:_ Creatures only get 3 skills; _Combat, Magic, Stealth_. These are used in place of all the [[skills]] used through the main resolution systems the game uses for NPCs. They can each be manually edited.

_Attack:_ The min and max damage for each of the creatures attacks.

_Blood Texture:_ The texture used for when the creature is hit.

_Dialogue:_ Opens the [[actors/dialogue/index|dialogue]] window filtered for this Creature. Creatures, by default do *not* have dialogue, and only receive it when Dialogue is specifically selected for them. All NPCs have dialogue, but creatures only have it if their specific ID is attached to a piece of data.

_Animation:_ Opens animation Window for this creature

_AI:_ Opens [[actors/ai/index|AI]] window for this creature.

_Weapon \& Shield:_ Allows the creature to use any shields or weapons they have. To use these they must either be using the Biped flag (built to a character’s bone structure), or have animations for weapon attacks.

_Movement:_ Flies, walks, Swims, Biped or None

&nbsp; &nbsp; _Biped:_ A check-box that sets the creature to use the same bone structure as an NPC. This allows these creatures to use the animations in the NPC’s [[base-character-animation|Base Animation file]].

_Inventory / Spell List:_ A list of objects the creature is carrying along with spells it has available. Items of a negative value are [[objects/reference-data/infinite-inventory-items|infinite]]. Spells may include diseases, abilities, etc.

_Sound Gen Creature:_ The base creature from which this creature derives its sounds.

_Blocked:_ If checked, the specific object becomes read-only.

_Scale:_ This scale is applied to all references to that creature in addition to the reference's individual scale.

## See also  
[[objects/object-types/leveled-creature|Leveled Creature]]  
