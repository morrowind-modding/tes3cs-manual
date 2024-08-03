---
title: Fight
aliases:
  - Fight
description: An actors fight setting determines how prone the actor is to attacking the PC.
---
An actors fight setting determines how prone the actor is to attacking the PC. When an actor’s fight setting hits 100, they will attack the PC.

Player actions will increase (or decrease) an actor’s fight setting. These are:

| **<span style="color:red;font-size:1.2rem;">PC Action</span>** | **<span style="color:red;font-size:1.2rem;">Default Value</span>** | **<span style="color:red;font-size:1.2rem;">Game Setting Formula</span>**            |
| -------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| **PC Distance**                                                | &#50;0 - (Char Distance \* 0.005)                                  | <span style="font-size:0.8rem">iFightDistanceBase - (Char Distance \* fFightD</span> |
| **Attack Actor**                                               | &#49;00                                                            | <span style="font-size:0.8rem">iFightAttack</span>                                   |
| **Disposition**                                                | ( 50 - Disposition )\*1                                            | <span style="font-size:0.8rem">(50 - Disposition) \* fFightDispMult</span>           |
| **Stealing**                                                   | &#53; \* Item Value                                                | <span style="font-size:0.8rem">fAlarmSt \* Item Value</span>                         |
| **Pick Pocketing**                                             | &#50;5                                                             | <span style="font-size:0.8rem">iAlarmPickPocket</span>                               |
| **Trespassing**                                                | &#50;5                                                             | <span style="font-size:0.8rem">iAlarmTresspass</span>                                |
| **Taunting**                                                   | From Persuasion Formula                                            |                                                                                      |
| **Intimidation**                                               | From Persuasion Formula                                            |                                                                                      |
| **Bribery**                                                    | From Persuasion Formula                                            |                                                                                      |

The following table gives you the following general behavior:

> [!Note|clean no-t n-th]
> | Value | Details |
> | :---: | --- |
> | **100** | <span style="font-size:0.8rem">Always Attacks</span> |
> | **95** | <span style="font-size:0.8rem">Will Attack as PC gets close (3000 units)</span> |
> | **90** | <span style="font-size:0.8rem">Will Attack as PC gets close (2000 units)</span> |
> | **80** | <span style="font-size:0.8rem">Will Attack as PC gets close or if he dislikes you (1000 units, 40 Disp)</span> |
> | **70** | <span style="font-size:0.8rem">Will Attack if close and strong dislike (1000 units, 35 disp)</span> |
> | **60** | <span style="font-size:0.8rem">Will Attack if he dislikes you and you get close (Disp below 30)</span> |
> | **50** | <span style="font-size:0.8rem">Will Attack if he hates you (Disp at 0)</span> |
> | **40** | <span style="font-size:0.8rem">Will attack if he dislikes you, and you get close. (500 Units, Disp 10)</span> |
> | **30** | <span style="font-size:0.8rem">Will Attack if hates you and you commit crime.</span> |
> | **20** | <span style="font-size:0.8rem">Will Attack if dislikes you and multiple crimes.</span> |
> | **10** | <span style="font-size:0.8rem">Will attack if he hates you and you do multiple crimes on him.</span> |
> | **0** | <span style="font-size:0.8rem">Will ONLY attack if attacked first.</span> |

