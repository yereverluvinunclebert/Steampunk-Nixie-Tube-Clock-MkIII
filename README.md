# Steampunk-Nixie-Tube-Clock-MkIII

 Cyberpunk Nixie Tube Clock widget MkIII, written in Javascript and XML for the Yahoo 
 Widget (Konfabulator) Engine. Created for XP, Vista, Win7, 8, 10+ as well as the 
 Apple Mac OSX prior to Catalina.
 
![nixie](https://github.com/yereverluvinunclebert/Steampunk-Nixie-Tube-Clock-MkIII/assets/2788342/1c3de5c1-84b7-4b22-9508-eeeed78e049b)

 This widget is an attractive steampunk Yahoo widget for your desktop. It 
 displays a continuous time update on your desktop. It is based upon Nixie tubes 
 that were used as status indicators/displays in the 50/60s - 70s. This Widget 
 is a moveable widget that you can move anywhere around the desktop as you 
 require. New about us page, repositions properly on tablet devices in 
 portrait/landscape mode. Can be locked by clicking on the second tube.
 
 ![nixie-with-prefs](https://github.com/yereverluvinunclebert/Steampunk-Nixie-Tube-Clock-MkIII/assets/2788342/54dc31c6-95ea-4d73-bdf9-625444cb6663)


 The widget can be resized - Hover the cursor over the widget. Press the CTRL key 
 and use your mousewheel up or down. The widget will resize dynamically.
 
![4G](https://github.com/yereverluvinunclebert/Steampunk-Nixie-Tube-Clock-MkIII/assets/2788342/cdc865b5-6dac-4205-ad34-78214646d06c)

 All javascript widgets need an engine to function, in this case the widget uses 
 the Yahoo Widget Konfabulator engine. The engine interprets the javascript and 
 creates the widget according to the XML description and using the images you 
 provide. 

![About](https://github.com/yereverluvinunclebert/Steampunk-Nixie-Tube-Clock-MkIII/assets/2788342/24be856a-a976-4b30-b46f-86b5a61a1e99)

Built using: 

	RJTextEd Advanced Editor  https://www.rj-texted.se/ 
	Adobe Photoshop CS ver 8.0 (2003)  https://www.adobe.com/uk/products/photoshop/free-trial-download.html 
	Yahoo Widgets SDK: engine (Konfabulator), debugger & documentation
	
Tested on :

	ReactOS 0.4.14 32bit on virtualBox    
	Windows 7 Professional 32bit on Intel    
	Windows 7 Ultimate 64bit on Intel    
	Windows 7 Professional 64bit on Intel    
	Windows XP SP3 32bit on Intel    
	Windows 10 Home 64bit on Intel    
	Windows 10 Home 64bit on AMD    
	Windows 11 64bit on Intel  
  
  ![3G](https://github.com/yereverluvinunclebert/Steampunk-Nixie-Tube-Clock-MkIII/assets/2788342/e292e9cc-65c4-4b01-ad86-e80eca548702)
 
 Dependencies:
 
 o A windows-alike o/s such as Windows XP, 7-11 or Apple Mac OSX 11.    	
 
 ![yahoo-logo-small_111](https://github.com/yereverluvinunclebert/Steampunk-Nixie-Tube-Clock-MkIII/assets/2788342/520d15a2-85e9-4601-9f8f-6600d7819f56)
 
 o Installation ofthe yahoo widget SDK runtime engine  
 
	Yahoo widget engine for Windows - http://g6auc.me.uk/ywidgets_sdk_setup.exe  
	Yahoo widget engine for Mac - https://rickyromero.com/widgets/downloads/yahoo-widgets-4.5.2.dmg
 
 Running the widget using a javascript engine frees javascript from running only 
 within the captivity of a browser, you will now be able to run these widgets on 
 your Windows desktop as long as you have the correct widget engine installed.
  
 Instructions for running Yahoo widgets on Windows
 =================================================
 
 1. Install yahoo widget SDK runtime engine
 2. Download the gauge from this repo.
 3. Unzip it
 4. Double-click on the resulting .KON file and it will install and run
 
 Instructions for running Yahoo widgets on Mac OS/X ONLY
 ========================================================
 
 1. Install yahoo widget SDK runtime engine for Mac
 2. Download the gauge from this repo.
 3. Unzip it
 4. For all all recent versions of Mac OS/X including Sierra, edit the following 
 file:
 
 com.yahoo.widgetengine.plist which is in /Users/xxx/Library/Preferences. Look 
 for these lines: 
    
   <key>DockOpen</key>  
   <string>false</string>  
 
 Change to false if it is true.
 
 5. Double-click on the widgets .KON file and it will install and run
 
 Wit these instructions you should be able to start Yahoo! Widgets and the 
 menubar item should appear. Widgets can then be started from the menubar or by 
 double-clicking on the KON file in the usual way.
 

 
 LICENCE AGREEMENTS:
 
 Copyright 2023 Dean Beedell
 
 In addition to the GNU General Public Licence please be aware that you may use
 any of my own imagery in your own creations but commercially only with my
 permission. In all other non-commercial cases I require a credit to the
 original artist using my name or one of my pseudonyms and a link to my site.
 With regard to the commercial use of incorporated images, permission and a
 licence would need to be obtained from the original owner and creator, ie. me.
 
