# 

Disposition is how an NPC feels about you on a scale from 0 to 100.

&nbsp;

Things that effect disposition are:

| **PC Action** | **Default Value** | **Game Setting Formula**  |
| --- | --- | --- |
| **Same Race** | &#53; | iDispRaceMod |
| **Personality** | &#48;.5 \* (AttPer - 50) | fDispPerMult \* (AttPer - iDispPerBase) |
| **Faction Reaction** | (FactionReaction \* 5) \* (0.5 + (Rank \* 0.5)) | ( Faction Reaction \* fDispFactionMod ) \* (fDispFactionRankBase + (Rank \* fDispFactionRankMult)) |
| **Criminal Status** |   | Crime Level \* fCrimeDispMod |
| **Diseased** | \-10 | fDispDiseasedMod |
| **Attack NPC** | \-20 | iDispAttackMod |
| **Bargain** | &#49; | iDispBargainSuccMod |
| **Failed Offer** | \-1 | iDispBargainFailMod |
| **Stealing** | \-1 \* Item Value | fDispStealing \* Item Value |
| **Pick Pocketing** | \-25 | iDispPickPocketMod |
| **Trespassing** | \-20 | iDispTresspass |
| **Taunting** | From Persuasion Formula |   |
| **Intimidation** | From Persuasion Formula |   |
| **Bribery** | From Persuasion Formula |   |
|   |   |   |


&nbsp;

&nbsp;

&nbsp;


***
_Created with the Personal Edition of HelpNDoc: [Save time and frustration with HelpNDoc's WinHelp HLP to CHM conversion feature](<https://www.helpndoc.com/step-by-step-guides/how-to-convert-a-hlp-winhelp-help-file-to-a-chm-html-help-help-file/>)_
