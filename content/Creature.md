# 

&nbsp;

Creatures differ from characters (NPCs) in many respects. They are usually beasts, or things you fight, which do not adhere to the class structure and animation rules of NPCs (though they can be made to use the same object system for skeletons or goblins). They do not necessarily carry weapons and often have strange and variable attacks. Creatures do not perform the same actions as characters. They do not sneak, cannot have their pockets picked, etc. But they can be knocked out, and they do have attributes so that they work through the main systems of the game.

&nbsp;

*ID:* Like objects, all creatures get a unique ID. The unique ID is used in game scripts and code. The player never sees this value. (character limit: 24)

&nbsp;

*Name:* The creature’s name. This is what appears in the game to player. (character limit: 32)

&nbsp;

*Script*: The script assigned to creature.

&nbsp;

*Type:* Creature, Daedra, Undead, or Humanoid. This categorizes the creature so certain spell effects will work on it. Certain actions *only* effect the Undead or Daedra for instance.

&nbsp;

*Level:* The level of the Creature. This is not used to adjust attributes, but used to approximate the creature’s power level to the player’s. Level is also used in some of the game formulas.

&nbsp;

*Essential:* This creature has inventory or information essential to the game. If killed, this creature’s body will remain, and will not be cleared when the cell is loaded. The player will also get a message telling them an important creature has died.&nbsp;

&nbsp;

*Corpses Persist:* The creatures corpse cannot be disposed of by the player and will remain forever. If the creature’s health is set to zero, they will be dead when they get loaded (used for placing corpses).

&nbsp;

*Respawn:* Creature will re-appear after certain time period.

&nbsp;

*Attributes*: Attribute values 1 to 100.&nbsp;

&nbsp;

*Health:* Defaults to (Str + End/2) + ( Level \* (End/10)). Can be manually edited by the user.

&nbsp;

*Spell Pts:* Defaults to (Int x advantage modifier). Can be manually edited by user.

&nbsp;

*Fatigue:* Defaults to (Str+End+Agi+Wil). Can be manually edited.

&nbsp;

*Soul:* The charge value of the soul if bound into a magical item.

&nbsp;

*Combat, Magic, Stealth:* Creatures only get 3 skills; *Combat, Magic, Stealth*. These are used in place of all the skills used through the main resolution systems the game uses for NPCs. They can each be manually edited.

&nbsp;

*Attack:* The min and max damage for each of the creatures attacks.

&nbsp;

*Blood Texture:* The texture used for when the creature is hit.

&nbsp;

*Dialogue:* Opens the dialogue window filtered for this Creature. Creatures, by default do *not* have dialogue, and only receive it when Dialogue is specifically selected for them. All NPCs have dialogue, but creatures only have it if their specific ID is attached to a piece of data.

&nbsp;

*Animation:* Opens animation Window for this creature

&nbsp;

*AI:* Opens AI window for this creature.

&nbsp;

*Weapon \& Shield:* Allows the creature to use any shields or weapons they have. To use these they must either be using the Biped flag (built to a character’s bone structure), or have animations for weapon attacks.

&nbsp;

*Movement:* Flies, walks, Swims, Biped or None

*&nbsp; &nbsp; Biped:* A check-box that sets the creature to use the same bone structure as an NPC. This allows these creatures to use the animations in the NPC’s Base Animation file.

&nbsp;

*Inventory / Spell List:* A list of objects the creature is carrying along with spells it has available. Items of a negative value are [infinite](<InfiniteInventoryItems.md>). Spells may include diseases, abilities, etc.

&nbsp;

*Sound Gen Creature:* The base creature from which this creature derives its sounds.

&nbsp;

*Blocked:* If checked, the specific object becomes read-only.

&nbsp;

*Scale:* This scale is applied to all references to that creature in addition to the reference's individual scale.

&nbsp;

**See also**

[Leveled Creature ](<LeveledCreature.md>)

&nbsp;


***
_Created with the Personal Edition of HelpNDoc: [Create HTML Help, DOC, PDF and print manuals from 1 single source](<https://www.helpndoc.com/help-authoring-tool>)_
