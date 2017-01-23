#Inthebones
A mobile first, lightweight and responsive grid system.

##Introduction
Inthebones is a six column grid system. It's main goal is to offer an easy and lightweight alternative to many other grid systems out there that maybe are part of a bigger framework and require more customization or incorporates more functionalities that you don't really need. If you are working on a small or personal project with a simple structure and you just want a lightweight grid system to start playing with, this might be your library. 

##Customization
The source code of this library has been written with SASS, so you can download it and use just the components that you need. All the configurations parameters has been defined in the source file 
```_variables.scss
``` that could be found inside the scss folder of the library.

Feel free to modify any parameter that you need to adjust it to your necessities. For example you can change the default column gutter for every device just by modifying the value of the following variables:

```
$mobile-column-gutter: 5px;
$tablet-column-gutter: 8px;
$desktop-column-gutter: 12px;
$large-column-gutter: 16px;
```

Once you have modified it, just run the default task defined in the ```gruntfile.js
``` file to rebuild the two final files that will be located in the dist folder of the library.

##Use guide
As said before, inthebones offers you the possibility to divide your content into 6 responsive columns. In order to make sure that the content that is inside of every column is displayed properly on every device, the columns will rezize its own size atomatically. So for example, a column that only gets the last 4 spaces of the row in a desktop device might get all the available space in a smaller device.

###Container
The container is the main component of the library. It will contain all the rows and columns that you will define inside. You can define the container as follow: 

```
<div class="grid"></grid>
``` 

By default the container will have a max width of 1200px. Once this width is overcome the container will be centered in the middle of the screen. You can change this default behaviour by using the class ``` 
grid--full``` instead as follow:

```
<div class="grid--full"></grid>
``` 

###Rows
You can use as much columns as you need inside a row container. You can define a new row as follow: 

```
<div class="grid__row"></grid>
```

###Columns
Every row is divided into 6 spaces of the same width so every column defined inside the row will have a maximum available width of 6 spaces. You can organize this space as you want, only have in mind that the sum of the spaces of all the columns defined inside of a row must be lower or equal to 6.
You can define a column as follow:

```
<div class="column-4"></div>
``` 
The number indicates the number of spaces that the column will take of the row

####Columns offset
You can make a column to left x spaces of offset in order to center or move the its content. You can define the offset of a column as follow:

```
<div class="column-3-offset-2"></div>
```
The previous column will have an offset of 2 spaces.
####Columns gutter
By default all the columns have a default gutter that you can change in the configuration file as described before in this documentation. If you just want to remove this gutter on a column you can add the no-gutter class to the column as follow:

```
<div class="column-1 no-gutter"></div>
```
Thats all you need to know in order to start using this grid system. 
##Contribution
I will appreciate every of your comments and appreciations, and of course feel free to upgrade things and make pull requests with all your changes. Thank you! 

##Gratitude
In order to develop this grid system I was inspired in the tutorial "Creating Your Own CSS Grid System" by Jan Drewniak.

