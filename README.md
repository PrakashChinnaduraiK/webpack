# webpack

Historically when building a javascript application, your javascript code would be separated by files and these files may or may not have been actual modules, then inside of your index.html file you have to include script tags to every javascript file you had.  Issues(forgetting to include a file, the order of these script tags mattered). 

Webpack intelligently creates a bundle for you, both of those problems go away. Don't have to worry about forgetting a script tag and don't have to worry about the order.

Webpack is a module bundler, it examines all of the modules in your application, create a dependency graph and then intelligently puts all of them together into one or more bundles . 
