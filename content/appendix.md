---
title: Appendix
aliases:
  - Appendix
  - Uncategorized Notes
  - Original Contents List
description: Changes made to the TES3CS Help Docs in order to port them logically to a web format
---
## Original Contents List

The original `.hlp` file's contents list as parsed from `TES Construction Set.cnt`:

### Getting Started
- 2 What is the Construction Set?=Editor Overview
- 2 System Requirements=System Requirements
- 2 Preferences=Preferences
- 2 Tutorials
	- 3 Dungeon Tutorial=Quick Dungeon Tutorial
	- 3 Landscape Tutorial=Landscape Tutorial

### Data Files
- 2 Overview=Data Files
- 2 Example=Data Files Example
- 2 Data Files Window=Data Files Window

### Building and Editing
- 2 World
	- 3 Overview=Cell Overview
	- 3 Naming Cells=Naming Cells
	- 3 Exterior Cell=Exterior Cell
	- 3 Interior Cell=Interior Cell
	- 3 Regions=Regions
	- 3 World Testing=World Testing
- 2 Main Editing Windows
	- 3 The Object Window=Object Window
	- 3 The Render Window=Render Window
	- 3 The Cell View Window=Cell Window
- 2 Landscape
	- 3 Overview=Landscape Overview
	- 3 Shaping=Landscape Shaping
	- 3 Texturing=Landscape Texturing

### Objects
- 2 Overview=Object Overview
- 2 Object Types
	- 3 Activator=Activator
	- 3 Alchemy=Alchemy
	- 3 Apparatus=Appratus
	- 3 Armor=Armor
	- 3 Body Part=Body Part
	- 3 Book=Book
	- 3 Clothing=Clothing
	- 3 Container=Container
	- 3 Creature=Creature
	- 3 Door=Door
	- 3 Ingredient=Ingredient
	- 3 Leveled Creature=Leveled Creature
	- 3 Leveled Item=Leveled Item
	- 3 Light=Light
	- 3 Lockpick=Lockpick
	- 3 Misc Item=Misc Item
	- 3 NPC=Character
	- 3 Probe=Probe
	- 3 Repair Item=Repair Item
	- 3 Spellmaking=Spellmaking
	- 3 Static=Static
	- 3 Weapon=Weapon
- 2 Reference Data
	- 3 Overview=Object Reference
	-  3 Ownership=Ownership
	- 3 Infinite Inventory Items=Infinite Inventory Items

### Actors
- 2 Overview=Character Overview
- 2 Character
	- 3 Race=Race
	- 3 Skills=Skills
	- 3 Class=Class
	- 3 Factions=Factions
	- 3 Birthsigns=Birthsigns
	- 3 NPC=Character
	- 3 Infinite Inventory Items=Infinite Inventory Items
- 2 Creature
	- 3 Creature Window=Creature
	- 3 Leveled Creature=Leveled Creature
- 2 Dialogue
	- 3 Overview=Dialogue Overview
	- 3 Dialogue Variables=Dialogue Variables
	- 3 Dialogue Functions=Dialogue Functions
	- 3 Text Defines=Text Defines
- 2 AI
	- 3 Overview=AI
	- 3 Settings
		- 4 Alarm=Alarm
		- 4 Fight=Fight
		- 4 Flee=Flee
		- 4 Hello=Hello
	- 3 Packages
		- 4 Wander=Wander
		- 4 Travel=Travel
		- 4 Escort=Escort
		- 4 Follow=Follow
		- 4 Activate=ActivateAI

### Gameplay
- 2 Magic=Magic
- 2 Scripting
	- 3 Overview=Scripting Overview
	- 3 Commands=ScriptCommands
	- 3 Functions=ScriptFunctions
	- 3 Sample Script=Sample Script

---

## Uncategorized Notes

A number of original notes could be found in the index, but had not had a category assigned to them in the `.hlp` file's contents, meaning they were not placed in a subfolder automatically.

Although this site is not intended as a revision of the original TES3CS Help Docs, it was deemed appropriate to assign folders to these orphan notes. This serves to improve navigation on the site for users, and make the website structure more logical for site-crawlers to parse for SEO purposes. Furthermore, backlinks have also been inserted for those notes which otherwise lacked any.

See the list of changes below:

- [[enchanting|Enchanting]] - Listed in [[objects/index|Object Overview]] as a type of object, but does not appear under 'Object Types' in the Contents. **Placed in 'Object Types'**
- [[the-preview-window|The Preview Window]] - uncategorized, but is one of the [[building-and-editing/main-editing-windows/index|Main Editing Windows]]. **Placed in 'Main Editing Windows'**
- [[factions]] - uncategorized; appears under 'character' menu in the CS. Moved to [[actors/character/index|Character]]
- [[quest-title|Quest Title]] - does not appear under Dialogue in contents, but is only referenced in [[actors/dialogue/index|Dialogue Overview]]. Moved to **Dialogue**
- [[water-layer|Water Layer]] - uncategorized, no backlinks. Text references interior and exterior cells, so placed under `building-and-editing/world` [[building-and-editing/world/index|World]]
- [[weapon-types|Weapon Types]] - uncategorized. Only backlink is to [[weapon|Weapon]]. Could have made the latter a folder an nested it there, but that would disrupt alphabetical order of [[objects/object-types/index|Object Types]] list. Opted to move it under parent directory [[objects/index|Objects]] instead
- [[gameplay/game-settings/index|Game Settings]] - placed under [[gameplay/index|Gameplay]]
	- [[gameplay-settings|Gameplay Settings]] - placed under [[gameplay/game-settings/index|Game Settings]]
- [[friend-hit|FriendHit]] - dialogue function; the only function that has its own page. Placed under [[actors/dialogue/index|Dialogue]]
- [[magic-effects-list|Magic Effects List]] - backlink to [[magic|Magic]], but is specifically in reference to scripting. Placed under [[gameplay/scripting/index|Scripting]]
- [[global-scripts|Global Scripts]] - backlink to [[gameplay/scripting/index|Scripting Overview]], placed under **Scripting**.
- [[inventory-scripts|Inventory Scripts]] - backlink to [[gameplay/scripting/functions/index|Script Functions]], but the file itself states that "they are NOT functions, but variables that are true or false." Placed under [[gameplay/scripting/index|Scripting]]
- [[object-referencing|Object Referencing]] - backlink to [[gameplay/scripting/commands/index|Script Commands]] but page content is more related to scripting in general. Placed under [[gameplay/scripting/index|Scripting]]
- [[pc-race|PCRace]] - unlinked mention in [[text-defines|Text Defines]], but specifically it is a categorical function so placed under [[gameplay/scripting/functions/index|Script Functions]]
- [[start-scripts|Start Scripts]] - backlink to [[gameplay/scripting/index|Scripting Overview]], placed in **Scripting**
- [[using-variables-in-functions|Using Variables in Functions]] - backlink to [[gameplay/scripting/commands/index|Script Commands]] but more broad usage - placed under [[gameplay/scripting/index|Scripting]]
- [[character-body-layout|Character Body Layout]] - backlinks to notes under [[objects/object-types/index|Object Types]], but is not in itself an object type. Placed under [[objects/index|Objects]]
- [[auto-calculate-stats|Auto Calculate Stats]] - backlinks to [[actors/character/npc|NPC]]. Placed under [[actors/character/index|Character]]
- [[disposition|Disposition]] - uncategorized, unlinked, with mentions in notes from [[actors/ai/index|AI]] to [[actors/dialogue/index|Dialogue]]. Opted to place in [[actors/ai/index|AI]]
- [[actors/animation/index|Animation]] - uncategorized; only backlink is to unlinked [[the-preview-window|Preview Window]]. Related notes contain backlinks to it. Opted to create **Animation** folder under [[actors/index|Actors]], and place the following uncategorized notes under it:
	- [[animation-groups|Animation Groups]]
	- [[animation-sound|Animation Sound]]
	- [[base-character-animation|Base Character Animation]]

## Notes listed under multiple folders:
- [[creature|Creature]] - listed under
	- `objects/object-types/` [[objects/object-types/index|Object Types]]
	- `actors/creature/` [[actors/creature/index|Creature]]
- [[objects/object-types/leveled-creature|Leveled Creature]] - listed under
	- `objects/object-types/` [[objects/object-types/index|Object Types]]
	- `actors/creature/` [[actors/creature/index|Creature]]