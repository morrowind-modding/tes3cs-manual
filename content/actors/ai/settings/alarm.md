---
title: Alarm
aliases:
  - Alarm
  - Alarm & Crimes
description: When a crime is committed, and it is detected by an NPC, they will shout something at the player, this also notifies other NPCs in the area.
---
When a crime is committed, and it is detected by an NPC, they will shout something at the player, this also notifies other NPCs in the area.

When the NPCs hear this, they adjust their settings based on their alarm setting. The higher the alarm setting, the angrier they will get.

If an NPC has an alarm of 100, &nbsp; he will put gold on the PC’s head if they hear of a crime.

| **<span style="color:red">PC Crime</span>** | **<span style="color:red">Gold</span>** | **<span style="color:red">Game Setting Formula</span>** |
| ------------------------------------------- | --------------------------------------- | ------------------------------------------------------- |
| **Attack NPC**                              | 40                                      | IcrimeAttack                                            |
| **Killing**                                 | 1000                                    | IcrimeKilling                                           |
| **Stealing**                                | 1                                       | fCrimeStealing \* Item Value                            |
| **Pick Pocketing**                          | 25                                      | IcrimePickPocket                                        |
| **Trespassing**                             | 5                                       | IcrimeTresspass                                         |
| **Taunting**                                | 5                                       | IcrimeTaunt                                             |
| **Intimidation**                            | 5                                       | IcrimeIntimidate                                        |

If the NPC with alarm 100 is also of class “Guard”, they will have extra behavior:  
- Intercept the PC, by running up and arresting the PC.
- If the PC’s CrimeLevel is over 10000, they will attack on site, instead of initiating dialogue.
- Guards will also attack any creatures they can see that are attacking people (including the PC).
