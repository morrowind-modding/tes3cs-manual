# 

&nbsp;

**Function**

Lists all the special dialogue functions you can use. Very similar to script commands, but there are many unique ones. [**Full List**](<DialogueFunctions.md>).

&nbsp;

**Global**

This lists all the global variables. You can test against the value of any global variable. Note that the results may not be what you expect if this global can be changed while you are in dialogue. To avoid this for scripted variables, do not change the value when MenuMode == 1.

&nbsp;

**Local**

This lists all the local variables. You can test for any variable, but if the speaker does not have a script or their script does not contain the variable you specify, this will return 0.

&nbsp;

**Journal**

This returns the highest index that has ever been set for a particular journal. You can make Journals and set the index numbers in the Journal tab of dialogue. You set the index (and add it to the player's in-game journal) with the Journal script command. See Script Functions.

&nbsp;

**Item**

This returns the number of any item that the player has in his or her inventory. You can test for any item in the game that can be carried.

&nbsp;

**Dead**

This returns the number of any NPC or Creature ID that is dead. For instance, you can test if the unique individual "Bob Smith" is dead or you can check to see if the player has killed more than 30 Scamps. Two things should be kept in mind. First, it is safest (with most functions) to test \> 0 instead of = 1 since someone can make a plugin with two of "Bob Smith." Second, if you kill 10 generic "scamps" and also "Creeper" (who is a scamp, but with a different ID), testing "Dead Scamp" will return 10, not 11.

&nbsp;

**Not ID**

This is true if the speaker is not this particular ID. For all of these except Not Local, it does not matter what you set it equal to. "Not ID Scamp = 0" is the same as "Not ID Scamp = 1."

&nbsp;

**Not Faction**

This is true if the speaker is not in this faction.

&nbsp;

**Not Class**

This is true if the speaker is not of this class.

&nbsp;

**Not Race**

This is true if the speaker is not of this race.

&nbsp;

**Not Cell**

This is true if the player is not in this cell. Note that this function takes the most time to calculate and can slow the dialogue responses down if you use several of them in the same topic.

&nbsp;

**Not Local**

This is true if the speaker does not have this local variable. Unlike most "Not" functions, this one does care what you set the variable to. Both the dialogue and the variable itself should be set to 0. This can be confusing. Here is a table of how this works:

&nbsp;

| Not Local | Variable Exists | Value | Pass? |
| --- | --- | --- | --- |
| (in dialogue) | (y/n) | (in the script) | (speaker will say this) |
| \= 0 | No | NA | Yes |
| \= 0 | Yes | &#48; | No |
| \= 0 | Yes | &#53; | Yes |
| \= 1 | No | NA | Yes |
| \= -3 | Yes | \-3 | No |


&nbsp;

&nbsp;


***
_Created with the Personal Edition of HelpNDoc: [Why Microsoft Word Isn't Cut Out for Documentation: The Benefits of a Help Authoring Tool](<https://www.helpndoc.com/news-and-articles/2022-09-27-why-use-a-help-authoring-tool-instead-of-microsoft-word-to-produce-high-quality-documentation/>)_
