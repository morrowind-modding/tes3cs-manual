---
title: Commands
aliases:
  - Commands
  - Script Commands
description:
---
## Script Commands

[[begin]] &nbsp; &nbsp; ScriptName  
[end](<End.md>) &nbsp; &nbsp; &nbsp; &nbsp; ScriptName  

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

set [objectID](<ObjectReferencing.md>).varName to 100  
[objectID](<ObjectReferencing.md>) -\>rotate, z, 45  

### See Also
[Using Variables in Functions](<UsingVariablesinFunctions.md>)  
