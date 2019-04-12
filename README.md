# Starter-Files-Gulp4
My absolute minimal gulp 4 starter files.

These are my basic starter files for Gulp. I usually make edits to these based on my project, but in general this is what I start with.

Based by task:

// CSS

Compiles sass using dart-sass.
Run autoprifixer - default last 3 browsers, but you can change this based on requirements
Run cssnano to minify
Make a sourcemap so that people can figure out whats going on.


// LINT

This is a general javascript linter. I'm sloppy with my js, so this helps me keep things in line a tiny bit.


// SCRIPTS

Build JS - this will generally change based on what libraries are being used, etc.  Self-Explanatory.
Grabs source files
Concatenates source files
Renames and minifies



// HTML
So, this is something I need to look into upgrading.  TBH, I have not actually run into a need yet.  

I currently use the .kit extension. I realize I can get a lot more power templating engine - and will look into it at some point - but generally, for a majority of my projects, all I really need is what the .kit engine gives me:

Create / Pass along variables
Create / Pass along includes


// COPY

A few "copy" tasks

copyStatic - moves files from "static" directory.  These are usually static assets - and they get moved into an "assets" directory in /site
copyBase = moves base files over.  These files are ones that stay in the root directory.  (robots.txt, favicons, etc)


// LIVERELOAD IN WATCH

Livereload will update for all the tasks it needs to. I use the LiveReload plugin for Chrome but there are other extensions you can use:

http://livereload.com/extensions/

// OTHER

Not much else going on here. I'll update these files whenever necessary.