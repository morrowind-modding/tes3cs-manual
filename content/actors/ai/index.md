---
title: AI
aliases:
  - AI
  - AI Overview
description: Most AI in Morrowind is handled within the actor (character or creature) themselves.
---
Most AI in Morrowind is handled within the actor (character or creature) themselves. They will decide how to behave based on their current stats.

These stats include their attributes, skills, health, disposition, etc. It also includes 4 stats that are set through the AI window. These are

&nbsp; &nbsp; [Fight](<Fight.md>): How much the actor wants to fight the PC.

&nbsp; &nbsp; [Flee](<Flee.md>): How likely the actor is to flee when in combat.

&nbsp; &nbsp; [[alarm|Alarm]]: How likely the NPC is to react to the PC committing a crime. NPCs only.

&nbsp; &nbsp; [Hello](<Hello.md>): The distance within which the actor will say “hello” to the PC (this is multiplied by the game setting iGreetDistanceMultiplier, which defaults to 7). NPCs only.

## AI Packages

Each Actor may have a series of AI Packages. These are instructions they execute in order. When they are done with the last one in the list, they start the list over. There are 5 different packages you can assign to an actor:
  
&nbsp; &nbsp; [Wander](<Wander.md>): Makes the actor wander around a set area.  
&nbsp; &nbsp; &nbsp; [Travel](<Travel.md>): Makes the actor travel to a specified location.  
&nbsp; &nbsp; &nbsp; [Follow](<Follow.md>): Makes the actor follow a specified target.  
&nbsp; &nbsp; &nbsp; [Escort](<Escort.md>): Makes the actor escort another object to a specific location.  
&nbsp; &nbsp; &nbsp; [[activate-ai|Activate]] : Makes the actor “use” an object in the world, such as a door or lever.  

When an actor finishes one package, they will start the next one in the list. If the actor enters combat (fighting and fleeing), the current package is suspended until the fight is over or the actor has sufficiently fled.

## Services

The Services tab is where you select which services the actor can offer the PC. Simply check off the ones you wish him to have. The Barter Gold value is how much money the actor has to spend in barter. The amount the actor is left with after a transaction will reset to this value after a time. For Travel Services, locations he travels to are set up the same way Teleport locations are set up for Door references. If an NPC is marked as Auto-Calc, he can not select his own services but instead uses the Auto-Calc services selected for his class.
