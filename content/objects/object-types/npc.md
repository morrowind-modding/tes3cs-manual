---
title: NPC
aliases:
  - Character
  - NPC
description:
---
## Character 

_ID:_ The object’s unique ID. Most NPCs Name and ID are the same for ease of use. Remember, this is the ID by which the NPC is referred to in all code and a [[gameplay/scripting/index|script]] and is never seen by the player. (character limit: 24)

_Name:_ The NPC’s name. This is what appears in the game to player. (character limit: 32)


_Race:_ Pick from available [[race|races]].

_Female_: If checked, NPC is female.


_Level:_ The level of the NPC. Used to automatically adjust attributes, skills, and health.


_Rank:_ Rank in the selected faction (cannot have Rank without Faction). List of Ranks taken from Faction’s list.

_Essential:_ This NPC has inventory or information essential to the game. If killed, this NPC’s body will remain, and will not be cleared when the cell is loaded. The player will also get a message telling them an important NPC has died.

_Respawn:_ NPC will reappear after certain time period.

_Corpses Persist:_ After dead, their corpse remains. If the NPC’s health is set to zero, they will be dead when they get loaded (used for placing corpses).

_Attributes_: Attribute values 1 to 100. Modified based on race, class, and level.

_Health:_ Defaults to (Str + End/2) + ( Level \* (End/10)). Can be manually edited by the user.

_Magicka:_ Defaults to (Int x class and race modifier). Can be manually edited by user.

_Fatigue:_ Defaults to (Str+End+Agi+Wil). Can be manually edited.

_Disposition:_ Starting [[disposition]] for the NPC. This is the unmodified base value, and will change in the game based on several factors.

_Reputation:_ Fame level of the NPC. &nbsp; NPC’s who are more famous are more difficult to persuade.

_Blood Texture:_ The blood texture used for the splat when this NPC is hit.

_[[auto-calculate-stats|Auto Calculate Stats]]:_ Creates stats and spells automatically for the NPC based on his Race, Class, and Level.

_Skills:_ Value of each skill defined in its own field. Defaults defined by class and level.

_[[actors/dialogue/index|Dialogue]]:_ Opens the dialogue window filtered for this NPC.

_[[actors/animation/index|Animation]]:_ Opens animation Window for this NPC’s animation file.

_[[actors/ai/index|AI]]:_ Opens AI window for this NPC.

_Head \& Hair:_ Simply chose the available head and hair objects for this NPC. Only heads and hairs that have been defined under [[character-body-layout|body parts]] for the NPC’s race and sex will be available.

_Inventory / Spell List:_ A list of any objects the NPC is carrying along with any [[magic|spells]] he has available. Items of a negative value are [[objects/reference-data/infinite-inventory-items|infinite]]. Spells may include diseases, abilities, etc.

_Blocked:_ If checked, the specific object becomes read-only.
