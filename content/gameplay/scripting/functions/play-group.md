---
title: PlayGroup
aliases:
  - PlayGroup
description: Plays the animation group defined by GroupName.
---
PlayGroup GroupName, \[flags\]  
PlayGroup Walk  
PlayGroup Walk, 1  

Plays the animation group defined by GroupName. Optional flags can be used to start the group in different ways.

## Flags
_0 = Normal_  
The current animation will finish it’s full cycle, and the new animation will start from its beginning.  

_1 = Immediate Start_  
The current animation will stop regardless of the frame it is on, and the new animation will start from its beginning.  

_2 = Immediate Loop_  
The current animation will stop regardless of the frame it is on, and the new animation will start at the beginning of its loop cycle.  

### See Also  
[[loop-group|LoopGroup]] GroupName, Number, \[Flags\]  
[[skip-anim|SkipAnim]]  
