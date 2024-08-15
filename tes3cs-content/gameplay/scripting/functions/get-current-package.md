---
title: GetCurrentPackage
aliases:
  - GetCurrentAIPackage
description: Used for checking the current AI package an Actor is performing.
---
GetCurrentPackage

If ( GetCurrentPackage == 2 )  
endif  
<br>

Used for checking the current [[actors/ai/packages/index|AI package]] an [[actors/index|Actor]] is performing.

The return values are:

&nbsp; &nbsp; &nbsp; `None = -1`  
&nbsp; &nbsp; &nbsp; `Wander = 0`  
&nbsp; &nbsp; &nbsp; `Travel = 1`  
&nbsp; &nbsp; &nbsp; `Escort = 2`  
&nbsp; &nbsp; &nbsp; `Follow = 3`  
&nbsp; &nbsp; &nbsp; `Activate = 4`  
&nbsp; &nbsp; &nbsp; `Pursue = 5`  
