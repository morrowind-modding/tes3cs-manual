---
title: Declaring Variables
aliases:
  - Declaring Variables
  - short
  - long
  - float
description: You can declare three types of variables through scripts and as global variables.
---
You can declare three types of variables through scripts and as global variables.

short &nbsp; &nbsp; &nbsp; &nbsp; -32,768 to 32,767  
long &nbsp; &nbsp; &nbsp; &nbsp; -2,147,483,648 to 2,147,483,647  
float &nbsp; &nbsp; &nbsp; &nbsp; 3.4E +/- 38 (7 digits)  

## Reserved variables for companions  
_short &nbsp; &nbsp; stayOutside_  
When this value is 1 the followers in the PC’s group will wait outside the interiors for him to come back out.

_short &nbsp; &nbsp; companion_  
When this value is 1 you will be given a companion inventory menu selected by dialogue. If the creature doesn’t talk, he is alive, and you activate him you will be taken directly to the companion inventory menu.

_float &nbsp; &nbsp; minimumprofit_  
This is how much of the PC’s stuff this bounty hunter is carrying. The value gets modified every time an item is dropped on or removed from the companion inventory menu.
