---
title: Data Files
aliases:
  - Data Files
  - masters
  - esm
  - esp
  - plugins
  - plug-in
description: The Construction Set works off of a primary file called a TES file. This is basically a database of all of the data for the world
---
The Construction Set works off of a primary file called a TES file. This is basically a database of all of the data for the world, including [[objects/index|object data]], [[actors/dialogue/index|dialogue]], [[gameplay-settings|gameplay settings]], [[the-render-window|object placements]], [[actors/ai/index|AI settings]], [[building-and-editing/landscape/index|landscape]], [[gameplay/scripting/commands/index|script commands]], [[building-and-editing/world/index|cells]], etc. Basically everything that goes into the editor is stored in TES files. One giant database.

There are two types of TES files, masters (esm) and plug-ins (esp). A master file is autonomous. It relies on no information other than itself. A plug-in (esp) file relies on information from a Master TES file. _Plug-ins CANNOT refer to information in another plug-in. They can only refer to data from a master._ Plug-ins can refer to multiple master files.

Most TES files are changes to the main Morrowind.esm file (a master file). The files get loaded in order of their last modified date. Masters get loaded first, by date. Then plug-ins get loaded by date. Each file is a “layer” that gets added to the world. The player can turn off the ones they don’t like with the loader program, and these layers will be removed. This makes it impossible for a player created TES file to totally break someone’s game

Users of The Construction Set will have all of their changes placed in an esp file. They can then allow someone else to load this file and play with their changes. They can add anything to the game, provided the artwork is there to support it.

&nbsp; &nbsp; The editor can have many esp files loaded at once, but only one of these is _active._ Active means that all of the user’s changes are being saved into the *active* TES file.

&nbsp; &nbsp; Notes on Active files:
- &nbsp; &nbsp; You can only make a plug-in (esp) file active. You cannot save changes to a master file.
- &nbsp; &nbsp; The active file is always loaded last in the editor, regardless of its file date. This guarantees that all the info and changes in the active file can be viewed without being overwritten by another plug-in.
- &nbsp; &nbsp; If only an esm file is being loaded, an Active file does not have to be assigned. &nbsp; Any changes made to the master file will be saved as a new esp file, which the user will have to name. This new file will become the active file.

## See Also  
[[data-files-example|Data Files Example]]  
[[data-files-window|Data Files Window]]    
