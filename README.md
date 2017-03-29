# [GHData](https://github.com/OSSHealth/ghdata) Visualizer

License and Copyright
---------------------

Copyright © 2017 Spencer Robinson & Robert Morrissey

We are building an advanced front end functionality to [GHData](https://github.com/OSSHealth/ghdata).  All used content is free software: you can redistribute it and/or modify it under the terms of the MIT License as published by the Open Source Initiative. See the file LICENSE for more details.

All associated documentation is licensed under the terms of the Creative Commons Attribution Share-Alike 4.0 license.

CONTRIBUTOR AGREEMENT
---------------------

We are in the very early stages of development so we are not enrolling any new collaborators at this point.

Dependencies
------------
- This software is developed on Mac(need macOS Sierra v. 10.12.3), Asus(need Windows 10), and P.C.(need Windows 10) environments using the Atom text Editor(need version 1.15.0)
- Python 3.4.X
- MySQL 5.X or later version
- [GHTorrent](http://ghtorrent.org/downloads.html) in database


Our tool will utilize the  [GHTorrent](http://ghtorrent.org/downloads.html) database. This is the current database that GHData uses, and the schema can be viewed below:

![](Images/ghtorrent_database_schema.png?raw=true)

Development Environment
------------
- Bootstrap
- DJango 1.10.X
- Chart.js

System Description
-----
Below is a diagram showing a mockup UI for the GHData front-end. Users will enter a repo into the form, and the tool will access GHData to get possible analytics metrics. In this first iteration, the form will have preset metric positivity and negativity in order to establish a basic "score" for the repo.

The tool will generate a time graph for metrics that need to be tracked over time. For more simple metrics, it will simply list them at the bottom in more of a table form. We will include a user review option at the bottom so that open source professionals can provide feedback on repos that they have used.

After this functionality has been built successfully, we will develop a form that allows users to choose different metrics for positive or negative columns and allow them to personalize the connotation each metric has. Finally, we will work to analyze the changes that will be made to GHData in the future to make it so that the form will update to include newly available metrics as they are added to GHData.

![](Images/GHDataVisualizerConcept.jpg?raw=true)

DFD Description of GHData Visualizer
---------------------------------------
As shown in the diagram below, the user will submit a repo address to the tool, which will format it in a way that will pass well to GHData.

Using GHData, it will obtain the repository statistics and pass the data to a DJango controller. The controller will format the data in a way that can populate the graphs and push it to the view.

The user will then be able to see the statistics formatted into graphs, tables, and the ratings systems.

![](Images/dataflow.jpg?raw=true)
