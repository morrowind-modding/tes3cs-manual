# 

&nbsp;

Other object Ids can be used in scripting to set and get the values of local variables from other objects in the world. You can also run functions on these object references.

&nbsp;

There are two forms of object references:

&nbsp;

Set MyObject.variable to 100

This method changes a local variable in the object’s script. The object must have a script on it for this to be valid.

&nbsp;

MyObject-\>rotate, z, 45

This method tells the object to perform a function. The object does not need to have a script on it.

&nbsp;

You can also use this method in an if statement:

If ( MyObject-\>GetHealth \> 50 )

&nbsp;

You can also reference scripts (very useful for changing global script variables).&nbsp;

&nbsp;

NOTE: The scripting system looks at the *first* object in the database, thus you should only reference objects that are somewhat unique.

&nbsp;

NOTE: You can only use ONE object reference per script line.

&nbsp;


***
_Created with the Personal Edition of HelpNDoc: [Make Help Documentation a Breeze with a Help Authoring Tool](<https://www.helpauthoringsoftware.com/articles/what-is-a-help-authoring-tool/>)_
