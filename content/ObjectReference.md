# 

&nbsp;

Any object placed in the world is known as a *reference.* This is because it references an object in the object database (object window). So an *object* is an ID in the database, and a *reference* is a copy of that object. If the object is changed, all it’s references are also changed. A reference can also have it’s own unique data:

&nbsp;

**Editing Reference Data**

Some objects include reference data, which appears in the bottom half of the object properties window.&nbsp; Editing this information will affect only the selected reference(s); other references of that object will not be changed.&nbsp; There are five types of reference data:

&nbsp;

**Position**:&nbsp; the reference’s position and orientation in the world.

&nbsp;

**&#51;D Scale**:&nbsp; The size of the object reference.&nbsp; Objects can be scaled from 50% (0.5) to 200% (2.0) of their normal size.

&nbsp;

**Extra Data**

*Health / Uses:* Used for objects such as weapons and armor that have health and objects such as lockpicks and probes which have uses. Used for creating damaged or used references.

&nbsp;

*Soul:* Only used for the misc Soul-Gems. Select a creature to place in the soul-gem reference.

&nbsp;

*Apply to Selection:* Applies the Extra Data settings to **all** references currently selected.&nbsp; This is a quick way to assign ownership to all objects in a cell.

&nbsp;

&nbsp;

[**Ownership**](<Ownership.md>)

*Owner:* Set which NPC or Faction owns the selected object.

&nbsp;

*Global Variable/Rank:* Select the global variable or rank (if the owner is a faction) that allows the PC to use this object without committing a crime.

&nbsp;

*Apply to All Selected*: Applies the ownership data and variable to all the selected objects. Very good for shops or guilds where many objects need ownership.

&nbsp;

&nbsp;

**Locked**

Locks a container or doors.

**&nbsp;**

*Lock Level*: The Difficulty rating on the lock for trying to pick it with a [lockpick](<Lockpick.md>). Should use values of 1 to 100. 1 is the easiest, while 100 is super-hard (the player would need a security skill of around 100).

&nbsp;

*Key:* The item that can be used to open the container. Select from list of all [Misc Items](<MiscItem.md>).

&nbsp;

*Trap:* A trap that will go off when the container is opened. You can select from the list of available spells that have touch based effects.

&nbsp;

&nbsp;

**Teleport**

Used only on doors, this sets the door to teleport the user to a new map or area.

&nbsp;

*Load Cell*: Select the cell that the door will teleport you to.

&nbsp;

*Select Marker:* Selects the marker in the new cell so it can be placed.

&nbsp;

Note that any options not available for a particular reference will be grayed out.


***
_Created with the Personal Edition of HelpNDoc: [Don't be left in the past: convert your WinHelp HLP help files to CHM with HelpNDoc](<https://www.helpndoc.com/step-by-step-guides/how-to-convert-a-hlp-winhelp-help-file-to-a-chm-html-help-help-file/>)_
