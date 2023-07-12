
//===========================================
// this function opens other widgets URL
//===========================================
function otherwidgets() {
	var answer = alert("This button opens a browser window and connects to the Steampunk widgets page on my site. Do you wish to proceed", "Open Browser Window", "No Thanks");

	if (answer === 1) {
		openURL("http://lightquick.co.uk/steampunk-widgets.html?Itemid=264");
		if (preferences.soundsPref.value === "enable") {
			play(winding, false);
		}
	}
}
//=====================
//End function
//=====================

//===========================================
// this function opens the URL for paypal
//===========================================
function donate() {
	var answer = alert("Help support the creation of more widgets like this, send us a beer! This button opens a browser window and connects to the Paypal donate page for this widget). Will you be kind and proceed?", "Open Browser Window", "No Thanks");

	if (answer === 1) {
                openURL("https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=info@lightquick.co.uk&currency_code=GBP&amount=2.50&return=&item_name=Donate%20a%20Beer");
		if (preferences.soundsPref.value === "enable") {
			play(winding, false);
		}
	}
}
//=====================
//End function
//=====================

//===========================================
// this function opens my Amazon URL wishlist
//===========================================
function amazon() {
	var answer = alert("Help support the creation of more widgets like this. Buy me a small item on my Amazon wishlist! This button opens a browser window and connects to my Amazon wish list page). Will you be kind and proceed?", "Open Browser Window", "No Thanks");

	if (answer === 1) {
		openURL("http://www.amazon.co.uk/gp/registry/registry.html?ie=UTF8&id=A3OBFB6ZN4F7&type=wishlist");
	}
}
//=====================
//End function
//=====================

//===========================================
// this function opens the rocketdock URL
//===========================================
function rocketdock() {
	var answer = alert("Log in and vote for my widgets on Rocketdock. This button opens a browser window and connects to the Rocketdock page where you can give the widget a 5 star rating... Will you be kind and proceed?", "Open Browser Window", "No Thanks");
	if (answer === 1) {
		openURL("http://rocketdock.com/addon/misc/39912");
		if (preferences.soundsPref.value === "enable") {
			play(winding, false);
		}
	}
}
//=====================
//End function
//=====================





//===========================================
// this function allows a spacer in the menu
//===========================================
function nullfunction() {
	print("dummy");
}
//=====================
//End function
//=====================


// this function opens the online help file
function menuitem1OnClick() {
	var answer = alert("This button opens a browser window and connects to the help page for this widget. Do you wish to proceed?", "Open Browser Window", "No Thanks");

	if (answer === 1) {
		openURL("http://lightquick.co.uk/instructions-for-the-steampunk-thermionic-nixie-tube-widget.html?Itemid=264");
	}
}

// this function opens the browser at the contact URL
function menuitem2OnClick() {
	var answer = alert("Visiting the support page - this button opens a browser window and connects to our contact us page where you can send us a support query or just have a chat). Proceed?", "Open Browser Window", "No Thanks");

	if (answer === 1) {
		openURL("http://lightquick.co.uk/contact.html?Itemid=3");
	}
}

// this function opens the download URL
function update() {
	var answer = alert("Download latest version of the widget (this button opens a browser window and connects to the widget download page where you can check and download the latest zipped .WIDGET file). Proceed?", "Open Browser Window", "No Thanks");
	if (answer === 1) {
		openURL("http://lightquick.co.uk/jdownloads/steampunk-yahoo-thermionic-nixie-tube-valve-widget.html?Itemid=264");
	}
}

// this function sets the main context menu
function setmenu() {
	var items = [], item;

	item = new MenuItem();
	item.title = "Buy us a Beer with Paypal";
	item.onSelect = donate;
	items.push(item);

	item = new MenuItem();
	item.title = "Donate with Amazon";
	item.onSelect = amazon;
	items.push(item);

	item = new MenuItem();
	item.title = "Vote on Rocketdock";
	item.onSelect = rocketdock;
	items.push(item);

	item = new MenuItem();
	item.title = "";
	item.onSelect = nullfunction;
	items.push(item);

	item = new MenuItem();
	item.title = "Online Help";
	item.onSelect = menuitem1OnClick;
	items.push(item);

	item = new MenuItem();
	item.title = "Contact Support";
	item.onSelect = menuitem2OnClick;
	items.push(item);

	item = new MenuItem();
	item.title = "Display Licence Agreement...";
	item.onSelect = function () {
		displayLicence();
	};
	items.push(item);

	item = new MenuItem();
	item.title = "Download Latest Version";
	item.onSelect = function () {
		update();
	};
	items.push(item);

	item = new MenuItem();
	item.title = "See More Steampunk Widgets";
	item.onSelect = otherwidgets;
	items.push(item);

	item = new MenuItem();
	item.title = "";
	item.onSelect = nullfunction;
	items.push(item);

        item = new MenuItem();
        item.title = "Reveal Widget in Windows Explorer";
        item.onSelect = function () {
            findWidget();
        };
	items.push(item);

        item = new MenuItem();
        item.title = "";
        item.onSelect = function () {
            nullfunction();
        };
	items.push(item);

	item = new MenuItem();
	item.title = "Reload Widget";
	item.onSelect = function () {
		reloadWidget();
	};
	items.push(item);
	mainWindow.contextMenuItems = items;
}


//======================================================================================
// Function to perform commands
//======================================================================================
function performCommand() {
    if ( preferences.imageCmdPref.value == "" )
    {
        var answer = alert("This widget has not been assigned a double-click function yet - You need to open the preferences and set a function for this widget. Do you wish to proceed?", "Open Preferences", "No Thanks");
        if (answer === 1) {
                   showWidgetPreferences();
        }
    }
    playSound(zzzz, false);
    if (system.platform === "windows") {
        runCommandInBg(taskcommand, "running task");
    }
    if (system.platform === "macintosh") {
        filesystem.open(taskcommand);
    }
}
//=====================
//End function
//=====================




//===========================================
// this function causes explorer to be opened and the file selected
//===========================================
function findWidget() {

 var widgetName = "Steampunk Nixie Tube Clock.widget";
 // temporary development version of the widget
 //var widgetName = "magnifier2.widget";
 var widgetFullPath = convertPathToPlatform(system.userWidgetsFolder + "/" + widgetName);
 var alertString = "The widget folder is: \n";
 alertString += system.userWidgetsFolder + " \n\n";
 alertString += "The widget name is: \n";
 alertString += widgetName+".\n ";
 var answer = alert(alertString, "Open the widget's folder?", "No Thanks");
 if (answer === 1) {
            if (filesystem.itemExists(widgetFullPath) )   {
              //dosCommand = "Explorer.exe /e, /select,E:\\Documents and Settings\\Dean Beedell\\My Documents\\My Widgets\\mars 2.widget";
              dosCommand = "Explorer.exe /e, /select," + widgetFullPath;
              //print("dosCommand "+dosCommand);
              //var explorerExe = runCommand(dosCommand, "bgResult");
              filesystem.reveal(widgetFullPath);
            }
 }
}
//=====================
//End function
//=====================

//======================================================================================
// Function to move the main_window onto the main screen - called on startup and by timer
//======================================================================================
function mainScreen() {
// if the widget is off screen then move into the viewable window

    print("****************MAINSCREEN********************");

    // check for aspect ratio and determine whether it is in portrait or landscape mode
    if (screen.width > screen.height) {
        aspectRatio = "landscape";
    } else {
        aspectRatio = "portrait";
    }
    print("screen.width "+screen.width);
    print("screen.height "+screen.height);
    print("aspectRatio "+aspectRatio);
    // check if the widget has a lock for the screen type.
    if (aspectRatio == "landscape") {
       if (preferences.widgetLockLandscapeModePref.value == "enabled" ) {
             mainWindow.hoffset = preferences.landscapeHoffsetPref.value;
             mainWindow.voffset = preferences.landscapeVoffsetPref.value;
       }
       if (preferences.widgetHideModePref.value == "landscape" ) {
          print ("Hiding the widget for landscape mode");
          widget.visible = false;
       } else {
          widget.visible = true;
       }
    }
    // check if the widget has a lock for the screen type.
    if (aspectRatio == "portrait") {
       if (preferences.widgetLockPortraitModePref.value == "enabled" ) {
             mainWindow.hoffset = preferences.portraitHoffsetPref.value;
             mainWindow.voffset = preferences.portraitVoffsetPref.value;
       }
       if (preferences.widgetHideModePref.value == "portrait" ) {
          print ("Hiding the widget for portrait mode");
          widget.visible = false;
       } else {
          widget.visible = true;
       }
    }

    if (mainWindow.hOffset < 0) {
        mainWindow.hOffset = 10;
    }
    if (mainWindow.vOffset < 0) {
        mainWindow.vOffset = 0; // avoid Mac toolbar
    }
    if (mainWindow.hOffset > screen.width - 50) { //adjust for the extra width of the help page
        mainWindow.hOffset = screen.width - mainWindow.width + 220;
    }
    if (mainWindow.vOffset > screen.height - 150) {  //adjust for the extra height of the help page
        mainWindow.vOffset = screen.height - mainWindow.height; // avoid Mac toolbar
    }

    // calculate the current hlocation in % of the screen
    //store the current hlocation in % of the screen
    if ( preferences.hLocationPercPref.value != 0) {
      preferences.hLocationPercPref.value = (mainWindow.hoffset / screen.width)* 100;
    }
    if ( preferences.vLocationPercPref.value != 0) {
      preferences.vLocationPercPref.value = (mainWindow.voffset / screen.height)* 100;
    }

}
//=====================
//End function
//=====================


/* Function to move the mainWindow onto the main screen in the viewable area
function mainScreen() {
	if (mainWindow.hOffset < 0) {
		mainWindow.hOffset = 10;
	}
	if (mainWindow.vOffset < 32) {
		mainWindow.vOffset = 32; // avoid Mac toolbar
	}
	if (mainWindow.hOffset > screen.width - 50) {
		mainWindow.hOffset = screen.width - mainWindow.width;
	}
	if (mainWindow.vOffset > screen.height - 50) {
		mainWindow.vOffset = screen.height - mainWindow.height; // avoid Mac dock
	}
}
*/

//======================================================================================
//  widget moves in relation to the desktop orientation, portrait or landscape
//======================================================================================
widget.onScreenChanged = function( event ) {
//mainWindow.onMouseDown = function( event ) {   //can be tested using this event
    // function fires if any screen size, arrangement change occurs

    // check for aspect ratio and determine whether it is in portrait or landscape mode
    if (screen.width > screen.height) {
        aspectRatio = "landscape";
    } else {
        aspectRatio = "portrait";
    }

    checkLockWidget();

    print("screen.width "+screen.width);
    print("screen.height "+screen.height);
    print("aspectRatio "+aspectRatio);

    // check if the widget has a lock for the screen type.
    if (aspectRatio == "landscape") {
       if (preferences.widgetLockLandscapeModePref.value == "enabled" ) {
             mainWindow.hoffset = preferences.landscapeHoffsetPref.value;
             mainWindow.voffset = preferences.landscapeVoffsetPref.value;
             // reapply the lock

       } else {
              placeByPercentage();
       }
       if (preferences.widgetHideModePref.value == "landscape" ) {
          print ("Hiding the widget for landscape mode");
          widget.visible = false;
       } else {
          widget.visible = true;
       }
    }
    // check if the widget has a lock for the screen type.
    if (aspectRatio == "portrait") {
       if (preferences.widgetLockPortraitModePref.value == "enabled" ) {
             mainWindow.hoffset = preferences.portraitHoffsetPref.value;
             mainWindow.voffset = preferences.portraitVoffsetPref.value;
             // reapply the lock
       } else {
              placeByPercentage();
       }
       if (preferences.widgetHideModePref.value == "portrait" ) {
          print ("Hiding the widget for portrait mode");
          widget.visible = false;
       } else {
          widget.visible = true;
       }
    }
    // If it does not have a lock in either landscape/portrait mode then position it by stored percentage so that it positions itself in % from the top of the screen


    // the screen re-orientation can put the widget off screen, fix that
    if (mainWindow.hOffset < 0) {
        mainWindow.hOffset = 10;
    }
    if (mainWindow.vOffset < 0) {
        mainWindow.vOffset = 0; // avoid Mac toolbar
    }

       //resizethermometer(); // resize the thermometer

/*
        print ("DEBUG2 ");
        print( 'screen resolution '+screen.resolution );
        print( 'screen resolution '+screen.height );
        print( 'screen resolution '+screen.width );
        print( 'mainWindow.hoffset '+mainWindow.hoffset );
        print( 'mainWindow.voffset '+mainWindow.voffset );
*/
  };
//=====================
//End function
//=====================


//======================================================================================
// Function to lock the widget on startup
//======================================================================================
function checkLockWidget ()        {

    // check for aspect ratio and determine whether it is in portrait or landscape mode
    if (screen.width > screen.height) {
        aspectRatio = "landscape";
    } else {
        aspectRatio = "portrait";
    }
        print("aspectRatio "+aspectRatio);
        print("preferences.widgetLockLandscapeModePref.value "+preferences.widgetLockLandscapeModePref.value);
        print("preferences.widgetLockPortraitModePref.value "+preferences.widgetLockPortraitModePref.value);
        // check if the widget has a lock for the screen type.
        if (aspectRatio == "landscape" ) {
           if (preferences.widgetLockLandscapeModePref.value == "disabled") {
                pin.opacity = 1;
                mainWindow.locked = false;
	        // this does not work yet
	        pin.tooltip="click me to lock the widget in place";
	        //screw2.tooltip="click me to lock the widget in place";
                 return;
           } else {
                 print("checkLockWidget locking in landscape");
                 pin.opacity = 255;
                 mainWindow.locked = true;
                // check if the widget has a lock for the screen type.
	         pin.tooltip="click me to unlock";
	         rightHourIndicator.tooltip="click me once to unlock the widget and then drag using the other tubes.";
	         //screw2.tooltip="click me to unlock";
                 //if (preferences.soundsPref.value != "mute" ) {play(lock, false);};
          }
        }
        // check if the widget has a lock for the screen type.
        if (aspectRatio == "portrait" ) {
          if (preferences.widgetLockPortraitModePref.value == "disabled") {
                pin.opacity = 1;
                mainWindow.locked = false;
	        // this does not work yet
	        pin.tooltip="click me to lock the widget in place";
	        //screw2.tooltip="click me to lock the widget in place";
	  } else {
                 print("checkLockWidget locking in portrait");
                 pin.opacity = 255;
                 mainWindow.locked = true;
                // check if the widget has a lock for the screen type.
	         pin.tooltip="click me to unlock";
	         rightHourIndicator.tooltip="click me once to unlock the widget and then drag using the other tubes.";
	         //screw2.tooltip="click me to unlock";
                 //if (preferences.soundsPref.value != "mute" ) {play(lock, false);};
          }               
        }
}
//=====================
//End function
//=====================


//===========================================
// this function
//===========================================
function placeByPercentage() {

        // First of all read the previous hlocation from the prefs in %
        // calculate the current hlocation in % of the screen
        // NOTE: the widget stores any new h & v locations in % of the screen using the half-second location timer - screenLocationTimer
        // if the screen width has changed then change the relative position
        // the h&v modifiers take into account the extra width/height of the invisible help elemenets

        var hModifier = (60/ thermometerScale * 100);
        var vModifier = (230/ thermometerScale * 100);
    
        mainWindow.hoffset = screen.width * (preferences.hLocationPercPref.value / 100);
        mainWindow.voffset = screen.height * (preferences.vLocationPercPref.value / 100);
    
        // after the replacement on screen, if the bottom of the widget is off screen then lift it back on screen
        if ((mainWindow.voffset-hModifier) + mainWindow.height > screen.height)  {
            mainWindow.voffset = (screen.height - (mainWindow.height-hModifier)) ;
        }
        // after the replacement on screen, if the right hand side of the widget is off screen then lift it back to the left until it is on screen
        if ((mainWindow.hoffset - vModifier) + mainWindow.width > screen.width)  {
            mainWindow.hoffset = screen.width - (mainWindow.width-vModifier) ;
        }

  };
//=====================
//End function
//=====================


//==============================
// pins the widget in place
//==============================
rightHourIndicator.onClick = function () {
	lockWidget();

        /*
        mainWindow.locked = true;
        preferences.widgetLockPref.value = "1";
        log ( "pin.hOffset ",pin.hOffset);
        log ( "pin.vOffset ",pin.vOffset);
        pin.hOffset = system.event.hOffset - 5;
        pin.vOffset = system.event.vOffset - 5;
        preferences.pinhOffsetPref.value = pin.hOffset;
        preferences.pinvOffsetPref.value = pin.vOffset;
        pin.opacity = 255;

	if (preferences.soundsPref.value === "1") {
		play(lock, false);
	}
	*/
};

//==============================
// unlocks the widget
//==============================
pin.onMouseDown = function () {
	lockWidget();
};
//==============================
//
//==============================



//======================================================================================
// Function to lock the widget
//======================================================================================
function lockWidget ()        {

    // check for aspect ratio and determine whether it is in portrait or landscape mode
    if (screen.width > screen.height) {
        aspectRatio = "landscape";
    } else {
        aspectRatio = "portrait";
    }
	if (mainWindow.locked) {
                pin.opacity = 1;
                mainWindow.locked = false;

                // check if the widget has a lock for the screen type.
                if (aspectRatio == "landscape") {
		   preferences.widgetLockLandscapeModePref.value = "disabled";
                }
                // check if the widget has a lock for the screen type.
                if (aspectRatio == "portrait") {
		   preferences.widgetLockPortraitModePref.value = "disabled";
                }
                pin.tooltip="click me to lock the widget in place";
                rightHourIndicator.tooltip ="click me to lock the widget in place";
	        //screw2.tooltip="click me to lock the widget in place";
	        //paper.tooltip="";
	        //woodSurround.tooltip="";
	} else {
                pin.opacity = 255;
                mainWindow.locked = true;
                log ( "pin.hOffset ",pin.hOffset);
                log ( "pin.vOffset ",pin.vOffset);
                pin.hOffset = system.event.hOffset - 5;
                pin.vOffset = system.event.vOffset - 5;

                // check if the widget has a lock for the screen type.
                if (aspectRatio == "landscape") {
		   preferences.widgetLockLandscapeModePref.value = "enabled";
                   preferences.landscapeHoffsetPref.value = mainWindow.hoffset ;
                   preferences.landscapeVoffsetPref.value = mainWindow.voffset ;
                }
                // check if the widget has a lock for the screen type.
                if (aspectRatio == "portrait") {
		   preferences.widgetLockPortraitModePref.value = "enabled";
                   preferences.portraitHoffsetPref.value = mainWindow.hoffset ;
                   preferences.portraitVoffsetPref.value = mainWindow.voffset ;
                }
	        pin.tooltip="click me to unlock";
                rightHourIndicator.tooltip="click me once to unlock the widget and then drag using the other tubes.";
                	         //screw2.tooltip="click me to unlock";
	         //paper.tooltip=woodSurround.tooltip="The widget is currently locked in place - click on the screw to release";
	         
        }
        if (preferences.soundsPref.value != "mute" ) {play(lock, false);};
}
//=====================
//End function
//=====================


//===============================
// function to resize all layers
//===============================
function resize() {
    //log("Resizing: preferences.maxWidthPref.value: " + preferences.maxWidthPref.value);
    //pin.width = pinwidthDefault * scale;
    //pin.height = pinheightDefault * scale;
    /*// set the widget lock status if pinned
	if (preferences.widgetLockPref.value === "1") {
		mainWindow.locked = true;
                pin.opacity = 255;
		pin.hOffset = preferences.pinhOffsetPref.value; // * thermometerScale;
		pin.vOffset = preferences.pinvOffsetPref.value; // * thermometerScale;
	} else {
                pin.opacity = 0;
        }
   */

        var scale = Number(preferences.widthPref.value) / 100;
        log("scale: " + scale);
        function sc(img, hOffset, vOffset, hReg, vReg) {
            img.hOffset = Math.round(hOffset * scale);
            img.vOffset = Math.round(vOffset * scale);
            img.width = Math.round(img.srcWidth * scale);
            img.height = Math.round(img.srcHeight * scale);
            if (hReg !== undefined) {
                img.hRegistrationPoint = Math.round(hReg * scale);
            }
            if (vReg !== undefined) {
                img.vRegistrationPoint = Math.round(vReg * scale);
            }
        }

	mainWindow.width = Math.round(windowx * scale);
	mainWindow.height = Math.round(windowy * scale);

	sc(leftHourIndicator, leftHourIndicatorxo, leftHourIndicatoryo);
	sc(rightHourIndicator, rightHourIndicatorxo, rightHourIndicatoryo);
	sc(leftMinuteIndicator, leftMinuteIndicatorxo, leftMinuteIndicatoryo);
	sc(rightMinuteIndicator, rightMinuteIndicatorxo, rightMinuteIndicatoryo);
	sc(leftSecondIndicator, leftSecondIndicatorxo, leftSecondIndicatoryo);
	sc(rightSecondIndicator, rightSecondIndicatorxo, rightSecondIndicatoryo);
	sc(bgimage1, bgimage1xo, bgimage1yo);
	sc(bgimage2, bgimage2xo, bgimage2yo);
	sc(bgimage3, bgimage3xo, bgimage3yo);
	sc(bgimage4, bgimage4xo, bgimage4yo);
	sc(bgimage5, bgimage5xo, bgimage5yo);
	sc(bgimage6, bgimage6xo, bgimage6yo);

	sc(pin, pinxo, pinyo);

	//bg image is the transparent image that is used as the mouse scrollwheel capture image
	// it is the same width as the main window and the same height as the tubes.
	bg.width = mainWindow.width;
        bg.height = leftHourIndicator.height;

}
//=====================
//End function
//=====================



//======================================================================================
// Function to scale the image by mousewheel
//======================================================================================
bg.onMouseWheel = function (event) {
    var size = Number(preferences.widthPref.value),
        maxLength = Number(preferences.widthPref.maxLength),
        minLength = Number(preferences.widthPref.minLength),
        ticks = Number(preferences.widthPref.ticks),
        step = Math.round((maxLength - minLength) / (ticks - 1));


    if (event.ctrlKey) {
	    if (event.scrollDelta > 0) {
	        if ( preferences.MouseWheelPref.value == "up" ) {
                   size -= step;
                   if (size < minLength) {
	               size = minLength;
                   }
                } else {
                   size += step;
	           if (size > maxLength) {
	              size = maxLength;
	           }
                }
	    } else if (event.scrollDelta < 0) {
	        if ( preferences.MouseWheelPref.value == "up" ) {
                   size += step;
	           if (size > maxLength) {
	               size = maxLength;
                   }
                } else {
                   size -= step;
                  if (size < minLength) {
	              size = minLength;
	           }
                }
	    }
            print ("size "+ size);
	    preferences.widthPref.value = String(size);
	    resize();
	}
};
//=====================
//End function
//=====================



