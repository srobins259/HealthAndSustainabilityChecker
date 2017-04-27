# [GHData](https://github.com/OSSHealth/ghdata) Visualizer

License and Copyright
---------------------

Copyright © 2017 Spencer Robinson & Robert Morrissey

We are building an advanced front end functionality to [GHData](https://github.com/OSSHealth/ghdata).  All used content is free software: you can redistribute it and/or modify it under the terms of the MIT License as published by the Open Source Initiative. See the file LICENSE for more details.

All associated documentation is licensed under the terms of the Creative Commons Attribution Share-Alike 4.0 license.

CONTRIBUTOR AGREEMENT
---------------------

We are in the very early stages of development so we are not enrolling any new collaborators at this point.

Development Environment
------------
- This software is developed on Mac(need macOS Sierra v. 10.12.3), Asus(need Windows 10), and P.C.(need Windows 10) environments using the Atom text Editor(need version 1.15.0)
- Python 3.4.X
- MySQL 5.X or later version
- [GHTorrent](http://ghtorrent.org/downloads.html) in database


Our tool will utilize the  [GHTorrent](http://ghtorrent.org/downloads.html) database. This is the current database that GHData uses, and the schema can be viewed [here](http://ghtorrent.org/relational.html).

INSTALLATION
----------
0. Set up the msr14 database on your machine. It can be found here: http://ghtorrent.org/msr14.html
1. Go to terminal.
2. (Type steps 3-6 in terminal.)
3. git clone https://github.com/OSSHealth/ghdata.git
4. cd ghdata
5. pip3 install --update .
6. ghdata
7. *Setup config file*
8. (Type the steps 9 & 10 in terminal.)
9. ghdata
10. git clone https://github.com/srobins259/InternetSystemsDevelopment.git
11. replace the ghdata static folder with our static folder.
12. In your browser, go to localhost:5000/ and you will be taken to the graphic interface.



System Description
-----
The GHData Visualizer is a front-end tool made to give an interface to the GHData project, the GHData project is a project that provides data related to GitHub repositories.

Our tool allows the user to input a repository name and the owner name for the repository, and graphs are developed for metrics made by the GHData project.  These metrics show the "health" of a repository, these are called OSS Health Indicators.  OSS Health Indicators are metrics about the health and sustainability of open source projects.  All metrics are value free, but a user may derive value from the metrics displayed on the GHData Visualizer project.

With seeing the metrics in the form of graphs, the user may also label the metrics for a visual representation on the metric being a "Good" metric, "Neutral" metric, or a "Bad" metric. This is done by a form being created with displaying the choices for these options and making the graphs visually represented with a colorized background.

Below are visual examples on how our tool works:

![](Images/ISDwebDesign.png?raw=true)

DFD Description of GHData Visualizer
---------------------------------------
As shown in the diagram below, the user will submit a repo address to the tool, which will format it in a way that will pass well to GHData.

Using GHData, it will obtain the repository statistics and pass the data to a DJango controller. The controller will format the data in a way that can populate the graphs and push it to the view.

The user will then be able to see the statistics formatted into graphs, tables, and the ratings systems.

![](Images/dataflow.jpg?raw=true)
