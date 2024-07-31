# 

An actors fight setting determines how prone the actor is to attacking the PC. When an actor’s fight setting hits 100, they will attack the PC.

&nbsp;

Player actions will increase (or decrease) an actor’s fight setting. These are:

&nbsp;

| **PC Action** | **Default Value** | **Game Setting Formula**  |
| --- | --- | --- |
| **PC Distance** | &#50;0 - (Char Distance \* 0.005) | iFightDistanceBase - (Char Distance \* fFightDistMult) |
| **Attack Actor** | &#49;00 | iFightAttack |
| **Disposition** | ( 50 - Disposition )\*1 | (50 - Disposition) \* fFightDispMult |
| **Stealing** | &#53; \* Item Value | fAlarmStealing \* Item Value |
| **Pick Pocketing** | &#50;5 | iAlarmPickPocket |
| **Trespassing** | &#50;5 | iAlarmTresspass |
| **Taunting** | From Persuasion Formula |   |
| **Intimidation** | From Persuasion Formula |  |
| **Bribery** | From Persuasion Formula |   |
|  |  |  |


&nbsp;

&nbsp;

The following table gives you the following general behavior:

&nbsp;

| **&#49;00** | Always Attacks |
| :---: | --- |
| **&#57;5** | Will Attack as PC gets close (3000 units) |
| **&#57;0** | Will Attack as PC gets close (2000 units) |
| **&#56;0** | Will Attack as PC gets close or if he dislikes you (1000 units, 40 Disp) |
| **&#55;0** | Will Attack if close and strong dislike (1000 units, 35 disp) |
| **&#54;0** | Will Attack if he dislikes you and you get close (Disp below 30) |
| **&#53;0** | Will Attack if he hates you (Disp at 0) |
| **&#52;0** | Will attack if he dislikes you, and you get close. (500 Units, Disp 10) |
| **&#51;0** | Will Attack if hates you and you commit crime. |
| **&#50;0** | Will Attack if dislikes you and multiple crimes. |
| **&#49;0** | Will attack if he hates you and you do multiple crimes on him. |
| **&#48;** | Will ONLY attack if attacked first. |


&nbsp;


***
_Created with the Personal Edition of HelpNDoc: [Effortlessly Publish Your Word Document as an eBook](<https://www.helpndoc.com/step-by-step-guides/how-to-convert-a-word-docx-file-to-an-epub-or-kindle-ebook/>)_
