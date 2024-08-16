---
title: Commands
aliases:
  - Commands
  - Script Commands
description: An overview of script commands used in The Elder Scrolls Construction Set
---
## Script Commands

[[begin]] &nbsp; &nbsp; ScriptName  
[end](end.md) &nbsp; &nbsp; &nbsp; &nbsp; ScriptName  

; comment

[[declaring-variables|short]] &nbsp; &nbsp; varNameShort  
[[declaring-variables|long]] &nbsp; &nbsp; varNameLong  
[[declaring-variables|float]] &nbsp; &nbsp; varNameFloat  

set varName to 5  
get varName

while ( varName \<= 3 )  
endwhile  

if ( varName \> 100 )  
elseif ( varName \< 20 )  
else  
endif  

if ( varName == x )  
if ( varName \!= x )  
if ( varName \>= x )  
if ( varName \<= x )  

set [[object-referencing|objectID]].varName to 100  
[[object-referencing|objectID]] -\>rotate, z, 45  

### See Also
[[using-variables-in-functions|Using Variables in Functions]]  
