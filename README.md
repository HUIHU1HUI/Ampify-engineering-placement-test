# Ampify-engineering-placement-tasks

Technical tests for Ampify's engineering placement.

C++ calculator:
Things I changed:
- Added division functionality
- Added Pi as a constant.  The user can now type "pi" instead of typing it manually
- Input formatting so that spaces and upper/lower case are emitted, ensuring the calculator understands any way the user types the calculation.  For example typing "pi*4" and "PI * 4" are both understood as the same.

Make sure to compile using C++17[-std=c++17] or GNU++17[-std=GNU++17]
The compiled command line app and xcode project file are included.

Web API Parsing test:
A simple web json parsing script written in javascript.

- Fetches the contents of https://api.ampifymusic.com/packs 
- Sorts the response and lists genres alphabetically with no duplicates to the console
- Prints a list of packs with genre matching hip-hop
- Saves the contents of https://api.ampifymusic.com/packs to the directory

To run, simply navigate to the folder in terminal and run "node server"
Requires node.js 
