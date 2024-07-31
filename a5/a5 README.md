# README for Interactive Icon Grid Project

This README document provides a comprehensive overview of the Interactive Icon Grid project implemented using HTML, CSS, and JavaScript. This project demonstrates the use of event listeners to create an interactive experience where users can interact with various icons representing popular websites.

## Project Overview

The Interactive Icon Grid project is designed to showcase a collection of icons that users can interact with in various ways. Each icon represents a different website, and users can hover over, click, or double-click on the icons to see different behaviors such as opacity changes, URL navigation, and displaying an enlarged version of the icon.

## Features

- **Interactive Icons**: Icons respond to mouse events such as hover, click, and double-click.
- **Dynamic Content Update**: Displays the name of the icon when hovered over and clicked.
- **Navigation**: Opens the corresponding website in a new tab when an icon is double-clicked.
- **Enlarged Icon Display**: Shows an enlarged version of the icon when clicked.
- **Mouse Position Tracking**: Displays the current mouse position when moving over the icons.

## HTML Structure

- `span#iconSpan`: Contains all the icons as `img` elements with class `icon`.
- `p#inText`, `p#outText`: Paragraphs for displaying the name of the icon when hovered over and when the mouse leaves the icon.
- `p`: Displays the current mouse X and Y coordinates.
- `div#enlargedIconArea`: Area where the enlarged icon is displayed upon clicking an icon.

## Usage

### Running the Interactive Icon Grid

1. Open the `index.html` file in a web browser.
2. Hover over any icon to see its name displayed and the icon's opacity change.
3. Click on any icon to display an enlarged version of it in a designated area.
4. Double-click on any icon to open the corresponding website in a new browser tab.
5. Move the mouse over the icons to see the current mouse coordinates displayed.

### Interactions

- **Hover**: Changes the opacity of the icon and displays the icon's name.
- **Click**: Displays an enlarged version of the icon.
- **Double-click**: Opens the website associated with the icon.
- **Mouse Movement**: Tracks and displays the mouse coordinates.

## File Structure

- `index.html`: Contains the HTML structure and inline JavaScript for handling events.
- Images for icons (e.g., `Crunchyroll.png`, `Facebook.png`, etc.) should be placed in the same directory as the HTML file or in a designated subdirectory.
