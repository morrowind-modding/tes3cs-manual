---
title: Actors
aliases:
  - Actors
  - Actor
  - Character and Creature Overview
description: Characters and Creatures provide the backbone for the entire game experience. They also contain most of the gameplay information.
---
## Character and Creature Overview

[[actors/character/npc|Characters]] and [[actors/creature/index|Creatures]] provide the backbone for the entire game experience. They also contain most of the gameplay information. This includes [[actors/ai/index|AI]], combat, and [[actors/dialogue/index|dialogue]].

The combined set of Characters and Creatures are often referred to as Actors.

All Actors can perform the same basic actions like combat, moving, [[magic]], etc.

Here are the major differences:

> [!NOTE|clean no-t txt-s]
> | **Item** | **Character** | **Creature** |
> | ---------- | ------------- | --------------- |
> | **[[actors/animation/index|Animation]]** | All use the same file, called the base\_anim. | Most use their own animation file specific for themselves and can only perform the actions animated for them. Creatures tagged as “biped” can use animations in the base\_anim. |
> | **Movement**  | All characters can walk and swim  | Can be tagged to walk, fly, swim, or not move.   |
> | **Dialogue**  | All characters have dialogue by default    | Creatures only have dialogue if you specifically tag it to them.   |
> | **Stats**  | Characters have race, class, factions, etc.  | Creatures do not have a race, class, or faction.    |
> | **[[skills|Skills]]**  | Characters get all 27 skills.  | Creatures have only 3 skills, that encompass the whole set of 27.  |
> | **Items** | Characters can use all their items, and will select what weapons to use and clothes to wear. | Creatures cannot use their inventory. “Biped” creatures can use weapons and shields, but nothing else.   |
