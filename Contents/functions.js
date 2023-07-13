
//===========================================
// this function opens other widgets URL
//===========================================
function otherwidgets() {
	var answer = alert("This button opens a browser window and connects to the Steampunk widgets page on my site. Do you wish to proceed", "Open Browser Window", "No Thanks");

	if (answer === 1) {
		openURL("https://www.deviantart.com/yereverluvinuncleber/gallery/59981269/yahoo-widgets");
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
    var answer = alert("Help support the creation of more widgets like this, send us a coffee! This button opens a browser window and connects to the Kofi donate page for this widget). Will you be kind and proceed?", "Open Browser Window", "No Thanks");

    if (answer === 1) {
        openURL("https://www.ko-fi.com/yereverluvinunclebert");
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



//===========================================
// this function opens the browser at the contact URL
//===========================================
function contact() {
    var answer = alert("Visiting the support page - this button opens a browser window and connects to our contact us page where you can send us a support query or just have a chat). Proceed?", "Open Browser Window", "No Thanks");

    if (answer === 1) {
        openURL("https://www.facebook.com/people/Steampunk-Widgets/pfbid025qrSzGhRhc1NPyyyBCJaLaYGMUVB4T32ZQdHurJrHeKRtahqANnvBBts4q6QYJAfl/");
    }
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
		openURL("https://github.com/yereverluvinunclebert/Steampunk-Nixie-Tube-Clock-MkIII");
	}
}
//=========================================================================
// this function assigns translations to preference descriptions and titles
//=========================================================================
function setmenu() {
    mainWindow.onContextMenu = function() {
        var items = [], mItem;

            mItem = new MenuItem();
            mItem.title = "Online Help";
            mItem.onSelect = function () {
                widgethelp();
            };
        items.push(mItem);

            mItem = new MenuItem();
            mItem.title = "Donate a Coffee with Ko-Fi";
            mItem.onSelect = function () {
                donate();
            };
        items.push(mItem);

            mItem = new MenuItem();
            mItem.title = "";
            mItem.onSelect = function () {
                nullfunction();
            };
        items.push(mItem);

            mItem = new MenuItem();
            mItem.title = "See More Steampunk Widgets";
            mItem.onSelect = function () {
                otherwidgets();
            };
        items.push(mItem);

            mItem = new MenuItem();
            mItem.title = "Download Latest Version";
            mItem.onSelect = function () {
                update();
            };
        items.push(mItem);

            mItem = new MenuItem();
            mItem.title = "Display Licence Agreement...";
            mItem.onSelect = function () {
                displayLicence();
            };
        items.push(mItem);

            mItem = new MenuItem();
            mItem.title = "Contact Support";
            mItem.onSelect = function () {
                contact();
            };
        items.push(mItem);

            mItem = new MenuItem();
            mItem.title = "";
            mItem.onSelect = function() {
                nullfunction();
            };
        items.push(mItem);

            mItem = new MenuItem();
            mItem.title = "Reveal Widget in Windows Explorer";
            mItem.onSelect = function() {
                findWidget();
            };
        items.push(mItem);

            mItem = new MenuItem();
            mItem.title = "";
            mItem.onSelect = function() {
                nullfunction();
            };
        items.push(mItem);

            mItem = new MenuItem();
            mItem.title = "Reload Widget (F5)";
            mItem.onSelect = function () {
                reloadWidget();
            };
        items.push(mItem);

        if (preferences.imageEditPref.value != "" && debugFlg === "1") {
                mItem = new MenuItem();
                mItem.title = "Edit Widget using " + preferences.imageEditPref.value ;
                mItem.onSelect = function () {
                    editWidget();
                };
                items.push(mItem);
        }

        mainWindow.contextMenuItems = items;

    };
}
//=====================
//End function
//=====================



//=====================
// function to carry out a command
//=====================
function performCommand(method) {
    var answer;

    if (method === "menu") {
        runCommandInBg(preferences.imageEditPref.value, "runningTask");
    } else {
        print("method "+method);
        if (system.event.altKey) { // filesystem.open() call
            if (preferences.openFilePref.value === "") {
                answer = alert("This widget has not been assigned an alt+double-click function. You need to open the preferences and select a file to be opened. Do you wish to proceed?", "Open Preferences", "No Thanks");
                if (answer === 1) {
                    showWidgetPreferences();
                }
                return;
            }
            filesystem.open(preferences.openFilePref.value);
        } else {
            if (preferences.imageCmdPref.value === "") {
                answer = alert("This widget has not been assigned a double-click function. You need to open the preferences and enter a run command for this widget. Do you wish to proceed?", "Open Preferences", "No Thanks");
                if (answer === 1) {
                    showWidgetPreferences();
                }
                return;
            }
                runCommandInBg(preferences.imageCmdPref.value, "runningTask");
        }
    }
}
//=====================
//End function
//=====================





//===========================================
// this function causes explorer to be opened and the file selected
//===========================================
function findWidget() {


    var widgetFullPath = convertPathToPlatform(system.userWidgetsFolder + "/" + widgetName);
    var alertString = "The widget folder is: \n";
    if (filesystem.itemExists(widgetFullPath)) {
        alertString += system.userWidgetsFolder + " \n\n";
        alertString += "The widget name is: \n";
        alertString += widgetName + ".\n ";

        alert(alertString, "Open the widget's folder?", "No Thanks");

        filesystem.reveal(widgetFullPath);
    } else {
        widgetFullPath = resolvePath(".");   
        filesystem.reveal(widgetFullPath);
        print("widgetFullPath " + widgetFullPath);
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




//===========================================
// this function edits the widget
//===========================================
function editWidget() {
    //var answer = alert("Editing the widget. Proceed?", "Open Editor", "No Thanks");
    //if (answer === 1) {
        //uses the contents of imageEditPref to initiate your default editor
        performCommand("menu");
    //}

}
//=====================
//End function
//=====================
