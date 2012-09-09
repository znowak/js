## Remarks

### BEFORE LOOKING AT MY SOLUTION, TRY TO MAKE CHANGES TO YOUR CODE BASED ON THE FOLLOWING REMARKS. AFTER YOU'VE MADE THE CHANGES, LOOK AT HOW I'VE DONE IT.

- doctype is not html5. use `<!DOCTYPE html>` as the first line of your HTML file. it's a good practice to embrace html5. it's very useful and powerful.
- your function name doesn't make any sense. always write self documenting code or document code whenever possible. a good name for the function in your case would be `updateTextFieldFrom('select-menu-id')`. this makes more sense and needs no further documentation explaining it's purpose.
- default values of the `textbox` and `select` menu are not blank. pay attention to the instructions.
- indent code with 2 spaces and don't ever use tabs. use `smart-tabs`.
- the function that you've written is a global function. you should never write global functions. it will become a problem to debug code and scale. it is too early to talk about it, so will give it some time and practice before we start considering memory handling and optimization.
- also, there is no fallback when no id is passed to your function. it simply breaks. [http://i.imgur.com/WCZBG.png](http://i.imgur.com/WCZBG.png)
- one last thing, handling events from the element itself is not a great idea. it is a better practice to delegate the events. the advantage is you can add multiple event handlers this way.