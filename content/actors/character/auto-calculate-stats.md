---
title: Auto Calculate Stats
aliases:
  - Auto Calculate Stats
description: Creates stats and spells automatically for the NPC based on their Race, Class, and Level.
---
Creates stats and spells automatically for the [[actors/character/npc|NPC]] based on their [[race|Race]], [[class|Class]], and Level.

[[magic|Spells]] are placed in through the following rules:

1. &nbsp; Only checks Auto-Calced Spells.
2. &nbsp; NPC must have a 50% (fAutoSpellChance) chance of casting the spell.
3. &nbsp; NPC must have magicka to cast the spell at least 1 (iAutoSpellTimesCanCast) time(s).
4. &nbsp; To get any spell that affects an attribute or [[skills|skill]] (such as absorb strength) the NPC must have at least a 70 (iAutoSpellAttMin) in that attribute/skill.
5. &nbsp; NPC will get a maximum of 3 (iAutoSpellSCHOOLMax) spells from each school (ie: Altereation, Conjuration, etc).
