---
title: Object Referencing
aliases:
  - Object Referencing
  - objectID
description: Other object Ids can be used in scripting to set and get the values of local variables from other objects in the world. You can also run functions on these object references.
---
Other object Ids can be used in scripting to set and get the values of local variables from other objects in the world. You can also run functions on these object references.

There are two forms of object references:

`Set MyObject.variable to 100`  
<span style="margin-left:2rem; display:block">This method changes a local variable in the object’s script. The object must have a script on it for this to be valid.</span>

`MyObject->rotate, z, 45`
<span style="margin-left:2rem; display:block">This method tells the object to perform a function. The object does not need to have a script on it.</span>

&nbsp; &nbsp; &nbsp; &nbsp; You can also use this method in an if statement:  
&nbsp; &nbsp; &nbsp; &nbsp; `If ( MyObject->GetHealth > 50 )`

You can also reference scripts (very useful for changing global script variables).

NOTE: The scripting system looks at the _first_ object in the database, thus you should only reference objects that are somewhat unique.

NOTE: You can only use ONE object reference per script line.
