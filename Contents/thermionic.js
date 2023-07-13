//=================================================
//	 Steampunk Nixie Tube Clock
//	 Written by: Dean Beedell
//
//	 Dean.beedell@lightquick.co.uk
//	 Copyright (C) 2011 All Rights Reserved.
//=================================================

/*global clockTimer,
		 leftHourIndicator, rightHourIndicator,
		 leftMinuteIndicator, rightMinuteIndicator,
		 changeDockImage,
		 leftSecondIndicator, rightSecondIndicator
*/

/*properties getHours, getMinutes, getSeconds, hour24Pref, interval,
    length, secondsShowPref, soundsPref, src, substring, ticking, value,
    visible, widthPref
*/
var debugFlg = "";
var widgetName = "Steampunk Nixie Tube Clock.widget";

var hr, mn, se, dt, mnth, yr,
	hour, mins, secs, date, month, year, am_pm,
	oldSecondsShowPref, oldWidthPref,

	zzzz = "Resources/zzzz.mp3",
	sparks = "Resources/sparks.mp3",
	relay = "Resources/relay.mp3",
	electricDrone = "Resources/electricDrone.mp3",
	shutdown = "Resources/shutdown.mp3",
	lock = "Resources/lock.mp3",

	oldleftHourIndicator = leftHourIndicator.src,
	oldrightHourIndicator = rightHourIndicator.src,
	oldleftMinuteIndicator = leftMinuteIndicator.src,
	oldrightMinuteIndicator = rightMinuteIndicator.src,
	oldleftSecondIndicator,
	oldrightSecondIndicator;



        var windowx = 2000, windowy = 800;
        
        var leftHourIndicatoryo = 0, leftHourIndicatorxo = 3;
        var rightHourIndicatoryo = 0, rightHourIndicatorxo = 93;
        var leftMinuteIndicatoryo = 0, leftMinuteIndicatorxo = 199;
        var rightMinuteIndicatoryo = 0, rightMinuteIndicatorxo = 286;
        var leftSecondIndicatoryo = 0, leftSecondIndicatorxo = 390;
        var rightSecondIndicatoryo = 0, rightSecondIndicatorxo = 476;
        
        var bgimage1yo = 2, bgimage1xo = 3;
        var bgimage2yo = 2, bgimage2xo = 93;
        var bgimage3yo = 2, bgimage3xo = 199;
        var bgimage4yo = 2, bgimage4xo = 286;
        var bgimage5yo = 2, bgimage5xo = 390;
        var bgimage6yo = 2, bgimage6xo = 476;
        
        var pinxo = 97 , pinyo =20;

//=====================
//
//=====================


//==========================================================
//Function to play a sound only if the prefs states to do so.
//==========================================================
function playSound(s) {
  	//print("startup " +preferences.soundsPref.value);
	if (preferences.soundsPref.value === "1") { play(s); }
}
//=====================
//End function
//=====================


//=========================================================================
// this function is called on startup in the controlling .kon file <action trigger="onload">
//=========================================================================
function startup() {
    debugFlg = preferences.debugflgPref.value;
    if (debugFlg === "1") {
        preferences.imageEditPref.hidden=false;
        preferences.imageCmdPref.hidden=false;
    } else {
        preferences.imageEditPref.hidden=true;
        preferences.imageCmdPref.hidden=true;
    }
                    
    clockTimer.ticking = true;
    oldSecondsShowPref = preferences.secondsShowPref.value;
    oldWidthPref = preferences.widthPref.value;
    playSound(electricDrone);
    mainScreen();
    resize();
    setBgImage();


    if (preferences.secondsShowPref.value === "1") {
    	oldleftSecondIndicator = leftSecondIndicator.src;
    	oldrightSecondIndicator = rightSecondIndicator.src;
    }

    // create the licence window
    createLicence(mainWindow);
    setmenu();
    checkLockWidget();     //check the lock on the widget is required
}
//=====================
//End function
//=====================

//=====================
// function to return date and time values
//=====================
function returndateandtimevalues() {
	if (preferences.hour24Pref.value === "0") {
		// adjust hours from 24-hour time to 12 hour time
		if (hr === 0) {
			hr = 12;
			am_pm = 'am';
		} else if (hr < 12) {
			am_pm = 'am';
		} else if (hr === 12) {
			am_pm = 'pm';
		} else if (hr > 12) {
			am_pm = 'pm';
			hr = hr - 12;
		}
	}

	// normalise from variables to strings
	hour = String(hr);
	mins = String(mn);
	secs = String(se);
}
//=====================
//End function
//=====================

//===============================================================
// function to animate and update the nixie tube counters
//===============================================================
function updatecounters() {
	function rattle(o) {
		o.visible = false;
		sleep(20);
		if (preferences.tenSecondTickSoundPref.value === "1") { playSound(relay ) };
		sleep(20);
		if (preferences.tenSecondTickSoundPref.value === "1") { playSound(relay ) };
		o.visible = true;
		sleep(20);
		o.visible = false;
		sleep(20);
		o.visible = true;
		sleep(20);
		o.visible = false;
		sleep(20);
		o.visible = true;
		sleep(20);
		o.visible = false;
		sleep(20);
		o.visible = true;
		if (preferences.tenSecondTickSoundPref.value === "1") { playSound(zzzz ) };
		if (preferences.tenSecondTickSoundPref.value === "1") { playSound(sparks ) };
	}

	function rattle2(o) {
		o.visible = false;
		sleep(10);
		if (preferences.tenSecondTickSoundPref.value === "1") { playSound(relay ) };
		sleep(10);
		if (preferences.tenSecondTickSoundPref.value === "1") { playSound(relay ) };
		o.visible = true;
		sleep(5);
		o.visible = false;
		sleep(5);
		o.visible = true;
		sleep(5);
		o.visible = false;
		sleep(5);
		o.visible = true;
		sleep(5);
		o.visible = false;
		sleep(5);
		o.visible = true;
		//playSound(zzzz);
		if (preferences.tenSecondTickSoundPref.value === "1") { playSound(sparks ) };
	}

	//determine which number to display on the hour
	if (hour.length < 2) {
		hour = "0" + hour;
	}
        if (preferences.fontPref.value != "LARGE") {
           leftHourIndicator.src = 'Resources/' + hour.substring(0, 1) + '.png';
        } else {
           leftHourIndicator.src = 'Resources/' + hour.substring(0, 1) + 'G.png';
        }
	if (oldleftHourIndicator !== leftHourIndicator.src) {
		rattle(leftHourIndicator);
	} else {
                leftHourIndicator.visible= true;
        }
        if (preferences.fontPref.value != "LARGE") {
	   rightHourIndicator.src = 'Resources/' + hour.substring(1, 2) + '.png';
        } else {
	   rightHourIndicator.src = 'Resources/' + hour.substring(1, 2) + 'G.png';
        }
	if (oldrightHourIndicator !== rightHourIndicator.src) {
		rattle(rightHourIndicator);
	} else {
                rightHourIndicator.visible= true;
        }

	oldleftHourIndicator = leftHourIndicator.src;
	oldrightHourIndicator = rightHourIndicator.src;

	//determine which number to display on the minutes
	if (mins.length < 2) {
		mins = "0" + mins;
	}
        if (preferences.fontPref.value != "LARGE") {
           leftMinuteIndicator.src = 'Resources/' + mins.substring(0, 1) + '.png';
        } else {
           leftMinuteIndicator.src = 'Resources/' + mins.substring(0, 1) + 'G.png';
        }
	if (oldleftMinuteIndicator !== leftMinuteIndicator.src) {
		rattle(leftMinuteIndicator);
	} else {
                leftMinuteIndicator.visible= true;
        }
        if (preferences.fontPref.value != "LARGE") {
	    rightMinuteIndicator.src = 'Resources/' + mins.substring(1, 2) + '.png';
	} else {
	    rightMinuteIndicator.src = 'Resources/' + mins.substring(1, 2) + 'G.png';
        }
	if (oldrightMinuteIndicator !== rightMinuteIndicator.src) {
		rattle(rightMinuteIndicator);
	} else {
                rightMinuteIndicator.visible= true;
        }
	changeDockImage(leftHourIndicator, rightHourIndicator, leftMinuteIndicator, rightMinuteIndicator);

	oldleftMinuteIndicator = leftMinuteIndicator.src;
	oldrightMinuteIndicator = rightMinuteIndicator.src;

	if (preferences.secondsShowPref.value !== "1") { return; }

	//determine which number to display on the seconds
	if (secs.length < 2) {
		secs = "0" + secs;
	}
        if (preferences.fontPref.value != "LARGE") {
           leftSecondIndicator.src = 'Resources/' + secs.substring(0, 1) + '.png';
	} else {
           leftSecondIndicator.src = 'Resources/' + secs.substring(0, 1) + 'G.png';
        }
	if (oldleftSecondIndicator !== leftSecondIndicator.src) {
		rattle2(leftSecondIndicator);
	} else {
                leftSecondIndicator.visible= true;
        }
        if (preferences.fontPref.value != "LARGE") {
	   rightSecondIndicator.src = 'Resources/' + secs.substring(1, 2) + '.png';
	} else {
	   rightSecondIndicator.src = 'Resources/' + secs.substring(1, 2) + 'G.png';
	}
	if (preferences.tickSoundPref.value === "1") { playSound(zzzz ) };

	oldleftSecondIndicator = leftSecondIndicator.src;
	oldrightSecondIndicator = rightSecondIndicator.src;

	if (preferences.secondsShowPref.value != "0") {
        	//mainWindow.width  = 1696 ;
		leftSecondIndicator.visible = true;
                rightSecondIndicator.visible = true;
                bgimage5.visible = true;
                bgimage6.visible = true;
        } else {
                //mainWindow.width  = 800 ;
		leftSecondIndicator.visible = false;
                rightSecondIndicator.visible = false;
                bgimage5.visible = false;
                bgimage6.visible = false;
         }
         

}
//=====================
//End function
//=====================

//=====================
// function to update the time
//=====================
function updateTime() {
	//initialise the time function
	var time = new Date(), timerInterval;

	//returns the date/time in a string format
	hr = time.getHours();
	mn = time.getMinutes();
	se = time.getSeconds();	// 0..59
//	dt = time.getDate();
//	mnth = time.getMonth();
//	yr = time.getFullYear();

	if (preferences.secondsShowPref.value !== "1") {
		clockTimer.ticking = false;
 		timerInterval = 60 - se;	// 1..60 the interval to the next minute mark
		if (timerInterval > 10) { timerInterval -= 5; }
		clockTimer.interval = timerInterval;
		clockTimer.ticking = true;	// set theTimer to go off for next update
	}

	returndateandtimevalues();

	//display the letters and numbers of the time
	updatecounters();

	//check the alarms and prepare to ring a bell
	//	 ShallWeRingAlarm();
}
//=====================
//End function
//=====================

//=========================================================================
// this function is calledwhen preferences have changed
//=========================================================================
widget.onPreferencesChanged = function () {
  		setBgImage();
                     if ((oldSecondsShowPref !== preferences.secondsShowPref.value) ||
  				(oldWidthPref !== preferences.widthPref.value)) {
  			reloadWidget();
  		}
};
//=====================
//End function
//=====================

//=========================================================================
// this function sets the prefs for the 24hr clock
//=========================================================================
function setBgImage()
{
        if (preferences.fontPref.value == "LARGE") {
		  bgimage1.src = "Resources/nixiebg1.png";
		  bgimage2.src = "Resources/nixiebg1.png";
		  bgimage3.src = "Resources/nixiebg1.png";
		  bgimage4.src = "Resources/nixiebg1.png";
		  bgimage5.src = "Resources/nixiebg1.png";
		  bgimage6.src = "Resources/nixiebg1.png";
        } else {
		  bgimage1.src = "Resources/nixiebg2.png";
		  bgimage2.src = "Resources/nixiebg2.png";
		  bgimage3.src = "Resources/nixiebg2.png";
		  bgimage4.src = "Resources/nixiebg2.png";
		  bgimage5.src = "Resources/nixiebg2.png";
		  bgimage6.src = "Resources/nixiebg2.png";
        }
        bgimage1.visible = true;
        bgimage2.visible = true;
        bgimage3.visible = true;
        bgimage4.visible = true;
        bgimage5.visible = true;
        bgimage6.visible = true;
}
//=====================
//End function
//=====================



//===============================================================
// this function defines the keyboard events captured
//===============================================================
mainWindow.onKeyDown = function(event) {
        if (system.event.keyCode === 116) {
            print("%KON-I-INFO, pressing F5 " + system.event.keyCode);
            reloadWidget();
        }
}
//=====================
//End function
//=====================


