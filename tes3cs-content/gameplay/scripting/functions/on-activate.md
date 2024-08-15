---
title: OnActivate
aliases:
  - OnActivate
description: This function returns TRUE if the calling object has been activated.
---
OnActivate  
If ( OnActivate == 1)

This function returns TRUE if the calling object has been activated. If you use this function in a script, it _overrides_ the objects default activation. The system assumes you will be filling in the code to make the object do what you want it to do.

To use the default object’s activation you must call [[gameplay/scripting/functions/activate|activate]] on it.

Note that the [[activator]] type of object has NO default activation.
