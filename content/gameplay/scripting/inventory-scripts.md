---
title: Inventory Scripts
aliases:
  - Inventory Scripts
description: Certain inventory activities can be checked through scripts using local variables.
---
Certain inventory activities can be checked through scripts using local variables. These local variables are automatically set when the pc does the action. They are NOT functions, but variables that are true or false.

OnPCEquip &nbsp; &nbsp; &nbsp; &nbsp; The PC has the object equipped (remains true while object is equipped)  
OnPCAdd &nbsp; &nbsp; &nbsp; &nbsp; The PC added the object to inventory  
OnPCDrop &nbsp; &nbsp; &nbsp; &nbsp; The PC dropped the object  
OnPCRepair &nbsp; &nbsp; &nbsp; &nbsp; The PC repairs the object  
OnPCSoulGemUse &nbsp; &nbsp; the Object is a soulgem and it has been used in either recharging or itemmaking  
PCSkipEquip &nbsp; &nbsp; &nbsp; &nbsp; Set this to 1 to skip equipping object. Good for popping up messages for breaking seals on books and such.  

Example script in a sword that gives a message when equipped


```mwscript
Begin MyScript

Short OnPCEquip

If ( OnPCEquip == 1)
	MessageBox “ You hear the sword in your mind: ‘Feed me the souls of the living’ ”
	Set OnPCEquip to 0

endif

End MyScript
```
