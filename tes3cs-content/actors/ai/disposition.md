---
title: Disposition
aliases:
  - Disposition
description: Disposition is how an NPC feels about you on a scale from 0 to 100.
---
Disposition is how an NPC feels about you on a scale from 0 to 100.

Things that effect disposition are:  

| **<span style="color:red;font-size:1.2rem;">PC Action</span>** | **<span style="color:red;font-size:1.2rem;">Default Value</span>** | **<span style="color:red;font-size:1.2rem;">Game Setting Formula</span>**                                                                |
| -------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Same Race**                                                  | &#53;                                                              | <span style="font-size:0.8rem">iDispRaceMod</span>                                                                                       |
| **Personality**                                                | &#48;.5 \* (AttPer - 50)                                           | <span style="font-size:0.8rem">fDispPerMult \* (AttPer - iDispPerBase)</span>                                                            |
| **Faction Reaction**                                           | (FactionReaction \* 5) \* (0.5 + (Rank \* 0.5))                    | <span style="font-size:0.8rem">( Faction Reaction \* fDispFactionMod ) \* (fDispFactionRankBase + (Rank \* fDispFactionRankMult))</span> |
| **Criminal Status**                                            |                                                                    | <span style="font-size:0.8rem">Crime Level \* fCrimeDispMod</span>                                                                       |
| **Diseased**                                                   | \-10                                                               | <span style="font-size:0.8rem">fDispDiseasedMod</span>                                                                                   |
| **Attack NPC**                                                 | \-20                                                               | <span style="font-size:0.8rem">iDispAttackMod</span>                                                                                     |
| **Bargain**                                                    | &#49;                                                              | <span style="font-size:0.8rem">iDispBargainSuccMod</span>                                                                                |
| **Failed Offer**                                               | \-1                                                                | <span style="font-size:0.8rem">iDispBargainFailMod</span>                                                                                |
| **Stealing**                                                   | \-1 \* Item Value                                                  | <span style="font-size:0.8rem">fDispStealing \* Item Value</span>                                                                        |
| **Pick Pocketing**                                             | \-25                                                               | <span style="font-size:0.8rem">iDispPickPocketMod</span>                                                                                 |
| **Trespassing**                                                | \-20                                                               | <span style="font-size:0.8rem">iDispTresspass</span>                                                                                     |
| **Taunting**                                                   | From Persuasion Formula                                            |                                                                                                                                          |
| **Intimidation**                                               | From Persuasion Formula                                            |                                                                                                                                          |
| **Bribery**                                                    | From Persuasion Formula                                            |                                                                                                                                          |
