# GHData Visualizer

License and Copyright
---------------------

Copyright © 2017 Spencer Robinson & Robert Morrissey

We are building an advanced front end functionality to GHData.  All used content is free software: you can redistribute it and/or modify it under the terms of the MIT License as published by the Open Source Initiative. See the file LICENSE for more details.

CONTRIBUTOR AGREEMENT
---------------------

We are in the very early stages of development so we are not enrolling any new collaborators at this point.

Dependencies/Development Environment
------------
- This software is developed on Mac, Asus, and P.C. environments using the Atom text Editor
- Chart.js
- Python 3.4.X
- MySQL 5.X or later version
- GHTorrent in database
- Bootstrap
- DJango 1.10.X

Our Databse schema will be based on the GHTorrent database, and will follow that format unless we implement a user system for the purpose of saving ratings. This would only require the use of a basic users table.

Usage
-----
Below is a diagram showing a mockup UI for the GHData front-end. Users will enter a repo into the form, and the tool will access GHData to get possible analytics metrics. In this first iteration, the form will have preset metric positivity and negativity in order to establish a basic "score" for the repo.

The tool will generate a time graph for metrics that need to be tracked over time. For more simple metrics, it will simply list them at the bottom in more of a table form. We will include a user review option at the bottom so that open source proffesionals can provide feedback on repos that they have used.

After this functionality has been built successfully, we will develop a form that allows users to choose different metrics for positive or negative columns and allow them to personalize the connotation each metric has. Finally, we will work to analyze the changes that will be made to GHData in the future to make it so that the form will update to include newly available metrics as they are added to GHData.

![](ConceptImages/GHDataVisualizerConcept.jpg?raw=true)

DFD Description of GHData Visualizer
---------------------------------------

![](ConceptImages/flowchart1.jpg?raw=true)
