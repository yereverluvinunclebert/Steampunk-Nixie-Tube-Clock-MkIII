//=================================================
//	 Steampunk Nixie Tube Clock
//	 Written by: Harry Whitfield and included here
//       with his kind permission.
//
//       Dean.beedell@lightquick.co.uk
//	 Copyright (C) 2011 All Rights Reserved.
//=================================================

/*properties appendChild, createDocument, createElement, dockOpen, 
    setAttribute, setDockItem, src
*/

function changeDockImage(lh, rh, lm, rm) {
	var doc, v, bg, lHour, rHour, lMinute, rMinute;

	if (!widget.dockOpen) { return; }

	// create an XML document
	doc = XMLDOM.createDocument();
	v = doc.createElement("dock-item");
	v.setAttribute("version", "1.0");
	doc.appendChild(v);
	bg = doc.createElement("image");
	bg.setAttribute("src", "Resources/dockBg.png");
	bg.setAttribute("hOffset",  0);
	v.appendChild(bg);
	
	lHour = doc.createElement("image");
	lHour.setAttribute("src", lh.src);
	lHour.setAttribute("hOffset", 0);
	lHour.setAttribute("vOffset", 12);
	lHour.setAttribute("width", 23);
	lHour.setAttribute("height", 45);
	v.appendChild(lHour);

	rHour = doc.createElement("image");
	rHour.setAttribute("src", rh.src);
	rHour.setAttribute("hOffset", 18);
	rHour.setAttribute("vOffset", 12);
	rHour.setAttribute("width", 23);
	rHour.setAttribute("height", 45);
	v.appendChild(rHour);

	lMinute = doc.createElement("image");
	lMinute.setAttribute("src", lm.src);
	lMinute.setAttribute("hOffset", 36);
	lMinute.setAttribute("vOffset", 12);
	lMinute.setAttribute("width", 23);
	lMinute.setAttribute("height", 45);
	v.appendChild(lMinute);

	rMinute = doc.createElement("image");
	rMinute.setAttribute("src", rm.src);
	rMinute.setAttribute("hOffset", 54);
	rMinute.setAttribute("vOffset", 12);
	rMinute.setAttribute("width", 23);
	rMinute.setAttribute("height", 45);
	v.appendChild(rMinute);

	widget.setDockItem(doc, "fade");
}
