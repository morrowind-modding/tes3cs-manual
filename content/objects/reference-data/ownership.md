---
title: Ownership
aliases:
  - Ownership
description: This data comes in one of two forms. Either Faction and Rank, or NPC and Flag. An object cannot have both.
---
This data comes in one of two forms. Either _Faction and Rank_, or *NPC and Flag.* An object cannot have both.

Some Examples:

The door to the back room of a temple has an ownership value of Temple, 6. Thus if the player activates this object and is not a member of the Temple and at least Rank 6 (Disciple), he is committing a crime.

The door to the bedroom of Ken’s house the has ownership of Ken, and the flag KenOK = true. This means that Ken owns it and unless KenOK = true, you are committing a crime if you activate that door. In Ken’s house are several swords, each with ownership of Ken and no flags. This means there is no circumstance that will allow you to legally take the swords. Taking them is always a crime.&nbsp;

In addition, when bartering with an NPC in the game, the NPC will offer any objects he *owns*. So for a shopkeeper, it is important to mark all the objects you want him to sell.&nbsp;

He also owns any object placed in a container he owns.
