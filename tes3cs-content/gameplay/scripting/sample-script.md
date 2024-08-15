---
title: Sample Script
aliases:
  - Sample Script
description:
---
```mwscript
Begin TestScript

; comments are placed in using a semicolon

short var1   ;comments can also be placed at end of lines

if (MenuMode == 0)

	if (GetPlayerDistance \> 200 )
	
		PlaySound ( TestSound )

	endif

endif

End TestScript
```
