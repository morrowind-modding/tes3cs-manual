---
title: Alarm
aliases:
  - Alarm
  - Alarm & Crimes
description: When a crime is committed, and it is detected by an NPC, they will shout something at the player, this also notifies other NPCs in the area.
---
## Alarm & Crimes

When a crime is committed, and it is detected by an NPC, they will shout something at the player, this also notifies other NPCs in the area.

When the NPCs hear this, they adjust their settings based on their alarm setting. The higher the alarm setting, the angrier they will get.

If an NPC has an alarm of 100, &nbsp; he will put gold on the PC’s head if they hear of a crime.

| <span style="color:red;font-size:1.2rem;">PC Crime</span>** | **<span style="color:red;font-size:1.2rem;">Gold</span>** | **<span style="color:red;font-size:1.2rem;">Game Setting Formula</span>** |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Attack NPC**                                              | 40                                                        | <span style="font-size:0.8rem">IcrimeAttack</span>                        |
| **Killing**                                                 | 1000                                                      | <span style="font-size:0.8rem">IcrimeKilling</span>                       |
| **Stealing**                                                | 1                                                         | <span style="font-size:0.8rem">fCrimeStealing \* Item Value</span>        |
| **Pick Pocketing**                                          | 25                                                        | <span style="font-size:0.8rem">IcrimePickPocket</span>                    |
| **Trespassing**                                             | 5                                                         | <span style="font-size:0.8rem">IcrimeTresspass</span>                     |
| **Taunting**                                                | 5                                                         | <span style="font-size:0.8rem">IcrimeTaunt</span>                         |
| **Intimidation**                                            | 5                                                         | <span style="font-size:0.8rem">IcrimeIntimidate</span>                    |

If the NPC with alarm 100 is also of class “Guard”, they will have extra behavior:  
- Intercept the PC, by running up and arresting the PC.
- If the PC’s CrimeLevel is over 10000, they will attack on site, instead of initiating dialogue.
- Guards will also attack any creatures they can see that are attacking people (including the PC).
