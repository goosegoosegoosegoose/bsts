# What I did
- Binary tree insert/search/traversal

# Concerns
- doing something recursively means I have to add parameters right? To pass in the new "root" node?
- for findRecursively, the equality conditional does not fire despite me quadruple checking that current.val and val are both 20 in the test, even right before conditional should fire.
  - I tried just regular == equality but no go
  - It seems like the problem is that current.val rather than val does not equal 20, because it didn't fire when i set current.val === 20
    - Console.log represents it as 20 though? Confused.


# Notes for self
- I find myself just throwing stuff at the wall til I find what sticks
  - stack vs queue, recursive vs not
    - have to remember b(reath)fs uses queue(array.shift) and d(epth)fs uses stack(array.pop)
- I think I understand it conceptually, but sometimes have a hard time picturing it in my head while I'm doing it.
- Hope it'll improve as I do more.