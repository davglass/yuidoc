/*
This file has been generated to support Visual Studio Intellisense, and is not a functional file.
It is designed to be included via the reference tag in Visual Studio.
<reference path="yui2.vsdoc.js" />
This file includes the documentation for all modules and components in the YUI Library.
It will not be able to detect if you have not included all the proper files.
All methods, classes, Components and Widgets will still be listed in Intellisense.
*/

//Starting Classes
var YAHOO = function() {
   /// <summary> The YAHOO global namespace object.  If YAHOO is already defined, theexisting YAHOO object will not be overwritten so that definednamespaces are preserved. </summary>
};
YAHOO.env = function() {
   /// <summary> YAHOO.env is used to keep track of what is known about the YUI library andthe browsing environment </summary>
};
YAHOO.env.ua = function() {
   /// <summary> Do not fork for a browser if it can be avoided.  Use feature detection whenyou can.  Use the user agent as a last resort.  YAHOO.env.ua stores a versionnumber for the browser engine, 0 otherwise.  This value may or may not mapto the version number of the browser using the engine.  The value is presented as a float so that it can easily be used for boolean evaluation as well as for looking for a particular range of versions.  Because of this, some of the granularity of the version info may be lost (e.g., Gecko 1.8.0.9 reports 1.8). </summary>
};
YAHOO.lang = function() {
   /// <summary> Provides the language utilites and extensions used by the library </summary>
};
YAHOO.lang = function() {
   /// <summary> Provides the language utilites and extensions used by the library </summary>
};
YAHOO.lang.JSON = function() {
   /// <summary> Provides methods to parse JSON strings and convert objects to JSON strings. </summary>
};
YAHOO.tool = function() {
};
YAHOO.tool.Profiler = function() {
   /// <summary> Profiles functions in JavaScript. </summary>
};
YAHOO.tool.TestCase = function(template) {
   /// <summary> Test case containing various tests to run. </summary>
 /// <param name="template" type=""> An object containing any number of test methods, other methods,an optional name, and anything else the test case needs.</param>
};
YAHOO.tool.TestCase = function(template) {
   /// <summary> Test case containing various tests to run. </summary>
 /// <param name="template" type=""> An object containing any number of test methods, other methods,an optional name, and anything else the test case needs.</param>
};
YAHOO.tool.TestCase.Wait = function(segment, delay) {
   /// <summary> Represents a stoppage in test execution to wait for an amount of time beforecontinuing. </summary>
 /// <param name="segment" type="Function"> A function to run when the wait is over.</param>
 /// <param name="delay" type="int"> The number of milliseconds to wait before running the code.</param>
};
YAHOO.tool.TestFormat = function() {
};
YAHOO.tool.TestLogger = function(element, config) {
   /// <summary> Displays test execution progress and results, providing filters based ondifferent key events. </summary>
 /// <param name="element" type="HTMLElement"> (Optional) The element to create the logger in.</param>
 /// <param name="config" type="Object"> (Optional) Configuration options for the logger.</param>
};
YAHOO.tool.TestManager = function() {
   /// <summary> Runs pages containing test suite definitions. </summary>
};
YAHOO.tool.TestNode = function(testObject) {
   /// <summary> A node in the test tree structure. May represent a TestSuite, TestCase, ortest function. </summary>
 /// <param name="testObject" type="Variant"> A TestSuite, TestCase, or the name of a test function.</param>
};
YAHOO.tool.TestReporter = function(url, format) {
   /// <summary> An object capable of sending test results to a server. </summary>
 /// <param name="url" type="String"> The URL to submit the results to.</param>
 /// <param name="format" type="Function"> (Optiona) A function that outputs the results in a specific format.Default is YAHOO.tool.TestFormat.XML.</param>
};
YAHOO.tool.TestRunner = function() {
   /// <summary> Runs test suites and test cases, providing events to allowing for theinterpretation of test results. </summary>
};
YAHOO.tool.TestSuite = function(data) {
   /// <summary> A test suite that can contain a collection of TestCase and TestSuite objects. </summary>
 /// <param name="data" type="String||Object"> The name of the test suite or an object containinga name property as well as setUp and tearDown methods.</param>
};
YAHOO.util = function() {
};
YAHOO.util.Anim = function(el, attributes, duration, method) {
   /// <summary> Base animation class that provides the interface for building animated effects.Usage: var myAnim = new YAHOO.util.Anim(el, { width: { from: 10, to: 100 } }, 1, YAHOO.util.Easing.easeOut); </summary>
 /// <param name="el" type="String | HTMLElement"> Reference to the element that will be animated</param>
 /// <param name="attributes" type="Object"> The attribute(s) to be animated.  Each attribute is an object with at minimum a "to" or "by" member defined.  Additional optional members are "from" (defaults to current value), "units" (defaults to "px").  All attribute names use camelCase.</param>
 /// <param name="duration" type="Number"> (optional, defaults to 1 second) Length of animation (frames or seconds), defaults to time-based</param>
 /// <param name="method" type="Function"> (optional, defaults to YAHOO.util.Easing.easeNone) Computes the values that are applied to the attributes per frame (generally a YAHOO.util.Easing method)</param>
};
YAHOO.util.AnimMgr = function() {
   /// <summary> Handles animation queueing and threading.Used by Anim and subclasses. </summary>
};
YAHOO.util.ArrayAssert = function() {
   /// <summary> The ArrayAssert object provides functions to test JavaScript array objectsfor a variety of cases. </summary>
};
YAHOO.util.Assert = function() {
   /// <summary> The Assert object provides functions to test JavaScript values againstknown and expected results. Whenever a comparison (assertion) fails,an error is thrown. </summary>
};
YAHOO.util.AssertionError = function(message) {
   /// <summary> AssertionError is thrown whenever an assertion fails. It provides methodsto more easily get at error information and also provides a base classfrom which more specific assertion errors can be derived. </summary>
 /// <param name="message" type="String"> The message to display when the error occurs.</param>
};
YAHOO.util.Attribute = function(hash, The) {
   /// <summary> Provides Attribute configurations. </summary>
 /// <param name="hash" type="Object">  The intial Attribute.</param>
 /// <param name="The" type="YAHOO.util.AttributeProvider"> owner of the Attribute instance.</param>
};
YAHOO.util.AttributeProvider = function() {
   /// <summary> Provides and manages YAHOO.util.Attribute instances </summary>
};
YAHOO.util.Bezier = function() {
   /// <summary> Used to calculate Bezier splines for any number of control points. </summary>
};
YAHOO.util.Chain = function(callback) {
   /// <summary> Mechanism to execute a series of callbacks in a non-blocking queue.  Each callback is executed via setTimout unless configured with a negative timeout, in which case it is run in blocking mode in the same execution thread as the previous callback.  Callbacks can be function references or object literals with the following keys:method - {Function} REQUIRED the callback function.scope - {Object} the scope from which to execute the callback.  Default is the global window scope.argument - {Array} parameters to be passed to method as individual arguments.timeout - {number} millisecond delay to wait after previous callback completion before executing this callback.  Negative values cause immediate blocking execution.  Default 0.until - {Function} boolean function executed before each iteration.  Return true to indicate completion and proceed to the next callback.iterations - {Number} number of times to execute the callback before proceeding to the next callback in the chain. Incompatible with until. </summary>
 /// <param name="callback*" type="Function|Object">  Any number of callbacks to initialize the queue</param>
};
YAHOO.util.Color = function() {
   /// <summary> Provides color conversion and validation utils </summary>
};
YAHOO.util.ColorAnim = function(el, attributes, duration, method) {
   /// <summary> Anim subclass for color transitions.Usage: var myAnim = new Y.ColorAnim(el, { backgroundColor: { from: '#FF0000', to: '#FFFFFF' } }, 1, Y.Easing.easeOut); Color values can be specified with either 112233, #112233, [255,255,255], or rgb(255,255,255) </summary>
 /// <param name="el" type="HTMLElement | String"> Reference to the element that will be animated</param>
 /// <param name="attributes" type="Object"> The attribute(s) to be animated.Each attribute is an object with at minimum a "to" or "by" member defined.Additional optional members are "from" (defaults to current value), "units" (defaults to "px").All attribute names use camelCase.</param>
 /// <param name="duration" type="Number"> (optional, defaults to 1 second) Length of animation (frames or seconds), defaults to time-based</param>
 /// <param name="method" type="Function"> (optional, defaults to YAHOO.util.Easing.easeNone) Computes the values that are applied to the attributes per frame (generally a YAHOO.util.Easing method)</param>
};
YAHOO.util.ColumnDD = function(oDataTable, oColumn, elTh, elTargetter) {
   /// <summary> ColumnDD subclasses DragDrop to support rearrangeable Columns. </summary>
 /// <param name="oDataTable" type="YAHOO.widget.DataTable">  DataTable instance.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="elTh" type="HTMLElement">  TH element reference.</param>
 /// <param name="elTarget" type="HTMLElement">  Drag target element.</param>
};
YAHOO.util.ColumnResizer = function(oDataTable, oColumn, elTh, sHandleElId, elProxy) {
   /// <summary> ColumnResizer subclasses DragDrop to support resizeable Columns. </summary>
 /// <param name="oDataTable" type="YAHOO.widget.DataTable">  DataTable instance.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="elTh" type="HTMLElement">  TH element reference.</param>
 /// <param name="sHandleElId" type="String">  DOM ID of the handle element that causes the resize.</param>
 /// <param name="elProxy" type="HTMLElement">  Resizer proxy element.</param>
};
YAHOO.util.ComparisonFailure = function(message, expected, actual) {
   /// <summary> ComparisonFailure is subclass of AssertionError that is thrown whenevera comparison between two values fails. It provides mechanisms to retrieveboth the expected and actual value. </summary>
 /// <param name="message" type="String"> The message to display when the error occurs.</param>
 /// <param name="expected" type="Object"> The expected value.</param>
 /// <param name="actual" type="Object"> The actual value that caused the assertion to fail.</param>
};
YAHOO.util.Config = function(owner) {
   /// <summary> Config is a utility used within an Object to allow the implementer tomaintain a list of local configuration properties and listen for changes to those properties dynamically using CustomEvent. The initial values are also maintained so that the configuration can be reset at any given point to its initial state. </summary>
 /// <param name="owner" type="Object"> The owner Object to which this Config Object belongs</param>
};
YAHOO.util.Connect = function() {
   /// <summary> The Connection Manager singleton provides methods for creating and managingasynchronous transactions. </summary>
};
YAHOO.util.Cookie = function() {
   /// <summary> Cookie utility. </summary>
};
YAHOO.util.CustomEvent = function(type, context, silent, signature, fireOnce) {
   /// <summary> The CustomEvent class lets you define events for your applicationthat can be subscribed to by one or more independent component. </summary>
 /// <param name="type" type="String"> The type of event, which is passed to the callbackwhen the event fires</param>
 /// <param name="context" type="Object"> The context the event will fire from.  "this" willrefer to this object in the callback.  Default value: the window object.  The listener can override this.</param>
 /// <param name="silent" type="boolean"> pass true to prevent the event from writing tothe debugsystem</param>
 /// <param name="signature" type="int"> the signature that the custom event subscriberwill receive. YAHOO.util.CustomEvent.LIST or YAHOO.util.CustomEvent.FLAT.  The default isYAHOO.util.CustomEvent.LIST.</param>
 /// <param name="fireOnce" type="boolean">  If configured to fire once, the custom event will only notify subscribers a single time regardless of how many times the event is fired.  In addition, new subscribers will be notified immediately if the event has already been fired.</param>
};
YAHOO.util.DD = function(id, sGroup, config) {
   /// <summary> A DragDrop implementation where the linked element follows the mouse cursor during a drag. </summary>
 /// <param name="id" type="String"> the id of the linked element</param>
 /// <param name="sGroup" type="String"> the group of related DragDrop items</param>
 /// <param name="config" type="object"> an object containing configurable attributesValid properties for DD: scroll</param>
};
YAHOO.util.DDProxy = function(id, sGroup, config) {
   /// <summary> A DragDrop implementation that inserts an empty, bordered div intothe document that follows the cursor during drag operations.  At the time ofthe click, the frame div is resized to the dimensions of the linked htmlelement, and moved to the exact location of the linked element.References to the "frame" element refer to the single proxy element thatwas created to be dragged in place of all DDProxy elements on thepage. </summary>
 /// <param name="id" type="String"> the id of the linked html element</param>
 /// <param name="sGroup" type="String"> the group of related DragDrop objects</param>
 /// <param name="config" type="object"> an object containing configurable attributesValid properties for DDProxy in addition to those in DragDrop: resizeFrame, centerFrame, dragElId</param>
};
YAHOO.util.DDTarget = function(id, sGroup, config) {
   /// <summary> A DragDrop implementation that does not move, but can be a drop target.  You would get the same result by simply omitting implementation for the event callbacks, but this way we reduce the processing cost of the event listener and the callbacks. </summary>
 /// <param name="id" type="String"> the id of the element that is a drop target</param>
 /// <param name="sGroup" type="String"> the group of related DragDrop objects</param>
 /// <param name="config" type="object"> an object containing configurable attributesValid properties for DDTarget in addition to those in DragDrop: none</param>
};
YAHOO.util.DataSource = function(oLiveData, oConfigs) {
   /// <summary> Factory class for creating a BaseDataSource subclass instance. The sublcass isdetermined by oLiveData's type, unless the dataType config is explicitly passed in. </summary>
 /// <param name="oLiveData" type="HTMLElement">   Pointer to live data.</param>
 /// <param name="oConfigs" type="object">  (optional) Object literal of configuration values.</param>
};
YAHOO.util.DataSourceBase = function(oLiveData, oConfigs) {
   /// <summary> Base class for the YUI DataSource utility. </summary>
 /// <param name="oLiveData" type="HTMLElement">   Pointer to live data.</param>
 /// <param name="oConfigs" type="object">  (optional) Object literal of configuration values.</param>
};
YAHOO.util.Date = function() {
   /// <summary> The static Date class provides helper functions to deal with data of type Date. </summary>
};
YAHOO.util.DateAssert = function() {
   /// <summary> The DateAssert object provides functions to test JavaScript Date objectsfor a variety of cases. </summary>
};
YAHOO.util.DateLocale = function() {
   /// <summary> The DateLocale class is a container and base class for alllocalised date strings used by YAHOO.util.Date. It is usedinternally, but may be extended to provide new date localisations.To create your own DateLocale, follow these steps:Find an existing locale that matches closely with your needsUse this as your base class.  Use YAHOO.util.DateLocale if nothingmatches.Create your own class as an extension of the base class usingYAHOO.lang.merge, and add your own localisations where needed.See the YAHOO.util.DateLocale['en-US'] and YAHOO.util.DateLocale['en-GB']classes which extend YAHOO.util.DateLocale['en'].For example, to implement locales for French french and Canadian french,we would do the following:For French french, we have no existing similar locale, so useYAHOO.util.DateLocale as the base, and extend it:YAHOO.util.DateLocale['fr'] = YAHOO.lang.merge(YAHOO.util.DateLocale, {a: ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'],A: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],b: ['jan', 'f&eacute;v', 'mar', 'avr', 'mai', 'jun', 'jui', 'ao&ucirc;', 'sep', 'oct', 'nov', 'd&eacute;c'],B: ['janvier', 'f&eacute;vrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'ao&ucirc;t', 'septembre', 'octobre', 'novembre', 'd&eacute;cembre'],c: '%a %d %b %Y %T %Z',p: ['', ''],P: ['', ''],x: '%d.%m.%Y',X: '%T'});For Canadian french, we start with French french and change the meaning of \%x:YAHOO.util.DateLocale['fr-CA'] = YAHOO.lang.merge(YAHOO.util.DateLocale['fr'], {x: '%Y-%m-%d'});With that, you can use your new locales:var d = new Date("2008/04/22");YAHOO.util.Date.format(d, {format: "%A, %d %B == %x"}, "fr");will return:mardi, 22 avril == 22.04.2008AndYAHOO.util.Date.format(d, {format: "%A, %d %B == %x"}, "fr-CA");Will return:mardi, 22 avril == 2008-04-22 </summary>
};
YAHOO.util.Dom = function() {
   /// <summary> Provides helper methods for DOM elements. </summary>
};
YAHOO.util.Dom = function() {
   /// <summary> Provides helper methods for DOM elements. </summary>
};
YAHOO.util.Dom.Color = function() {
   /// <summary> Add style management functionality to DOM. </summary>
};
YAHOO.util.Dom.IEStyle = function() {
   /// <summary> Internal methods used to add style management functionality to DOM. </summary>
};
YAHOO.util.DragDrop = function(id, sGroup, config) {
   /// <summary> Defines the interface and base operation of items that that can be dragged or can be drop targets.  It was designed to be extended, overridingthe event handlers for startDrag, onDrag, onDragOver, onDragOut.Up to three html elements can be associated with a DragDrop instance:linked element: the element that is passed into the constructor.This is the element which defines the boundaries for interaction with other DragDrop objects.handle element(s): The drag operation only occurs if the element that was clicked matches a handle element.  By default this is the linked element, but there are times that you will want only a portion of the linked element to initiate the drag operation, and the setHandleElId() method provides a way to define this.drag element: this represents an the element that would be moved alongwith the cursor during a drag operation.  By default, this is the linkedelement itself as in {@link YAHOO.util.DD}.  setDragElId() lets you definea separate element that would be moved, as in {@link YAHOO.util.DDProxy}This class should not be instantiated until the onload event to ensure thatthe associated elements are available.The following would define a DragDrop obj that would interact with any other DragDrop obj in the "group1" group:dd = new YAHOO.util.DragDrop("div1", "group1");Since none of the event handlers have been implemented, nothing would actually happen if you were to run the code above.  Normally you would override this class or one of the default implementations, but you can also override the methods you want on an instance of the class...dd.onDragDrop = function(e, id) {&nbsp;&nbsp;alert("dd was dropped on " + id);} </summary>
 /// <param name="id" type="String"> of the element that is linked to this instance</param>
 /// <param name="sGroup" type="String"> the group of related DragDrop objects</param>
 /// <param name="config" type="object"> an object containing configurable attributesValid properties for DragDrop: padding, isTarget, maintainOffset, primaryButtonOnly,</param>
};
YAHOO.util.DragDropMgr = function() {
   /// <summary> DragDropMgr is a singleton that tracks the element interaction for all DragDrop items in the window.  Generally, you will not call this class directly, but it does have helper methods that could be useful in your DragDrop implementations. </summary>
};
YAHOO.util.DragDropMgr.ElementWrapper = function() {
   /// <summary> Inner class for cached elements </summary>
};
YAHOO.util.Easing = function() {
   /// <summary> Singleton that determines how an animation proceeds from start to end. </summary>
};
YAHOO.util.Element = function(el, map) {
   /// <summary> Element provides an wrapper object to simplify addingevent listeners, using dom methods, and managing attributes. </summary>
 /// <param name="el" type="HTMLElement | String">  The html element that represents the Element.</param>
 /// <param name="map" type="Object"> A key-value map of initial config names and values</param>
};
YAHOO.util.Event = function() {
   /// <summary> The event utility provides functions to add and remove event listeners,event cleansing.  It also tries to automatically remove listeners itregisters during the unload event. </summary>
};
YAHOO.util.EventProvider = function() {
   /// <summary> EventProvider is designed to be used with YAHOO.augment to wrap CustomEvents in an interface that allows events to be subscribed to and fired by name.  This makes it possible for implementing code tosubscribe to an event that either has not been created yet, or willnot be created at all. </summary>
};
YAHOO.util.FunctionDataSource = function(oLiveData, oConfigs) {
   /// <summary> FunctionDataSource class for JavaScript functions. </summary>
 /// <param name="oLiveData" type="HTMLElement">   Pointer to live data.</param>
 /// <param name="oConfigs" type="object">  (optional) Object literal of configuration values.</param>
};
YAHOO.util.Get = function() {
   /// <summary> Fetches and inserts one or more script or link nodes into the document </summary>
};
YAHOO.util.History = function() {
   /// <summary> The History class provides the ability to use the back/forward navigationbuttons in a DHTML application. It also allows a DHTML application tobe bookmarked in a specific state. </summary>
};
YAHOO.util.ImageLoader = function() {
};
YAHOO.util.ImageLoader.bgImgObj = function(domId, url) {
   /// <summary> Background image object. A background image is one whose URL is specified by "background-image" in the element's style </summary>
 /// <param name="domId" type="String"> HTML DOM id of the image element</param>
 /// <param name="url" type="String"> URL for the image</param>
};
YAHOO.util.ImageLoader.group = function(trigEl, trigAct, timeout) {
   /// <summary> A group for images. A group can have one time limit and a series of triggers. Thus the images belonging to this group must share these constraints. </summary>
 /// <param name="trigEl" type="String|HTMLElement"> The HTML element id or reference to assign the trigger event to. Can be null for no trigger</param>
 /// <param name="trigAct" type="String"> The type of event to assign to trigEl. Can be null for no trigger</param>
 /// <param name="timeout" type="Number"> Timeout (time limit) length, in seconds. Can be undefined, or <= 0, for no time limit</param>
};
YAHOO.util.ImageLoader.imgObj = function(domId, url) {
   /// <summary> Base class for image objects to be registered with the groups </summary>
 /// <param name="domId" type="String"> HTML DOM id of the image element</param>
 /// <param name="url" type="String"> URL for the image</param>
};
YAHOO.util.ImageLoader.pngBgImgObj = function(domId, url, ailProps) {
   /// <summary> PNG background image object. A PNG background image is one whose URL is specified through AlphaImageLoader or by "background-image" in the element's style </summary>
 /// <param name="domId" type="String"> HTML DOM id of the image element</param>
 /// <param name="url" type="String"> URL for the image</param>
 /// <param name="ailProps" type="Object"> The AlphaImageLoader properties to be set for the imageValid properties are 'sizingMethod' and 'enabled'</param>
};
YAHOO.util.ImageLoader.srcImgObj = function(domId, url, width, height) {
   /// <summary> Source image object. A source image is one whose URL is specified by a src attribute in the DOM element </summary>
 /// <param name="domId" type="String"> HTML DOM id of the image element</param>
 /// <param name="url" type="String"> URL for the image</param>
 /// <param name="width" type="Int"> pixel width of the image - defaults to image's natural size</param>
 /// <param name="height" type="Int"> pixel height of the image - defaults to image's natural size</param>
};
YAHOO.util.KeyListener = function(attachTo, keyData, handler, event) {
   /// <summary> KeyListener is a utility that provides an easy interface for listening forkeydown/keyup events fired against DOM elements. </summary>
 /// <param name="attachTo" type="HTMLElement"> The element or element ID to which the key event should be attached</param>
 /// <param name="attachTo" type="String"> The element or element ID to which the keyevent should be attached</param>
 /// <param name="keyData" type="Object">  The object literal representing the key(s) to detect. Possible attributes are shift(boolean), alt(boolean), ctrl(boolean) and keys(either an int or an array of ints representing keycodes).</param>
 /// <param name="handler" type="Function">  The CustomEvent handler to fire when the key event is detected</param>
 /// <param name="handler" type="Object">  An object literal representing the handler.</param>
 /// <param name="event" type="String">    Optional. The event (keydown or keyup) to listen for. Defaults automatically to keydown.</param>
};
YAHOO.util.LocalDataSource = function(oLiveData, oConfigs) {
   /// <summary> LocalDataSource class for in-memory data structs including JavaScript arrays,JavaScript object literals (JSON), XML documents, and HTML tables. </summary>
 /// <param name="oLiveData" type="HTMLElement">   Pointer to live data.</param>
 /// <param name="oConfigs" type="object">  (optional) Object literal of configuration values.</param>
};
YAHOO.util.Motion = function(el, attributes, duration, method) {
   /// <summary> Anim subclass for moving elements along a path defined by the "points" member of "attributes".  All "points" are arrays with x, y coordinates.Usage: var myAnim = new YAHOO.util.Motion(el, { points: { to: [800, 800] } }, 1, YAHOO.util.Easing.easeOut); </summary>
 /// <param name="el" type="String | HTMLElement"> Reference to the element that will be animated</param>
 /// <param name="attributes" type="Object"> The attribute(s) to be animated.  Each attribute is an object with at minimum a "to" or "by" member defined.  Additional optional members are "from" (defaults to current value), "units" (defaults to "px").  All attribute names use camelCase.</param>
 /// <param name="duration" type="Number"> (optional, defaults to 1 second) Length of animation (frames or seconds), defaults to time-based</param>
 /// <param name="method" type="Function"> (optional, defaults to YAHOO.util.Easing.easeNone) Computes the values that are applied to the attributes per frame (generally a YAHOO.util.Easing method)</param>
};
YAHOO.util.Number = function() {
   /// <summary> The static Number class provides helper functions to deal with data of typeNumber. </summary>
};
YAHOO.util.ObjectAssert = function() {
   /// <summary> The ObjectAssert object provides functions to test JavaScript objectsfor a variety of cases. </summary>
};
YAHOO.util.Point = function(x, y) {
   /// <summary> A point is a region that is special in that it represents a single point on the grid. </summary>
 /// <param name="x" type="Int"> The X position of the point</param>
 /// <param name="y" type="Int"> The Y position of the point</param>
};
YAHOO.util.Region = function(t, r, b, l) {
   /// <summary> A region is a representation of an object on a grid.  It is definedby the top, right, bottom, left extents, so is rectangular by default.  If other shapes are required, this class could be extended to support it. </summary>
 /// <param name="t" type="Int"> the top extent</param>
 /// <param name="r" type="Int"> the right extent</param>
 /// <param name="b" type="Int"> the bottom extent</param>
 /// <param name="l" type="Int"> the left extent</param>
};
YAHOO.util.Resize = function(el, attrs) {
   /// <summary> Makes an element resizable </summary>
 /// <param name="el" type="String/HTMLElement"> The element to make resizable.</param>
 /// <param name="attrs" type="Object"> Object liternal containing configuration parameters.</param>
};
YAHOO.util.SWFDetect = function() {
   /// <summary> Flafh detection utility. </summary>
};
YAHOO.util.SWFStore = function(containerId, shareData, useCompression) {
   /// <summary> Class for the YUI SWFStore util. </summary>
 /// <param name="containerId" type="HTMLElement">  Container element for the Flash Player instance.</param>
 /// <param name="shareData" type="Boolean">  Whether or not data should be shared across browsers</param>
 /// <param name="useCompression" type="Boolean">  Container element for the Flash Player instance.</param>
};
YAHOO.util.ScriptNodeDataSource = function(oLiveData, oConfigs) {
   /// <summary> ScriptNodeDataSource class for accessing remote data via the YUI Get Utility. </summary>
 /// <param name="oLiveData" type="HTMLElement">   Pointer to live data.</param>
 /// <param name="oConfigs" type="object">  (optional) Object literal of configuration values.</param>
};
YAHOO.util.Scroll = function(el, attributes, duration, method) {
   /// <summary> Anim subclass for scrolling elements to a position defined by the "scroll"member of "attributes".  All "scroll" members are arrays with x, y scroll positions.Usage: var myAnim = new YAHOO.util.Scroll(el, { scroll: { to: [0, 800] } }, 1, YAHOO.util.Easing.easeOut); </summary>
 /// <param name="el" type="String or HTMLElement"> Reference to the element that will be animated</param>
 /// <param name="attributes" type="Object"> The attribute(s) to be animated.  Each attribute is an object with at minimum a "to" or "by" member defined.  Additional optional members are "from" (defaults to current value), "units" (defaults to "px").  All attribute names use camelCase.</param>
 /// <param name="duration" type="Number"> (optional, defaults to 1 second) Length of animation (frames or seconds), defaults to time-based</param>
 /// <param name="method" type="Function"> (optional, defaults to YAHOO.util.Easing.easeNone) Computes the values that are applied to the attributes per frame (generally a YAHOO.util.Easing method)</param>
};
YAHOO.util.Selector = function() {
   /// <summary> Provides helper methods for collecting and filtering DOM elements. </summary>
};
YAHOO.util.ShouldError = function(message) {
   /// <summary> ShouldError is subclass of AssertionError that is thrown whenevera test is expected to throw an error but doesn't. </summary>
 /// <param name="message" type="String"> The message to display when the error occurs.</param>
};
YAHOO.util.ShouldFail = function(message) {
   /// <summary> ShouldFail is subclass of AssertionError that is thrown whenevera test was expected to fail but did not. </summary>
 /// <param name="message" type="String"> The message to display when the error occurs.</param>
};
YAHOO.util.Sort = function() {
   /// <summary> Sort static utility to support Column sorting. </summary>
};
YAHOO.util.Storage = function(location, conf) {
   /// <summary> The Storage class is an HTML 5 storage API clone, used to wrap individual storage implementations with a common API. </summary>
 /// <param name="location" type="String">  Required. The storage location.</param>
 /// <param name="conf" type="Object">  Required. A configuration object.</param>
};
YAHOO.util.StorageEngineGears = function(location, conf) {
   /// <summary> The StorageEngineGears class implements the Google Gears storage engine. </summary>
 /// <param name="location" type="String">  Required. The storage location.</param>
 /// <param name="conf" type="Object">  Required. A configuration object.</param>
};
YAHOO.util.StorageEngineHTML5 = function(location, conf) {
   /// <summary> The StorageEngineHTML5 class implements the HTML5 storage engine. </summary>
 /// <param name="location" type="String">  Required. The storage location.</param>
 /// <param name="conf" type="Object">  Required. A configuration object.</param>
};
YAHOO.util.StorageEngineKeyed = function() {
   /// <summary> The StorageEngineKeyed class implements the interface necessary for managing keys. </summary>
};
YAHOO.util.StorageEngineSWF = function(location, conf) {
   /// <summary> The StorageEngineSWF class implements the SWF storage engine. </summary>
 /// <param name="location" type="String">  Required. The storage location.</param>
 /// <param name="conf" type="Object">  Required. A configuration object.</param>
};
YAHOO.util.StorageEvent = function(storageArea, key, oldValue, newValue, type) {
   /// <summary> The StorageEvent class manages the storage events by emulating the HTML 5 implementation. </summary>
 /// <param name="storageArea" type="Object">  Required. The Storage object that was affected.</param>
 /// <param name="key" type="String">  Required. The key being changed; DOMString in HTML 5 spec.</param>
 /// <param name="oldValue" type="String">  Required. The old value of the key being changed; DOMString in HTML 5 spec.</param>
 /// <param name="newValue" type="String">  Required. The new value of the key being changed; DOMString in HTML 5 spec.</param>
 /// <param name="type" type="String">  Required. The storage event type.</param>
};
YAHOO.util.StorageManager = function() {
   /// <summary> The StorageManager class is a singleton that registers DataStorage objects and returns instances of those objects. </summary>
};
YAHOO.util.StyleSheet = function(seed, name) {
   /// <summary> Create an instance of YAHOO.util.StyleSheet to encapsulate a css stylesheet.The constructor can be called using function or constructor syntax.var sheet = YAHOO.util.StyleSheet(..);orvar sheet = new YAHOO.util.StyleSheet(..);The first parameter passed can be any of the following things:The desired string name to register a new empty sheetThe string name of an existing YAHOO.util.StyleSheet instanceThe unique yuiSSID generated for an existing YAHOO.util.StyleSheet instanceThe id of an existing &lt;link&gt; or &lt;style&gt; nodeThe node reference for an existing &lt;link&gt; or &lt;style&gt; nodeA chunk of css text to create a new stylesheet fromIf a string is passed, StyleSheet will first look in its static nameregistry for an existing sheet, then in the DOM for an element with that id.If neither are found and the string contains the { character, it will beused as a the initial cssText for a new StyleSheet.  Otherwise, a new emptyStyleSheet is created, assigned the string value as a name, and registeredstatically by that name.The optional second parameter is a string name to register the sheet as.This param is largely useful when providing a node id/ref or chunk of csstext to create a populated instance. </summary>
 /// <param name="seed" type="String|HTMLElement">  a style or link node, its id, or a name oryuiSSID of a StyleSheet, or a string of css text (see above)</param>
 /// <param name="name" type="String">  OPTIONAL name to register instance for future staticaccess</param>
};
YAHOO.util.Subscriber = function(fn, obj, overrideContext) {
   /// <summary> Stores the subscriber information to be used when the event fires. </summary>
 /// <param name="fn" type="Function">       The function to execute</param>
 /// <param name="obj" type="Object">      An object to be passed along when the event fires</param>
 /// <param name="overrideContext" type="boolean"> If true, the obj passed in becomes the executioncontext of the listener</param>
};
YAHOO.util.UnexpectedError = function(cause) {
   /// <summary> UnexpectedError is subclass of AssertionError that is thrown wheneveran error occurs within the course of a test and the test was not expectedto throw an error. </summary>
 /// <param name="cause" type="Error"> The unexpected error that caused this error to be thrown.</param>
};
YAHOO.util.UnexpectedValue = function(message, unexpected) {
   /// <summary> UnexpectedValue is subclass of AssertionError that is thrown whenevera value was unexpected in its scope. This typically means that a testwas performed to determine that a value was *not* equal to a certainvalue. </summary>
 /// <param name="message" type="String"> The message to display when the error occurs.</param>
 /// <param name="unexpected" type="Object"> The unexpected value.</param>
};
YAHOO.util.UserAction = function() {
   /// <summary> The UserAction object provides functions that simulate events occurring inthe browser. Since these are simulated events, they do not behave exactlyas regular, user-initiated events do, but can be used to test simpleuser interactions safely. </summary>
};
YAHOO.util.XHRDataSource = function(oLiveData, oConfigs) {
   /// <summary> XHRDataSource class for accessing remote data via the YUI Connection ManagerUtility </summary>
 /// <param name="oLiveData" type="HTMLElement">   Pointer to live data.</param>
 /// <param name="oConfigs" type="object">  (optional) Object literal of configuration values.</param>
};
YAHOO.util.YUILoader = function() {
   /// <summary> YUILoader provides dynamic loading for YUI. </summary>
};
YAHOO.widget = function() {
};
YAHOO.widget.AutoComplete = function(elInput, elContainer, oDataSource, oConfigs) {
   /// <summary> The AutoComplete class provides the customizable functionality of a plug-and-play DHTMLauto completion widget.  Some key features:Navigate with up/down arrow keys and/or mouse to pick a selectionThe drop down container can "roll down" or "fly out" via configurableanimationUI look-and-feel customizable through CSS, including containerattributes, borders, position, fonts, etc </summary>
 /// <param name="elInput" type="HTMLElement">  DOM element reference of an input field.</param>
 /// <param name="elInput" type="String">  String ID of an input field.</param>
 /// <param name="elContainer" type="HTMLElement">  DOM element reference of an existing DIV.</param>
 /// <param name="elContainer" type="String">  String ID of an existing DIV.</param>
 /// <param name="oDataSource" type="YAHOO.widget.DataSource">  DataSource instance.</param>
 /// <param name="oConfigs" type="Object">  (optional) Object literal of configuration params.</param>
};
YAHOO.widget.Axis = function() {
   /// <summary> Defines a CartesianChart's vertical or horizontal axis. </summary>
};
YAHOO.widget.BarChart = function(containerId, dataSource, attributes) {
   /// <summary> BarChart class for the YUI Charts widget. </summary>
 /// <param name="containerId" type="HTMLElement">  Container element for the Flash Player instance.</param>
 /// <param name="dataSource" type="YAHOO.util.DataSource">  DataSource instance.</param>
 /// <param name="attributes" type="object">  (optional) Object literal of configuration values.</param>
};
YAHOO.widget.BarSeries = function() {
   /// <summary> BarSeries class for the YUI Charts widget. </summary>
};
YAHOO.widget.BaseCellEditor = function(sType, oConfigs) {
   /// <summary> The BaseCellEditor class provides base functionality common to all inline celleditors for a DataTable widget. </summary>
 /// <param name="sType" type="String">  Type indicator, to map to YAHOO.widget.DataTable.Editors.</param>
 /// <param name="oConfigs" type="Object">  (Optional) Object literal of configs.</param>
};
YAHOO.widget.Button = function(p_oElement, p_oAttributes) {
   /// <summary> The Button class creates a rich, graphical button. </summary>
 /// <param name="p_oElement" type="String"> String specifying the id attribute of the &#60;input&#62;, &#60;button&#62;,&#60;a&#62;, or &#60;span&#62; element to be used to create the button.</param>
 /// <param name="p_oElement" type="HTMLInputElement|HTMLButtonElement|HTMLElement"> Object reference for the &#60;input&#62;, &#60;button&#62;, &#60;a&#62;, or &#60;span&#62; element to be used to create the button.</param>
 /// <param name="p_oElement" type="Object"> Object literal specifying a set of   configuration attributes used to create the button.</param>
 /// <param name="p_oAttributes" type="Object"> Optional. Object literal specifying a set  of configuration attributes used to create the button.</param>
};
YAHOO.widget.ButtonGroup = function(p_oElement, p_oAttributes) {
   /// <summary> The ButtonGroup class creates a set of buttons that are mutually exclusive; checking one button in the set will uncheck all others in the button group. </summary>
 /// <param name="p_oElement" type="String"> String specifying the id attribute of the &#60;div&#62; element of the button group.</param>
 /// <param name="p_oElement" type="HTMLDivElement"> Object specifying the &#60;div&#62; element of the button group.</param>
 /// <param name="p_oElement" type="Object"> Object literal specifying a set of configuration attributes used to create the button group.</param>
 /// <param name="p_oAttributes" type="Object"> Optional. Object literal specifying a set of configuration attributes used to create the button group.</param>
};
YAHOO.widget.Calendar = function(id, container, config) {
   /// <summary> Calendar is the base class for the Calendar widget. In its most basicimplementation, it has the ability to render a calendar widget on the pagethat can be manipulated to select a single date, move back and forth betweenmonths and years.To construct the placeholder for the calendar widget, the code is asfollows:NOTE: As of 2.4.0, the constructor's ID argument is optional.The Calendar can be constructed by simply providing a container ID string, or a reference to a container DIV HTMLElement (the element needs to exist in the document).E.g.:var c = new YAHOO.widget.Calendar("calContainer", configOptions);or:var containerDiv = YAHOO.util.Dom.get("calContainer");var c = new YAHOO.widget.Calendar(containerDiv, configOptions);If not provided, the ID will be generated from the container DIV ID by adding an "_t" suffix.For example if an ID is not provided, and the container's ID is "calContainer", the Calendar's ID will be set to "calContainer_t". </summary>
 /// <param name="id" type="String"> optional The id of the table element that will represent the Calendar widget. As of 2.4.0, this argument is optional.</param>
 /// <param name="container" type="String | HTMLElement"> The id of the container div element that will wrap the Calendar table, or a reference to a DIV element which exists in the document.</param>
 /// <param name="config" type="Object"> optional The configuration object containing the initial configuration values for the Calendar.</param>
};
YAHOO.widget.Calendar2up = function() {
};
YAHOO.widget.CalendarGroup = function(id, container, config) {
   /// <summary> YAHOO.widget.CalendarGroup is a special container class for YAHOO.widget.Calendar. This class facilitatesthe ability to have multi-page calendar views that share a single dataset and aredependent on each other.The calendar group instance will refer to each of its elements using a 0-based index.For example, to construct the placeholder for a calendar group widget with id "cal1" andcontainerId of "cal1Container", the markup would be as follows:The tables for the calendars ("cal1_0" and "cal1_1") will be inserted into those containers.NOTE: As of 2.4.0, the constructor's ID argument is optional.The CalendarGroup can be constructed by simply providing a container ID string, or a reference to a container DIV HTMLElement (the element needs to exist in the document).E.g.:var c = new YAHOO.widget.CalendarGroup("calContainer", configOptions);or:var containerDiv = YAHOO.util.Dom.get("calContainer");var c = new YAHOO.widget.CalendarGroup(containerDiv, configOptions);If not provided, the ID will be generated from the container DIV ID by adding an "_t" suffix.For example if an ID is not provided, and the container's ID is "calContainer", the CalendarGroup's ID will be set to "calContainer_t". </summary>
 /// <param name="id" type="String"> optional The id of the table element that will represent the CalendarGroup widget. As of 2.4.0, this argument is optional.</param>
 /// <param name="container" type="String | HTMLElement"> The id of the container div element that will wrap the CalendarGroup table, or a reference to a DIV element which exists in the document.</param>
 /// <param name="config" type="Object"> optional The configuration object containing the initial configuration values for the CalendarGroup.</param>
};
YAHOO.widget.CalendarNavigator = function(cal) {
   /// <summary> The CalendarNavigator is used along with a Calendar/CalendarGroup to provide a Month/Year popup navigation control, allowing the user to navigate to a specific month/year in the Calendar/CalendarGroup without having to scroll through months sequentially </summary>
 /// <param name="cal" type="Calendar|CalendarGroup"> The instance of the Calendar or CalendarGroup to which this CalendarNavigator should be attached.</param>
};
YAHOO.widget.Calendar_Core = function() {
};
YAHOO.widget.Carousel = function(el, cfg) {
   /// <summary> The Carousel widget. </summary>
 /// <param name="el" type="HTMLElement | String">  The HTML element that represents thethe container that houses the Carousel.</param>
 /// <param name="cfg" type="Object">  (optional) The configuration values</param>
};
YAHOO.widget.CartesianChart = function(type, containerId, dataSource, attributes) {
   /// <summary> CartesianChart class for the YUI Charts widget. </summary>
 /// <param name="type" type="String">  The char type. May be "line", "column", or "bar"</param>
 /// <param name="containerId" type="HTMLElement">  Container element for the Flash Player instance.</param>
 /// <param name="dataSource" type="YAHOO.util.DataSource">  DataSource instance.</param>
 /// <param name="attributes" type="object">  (optional) Object literal of configuration values.</param>
};
YAHOO.widget.CartesianSeries = function() {
   /// <summary> Functionality common to most series appearing in cartesian charts.Generally, a CartesianSeries object shouldn't beinstantiated directly. Instead, a subclass with a concrete implementationshould be used. </summary>
};
YAHOO.widget.CategoryAxis = function() {
   /// <summary> A type of axis that displays items in categories. </summary>
};
YAHOO.widget.CellEditor = function(sType, oConfigs) {
   /// <summary> Factory class for instantiating a BaseCellEditor subclass. </summary>
 /// <param name="sType" type="String">  Type indicator, to map to YAHOO.widget.DataTable.Editors.</param>
 /// <param name="oConfigs" type="Object">  (Optional) Object literal of configs.</param>
};
YAHOO.widget.Chart = function(type, containerId, dataSource, attributes) {
   /// <summary> Chart class for the YUI Charts widget. </summary>
 /// <param name="type" type="String">  The char type. May be "line", "column", "bar", or "pie"</param>
 /// <param name="containerId" type="HTMLElement">  Container element for the Flash Player instance.</param>
 /// <param name="dataSource" type="YAHOO.util.DataSource">  DataSource instance.</param>
 /// <param name="attributes" type="object">  (optional) Object literal of configuration values.</param>
};
YAHOO.widget.CheckboxCellEditor = function(oConfigs) {
   /// <summary> The CheckboxCellEditor class provides functionality for inline editingDataTable cell data with checkboxes. </summary>
 /// <param name="oConfigs" type="Object">  (Optional) Object literal of configs.</param>
};
YAHOO.widget.ColorPicker = function(el, attr) {
   /// <summary> A widget to select colors </summary>
 /// <param name="el(optional)" type="HTMLElement | String | Object"> The html element that represents the colorpicker, or the attribute object to use. An element will be created if none provided.</param>
 /// <param name="attr" type="Object"> (optional) A key map of the colorpicker's initial attributes.  Ignored if first arg is attributes object.</param>
};
YAHOO.widget.Column = function(oConfigs) {
   /// <summary> The Column class defines and manages attributes of DataTable Columns </summary>
 /// <param name="oConfigs" type="Object">  Object literal of definitions.</param>
};
YAHOO.widget.ColumnChart = function(containerId, dataSource, attributes) {
   /// <summary> ColumnChart class for the YUI Charts widget. </summary>
 /// <param name="containerId" type="HTMLElement">  Container element for the Flash Player instance.</param>
 /// <param name="dataSource" type="YAHOO.util.DataSource">  DataSource instance.</param>
 /// <param name="attributes" type="object">  (optional) Object literal of configuration values.</param>
};
YAHOO.widget.ColumnSeries = function() {
   /// <summary> ColumnSeries class for the YUI Charts widget. </summary>
};
YAHOO.widget.ColumnSet = function(aDefinitions) {
   /// <summary> The ColumnSet class defines and manages a DataTable's Columns,including nested hierarchies and access to individual Column instances. </summary>
 /// <param name="aDefinitions" type="Object[]">  Array of object literals that define cells inthe THEAD.</param>
};
YAHOO.widget.ContainerEffect = function(overlay, attrIn, attrOut, targetterElement, Optional) {
   /// <summary> ContainerEffect encapsulates animation transitions that are executed when an Overlay is shown or hidden. </summary>
 /// <param name="overlay" type="YAHOO.widget.Overlay"> The Overlay that the animation should be associated with</param>
 /// <param name="attrIn" type="Object"> The object literal representing the animation arguments to be used for the animate-in transition. The arguments for this literal are: attributes(object, see YAHOO.util.Anim for description), duration(Number), and method(i.e. Easing.easeIn).</param>
 /// <param name="attrOut" type="Object"> The object literal representing the animation arguments to be used for the animate-out transition. The arguments for  this literal are: attributes(object, see YAHOO.util.Anim for description), duration(Number), and method(i.e. Easing.easeIn).</param>
 /// <param name="targetElement" type="HTMLElement"> Optional. The target element that  should be animated during the transition. Defaults to overlay.element.</param>
 /// <param name="Optional." type="class"> The animation class to instantiate. Defaults to YAHOO.util.Anim. Other options include YAHOO.util.Motion.</param>
};
YAHOO.widget.ContextMenu = function(p_oElement, p_oConfig) {
   /// <summary> Creates a list of options or commands which are made visible in response to an HTML element's "contextmenu" event ("mousedown" for Opera). </summary>
 /// <param name="p_oElement" type="String"> String specifying the id attribute of the &#60;div&#62; element of the context menu.</param>
 /// <param name="p_oElement" type="String"> String specifying the id attribute of the &#60;select&#62; element to be used as the data source for the context menu.</param>
 /// <param name="p_oElement" type="HTMLDivElement"> Object specifying the &#60;div&#62; element of the context menu.</param>
 /// <param name="p_oElement" type="HTMLSelectElement"> Object specifying the &#60;select&#62; element to be used as the data source for the context menu.</param>
 /// <param name="p_oConfig" type="Object"> Optional. Object literal specifying the configuration for the context menu. See configuration class documentation for more details.</param>
};
YAHOO.widget.ContextMenuItem = function(p_oObject, p_oConfig) {
   /// <summary> Creates an item for a context menu. </summary>
 /// <param name="p_oObject" type="String"> String specifying the text of the context menu item.</param>
 /// <param name="p_oObject" type="HTMLLIElement"> Object specifying the &#60;li&#62; element of the context menu item.</param>
 /// <param name="p_oObject" type="HTMLOptGroupElement"> Object specifying the &#60;optgroup&#62; element of the context menu item.</param>
 /// <param name="p_oObject" type="HTMLOptionElement"> Object specifying the &#60;option&#62; element of the context menu item.</param>
 /// <param name="p_oConfig" type="Object"> Optional. Object literal specifying the configuration for the context menu item. See configuration class documentation for more details.</param>
};
YAHOO.widget.DataTable = function(elContainer, aColumnDefs, oDataSource, oConfigs) {
   /// <summary> DataTable class for the YUI DataTable widget. </summary>
 /// <param name="elContainer" type="HTMLElement">  Container element for the TABLE.</param>
 /// <param name="aColumnDefs" type="Object[]">  Array of object literal Column definitions.</param>
 /// <param name="oDataSource" type="YAHOO.util.DataSource">  DataSource instance.</param>
 /// <param name="oConfigs" type="object">  (optional) Object literal of configuration values.</param>
};
YAHOO.widget.DateCellEditor = function(oConfigs) {
   /// <summary> The DataCellEditor class provides functionality for inline editingDataTable cell data with a YUI Calendar. </summary>
 /// <param name="oConfigs" type="Object">  (Optional) Object literal of configs.</param>
};
YAHOO.widget.DateMath = function() {
   /// <summary> YAHOO.widget.DateMath is used for simple date manipulation. The class is a static utilityused for adding, subtracting, and comparing dates. </summary>
};
YAHOO.widget.DateNode = function(oData, oParent, expanded) {
   /// <summary> A Date-specific implementation that differs from TextNode in that it uses YAHOO.widget.Calendar as an in-line editor, if availableIf Calendar is not available, it behaves as a plain TextNode. </summary>
 /// <param name="oData" type="object">  a string or object containing the data that willbe used to render this node.Providing a string is the same as providing an object with a single property named label.All values in the oData will be used to set equally named properties in the nodeas long as the node does have such properties, they are not undefined, private nor functions.All attributes are made available in noderef.data, whichcan be used to store custom attributes.  TreeView.getNode(s)ByPropertycan be used to retrieve a node by one of the attributes.</param>
 /// <param name="oParent" type="YAHOO.widget.Node">  this node's parent node</param>
 /// <param name="expanded" type="boolean">  the initial expanded/collapsed state (deprecated; use oData.expanded)</param>
};
YAHOO.widget.Dialog = function(el, userConfig) {
   /// <summary> Dialog is an implementation of Panel that can be used to submit form data.Built-in functionality for buttons with event handlers is included. If the optional YUI Button dependancy is included on the page, the buttonscreated will be instances of YAHOO.widget.Button, otherwise regular HTML buttonswill be created.Forms can be processed in 3 ways -- via an asynchronous Connection utility call, a simple form POST or GET, or manually. The YUI Connection utility should beincluded if you're using the default "async" postmethod, but is not required ifyou're using any of the other postmethod values. </summary>
 /// <param name="el" type="String"> The element ID representing the Dialog OR</param>
 /// <param name="el" type="HTMLElement"> The element representing the Dialog</param>
 /// <param name="userConfig" type="Object"> The configuration object literal containing the configuration that should be set for this Dialog. See configuration documentation for more details.</param>
};
YAHOO.widget.DropdownCellEditor = function(oConfigs) {
   /// <summary> The DropdownCellEditor class provides functionality for inline editingDataTable cell data a SELECT element. </summary>
 /// <param name="oConfigs" type="Object">  (Optional) Object literal of configs.</param>
};
YAHOO.widget.DualSlider = function(minSlider, maxSlider, range, initVals) {
   /// <summary> A slider with two thumbs, one that represents the min value and the other the max.  Actually a composition of two sliders, both withthe same background.  The constraints for each slider are adjusteddynamically so that the min value of the max slider is equal or greaterto the current value of the min slider, and the max value of the minslider is the current value of the max slider.Constructor assumes both thumbs are positioned absolutely at the 0 mark onthe background. </summary>
 /// <param name="minSlider" type="Slider"> The Slider instance used for the min value thumb</param>
 /// <param name="maxSlider" type="Slider"> The Slider instance used for the max value thumb</param>
 /// <param name="range" type="int"> The number of pixels the thumbs may move within</param>
 /// <param name="initVals" type="Array"> (optional) [min,max] Initial thumb placement</param>
};
YAHOO.widget.Editor = function(el, attrs) {
   /// <summary> The Rich Text Editor is a UI control that replaces a standard HTML textarea; it allows for the rich formatting of text content, including common structural treatments like lists, formatting treatments like bold and italic text, and drag-and-drop inclusion and sizing of images. The Rich Text Editor's toolbar is extensible via a plugin architecture so that advanced implementations can achieve a high degree of customization. </summary>
 /// <param name="el" type="String/HTMLElement"> The textarea element to turn into an editor.</param>
 /// <param name="attrs" type="Object"> Object liternal containing configuration parameters.</param>
};
YAHOO.widget.EditorInfo = function() {
   /// <summary> Singleton object used to track the open window objects and panels across the various open editors </summary>
};
YAHOO.widget.EditorWindow = function() {
   /// <summary> Class to hold Window information between uses. We use the same panel to show the windows, so using this will allow you to configure a window before it is shown.This is what you pass to Editor.openWindow();. These parameters will not take effect until the openWindow() is called in the editor. </summary>
};
YAHOO.widget.FlashAdapter = function() {
   /// <summary> Wraps Flash embedding functionality and allows communication with SWF throughattributes. </summary>
};
YAHOO.widget.HTMLNode = function(oData, oParent, expanded, hasIcon) {
   /// <summary> This implementation takes either a string or object for theoData argument.  If is it a string, it will use it for the displayof this node (and it can contain any html code).  If the parameteris an object,it looks for a parameter called "html" that will beused for this node's display. </summary>
 /// <param name="oData" type="object">  a string or object containing the data that willbe used to render this node.  Providing a string is the same as providing an object with a single property named html.All values in the oData will be used to set equally named properties in the nodeas long as the node does have such properties, they are not undefined, private or functions.All other attributes are made available in noderef.data, whichcan be used to store custom attributes.  TreeView.getNode(s)ByPropertycan be used to retrieve a node by one of the attributes.</param>
 /// <param name="oParent" type="YAHOO.widget.Node">  this node's parent node</param>
 /// <param name="expanded" type="boolean">  the initial expanded/collapsed state (deprecated; use oData.expanded)</param>
 /// <param name="hasIcon" type="boolean">  specifies whether or not leaf nodes shouldbe rendered with or without a horizontal line line and/or toggle icon. If the iconis not displayed, the content fills the space it would have occupied.This option operates independently of the leaf node presentation logicfor dynamic nodes.(deprecated; use oData.hasIcon)</param>
};
YAHOO.widget.ImageCropper = function(el, attrs) {
   /// <summary> Creates a Image Cropper control. </summary>
 /// <param name="el" type="String/HTMLElement"> The image element to make croppable.</param>
 /// <param name="attrs" type="Object"> Object liternal containing configuration parameters.</param>
};
YAHOO.widget.Layout = function(el, attrs) {
   /// <summary> Provides a fixed layout containing, top, bottom, left, right and center layout units. It can be applied to either the body or an element. </summary>
 /// <param name="el" type="String/HTMLElement"> The element to make contain a layout.</param>
 /// <param name="attrs" type="Object"> Object liternal containing configuration parameters.</param>
};
YAHOO.widget.LayoutUnit = function(el, attrs) {
   /// <summary> Provides a fixed position unit containing a header, body and footer for use with a YAHOO.widget.Layout instance. </summary>
 /// <param name="el" type="String/HTMLElement"> The element to make a unit.</param>
 /// <param name="attrs" type="Object"> Object liternal containing configuration parameters.</param>
};
YAHOO.widget.LineChart = function(containerId, dataSource, attributes) {
   /// <summary> LineChart class for the YUI Charts widget. </summary>
 /// <param name="containerId" type="HTMLElement">  Container element for the Flash Player instance.</param>
 /// <param name="dataSource" type="YAHOO.util.DataSource">  DataSource instance.</param>
 /// <param name="attributes" type="object">  (optional) Object literal of configuration values.</param>
};
YAHOO.widget.LineSeries = function() {
   /// <summary> LineSeries class for the YUI Charts widget. </summary>
};
YAHOO.widget.LogMsg = function(oConfigs) {
   /// <summary> The LogMsg class defines a single log message. </summary>
 /// <param name="oConfigs" type="Object">  Object literal of configuration params.</param>
};
YAHOO.widget.LogReader = function(elContainer, oConfigs) {
   /// <summary> The LogReader class provides UI to read messages logged to YAHOO.widget.Logger. </summary>
 /// <param name="elContainer" type="HTMLElement">  (optional) DOM element reference of an existing DIV.</param>
 /// <param name="elContainer" type="String">  (optional) String ID of an existing DIV.</param>
 /// <param name="oConfigs" type="Object">  (optional) Object literal of configuration params.</param>
};
YAHOO.widget.LogWriter = function(sSource) {
   /// <summary> The LogWriter class provides a mechanism to log messages throughYAHOO.widget.Logger from a named source. </summary>
 /// <param name="sSource" type="String">  Source of LogWriter instance.</param>
};
YAHOO.widget.Logger = function() {
   /// <summary> The singleton Logger class provides core log management functionality. Saveslogs written through the global YAHOO.log function or written by a LogWriterinstance. Provides access to logs for reading by a LogReader instance ornative browser console such as the Firebug extension to Firefox or Safari'sJavaScript console through integration with the console.log() method. </summary>
};
YAHOO.widget.Menu = function(p_oElement, p_oConfig) {
   /// <summary> The Menu class creates a container that holds a vertical list representing a set of options or commands.  Menu is the base class for all menu containers. </summary>
 /// <param name="p_oElement" type="String"> String specifying the id attribute of the &#60;div&#62; element of the menu.</param>
 /// <param name="p_oElement" type="String"> String specifying the id attribute of the &#60;select&#62; element to be used as the data source for the menu.</param>
 /// <param name="p_oElement" type="HTMLDivElement"> Object specifying the &#60;div&#62; element of the menu.</param>
 /// <param name="p_oElement" type="HTMLSelectElement"> Object specifying the &#60;select&#62; element to be used as the data source for the menu.</param>
 /// <param name="p_oConfig" type="Object"> Optional. Object literal specifying the configuration for the menu. See configuration class documentation for more details.</param>
};
YAHOO.widget.MenuBar = function(p_oElement, p_oConfig) {
   /// <summary> Horizontal collection of items, each of which can contain a submenu. </summary>
 /// <param name="p_oElement" type="String"> String specifying the id attribute of the &#60;div&#62; element of the menu bar.</param>
 /// <param name="p_oElement" type="String"> String specifying the id attribute of the &#60;select&#62; element to be used as the data source for the menu bar.</param>
 /// <param name="p_oElement" type="HTMLDivElement"> Object specifying the &#60;div&#62; element of the menu bar.</param>
 /// <param name="p_oElement" type="HTMLSelectElement"> Object specifying the &#60;select&#62; element to be used as the data source for the menu bar.</param>
 /// <param name="p_oConfig" type="Object"> Optional. Object literal specifying the configuration for the menu bar. See configuration class documentation formore details.</param>
};
YAHOO.widget.MenuBarItem = function(p_oObject, p_oConfig) {
   /// <summary> Creates an item for a menu bar. </summary>
 /// <param name="p_oObject" type="String"> String specifying the text of the menu bar item.</param>
 /// <param name="p_oObject" type="HTMLLIElement"> Object specifying the &#60;li&#62; element of the menu bar item.</param>
 /// <param name="p_oObject" type="HTMLOptGroupElement"> Object specifying the &#60;optgroup&#62; element of the menu bar item.</param>
 /// <param name="p_oObject" type="HTMLOptionElement"> Object specifying the &#60;option&#62; element of the menu bar item.</param>
 /// <param name="p_oConfig" type="Object"> Optional. Object literal specifying the configuration for the menu bar item. See configuration class documentation for more details.</param>
};
YAHOO.widget.MenuItem = function(p_oObject, p_oConfig) {
   /// <summary> Creates an item for a menu. </summary>
 /// <param name="p_oObject" type="String"> String specifying the text of the menu item.</param>
 /// <param name="p_oObject" type="HTMLLIElement"> Object specifying the &#60;li&#62; element of the menu item.</param>
 /// <param name="p_oObject" type="HTMLOptGroupElement"> Object specifying the &#60;optgroup&#62; element of the menu item.</param>
 /// <param name="p_oObject" type="HTMLOptionElement"> Object specifying the &#60;option&#62; element of the menu item.</param>
 /// <param name="p_oConfig" type="Object"> Optional. Object literal specifying the configuration for the menu item. See configuration class documentation for more details.</param>
};
YAHOO.widget.MenuManager = function() {
   /// <summary> Singleton that manages a collection of all menus and menu items.  Listens for DOM events at the document level and dispatches the events to the corresponding menu or menu item. </summary>
};
YAHOO.widget.MenuNode = function(oData, oParent, expanded) {
   /// <summary> A menu-specific implementation that differs from TextNode in that only one sibling can be expanded at a time. </summary>
 /// <param name="oData" type="object">  a string or object containing the data that willbe used to render this node.Providing a string is the same as providing an object with a single property named label.All values in the oData will be used to set equally named properties in the nodeas long as the node does have such properties, they are not undefined, private or functions.All attributes are made available in noderef.data, whichcan be used to store custom attributes.  TreeView.getNode(s)ByPropertycan be used to retrieve a node by one of the attributes.</param>
 /// <param name="oParent" type="YAHOO.widget.Node">  this node's parent node</param>
 /// <param name="expanded" type="boolean">  the initial expanded/collapsed state (deprecated; use oData.expanded)</param>
};
YAHOO.widget.Module = function(el, userConfig) {
   /// <summary> Module is a JavaScript representation of the Standard Module Format. Standard Module Format is a simple standard for markup containers where child nodes representing the header, body, and footer of the content are denoted using the CSS classes "hd", "bd", and "ft" respectively. Module is the base class for all other classes in the YUI Container package. </summary>
 /// <param name="el" type="String"> The element ID representing the Module OR</param>
 /// <param name="el" type="HTMLElement"> The element representing the Module</param>
 /// <param name="userConfig" type="Object"> The configuration Object literal containing the configuration that should be set for this module. See configuration documentation for more details.</param>
};
YAHOO.widget.Node = function(oData, oParent, expanded) {
   /// <summary> The base class for all tree nodes.  The node's presentation and behavior inresponse to mouse events is handled in Node subclasses. </summary>
 /// <param name="oData" type="object">  a string or object containing the data that willbe used to render this node, and any custom attributes that should bestored with the node (which is available in noderef.data).All values in oData will be used to set equally named properties in the nodeas long as the node does have such properties, they are not undefined, private or functions,the rest of the values will be stored in noderef.data</param>
 /// <param name="oParent" type="Node">  this node's parent node</param>
 /// <param name="expanded" type="boolean">  the initial expanded/collapsed state (deprecated, use oData.expanded)</param>
};
YAHOO.widget.NumericAxis = function() {
   /// <summary> A type of axis whose units are measured in numeric values. </summary>
};
YAHOO.widget.Overlay = function(el, userConfig) {
   /// <summary> Overlay is a Module that is absolutely positioned above the page flow. It has convenience methods for positioning and sizing, as well as options for controlling zIndex and constraining the Overlay's position to the current visible viewport. Overlay also contains a dynamicly generated IFRAME which is placed beneath it for Internet Explorer 6 and 5.x so that it will be properly rendered above SELECT elements. </summary>
 /// <param name="el" type="String"> The element ID representing the Overlay OR</param>
 /// <param name="el" type="HTMLElement"> The element representing the Overlay</param>
 /// <param name="userConfig" type="Object"> The configuration object literal containing the configuration that should be set for this Overlay. See configuration documentation for more details.</param>
};
YAHOO.widget.OverlayManager = function(overlays, userConfig) {
   /// <summary> OverlayManager is used for maintaining the focus status of multiple Overlays. </summary>
 /// <param name="overlays" type="Array"> Optional. A collection of Overlays to register with the manager.</param>
 /// <param name="userConfig" type="Object">  The object literal representing the user configuration of the OverlayManager</param>
};
YAHOO.widget.Paginator = function(config) {
   /// <summary> Instantiate a Paginator, passing a configuration object to the contructor.The configuration object should contain the following properties:rowsPerPage : n (int)totalRecords : n (int or Paginator.VALUE_UNLIMITED)containers : id | el | arr (HTMLElement reference, its id, or an array of either) </summary>
 /// <param name="config" type="Object">  Object literal to set instance and ui componentconfiguration.</param>
};
YAHOO.widget.Paginator.ui = function() {
};
YAHOO.widget.Paginator.ui.CurrentPageReport = function(p) {
   /// <summary> ui Component to generate the textual report of current pagination status.E.g. "Now viewing page 1 of 13". </summary>
 /// <param name="p" type="Pagintor">  Paginator instance to attach to</param>
};
YAHOO.widget.Paginator.ui.FirstPageLink = function(p) {
   /// <summary> ui Component to generate the link to jump to the first page. </summary>
 /// <param name="p" type="Pagintor">  Paginator instance to attach to</param>
};
YAHOO.widget.Paginator.ui.LastPageLink = function(p) {
   /// <summary> ui Component to generate the link to jump to the last page. </summary>
 /// <param name="p" type="Pagintor">  Paginator instance to attach to</param>
};
YAHOO.widget.Paginator.ui.NextPageLink = function(p) {
   /// <summary> ui Component to generate the link to jump to the next page. </summary>
 /// <param name="p" type="Pagintor">  Paginator instance to attach to</param>
};
YAHOO.widget.Paginator.ui.PageLinks = function(p) {
   /// <summary> ui Component to generate the page links </summary>
 /// <param name="p" type="Pagintor">  Paginator instance to attach to</param>
};
YAHOO.widget.Paginator.ui.PreviousPageLink = function(p) {
   /// <summary> ui Component to generate the link to jump to the previous page. </summary>
 /// <param name="p" type="Pagintor">  Paginator instance to attach to</param>
};
YAHOO.widget.Paginator.ui.RowsPerPageDropdown = function(p) {
   /// <summary> ui Component to generate the rows-per-page dropdown </summary>
 /// <param name="p" type="Pagintor">  Paginator instance to attach to</param>
};
YAHOO.widget.Paginator.ui.YourComponent = function(p) {
   /// <summary> Describe the ui Component </summary>
 /// <param name="p" type="Pagintor">  Paginator instance to attach to</param>
};
YAHOO.widget.Panel = function(el, userConfig) {
   /// <summary> Panel is an implementation of Overlay that behaves like an OS window, with a draggable header and an optional close icon at the top right. </summary>
 /// <param name="el" type="String"> The element ID representing the Panel OR</param>
 /// <param name="el" type="HTMLElement"> The element representing the Panel</param>
 /// <param name="userConfig" type="Object"> The configuration object literal containing the configuration that should be set for this Panel. See configuration documentation for more details.</param>
};
YAHOO.widget.PieChart = function(containerId, dataSource, attributes) {
   /// <summary> PieChart class for the YUI Charts widget. </summary>
 /// <param name="containerId" type="HTMLElement">  Container element for the Flash Player instance.</param>
 /// <param name="dataSource" type="YAHOO.util.DataSource">  DataSource instance.</param>
 /// <param name="attributes" type="object">  (optional) Object literal of configuration values.</param>
};
YAHOO.widget.PieSeries = function() {
   /// <summary> PieSeries class for the YUI Charts widget. </summary>
};
YAHOO.widget.ProfilerViewer = function(el, attr) {
   /// <summary> A widget to view YUI Profiler output. </summary>
 /// <param name="el(optional)" type="HTMLElement | String | Object"> The html element into which the ProfileViewer should be rendered. An element will be created if none provided.</param>
 /// <param name="attr" type="Object"> (optional) A key map of the ProfilerViewer's initial attributes.  Ignored if first arg is an attributes object.</param>
};
YAHOO.widget.ProgressBar = function(oConfigs) {
   /// <summary> The ProgressBar widget provides an easy way to draw a bar depicting progress of an operation,a level meter, rating or any such simple linear measure.It allows for highly customized styles including animation, vertical or horizontal and forward or reverse. </summary>
 /// <param name="oConfigs" type="object">  An object containing any configuration attributes to be set</param>
};
YAHOO.widget.RadioCellEditor = function(oConfigs) {
   /// <summary> The RadioCellEditor class provides functionality for inline editingDataTable cell data with radio buttons. </summary>
 /// <param name="oConfigs" type="Object">  (Optional) Object literal of configs.</param>
};
YAHOO.widget.Record = function(oConfigs) {
   /// <summary> The Record class defines a DataTable record. </summary>
 /// <param name="oConfigs" type="Object">  (optional) Object literal of key/value pairs.</param>
};
YAHOO.widget.RecordSet = function(data) {
   /// <summary> A RecordSet defines and manages a set of Records. </summary>
 /// <param name="data" type="Object || Object[]">  An object literal or an array of data.</param>
};
YAHOO.widget.RootNode = function(oTree) {
   /// <summary> A custom YAHOO.widget.Node that handles the unique nature of the virtual, presentationless root node. </summary>
 /// <param name="oTree" type="YAHOO.widget.TreeView">  The tree instance this node belongs to</param>
};
YAHOO.widget.SWF = function(id, swfURL, p_oAttributes) {
   /// <summary> Creates the SWF instance and keeps the configuration data </summary>
 /// <param name="id" type="String|HTMLElement"> The id of the element, or the element itself that the SWF will be inserted into.  The width and height of the SWF will be set to the width and height of this container element.</param>
 /// <param name="swfURL" type="String"> The URL of the SWF to be embedded into the page.</param>
 /// <param name="p_oAttributes" type="Object"> (optional) Configuration parameters for the Flash application and values for Flashvarsto be passed to the SWF.</param>
};
YAHOO.widget.ScrollingDataTable = function(elContainer, aColumnDefs, oDataSource, oConfigs) {
   /// <summary> The ScrollingDataTable class extends the DataTable class to providefunctionality for x-scrolling, y-scrolling, and xy-scrolling. </summary>
 /// <param name="elContainer" type="HTMLElement">  Container element for the TABLE.</param>
 /// <param name="aColumnDefs" type="Object[]">  Array of object literal Column definitions.</param>
 /// <param name="oDataSource" type="YAHOO.util.DataSource">  DataSource instance.</param>
 /// <param name="oConfigs" type="object">  (optional) Object literal of configuration values.</param>
};
YAHOO.widget.Series = function() {
   /// <summary> Functionality common to most series. Generally, a Series object shouldn't be instantiated directly. Instead, a subclass with a concrete implementation should be used. </summary>
};
YAHOO.widget.SimpleDialog = function(el, userConfig) {
   /// <summary> SimpleDialog is a simple implementation of Dialog that can be used to submit a single value. Forms can be processed in 3 ways -- via an asynchronous Connection utility call, a simple form POST or GET, or manually. </summary>
 /// <param name="el" type="String"> The element ID representing the SimpleDialog OR</param>
 /// <param name="el" type="HTMLElement"> The element representing the SimpleDialog</param>
 /// <param name="userConfig" type="Object"> The configuration object literal containing the configuration that should be set for this SimpleDialog. See configuration documentation for more details.</param>
};
YAHOO.widget.SimpleEditor = function(el, attrs) {
   /// <summary> The Rich Text Editor is a UI control that replaces a standard HTML textarea; it allows for the rich formatting of text content, including common structural treatments like lists, formatting treatments like bold and italic text, and drag-and-drop inclusion and sizing of images. The Rich Text Editor's toolbar is extensible via a plugin architecture so that advanced implementations can achieve a high degree of customization. </summary>
 /// <param name="el" type="String/HTMLElement"> The textarea element to turn into an editor.</param>
 /// <param name="attrs" type="Object"> Object liternal containing configuration parameters.</param>
};
YAHOO.widget.Slider = function(id, sGroup, oThumb, sType) {
   /// <summary> A DragDrop implementation that can be used as a background for aslider.  It takes a reference to the thumb instance so it can delegate some of the events to it.  The goal is to make the thumb jump to the location on the background when the background is clicked. </summary>
 /// <param name="id" type="String">     The id of the element linked to this instance</param>
 /// <param name="sGroup" type="String"> The group of related DragDrop items</param>
 /// <param name="oThumb" type="SliderThumb"> The thumb for this slider</param>
 /// <param name="sType" type="String">  The type of slider (horiz, vert, region)</param>
};
YAHOO.widget.SliderThumb = function(id, sGroup, iLeft, iRight, iUp, iDown, iTickSize) {
   /// <summary> A drag and drop implementation to be used as the thumb of a slider. </summary>
 /// <param name="id" type="String"> the id of the slider html element</param>
 /// <param name="sGroup" type="String"> the group of related DragDrop items</param>
 /// <param name="iLeft" type="int"> the number of pixels the element can move left</param>
 /// <param name="iRight" type="int"> the number of pixels the element can move right</param>
 /// <param name="iUp" type="int"> the number of pixels the element can move up</param>
 /// <param name="iDown" type="int"> the number of pixels the element can move down</param>
 /// <param name="iTickSize" type="int"> optional parameter for specifying that the element should move a certain number pixels at a time.</param>
};
YAHOO.widget.StackedBarChart = function(containerId, dataSource, attributes) {
   /// <summary> StackedBarChart class for the YUI Charts widget. </summary>
 /// <param name="containerId" type="HTMLElement">  Container element for the Flash Player instance.</param>
 /// <param name="dataSource" type="YAHOO.util.DataSource">  DataSource instance.</param>
 /// <param name="attributes" type="object">  (optional) Object literal of configuration values.</param>
};
YAHOO.widget.StackedBarSeries = function() {
   /// <summary> StackedBarSeries class for the YUI Charts widget. </summary>
};
YAHOO.widget.StackedColumnChart = function(containerId, dataSource, attributes) {
   /// <summary> StackedColumnChart class for the YUI Charts widget. </summary>
 /// <param name="containerId" type="HTMLElement">  Container element for the Flash Player instance.</param>
 /// <param name="dataSource" type="YAHOO.util.DataSource">  DataSource instance.</param>
 /// <param name="attributes" type="object">  (optional) Object literal of configuration values.</param>
};
YAHOO.widget.StackedColumnSeries = function() {
   /// <summary> StackedColumnSeries class for the YUI Charts widget. </summary>
};
YAHOO.widget.TVAnim = function() {
   /// <summary> A static factory class for tree view expand/collapse animations </summary>
};
YAHOO.widget.TVFadeIn = function(el, callback) {
   /// <summary> A 1/2 second fade-in animation. </summary>
 /// <param name="el" type="HTMLElement">  the element to animate</param>
 /// <param name="callback" type="function">  function to invoke when the animation is finished</param>
};
YAHOO.widget.TVFadeOut = function(el, callback) {
   /// <summary> A 1/2 second fade out animation. </summary>
 /// <param name="el" type="HTMLElement">  the element to animate</param>
 /// <param name="callback" type="Function">  function to invoke when the animation is finished</param>
};
YAHOO.widget.Tab = function(element, properties) {
   /// <summary> A representation of a Tab's label and content. </summary>
 /// <param name="element" type="HTMLElement | String">  (optional) The html element that represents the Tab. An element will be created if none provided.</param>
 /// <param name="properties" type="Object"> A key map of initial properties</param>
};
YAHOO.widget.TabView = function(el, attr) {
   /// <summary> A widget to control tabbed views. </summary>
 /// <param name="el(optional)" type="HTMLElement | String | Object"> The html element that represents the TabView, or the attribute object to use. An element will be created if none provided.</param>
 /// <param name="attr" type="Object"> (optional) A key map of the tabView's initial attributes.  Ignored if first arg is attributes object.</param>
};
YAHOO.widget.TextNode = function(oData, oParent, expanded) {
   /// <summary> The default node presentation.  The first parameter should beeither a string that will be used as the node's label, or an objectthat has at least a string property called label.  By default,  clicking thelabel will toggle the expanded/collapsed state of the node.  Bysetting the href property of the instance, this behavior can bechanged so that the label will go to the specified href. </summary>
 /// <param name="oData" type="object">  a string or object containing the data that willbe used to render this node.Providing a string is the same as providing an object with a single property named label.All values in the oData will be used to set equally named properties in the nodeas long as the node does have such properties, they are not undefined, private or functions.All attributes are made available in noderef.data, whichcan be used to store custom attributes.  TreeView.getNode(s)ByPropertycan be used to retrieve a node by one of the attributes.</param>
 /// <param name="oParent" type="YAHOO.widget.Node">  this node's parent node</param>
 /// <param name="expanded" type="boolean">  the initial expanded/collapsed state (deprecated; use oData.expanded)</param>
};
YAHOO.widget.TextareaCellEditor = function(oConfigs) {
   /// <summary> The TextareaCellEditor class provides functionality for inline editingDataTable cell data with a TEXTAREA element. </summary>
 /// <param name="oConfigs" type="Object">  (Optional) Object literal of configs.</param>
};
YAHOO.widget.TextboxCellEditor = function(oConfigs) {
   /// <summary> The TextboxCellEditor class provides functionality for inline editingDataTable cell data with an INPUT TYPE=TEXT element. </summary>
 /// <param name="oConfigs" type="Object">  (Optional) Object literal of configs.</param>
};
YAHOO.widget.TimeAxis = function() {
   /// <summary> A type of axis whose units are measured in time-based values. </summary>
};
YAHOO.widget.Toolbar = function(el, attrs) {
   /// <summary> Provides a rich toolbar widget based on the button and menu widgets </summary>
 /// <param name="el" type="String/HTMLElement"> The element to turn into a toolbar.</param>
 /// <param name="attrs" type="Object"> Object liternal containing configuration parameters.</param>
};
YAHOO.widget.ToolbarButton = function(el, attrs) {
   /// <summary> Creates a basic custom Toolbar Button. Primarily used with the Rich Text Editor's ToolbarProvides a toolbar button based on the button and menu widgets, &lt;select&gt; elements are used in place of menu's. </summary>
 /// <param name="el" type="String/HTMLElement"> The element to turn into a button.</param>
 /// <param name="attrs" type="Object"> Object liternal containing configuration parameters.</param>
};
YAHOO.widget.ToolbarButtonAdvanced = function(el, attrs) {
   /// <summary> Creates a rich custom Toolbar Button. Primarily used with the Rich Text Editor's Toolbar </summary>
 /// <param name="el" type="String/HTMLElement"> The element to turn into a button.</param>
 /// <param name="attrs" type="Object"> Object liternal containing configuration parameters.</param>
};
YAHOO.widget.Tooltip = function(el, userConfig) {
   /// <summary> Tooltip is an implementation of Overlay that behaves like an OS tooltip, displaying when the user mouses over a particular element, and disappearing on mouse out. </summary>
 /// <param name="el" type="String"> The element ID representing the Tooltip OR</param>
 /// <param name="el" type="HTMLElement"> The element representing the Tooltip</param>
 /// <param name="userConfig" type="Object"> The configuration object literal containing the configuration that should be set for this Overlay. See configuration documentation for more details.</param>
};
YAHOO.widget.TreeView = function(id, oConfig) {
   /// <summary> Contains the tree view state data and the root node. </summary>
 /// <param name="id" type="string|HTMLElement"> The id of the element, or the element itself that the tree will be inserted into.  Existing markup in this element, if valid, will be used to build the tree</param>
 /// <param name="oConfig" type="Array|Object|String"> (optional)  If present, it will be used to build the tree via method buildTreeFromObject</param>
};
YAHOO.widget.Uploader = function(containerId, buttonSkin, forceTransparent) {
   /// <summary> Uploader class for the YUI Uploader component. </summary>
 /// <param name="containerId" type="HTMLElement">  Container element for the Flash Player instance.</param>
 /// <param name="buttonSkin" type="String">  [optional]. If defined, the uploader is rendered as a button. This parameter must provide the URL of a buttonskin sprite image. Acceptable types are: jpg, gif, png and swf. The sprite is divided evenly into four sections along its height (e.g., ifthe sprite is 200 px tall, it's divided into four sections 50px each).Each section is used as a skin for a specific state of the button: topsection is "up", second section is "over", third section is "down", andfourth section is "disabled". If the parameter is not supplied, the uploader is rendered transparent,and it's the developer's responsibility to create a visible UI below it.</param>
 /// <param name="forceTransparent" type="Boolean">  This parameter, if true, forces the FlashUI to be rendered with wmode set to "transparent". This behavior is useful in conjunction with non-rectangular button skins with PNG transparency. The parameter is false by default, and ignored if no buttonSkin is defined.</param>
};
var YAHOO_config = function() {
   /// <summary> YAHOO_config is not included as part of the library.  Instead it is an object that can be defined by the implementer immediately before including the YUI library.  The properties included in this objectwill be used to configure global properties needed as soon as the library begins to load. </summary>
};
//Starting Extends
var _yui_extend = function(subc, superc, overrides) {
    var F = function() {}, i, OP = Object.prototype;
    F.prototype=superc.prototype;
    subc.prototype=new F();
    subc.prototype.constructor=subc;
    subc.superclass=superc.prototype;
    if (superc.prototype.constructor == OP.constructor) {
        superc.prototype.constructor=superc;
    }
 };
_yui_extend(YAHOO.util.ColumnResizer, YAHOO.util.DDProxy);
_yui_extend(YAHOO.util.DDTarget, YAHOO.util.DragDrop);
_yui_extend(YAHOO.util.ImageLoader.pngBgImgObj, YAHOO.util.ImageLoader.imgObj);
_yui_extend(YAHOO.util.ImageLoader.srcImgObj, YAHOO.util.ImageLoader.imgObj);
_yui_extend(YAHOO.util.LocalDataSource, YAHOO.util.DataSourceBase);
_yui_extend(YAHOO.util.ScriptNodeDataSource, YAHOO.util.DataSourceBase);
_yui_extend(YAHOO.util.Scroll, YAHOO.util.ColorAnim);
_yui_extend(YAHOO.util.ShouldError, YAHOO.util.AssertionError);
_yui_extend(YAHOO.util.ShouldFail, YAHOO.util.AssertionError);
_yui_extend(YAHOO.util.UnexpectedError, YAHOO.util.AssertionError);
_yui_extend(YAHOO.util.UnexpectedValue, YAHOO.util.AssertionError);
_yui_extend(YAHOO.util.XHRDataSource, YAHOO.util.DataSourceBase);
_yui_extend(YAHOO.widget.Button, YAHOO.util.Element);
_yui_extend(YAHOO.widget.ButtonGroup, YAHOO.util.Element);
_yui_extend(YAHOO.widget.Carousel, YAHOO.util.Element);
_yui_extend(YAHOO.widget.CheckboxCellEditor, YAHOO.widget.BaseCellEditor);
_yui_extend(YAHOO.widget.ColorPicker, YAHOO.util.Element);
_yui_extend(YAHOO.widget.DataTable, YAHOO.util.Element);
_yui_extend(YAHOO.widget.DateCellEditor, YAHOO.widget.BaseCellEditor);
_yui_extend(YAHOO.widget.DropdownCellEditor, YAHOO.widget.BaseCellEditor);
_yui_extend(YAHOO.widget.ImageCropper, YAHOO.util.Element);
_yui_extend(YAHOO.widget.Layout, YAHOO.util.Element);
_yui_extend(YAHOO.widget.LayoutUnit, YAHOO.util.Element);
_yui_extend(YAHOO.widget.MenuBar, YAHOO.widget.Menu);
_yui_extend(YAHOO.widget.MenuBarItem, YAHOO.widget.MenuItem);
_yui_extend(YAHOO.widget.MenuNode, YAHOO.widget.TextNode);
_yui_extend(YAHOO.widget.Panel, YAHOO.widget.Overlay);
_yui_extend(YAHOO.widget.ProfilerViewer, YAHOO.util.Element);
_yui_extend(YAHOO.widget.ProgressBar, YAHOO.util.Element);
_yui_extend(YAHOO.widget.RadioCellEditor, YAHOO.widget.BaseCellEditor);
_yui_extend(YAHOO.widget.RootNode, YAHOO.widget.Node);
_yui_extend(YAHOO.widget.SWF, YAHOO.util.Element);
_yui_extend(YAHOO.widget.SimpleEditor, YAHOO.util.Element);
_yui_extend(YAHOO.widget.Slider, YAHOO.util.DragDrop);
_yui_extend(YAHOO.widget.SliderThumb, YAHOO.util.DD);
_yui_extend(YAHOO.widget.Tab, YAHOO.util.Element);
_yui_extend(YAHOO.widget.TabView, YAHOO.util.Element);
_yui_extend(YAHOO.widget.TextNode, YAHOO.widget.Node);
_yui_extend(YAHOO.widget.TextareaCellEditor, YAHOO.widget.BaseCellEditor);
_yui_extend(YAHOO.widget.TextboxCellEditor, YAHOO.widget.BaseCellEditor);
_yui_extend(YAHOO.widget.Toolbar, YAHOO.util.Element);
_yui_extend(YAHOO.widget.ToolbarButton, YAHOO.util.Element);
_yui_extend(YAHOO.widget.Tooltip, YAHOO.widget.Overlay);
_yui_extend(YAHOO.util.AssertionError, Error);
_yui_extend(YAHOO.util.ColorAnim, YAHOO.util.Anim);
_yui_extend(YAHOO.util.ColumnDD, YAHOO.util.DDProxy);
_yui_extend(YAHOO.util.ComparisonFailure, YAHOO.util.AssertionError);
_yui_extend(YAHOO.util.DD, YAHOO.util.DragDrop);
_yui_extend(YAHOO.util.DDProxy, YAHOO.util.DD);
_yui_extend(YAHOO.util.FunctionDataSource, YAHOO.util.DataSourceBase);
_yui_extend(YAHOO.util.ImageLoader.bgImgObj, YAHOO.util.ImageLoader.imgObj);
_yui_extend(YAHOO.util.Motion, YAHOO.util.ColorAnim);
_yui_extend(YAHOO.util.Point, YAHOO.util.Region);
_yui_extend(YAHOO.util.Resize, YAHOO.util.Element);
_yui_extend(YAHOO.widget.Calendar2up, YAHOO.widget.CalendarGroup);
_yui_extend(YAHOO.widget.Calendar_Core, YAHOO.widget.Calendar);
_yui_extend(YAHOO.widget.CellEditor, YAHOO.widget.BaseCellEditor);
_yui_extend(YAHOO.widget.ContextMenu, YAHOO.widget.Menu);
_yui_extend(YAHOO.widget.ContextMenuItem, YAHOO.widget.MenuItem);
_yui_extend(YAHOO.widget.DateNode, YAHOO.widget.TextNode);
_yui_extend(YAHOO.widget.Dialog, YAHOO.widget.Panel);
_yui_extend(YAHOO.widget.Editor, YAHOO.widget.SimpleEditor);
_yui_extend(YAHOO.widget.HTMLNode, YAHOO.widget.Node);
_yui_extend(YAHOO.widget.Menu, YAHOO.widget.Overlay);
_yui_extend(YAHOO.widget.NumericAxis, YAHOO.widget.Axis);
_yui_extend(YAHOO.widget.Overlay, YAHOO.widget.Module);
_yui_extend(YAHOO.widget.ScrollingDataTable, YAHOO.widget.DataTable);
_yui_extend(YAHOO.widget.SimpleDialog, YAHOO.widget.Dialog);
//Starting Methods
YAHOO.register = function(name, mainClass, data) {
   /// <summary> Registers a module with the YAHOO object </summary>
 /// <param name="name" type="String">    the name of the module (event, slider, etc)</param>
 /// <param name="mainClass" type="Function"> a reference to class in the module.  Thisclass will be tagged with the version infoso that it will be possible to identify theversion that is in use when multiple versionshave loaded</param>
 /// <param name="data" type="Object">      metadata object for the module.  Currently itis expected to contain a "version" propertyand a "build" property at minimum.</param>
};
YAHOO["namespace"] = function(arguments) {
   /// <summary> Returns the namespace specified and creates it if it doesn't existYAHOO.namespace("property.package");YAHOO.namespace("YAHOO.property.package");Either of the above would create YAHOO.property, thenYAHOO.property.packageBe careful when naming packages. Reserved words may work in some browsersand not others. For instance, the following will fail in Safari:YAHOO.namespace("really.long.nested.namespace");This fails because "long" is a future reserved word in ECMAScriptFor implementation code that uses YUI, do not create your componentsin the namespaces defined by YUI (YAHOO.util, YAHOO.widget, YAHOO.lang, YAHOO.tool, YAHOO.example, YAHOO.env) -- create your own namespace (e.g., 'companyname'). </summary>
   /// <returns type="Object" />
 /// <param name="arguments" type="String*"> 1-n namespaces to create</param>
};
YAHOO.augment = function(r, s, arguments) {
   /// <summary> An alias for YAHOO.lang.augment </summary>
 /// <param name="r" type="Function">  the object to receive the augmentation</param>
 /// <param name="s" type="Function">  the object that supplies the properties to augment</param>
 /// <param name="arguments" type="String*"> zero or more properties methods to augment the receiver with.  If none specified, everythingin the supplier will be used unless it wouldoverwrite an existing property in the receiver</param>
};
YAHOO.extend = function(subc, superc, overrides) {
   /// <summary> An alias for YAHOO.lang.extend </summary>
 /// <param name="subc" type="Function">   the object to modify</param>
 /// <param name="superc" type="Function"> the object to inherit</param>
 /// <param name="overrides" type="Object">  additional properties/methods to add to thesubclass prototype.  These will override thematching items obtained from the superclass if present.</param>
};
YAHOO.log = function(msg, cat, src) {
   /// <summary> Uses YAHOO.widget.Logger to output a log message, if the widget isavailable. </summary>
   /// <returns type="Boolean" />
 /// <param name="msg" type="String">  The message to log.</param>
 /// <param name="cat" type="String">  The log category for the message.  Defaultcategories are "info", "warn", "error", time".Custom categories can be used as well. (opt)</param>
 /// <param name="src" type="String">  The source of the the message (opt)</param>
};
YAHOO.env.getVersion = function(name) {
   /// <summary> Returns the version data for the specified module:name:      The name of the moduleversion:   The version in usebuild:     The build number in useversions:  All versions that were registeredbuilds:    All builds that were registered.mainClass: An object that was was stamped with thecurrent version and build. If mainClass.VERSION != version or mainClass.BUILD != build,multiple versions of pieces of the library have beenloaded, potentially causing issues. </summary>
   /// <returns type="Object" />
 /// <param name="name" type="String"> the name of the module (event, slider, etc)</param>
};
YAHOO.lang.isArray = function(o) {
   /// <summary> Determines wheather or not the provided object is an array. </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any"> The object being testing</param>
};
YAHOO.lang.trim = function(s) {
   /// <summary> Returns a string without any leading or trailing whitespace.  If the input is not a string, the input will be returned untouched. </summary>
   /// <returns type="string" />
 /// <param name="s" type="string">  the string to trim</param>
};
YAHOO.lang.isString = function(o) {
   /// <summary> Determines whether or not the provided object is a string </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any"> The object being testing</param>
};
YAHOO.lang.isBoolean = function(o) {
   /// <summary> Determines whether or not the provided object is a boolean </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any"> The object being testing</param>
};
YAHOO.lang.extend = function(subc, superc, overrides) {
   /// <summary> Utility to set up the prototype, constructor and superclass properties tosupport an inheritance strategy that can chain constructors and methods.Static members will not be inherited. </summary>
 /// <param name="subc" type="Function">   the object to modify</param>
 /// <param name="superc" type="Function"> the object to inherit</param>
 /// <param name="overrides" type="Object">  additional properties/methods to add to thesubclass prototype.  These will override thematching items obtained from the superclass if present.</param>
};
YAHOO.lang.isNull = function(o) {
   /// <summary> Determines whether or not the provided object is null </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any"> The object being testing</param>
};
YAHOO.lang.later = function(when, o, fn, data, periodic) {
   /// <summary> Executes the supplied function in the context of the supplied object 'when' milliseconds later.  Executes the function a single time unless periodic is set to true. </summary>
   /// <returns type="" />
 /// <param name="when" type="int">  the number of milliseconds to wait until the fn is executed</param>
 /// <param name="o" type=""> the context object</param>
 /// <param name="fn" type="Function|String">  the function to execute or the name of the method in the 'o' object to execute</param>
 /// <param name="data" type=""> [Array] data that is provided to the function.  This acceptseither a single item or an array.  If an array is provided, thefunction is executed with one parameter for each array item.  Ifyou need to pass a single array parameter, it needs to be wrapped inan array [myarray]</param>
 /// <param name="periodic" type="boolean">  if true, executes continuously at supplied interval until canceled</param>
};
YAHOO.lang.isUndefined = function(o) {
   /// <summary> Determines whether or not the provided object is undefined </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any"> The object being testing</param>
};
YAHOO.lang.merge = function(arguments) {
   /// <summary> Returns a new object containing all of the properties ofall the supplied objects.  The properties from later objectswill overwrite those in earlier objects. </summary>
   /// <returns type="" />
 /// <param name="arguments" type="Object*">  the objects to merge</param>
};
YAHOO.lang.isValue = function(o) {
   /// <summary> A convenience method for detecting a legitimate non-null value.Returns false for null/undefined/NaN, true for other values, including 0/false/'' </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any">  the item to test</param>
};
YAHOO.lang.hasOwnProperty = function(o, prop) {
   /// <summary> Determines whether or not the property was addedto the object instance.  Returns false if the property is not presentin the object, or was inherited from the prototype.This abstraction is provided to enable hasOwnProperty for Safari 1.3.x.There is a discrepancy between YAHOO.lang.hasOwnProperty andObject.prototype.hasOwnProperty when the property is a primitive added toboth the instance AND prototype with the same value:var A = function() {};A.prototype.foo = 'foo';var a = new A();a.foo = 'foo';alert(a.hasOwnProperty('foo')); // truealert(YAHOO.lang.hasOwnProperty(a, 'foo')); // false when using fallback </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any"> The object being testing</param>
 /// <param name="prop" type="string">  the name of the property to test</param>
};
YAHOO.lang.augment = function(r, s, arguments) {
   /// <summary> Same as YAHOO.lang.augmentObject, except it only applies prototype properties.  This is an alias for augmentProto. </summary>
 /// <param name="r" type="Function">  the object to receive the augmentation</param>
 /// <param name="s" type="Function">  the object that supplies the properties to augment</param>
 /// <param name="arguments" type="String*|boolean"> zero or more properties methods to augment the receiver with.  If none specified, everythingin the supplier will be used unless it wouldoverwrite an existing property in the receiver.  if trueis specified as the third parameter, all properties willbe applied and will overwrite an existing property inthe receiver</param>
};
YAHOO.lang.augmentProto = function(r, s, arguments) {
   /// <summary> Same as YAHOO.lang.augmentObject, except it only applies prototype properties </summary>
 /// <param name="r" type="Function">  the object to receive the augmentation</param>
 /// <param name="s" type="Function">  the object that supplies the properties to augment</param>
 /// <param name="arguments" type="String*|boolean"> zero or more properties methods to augment the receiver with.  If none specified, everything in the supplier will be used unless it would overwrite an existing property in the receiver.  if true is specified as the third parameter, all properties will be applied and will overwrite an existing property in the receiver</param>
};
YAHOO.lang.isFunction = function(o) {
   /// <summary> Determines whether or not the provided object is a function.Note: Internet Explorer thinks certain functions are objects:var obj = document.createElement("object");YAHOO.lang.isFunction(obj.getAttribute) // reports false in IEvar input = document.createElement("input"); // append to bodyYAHOO.lang.isFunction(input.focus) // reports false in IEYou will have to implement additional tests if these functionsmatter to you. </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any"> The object being testing</param>
};
YAHOO.lang.isNumber = function(o) {
   /// <summary> Determines whether or not the provided object is a legal number </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any"> The object being testing</param>
};
YAHOO.lang.dump = function(o, d) {
   /// <summary> Returns a simple string representation of the object or array.Other types of objects will be returned unprocessed.  Arraysare expected to be indexed.  Use object notation forassociative arrays. </summary>
   /// <returns type="String" />
 /// <param name="o" type="Object">  The object to dump</param>
 /// <param name="d" type="int">  How deep to recurse child objects, default 3</param>
};
YAHOO.lang.isObject = function(o) {
   /// <summary> Determines whether or not the provided object is of type objector function </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any"> The object being testing</param>
};
YAHOO.lang.substitute = function(s, o, f) {
   /// <summary> Does variable substitution on a string. It scans through the string looking for expressions enclosed in { } braces. If an expression is found, it is used a key on the object.  If there is a space inthe key, the first word is used for the key and the rest is providedto an optional function to be used to programatically determine thevalue (the extra information might be used for this decision). If the value for the key in the object, or what is returned from thefunction has a string value, number value, or object value, it is substituted for the bracket expression and it repeats.  If thisvalue is an object, it uses the Object's toString() if this hasbeen overridden, otherwise it does a shallow dump of the key/valuepairs. </summary>
   /// <returns type="String" />
 /// <param name="s" type="String">  The string that will be modified.</param>
 /// <param name="o" type="Object">  An object containing the replacement values</param>
 /// <param name="f" type="Function">  An optional function that can be used toprocess each match.  It receives the key,value, and any extra metadata included withthe key inside of the braces.</param>
};
YAHOO.lang.augmentObject = function(r, s, arguments) {
   /// <summary> Applies all properties in the supplier to the receiver if thereceiver does not have these properties yet.  Optionally, one or more methods/properties can be specified (as additional parameters).  This option will overwrite the property if receiver has it already.  If true is passed as the third parameter, all properties will be applied and _will_ overwrite properties in the receiver. </summary>
 /// <param name="r" type="Function">  the object to receive the augmentation</param>
 /// <param name="s" type="Function">  the object that supplies the properties to augment</param>
 /// <param name="arguments" type="String*|boolean"> zero or more properties methods to augment the receiver with.  If none specified, everythingin the supplier will be used unless it wouldoverwrite an existing property in the receiver. If trueis specified as the third parameter, all properties willbe applied and will overwrite an existing property inthe receiver</param>
};
YAHOO.lang.isArray = function(o) {
   /// <summary> Determines wheather or not the provided object is an array. </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any"> The object being testing</param>
};
YAHOO.lang.trim = function(s) {
   /// <summary> Returns a string without any leading or trailing whitespace.  If the input is not a string, the input will be returned untouched. </summary>
   /// <returns type="string" />
 /// <param name="s" type="string">  the string to trim</param>
};
YAHOO.lang.isString = function(o) {
   /// <summary> Determines whether or not the provided object is a string </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any"> The object being testing</param>
};
YAHOO.lang.isBoolean = function(o) {
   /// <summary> Determines whether or not the provided object is a boolean </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any"> The object being testing</param>
};
YAHOO.lang.extend = function(subc, superc, overrides) {
   /// <summary> Utility to set up the prototype, constructor and superclass properties tosupport an inheritance strategy that can chain constructors and methods.Static members will not be inherited. </summary>
 /// <param name="subc" type="Function">   the object to modify</param>
 /// <param name="superc" type="Function"> the object to inherit</param>
 /// <param name="overrides" type="Object">  additional properties/methods to add to thesubclass prototype.  These will override thematching items obtained from the superclass if present.</param>
};
YAHOO.lang.isNull = function(o) {
   /// <summary> Determines whether or not the provided object is null </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any"> The object being testing</param>
};
YAHOO.lang.later = function(when, o, fn, data, periodic) {
   /// <summary> Executes the supplied function in the context of the supplied object 'when' milliseconds later.  Executes the function a single time unless periodic is set to true. </summary>
   /// <returns type="" />
 /// <param name="when" type="int">  the number of milliseconds to wait until the fn is executed</param>
 /// <param name="o" type=""> the context object</param>
 /// <param name="fn" type="Function|String">  the function to execute or the name of the method in the 'o' object to execute</param>
 /// <param name="data" type=""> [Array] data that is provided to the function.  This acceptseither a single item or an array.  If an array is provided, thefunction is executed with one parameter for each array item.  Ifyou need to pass a single array parameter, it needs to be wrapped inan array [myarray]</param>
 /// <param name="periodic" type="boolean">  if true, executes continuously at supplied interval until canceled</param>
};
YAHOO.lang.isUndefined = function(o) {
   /// <summary> Determines whether or not the provided object is undefined </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any"> The object being testing</param>
};
YAHOO.lang.merge = function(arguments) {
   /// <summary> Returns a new object containing all of the properties ofall the supplied objects.  The properties from later objectswill overwrite those in earlier objects. </summary>
   /// <returns type="" />
 /// <param name="arguments" type="Object*">  the objects to merge</param>
};
YAHOO.lang.isValue = function(o) {
   /// <summary> A convenience method for detecting a legitimate non-null value.Returns false for null/undefined/NaN, true for other values, including 0/false/'' </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any">  the item to test</param>
};
YAHOO.lang.hasOwnProperty = function(o, prop) {
   /// <summary> Determines whether or not the property was addedto the object instance.  Returns false if the property is not presentin the object, or was inherited from the prototype.This abstraction is provided to enable hasOwnProperty for Safari 1.3.x.There is a discrepancy between YAHOO.lang.hasOwnProperty andObject.prototype.hasOwnProperty when the property is a primitive added toboth the instance AND prototype with the same value:var A = function() {};A.prototype.foo = 'foo';var a = new A();a.foo = 'foo';alert(a.hasOwnProperty('foo')); // truealert(YAHOO.lang.hasOwnProperty(a, 'foo')); // false when using fallback </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any"> The object being testing</param>
 /// <param name="prop" type="string">  the name of the property to test</param>
};
YAHOO.lang.augment = function(r, s, arguments) {
   /// <summary> Same as YAHOO.lang.augmentObject, except it only applies prototype properties.  This is an alias for augmentProto. </summary>
 /// <param name="r" type="Function">  the object to receive the augmentation</param>
 /// <param name="s" type="Function">  the object that supplies the properties to augment</param>
 /// <param name="arguments" type="String*|boolean"> zero or more properties methods to augment the receiver with.  If none specified, everythingin the supplier will be used unless it wouldoverwrite an existing property in the receiver.  if trueis specified as the third parameter, all properties willbe applied and will overwrite an existing property inthe receiver</param>
};
YAHOO.lang.augmentProto = function(r, s, arguments) {
   /// <summary> Same as YAHOO.lang.augmentObject, except it only applies prototype properties </summary>
 /// <param name="r" type="Function">  the object to receive the augmentation</param>
 /// <param name="s" type="Function">  the object that supplies the properties to augment</param>
 /// <param name="arguments" type="String*|boolean"> zero or more properties methods to augment the receiver with.  If none specified, everything in the supplier will be used unless it would overwrite an existing property in the receiver.  if true is specified as the third parameter, all properties will be applied and will overwrite an existing property in the receiver</param>
};
YAHOO.lang.isFunction = function(o) {
   /// <summary> Determines whether or not the provided object is a function.Note: Internet Explorer thinks certain functions are objects:var obj = document.createElement("object");YAHOO.lang.isFunction(obj.getAttribute) // reports false in IEvar input = document.createElement("input"); // append to bodyYAHOO.lang.isFunction(input.focus) // reports false in IEYou will have to implement additional tests if these functionsmatter to you. </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any"> The object being testing</param>
};
YAHOO.lang.isNumber = function(o) {
   /// <summary> Determines whether or not the provided object is a legal number </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any"> The object being testing</param>
};
YAHOO.lang.dump = function(o, d) {
   /// <summary> Returns a simple string representation of the object or array.Other types of objects will be returned unprocessed.  Arraysare expected to be indexed.  Use object notation forassociative arrays. </summary>
   /// <returns type="String" />
 /// <param name="o" type="Object">  The object to dump</param>
 /// <param name="d" type="int">  How deep to recurse child objects, default 3</param>
};
YAHOO.lang.isObject = function(o) {
   /// <summary> Determines whether or not the provided object is of type objector function </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any"> The object being testing</param>
};
YAHOO.lang.substitute = function(s, o, f) {
   /// <summary> Does variable substitution on a string. It scans through the string looking for expressions enclosed in { } braces. If an expression is found, it is used a key on the object.  If there is a space inthe key, the first word is used for the key and the rest is providedto an optional function to be used to programatically determine thevalue (the extra information might be used for this decision). If the value for the key in the object, or what is returned from thefunction has a string value, number value, or object value, it is substituted for the bracket expression and it repeats.  If thisvalue is an object, it uses the Object's toString() if this hasbeen overridden, otherwise it does a shallow dump of the key/valuepairs. </summary>
   /// <returns type="String" />
 /// <param name="s" type="String">  The string that will be modified.</param>
 /// <param name="o" type="Object">  An object containing the replacement values</param>
 /// <param name="f" type="Function">  An optional function that can be used toprocess each match.  It receives the key,value, and any extra metadata included withthe key inside of the braces.</param>
};
YAHOO.lang.augmentObject = function(r, s, arguments) {
   /// <summary> Applies all properties in the supplier to the receiver if thereceiver does not have these properties yet.  Optionally, one or more methods/properties can be specified (as additional parameters).  This option will overwrite the property if receiver has it already.  If true is passed as the third parameter, all properties will be applied and _will_ overwrite properties in the receiver. </summary>
 /// <param name="r" type="Function">  the object to receive the augmentation</param>
 /// <param name="s" type="Function">  the object that supplies the properties to augment</param>
 /// <param name="arguments" type="String*|boolean"> zero or more properties methods to augment the receiver with.  If none specified, everythingin the supplier will be used unless it wouldoverwrite an existing property in the receiver. If trueis specified as the third parameter, all properties willbe applied and will overwrite an existing property inthe receiver</param>
};
YAHOO.lang.JSON.stringify = function(o, w, space) {
   /// <summary> Converts an arbitrary value to a JSON string representation.Objects with cyclical references will trigger an exception.If a whitelist is provided, only matching object keys will beincluded.  Alternately, a replacer function may be passed as thesecond parameter.  This function is executed on every value in theinput, and its return value will be used in place of the original value.This is useful to serialize specialized objects or class instances.If a positive integer or non-empty string is passed as the thirdparameter, the output will be formatted with carriage returns andindentation for readability.  If a String is passed (such as "\t") itwill be used once for each indentation level.  If a number is passed,that number of spaces will be used.When lang.JSON.useNativeStringify is true, this will defer to thenative JSON.stringify if the browser has a native implementation.Otherwise, a JavaScript implementation is used. </summary>
   /// <returns type="string" />
 /// <param name="o" type="MIXED">  any arbitrary object to convert to JSON string</param>
 /// <param name="w" type="Array|Function">  (optional) whitelist of acceptable object keysto include OR a function(value,key) to alter valuesbefore serialization</param>
 /// <param name="space" type="Number|String">  (optional) indentation character(s) ordepthy of spaces to format the output</param>
};
YAHOO.lang.JSON._prepare = function(s) {
   /// <summary> Replace certain Unicode characters that may be handled incorrectly bysome browser implementations. </summary>
   /// <private />
   /// <returns type="String" />
 /// <param name="s" type="String">  parse input</param>
};
YAHOO.lang.JSON.isValid = function(str) {
   /// <summary> Four step determination whether a string is safe to eval. In three steps,escape sequences, safe values, and properly placed open square bracketsare replaced with placeholders or removed.  Then in the final step, theresult of all these replacements is checked for invalid characters.This is an alias for isSafe. </summary>
   /// <returns type="boolean" />
 /// <param name="str" type="String">  JSON string to be tested</param>
};
YAHOO.lang.JSON.dateToString = function(d) {
   /// <summary> Serializes a Date instance as a UTC date string.  Used internally bythe JavaScript implementation of stringify.  If you need a differentDate serialization format, override this method.  If you change this,you should also set useNativeStringify to false, since native JSONimplementations serialize Dates per the ECMAScript 5 spec.  You've beenwarned. </summary>
   /// <returns type="String" />
 /// <param name="d" type="Date">  The Date to serialize</param>
};
YAHOO.lang.JSON.parse = function(s, reviver) {
   /// <summary> Parse a JSON string, returning the native JavaScriptrepresentation.When lang.JSON.useNativeParse is true, this will defer to the nativeJSON.parse if the browser has a native implementation.  Otherwise, aJavaScript implementation based on http://www.json.org/json2.jsis used. </summary>
   /// <returns type="MIXED" />
 /// <param name="s" type="string">  JSON string data</param>
 /// <param name="reviver" type="function">  (optional) function(k,v) passed each key:valuepair of object literals, allowing pruning or altering values</param>
};
YAHOO.lang.JSON.isSafe = function(str) {
   /// <summary> Four step determination whether a string is safe to eval. In three steps,escape sequences, safe values, and properly placed open square bracketsare replaced with placeholders or removed.  Then in the final step, theresult of all these replacements is checked for invalid characters. </summary>
   /// <returns type="boolean" />
 /// <param name="str" type="String">  JSON string to be tested</param>
};
YAHOO.lang.JSON.stringToDate = function(str) {
   /// <summary> Reconstitute Date instances from the default JSON UTC serialization.Reference this from a reviver function to rebuild Dates during theparse operation. </summary>
   /// <returns type="Date" />
 /// <param name="str" type="String">  String serialization of a Date</param>
};
YAHOO.lang.JSON._revive = function(data, reviver) {
   /// <summary> Traverses nested objects, applying a filter or reviver function toeach value.  The value returned from the function will replace theoriginal value in the key:value pair.  If the value returned isundefined, the key will be omitted from the returned object. </summary>
   /// <private />
   /// <returns type="MIXED" />
 /// <param name="data" type="MIXED">  Any JavaScript data</param>
 /// <param name="reviver" type="Function">  filter or mutation function</param>
};
YAHOO.tool.Profiler.getAverage = function(name) {
   /// <summary> Returns the average amount of time (in milliseconds) that the functionwith the given name takes to execute. </summary>
   /// <returns type="float" />
 /// <param name="name" type="String"> The name of the function whose data should be returned.If an object type method, it should be 'constructor.prototype.methodName';a normal object method would just be 'object.methodName'.</param>
};
YAHOO.tool.Profiler.pause = function(name) {
   /// <summary> Pauses profiling information for a given name. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="String"> The name of the data point.</param>
};
YAHOO.tool.Profiler.getReport = function() {
   /// <summary> Returns an object containing profiling data for a single function.The object has an entry for min, max, avg, calls, and points). </summary>
   /// <returns type="Object" />
};
YAHOO.tool.Profiler.instrument = function(name, method) {
   /// <summary> Instruments a method to have profiling calls. </summary>
   /// <returns type="Function" />
 /// <param name="name" type="String"> The name of the report for the function.</param>
 /// <param name="method" type="Function"> The function to instrument.</param>
};
YAHOO.tool.Profiler.getFullReport = function() {
   /// <summary> Returns an object containing profiling data for all of the functions that were profiled. The object has an entry for each function and returns all information (min, max, average, calls, etc.) for eachfunction. </summary>
   /// <returns type="Object" />
};
YAHOO.tool.Profiler.registerObject = function(name, owner, recurse) {
   /// <summary> Sets up an object for profiling. It takes the object and looks for functions.When a function is found, registerMethod() is called on it. If set to recrusivemode, it will also setup objects found inside of this object for profiling, using the same methodology. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="String"> The name of the object to profile (shows up in report).</param>
 /// <param name="owner" type="Object"> (Optional) The object represented by the name.</param>
 /// <param name="recurse" type="Boolean"> (Optional) Determines if subobject methods are also profiled.</param>
};
YAHOO.tool.Profiler.clear = function(name) {
   /// <summary> Removes all report data from the profiler. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="String"> (Optional) The name of the report to clear. Ifomitted, then all report data is cleared.</param>
};
YAHOO.tool.Profiler.stop = function(name) {
   /// <summary> Stops profiling information for a given name. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="String"> The name of the data point.</param>
};
YAHOO.tool.Profiler.getCallCount = function(name) {
   /// <summary> Returns the number of times that the given function has been called. </summary>
   /// <returns type="int" />
 /// <param name="name" type="String"> The name of the function whose data should be returned.</param>
};
YAHOO.tool.Profiler.saveDataPoint = function(name, duration) {
   /// <summary> Called when a method ends execution. Marks the start and end time of the method so it can calculate how long the function took to execute. Also updates min/max/avg calculations for the function. </summary>
   /// <private />
   /// <returns type="Void" />
 /// <param name="name" type="String"> The name of the function to mark as stopped.</param>
 /// <param name="duration" type="int"> The number of milliseconds it took the function toexecute.</param>
};
YAHOO.tool.Profiler.registerFunction = function(name, owner, registerPrototype) {
   /// <summary> Sets up a function for profiling. It essentially overwrites the function with onethat has instrumentation data. This method also creates an entry for the functionin the profile report. The original function is stored on the container object. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="String"> The full name of the function including namespacing. Thisis the name of the function that is stored in the report.</param>
 /// <param name="owner" type="Object"> (Optional) The object that owns the function. If the functionisn't global then this argument is required. This could be the namespace thatthe function belongs to, such as YAHOO.util.Dom, or the object on which it'sa method.</param>
 /// <param name="registerPrototype" type="Boolean"> (Optional) Indicates that the prototype shouldalso be instrumented. Setting to true has the same effect as callingregisterConstructor().</param>
};
YAHOO.tool.Profiler.start = function(name) {
   /// <summary> Start profiling information for a given name. The name cannot be the nameof a registered function or object. This is used to start timing for aparticular block of code rather than instrumenting the entire function. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="String"> The name of the data point.</param>
};
YAHOO.tool.Profiler.getOriginal = function(name) {
   /// <summary> Returns the uninstrumented version of a function/object. </summary>
   /// <returns type="Function|Object" />
 /// <param name="name" type="String"> The name of the function/object to retrieve.</param>
};
YAHOO.tool.Profiler.getFunctionReport = function() {
   /// <summary> Returns an object containing profiling data for a single function.The object has an entry for min, max, avg, calls, and points). </summary>
   /// <returns type="Object" />
};
YAHOO.tool.Profiler.createReport = function(name) {
   /// <summary> Creates a report object with the given name. </summary>
   /// <private />
   /// <returns type="Void" />
 /// <param name="name" type="String"> The name to store for the report object.</param>
};
YAHOO.tool.Profiler.getMin = function(name) {
   /// <summary> Returns the minimum amount of time (in milliseconds) that the functionwith the given name takes to execute. </summary>
   /// <returns type="float" />
 /// <param name="name" type="String"> The name of the function whose data should be returned.If an object type method, it should be 'constructor.prototype.methodName';a normal object method would just be 'object.methodName'.</param>
};
YAHOO.tool.Profiler.unregisterObject = function(name, recurse) {
   /// <summary> Unregisters an object for profiling. It takes the object and looks for functions.When a function is found, unregisterMethod() is called on it. If set to recrusivemode, it will also unregister objects found inside of this object, using the same methodology. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="String"> The name of the object to unregister.</param>
 /// <param name="recurse" type="Boolean"> (Optional) Determines if subobject methods should also beunregistered.</param>
};
YAHOO.tool.Profiler.getMax = function(name) {
   /// <summary> Returns the maximum amount of time (in milliseconds) that the functionwith the given name takes to execute. </summary>
   /// <returns type="float" />
 /// <param name="name" type="String"> The name of the function whose data should be returned.If an object type method, it should be 'constructor.prototype.methodName';a normal object method would just be 'object.methodName'.</param>
};
YAHOO.tool.Profiler.registerConstructor = function(name, owner) {
   /// <summary> Sets up a constructor for profiling, including all properties and methods on the prototype. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="string"> The fully-qualified name of the function including namespace information.</param>
 /// <param name="owner" type="Object"> (Optional) The object that owns the function (namespace or containing object).</param>
};
YAHOO.tool.Profiler.unregisterFunction = function(name) {
   /// <summary> Removes a constructor function from profiling. Reverses the registerConstructor() method. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="String"> The full name of the function including namespacing. Thisis the name of the function that is stored in the report.</param>
};
YAHOO.tool.TestCase.prototype.tearDown = function() {
   /// <summary> Function to run after each test is executed. </summary>
   /// <returns type="Void" />
};
YAHOO.tool.TestCase.prototype.setUp = function() {
   /// <summary> Function to run before each test is executed. </summary>
   /// <returns type="Void" />
};
YAHOO.tool.TestCase.prototype.resume = function(segment) {
   /// <summary> Resumes a paused test and runs the given function. </summary>
   /// <returns type="Void" />
 /// <param name="segment" type="Function"> (Optional) The function to run.If omitted, the test automatically passes.</param>
};
YAHOO.tool.TestCase.prototype.wait = function(segment, delay) {
   /// <summary> Causes the test case to wait a specified amount of time and thencontinue executing the given code. </summary>
   /// <returns type="Void" />
 /// <param name="segment" type="Function"> (Optional) The function to run after the delay.If omitted, the TestRunner will wait until resume() is called.</param>
 /// <param name="delay" type="int"> (Optional) The number of milliseconds to wait before runningthe function. If omitted, defaults to zero.</param>
};
YAHOO.tool.TestCase.prototype.tearDown = function() {
   /// <summary> Function to run after each test is executed. </summary>
   /// <returns type="Void" />
};
YAHOO.tool.TestCase.prototype.setUp = function() {
   /// <summary> Function to run before each test is executed. </summary>
   /// <returns type="Void" />
};
YAHOO.tool.TestCase.prototype.resume = function(segment) {
   /// <summary> Resumes a paused test and runs the given function. </summary>
   /// <returns type="Void" />
 /// <param name="segment" type="Function"> (Optional) The function to run.If omitted, the test automatically passes.</param>
};
YAHOO.tool.TestCase.prototype.wait = function(segment, delay) {
   /// <summary> Causes the test case to wait a specified amount of time and thencontinue executing the given code. </summary>
   /// <returns type="Void" />
 /// <param name="segment" type="Function"> (Optional) The function to run after the delay.If omitted, the TestRunner will wait until resume() is called.</param>
 /// <param name="delay" type="int"> (Optional) The number of milliseconds to wait before runningthe function. If omitted, defaults to zero.</param>
};
YAHOO.tool.TestCase.Wait.XML = function(result) {
   /// <summary> Returns test results formatted as an XML string. </summary>
   /// <returns type="String" />
 /// <param name="result" type="Object"> The results object created by TestRunner.</param>
};
YAHOO.tool.TestCase.Wait.JSON = function(result) {
   /// <summary> Returns test results formatted as a JSON string. Requires JSON utility. </summary>
   /// <returns type="String" />
 /// <param name="result" type="Object"> The results object created by TestRunner.</param>
};
YAHOO.tool.TestLogger.prototype._handleTestRunnerEvent = function(data) {
   /// <summary> Handles all TestRunner events, outputting appropriate data into the console. </summary>
   /// <private />
   /// <returns type="Void" />
 /// <param name="data" type="Object"> The event data object.</param>
};
YAHOO.tool.TestLogger.prototype.formatMsg = function(oLogMsg) {
   /// <summary> Formats message string to HTML for output to console. </summary>
   /// <private />
   /// <returns type="String" />
 /// <param name="oLogMsg" type="Object">  Log message object.</param>
};
YAHOO.tool.TestLogger.clearTestRunner = function() {
   /// <summary> Clears the reference to the TestRunner from previous operations. This unsubscribes all events and removes the object reference. </summary>
   /// <returns type="Void" />
};
YAHOO.tool.TestLogger.setTestRunner = function(testRunner) {
   /// <summary> Sets the source test runner that the logger should monitor. </summary>
   /// <returns type="Void" />
 /// <param name="testRunner" type="YAHOO.tool.TestRunner"> The TestRunner to observe.</param>
};
YAHOO.tool.TestManager.load = function() {
   /// <summary> Signals that a test page has been loaded. This should be called fromwithin the test page itself to notify the TestManager that it is ready. </summary>
   /// <returns type="Void" />
};
YAHOO.tool.TestManager._run = function() {
   /// <summary> Loads the next test page into the iframe. </summary>
   /// <private />
   /// <returns type="Void" />
};
YAHOO.tool.TestManager.stop = function() {
   /// <summary> Stops the execution of tests. </summary>
   /// <returns type="Void" />
};
YAHOO.tool.TestManager.setPages = function(pages) {
   /// <summary> Sets the pages to be loaded. </summary>
   /// <returns type="Void" />
 /// <param name="pages" type="String[]"> An array of URLs to load.</param>
};
YAHOO.tool.TestManager.start = function() {
   /// <summary> Begins the process of running the tests. </summary>
   /// <returns type="Void" />
};
YAHOO.tool.TestManager._processResults = function() {
   /// <summary> Processes the results of a test page run, outputting log messagesfor failed tests. </summary>
   /// <private />
   /// <returns type="Void" />
};
YAHOO.tool.TestManager._handleTestRunnerComplete = function(data) {
   /// <summary> Handles TestRunner.COMPLETE_EVENT, storing the results and beginningthe loop again. </summary>
   /// <private />
   /// <returns type="Void" />
 /// <param name="data" type="Object"> Data about the event.</param>
};
YAHOO.tool.TestNode.prototype.appendChild = function(testObject) {
   /// <summary> Appends a new test object (TestSuite, TestCase, or test function name) as a childof this node. </summary>
   /// <returns type="Void" />
 /// <param name="testObject" type="Variant"> A TestSuite, TestCase, or the name of a test function.</param>
};
YAHOO.tool.TestReporter.prototype.report = function(results) {
   /// <summary> Sends the report to the server. </summary>
   /// <returns type="Void" />
 /// <param name="results" type="Object"> The results object created by TestRunner.</param>
};
YAHOO.tool.TestReporter.prototype.destroy = function() {
   /// <summary> Cleans up the memory associated with the TestReporter, removing DOM elementsthat were created. </summary>
   /// <returns type="Void" />
};
YAHOO.tool.TestReporter.prototype._convertToISOString = function(date) {
   /// <summary> Convert a date into ISO format.From Douglas Crockford's json2.js </summary>
   /// <private />
   /// <returns type="String" />
 /// <param name="date" type="Date"> The date to convert.</param>
};
YAHOO.tool.TestReporter.prototype.addField = function(name, value) {
   /// <summary> Adds a field to the form that submits the results. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="String"> The name of the field.</param>
 /// <param name="value" type="Variant"> The value of the field.</param>
};
YAHOO.tool.TestRunner._run = function(testObject) {
   /// <summary> Runs a test case or test suite, returning the results. </summary>
   /// <private />
   /// <returns type="Object" />
 /// <param name="testObject" type="YAHOO.tool.TestCase|YAHOO.tool.TestSuite"> The test case or test suite to run.</param>
};
YAHOO.tool.TestRunner.run = function() {
   /// <summary> Runs the test suite. </summary>
   /// <returns type="Void" />
};
YAHOO.tool.TestRunner.resume = function(segment) {
   /// <summary> Resumes the TestRunner after wait() was called. </summary>
   /// <returns type="Void" />
 /// <param name="segment" type="Function"> The function to run as the restof the haulted test.</param>
};
YAHOO.tool.TestRunner._handleTestObjectComplete = function(node) {
   /// <summary> Handles the completion of a test object's tests. Tallies test results from one level up to the next. </summary>
   /// <private />
   /// <returns type="Void" />
 /// <param name="node" type="TestNode"> The TestNode representing the test object.</param>
};
YAHOO.tool.TestRunner._addTestCaseToTestTree = function(parentNode, testCase) {
   /// <summary> Adds a test case to the test tree as a child of the specified node. </summary>
   /// <private />
   /// <returns type="Void" />
 /// <param name="parentNode" type="TestNode"> The node to add the test case to as a child.</param>
 /// <param name="testCase" type="YAHOO.tool.TestCase"> The test case to add.</param>
};
YAHOO.tool.TestRunner.clear = function() {
   /// <summary> Removes all test objects from the runner. </summary>
   /// <returns type="Void" />
};
YAHOO.tool.TestRunner._buildTestTree = function() {
   /// <summary> Builds the test tree based on items in the master suite. The tree is a hierarchicalrepresentation of the test suites, test cases, and test functions. The resulting treeis stored in _root and the pointer _cur is set to the root initially. </summary>
   /// <private />
   /// <returns type="Void" />
};
YAHOO.tool.TestRunner._addTestSuiteToTestTree = function(parentNode, testSuite) {
   /// <summary> Adds a test suite to the test tree as a child of the specified node. </summary>
   /// <private />
   /// <returns type="Void" />
 /// <param name="parentNode" type="TestNode"> The node to add the test suite to as a child.</param>
 /// <param name="testSuite" type="YAHOO.tool.TestSuite"> The test suite to add.</param>
};
YAHOO.tool.TestRunner.add = function(testObject) {
   /// <summary> Adds a test suite or test case to the list of test objects to run. </summary>
   /// <returns type="Void" />
 /// <param name="testObject" type=""> Either a TestCase or a TestSuite that should be run.</param>
};
YAHOO.tool.TestRunner._next = function() {
   /// <summary> Retrieves the next node in the test tree. </summary>
   /// <private />
   /// <returns type="TestNode" />
};
YAHOO.tool.TestRunner.fireEvent = function(type, data) {
   /// <summary> Fires events for the TestRunner. This overrides the default fireEvent()method from EventProvider to add the type property to the data that ispassed through on each event call. </summary>
 /// <param name="type" type="String"> The type of event to fire.</param>
 /// <param name="data" type="Object"> (Optional) Data for the event.</param>
};
YAHOO.tool.TestRunner._runTest = function(node) {
   /// <summary> Runs a single test based on the data provided in the node. </summary>
   /// <private />
   /// <returns type="Void" />
 /// <param name="node" type="TestNode"> The TestNode representing the test to run.</param>
};
YAHOO.tool.TestSuite.prototype.tearDown = function() {
   /// <summary> Function to run after each test is executed. </summary>
   /// <returns type="Void" />
};
YAHOO.tool.TestSuite.prototype.add = function(testObject) {
   /// <summary> Adds a test suite or test case to the test suite. </summary>
   /// <returns type="Void" />
 /// <param name="testObject" type="YAHOO.tool.TestSuite||YAHOO.tool.TestCase"> The test suite or test case to add.</param>
};
YAHOO.tool.TestSuite.prototype.setUp = function() {
   /// <summary> Function to run before each test is executed. </summary>
   /// <returns type="Void" />
};
YAHOO.util.Anim.prototype.isAnimated = function() {
   /// <summary> Checks whether the element is currently animated. </summary>
   /// <returns type="Boolean" />
};
YAHOO.util.Anim.prototype.setEl = function() {
   /// <summary> Changes the animated element </summary>
};
YAHOO.util.Anim.prototype.getAttribute = function(attr) {
   /// <summary> Returns current value of the attribute. </summary>
   /// <returns type="Number" />
 /// <param name="attr" type="String"> The name of the attribute.</param>
};
YAHOO.util.Anim.prototype.doMethod = function(attr, start, end) {
   /// <summary> Returns the value computed by the animation's "method". </summary>
   /// <returns type="Number" />
 /// <param name="attr" type="String"> The name of the attribute.</param>
 /// <param name="start" type="Number"> The value this attribute should start from for this animation.</param>
 /// <param name="end" type="Number">  The value this attribute should end at for this animation.</param>
};
YAHOO.util.Anim.prototype.getDefaultUnit = function(attr) {
   /// <summary> Returns the unit to use when none is supplied. </summary>
   /// <returns type="String" />
 /// <param name="attr" type="attr"> The name of the attribute.</param>
};
YAHOO.util.Anim.prototype.setAttribute = function(attr, val, unit) {
   /// <summary> Applies a value to an attribute. </summary>
 /// <param name="attr" type="String"> The name of the attribute.</param>
 /// <param name="val" type="Number"> The value to be applied to the attribute.</param>
 /// <param name="unit" type="String"> The unit ('px', '%', etc.) of the value.</param>
};
YAHOO.util.Anim.prototype.init = function(el, attributes, duration, method) {
   /// <summary> Constructor for Anim instance. </summary>
 /// <param name="el" type="String | HTMLElement"> Reference to the element that will be animated</param>
 /// <param name="attributes" type="Object"> The attribute(s) to be animated.  Each attribute is an object with at minimum a "to" or "by" member defined.  Additional optional members are "from" (defaults to current value), "units" (defaults to "px").  All attribute names use camelCase.</param>
 /// <param name="duration" type="Number"> (optional, defaults to 1 second) Length of animation (frames or seconds), defaults to time-based</param>
 /// <param name="method" type="Function"> (optional, defaults to YAHOO.util.Easing.easeNone) Computes the values that are applied to the attributes per frame (generally a YAHOO.util.Easing method)</param>
};
YAHOO.util.Anim.prototype.setRuntimeAttribute = function(attr) {
   /// <summary> Sets the actual values to be used during the animation.  Should only be needed for subclass use. </summary>
   /// <private />
 /// <param name="attr" type="Object"> The attribute object</param>
};
YAHOO.util.Anim.prototype.stop = function(finish) {
   /// <summary> Stops the animation.  Normally called by AnimMgr when animation completes. </summary>
 /// <param name="finish" type="Boolean"> (optional) If true, animation will jump to final frame.</param>
};
YAHOO.util.Anim.prototype.getEl = function() {
   /// <summary> Returns a reference to the animated element. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.util.Anim.prototype.toString = function() {
   /// <summary> Provides a readable name for the Anim instance. </summary>
   /// <returns type="String" />
};
YAHOO.util.Anim.prototype.onTween = function() {
   /// <summary> Feeds the starting and ending values for each animated attribute to doMethod once per frame, then applies the resulting value to the attribute(s). </summary>
   /// <private />
};
YAHOO.util.Anim.prototype.animate = function() {
   /// <summary> Starts the animation by registering it with the animation manager. </summary>
};
YAHOO.util.Anim.prototype.getStartTime = function() {
   /// <summary> Returns the animation start time. </summary>
   /// <returns type="Date" />
};
YAHOO.util.AnimMgr.prototype.run = function() {
   /// <summary> Called per Interval to handle each animation frame. </summary>
};
YAHOO.util.AnimMgr.prototype.unRegister = function(tween, index) {
   /// <summary> removes an animation instance from the animation queue.All animation instances must be registered in order to animate. </summary>
   /// <private />
 /// <param name="tween" type="object"> The Anim instance to be be registered</param>
 /// <param name="index" type="Int"> The index of the Anim instance</param>
};
YAHOO.util.AnimMgr.prototype.stop = function(tween) {
   /// <summary> Stops the animation thread or a specific animation instance. </summary>
 /// <param name="tween" type="object"> A specific Anim instance to stop (optional)If no instance given, Manager stops thread and all animations.</param>
};
YAHOO.util.AnimMgr.prototype.start = function() {
   /// <summary> Starts the animation thread.Only one thread can run at a time. </summary>
};
YAHOO.util.AnimMgr.prototype.registerElement = function(tween) {
   /// <summary> Adds an animation instance to the animation queue.All animation instances must be registered in order to animate. </summary>
 /// <param name="tween" type="object"> The Anim instance to be be registered</param>
};
YAHOO.util.AnimMgr.prototype.correctFrame = function(tween) {
   /// <summary> On the fly frame correction to keep animation on time. </summary>
   /// <private />
 /// <param name="tween" type="Object"> The Anim instance being corrected.</param>
};
YAHOO.util.ArrayAssert.containsMatch = function(matcher, haystack, message) {
   /// <summary> Asserts that a value matching some condition is present in an array. This usesa function to determine a match. </summary>
 /// <param name="matcher" type="Function"> A function that returns true if the items matches or false if not.</param>
 /// <param name="haystack" type="Array"> An array of values.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.ArrayAssert.doesNotContain = function(needle, haystack, message) {
   /// <summary> Asserts that a value is not present in an array. This uses the triple equals sign so no type cohersion may occur. </summary>
 /// <param name="needle" type="Object"> The value that is expected in the array.</param>
 /// <param name="haystack" type="Array"> An array of values.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.ArrayAssert.indexOf = function(needle, haystack, index, message) {
   /// <summary> Asserts that the given value is contained in an array at the specified index.This uses the triple equals sign so no type cohersion will occur. </summary>
 /// <param name="needle" type="Object"> The value to look for.</param>
 /// <param name="haystack" type="Array"> The array to search in.</param>
 /// <param name="index" type="int"> The index at which the value should exist.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.ArrayAssert.isNotEmpty = function(actual, message) {
   /// <summary> Asserts that an array is not empty. </summary>
 /// <param name="actual" type="Array"> The array to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.ArrayAssert.contains = function(needle, haystack, message) {
   /// <summary> Asserts that a value is present in an array. This uses the triple equals sign so no type cohersion may occur. </summary>
 /// <param name="needle" type="Object"> The value that is expected in the array.</param>
 /// <param name="haystack" type="Array"> An array of values.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.ArrayAssert.containsItems = function(needles, haystack, message) {
   /// <summary> Asserts that a set of values are present in an array. This uses the triple equals sign so no type cohersion may occur. For this assertion to pass, all values mustbe found. </summary>
 /// <param name="needles" type="Object[]"> An array of values that are expected in the array.</param>
 /// <param name="haystack" type="Array"> An array of values to check.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.ArrayAssert.doesNotContainItems = function(needles, haystack, message) {
   /// <summary> Asserts that a set of values are not present in an array. This uses the triple equals sign so no type cohersion may occur. For this assertion to pass, all values mustnot be found. </summary>
 /// <param name="needles" type="Object[]"> An array of values that are not expected in the array.</param>
 /// <param name="haystack" type="Array"> An array of values to check.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.ArrayAssert.itemsAreEquivalent = function(expected, actual, comparator, message) {
   /// <summary> Asserts that the values in an array are equivalent, and in the same position,as values in another array. This uses a function to determine if the valuesare equivalent. Note that the array objects themselvesneed not be the same for this test to pass. </summary>
   /// <returns type="Void" />
 /// <param name="expected" type="Array"> An array of the expected values.</param>
 /// <param name="actual" type="Array"> Any array of the actual values.</param>
 /// <param name="comparator" type="Function"> A function that returns true if the values are equivalentor false if not.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.ArrayAssert.itemsAreEqual = function(expected, actual, message) {
   /// <summary> Asserts that the values in an array are equal, and in the same position,as values in another array. This uses the double equals signso type cohersion may occur. Note that the array objects themselvesneed not be the same for this test to pass. </summary>
 /// <param name="expected" type="Array"> An array of the expected values.</param>
 /// <param name="actual" type="Array"> Any array of the actual values.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.ArrayAssert.isEmpty = function(actual, message) {
   /// <summary> Asserts that an array is empty. </summary>
 /// <param name="actual" type="Array"> The array to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.ArrayAssert.lastIndexOf = function(needle, haystack, index, message) {
   /// <summary> Asserts that the given value is contained in an array at the specified index,starting from the back of the array.This uses the triple equals sign so no type cohersion will occur. </summary>
 /// <param name="needle" type="Object"> The value to look for.</param>
 /// <param name="haystack" type="Array"> The array to search in.</param>
 /// <param name="index" type="int"> The index at which the value should exist.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.ArrayAssert.itemsAreSame = function(expected, actual, message) {
   /// <summary> Asserts that the values in an array are the same, and in the same position,as values in another array. This uses the triple equals signso no type cohersion will occur. Note that the array objects themselvesneed not be the same for this test to pass. </summary>
 /// <param name="expected" type="Array"> An array of the expected values.</param>
 /// <param name="actual" type="Array"> Any array of the actual values.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.ArrayAssert.doesNotContainMatch = function(matcher, haystack, message) {
   /// <summary> Asserts that no values matching a condition are present in an array. This usesa function to determine a match. </summary>
 /// <param name="matcher" type="Function"> A function that returns true if the items matches or false if not.</param>
 /// <param name="haystack" type="Array"> An array of values.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.isTrue = function(actual, message) {
   /// <summary> Asserts that a value is true. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.isFalse = function(actual, message) {
   /// <summary> Asserts that a value is false. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.isNotNull = function(actual, message) {
   /// <summary> Asserts that a value is not null. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.fail = function(message) {
   /// <summary> Forces an assertion error to occur. </summary>
 /// <param name="message" type="String"> (Optional) The message to display with the failure.</param>
};
YAHOO.util.Assert.isFunction = function(actual, message) {
   /// <summary> Asserts that a value is a function. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.isNaN = function(actual, message) {
   /// <summary> Asserts that a value is not a number. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.isBoolean = function(actual, message) {
   /// <summary> Asserts that a value is a Boolean. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.areNotSame = function(unexpected, actual, message) {
   /// <summary> Asserts that a value is not the same as another. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="unexpected" type="Object"> The unexpected value.</param>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.isNotNaN = function(actual, message) {
   /// <summary> Asserts that a value is not the special NaN value. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.areNotEqual = function(unexpected, actual, message) {
   /// <summary> Asserts that a value is not equal to another. This uses the double equals signso type cohersion may occur. </summary>
 /// <param name="unexpected" type="Object"> The unexpected value.</param>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.areSame = function(expected, actual, message) {
   /// <summary> Asserts that a value is the same as another. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="expected" type="Object"> The expected value.</param>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.isUndefined = function(actual, message) {
   /// <summary> Asserts that a value is undefined. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.isArray = function(actual, message) {
   /// <summary> Asserts that a value is an array. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.isTypeOf = function(expectedType, actualValue, message) {
   /// <summary> Asserts that a value is of a particular type. </summary>
 /// <param name="expectedType" type="String"> The expected type of the variable.</param>
 /// <param name="actualValue" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert._formatMessage = function(customMessage, defaultMessage) {
   /// <summary> Formats a message so that it can contain the original assertion messagein addition to the custom message. </summary>
   /// <returns type="String" />
 /// <param name="customMessage" type="String"> The message passed in by the developer.</param>
 /// <param name="defaultMessage" type="String"> The message created by the error by default.</param>
};
YAHOO.util.Assert.areEqual = function(expected, actual, message) {
   /// <summary> Asserts that a value is equal to another. This uses the double equals signso type cohersion may occur. </summary>
 /// <param name="expected" type="Object"> The expected value.</param>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.isNumber = function(actual, message) {
   /// <summary> Asserts that a value is a number. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.isObject = function(actual, message) {
   /// <summary> Asserts that a value is an object. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.isString = function(actual, message) {
   /// <summary> Asserts that a value is a string. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.isNotUndefined = function(actual, message) {
   /// <summary> Asserts that a value is not undefined. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.isNull = function(actual, message) {
   /// <summary> Asserts that a value is null. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Assert.isInstanceOf = function(expected, actual, message) {
   /// <summary> Asserts that a value is an instance of a particular object. This may returnincorrect results when comparing objects from one frame to constructors inanother frame. For best results, don't use in a cross-frame manner. </summary>
 /// <param name="expected" type="Function"> The function that the object should be an instance of.</param>
 /// <param name="actual" type="Object"> The object to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.AssertionError.prototype.getMessage = function() {
   /// <summary> Returns a fully formatted error for an assertion failure. This shouldbe overridden by all subclasses to provide specific information. </summary>
   /// <returns type="String" />
};
YAHOO.util.AssertionError.prototype.valueOf = function() {
   /// <summary> Returns a primitive value version of the error. Same as toString(). </summary>
   /// <returns type="String" />
};
YAHOO.util.AssertionError.prototype.toString = function() {
   /// <summary> Returns a string representation of the error. </summary>
   /// <returns type="String" />
};
YAHOO.util.Attribute.prototype.setValue = function(value, silent) {
   /// <summary> Sets the value of the attribute and fires beforeChange and change events. </summary>
   /// <returns type="Boolean" />
 /// <param name="value" type="Any"> The value to apply to the attribute.</param>
 /// <param name="silent" type="Boolean"> If true the change events will not be fired.</param>
};
YAHOO.util.Attribute.prototype.configure = function(map, init) {
   /// <summary> Allows for configuring the Attribute's properties. </summary>
 /// <param name="map" type="Object"> A key-value map of Attribute properties.</param>
 /// <param name="init" type="Boolean"> Whether or not this should become the initial config.</param>
};
YAHOO.util.Attribute.prototype.resetValue = function() {
   /// <summary> Resets the value to the initial config value. </summary>
   /// <returns type="Boolean" />
};
YAHOO.util.Attribute.prototype.refresh = function() {
   /// <summary> Resets the value to the current value.Useful when values may have gotten out of sync with actual properties. </summary>
   /// <returns type="Boolean" />
};
YAHOO.util.Attribute.prototype.getValue = function() {
   /// <summary> Retrieves the current value of the attribute. </summary>
   /// <returns type="any" />
};
YAHOO.util.Attribute.prototype.resetConfig = function() {
   /// <summary> Resets the attribute config to the initial config state. </summary>
};
YAHOO.util.AttributeProvider.prototype["set"] = function(key, value, silent) {
   /// <summary> Sets the value of a config. </summary>
   /// <returns type="Boolean" />
 /// <param name="key" type="String"> The name of the attribute</param>
 /// <param name="value" type="Any"> The value to apply to the attribute</param>
 /// <param name="silent" type="Boolean"> Whether or not to suppress change events</param>
};
YAHOO.util.AttributeProvider.prototype.fireBeforeChangeEvent = function(key, e) {
   /// <summary> Fires the attribute's beforeChange event. </summary>
 /// <param name="key" type="String"> The attribute's name.</param>
 /// <param name="e" type="Obj"> The event object to pass to handlers.</param>
};
YAHOO.util.AttributeProvider.prototype.resetValue = function(key, silent) {
   /// <summary> Resets the specified attribute's value to its initial value. </summary>
   /// <returns type="Boolean" />
 /// <param name="key" type="String"> The name of the attribute</param>
 /// <param name="silent" type="Boolean"> Whether or not to suppress change events</param>
};
YAHOO.util.AttributeProvider.prototype["get"] = function(key) {
   /// <summary> Returns the current value of the attribute. </summary>
   /// <returns type="Any" />
 /// <param name="key" type="String"> The attribute whose value will be returned.</param>
};
YAHOO.util.AttributeProvider.prototype.setAttributeConfig = function(key, map, init) {
   /// <summary> Sets or updates an Attribute instance's properties. </summary>
 /// <param name="key" type="String"> The attribute's name.</param>
 /// <param name="map" type="Object"> A key-value map of attribute properties</param>
 /// <param name="init" type="Boolean"> Whether or not this should become the intial config.</param>
};
YAHOO.util.AttributeProvider.prototype.resetAttributeConfig = function(key) {
   /// <summary> Resets an attribute to its intial configuration. </summary>
   /// <private />
 /// <param name="key" type="String"> The attribute's name.</param>
};
YAHOO.util.AttributeProvider.prototype.register = function(key, map) {
   /// <summary> Adds an Attribute to the AttributeProvider instance. </summary>
 /// <param name="key" type="String"> The attribute's name</param>
 /// <param name="map" type="Object"> A key-value map containing theattribute's properties.</param>
};
YAHOO.util.AttributeProvider.prototype.getAttributeConfig = function(key) {
   /// <summary> Returns the attribute's properties. </summary>
   /// <private />
   /// <returns type="object" />
 /// <param name="key" type="String"> The attribute's name</param>
};
YAHOO.util.AttributeProvider.prototype.refresh = function(key, silent) {
   /// <summary> Sets the attribute's value to its current value. </summary>
 /// <param name="key" type="String | Array"> The attribute(s) to refresh</param>
 /// <param name="silent" type="Boolean"> Whether or not to suppress change events</param>
};
YAHOO.util.AttributeProvider.prototype.setAttributes = function(map, silent) {
   /// <summary> Sets multiple attribute values. </summary>
 /// <param name="map" type="Object">  A key-value map of attributes</param>
 /// <param name="silent" type="Boolean"> Whether or not to suppress change events</param>
};
YAHOO.util.AttributeProvider.prototype.getAttributeKeys = function() {
   /// <summary> Returns an array of attribute names. </summary>
   /// <returns type="Array" />
};
YAHOO.util.AttributeProvider.prototype.fireChangeEvent = function(key, e) {
   /// <summary> Fires the attribute's change event. </summary>
 /// <param name="key" type="String"> The attribute's name.</param>
 /// <param name="e" type="Obj"> The event object to pass to the handlers.</param>
};
YAHOO.util.AttributeProvider.prototype.configureAttribute = function(key, map, init) {
   /// <summary> Sets or updates an Attribute instance's properties. </summary>
 /// <param name="key" type="String"> The attribute's name.</param>
 /// <param name="map" type="Object"> A key-value map of attribute properties</param>
 /// <param name="init" type="Boolean"> Whether or not this should become the intial config.</param>
};
YAHOO.util.Bezier.prototype.getPosition = function(points, t) {
   /// <summary> Get the current position of the animated element based on t.Each point is an array of "x" and "y" values (0 = x, 1 = y)At least 2 points are required (start and end).First point is start. Last point is end.Additional control points are optional. </summary>
   /// <returns type="Array" />
 /// <param name="points" type="Array"> An array containing Bezier points</param>
 /// <param name="t" type="Number"> A number between 0 and 1 which is the basis for determining current position</param>
};
YAHOO.util.Chain.prototype.run = function() {
   /// <summary> Begin executing the chain, or resume execution from the last paused position. </summary>
   /// <returns type="Chain" />
};
YAHOO.util.Chain.prototype.add = function(c) {
   /// <summary> Add a callback to the end of the queue </summary>
   /// <returns type="Chain" />
 /// <param name="c" type="Function|Object">  the callback function ref or object literal</param>
};
YAHOO.util.Chain.prototype.pause = function() {
   /// <summary> Pause the execution of the Chain after the current execution of thecurrent callback completes.  If called interstitially, clears thetimeout for the pending callback. Paused Chains can be restarted withchain.run() </summary>
   /// <returns type="Chain" />
};
YAHOO.util.Chain.prototype.stop = function() {
   /// <summary> Stop and clear the Chain's queue after the current execution of thecurrent callback completes. </summary>
   /// <returns type="Chain" />
};
YAHOO.util.Color.prototype.hsv2rgb = function(h, s, v) {
   /// <summary> Converts HSV (h[0-360], s[0-1]), v[0-1] to RGB [255,255,255] </summary>
   /// <returns type="[int, int, int]" />
 /// <param name="h" type="int|[int, float, float]">  the hue, or anarray containing all three parameters</param>
 /// <param name="s" type="float">  the saturation</param>
 /// <param name="v" type="float">  the value/brightness</param>
};
YAHOO.util.Color.prototype.websafe = function(r, g, b) {
   /// <summary> Returns the closest websafe color to the supplied rgb value. </summary>
   /// <returns type="[int, int, int]" />
 /// <param name="r" type="int|[int, int, int]">  the red value, or anarray containing all three parameters</param>
 /// <param name="g" type="int">  the green value</param>
 /// <param name="b" type="int">  the blue value</param>
};
YAHOO.util.Color.prototype.rgb2hsv = function(r, g, b) {
   /// <summary> Converts to RGB [255,255,255] to HSV (h[0-360], s[0-1]), v[0-1] </summary>
   /// <returns type="[int, float, float]" />
 /// <param name="r" type="int|[int, int, int]">  the red value, or anarray containing all three parameters</param>
 /// <param name="g" type="int">  the green value</param>
 /// <param name="b" type="int">  the blue value</param>
};
YAHOO.util.Color.prototype.hex2dec = function(str) {
   /// <summary> Converts a hex pair 00...FF to an int 0...255 </summary>
   /// <returns type="int" />
 /// <param name="str" type="string">  the hex pair to convert</param>
};
YAHOO.util.Color.prototype.rgb2hex = function(r, g, b) {
   /// <summary> Converts decimal rgb values into a hex string255,255,255 -> FFFFFF </summary>
   /// <returns type="string" />
 /// <param name="r" type="int|[int, int, int]">  the red value, or anarray containing all three parameters</param>
 /// <param name="g" type="int">  the green value</param>
 /// <param name="b" type="int">  the blue value</param>
};
YAHOO.util.Color.prototype.real2dec = function(n) {
   /// <summary> Converts 0-1 to 0-255 </summary>
   /// <returns type="int" />
 /// <param name="n" type="float">  the number to convert</param>
};
YAHOO.util.Color.prototype.dec2hex = function(n) {
   /// <summary> Converts an int 0...255 to hex pair 00...FF </summary>
   /// <returns type="string" />
 /// <param name="n" type="int">  the number to convert</param>
};
YAHOO.util.Color.prototype.hex2rgb = function(str) {
   /// <summary> Converts a hex string to rgb </summary>
   /// <returns type="[int, int, int]" />
 /// <param name="str" type="string">  the hex string</param>
};
YAHOO.util.ColorAnim.prototype.parseColor = function(s) {
   /// <summary> Attempts to parse the given string and return a 3-tuple. </summary>
   /// <returns type="Array" />
 /// <param name="s" type="String"> The string to parse.</param>
};
YAHOO.util.ColumnResizer.prototype.startDrag = function(e) {
   /// <summary> Handles start drag on the Column resizer. </summary>
 /// <param name="e" type="string">  The drag event</param>
};
YAHOO.util.ColumnResizer.prototype.resetResizerEl = function() {
   /// <summary> Resets resizer element. </summary>
};
YAHOO.util.ColumnResizer.prototype.onMouseDown = function(e) {
   /// <summary> Handles mousedown events on the Column resizer. </summary>
 /// <param name="e" type="string">  The mousedown event</param>
};
YAHOO.util.ColumnResizer.prototype.onMouseUp = function(e) {
   /// <summary> Handles mouseup events on the Column resizer. </summary>
 /// <param name="e" type="string">  The mouseup event</param>
};
YAHOO.util.ColumnResizer.prototype.onDrag = function(e) {
   /// <summary> Handles drag events on the Column resizer. </summary>
 /// <param name="e" type="string">  The drag event</param>
};
YAHOO.util.ColumnResizer.prototype.clickValidator = function(e) {
   /// <summary> Custom clickValidator to ensure Column is not in hidden state. </summary>
   /// <private />
 /// <param name="e" type="Event"></param>
};
YAHOO.util.ComparisonFailure.prototype.toString = function() {
   /// <summary> Returns a fully formatted error for an assertion failure. This messageprovides information about the expected and actual values. </summary>
   /// <returns type="String" />
};
YAHOO.util.Config.prototype.fireQueue = function() {
   /// <summary> Fires the normalized list of queued property change events </summary>
};
YAHOO.util.Config.alreadySubscribed = function(evt, fn, obj) {
   /// <summary> Checks to determine if a particular function/Object pair are already subscribed to the specified CustomEvent </summary>
   /// <returns type="Boolean" />
 /// <param name="evt" type="YAHOO.util.CustomEvent"> The CustomEvent for which to check the subscriptions</param>
 /// <param name="fn" type="Function"> The function to look for in the subscribers list</param>
 /// <param name="obj" type="Object"> The execution scope Object for the subscription</param>
};
YAHOO.util.Config.prototype.getProperty = function(key) {
   /// <summary> Returns the value of specified property. </summary>
   /// <returns type="Object" />
 /// <param name="key" type="String"> The name of the property</param>
};
YAHOO.util.Config.prototype.addProperty = function(key, propertyObject) {
   /// <summary> Adds a property to the Config Object's private config hash. </summary>
 /// <param name="key" type="String"> The configuration property's name</param>
 /// <param name="propertyObject" type="Object"> The Object containing all of this property's arguments</param>
};
YAHOO.util.Config.prototype.queueProperty = function(key, value) {
   /// <summary> Sets the value of a property and queues its event to execute. If the event is already scheduled to execute, it ismoved from its current position to the end of the queue. </summary>
   /// <returns type="Boolean" />
 /// <param name="key" type="String"> The name of the property</param>
 /// <param name="value" type="String"> The value to set the property to</param>
};
YAHOO.util.Config.prototype.checkNumber = function(val) {
   /// <summary> Validates that the value passed in is a number. </summary>
   /// <returns type="Boolean" />
 /// <param name="val" type="Object"> The value to validate</param>
};
YAHOO.util.Config.prototype.outputEventQueue = function() {
   /// <summary> Returns a string representation of the Config object's current CustomEvent queue </summary>
   /// <returns type="String" />
};
YAHOO.util.Config.prototype.getConfig = function() {
   /// <summary> Returns a key-value configuration map of the values currently set in  the Config Object. </summary>
   /// <returns type="Object" />
};
YAHOO.util.Config.prototype.applyConfig = function(userConfig, init) {
   /// <summary> Applies a key-value Object literal to the configuration, replacing  any existing values, and queueing the property events.Although the values will be set, fireQueue() must be called for their associated events to execute. </summary>
 /// <param name="userConfig" type="Object"> The configuration Object literal</param>
 /// <param name="init" type="Boolean">  When set to true, the initialConfig will be set to the userConfig passed in, so that calling a reset will reset the properties to the passed values.</param>
};
YAHOO.util.Config.prototype.refresh = function() {
   /// <summary> Refires the events for all configuration properties using their current values. </summary>
};
YAHOO.util.Config.prototype.subscribeToConfigEvent = function(key, handler, obj, overrideContext) {
   /// <summary> Subscribes an external handler to the change event for any given property. </summary>
   /// <returns type="Boolean" />
 /// <param name="key" type="String"> The property name</param>
 /// <param name="handler" type="Function"> The handler function to use subscribe to the property's event</param>
 /// <param name="obj" type="Object"> The Object to use for scoping the event handler (see CustomEvent documentation)</param>
 /// <param name="overrideContext" type="Boolean"> Optional. If true, will override"this" within the handler to map to the scope Object passed into themethod.</param>
};
YAHOO.util.Config.prototype.checkBoolean = function(val) {
   /// <summary> Validates that the value passed in is a Boolean. </summary>
   /// <returns type="Boolean" />
 /// <param name="val" type="Object"> The value to validate</param>
};
YAHOO.util.Config.prototype.init = function(owner) {
   /// <summary> Initializes the configuration Object and all of its local members. </summary>
 /// <param name="owner" type="Object"> The owner Object to which this Config Object belongs</param>
};
YAHOO.util.Config.prototype.toString = function() {
   /// <summary> Returns a string representation of the Config object </summary>
   /// <returns type="String" />
};
YAHOO.util.Config.prototype.refireEvent = function(key) {
   /// <summary> Fires the event for a property using the property's current value. </summary>
 /// <param name="key" type="String"> The name of the property</param>
};
YAHOO.util.Config.prototype.resetProperty = function(key) {
   /// <summary> Resets the specified property's value to its initial value. </summary>
   /// <returns type="Boolean" />
 /// <param name="key" type="String"> The name of the property</param>
};
YAHOO.util.Config.prototype.setProperty = function(key, value, silent) {
   /// <summary> Sets the value of a property. If the silent property is passed as true, the property's event will not be fired. </summary>
   /// <returns type="Boolean" />
 /// <param name="key" type="String"> The name of the property</param>
 /// <param name="value" type="String"> The value to set the property to</param>
 /// <param name="silent" type="Boolean"> Whether the value should be set silently, without firing the property event.</param>
};
YAHOO.util.Config.prototype.destroy = function() {
   /// <summary> Sets all properties to null, unsubscribes all listeners from each property's change event and all listeners from the configChangedEvent. </summary>
};
YAHOO.util.Config.prototype.fireEvent = function(key, Object) {
   /// <summary> Fires a configuration property event using the specified value. </summary>
   /// <private />
 /// <param name="key" type="String"> The configuration property's name</param>
 /// <param name="Object" type="value"> The value of the correct type for the property</param>
};
YAHOO.util.Config.prototype.unsubscribeFromConfigEvent = function(key, handler, obj) {
   /// <summary> Unsubscribes an external handler from the change event for any given property. </summary>
   /// <returns type="Boolean" />
 /// <param name="key" type="String"> The property name</param>
 /// <param name="handler" type="Function"> The handler function to use subscribe to the property's event</param>
 /// <param name="obj" type="Object"> The Object to use for scoping the event handler (see CustomEvent documentation)</param>
};
YAHOO.util.Connect.asyncRequest = function(method, uri, callback, postData) {
   /// <summary> Method for initiating an asynchronous request via the XHR object. </summary>
   /// <returns type="object" />
 /// <param name="method" type="string"> HTTP transaction method</param>
 /// <param name="uri" type="string"> Fully qualified path of resource</param>
 /// <param name="callback" type="callback"> User-defined callback function or object</param>
 /// <param name="postData" type="string"> POST body</param>
};
YAHOO.util.Connect.isCallInProgress = function(o) {
   /// <summary> Determines if the transaction is still being processed. </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="object"> The connection object returned by asyncRequest</param>
};
YAHOO.util.Connect.resetFormState = function() {
   /// <summary> Resets HTML form properties when an HTML form or HTML formwith file upload transaction is sent. </summary>
   /// <private />
   /// <returns type="void" />
};
YAHOO.util.Connect.initCustomEvents = function(o, callback) {
   /// <summary> This method creates and subscribes custom events,specific to each transaction </summary>
   /// <private />
   /// <returns type="void" />
 /// <param name="o" type="object"> The connection object</param>
 /// <param name="callback" type="callback"> The user-defined callback object</param>
};
YAHOO.util.Connect.abort = function(o, callback, isTimeout) {
   /// <summary> Method to terminate a transaction, if it has not reached readyState 4. </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="object"> The connection object returned by asyncRequest.</param>
 /// <param name="callback" type="object">  User-defined callback object.</param>
 /// <param name="isTimeout" type="string"> boolean to indicate if abort resulted from a callback timeout.</param>
};
YAHOO.util.Connect.transport = function(URI) {
   /// <summary> This method instantiates the Flash transport andestablishes a static reference to it, used for all XDR requests. </summary>
   /// <returns type="void" />
 /// <param name="URI" type="string"> to connection.swf.</param>
};
YAHOO.util.Connect.setDefaultXhrHeader = function(b) {
   /// <summary> Member to override the default transaction header.. </summary>
   /// <returns type="" />
 /// <param name="b" type="boolean"> Set and use default header - true or false .</param>
};
YAHOO.util.Connect.setForm = function(form, optional) {
   /// <summary> This method assembles the form label and value pairs andconstructs an encoded string.asyncRequest() will automatically initialize the transaction with aa HTTP header Content-Type of application/x-www-form-urlencoded. </summary>
   /// <returns type="string" />
 /// <param name="form" type="string || object"> id or name attribute, or form object.</param>
 /// <param name="optional" type="boolean"> enable file upload.</param>
 /// <param name="optional" type="boolean"> enable file upload over SSL in IE only.</param>
};
YAHOO.util.Connect.uploadFile = function(id, callback, uri, postData) {
   /// <summary> Uploads HTML form, inclusive of files/attachments, using theiframe created in createFrame to facilitate the transaction. </summary>
   /// <private />
   /// <returns type="void" />
 /// <param name="id" type="int"> The transaction id.</param>
 /// <param name="callback" type="object"> User-defined callback object.</param>
 /// <param name="uri" type="string"> Fully qualified path of resource.</param>
 /// <param name="postData" type="string"> POST data to be submitted in addition to HTML form.</param>
};
YAHOO.util.Connect.createResponseObject = function(o, callbackArg) {
   /// <summary> This method evaluates the server response, creates and returns the results viaits properties.  Success and failure cases will differ in the responseobject's property values. </summary>
   /// <private />
   /// <returns type="object" />
 /// <param name="o" type="object"> The connection object</param>
 /// <param name="callbackArg" type="callbackArg"> The user-defined argument or arguments to be passed to the callback</param>
};
YAHOO.util.Connect.getConnectionObject = function() {
   /// <summary> This method is called by asyncRequest to create avalid connection object for the transaction.  It also passes atransaction id and increments the transaction id counter. </summary>
   /// <private />
   /// <returns type="object" />
};
YAHOO.util.Connect.createExceptionObject = function(tId, callbackArg, isAbort) {
   /// <summary> If a transaction cannot be completed due to dropped or closed connections,there may be not be enough information to build a full response object.The failure callback will be fired and this specific condition can be identifiedby a status property value of 0.If an abort was successful, the status property will report a value of -1. </summary>
   /// <private />
   /// <returns type="object" />
 /// <param name="tId" type="int"> The Transaction Id</param>
 /// <param name="callbackArg" type="callbackArg"> The user-defined argument or arguments to be passed to the callback</param>
 /// <param name="isAbort" type="boolean"> Determines if the exception case is caused by a transaction abort</param>
};
YAHOO.util.Connect.handleXdrResponse = function(The) {
   /// <summary> This method is the initial response handlerfor XDR transactions.  The Flash transport calls thisfunction and sends the response payload. </summary>
   /// <private />
   /// <returns type="void" />
 /// <param name="The" type="object"> response object sent from the Flash transport.</param>
};
YAHOO.util.Connect.resetDefaultHeaders = function() {
   /// <summary> Resets the default HTTP headers object </summary>
   /// <returns type="void" />
};
YAHOO.util.Connect.xdr = function(The, HTTP, URI) {
   /// <summary> This method calls the public method on theFlash transport to start the XDR transaction.  It is analogousto Connection Manager's asyncRequest method. </summary>
   /// <private />
   /// <returns type="void" />
 /// <param name="The" type="object"> transaction object.</param>
 /// <param name="HTTP" type="string"> request method.</param>
 /// <param name="URI" type="string"> for the transaction.</param>
 /// <param name="The" type="object"> transaction's callback object.</param>
 /// <param name="The" type="object"> JSON object used as HTTP POST data.</param>
};
YAHOO.util.Connect.appendPostData = function(postData) {
   /// <summary> Parses the POST data and creates hidden form elementsfor each key-value, and appends them to the HTML form object. </summary>
   /// <private />
   /// <returns type="array" />
 /// <param name="postData" type="string"> The HTTP POST data</param>
};
YAHOO.util.Connect.releaseObject = function(o) {
   /// <summary> Dereference the XHR instance and the connection object after the transaction is completed. </summary>
   /// <private />
   /// <returns type="void" />
 /// <param name="o" type="object"> The connection object</param>
};
YAHOO.util.Connect.createXhrObject = function(transactionId) {
   /// <summary> Instantiates a XMLHttpRequest object and returns an object with two properties:the XMLHttpRequest instance and the transaction id. </summary>
   /// <private />
   /// <returns type="" />
 /// <param name="transactionId" type="int"> Property containing the transaction id for this transaction.</param>
};
YAHOO.util.Connect.handleTransactionResponse = function(o, callback, isAbort) {
   /// <summary> This method attempts to interpret the server response anddetermine whether the transaction was successful, or if an error orexception was encountered. </summary>
   /// <private />
   /// <returns type="void" />
 /// <param name="o" type="object"> The connection object</param>
 /// <param name="callback" type="object"> The user-defined callback object</param>
 /// <param name="isAbort" type="boolean"> Determines if the transaction was terminated via abort().</param>
};
YAHOO.util.Connect.createFrame = function(optional) {
   /// <summary> Creates an iframe to be used for form file uploads.  It is remove from thedocument upon completion of the upload transaction. </summary>
   /// <private />
   /// <returns type="void" />
 /// <param name="optional" type="string"> qualified path of iframe resource for SSL in IE.</param>
};
YAHOO.util.Connect._xdrStart = function(The) {
   /// <summary> This method fires the global and transaction startevents. </summary>
   /// <private />
   /// <returns type="void" />
 /// <param name="The" type="object"> transaction object.</param>
 /// <param name="The" type="string"> transaction's callback object.</param>
};
YAHOO.util.Connect.handleReadyState = function(o, callback) {
   /// <summary> This method serves as a timer that polls the XHR object's readyStateproperty during a transaction, instead of binding a callback to theonreadystatechange event.  Upon readyState 4, handleTransactionResponsewill process the response, and the timer will be cleared. </summary>
   /// <private />
   /// <returns type="void" />
 /// <param name="o" type="object"> The connection object</param>
 /// <param name="callback" type="callback"> The user-defined callback object</param>
};
YAHOO.util.Connect.setDefaultPostHeader = function(b) {
   /// <summary> Member to override the default POST header. </summary>
   /// <returns type="" />
 /// <param name="b" type="boolean"> Set and use default header - true or false .</param>
};
YAHOO.util.Connect.initHeader = function(label, value, isDefault) {
   /// <summary> Method that initializes the custom HTTP headers for the each transaction. </summary>
   /// <returns type="void" />
 /// <param name="label" type="string"> The HTTP header label</param>
 /// <param name="value" type="string"> The HTTP header value</param>
 /// <param name="isDefault" type="string"> Determines if the specific header is a default headerautomatically sent with each transaction.</param>
};
YAHOO.util.Connect.setProgId = function(id) {
   /// <summary> Member to add an ActiveX id to the existing xml_progid array.In the event(unlikely) a new ActiveX id is introduced, it can be addedwithout internal code modifications. </summary>
   /// <returns type="" />
 /// <param name="id" type="string"> The ActiveX id to be added to initialize the XHR object.</param>
};
YAHOO.util.Connect.setPollingInterval = function(i) {
   /// <summary> Member to modify the default polling interval. </summary>
   /// <returns type="" />
 /// <param name="i" type="int"> The polling interval in milliseconds.</param>
};
YAHOO.util.Connect.setHeader = function(o) {
   /// <summary> Accessor that sets the HTTP headers for each transaction. </summary>
   /// <private />
   /// <returns type="void" />
 /// <param name="o" type="object"> The connection object for the transaction.</param>
};
YAHOO.util.Connect._swf = function(URI) {
   /// <summary> This method creates and instantiates the Flash transport. </summary>
   /// <private />
   /// <returns type="void" />
 /// <param name="URI" type="string"> to connection.swf.</param>
};
YAHOO.util.Cookie.setSub = function(name, subName, value, options) {
   /// <summary> Sets a sub cookie with a given name to a particular value. </summary>
   /// <returns type="String" />
 /// <param name="name" type="String"> The name of the cookie to set.</param>
 /// <param name="subName" type="String"> The name of the subcookie to set.</param>
 /// <param name="value" type="Variant"> The value to set.</param>
 /// <param name="options" type="Object"> (Optional) An object containing one or morecookie options: path (a string), domain (a string), expires (a Date object),and secure (true/false).</param>
};
YAHOO.util.Cookie._parseCookieHash = function(text) {
   /// <summary> Parses a cookie hash string into an object. </summary>
   /// <private />
   /// <returns type="Object" />
 /// <param name="text" type="String"> The cookie hash string to parse. The string should already be URL-decoded.</param>
};
YAHOO.util.Cookie["set"] = function(name, value, options) {
   /// <summary> Sets a cookie with a given name and value. </summary>
   /// <returns type="String" />
 /// <param name="name" type="String"> The name of the cookie to set.</param>
 /// <param name="value" type="Variant"> The value to set for the cookie.</param>
 /// <param name="options" type="Object"> (Optional) An object containing one or morecookie options: path (a string), domain (a string), expires (a Date object),raw (true/false), and secure (true/false).</param>
};
YAHOO.util.Cookie.setSubs = function(name, value, options) {
   /// <summary> Sets a cookie with a given name to contain a hash of name-value pairs. </summary>
   /// <returns type="String" />
 /// <param name="name" type="String"> The name of the cookie to set.</param>
 /// <param name="value" type="Object"> An object containing name-value pairs.</param>
 /// <param name="options" type="Object"> (Optional) An object containing one or morecookie options: path (a string), domain (a string), expires (a Date object),and secure (true/false).</param>
};
YAHOO.util.Cookie.exists = function(name) {
   /// <summary> Determines if the cookie with the given name exists. This is useful forBoolean cookies (those that do not follow the name=value convention). </summary>
   /// <returns type="Boolean" />
 /// <param name="name" type="String"> The name of the cookie to check.</param>
};
YAHOO.util.Cookie["get"] = function(name, options) {
   /// <summary> Returns the cookie value for the given name. </summary>
   /// <returns type="Variant" />
 /// <param name="name" type="String"> The name of the cookie to retrieve.</param>
 /// <param name="options" type="Object|Function"> (Optional) An object containing one or morecookie options: raw (true/false) and converter (a function).The converter function is run on the value before returning it. Thefunction is not used if the cookie doesn't exist. The function can bepassed instead of the options object for backwards compatibility.</param>
};
YAHOO.util.Cookie._parseCookieString = function(text, decode) {
   /// <summary> Parses a cookie string into an object representing all accessible cookies. </summary>
   /// <private />
   /// <returns type="Object" />
 /// <param name="text" type="String"> The cookie string to parse.</param>
 /// <param name="decode" type="Boolean"> (Optional) Indicates if the cookie values should be decoded or not. Default is true.</param>
};
YAHOO.util.Cookie.remove = function(name, options) {
   /// <summary> Removes a cookie from the machine by setting its expiration date tosometime in the past. </summary>
   /// <returns type="String" />
 /// <param name="name" type="String"> The name of the cookie to remove.</param>
 /// <param name="options" type="Object"> (Optional) An object containing one or morecookie options: path (a string), domain (a string),and secure (true/false). The expires option will be overwrittenby the method.</param>
};
YAHOO.util.Cookie.removeSub = function(name, subName, options) {
   /// <summary> Removes a subcookie with a given name. Removing the last subcookiewon't remove the entire cookie unless options.removeIfEmpty is true. </summary>
   /// <returns type="String" />
 /// <param name="name" type="String"> The name of the cookie in which the subcookie exists.</param>
 /// <param name="subName" type="String"> The name of the subcookie to remove.</param>
 /// <param name="options" type="Object"> (Optional) An object containing one or morecookie options: path (a string), domain (a string), expires (a Date object),removeIfEmpty (true/false), and secure (true/false). This must be the samesettings as the original subcookie.</param>
};
YAHOO.util.Cookie._createCookieHashString = function(hash) {
   /// <summary> Formats a cookie value for an object containing multiple values. </summary>
   /// <private />
   /// <returns type="String" />
 /// <param name="hash" type="Object"> An object of key-value pairs to create a string for.</param>
};
YAHOO.util.Cookie.getSubs = function(name) {
   /// <summary> Returns an object containing name-value pairs stored in the cookie with the given name. </summary>
   /// <returns type="Object" />
 /// <param name="name" type="String"> The name of the cookie to retrieve.</param>
};
YAHOO.util.Cookie.getSub = function(name, subName, converter) {
   /// <summary> Returns the value of a subcookie. </summary>
   /// <returns type="Variant" />
 /// <param name="name" type="String"> The name of the cookie to retrieve.</param>
 /// <param name="subName" type="String"> The name of the subcookie to retrieve.</param>
 /// <param name="converter" type="Function"> (Optional) A function to run on the value before returningit. The function is not used if the cookie doesn't exist.</param>
};
YAHOO.util.Cookie._createCookieString = function(name, value, encodeValue, options) {
   /// <summary> Creates a cookie string that can be assigned into document.cookie. </summary>
   /// <private />
   /// <returns type="String" />
 /// <param name="name" type="String"> The name of the cookie.</param>
 /// <param name="value" type="String"> The value of the cookie.</param>
 /// <param name="encodeValue" type="Boolean"> True to encode the value, false to leave as-is.</param>
 /// <param name="options" type="Object"> (Optional) Options for the cookie.</param>
};
YAHOO.util.CustomEvent.prototype.subscribe = function(fn, obj) {
   /// <summary> Subscribes the caller to this event </summary>
 /// <param name="fn" type="Function">        The function to execute</param>
 /// <param name="obj" type="Object">       An object to be passed along when the event fires.overrideContext  If true, the obj passed in becomes the execution context of the listener. If an object, that object becomes the execution context.</param>
};
YAHOO.util.CustomEvent.prototype.fire = function(arguments) {
   /// <summary> Notifies the subscribers.  The callback functions will be executedfrom the context specified when the event was created, and with the following parameters:The type of eventAll of the arguments fire() was executed with as an arrayThe custom object (if any) that was passed into the subscribe() method </summary>
   /// <returns type="boolean" />
 /// <param name="arguments" type="Object*"> an arbitrary set of parameters to pass to the handler.</param>
};
YAHOO.util.CustomEvent.prototype.unsubscribeAll = function() {
   /// <summary> Removes all listeners </summary>
   /// <returns type="int" />
};
YAHOO.util.CustomEvent.prototype._delete = function() {
   /// <private />
};
YAHOO.util.CustomEvent.prototype.toString = function() {
};
YAHOO.util.CustomEvent.prototype.unsubscribe = function(fn, obj) {
   /// <summary> Unsubscribes subscribers. </summary>
   /// <returns type="boolean" />
 /// <param name="fn" type="Function">  The subscribed function to remove, if not suppliedall will be removed</param>
 /// <param name="obj" type="Object">  The custom object passed to subscribe.  This isoptional, but if supplied will be used todisambiguate multiple listeners that are the same(e.g., you subscribe many object using a functionthat lives on the prototype)</param>
};
YAHOO.util.DD.prototype.setDragElPos = function(iPageX, iPageY) {
   /// <summary> Sets the drag element to the location of the mousedown or click event, maintaining the cursor location relative to the location on the element that was clicked.  Override this if you want to place the element in a location other than where the cursor is. </summary>
 /// <param name="iPageX" type="int"> the X coordinate of the mousedown or drag event</param>
 /// <param name="iPageY" type="int"> the Y coordinate of the mousedown or drag event</param>
};
YAHOO.util.DD.prototype.alignElWithMouse = function(el, iPageX, iPageY) {
   /// <summary> Sets the element to the location of the mousedown or click event, maintaining the cursor location relative to the location on the element that was clicked.  Override this if you want to place the element in a location other than where the cursor is. </summary>
 /// <param name="el" type="HTMLElement"> the element to move</param>
 /// <param name="iPageX" type="int"> the X coordinate of the mousedown or drag event</param>
 /// <param name="iPageY" type="int"> the Y coordinate of the mousedown or drag event</param>
};
YAHOO.util.DD.prototype.autoOffset = function(iPageX, iPageY) {
   /// <summary> Sets the pointer offset to the distance between the linked element's top left corner and the location the element was clicked </summary>
 /// <param name="iPageX" type="int"> the X coordinate of the click</param>
 /// <param name="iPageY" type="int"> the Y coordinate of the click</param>
};
YAHOO.util.DD.prototype.autoScroll = function(x, y, h, w) {
   /// <summary> Auto-scroll the window if the dragged object has been moved beyond the visible window boundary. </summary>
   /// <private />
 /// <param name="x" type="int"> the drag element's x position</param>
 /// <param name="y" type="int"> the drag element's y position</param>
 /// <param name="h" type="int"> the height of the drag element</param>
 /// <param name="w" type="int"> the width of the drag element</param>
};
YAHOO.util.DD.prototype.setDelta = function(iDeltaX, iDeltaY) {
   /// <summary> Sets the pointer offset.  You can call this directly to force the offset to be in a particular location (e.g., pass in 0,0 to set it to the center of the object, as done in YAHOO.widget.Slider) </summary>
 /// <param name="iDeltaX" type="int"> the distance from the left</param>
 /// <param name="iDeltaY" type="int"> the distance from the top</param>
};
YAHOO.util.DD.prototype.cachePosition = function(iPageX, iPageY) {
   /// <summary> Saves the most recent position so that we can reset the constraints andtick marks on-demand.  We need to know this so that we can calculate thenumber of pixels the element is offset from its original position. </summary>
 /// <param name="iPageX" type=""> the current x position (optional, this just makes it so wedon't have to look it up again)</param>
 /// <param name="iPageY" type=""> the current y position (optional, this just makes it so wedon't have to look it up again)</param>
};
YAHOO.util.DDProxy.prototype.createFrame = function() {
   /// <summary> Creates the proxy element if it does not yet exist </summary>
};
YAHOO.util.DDProxy.prototype.initFrame = function() {
   /// <summary> Initialization for the drag frame element.  Must be called in theconstructor of all subclasses </summary>
};
YAHOO.util.DDProxy.prototype.showFrame = function(iPageX, iPageY) {
   /// <summary> Resizes the drag frame to the dimensions of the clicked object, positions it over the object, and finally displays it </summary>
   /// <private />
 /// <param name="iPageX" type="int"> X click position</param>
 /// <param name="iPageY" type="int"> Y click position</param>
};
YAHOO.util.DDProxy.prototype._resizeProxy = function() {
   /// <summary> The proxy is automatically resized to the dimensions of the linkedelement when a drag is initiated, unless resizeFrame is set to false </summary>
   /// <private />
};
YAHOO.util.DataSourceBase.prototype.flushCache = function() {
   /// <summary> Flushes cache. </summary>
};
YAHOO.util.DataSourceBase.prototype.clearInterval = function(nId) {
   /// <summary> Disables polling mechanism associated with the given interval ID. </summary>
 /// <param name="nId" type="Number">  Interval ID.</param>
};
YAHOO.util.DataSourceBase.prototype.parseArrayData = function(oRequest, oFullResponse) {
   /// <summary> Overridable method parses Array data into a response object. </summary>
   /// <returns type="Object" />
 /// <param name="oRequest" type="Object">  Request object.</param>
 /// <param name="oFullResponse" type="Object">  The full Array from the live database.</param>
};
YAHOO.util.DataSourceBase.prototype.sendRequest = function(oRequest, oCallback, oCaller) {
   /// <summary> First looks for cached response, then sends request to live data. Thefollowing arguments are passed to the callback function:oRequestThe same value that was passed in as the first argument to sendRequest.oParsedResponseAn object literal containing the following properties:tIdUnique transaction ID number.resultsSchema-parsed data results.errorTrue in cases of data error.cachedTrue when response is returned from DataSource cache. metaSchema-parsed meta data.oPayloadThe same value as was passed in as argument in the oCallback object literal. </summary>
   /// <returns type="Number" />
 /// <param name="oRequest" type="Object">  Request object.</param>
 /// <param name="oCallback" type="Object">  An object literal with the following properties:successThe function to call when the data is ready.failureThe function to call upon a response failure condition.scopeThe object to serve as the scope for the success and failure handlers.argumentArbitrary data that will be passed back to the success and failure handlers.</param>
 /// <param name="oCaller" type="Object">  (deprecated) Use oCallback.scope.</param>
};
YAHOO.util.DataSourceBase.issueCallback = function(callback, params, error, scope) {
   /// <summary> Executes a configured callback.  For object literal callbacks, the thirdparam determines whether to execute the success handler or failure handler. </summary>
 /// <param name="callback" type="Function|Object">  the callback to execute</param>
 /// <param name="params" type="Array">  params to be passed to the callback method</param>
 /// <param name="error" type="Boolean">  whether an error occurred</param>
 /// <param name="scope" type="Object">  the scope from which to execute the callback(deprecated - use an object literal callback)</param>
};
YAHOO.util.DataSourceBase.prototype.parseData = function(oRequest, oFullResponse) {
   /// <summary> Overridable method parses data of generic RESPONSE_TYPE into a response object. </summary>
   /// <returns type="Object} Parsed response object with the following properties:- results {Array} Array of parsed data results- meta {Object} Object literal of meta values- error {Boolean" />
 /// <param name="oRequest" type="Object">  Request object.</param>
 /// <param name="oFullResponse" type="Object">  The full Array from the live database.</param>
};
YAHOO.util.DataSourceBase.prototype.parseTextData = function(oRequest, oFullResponse) {
   /// <summary> Overridable method parses plain text data into a response object. </summary>
   /// <returns type="Object" />
 /// <param name="oRequest" type="Object">  Request object.</param>
 /// <param name="oFullResponse" type="Object">  The full text response from the live database.</param>
};
YAHOO.util.DataSourceBase.prototype.parseHTMLTableData = function(oRequest, oFullResponse) {
   /// <summary> Overridable method parses an HTML TABLE element reference into a response object.Data is parsed out of TR elements from all TBODY elements. </summary>
   /// <returns type="Object" />
 /// <param name="oRequest" type="Object">  Request object.</param>
 /// <param name="oFullResponse" type="Object">  The full HTML element reference from the live database.</param>
};
YAHOO.util.DataSourceBase.prototype.toString = function() {
   /// <summary> Public accessor to the unique name of the DataSource instance. </summary>
   /// <returns type="String" />
};
YAHOO.util.DataSourceBase.prototype.doBeforeCallback = function(oRequest, oFullResponse, oParsedResponse, oCallback) {
   /// <summary> Overridable method gives implementers access to the original full response andthe parsed response (parsed against the given schema) before the datais added to the cache (if applicable) and then sent back to callback function.This is your chance to access the raw response and/or populate the parsedresponse with any custom data. </summary>
   /// <returns type="Object" />
 /// <param name="oRequest" type="Object">  Request object.</param>
 /// <param name="oFullResponse" type="Object">  The full response from the live database.</param>
 /// <param name="oParsedResponse" type="Object">  The parsed response to return to calling object.</param>
 /// <param name="oCallback" type="Object">  The callback object.</param>
};
YAHOO.util.DataSourceBase.prototype.addToCache = function(oRequest, oResponse) {
   /// <summary> Adds a new item to the cache. If cache is full, evicts the stalest itembefore adding the new item. </summary>
 /// <param name="oRequest" type="Object">  Request object.</param>
 /// <param name="oResponse" type="Object">  Response object to cache.</param>
};
YAHOO.util.DataSourceBase.prototype.getCachedResponse = function(oRequest, oCallback, oCaller) {
   /// <summary> Overridable method passes request to cache and returns cached response if any,refreshing the hit in the cache as the newest item. Returns null if there isno cache hit. </summary>
   /// <returns type="Object" />
 /// <param name="oRequest" type="Object">  Request object.</param>
 /// <param name="oCallback" type="Object">  Callback object.</param>
 /// <param name="oCaller" type="Object">  (deprecated) Use callback object.</param>
};
YAHOO.util.DataSourceBase.prototype.setInterval = function(nMsec, oRequest, oCallback, oCaller) {
   /// <summary> Sets up a polling mechanism to send requests at set intervals and forwardresponses to given callback. </summary>
   /// <returns type="Number" />
 /// <param name="nMsec" type="Number">  Length of interval in milliseconds.</param>
 /// <param name="oRequest" type="Object">  Request object.</param>
 /// <param name="oCallback" type="Function">  Handler function to receive the response.</param>
 /// <param name="oCaller" type="Object">  (deprecated) Use oCallback.scope.</param>
};
YAHOO.util.DataSourceBase.prototype.parseXMLResult = function(result) {
   /// <summary> Overridable method parses XML data for one result into an object literal. </summary>
   /// <returns type="Object" />
 /// <param name="result" type="XML">  XML for one result.</param>
};
YAHOO.util.DataSourceBase.prototype.handleResponse = function(oRequest, oRawResponse, oCallback, oCaller, tId) {
   /// <summary> Receives raw data response and type converts to XML, JSON, etc as necessary.Forwards oFullResponse to appropriate parsing function to get turned intooParsedResponse. Calls doBeforeCallback() and adds oParsedResponse to the cache when appropriate before calling issueCallback().The oParsedResponse object literal has the following properties:tId {Number} Unique transaction IDresults {Array} Array of parsed data resultsmeta {Object} Object literal of meta values error {Boolean} (optional) True if there was an errorcached {Boolean} (optional) True if response was cached </summary>
 /// <param name="oRequest" type="Object">  Request object</param>
 /// <param name="oRawResponse" type="Object">  The raw response from the live database.</param>
 /// <param name="oCallback" type="Object">  Callback object literal.</param>
 /// <param name="oCaller" type="Object">  (deprecated) Use oCallback.scope.</param>
 /// <param name="tId" type="Number">  Transaction ID.</param>
};
YAHOO.util.DataSourceBase.prototype.parseXMLData = function(oRequest, oFullResponse) {
   /// <summary> Overridable method parses XML data into a response object. </summary>
   /// <returns type="Object" />
 /// <param name="oRequest" type="Object">  Request object.</param>
 /// <param name="oFullResponse" type="Object">  The full XML response from the live database.</param>
};
YAHOO.util.DataSourceBase.prototype.makeConnection = function(oRequest, oCallback, oCaller) {
   /// <summary> Overridable default method generates a unique transaction ID and passes the live data reference directly to the  handleResponse function. Thismethod should be implemented by subclasses to achieve more complex behavioror to access remote data. </summary>
   /// <returns type="Number" />
 /// <param name="oRequest" type="Object">  Request object.</param>
 /// <param name="oCallback" type="Object">  Callback object literal.</param>
 /// <param name="oCaller" type="Object">  (deprecated) Use oCallback.scope.</param>
};
YAHOO.util.DataSourceBaseparseDate = function(oData) {
   /// <summary> Converts data to type Date. </summary>
   /// <returns type="Date" />
 /// <param name="oData" type="Date | String | Number">  Data to convert.</param>
};
YAHOO.util.DataSourceBase.prototype.parseJSONData = function(oRequest, oFullResponse) {
   /// <summary> Overridable method parses JSON data into a response object. </summary>
   /// <returns type="Object" />
 /// <param name="oRequest" type="Object">  Request object.</param>
 /// <param name="oFullResponse" type="Object">  The full JSON from the live database.</param>
};
YAHOO.util.DataSourceBase.prototype.doBeforeParseData = function(oRequest, oFullResponse, oCallback) {
   /// <summary> Overridable method gives implementers access to the original full responsebefore the data gets parsed. Implementers should take care not to return anunparsable or otherwise invalid response. </summary>
   /// <returns type="Object" />
 /// <param name="oRequest" type="Object">  Request object.</param>
 /// <param name="oFullResponse" type="Object">  The full response from the live database.</param>
 /// <param name="oCallback" type="Object">  The callback object.</param>
};
YAHOO.util.DataSourceBaseparseString = function(oData) {
   /// <summary> Converts data to type String. </summary>
   /// <returns type="String" />
 /// <param name="oData" type="String | Number | Boolean | Date | Array | Object">  Data to parse.The special values null and undefined will return null.</param>
};
YAHOO.util.DataSourceBase._getLocationValue = function(field, context) {
   /// <summary> Get an XPath-specified value for a given field from an XML node or document. </summary>
   /// <private />
   /// <returns type="Object" />
 /// <param name="field" type="String | Object">  Field definition.</param>
 /// <param name="context" type="Object">  XML node or document to search within.</param>
};
YAHOO.util.DataSourceBaseparseNumber = function(oData) {
   /// <summary> Converts data to type Number. </summary>
   /// <returns type="Number" />
 /// <param name="oData" type="String | Number | Boolean">  Data to convert. Note, the followingvalues return as null: null, undefined, NaN, "".</param>
};
YAHOO.util.DataSourceBase.prototype.isCacheHit = function(oRequest, oCachedRequest) {
   /// <summary> Default overridable method matches given request to given cached request.Returns true if is a hit, returns false otherwise.  Implementers shouldoverride this method to customize the cache-matching algorithm. </summary>
   /// <returns type="Boolean" />
 /// <param name="oRequest" type="Object">  Request object.</param>
 /// <param name="oCachedRequest" type="Object">  Cached request object.</param>
};
YAHOO.util.DataSourceBase.prototype.clearAllIntervals = function() {
   /// <summary> Disables all known polling intervals. </summary>
};
YAHOO.util.Date.format = function(oDate, oConfig, sLocale) {
   /// <summary> Takes a native JavaScript Date and formats to string for display to user. </summary>
   /// <returns type="String" />
 /// <param name="oDate" type="Date">  Date.</param>
 /// <param name="oConfig" type="Object">  (Optional) Object literal of configuration values:format &lt;String&gt;Any strftime string is supported, such as "%I:%M:%S %p". strftime has several format specifiers defined by the Open group at http://www.opengroup.org/onlinepubs/007908799/xsh/strftime.html   PHP added a few of its own, defined at http://www.php.net/strftimeThis javascript implementation supports all the PHP specifiers and a few more.  The full list is below:%a abbreviated weekday name according to the current locale%A full weekday name according to the current locale%b abbreviated month name according to the current locale%B full month name according to the current locale%c preferred date and time representation for the current locale%C century number (the year divided by 100 and truncated to an integer, range 00 to 99)%d day of the month as a decimal number (range 01 to 31)%D same as %m/%d/%y%e day of the month as a decimal number, a single digit is preceded by a space (range ' 1' to '31')%F same as %Y-%m-%d (ISO 8601 date format)%g like %G, but without the century%G The 4-digit year corresponding to the ISO week number%h same as %b%H hour as a decimal number using a 24-hour clock (range 00 to 23)%I hour as a decimal number using a 12-hour clock (range 01 to 12)%j day of the year as a decimal number (range 001 to 366)%k hour as a decimal number using a 24-hour clock (range 0 to 23); single digits are preceded by a blank. (See also %H.)%l hour as a decimal number using a 12-hour clock (range 1 to 12); single digits are preceded by a blank. (See also %I.) %m month as a decimal number (range 01 to 12)%M minute as a decimal number%n newline character%p either `AM' or `PM' according to the given time value, or the corresponding strings for the current locale%P like %p, but lower case%r time in a.m. and p.m. notation equal to %I:%M:%S %p%R time in 24 hour notation equal to %H:%M%s number of seconds since the Epoch, ie, since 1970-01-01 00:00:00 UTC%S second as a decimal number%t tab character%T current time, equal to %H:%M:%S%u weekday as a decimal number [1,7], with 1 representing Monday%U week number of the current year as a decimal number, starting with thefirst Sunday as the first day of the first week%V The ISO 8601:1988 week number of the current year as a decimal number,range 01 to 53, where week 1 is the first week that has at least 4 daysin the current year, and with Monday as the first day of the week.%w day of the week as a decimal, Sunday being 0%W week number of the current year as a decimal number, starting with thefirst Monday as the first day of the first week%x preferred date representation for the current locale without the time%X preferred time representation for the current locale without the date%y year as a decimal number without a century (range 00 to 99)%Y year as a decimal number including the century%z numerical time zone representation%Z time zone name or abbreviation%% a literal `%' character</param>
 /// <param name="sLocale" type="String">  (Optional) The locale to use when displaying days of week,months of the year, and other locale specific strings.  The following locales arebuilt in:enEnglishen-USUS Englishen-GBBritish Englishen-AUAustralian English (identical to British English)More locales may be added by subclassing of YAHOO.util.DateLocale.See YAHOO.util.DateLocale for more information.</param>
};
YAHOO.util.DateAssert.datesAreEqual = function(expected, actual, message) {
   /// <summary> Asserts that a date's month, day, and year are equal to another date's. </summary>
 /// <param name="expected" type="Date"> The expected date.</param>
 /// <param name="actual" type="Date"> The actual date to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.DateAssert.timesAreEqual = function(expected, actual, message) {
   /// <summary> Asserts that a date's hour, minutes, and seconds are equal to another date's. </summary>
 /// <param name="expected" type="Date"> The expected date.</param>
 /// <param name="actual" type="Date"> The actual date to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Dom.getElementsBy = function(method, tag, root, apply, o, overrides) {
   /// <summary> Returns an array of HTMLElements that pass the test applied by supplied boolean method.For optimized performance, include a tag and/or root node when possible.Note: This method operates against a live collection, so modifying the collection in the callback (removing/appending nodes, etc.) will haveside effects.  Instead you should iterate the returned nodes array,as you would with the native "getElementsByTagName" method. </summary>
   /// <returns type="Array" />
 /// <param name="method" type="Function"> - A boolean method for testing elements which receives the element as its only argument.</param>
 /// <param name="tag" type="String"> (optional) The tag name of the elements being collected</param>
 /// <param name="root" type="String | HTMLElement"> (optional) The HTMLElement or an ID to use as the starting point</param>
 /// <param name="apply" type="Function"> (optional) A function to apply to each element when found</param>
 /// <param name="o" type="Any"> (optional) An optional arg that is passed to the supplied method</param>
 /// <param name="overrides" type="Boolean"> (optional) Whether or not to override the scope of "method" with "o"</param>
};
YAHOO.util.Dom.getAttribute = function(el, attr) {
   /// <summary> Provides a normalized attribute interface. </summary>
   /// <returns type="String" />
 /// <param name="el" type="String | HTMLElement"> The target element for the attribute.</param>
 /// <param name="attr" type="String"> The attribute to get.</param>
};
YAHOO.util.Dom.generateId = function(el, prefix) {
   /// <summary> Returns an ID and applies it to the element "el", if provided. </summary>
   /// <returns type="String | Array" />
 /// <param name="el" type="String | HTMLElement | Array"> (optional) An optional element array of elements to add an ID to (no ID is added if one is already present).</param>
 /// <param name="prefix" type="String"> (optional) an optional prefix to use (defaults to "yui-gen").</param>
};
YAHOO.util.Dom.getDocumentWidth = function() {
   /// <summary> Returns the width of the document. </summary>
   /// <returns type="Int" />
};
YAHOO.util.Dom.setStyle = function(el, property, val) {
   /// <summary> Wrapper for setting style properties of HTMLElements.  Normalizes "opacity" across modern browsers. </summary>
 /// <param name="el" type="String | HTMLElement | Array"> Accepts a string to use as an ID, an actual DOM reference, or an Array of IDs and/or HTMLElements.</param>
 /// <param name="property" type="String"> The style property to be set.</param>
 /// <param name="val" type="String"> The value to apply to the given property.</param>
};
YAHOO.util.Dom.getX = function(el) {
   /// <summary> Gets the current X position of an element based on page coordinates.  The element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false). </summary>
   /// <returns type="Number | Array" />
 /// <param name="el" type="String | HTMLElement | Array"> Accepts a string to use as an ID, an actual DOM reference, or an Array of IDs and/or HTMLElements</param>
};
YAHOO.util.Dom.getY = function(el) {
   /// <summary> Gets the current Y position of an element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false). </summary>
   /// <returns type="Number | Array" />
 /// <param name="el" type="String | HTMLElement | Array"> Accepts a string to use as an ID, an actual DOM reference, or an Array of IDs and/or HTMLElements</param>
};
YAHOO.util.Dom.getChildren = function(node) {
   /// <summary> Returns an array of HTMLElement childNodes. </summary>
   /// <returns type="Array" />
 /// <param name="node" type="String | HTMLElement"> The HTMLElement or an ID to use as the starting point</param>
};
YAHOO.util.Dom.getFirstChild = function(node) {
   /// <summary> Returns the first HTMLElement child. </summary>
   /// <returns type="Object" />
 /// <param name="node" type="String | HTMLElement"> The HTMLElement or an ID to use as the starting point</param>
};
YAHOO.util.Dom.getClientRegion = function() {
   /// <summary> Creates a Region based on the viewport relative to the document. </summary>
   /// <returns type="Region" />
};
YAHOO.util.Dom.getLastChildBy = function(node, method) {
   /// <summary> Returns the last HTMLElement child that passes the test method. </summary>
   /// <returns type="Object" />
 /// <param name="node" type="HTMLElement"> The HTMLElement to use as the starting point</param>
 /// <param name="method" type="Function"> A boolean function used to test childrenthat receives the node being tested as its only argument</param>
};
YAHOO.util.Dom.getAncestorBy = function(node, method) {
   /// <summary> Returns the nearest ancestor that passes the test applied by supplied boolean method.For performance reasons, IDs are not accepted and argument validation omitted. </summary>
   /// <returns type="Object" />
 /// <param name="node" type="HTMLElement"> The HTMLElement to use as the starting point</param>
 /// <param name="method" type="Function"> - A boolean method for testing elements which receives the element as its only argument.</param>
};
YAHOO.util.Dom.getViewportWidth = function() {
   /// <summary> Returns the current width of the viewport. </summary>
   /// <returns type="Int" />
};
YAHOO.util.Dom.getElementBy = function(method, tag, root) {
   /// <summary> Returns the first HTMLElement that passes the test applied by the supplied boolean method. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="method" type="Function"> - A boolean method for testing elements which receives the element as its only argument.</param>
 /// <param name="tag" type="String"> (optional) The tag name of the elements being collected</param>
 /// <param name="root" type="String | HTMLElement"> (optional) The HTMLElement or an ID to use as the starting point</param>
};
YAHOO.util.Dom.getPreviousSiblingBy = function(node, method) {
   /// <summary> Returns the previous sibling that is an HTMLElement. For performance reasons, IDs are not accepted and argument validation omitted.Returns the nearest HTMLElement sibling if no method provided. </summary>
   /// <returns type="Object" />
 /// <param name="node" type="HTMLElement"> The HTMLElement to use as the starting point</param>
 /// <param name="method" type="Function"> A boolean function used to test siblingsthat receives the sibling node being tested as its only argument</param>
};
YAHOO.util.Dom.getElementsByClassName = function(className, tag, root, apply, o, overrides) {
   /// <summary> Returns an array of HTMLElements with the given class.For optimized performance, include a tag and/or root node when possible.Note: This method operates against a live collection, so modifying the collection in the callback (removing/appending nodes, etc.) will haveside effects.  Instead you should iterate the returned nodes array,as you would with the native "getElementsByTagName" method. </summary>
   /// <returns type="Array" />
 /// <param name="className" type="String"> The class name to match against</param>
 /// <param name="tag" type="String"> (optional) The tag name of the elements being collected</param>
 /// <param name="root" type="String | HTMLElement"> (optional) The HTMLElement or an ID to use as the starting point.This element is not included in the className scan.</param>
 /// <param name="apply" type="Function"> (optional) A function to apply to each element when found</param>
 /// <param name="o" type="Any"> (optional) An optional arg that is passed to the supplied method</param>
 /// <param name="overrides" type="Boolean"> (optional) Whether or not to override the scope of "method" with "o"</param>
};
YAHOO.util.Dom.replaceClass = function(el, oldClassName, newClassName) {
   /// <summary> Replace a class with another class for a given element or collection of elements.If no oldClassName is present, the newClassName is simply added. </summary>
   /// <returns type="Boolean | Array" />
 /// <param name="el" type="String | HTMLElement | Array"> The element or collection to remove the class from</param>
 /// <param name="oldClassName" type="String"> the class name to be replaced</param>
 /// <param name="newClassName" type="String"> the class name that will be replacing the old class name</param>
};
YAHOO.util.Dom.getNextSibling = function(node) {
   /// <summary> Returns the next sibling that is an HTMLElement </summary>
   /// <returns type="Object" />
 /// <param name="node" type="String | HTMLElement"> The HTMLElement or an ID to use as the starting point</param>
};
YAHOO.util.Dom.getDocumentHeight = function() {
   /// <summary> Returns the height of the document. </summary>
   /// <returns type="Int" />
};
YAHOO.util.Dom.getLastChild = function(node) {
   /// <summary> Returns the last HTMLElement child. </summary>
   /// <returns type="Object" />
 /// <param name="node" type="String | HTMLElement"> The HTMLElement or an ID to use as the starting point</param>
};
YAHOO.util.Dom.getClientHeight = function() {
   /// <summary> Returns the height of the client (viewport). </summary>
   /// <returns type="Int" />
};
YAHOO.util.Dom.inDocument = function(el, doc) {
   /// <summary> Determines whether an HTMLElement is present in the current document. </summary>
   /// <returns type="Boolean" />
 /// <param name="el" type="String | HTMLElement"> The element to search for</param>
 /// <param name="doc" type="Object"> An optional document to search, defaults to element's owner document</param>
};
YAHOO.util.Dom.insertAfter = function(newNode, referenceNode) {
   /// <summary> Inserts the new node as the next sibling of the reference node </summary>
   /// <returns type="HTMLElement" />
 /// <param name="newNode" type="String | HTMLElement"> The node to be inserted</param>
 /// <param name="referenceNode" type="String | HTMLElement"> The node to insert the new node after</param>
};
YAHOO.util.Dom.getViewportHeight = function() {
   /// <summary> Returns the current height of the viewport. </summary>
   /// <returns type="Int" />
};
YAHOO.util.Dom.addClass = function(el, className) {
   /// <summary> Adds a class name to a given element or collection of elements. </summary>
   /// <returns type="Boolean | Array" />
 /// <param name="el" type="String | HTMLElement | Array"> The element or collection to add the class to</param>
 /// <param name="className" type="String"> the class name to add to the class attribute</param>
};
YAHOO.util.Dom.removeClass = function(el, className) {
   /// <summary> Removes a class name from a given element or collection of elements. </summary>
   /// <returns type="Boolean | Array" />
 /// <param name="el" type="String | HTMLElement | Array"> The element or collection to remove the class from</param>
 /// <param name="className" type="String"> the class name to remove from the class attribute</param>
};
YAHOO.util.Dom.insertBefore = function(newNode, referenceNode) {
   /// <summary> Inserts the new node as the previous sibling of the reference node </summary>
   /// <returns type="HTMLElement" />
 /// <param name="newNode" type="String | HTMLElement"> The node to be inserted</param>
 /// <param name="referenceNode" type="String | HTMLElement"> The node to insert the new node before</param>
};
YAHOO.util.Dom["get"] = function(el) {
   /// <summary> Returns an HTMLElement reference. </summary>
   /// <returns type="HTMLElement | Array" />
 /// <param name="el" type="String | HTMLElement |Array"> Accepts a string to use as an ID for getting a DOM reference, an actual DOM reference, or an Array of IDs and/or HTMLElements.</param>
};
YAHOO.util.Dom.getAncestorByClassName = function(node, className) {
   /// <summary> Returns the nearest ancestor with the given className. </summary>
   /// <returns type="Object" />
 /// <param name="node" type="String | HTMLElement"> The HTMLElement or an ID to use as the starting point</param>
 /// <param name="className" type="String"></param>
};
YAHOO.util.Dom.getStyle = function(el, property) {
   /// <summary> Normalizes currentStyle and ComputedStyle. </summary>
   /// <returns type="String | Array" />
 /// <param name="el" type="String | HTMLElement |Array"> Accepts a string to use as an ID, an actual DOM reference, or an Array of IDs and/or HTMLElements.</param>
 /// <param name="property" type="String"> The style property whose value is returned.</param>
};
YAHOO.util.Dom.setXY = function(el, pos, noRetry) {
   /// <summary> Set the position of an html element in page coordinates, regardless of how the element is positioned.The element(s) must be part of the DOM tree to have page coordinates (display:none or elements not appended return false). </summary>
 /// <param name="el" type="String | HTMLElement | Array"> Accepts a string to use as an ID, an actual DOM reference, or an Array of IDs and/or HTMLElements</param>
 /// <param name="pos" type="Array"> Contains X & Y values for new position (coordinates are page-based)</param>
 /// <param name="noRetry" type="Boolean"> By default we try and set the position a second time if the first fails</param>
};
YAHOO.util.Dom.getPreviousSibling = function(node) {
   /// <summary> Returns the previous sibling that is an HTMLElement </summary>
   /// <returns type="Object" />
 /// <param name="node" type="String | HTMLElement"> The HTMLElement or an ID to use as the starting point</param>
};
YAHOO.util.Dom.getDocumentScrollTop = function(document) {
   /// <summary> Returns the top scroll value of the document </summary>
   /// <returns type="Int" />
 /// <param name="document" type="HTMLDocument"> (optional) The document to get the scroll value of</param>
};
YAHOO.util.Dom.setX = function(el, x) {
   /// <summary> Set the X position of an html element in page coordinates, regardless of how the element is positioned.The element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false). </summary>
 /// <param name="el" type="String | HTMLElement | Array"> Accepts a string to use as an ID, an actual DOM reference, or an Array of IDs and/or HTMLElements.</param>
 /// <param name="x" type="Int"> The value to use as the X coordinate for the element(s).</param>
};
YAHOO.util.Dom.setY = function(el, x) {
   /// <summary> Set the Y position of an html element in page coordinates, regardless of how the element is positioned.The element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false). </summary>
 /// <param name="el" type="String | HTMLElement | Array"> Accepts a string to use as an ID, an actual DOM reference, or an Array of IDs and/or HTMLElements.</param>
 /// <param name="x" type="Int"> To use as the Y coordinate for the element(s).</param>
};
YAHOO.util.Dom.getXY = function(el) {
   /// <summary> Gets the current position of an element based on page coordinates. Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false). </summary>
   /// <returns type="Array" />
 /// <param name="el" type="String | HTMLElement | Array"> Accepts a string to use as an ID, an actual DOMreference, or an Array of IDs and/or HTMLElements</param>
};
YAHOO.util.Dom.getClientWidth = function() {
   /// <summary> Returns the width of the client (viewport). </summary>
   /// <returns type="Int" />
};
YAHOO.util.Dom.getFirstChildBy = function(node, method) {
   /// <summary> Returns the first HTMLElement child that passes the test method. </summary>
   /// <returns type="Object" />
 /// <param name="node" type="HTMLElement"> The HTMLElement to use as the starting point</param>
 /// <param name="method" type="Function"> A boolean function used to test childrenthat receives the node being tested as its only argument</param>
};
YAHOO.util.Dom.getRegion = function(el) {
   /// <summary> Returns the region position of the given element.The element must be part of the DOM tree to have a region (display:none or elements not appended return false). </summary>
   /// <returns type="Region | Array" />
 /// <param name="el" type="String | HTMLElement | Array"> Accepts a string to use as an ID, an actual DOM reference, or an Array of IDs and/or HTMLElements.</param>
};
YAHOO.util.Dom.setAttribute = function(el, attr, val) {
   /// <summary> Provides a normalized attribute interface. </summary>
 /// <param name="el" type="String | HTMLElement"> The target element for the attribute.</param>
 /// <param name="attr" type="String"> The attribute to set.</param>
 /// <param name="val" type="String"> The value of the attribute.</param>
};
YAHOO.util.Dom.batch = function(el, method, o, overrides) {
   /// <summary> Runs the supplied method against each item in the Collection/Array.The method is called with the element(s) as the first arg, and the optional param as the second ( method(el, o) ). </summary>
   /// <returns type="Any | Array" />
 /// <param name="el" type="String | HTMLElement | Array"> (optional) An element or array of elements to apply the method to</param>
 /// <param name="method" type="Function"> The method to apply to the element(s)</param>
 /// <param name="o" type="Any"> (optional) An optional arg that is passed to the supplied method</param>
 /// <param name="overrides" type="Boolean"> (optional) Whether or not to override the scope of "method" with "o"</param>
};
YAHOO.util.Dom.getChildrenBy = function(node, method) {
   /// <summary> Returns an array of HTMLElement childNodes that pass the test method. </summary>
   /// <returns type="Array" />
 /// <param name="node" type="HTMLElement"> The HTMLElement to start from</param>
 /// <param name="method" type="Function"> A boolean function used to test childrenthat receives the node being tested as its only argument</param>
};
YAHOO.util.Dom.getNextSiblingBy = function(node, method) {
   /// <summary> Returns the next HTMLElement sibling that passes the boolean method. For performance reasons, IDs are not accepted and argument validation omitted.Returns the nearest HTMLElement sibling if no method provided. </summary>
   /// <returns type="Object" />
 /// <param name="node" type="HTMLElement"> The HTMLElement to use as the starting point</param>
 /// <param name="method" type="Function"> A boolean function used to test siblingsthat receives the sibling node being tested as its only argument</param>
};
YAHOO.util.Dom.getDocumentScrollLeft = function(document) {
   /// <summary> Returns the left scroll value of the document </summary>
   /// <returns type="Int" />
 /// <param name="document" type="HTMLDocument"> (optional) The document to get the scroll value of</param>
};
YAHOO.util.Dom.getAncestorByTagName = function(node, tagName) {
   /// <summary> Returns the nearest ancestor with the given tagName. </summary>
   /// <returns type="Object" />
 /// <param name="node" type="String | HTMLElement"> The HTMLElement or an ID to use as the starting point</param>
 /// <param name="tagName" type="String"></param>
};
YAHOO.util.Dom.hasClass = function(el, className) {
   /// <summary> Determines whether an HTMLElement has the given className. </summary>
   /// <returns type="Boolean | Array" />
 /// <param name="el" type="String | HTMLElement | Array"> The element or collection to test</param>
 /// <param name="className" type="String"> the class name to search for</param>
};
YAHOO.util.Dom.isAncestor = function(haystack, needle) {
   /// <summary> Determines whether an HTMLElement is an ancestor of another HTML element in the DOM hierarchy. </summary>
   /// <returns type="Boolean" />
 /// <param name="haystack" type="String | HTMLElement"> The possible ancestor</param>
 /// <param name="needle" type="String | HTMLElement"> The possible descendent</param>
};
YAHOO.util.Dom.getElementsBy = function(method, tag, root, apply, o, overrides) {
   /// <summary> Returns an array of HTMLElements that pass the test applied by supplied boolean method.For optimized performance, include a tag and/or root node when possible.Note: This method operates against a live collection, so modifying the collection in the callback (removing/appending nodes, etc.) will haveside effects.  Instead you should iterate the returned nodes array,as you would with the native "getElementsByTagName" method. </summary>
   /// <returns type="Array" />
 /// <param name="method" type="Function"> - A boolean method for testing elements which receives the element as its only argument.</param>
 /// <param name="tag" type="String"> (optional) The tag name of the elements being collected</param>
 /// <param name="root" type="String | HTMLElement"> (optional) The HTMLElement or an ID to use as the starting point</param>
 /// <param name="apply" type="Function"> (optional) A function to apply to each element when found</param>
 /// <param name="o" type="Any"> (optional) An optional arg that is passed to the supplied method</param>
 /// <param name="overrides" type="Boolean"> (optional) Whether or not to override the scope of "method" with "o"</param>
};
YAHOO.util.Dom.getAttribute = function(el, attr) {
   /// <summary> Provides a normalized attribute interface. </summary>
   /// <returns type="String" />
 /// <param name="el" type="String | HTMLElement"> The target element for the attribute.</param>
 /// <param name="attr" type="String"> The attribute to get.</param>
};
YAHOO.util.Dom.generateId = function(el, prefix) {
   /// <summary> Returns an ID and applies it to the element "el", if provided. </summary>
   /// <returns type="String | Array" />
 /// <param name="el" type="String | HTMLElement | Array"> (optional) An optional element array of elements to add an ID to (no ID is added if one is already present).</param>
 /// <param name="prefix" type="String"> (optional) an optional prefix to use (defaults to "yui-gen").</param>
};
YAHOO.util.Dom.getDocumentWidth = function() {
   /// <summary> Returns the width of the document. </summary>
   /// <returns type="Int" />
};
YAHOO.util.Dom.setStyle = function(el, property, val) {
   /// <summary> Wrapper for setting style properties of HTMLElements.  Normalizes "opacity" across modern browsers. </summary>
 /// <param name="el" type="String | HTMLElement | Array"> Accepts a string to use as an ID, an actual DOM reference, or an Array of IDs and/or HTMLElements.</param>
 /// <param name="property" type="String"> The style property to be set.</param>
 /// <param name="val" type="String"> The value to apply to the given property.</param>
};
YAHOO.util.Dom.getX = function(el) {
   /// <summary> Gets the current X position of an element based on page coordinates.  The element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false). </summary>
   /// <returns type="Number | Array" />
 /// <param name="el" type="String | HTMLElement | Array"> Accepts a string to use as an ID, an actual DOM reference, or an Array of IDs and/or HTMLElements</param>
};
YAHOO.util.Dom.getY = function(el) {
   /// <summary> Gets the current Y position of an element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false). </summary>
   /// <returns type="Number | Array" />
 /// <param name="el" type="String | HTMLElement | Array"> Accepts a string to use as an ID, an actual DOM reference, or an Array of IDs and/or HTMLElements</param>
};
YAHOO.util.Dom.getChildren = function(node) {
   /// <summary> Returns an array of HTMLElement childNodes. </summary>
   /// <returns type="Array" />
 /// <param name="node" type="String | HTMLElement"> The HTMLElement or an ID to use as the starting point</param>
};
YAHOO.util.Dom.getFirstChild = function(node) {
   /// <summary> Returns the first HTMLElement child. </summary>
   /// <returns type="Object" />
 /// <param name="node" type="String | HTMLElement"> The HTMLElement or an ID to use as the starting point</param>
};
YAHOO.util.Dom.getClientRegion = function() {
   /// <summary> Creates a Region based on the viewport relative to the document. </summary>
   /// <returns type="Region" />
};
YAHOO.util.Dom.getLastChildBy = function(node, method) {
   /// <summary> Returns the last HTMLElement child that passes the test method. </summary>
   /// <returns type="Object" />
 /// <param name="node" type="HTMLElement"> The HTMLElement to use as the starting point</param>
 /// <param name="method" type="Function"> A boolean function used to test childrenthat receives the node being tested as its only argument</param>
};
YAHOO.util.Dom.getAncestorBy = function(node, method) {
   /// <summary> Returns the nearest ancestor that passes the test applied by supplied boolean method.For performance reasons, IDs are not accepted and argument validation omitted. </summary>
   /// <returns type="Object" />
 /// <param name="node" type="HTMLElement"> The HTMLElement to use as the starting point</param>
 /// <param name="method" type="Function"> - A boolean method for testing elements which receives the element as its only argument.</param>
};
YAHOO.util.Dom.getViewportWidth = function() {
   /// <summary> Returns the current width of the viewport. </summary>
   /// <returns type="Int" />
};
YAHOO.util.Dom.getElementBy = function(method, tag, root) {
   /// <summary> Returns the first HTMLElement that passes the test applied by the supplied boolean method. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="method" type="Function"> - A boolean method for testing elements which receives the element as its only argument.</param>
 /// <param name="tag" type="String"> (optional) The tag name of the elements being collected</param>
 /// <param name="root" type="String | HTMLElement"> (optional) The HTMLElement or an ID to use as the starting point</param>
};
YAHOO.util.Dom.getPreviousSiblingBy = function(node, method) {
   /// <summary> Returns the previous sibling that is an HTMLElement. For performance reasons, IDs are not accepted and argument validation omitted.Returns the nearest HTMLElement sibling if no method provided. </summary>
   /// <returns type="Object" />
 /// <param name="node" type="HTMLElement"> The HTMLElement to use as the starting point</param>
 /// <param name="method" type="Function"> A boolean function used to test siblingsthat receives the sibling node being tested as its only argument</param>
};
YAHOO.util.Dom.getElementsByClassName = function(className, tag, root, apply, o, overrides) {
   /// <summary> Returns an array of HTMLElements with the given class.For optimized performance, include a tag and/or root node when possible.Note: This method operates against a live collection, so modifying the collection in the callback (removing/appending nodes, etc.) will haveside effects.  Instead you should iterate the returned nodes array,as you would with the native "getElementsByTagName" method. </summary>
   /// <returns type="Array" />
 /// <param name="className" type="String"> The class name to match against</param>
 /// <param name="tag" type="String"> (optional) The tag name of the elements being collected</param>
 /// <param name="root" type="String | HTMLElement"> (optional) The HTMLElement or an ID to use as the starting point.This element is not included in the className scan.</param>
 /// <param name="apply" type="Function"> (optional) A function to apply to each element when found</param>
 /// <param name="o" type="Any"> (optional) An optional arg that is passed to the supplied method</param>
 /// <param name="overrides" type="Boolean"> (optional) Whether or not to override the scope of "method" with "o"</param>
};
YAHOO.util.Dom.replaceClass = function(el, oldClassName, newClassName) {
   /// <summary> Replace a class with another class for a given element or collection of elements.If no oldClassName is present, the newClassName is simply added. </summary>
   /// <returns type="Boolean | Array" />
 /// <param name="el" type="String | HTMLElement | Array"> The element or collection to remove the class from</param>
 /// <param name="oldClassName" type="String"> the class name to be replaced</param>
 /// <param name="newClassName" type="String"> the class name that will be replacing the old class name</param>
};
YAHOO.util.Dom.getNextSibling = function(node) {
   /// <summary> Returns the next sibling that is an HTMLElement </summary>
   /// <returns type="Object" />
 /// <param name="node" type="String | HTMLElement"> The HTMLElement or an ID to use as the starting point</param>
};
YAHOO.util.Dom.getDocumentHeight = function() {
   /// <summary> Returns the height of the document. </summary>
   /// <returns type="Int" />
};
YAHOO.util.Dom.getLastChild = function(node) {
   /// <summary> Returns the last HTMLElement child. </summary>
   /// <returns type="Object" />
 /// <param name="node" type="String | HTMLElement"> The HTMLElement or an ID to use as the starting point</param>
};
YAHOO.util.Dom.getClientHeight = function() {
   /// <summary> Returns the height of the client (viewport). </summary>
   /// <returns type="Int" />
};
YAHOO.util.Dom.inDocument = function(el, doc) {
   /// <summary> Determines whether an HTMLElement is present in the current document. </summary>
   /// <returns type="Boolean" />
 /// <param name="el" type="String | HTMLElement"> The element to search for</param>
 /// <param name="doc" type="Object"> An optional document to search, defaults to element's owner document</param>
};
YAHOO.util.Dom.insertAfter = function(newNode, referenceNode) {
   /// <summary> Inserts the new node as the next sibling of the reference node </summary>
   /// <returns type="HTMLElement" />
 /// <param name="newNode" type="String | HTMLElement"> The node to be inserted</param>
 /// <param name="referenceNode" type="String | HTMLElement"> The node to insert the new node after</param>
};
YAHOO.util.Dom.getViewportHeight = function() {
   /// <summary> Returns the current height of the viewport. </summary>
   /// <returns type="Int" />
};
YAHOO.util.Dom.addClass = function(el, className) {
   /// <summary> Adds a class name to a given element or collection of elements. </summary>
   /// <returns type="Boolean | Array" />
 /// <param name="el" type="String | HTMLElement | Array"> The element or collection to add the class to</param>
 /// <param name="className" type="String"> the class name to add to the class attribute</param>
};
YAHOO.util.Dom.removeClass = function(el, className) {
   /// <summary> Removes a class name from a given element or collection of elements. </summary>
   /// <returns type="Boolean | Array" />
 /// <param name="el" type="String | HTMLElement | Array"> The element or collection to remove the class from</param>
 /// <param name="className" type="String"> the class name to remove from the class attribute</param>
};
YAHOO.util.Dom.insertBefore = function(newNode, referenceNode) {
   /// <summary> Inserts the new node as the previous sibling of the reference node </summary>
   /// <returns type="HTMLElement" />
 /// <param name="newNode" type="String | HTMLElement"> The node to be inserted</param>
 /// <param name="referenceNode" type="String | HTMLElement"> The node to insert the new node before</param>
};
YAHOO.util.Dom["get"] = function(el) {
   /// <summary> Returns an HTMLElement reference. </summary>
   /// <returns type="HTMLElement | Array" />
 /// <param name="el" type="String | HTMLElement |Array"> Accepts a string to use as an ID for getting a DOM reference, an actual DOM reference, or an Array of IDs and/or HTMLElements.</param>
};
YAHOO.util.Dom.getAncestorByClassName = function(node, className) {
   /// <summary> Returns the nearest ancestor with the given className. </summary>
   /// <returns type="Object" />
 /// <param name="node" type="String | HTMLElement"> The HTMLElement or an ID to use as the starting point</param>
 /// <param name="className" type="String"></param>
};
YAHOO.util.Dom.getStyle = function(el, property) {
   /// <summary> Normalizes currentStyle and ComputedStyle. </summary>
   /// <returns type="String | Array" />
 /// <param name="el" type="String | HTMLElement |Array"> Accepts a string to use as an ID, an actual DOM reference, or an Array of IDs and/or HTMLElements.</param>
 /// <param name="property" type="String"> The style property whose value is returned.</param>
};
YAHOO.util.Dom.setXY = function(el, pos, noRetry) {
   /// <summary> Set the position of an html element in page coordinates, regardless of how the element is positioned.The element(s) must be part of the DOM tree to have page coordinates (display:none or elements not appended return false). </summary>
 /// <param name="el" type="String | HTMLElement | Array"> Accepts a string to use as an ID, an actual DOM reference, or an Array of IDs and/or HTMLElements</param>
 /// <param name="pos" type="Array"> Contains X & Y values for new position (coordinates are page-based)</param>
 /// <param name="noRetry" type="Boolean"> By default we try and set the position a second time if the first fails</param>
};
YAHOO.util.Dom.getPreviousSibling = function(node) {
   /// <summary> Returns the previous sibling that is an HTMLElement </summary>
   /// <returns type="Object" />
 /// <param name="node" type="String | HTMLElement"> The HTMLElement or an ID to use as the starting point</param>
};
YAHOO.util.Dom.getDocumentScrollTop = function(document) {
   /// <summary> Returns the top scroll value of the document </summary>
   /// <returns type="Int" />
 /// <param name="document" type="HTMLDocument"> (optional) The document to get the scroll value of</param>
};
YAHOO.util.Dom.setX = function(el, x) {
   /// <summary> Set the X position of an html element in page coordinates, regardless of how the element is positioned.The element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false). </summary>
 /// <param name="el" type="String | HTMLElement | Array"> Accepts a string to use as an ID, an actual DOM reference, or an Array of IDs and/or HTMLElements.</param>
 /// <param name="x" type="Int"> The value to use as the X coordinate for the element(s).</param>
};
YAHOO.util.Dom.setY = function(el, x) {
   /// <summary> Set the Y position of an html element in page coordinates, regardless of how the element is positioned.The element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false). </summary>
 /// <param name="el" type="String | HTMLElement | Array"> Accepts a string to use as an ID, an actual DOM reference, or an Array of IDs and/or HTMLElements.</param>
 /// <param name="x" type="Int"> To use as the Y coordinate for the element(s).</param>
};
YAHOO.util.Dom.getXY = function(el) {
   /// <summary> Gets the current position of an element based on page coordinates. Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false). </summary>
   /// <returns type="Array" />
 /// <param name="el" type="String | HTMLElement | Array"> Accepts a string to use as an ID, an actual DOMreference, or an Array of IDs and/or HTMLElements</param>
};
YAHOO.util.Dom.getClientWidth = function() {
   /// <summary> Returns the width of the client (viewport). </summary>
   /// <returns type="Int" />
};
YAHOO.util.Dom.getFirstChildBy = function(node, method) {
   /// <summary> Returns the first HTMLElement child that passes the test method. </summary>
   /// <returns type="Object" />
 /// <param name="node" type="HTMLElement"> The HTMLElement to use as the starting point</param>
 /// <param name="method" type="Function"> A boolean function used to test childrenthat receives the node being tested as its only argument</param>
};
YAHOO.util.Dom.getRegion = function(el) {
   /// <summary> Returns the region position of the given element.The element must be part of the DOM tree to have a region (display:none or elements not appended return false). </summary>
   /// <returns type="Region | Array" />
 /// <param name="el" type="String | HTMLElement | Array"> Accepts a string to use as an ID, an actual DOM reference, or an Array of IDs and/or HTMLElements.</param>
};
YAHOO.util.Dom.setAttribute = function(el, attr, val) {
   /// <summary> Provides a normalized attribute interface. </summary>
 /// <param name="el" type="String | HTMLElement"> The target element for the attribute.</param>
 /// <param name="attr" type="String"> The attribute to set.</param>
 /// <param name="val" type="String"> The value of the attribute.</param>
};
YAHOO.util.Dom.batch = function(el, method, o, overrides) {
   /// <summary> Runs the supplied method against each item in the Collection/Array.The method is called with the element(s) as the first arg, and the optional param as the second ( method(el, o) ). </summary>
   /// <returns type="Any | Array" />
 /// <param name="el" type="String | HTMLElement | Array"> (optional) An element or array of elements to apply the method to</param>
 /// <param name="method" type="Function"> The method to apply to the element(s)</param>
 /// <param name="o" type="Any"> (optional) An optional arg that is passed to the supplied method</param>
 /// <param name="overrides" type="Boolean"> (optional) Whether or not to override the scope of "method" with "o"</param>
};
YAHOO.util.Dom.getChildrenBy = function(node, method) {
   /// <summary> Returns an array of HTMLElement childNodes that pass the test method. </summary>
   /// <returns type="Array" />
 /// <param name="node" type="HTMLElement"> The HTMLElement to start from</param>
 /// <param name="method" type="Function"> A boolean function used to test childrenthat receives the node being tested as its only argument</param>
};
YAHOO.util.Dom.getNextSiblingBy = function(node, method) {
   /// <summary> Returns the next HTMLElement sibling that passes the boolean method. For performance reasons, IDs are not accepted and argument validation omitted.Returns the nearest HTMLElement sibling if no method provided. </summary>
   /// <returns type="Object" />
 /// <param name="node" type="HTMLElement"> The HTMLElement to use as the starting point</param>
 /// <param name="method" type="Function"> A boolean function used to test siblingsthat receives the sibling node being tested as its only argument</param>
};
YAHOO.util.Dom.getDocumentScrollLeft = function(document) {
   /// <summary> Returns the left scroll value of the document </summary>
   /// <returns type="Int" />
 /// <param name="document" type="HTMLDocument"> (optional) The document to get the scroll value of</param>
};
YAHOO.util.Dom.getAncestorByTagName = function(node, tagName) {
   /// <summary> Returns the nearest ancestor with the given tagName. </summary>
   /// <returns type="Object" />
 /// <param name="node" type="String | HTMLElement"> The HTMLElement or an ID to use as the starting point</param>
 /// <param name="tagName" type="String"></param>
};
YAHOO.util.Dom.hasClass = function(el, className) {
   /// <summary> Determines whether an HTMLElement has the given className. </summary>
   /// <returns type="Boolean | Array" />
 /// <param name="el" type="String | HTMLElement | Array"> The element or collection to test</param>
 /// <param name="className" type="String"> the class name to search for</param>
};
YAHOO.util.Dom.isAncestor = function(haystack, needle) {
   /// <summary> Determines whether an HTMLElement is an ancestor of another HTML element in the DOM hierarchy. </summary>
   /// <returns type="Boolean" />
 /// <param name="haystack" type="String | HTMLElement"> The possible ancestor</param>
 /// <param name="needle" type="String | HTMLElement"> The possible descendent</param>
};
YAHOO.util.Dom.Color.toRGB = function(val) {
   /// <summary> Converts a hex or color string to an rgb string: rgb(0,0,0) </summary>
 /// <param name="val" type="String"> - The string to convert to RGB notation.</param>
};
YAHOO.util.Dom.Color.toHex = function(val) {
   /// <summary> Converts an rgb or color string to a hex string: #123456 </summary>
 /// <param name="val" type="String"> - The string to convert to hex notation.</param>
};
YAHOO.util.Dom.IEStyle.getBorderWidth = function(el, property) {
   /// <summary> Try to determine the width of an elements border </summary>
   /// <returns type="String" />
 /// <param name="el" type="HTMLElement"> The element to check</param>
 /// <param name="property" type="String"> The property to check</param>
};
YAHOO.util.Dom.IEStyle["get"] = function(el, property) {
   /// <summary> Method used by DOM to get style information for IE </summary>
 /// <param name="el" type="HTMLElement"> The element to check</param>
 /// <param name="property" type="String"> The property to check</param>
};
YAHOO.util.Dom.IEStyle.getColor = function(node, att) {
   /// <summary> Get the color of an element </summary>
   /// <returns type="String" />
 /// <param name="node" type="HTMLElement"> The element to check</param>
 /// <param name="att" type="String"> The attribute to check</param>
};
YAHOO.util.Dom.IEStyle.getMargin = function(node, att) {
   /// <summary> Get the margin value from a style property </summary>
   /// <returns type="String" />
 /// <param name="node" type="HTMLElement"> The element to check</param>
 /// <param name="att" type="String"> The attribute to check</param>
};
YAHOO.util.Dom.IEStyle.getBorderColor = function(node, att) {
   /// <summary> Get the bordercolor of an element </summary>
   /// <returns type="String" />
 /// <param name="node" type="HTMLElement"> The element to check</param>
 /// <param name="att" type="String"> The attribute to check</param>
};
YAHOO.util.Dom.IEStyle.getOffset = function() {
   /// <summary> Determine the offset of an element </summary>
   /// <returns type="String" />
 /// <param name="-" type="HTMLElement"> el The element to check</param>
 /// <param name="-" type="String"> prop The property to check.</param>
};
YAHOO.util.Dom.IEStyle.getPixel = function(node, att) {
   /// <summary> Get the pixel value from a style property </summary>
   /// <returns type="String" />
 /// <param name="node" type="HTMLElement"> The element to check</param>
 /// <param name="att" type="String"> The attribute to check</param>
};
YAHOO.util.Dom.IEStyle.getVisibility = function(node, att) {
   /// <summary> Get the visibility of an element </summary>
   /// <returns type="String" />
 /// <param name="node" type="HTMLElement"> The element to check</param>
 /// <param name="att" type="String"> The attribute to check</param>
};
YAHOO.util.DragDrop.prototype.addToGroup = function(sGroup) {
   /// <summary> Add this instance to a group of related drag/drop objects.  All instances belong to at least one group, and can belong to as many groups as needed. </summary>
 /// <param name="sGroup" type="string">  the name of the group</param>
};
YAHOO.util.DragDrop.prototype.startDrag = function(X, Y) {
   /// <summary> Abstract method called after a drag/drop object is clickedand the drag or mousedown time thresholds have beeen met. </summary>
 /// <param name="X" type="int"> click location</param>
 /// <param name="Y" type="int"> click location</param>
};
YAHOO.util.DragDrop.prototype.isValidHandleChild = function(node) {
   /// <summary> Checks the tag exclusion list to see if this click should be ignored </summary>
   /// <returns type="boolean" />
 /// <param name="node" type="HTMLElement"> the HTMLElement to evaluate</param>
};
YAHOO.util.DragDrop.prototype.b4Drag = function() {
   /// <summary> Code that executes immediately before the onDrag event </summary>
   /// <private />
};
YAHOO.util.DragDrop.prototype.lock = function() {
   /// <summary> Lock this instance </summary>
};
YAHOO.util.DragDrop.prototype.onDragEnter = function(e, id) {
   /// <summary> Abstract method called when this element fist begins hovering over another DragDrop obj </summary>
 /// <param name="e" type="Event"> the mousemove event</param>
 /// <param name="id" type="String|DragDrop[]"> In POINT mode, the elementid this is hovering over.  In INTERSECT mode, an array of one or more dragdrop items being hovered over.</param>
};
YAHOO.util.DragDrop.prototype.b4StartDrag = function() {
   /// <summary> Code that executes immediately before the startDrag event </summary>
   /// <private />
};
YAHOO.util.DragDrop.prototype.onMouseDown = function(e) {
   /// <summary> Event handler that fires when a drag/drop obj gets a mousedown </summary>
 /// <param name="e" type="Event"> the mousedown event</param>
};
YAHOO.util.DragDrop.prototype.setOuterHandleElId = function(id) {
   /// <summary> Allows you to set an element outside of the linked element as a drag handle </summary>
 /// <param name="id" type=""> the id of the element that will be used to initiate the drag</param>
};
YAHOO.util.DragDrop.prototype.unlock = function() {
   /// <summary> Unlock this instace </summary>
};
YAHOO.util.DragDrop.prototype.clearTicks = function() {
   /// <summary> Clears any tick interval defined for this instance </summary>
};
YAHOO.util.DragDrop.prototype.resetConstraints = function() {
   /// <summary> resetConstraints must be called if you manually reposition a dd element. </summary>
};
YAHOO.util.DragDrop.prototype.clickValidator = function(e) {
   /// <summary> Method validates that the clicked elementwas indeed the handle or a valid child of the handle </summary>
 /// <param name="e" type="Event"></param>
};
YAHOO.util.DragDrop.prototype.b4MouseDown = function(e) {
   /// <summary> Code executed immediately before the onMouseDown event </summary>
   /// <private />
 /// <param name="e" type="Event"> the mousedown event</param>
};
YAHOO.util.DragDrop.prototype.handleMouseDown = function(e, oDD) {
   /// <summary> Fired when this object is clicked </summary>
   /// <private />
 /// <param name="e" type="Event"></param>
 /// <param name="oDD" type="YAHOO.util.DragDrop"> the clicked dd object (this dd obj)</param>
};
YAHOO.util.DragDrop.prototype.onDragOver = function(e, id) {
   /// <summary> Abstract method called when this element is hovering over another DragDrop obj </summary>
 /// <param name="e" type="Event"> the mousemove event</param>
 /// <param name="id" type="String|DragDrop[]"> In POINT mode, the elementid this is hovering over.  In INTERSECT mode, an array of dd items being hovered over.</param>
};
YAHOO.util.DragDrop.prototype.addInvalidHandleType = function(tagName) {
   /// <summary> Allows you to specify a tag name that should not start a drag operationwhen clicked.  This is designed to facilitate embedding links within adrag handle that do something other than start the drag. </summary>
 /// <param name="tagName" type="string"> the type of element to exclude</param>
};
YAHOO.util.DragDrop.prototype.setDragElId = function(id) {
   /// <summary> Allows you to specify that an element other than the linked element will be moved with the cursor during a drag </summary>
 /// <param name="id" type="string">  the id of the element that will be used to initiate the drag</param>
};
YAHOO.util.DragDrop.prototype.setXConstraint = function(iLeft, iRight, iTickSize) {
   /// <summary> By default, the element can be dragged any place on the screen.  Use this method to limit the horizontal travel of the element.  Pass in 0,0 for the parameters if you want to lock the drag to the y axis. </summary>
 /// <param name="iLeft" type="int"> the number of pixels the element can move to the left</param>
 /// <param name="iRight" type="int"> the number of pixels the element can move to the right</param>
 /// <param name="iTickSize" type="int"> optional parameter for specifying that the elementshould move iTickSize pixels at a time.</param>
};
YAHOO.util.DragDrop.prototype.getTick = function(val, tickArray) {
   /// <summary> Normally the drag element is moved pixel by pixel, but we can specify that it move a number of pixels at a time.  This method resolves the location when we have it set up like this. </summary>
   /// <private />
   /// <returns type="int" />
 /// <param name="val" type="int"> where we want to place the object</param>
 /// <param name="tickArray" type="int[]"> sorted array of valid points</param>
};
YAHOO.util.DragDrop.prototype.getEl = function() {
   /// <summary> Returns a reference to the linked element </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.util.DragDrop.prototype.init = function(id, sGroup, config) {
   /// <summary> Sets up the DragDrop object.  Must be called in the constructor of anyYAHOO.util.DragDrop subclass </summary>
 /// <param name="id" type=""> the id of the linked element</param>
 /// <param name="sGroup" type="String"> the group of related items</param>
 /// <param name="config" type="object"> configuration attributes</param>
};
YAHOO.util.DragDrop.prototype.toString = function() {
   /// <summary> toString method </summary>
   /// <returns type="string" />
};
YAHOO.util.DragDrop.prototype.onMouseUp = function(e) {
   /// <summary> Event handler that fires when a drag/drop obj gets a mouseup </summary>
 /// <param name="e" type="Event"> the mouseup event</param>
};
YAHOO.util.DragDrop.prototype.removeInvalidHandleType = function(tagName) {
   /// <summary> Unsets an excluded tag name set by addInvalidHandleType </summary>
 /// <param name="tagName" type="string"> the type of element to unexclude</param>
};
YAHOO.util.DragDrop.prototype.onAvailable = function() {
   /// <summary> Override the onAvailable method to do what is needed after the initialposition was determined. </summary>
};
YAHOO.util.DragDrop.prototype.setHandleElId = function(id) {
   /// <summary> Allows you to specify a child of the linked element that should be used to initiate the drag operation.  An example of this would be if you have a content div with text and links.  Clicking anywhere in the content area would normally start the drag operation.  Use this methodto specify that an element inside of the content div is the element that starts the drag operation. </summary>
 /// <param name="id" type="string">  the id of the element that will be used to initiate the drag.</param>
};
YAHOO.util.DragDrop.prototype.onDragOut = function(e, id) {
   /// <summary> Abstract method called when we are no longer hovering over an element </summary>
 /// <param name="e" type="Event"> the mousemove event</param>
 /// <param name="id" type="String|DragDrop[]"> In POINT mode, the elementid this was hovering over.  In INTERSECT mode, an array of dd items that the mouse is no longer over.</param>
};
YAHOO.util.DragDrop.prototype.onInvalidDrop = function(e) {
   /// <summary> Abstract method called when this item is dropped on an area with nodrop target </summary>
 /// <param name="e" type="Event"> the mouseup event</param>
};
YAHOO.util.DragDrop.prototype.setInitialPosition = function(diffX, diffY) {
   /// <summary> Stores the initial placement of the linked element. </summary>
   /// <private />
 /// <param name="diffX" type="int">   the X offset, default 0</param>
 /// <param name="diffY" type="int">   the Y offset, default 0</param>
};
YAHOO.util.DragDrop.prototype.b4DragDrop = function() {
   /// <summary> Code that executes immediately before the onDragDrop event </summary>
   /// <private />
};
YAHOO.util.DragDrop.prototype.removeFromGroup = function(sGroup) {
   /// <summary> Remove's this instance from the supplied interaction group </summary>
 /// <param name="sGroup" type="string">  The group to drop</param>
};
YAHOO.util.DragDrop.prototype.on = function() {
   /// <summary> Shortcut for EventProvider.subscribe, see YAHOO.util.EventProvider.subscribe </summary>
};
YAHOO.util.DragDrop.prototype.initTarget = function(id, sGroup, config) {
   /// <summary> Initializes Targeting functionality only... the object does notget a mousedown handler. </summary>
 /// <param name="id" type=""> the id of the linked element</param>
 /// <param name="sGroup" type="String"> the group of related items</param>
 /// <param name="config" type="object"> configuration attributes</param>
};
YAHOO.util.DragDrop.prototype.removeInvalidHandleClass = function(cssClass) {
   /// <summary> Unsets an invalid css class </summary>
 /// <param name="cssClass" type="string"> the class of the element(s) you wish to re-enable</param>
};
YAHOO.util.DragDrop.prototype.onDragDrop = function(e, id) {
   /// <summary> Abstract method called when this item is dropped on another DragDrop obj </summary>
 /// <param name="e" type="Event"> the mouseup event</param>
 /// <param name="id" type="String|DragDrop[]"> In POINT mode, the elementid this was dropped on.  In INTERSECT mode, an array of dd items this was dropped on.</param>
};
YAHOO.util.DragDrop.prototype.clearConstraints = function() {
   /// <summary> Clears any constraints applied to this instance.  Also clears tickssince they can't exist independent of a constraint at this time. </summary>
};
YAHOO.util.DragDrop.prototype.b4EndDrag = function() {
   /// <summary> Code that executes immediately before the endDrag event </summary>
   /// <private />
};
YAHOO.util.DragDrop.prototype.removeInvalidHandleId = function(id) {
   /// <summary> Unsets an invalid handle id </summary>
 /// <param name="id" type="string"> the id of the element to re-enable</param>
};
YAHOO.util.DragDrop.prototype.setYTicks = function() {
   /// <summary> Create the array of vertical tick marks if an interval was specified in setYConstraint(). </summary>
   /// <private />
};
YAHOO.util.DragDrop.prototype.b4DragOver = function() {
   /// <summary> Code that executes immediately before the onDragOver event </summary>
   /// <private />
};
YAHOO.util.DragDrop.prototype.onDrag = function(e) {
   /// <summary> Abstract method called during the onMouseMove event while dragging an object. </summary>
 /// <param name="e" type="Event"> the mousemove event</param>
};
YAHOO.util.DragDrop.prototype.applyConfig = function() {
   /// <summary> Applies the configuration parameters that were passed into the constructor.This is supposed to happen at each level through the inheritance chain.  Soa DDProxy implentation will execute apply config on DDProxy, DD, and DragDrop in order to get all of the parameters that are available ineach object. </summary>
};
YAHOO.util.DragDrop.prototype.getDragEl = function() {
   /// <summary> Returns a reference to the actual element to drag.  By default this isthe same as the html element, but it can be assigned to another element. An example of this can be found in YAHOO.util.DDProxy </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.util.DragDrop.prototype.endDrag = function(e) {
   /// <summary> Fired when we are done dragging the object </summary>
 /// <param name="e" type="Event"> the mouseup event</param>
};
YAHOO.util.DragDrop.prototype.setYConstraint = function(iUp, iDown, iTickSize) {
   /// <summary> By default, the element can be dragged any place on the screen.  Set this to limit the vertical travel of the element.  Pass in 0,0 for theparameters if you want to lock the drag to the x axis. </summary>
 /// <param name="iUp" type="int"> the number of pixels the element can move up</param>
 /// <param name="iDown" type="int"> the number of pixels the element can move down</param>
 /// <param name="iTickSize" type="int"> optional parameter for specifying that the element should move iTickSize pixels at a time.</param>
};
YAHOO.util.DragDrop.prototype.isLocked = function() {
   /// <summary> Returns true if this instance is locked, or the drag drop mgr is locked(meaning that all drag/drop is disabled on the page.) </summary>
   /// <returns type="boolean" />
};
YAHOO.util.DragDrop.prototype.addInvalidHandleClass = function(cssClass) {
   /// <summary> Lets you specify a css class of elements that will not initiate a drag </summary>
 /// <param name="cssClass" type="string"> the class of the elements you wish to ignore</param>
};
YAHOO.util.DragDrop.prototype.handleOnAvailable = function() {
   /// <summary> Executed when the linked element is available </summary>
   /// <private />
};
YAHOO.util.DragDrop.prototype.setPadding = function(iTop, iRight, iBot, iLeft) {
   /// <summary> Configures the padding for the target zone in px.  Effectively expands(or reduces) the virtual object size for targeting calculations.  Supports css-style shorthand; if only one parameter is passed, all sideswill have that padding, and if only two are passed, the top and bottomwill have the first param, the left and right the second. </summary>
 /// <param name="iTop" type="int">    Top pad</param>
 /// <param name="iRight" type="int">  Right pad</param>
 /// <param name="iBot" type="int">    Bot pad</param>
 /// <param name="iLeft" type="int">   Left pad</param>
};
YAHOO.util.DragDrop.prototype.unreg = function() {
   /// <summary> Remove all drag and drop hooks for this element </summary>
};
YAHOO.util.DragDrop.prototype.getTargetCoord = function(iPageX, iPageY) {
   /// <summary> Finds the location the element should be placed if we want to moveit to where the mouse location less the click offset would place us. </summary>
   /// <private />
   /// <returns type="" />
 /// <param name="iPageX" type="int"> the X coordinate of the click</param>
 /// <param name="iPageY" type="int"> the Y coordinate of the click</param>
};
YAHOO.util.DragDrop.prototype.b4DragOut = function() {
   /// <summary> Code that executes immediately before the onDragOut event </summary>
   /// <private />
};
YAHOO.util.DragDrop.prototype.addInvalidHandleId = function(id) {
   /// <summary> Lets you to specify an element id for a child of a drag handlethat should not initiate a drag </summary>
 /// <param name="id" type="string"> the element id of the element you wish to ignore</param>
};
YAHOO.util.DragDrop.prototype.setXTicks = function() {
   /// <summary> Create the array of horizontal tick marks if an interval was specifiedin setXConstraint(). </summary>
   /// <private />
};
YAHOO.util.DragDrop.prototype.setStartPosition = function(pos) {
   /// <summary> Sets the start position of the element.  This is set when the objis initialized, the reset when a drag is started. </summary>
   /// <private />
 /// <param name="pos" type=""> current position (from previous lookup)</param>
};
YAHOO.util.DragDropMgr.removeDDFromGroup = function() {
   /// <summary> Removes the supplied dd instance from the supplied group. Executedby DragDrop.removeFromGroup, so don't call this function directly. </summary>
   /// <private />
};
YAHOO.util.DragDropMgr.startDrag = function(x, y) {
   /// <summary> Fired when either the drag pixel threshold or the mousedown hold time threshold has been met. </summary>
 /// <param name="x" type="int">  the X position of the original mousedown</param>
 /// <param name="y" type="int">  the Y position of the original mousedown</param>
};
YAHOO.util.DragDropMgr.getDDById = function(id) {
   /// <summary> Returns the DragDrop instance for a given id </summary>
   /// <returns type="DragDrop" />
 /// <param name="id" type="String"> the id of the DragDrop object</param>
};
YAHOO.util.DragDropMgr.unregAll = function() {
   /// <summary> Cleans up the drag and drop events and objects. </summary>
   /// <private />
};
YAHOO.util.DragDropMgr.getScrollTop = function() {
   /// <summary> Gets the scrollTop </summary>
   /// <returns type="int" />
};
YAHOO.util.DragDropMgr.lock = function() {
   /// <summary> Lock all drag and drop functionality </summary>
};
YAHOO.util.DragDropMgr.getClientWidth = function() {
   /// <summary> Gets the client width </summary>
   /// <returns type="int" />
};
YAHOO.util.DragDropMgr.unlock = function() {
   /// <summary> Unlock all drag and drop functionality </summary>
};
YAHOO.util.DragDropMgr.stopDrag = function(e, silent) {
   /// <summary> Ends the current drag, cleans up the state, and fires the endDragand mouseUp events.  Called internally when a mouseup is detectedduring the drag.  Can be fired manually during the drag by passingeither another event (such as the mousemove event received in onDrag)or a fake event with pageX and pageY defined (so that endDrag andonMouseUp have usable position data.).  Alternatively, pass truefor the silent parameter so that the endDrag and onMouseUp eventsare skipped (so no event data is needed.) </summary>
 /// <param name="e" type="Event"> the mouseup event, another event (or a fake event) with pageX and pageY defined, or nothing if the silent parameter is true</param>
 /// <param name="silent" type="boolean"> skips the enddrag and mouseup events if true</param>
};
YAHOO.util.DragDropMgr._deactivateShim = function() {
   /// <summary> This method will hide the shim element and set the _shimActive property to false </summary>
   /// <private />
};
YAHOO.util.DragDropMgr._onResize = function() {
   /// <summary> Reset constraints on all drag and drop objs </summary>
   /// <private />
};
YAHOO.util.DragDropMgr.handleMouseMove = function(e) {
   /// <summary> Internal function to handle the mousemove event.  Will be invoked from the context of the html element. </summary>
   /// <private />
 /// <param name="e" type="Event"> the event</param>
};
YAHOO.util.DragDropMgr.fireEvents = function(e, isDrop) {
   /// <summary> Iterates over all of the DragDrop elements to find ones we are hovering over or dropping on </summary>
   /// <private />
 /// <param name="e" type="Event"> the event</param>
 /// <param name="isDrop" type="boolean"> is this a drop op or a mouseover op?</param>
};
YAHOO.util.DragDropMgr.handleMouseDown = function(e, oDD) {
   /// <summary> Fired after a registered DragDrop object gets the mousedown event.Sets up the events required to track the object being dragged </summary>
   /// <private />
 /// <param name="e" type="Event"> the event</param>
 /// <param name="oDD" type=""> the DragDrop object being dragged</param>
};
YAHOO.util.DragDropMgr.regDragDrop = function(oDD, sGroup) {
   /// <summary> Each DragDrop instance must be registered with the DragDropMgr.  This is executed in DragDrop.init() </summary>
 /// <param name="oDD" type="DragDrop"> the DragDrop object to register</param>
 /// <param name="sGroup" type="String"> the name of the group this element belongs to</param>
};
YAHOO.util.DragDropMgr._onLoad = function() {
   /// <summary> Drag and drop initialization.  Sets up the global event handlers </summary>
   /// <private />
};
YAHOO.util.DragDropMgr.getElement = function(id) {
   /// <summary> Returns the actual DOM element </summary>
   /// <returns type="Object" />
 /// <param name="id" type="String"> the id of the elment to get</param>
};
YAHOO.util.DragDropMgr.isLocked = function() {
   /// <summary> Is drag and drop locked? </summary>
   /// <returns type="boolean" />
};
YAHOO.util.DragDropMgr._execOnAll = function() {
   /// <summary> Runs method on all drag and drop objects </summary>
   /// <private />
};
YAHOO.util.DragDropMgr.getCss = function(id) {
   /// <summary> Returns the style property for the DOM element (i.e., document.getElById(id).style) </summary>
   /// <returns type="Object" />
 /// <param name="id" type="String"> the id of the elment to get</param>
};
YAHOO.util.DragDropMgr._remove = function() {
   /// <summary> Unregisters a drag and drop item.  This is executed in DragDrop.unreg, use that method instead of calling this directly. </summary>
   /// <private />
};
YAHOO.util.DragDropMgr.isTypeOfDD = function(the) {
   /// <summary> My goal is to be able to transparently determine if an object istypeof DragDrop, and the exact subclass of DragDrop.  typeof returns "object", oDD.constructor.toString() always returns"DragDrop" and not the name of the subclass.  So for now it justevaluates a well-known variable in DragDrop. </summary>
   /// <returns type="boolean" />
 /// <param name="the" type="Object"> object to evaluate</param>
};
YAHOO.util.DragDropMgr.init = function() {
   /// <summary> Called the first time an element is registered. </summary>
   /// <private />
};
YAHOO.util.DragDropMgr.getClientHeight = function() {
   /// <summary> Gets the client height </summary>
   /// <returns type="int" />
};
YAHOO.util.DragDropMgr.getBestMatch = function(dds) {
   /// <summary> Helper function for getting the best match from the list of drag and drop objects returned by the drag and drop events when we are in INTERSECT mode.  It returns either the first object that the cursor is over, or the object that has the greatest overlap with the dragged element. </summary>
   /// <returns type="DragDrop" />
 /// <param name="dds" type="DragDrop[]"> The array of drag and drop objects targeted</param>
};
YAHOO.util.DragDropMgr._activateShim = function() {
   /// <summary> This method will create the shim element if needed, then show the shim element, size the element and set the _shimActive property to true </summary>
   /// <private />
};
YAHOO.util.DragDropMgr.stopEvent = function(e) {
   /// <summary> Utility to stop event propagation and event default, if these features are turned on. </summary>
 /// <param name="e" type="Event"> the event as returned by this.getEvent()</param>
};
YAHOO.util.DragDropMgr.numericSort = function() {
   /// <summary> Numeric array sort function </summary>
};
YAHOO.util.DragDropMgr.isOverTarget = function(pt, oTargetter, intersect, precached) {
   /// <summary> Checks the cursor location to see if it over the target </summary>
   /// <private />
   /// <returns type="boolean" />
 /// <param name="pt" type="YAHOO.util.Point"> The point to evaluate</param>
 /// <param name="oTarget" type="DragDrop"> the DragDrop object we are inspecting</param>
 /// <param name="intersect" type="boolean"> true if we are in intersect mode</param>
 /// <param name="pre-cached" type="YAHOO.util.Region"> location of the dragged element</param>
};
YAHOO.util.DragDropMgr._sizeShim = function() {
   /// <summary> This method will create a shim element (giving it the id of yui-ddm-shim), it also attaches the mousemove and mouseup listeners to it and attaches a scroll listener on the window </summary>
   /// <private />
};
YAHOO.util.DragDropMgr.isDragDrop = function(id) {
   /// <summary> Utility function to determine if a given element has been registered as a drag drop item. </summary>
   /// <returns type="boolean" />
 /// <param name="id" type="String"> the element id to check</param>
};
YAHOO.util.DragDropMgr._onUnload = function() {
   /// <summary> unload event handler </summary>
   /// <private />
};
YAHOO.util.DragDropMgr.getLocation = function(oDD) {
   /// <summary> Returns a Region object containing the drag and drop element's positionand size, including the padding configured for it </summary>
   /// <returns type="YAHOO.util.Region" />
 /// <param name="oDD" type="DragDrop"> the drag and drop object to get the location for</param>
};
YAHOO.util.DragDropMgr.regHandle = function(sDDId, sHandleId) {
   /// <summary> Each DragDrop handle element must be registered.  This is doneautomatically when executing DragDrop.setHandleElId() </summary>
 /// <param name="sDDId" type="String"> the DragDrop id this element is a handle for</param>
 /// <param name="sHandleId" type="String"> the id of the element that is the drag handle</param>
};
YAHOO.util.DragDropMgr.getRelated = function(p_oDD, bTargettersOnly) {
   /// <summary> Returns the drag and drop instances that are in all groups thepassed in instance belongs to. </summary>
   /// <returns type="DragDrop[]" />
 /// <param name="p_oDD" type="DragDrop"> the obj to get related data for</param>
 /// <param name="bTargetsOnly" type="boolean"> if true, only return targetable objs</param>
};
YAHOO.util.DragDropMgr.handleWasClicked = function(node) {
   /// <summary> Recursively searches the immediate parent and all child nodes for the handle element in order to determine wheter or not it was clicked. </summary>
 /// <param name="node" type=""> the html element to inspect</param>
};
YAHOO.util.DragDropMgr.swapNode = function(n1, n2) {
   /// <summary> Swap two nodes.  In IE, we use the native method, for others we emulate the IE behavior </summary>
 /// <param name="n1" type=""> the first node to swap</param>
 /// <param name="n2" type=""> the other node to swap</param>
};
YAHOO.util.DragDropMgr.getScrollLeft = function() {
   /// <summary> Gets the scrollLeft </summary>
   /// <returns type="int" />
};
YAHOO.util.DragDropMgr.getElWrapper = function(id) {
   /// <summary> Get the wrapper for the DOM element specified </summary>
   /// <private />
   /// <returns type="YAHOO.util.DDM.ElementWrapper" />
 /// <param name="id" type="String"> the id of the element to get</param>
};
YAHOO.util.DragDropMgr._addListeners = function() {
   /// <summary> Trying to make the load order less important.  Without this we getan error if this file is loaded before the Event Utility. </summary>
   /// <private />
};
YAHOO.util.DragDropMgr.getStyle = function(el, styleProp) {
   /// <summary> Returns the specified element style property </summary>
   /// <returns type="string" />
 /// <param name="el" type="HTMLElement">          the element</param>
 /// <param name="styleProp" type="string">   the style property</param>
};
YAHOO.util.DragDropMgr.getPosY = function(el) {
   /// <summary> Returns the Y position of an html element </summary>
   /// <returns type="int" />
 /// <param name="el" type=""> the element for which to get the position</param>
};
YAHOO.util.DragDropMgr.getPosX = function(el) {
   /// <summary> Returns the X position of an html element </summary>
   /// <returns type="int" />
 /// <param name="el" type=""> the element for which to get the position</param>
};
YAHOO.util.DragDropMgr.isLegalTarget = function(the) {
   /// <summary> Returns true if the specified dd target is a legal target for the specifice drag obj </summary>
   /// <returns type="boolean" />
 /// <param name="the" type="DragDrop"> drag obj</param>
 /// <param name="the" type="DragDrop"> target</param>
};
YAHOO.util.DragDropMgr.refreshCache = function(groups) {
   /// <summary> Refreshes the cache of the top-left and bottom-right points of the drag and drop objects in the specified group(s).  This is in theformat that is stored in the drag and drop instance, so typical usage is:YAHOO.util.DragDropMgr.refreshCache(ddinstance.groups);Alternatively:YAHOO.util.DragDropMgr.refreshCache({group1:true, group2:true}); </summary>
 /// <param name="groups" type="Object"> an associative array of groups to refresh</param>
};
YAHOO.util.DragDropMgr.isHandle = function(id) {
   /// <summary> Utility function to determine if a given element has been registered as a drag drop handle for the given Drag Drop object. </summary>
   /// <returns type="boolean" />
 /// <param name="id" type="String"> the element id to check</param>
};
YAHOO.util.DragDropMgr.handleMouseUp = function(e) {
   /// <summary> Internal function to handle the mouseup event.  Will be invoked from the context of the document. </summary>
   /// <private />
 /// <param name="e" type="Event"> the event</param>
};
YAHOO.util.DragDropMgr.verifyEl = function(el) {
   /// <summary> This checks to make sure an element exists and is in the DOM.  Themain purpose is to handle cases where innerHTML is used to removedrag and drop objects from the DOM.  IE provides an 'unspecifiederror' when trying to access the offsetParent of such an element </summary>
   /// <returns type="boolean" />
 /// <param name="el" type="HTMLElement"> the element to check</param>
};
YAHOO.util.DragDropMgr.getScroll = function() {
   /// <summary> Returns the current scroll position </summary>
   /// <private />
};
YAHOO.util.DragDropMgr.moveToEl = function(moveEl, targetterEl) {
   /// <summary> Sets the x/y position of an element to the location of thetarget element. </summary>
 /// <param name="moveEl" type="HTMLElement">      The element to move</param>
 /// <param name="targetEl" type="HTMLElement">    The position reference element</param>
};
YAHOO.util.Easing.easeIn = function(t, b, c, d) {
   /// <summary> Begins slowly and accelerates towards end. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YAHOO.util.Easing.easeInStrong = function(t, b, c, d) {
   /// <summary> Begins slowly and accelerates towards end. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YAHOO.util.Easing.bounceBoth = function(t, b, c, d) {
   /// <summary> Bounces off start and end. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YAHOO.util.Easing.backOut = function(t, b, c, d, s) {
   /// <summary> Overshoots end, then reverses and comes back to end. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
 /// <param name="s" type="Number"> Overshoot (optional)</param>
};
YAHOO.util.Easing.elasticOut = function(t, b, c, d, a, p) {
   /// <summary> Snap out elastic effect. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
 /// <param name="a" type="Number"> Amplitude (optional)</param>
 /// <param name="p" type="Number"> Period (optional)</param>
};
YAHOO.util.Easing.bounceOut = function(t, b, c, d) {
   /// <summary> Bounces off end. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YAHOO.util.Easing.backBoth = function(t, b, c, d, s) {
   /// <summary> Backtracks slightly, then reverses direction, overshoots end, then reverses and comes back to end. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
 /// <param name="s" type="Number"> Overshoot (optional)</param>
};
YAHOO.util.Easing.elasticBoth = function(t, b, c, d, a, p) {
   /// <summary> Snap both elastic effect. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
 /// <param name="a" type="Number"> Amplitude (optional)</param>
 /// <param name="p" type="Number"> Period (optional)</param>
};
YAHOO.util.Easing.easeBoth = function(t, b, c, d) {
   /// <summary> Begins slowly and decelerates towards end. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YAHOO.util.Easing.bounceIn = function(t, b, c, d) {
   /// <summary> Bounce off of start. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YAHOO.util.Easing.easeOutStrong = function(t, b, c, d) {
   /// <summary> Begins quickly and decelerates towards end. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YAHOO.util.Easing.easeNone = function(t, b, c, d) {
   /// <summary> Uniform speed between points. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YAHOO.util.Easing.elasticIn = function(t, b, c, d, a, p) {
   /// <summary> Snap in elastic effect. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
 /// <param name="a" type="Number"> Amplitude (optional)</param>
 /// <param name="p" type="Number"> Period (optional)</param>
};
YAHOO.util.Easing.easeBothStrong = function(t, b, c, d) {
   /// <summary> Begins slowly and decelerates towards end. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YAHOO.util.Easing.easeOut = function(t, b, c, d) {
   /// <summary> Begins quickly and decelerates towards end. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YAHOO.util.Easing.backIn = function(t, b, c, d, s) {
   /// <summary> Backtracks slightly, then reverses direction and moves to end. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
 /// <param name="s" type="Number"> Overshoot (optional)</param>
};
YAHOO.util.Element.prototype.appendChild = function(child) {
   /// <summary> Wrapper for HTMLElement method. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="child" type="YAHOO.util.Element || HTMLElement"> The element to append.</param>
};
YAHOO.util.Element.prototype.setStyle = function(property, value) {
   /// <summary> Wrapper for Dom method. </summary>
 /// <param name="property" type="String"> The style property to set</param>
 /// <param name="value" type="String"> The value to apply to the style property</param>
};
YAHOO.util.Element.prototype.subscribe = function(type, fn, obj, scope) {
   /// <summary> Alias for addListener </summary>
 /// <param name="type" type="String"> The name of the event to listen for</param>
 /// <param name="fn" type="Function"> The function call when the event fires</param>
 /// <param name="obj" type="Any"> A variable to pass to the handler</param>
 /// <param name="scope" type="Object"> The object to use for the scope of the handler</param>
};
YAHOO.util.Element.prototype.initAttributes = function(map) {
   /// <summary> Registers Element specific attributes. </summary>
 /// <param name="map" type="Object"> A key-value map of initial attribute configs</param>
};
YAHOO.util.Element.prototype.removeDelegate = function(type, fn) {
   /// <summary> Remove a delegated event listener </summary>
   /// <returns type="boolean" />
 /// <param name="type" type="String"> The name of the event to listen for</param>
 /// <param name="fn" type="Function"> The function call when the event fires</param>
};
YAHOO.util.Element.prototype.getElementsByClassName = function(className, tag) {
   /// <summary> Wrapper for Dom method. </summary>
   /// <returns type="Array" />
 /// <param name="className" type="String"> The className to collect</param>
 /// <param name="tag" type="String"> (optional) The tag to use inconjunction with class name</param>
};
YAHOO.util.Element.prototype.replaceClass = function(oldClassName, newClassName) {
   /// <summary> Wrapper for Dom method. </summary>
 /// <param name="oldClassName" type="String"> The className to replace</param>
 /// <param name="newClassName" type="String"> The className to add</param>
};
YAHOO.util.Element.prototype.appendTo = function(parentNode, before) {
   /// <summary> Appends the HTMLElement into either the supplied parentNode. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="parentNode" type="HTMLElement | Element"> The node to append to</param>
 /// <param name="before" type="HTMLElement | Element"> An optional node to insert before</param>
};
YAHOO.util.Element.prototype.hasChildNodes = function() {
   /// <summary> Wrapper for HTMLElement method. </summary>
   /// <returns type="Boolean" />
};
YAHOO.util.Element.prototype._setHTMLAttrConfig = function(element, key, map) {
   /// <summary> Sets the value of the property and fires beforeChange and change events. </summary>
   /// <private />
 /// <param name="element" type="YAHOO.util.Element"> The Element instance toregister the config to.</param>
 /// <param name="key" type="String"> The name of the config to register</param>
 /// <param name="map" type="Object"> A key-value map of the config's params</param>
};
YAHOO.util.Element.prototype.fireQueue = function() {
   /// <summary> Apply any queued set calls. </summary>
};
YAHOO.util.Element.prototype.addListener = function(type, fn, obj, scope) {
   /// <summary> Adds a listener for the given event.  These may be DOM or customEvent listeners.  Any event that is fired via fireEventcan be listened for.  All handlers receive an event object. </summary>
 /// <param name="type" type="String"> The name of the event to listen for</param>
 /// <param name="fn" type="Function"> The handler to call when the event fires</param>
 /// <param name="obj" type="Any"> A variable to pass to the handler</param>
 /// <param name="scope" type="Object"> The object to use for the scope of the handler</param>
};
YAHOO.util.Element.prototype.insertBefore = function(element, before) {
   /// <summary> Wrapper for HTMLElement method. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="element" type="HTMLElement"> The HTMLElement to insert</param>
 /// <param name="before" type="HTMLElement"> The HTMLElement to insertthe element before.</param>
};
YAHOO.util.Element.prototype.getElementsByTagName = function(tag) {
   /// <summary> Wrapper for HTMLElement method. </summary>
   /// <returns type="HTMLCollection" />
 /// <param name="tag" type="String"> The tagName to collect</param>
};
YAHOO.util.Element.prototype.removeClass = function(className) {
   /// <summary> Wrapper for Dom method. </summary>
 /// <param name="className" type="String"> The className to remove</param>
};
YAHOO.util.Element.prototype.getStyle = function(property) {
   /// <summary> Wrapper for Dom method. </summary>
   /// <returns type="String" />
 /// <param name="property" type="String"> The style property to retrieve</param>
};
YAHOO.util.Element.prototype.replaceChild = function(newNode, oldNode) {
   /// <summary> Wrapper for HTMLElement method. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="newNode" type="HTMLElement"> The HTMLElement to insert</param>
 /// <param name="oldNode" type="HTMLElement"> The HTMLElement to replace</param>
};
YAHOO.util.Element.prototype.removeListener = function(type, fn) {
   /// <summary> Remove an event listener </summary>
 /// <param name="type" type="String"> The name of the event to listen for</param>
 /// <param name="fn" type="Function"> The function call when the event fires</param>
};
YAHOO.util.Element.prototype.on = function(type, fn, obj, scope) {
   /// <summary> Alias for addListener </summary>
 /// <param name="type" type="String"> The name of the event to listen for</param>
 /// <param name="fn" type="Function"> The function call when the event fires</param>
 /// <param name="obj" type="Any"> A variable to pass to the handler</param>
 /// <param name="scope" type="Object"> The object to use for the scope of the handler</param>
};
YAHOO.util.Element.prototype.removeChild = function(child) {
   /// <summary> Wrapper for HTMLElement method. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="child" type="HTMLElement"> The HTMLElement to remove</param>
};
YAHOO.util.Element.prototype.delegate = function(type, fn, filter, obj, scope) {
   /// <summary> Appends a delegated event listener.  Delegated event listeners receive two arguments by default: the DOM event and the element  specified by the filtering function or CSS selector.(Note: Using the delegate method requires the element-delegate module.  Using CSS selectors as the filtering criteria for delegated event listeners requires inclusion of the Selector Utility.) </summary>
   /// <returns type="boolean" />
 /// <param name="type" type="String"> The name of the event to listen for</param>
 /// <param name="fn" type="Function"> The handler to call when the event fires</param>
 /// <param name="filter" type="Function|string"> Function or CSS selector used to determine for what element(s) the event listener should be called. When a function is specified, the function should return an HTML element.  Using a CSS Selector requires the inclusion of the CSS Selector Utility.</param>
 /// <param name="obj" type="Any"> A variable to pass to the handler</param>
 /// <param name="scope" type="Object"> The object to use for the scope of the handler</param>
};
YAHOO.util.Element.prototype.hasClass = function(className) {
   /// <summary> Wrapper for Dom method. </summary>
   /// <returns type="Boolean" />
 /// <param name="className" type="String"> The className to add</param>
};
YAHOO.util.Element.prototype.addClass = function(className) {
   /// <summary> Wrapper for Dom method. </summary>
 /// <param name="className" type="String"> The className to add</param>
};
YAHOO.util.Event.preventDefault = function(ev) {
   /// <summary> Prevents the default behavior of the event </summary>
 /// <param name="ev" type="Event"> the event</param>
};
YAHOO.util.Event._simpleRemove = function(el, sType, fn, capture) {
   /// <summary> Basic remove listener </summary>
   /// <private />
 /// <param name="el" type="HTMLElement">      the element to bind the handler to</param>
 /// <param name="sType" type="string">   the type of event handler</param>
 /// <param name="fn" type="function">      the callback to invoke</param>
 /// <param name="capture" type="boolen"> capture or bubble phase</param>
};
YAHOO.util.Event._getScrollLeft = function() {
   /// <summary> Returns scrollLeft </summary>
   /// <private />
};
YAHOO.util.Event.getTime = function(ev) {
   /// <summary> Returns the time of the event.  If the time is not included, theevent is modified using the current time. </summary>
   /// <returns type="Date" />
 /// <param name="ev" type="Event"> the event</param>
};
YAHOO.util.Event.addBlurListener = function(el, fn, obj, overrideContext) {
   /// <summary> Appends a blur event handler.  (The focusout event is used for Internet Explorer, the focusout, capture-event for Opera, WebKit.) </summary>
   /// <returns type="Boolean" />
 /// <param name="el" type="String|HTMLElement|Array|NodeList"> An id, an element reference, or a collection of ids and/or elements to assign the listener to.</param>
 /// <param name="fn" type="Function">        The method the event invokes</param>
 /// <param name="obj" type="Object">    An arbitrary object that will be passed as a parameter to the handler</param>
 /// <param name="overrideContext" type="Boolean|object">  If true, the obj passed in becomesthe execution context of the listener. If anobject, this object becomes the executioncontext.</param>
};
YAHOO.util.Event._simpleAdd = function(el, sType, fn, capture) {
   /// <summary> Adds a DOM event directly without the caching, cleanup, context adj, etc </summary>
   /// <private />
 /// <param name="el" type="HTMLElement">      the element to bind the handler to</param>
 /// <param name="sType" type="string">   the type of event handler</param>
 /// <param name="fn" type="function">      the callback to invoke</param>
 /// <param name="capture" type="boolen"> capture or bubble phase</param>
};
YAHOO.util.Event.getTarget = function(ev, resolveTextNode) {
   /// <summary> Returns the event's target element.  Safari sometimes providesa text node, and this is automatically resolved to the textnode's parent so that it behaves like other browsers. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="ev" type="Event"> the event</param>
 /// <param name="resolveTextNode" type="boolean"> when set to true the target'sparent will be returned if the target is a text node.  @deprecated, the text node isnow resolved automatically</param>
};
YAHOO.util.Event._createDelegate = function(fn, filter, obj, overrideContext) {
   /// <summary> Creates a delegate function used to call event listeners specified via the YAHOO.util.Event.delegate method. </summary>
   /// <private />
   /// <returns type="Function" />
 /// <param name="fn" type="Function">        The method (event listener) to call.</param>
 /// <param name="filter" type="Function|string"> Function or CSS selector used to determine for what element(s) the event listener should be called.</param>
 /// <param name="obj" type="Object"> An arbitrary object that will be passed as a parameter to the listener.</param>
 /// <param name="overrideContext" type="Boolean|object">  If true, the value of the obj parameter becomes the execution contextof the listener. If an object, this objectbecomes the execution context.</param>
};
YAHOO.util.Event.removeBlurListener = function(el, fn) {
   /// <summary> Removes a blur event listener </summary>
   /// <returns type="boolean" />
 /// <param name="el" type="String|HTMLElement|Array|NodeList"> An id, an element reference, or a collection of ids and/or elements to removethe listener from.</param>
 /// <param name="fn" type="Function"> the method the event invokes.  If fn isundefined, then all event handlers for the type of event are removed.</param>
};
YAHOO.util.Event.getPageY = function(ev) {
   /// <summary> Returns the event's pageY </summary>
   /// <returns type="int" />
 /// <param name="ev" type="Event"> the event</param>
};
YAHOO.util.Event.removeDelegate = function(container, type, fn) {
   /// <summary> Removes a delegated event listener. </summary>
   /// <returns type="boolean" />
 /// <param name="container" type="String|HTMLElement|Array|NodeList"> An id, an element reference, or a collection of ids and/or elements to removethe listener from.</param>
 /// <param name="type" type="String"> The type of event to remove.</param>
 /// <param name="fn" type="Function"> The method the event invokes.  If fn isundefined, then all event listeners for the type of event are removed.</param>
};
YAHOO.util.Event.stopPropagation = function(ev) {
   /// <summary> Stops event propagation </summary>
 /// <param name="ev" type="Event"> the event</param>
};
YAHOO.util.Event._getScroll = function() {
   /// <summary> Returns the scrollTop and scrollLeft.  Used to calculate the pageX and pageY in Internet Explorer </summary>
   /// <private />
};
YAHOO.util.Event.getCharCode = function(ev) {
   /// <summary> Returns the charcode for an event </summary>
   /// <returns type="int" />
 /// <param name="ev" type="Event"> the event</param>
};
YAHOO.util.Event._getType = function(sType) {
   /// <summary> Checks to see if the type requested is a special type (as defined by the _specialTypes hash), and (if so) returns the special type name. </summary>
   /// <private />
 /// <param name="sType" type="String">     The type to look up</param>
};
YAHOO.util.Event._isValidCollection = function(o) {
   /// <summary> We want to be able to use getElementsByTagName as a collectionto attach a group of events to.  Unfortunately, different browsers return different types of collections.  This functiontests to determine if the object is array-like.  It will also fail if the object is an array, but is empty. </summary>
   /// <private />
   /// <returns type="boolean" />
 /// <param name="o" type=""> the object to test</param>
};
YAHOO.util.Event.getEl = function() {
   /// <summary> We cache elements bound by id because when the unload event fires, we can no longer use document.getElementById </summary>
   /// <private />
};
YAHOO.util.Event.removeListener = function(el, sType, fn) {
   /// <summary> Removes an event listener </summary>
   /// <returns type="boolean" />
 /// <param name="el" type="String|HTMLElement|Array|NodeList"> An id, an element reference, or a collection of ids and/or elements to removethe listener from.</param>
 /// <param name="sType" type="String"> the type of event to remove.</param>
 /// <param name="fn" type="Function"> the method the event invokes.  If fn isundefined, then all event handlers for the type of event are removed.</param>
};
YAHOO.util.Event.resolveTextNode = function(node) {
   /// <summary> In some cases, some browsers will return a text node insidethe actual element that was targeted.  This normalizes thereturn value for getTarget and getRelatedTarget. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="node" type="HTMLElement"> node to resolve</param>
};
YAHOO.util.Event.stopEvent = function(ev) {
   /// <summary> Convenience method for stopPropagation + preventDefault </summary>
 /// <param name="ev" type="Event"> the event</param>
};
YAHOO.util.Event.addFocusListener = function(el, fn, obj, overrideContext) {
   /// <summary> Appends a focus event handler.  (The focusin event is used for Internet Explorer, the focus, capture-event for Opera, WebKit.) </summary>
   /// <returns type="Boolean" />
 /// <param name="el" type="String|HTMLElement|Array|NodeList"> An id, an element reference, or a collection of ids and/or elements to assign the listener to.</param>
 /// <param name="fn" type="Function">        The method the event invokes</param>
 /// <param name="obj" type="Object">    An arbitrary object that will be passed as a parameter to the handler</param>
 /// <param name="overrideContext" type="Boolean|object">  If true, the obj passed in becomesthe execution context of the listener. If anobject, this object becomes the executioncontext.</param>
};
YAHOO.util.Event.onDOMReady = function(fn, obj, overrideContext) {
   /// <summary> Executes the supplied callback when the DOM is first usable.  Thiswill execute immediately if called after the DOMReady event hasfired.   @todo the DOMContentReady event does not fire when thescript is dynamically injected into the page.  This means theDOMReady custom event will never fire in FireFox or Opera when thelibrary is injected.  It _will_ fire in Safari, and the IE implementation would allow for us to fire it if the defered scriptis not available.  We want this to behave the same in all browsers.Is there a way to identify when the script has been injected instead of included inline?  Is there a way to know whether the window onload event has fired without having had a listener attached to it when it did so?The callback is a CustomEvent, so the signature is:type &lt;string&gt;, args &lt;array&gt;, customobject &lt;object&gt;For DOMReady events, there are no fire argments, so thesignature is:"DOMReady", [], obj </summary>
 /// <param name="fn" type="function"> what to execute when the element is found.</param>
 /// <param name="obj" type="object"> an optional object to be passed back asa parameter to fn.</param>
 /// <param name="overrideContext" type="boolean|object"> If set to true, fn will executein the context of obj, if set to an object itwill execute in the context of that object</param>
};
YAHOO.util.Event.addListener = function(el, sType, fn, obj, overrideContext) {
   /// <summary> Appends an event handler </summary>
   /// <returns type="Boolean" />
 /// <param name="el" type="String|HTMLElement|Array|NodeList"> An id, an element reference, or a collection of ids and/or elements to assign the listener to.</param>
 /// <param name="sType" type="String">     The type of event to append</param>
 /// <param name="fn" type="Function">        The method the event invokes</param>
 /// <param name="obj" type="Object">    An arbitrary object that will be passed as a parameter to the handler</param>
 /// <param name="overrideContext" type="Boolean|object">  If true, the obj passed in becomesthe execution context of the listener. If anobject, this object becomes the executioncontext.</param>
};
YAHOO.util.Event._createMouseDelegate = function(fn, obj, overrideContext) {
   /// <summary> Creates a delegate function used to call mouseover and mouseleave event listeners specified via the YAHOO.util.Event.addListener or YAHOO.util.Event.on method. </summary>
   /// <private />
   /// <returns type="Function" />
 /// <param name="fn" type="Function">        The method (event listener) to call</param>
 /// <param name="obj" type="Object">    An arbitrary object that will be passed as a parameter to the listener</param>
 /// <param name="overrideContext" type="Boolean|object">  If true, the value of the obj parameter becomes the execution contextof the listener. If an object, this objectbecomes the execution context.</param>
};
YAHOO.util.Event.generateId = function(el) {
   /// <summary> Generates an unique ID for the element if it does not already have one. </summary>
   /// <returns type="string" />
 /// <param name="el" type=""> the element to create the id for</param>
};
YAHOO.util.Event.getPageX = function(ev) {
   /// <summary> Returns the event's pageX </summary>
   /// <returns type="int" />
 /// <param name="ev" type="Event"> the event</param>
};
YAHOO.util.Event._getScrollTop = function() {
   /// <summary> Returns scrollTop </summary>
   /// <private />
};
YAHOO.util.Event.onContentReady = function(id, fn, obj, overrideContext) {
   /// <summary> Works the same way as onAvailable, but additionally checks thestate of sibling elements to determine if the content of theavailable element is safe to modify.The callback is executed with a single parameter:the custom object parameter, if provided. </summary>
 /// <param name="id" type="string"> the id of the element to look for.</param>
 /// <param name="fn" type="function"> what to execute when the element is ready.</param>
 /// <param name="obj" type="object"> an optional object to be passed back asa parameter to fn.</param>
 /// <param name="overrideContext" type="boolean|object"> If set to true, fn will executein the context of obj.  If an object, fn willexectute in the context of that object</param>
};
YAHOO.util.Event.startInterval = function() {
   /// <private />
};
YAHOO.util.Event.onAvailable = function(id, fn, obj, overrideContext, checkContent) {
   /// <summary> Executes the supplied callback when the item with the suppliedid is found.  This is meant to be used to execute behavior assoon as possible as the page loads.  If you use this after theinitial page load it will poll for a fixed time for the element.The number of times it will poll and the frequency areconfigurable.  By default it will poll for 10 seconds.The callback is executed with a single parameter:the custom object parameter, if provided. </summary>
 /// <param name="id" type="string||string[]"> the id of the element, or an arrayof ids to look for.</param>
 /// <param name="fn" type="function"> what to execute when the element is found.</param>
 /// <param name="obj" type="object"> an optional object to be passed back asa parameter to fn.</param>
 /// <param name="overrideContext" type="boolean|object"> If set to true, fn will executein the context of obj, if set to an object itwill execute in the context of that object</param>
 /// <param name="checkContent" type="boolean">  check child node readiness (onContentReady)</param>
};
YAHOO.util.Event.onFocus = function() {
   /// <summary> YAHOO.util.Event.onFocus is an alias for addFocusListener </summary>
};
YAHOO.util.Event._load = function() {
   /// <summary> hook up any deferred listeners </summary>
   /// <private />
};
YAHOO.util.Event.clearCache = function() {
   /// <summary> Clears the element cache </summary>
   /// <private />
};
YAHOO.util.Event.getXY = function(ev) {
   /// <summary> Returns the pageX and pageY properties as an indexed array. </summary>
   /// <returns type="[x, y]" />
 /// <param name="ev" type="Event"> the event</param>
};
YAHOO.util.Event.on = function() {
   /// <summary> YAHOO.util.Event.on is an alias for addListener </summary>
};
YAHOO.util.Event.onBlur = function() {
   /// <summary> YAHOO.util.Event.onBlur is an alias for addBlurListener </summary>
};
YAHOO.util.Event.getListeners = function(el, sType) {
   /// <summary> Returns all listeners attached to the given element via addListener.Optionally, you can specify a specific type of event to return. </summary>
   /// <returns type="Object" />
 /// <param name="el" type="HTMLElement|string">  the element or element id to inspect</param>
 /// <param name="sType" type="string">  optional type of listener to return. Ifleft out, all listeners will be returned</param>
};
YAHOO.util.Event.getEvent = function(e, boundEl) {
   /// <summary> Finds the event in the window object, the caller's arguments, orin the arguments of another method in the callstack.  This isexecuted automatically for events registered through the eventmanager, so the implementer should not normally need to executethis function at all. </summary>
   /// <returns type="Event" />
 /// <param name="e" type="Event"> the event parameter from the handler</param>
 /// <param name="boundEl" type="HTMLElement"> the element the listener is attached to</param>
};
YAHOO.util.Event.purgeElement = function(el, recurse, sType) {
   /// <summary> Removes all listeners attached to the given element via addListener.Optionally, the node's children can also be purged.Optionally, you can specify a specific type of event to remove. </summary>
 /// <param name="el" type="HTMLElement"> the element to purge</param>
 /// <param name="recurse" type="boolean"> recursively purge this element's childrenas well.  Use with caution.</param>
 /// <param name="sType" type="string"> optional type of listener to purge. Ifleft out, all listeners will be removed</param>
};
YAHOO.util.Event._addListener = function(el, sType, fn, obj, overrideContext, capture) {
   /// <summary> Appends an event handler </summary>
   /// <private />
   /// <returns type="Boolean" />
 /// <param name="el" type="String|HTMLElement|Array|NodeList"> An id, an element reference, or a collection of ids and/or elements to assign the listener to.</param>
 /// <param name="sType" type="String">     The type of event to append</param>
 /// <param name="fn" type="Function">        The method the event invokes</param>
 /// <param name="obj" type="Object">    An arbitrary object that will be passed as a parameter to the handler</param>
 /// <param name="overrideContext" type="Boolean|object">  If true, the obj passed in becomesthe execution context of the listener. If anobject, this object becomes the executioncontext.</param>
 /// <param name="capture" type="boolen"> capture or bubble phase</param>
};
YAHOO.util.Event.regCE = function() {
   /// <summary> Used by old versions of CustomEvent, restored for backwardscompatibility </summary>
   /// <private />
};
YAHOO.util.Event._getCacheIndex = function() {
   /// <summary> Locating the saved event handler data by function ref </summary>
   /// <private />
};
YAHOO.util.Event._ready = function() {
   /// <summary> Fires the DOMReady event listeners the first time the document isusable. </summary>
   /// <private />
};
YAHOO.util.Event.delegate = function(container, type, fn, filter, obj, overrideContext) {
   /// <summary> Appends a delegated event listener.  Delegated event listeners receive three arguments by default: the DOM event, the element  specified by the filtering function or CSS selector, and the container element (the element to which the event listener is bound).  (Note: Using the delegate method requires the event-delegate module.  Using CSS selectors as the filtering criteria for delegated event listeners requires inclusion of the Selector Utility.) </summary>
   /// <returns type="Boolean" />
 /// <param name="container" type="String|HTMLElement|Array|NodeList"> An id, an element reference, or a collection of ids and/or elements to assign the listener to.</param>
 /// <param name="type" type="String">     The type of event listener to append</param>
 /// <param name="fn" type="Function">        The method the event invokes</param>
 /// <param name="filter" type="Function|string"> Function or CSS selector used to determine for what element(s) the event listener should be called. When a function is specified, the function should return an HTML element.  Using a CSS Selector requires the inclusion of the CSS Selector Utility.</param>
 /// <param name="obj" type="Object">    An arbitrary object that will be passed as a parameter to the listener</param>
 /// <param name="overrideContext" type="Boolean|object">  If true, the value of the obj parameter becomesthe execution context of the listener. If anobject, this object becomes the executioncontext.</param>
};
YAHOO.util.Event._unload = function() {
   /// <summary> Removes all listeners registered by pe.event.  Called automatically during the unload event. </summary>
   /// <private />
};
YAHOO.util.Event._tryPreloadAttach = function() {
   /// <summary> Polling function that runs before the onload event fires, attempting to attach to DOM Nodes as soon as they are available </summary>
   /// <private />
};
YAHOO.util.Event.removeFocusListener = function(el, fn) {
   /// <summary> Removes a focus event listener </summary>
   /// <returns type="boolean" />
 /// <param name="el" type="String|HTMLElement|Array|NodeList"> An id, an element reference, or a collection of ids and/or elements to removethe listener from.</param>
 /// <param name="fn" type="Function"> the method the event invokes.  If fn isundefined, then all event handlers for the type of event are removed.</param>
};
YAHOO.util.Event.getRelatedTarget = function(ev) {
   /// <summary> Returns the event's related target </summary>
   /// <returns type="HTMLElement" />
 /// <param name="ev" type="Event"> the event</param>
};
YAHOO.util.EventProvider.prototype.unsubscribeAll = function(p_type) {
   /// <summary> Removes all listeners from the specified event.  If the event typeis not specified, all listeners from all hosted custom events willbe removed. </summary>
 /// <param name="p_type" type="string">    The type, or name of the event</param>
};
YAHOO.util.EventProvider.prototype.subscribe = function(p_type, p_fn, p_obj, overrideContext) {
   /// <summary> Subscribe to a CustomEvent by event type </summary>
 /// <param name="p_type" type="string">        the type, or name of the event</param>
 /// <param name="p_fn" type="function">        the function to exectute when the event fires</param>
 /// <param name="p_obj" type="Object">         An object to be passed along when the event fires</param>
 /// <param name="overrideContext" type="boolean">   If true, the obj passed in becomes the execution scope of the listener</param>
};
YAHOO.util.EventProvider.prototype.unsubscribe = function(p_type, p_fn, p_obj) {
   /// <summary> Unsubscribes one or more listeners the from the specified event </summary>
   /// <returns type="boolean" />
 /// <param name="p_type" type="string">    The type, or name of the event.  If the typeis not specified, it will attempt to removethe listener from all hosted events.</param>
 /// <param name="p_fn" type="Function">    The subscribed function to unsubscribe, if notsupplied, all subscribers will be removed.</param>
 /// <param name="p_obj" type="Object">     The custom object passed to subscribe.  This isoptional, but if supplied will be used todisambiguate multiple listeners that are the same(e.g., you subscribe many object using a functionthat lives on the prototype)</param>
};
YAHOO.util.EventProvider.prototype.hasEvent = function(type) {
   /// <summary> Returns true if the custom event of the provided type has been createdwith createEvent. </summary>
 /// <param name="type" type="string">  the type, or name of the event</param>
};
YAHOO.util.EventProvider.prototype.fireEvent = function(p_type, arguments) {
   /// <summary> Fire a custom event by name.  The callback functions will be executedfrom the scope specified when the event was created, and with the following parameters:The first argument fire() was executed withThe custom object (if any) that was passed into the subscribe() method </summary>
   /// <returns type="boolean" />
 /// <param name="p_type" type="string">      the type, or name of the event</param>
 /// <param name="arguments" type="Object*">  an arbitrary set of parameters to pass to the handler.</param>
};
YAHOO.util.EventProvider.prototype.createEvent = function(p_type, p_config) {
   /// <summary> Creates a new custom event of the specified type.  If a custom eventby that name already exists, it will not be re-created.  In eithercase the custom event is returned. </summary>
   /// <returns type="CustomEvent" />
 /// <param name="p_type" type="string">  the type, or name of the event</param>
 /// <param name="p_config" type="object">  optional config params.  Valid properties are:scope: defines the default execution scope.  If not definedthe default scope will be this instance.silent: if true, the custom event will not generate log messages.This is false by default.fireOnce: if true, the custom event will only notify subscribersonce regardless of the number of times the event is fired.  Inaddition, new subscribers will be executed immediately if theevent has already fired.This is false by default.onSubscribeCallback: specifies a callback to execute when theevent has a new subscriber.  This will fire immediately foreach queued subscriber if any exist prior to the creation ofthe event.</param>
};
YAHOO.util.FunctionDataSource.prototype.makeConnection = function(oRequest, oCallback, oCaller) {
   /// <summary> Overriding method passes query to a function. The returned response is thenforwarded to the handleResponse function. </summary>
   /// <returns type="Number" />
 /// <param name="oRequest" type="Object">  Request object.</param>
 /// <param name="oCallback" type="Object">  Callback object literal.</param>
 /// <param name="oCaller" type="Object">  (deprecated) Use oCallback.scope.</param>
};
YAHOO.util.Get.prototype._purge = function() {
   /// <summary> Removes the nodes for the specified queue </summary>
   /// <private />
};
YAHOO.util.Get.prototype._finalize = function(id) {
   /// <summary> Called by the the helper for detecting script load in Safari </summary>
   /// <private />
 /// <param name="id" type="string">  the transaction id</param>
};
YAHOO.util.Get.script = function(url, opts) {
   /// <summary> Fetches and inserts one or more script nodes into the headof the current document or the document in a specified window. </summary>
   /// <returns type="tId: string" />
 /// <param name="url" type="string|string[]">  the url or urls to the script(s)</param>
 /// <param name="opts" type="object">  Options: onSuccesscallback to execute when the script(s) are finished loadingThe callback receives an object back with the followingdata:winthe window the script(s) were inserted intodatathe data object passed in when the request was madenodesAn array containing references to the nodes that wereinsertedpurgeA function that, when executed, will remove the nodesthat were insertedonFailurecallback to execute when the script load operation failsThe callback receives an object back with the followingdata:winthe window the script(s) were inserted intodatathe data object passed in when the request was madenodesAn array containing references to the nodes that wereinserted successfullypurgeA function that, when executed, will remove any nodesthat were insertedonTimeoutcallback to execute when a timeout occurs.The callback receives an object back with the followingdata:winthe window the script(s) were inserted intodatathe data object passed in when the request was madenodesAn array containing references to the nodes that wereinsertedpurgeA function that, when executed, will remove the nodesthat were insertedscopethe execution context for the callbackswina window other than the one the utility occupiesautopurgesetting to true will let the utilities cleanup routine purge the script once loadeddatadata that is supplied to the callback when the script(s) areloaded.varNamevariable that should be available when a script is finishedloading.  Used to help Safari 2.x and below with script load detection.  The type of this property should match what waspassed into the url parameter: if loading a single url, astring can be supplied.  If loading multiple scripts, youmust supply an array that contains the variable name foreach script.insertBeforenode or node id that will become the new node's nextSiblingcharsetNode charset, deprecated, use 'attributes'attributesA hash of attributes to apply to dynamic nodes.timeoutNumber of milliseconds to wait before aborting and firing the timeout event// assumes yahoo, dom, and event are already on the page&nbsp;&nbsp;YAHOO.util.Get.script(&nbsp;&nbsp;["http://yui.yahooapis.com/2.7.0/build/dragdrop/dragdrop-min.js",&nbsp;&nbsp;&nbsp;"http://yui.yahooapis.com/2.7.0/build/animation/animation-min.js"], &#123;&nbsp;&nbsp;&nbsp;&nbsp;onSuccess: function(o) &#123;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YAHOO.log(o.data); // foo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new YAHOO.util.DDProxy("dd1"); // also new o.reference("dd1"); would work&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.log("won't cause error because YAHOO is the scope");&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.log(o.nodes.length === 2) // true&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// o.purge(); // optionally remove the script nodes immediately&nbsp;&nbsp;&nbsp;&nbsp;&#125;,&nbsp;&nbsp;&nbsp;&nbsp;onFailure: function(o) &#123;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YAHOO.log("transaction failed");&nbsp;&nbsp;&nbsp;&nbsp;&#125;,&nbsp;&nbsp;&nbsp;&nbsp;data: "foo",&nbsp;&nbsp;&nbsp;&nbsp;timeout: 10000, // 10 second timeout&nbsp;&nbsp;&nbsp;&nbsp;scope: YAHOO,&nbsp;&nbsp;&nbsp;&nbsp;// win: otherframe // target another window/frame&nbsp;&nbsp;&nbsp;&nbsp;autopurge: true // allow the utility to choose when to remove the nodes&nbsp;&nbsp;&#125;);</param>
};
YAHOO.util.Get.prototype._finish = function(id) {
   /// <summary> The request is complete, so executing the requester's callback </summary>
   /// <private />
 /// <param name="id" type="string">  the id of the request</param>
};
YAHOO.util.Get.prototype._linkNode = function(url, win) {
   /// <summary> Generates a link node </summary>
   /// <private />
   /// <returns type="HTMLElement" />
 /// <param name="url" type="string">  the url for the css file</param>
 /// <param name="win" type="Window">  optional window to create the node in</param>
};
YAHOO.util.Get.prototype._returnData = function() {
   /// <summary> Returns the data payload for callback functions </summary>
   /// <private />
};
YAHOO.util.Get.prototype._scriptNode = function(url, win) {
   /// <summary> Generates a script node </summary>
   /// <private />
   /// <returns type="HTMLElement" />
 /// <param name="url" type="string">  the url for the script file</param>
 /// <param name="win" type="Window">  optional window to create the node in</param>
};
YAHOO.util.Get.prototype.queue = function(type, url, opts) {
   /// <summary> Saves the state for the request and begins loadingthe requested urls </summary>
   /// <private />
 /// <param name="type" type="string">  the type of node to insert</param>
 /// <param name="url" type="string">  the url to load</param>
 /// <param name="opts" type=""> the hash of options for this request</param>
};
YAHOO.util.Get.prototype._autoPurge = function() {
   /// <summary> Removes processed queues and corresponding nodes </summary>
   /// <private />
};
YAHOO.util.Get.prototype._node = function(type, attr, win) {
   /// <summary> Generates an HTML element, this is not appended to a document </summary>
   /// <private />
   /// <returns type="HTMLElement" />
 /// <param name="type" type="string">  the type of element</param>
 /// <param name="attr" type="string">  the attributes</param>
 /// <param name="win" type="Window">  optional window to create the element in</param>
};
YAHOO.util.Get.prototype.abort = function(either) {
   /// <summary> Abort a transaction </summary>
 /// <param name="either" type="string|object"> the tId or the object returned fromscript() or css()</param>
};
YAHOO.util.Get.prototype._next = function(id, loaded) {
   /// <summary> Loads the next item for a given request </summary>
   /// <private />
 /// <param name="id" type="string">  the id of the request</param>
 /// <param name="loaded" type="string">  the url that was just loaded, if any</param>
};
YAHOO.util.Get.prototype._timeout = function(id) {
   /// <summary> Timeout detected </summary>
   /// <private />
 /// <param name="id" type="string">  the id of the request</param>
};
YAHOO.util.Get.prototype._track = function(type, n, id, url, win, qlength, trackfn) {
   /// <summary> Detects when a node has been loaded.  In the case ofscript nodes, this does not guarantee that containedscript is ready to use. </summary>
   /// <private />
 /// <param name="type" type="string">  the type of node to track</param>
 /// <param name="n" type="HTMLElement">  the node to track</param>
 /// <param name="id" type="string">  the id of the request</param>
 /// <param name="url" type="string">  the url that is being loaded</param>
 /// <param name="win" type="Window">  the targeted window</param>
 /// <param name="qlength" type=""> the number of remaining items in the queue,including this one</param>
 /// <param name="trackfn" type="Function">  function to execute when finishedthe default is _next</param>
};
YAHOO.util.Get.css = function(url, opts) {
   /// <summary> Fetches and inserts one or more css link nodes into the head of the current document or the document in a specifiedwindow. </summary>
   /// <returns type="tId: string" />
 /// <param name="url" type="string">  the url or urls to the css file(s)</param>
 /// <param name="opts" type=""> Options: onSuccesscallback to execute when the css file(s) are finished loadingThe callback receives an object back with the followingdata:winthe window the link nodes(s) were inserted intodatathe data object passed in when the request was madenodesAn array containing references to the nodes that wereinsertedpurgeA function that, when executed, will remove the nodesthat were insertedscopethe execution context for the callbackswina window other than the one the utility occupiesdatadata that is supplied to the callbacks when the nodes(s) areloaded.insertBeforenode or node id that will become the new node's nextSiblingcharsetNode charset, deprecated, use 'attributes'attributesA hash of attributes to apply to dynamic nodes.YAHOO.util.Get.css("http://yui.yahooapis.com/2.7.0/build/menu/assets/skins/sam/menu.css");YAHOO.util.Get.css(["http://yui.yahooapis.com/2.7.0/build/menu/assets/skins/sam/menu.css","http://yui.yahooapis.com/2.7.0/build/logger/assets/skins/sam/logger.css"]);</param>
};
YAHOO.util.History.prototype.getBookmarkedState = function(module) {
   /// <summary> Returns the state of a module according to the URL fragmentidentifier. This method is useful to initialize your modulesif your application was bookmarked from a particular state. </summary>
   /// <returns type="string" />
 /// <param name="module" type="string"> Non-empty string representing your module.</param>
};
YAHOO.util.History.prototype.getCurrentState = function(module) {
   /// <summary> Returns the current state of the specified module. </summary>
   /// <returns type="string" />
 /// <param name="module" type="string"> Non-empty string representing your module.</param>
};
YAHOO.util.History.prototype._handleFQStateChange = function(fqstate) {
   /// <summary> Sets the new currentState attribute of all modules depending on the newfully qualified state. Also notifies the modules which current state haschanged. </summary>
   /// <private />
 /// <param name="fqstate" type="string"> Fully qualified state</param>
};
YAHOO.util.History.prototype.onReady = function(fn, obj, overrideContext) {
   /// <summary> Executes the supplied callback when the Browser History Manager isready. This will execute immediately if called after the BrowserHistory Manager onLoad event has fired. </summary>
 /// <param name="fn" type="function"> what to execute when the Browser History Manager is ready.</param>
 /// <param name="obj" type="object"> an optional object to be passed back as a parameter to fn.</param>
 /// <param name="overrideContext" type="boolean|object"> If true, the obj passed in becomes fn's execution scope.</param>
};
YAHOO.util.History.prototype.navigate = function(module, state) {
   /// <summary> Call this method when you want to store a new entry in the browser's history. </summary>
   /// <returns type="boolean" />
 /// <param name="module" type="string"> Non-empty string representing your module.</param>
 /// <param name="state" type="string"> String representing the new state of the specified module.</param>
};
YAHOO.util.History.prototype._initialize = function() {
   /// <summary> Finish up the initialization of the Browser History Manager. </summary>
   /// <private />
};
YAHOO.util.History.prototype.register = function(module, initialState, onStateChange, obj, overrideContext) {
   /// <summary> Registers a new module. </summary>
 /// <param name="module" type="string"> Non-empty string uniquely identifying themodule you wish to register.</param>
 /// <param name="initialState" type="string"> The initial state of the specifiedmodule corresponding to its earliest history entry.</param>
 /// <param name="onStateChange" type="function"> Callback called when thestate of the specified module has changed.</param>
 /// <param name="obj" type="object"> An arbitrary object that will be passed as aparameter to the handler.</param>
 /// <param name="overrideContext" type="boolean"> If true, the obj passed in becomes theexecution scope of the listener.</param>
};
YAHOO.util.History.prototype._updateIFrame = function() {
   /// <summary> Update the IFrame with our new state. </summary>
   /// <private />
   /// <returns type="boolean" />
};
YAHOO.util.History.prototype._checkIframeLoaded = function() {
   /// <summary> Periodically checks whether our internal IFrame is ready to be used. </summary>
   /// <private />
};
YAHOO.util.History.prototype.initialize = function(stateField, histFrame) {
   /// <summary> Initializes the Browser History Manager. Call this methodfrom a script block located right after the opening body tag. </summary>
 /// <param name="stateField" type="string|HTML Element">  usedto store application states. Must be in the static markup.</param>
 /// <param name="histFrame" type="string|HTML Element"> IFrame used to storethe history (only required on Internet Explorer)</param>
};
YAHOO.util.History.prototype._storeStates = function() {
   /// <summary> Stores all the registered modules' initial state and current state.On Safari, we also store all the fully qualified states visited bythe application within a single browser session. The storage takesplace in the form field specified during initialization. </summary>
   /// <private />
};
YAHOO.util.History.prototype.getQueryStringParameter = function(paramName, queryString) {
   /// <summary> Returns the value of the specified query string parameter.This method is not used internally by the Browser History Manager.However, it is provided here as a helper since many applicationsusing the Browser History Manager will want to read the value ofurl parameters to initialize themselves. </summary>
   /// <returns type="string" />
 /// <param name="paramName" type="string"> Name of the parameter we want to look up.</param>
 /// <param name="queryString" type="string"> Optional URL to look at. If not specified,this method uses the URL in the address bar.</param>
};
YAHOO.util.History.prototype._getHash = function() {
   /// <summary> location.hash is a bit buggy on Opera. I have seen instances wherenavigating the history using the back/forward buttons, and hencechanging the URL, would not change location.hash. That's ok, theimplementation of an equivalent is trivial. </summary>
   /// <private />
   /// <returns type="string" />
};
YAHOO.util.History.prototype.multiNavigate = function(states) {
   /// <summary> Call this method when you want to store a new entry in the browser's history. </summary>
   /// <returns type="boolean" />
 /// <param name="states" type="object"> Associative array of module-state pairs to set simultaneously.</param>
};
YAHOO.util.ImageLoader.bgImgObj.prototype._applyUrl = function(el) {
   /// <summary> Inserts the image URL into the DOM so that the image is displayed.Sets style.backgroundImage </summary>
   /// <private />
 /// <param name="el" type="Object"> HTML DOM element</param>
};
YAHOO.util.ImageLoader.group.prototype.registerBgImage = function(domId, url) {
   /// <summary> Registers a background image with the group </summary>
   /// <returns type="Object" />
 /// <param name="domId" type="String"> HTML DOM id of the image element</param>
 /// <param name="url" type="String"> URL for the image</param>
};
YAHOO.util.ImageLoader.group.prototype.addCustomTrigger = function(event) {
   /// <summary> Adds a custom event trigger to the group. </summary>
 /// <param name="event" type="Object"> A YAHOO.util.CustomEvent object</param>
};
YAHOO.util.ImageLoader.group.prototype.addTrigger = function(trigEl, trigAct) {
   /// <summary> Adds a trigger to the group. Call this with the same style as YAHOO.util.Event.addListener </summary>
 /// <param name="trigEl" type="String|HTMLElement">  The HTML element id or reference to assign the trigger event to</param>
 /// <param name="trigAct" type="String"> The type of event to assign to trigEl</param>
};
YAHOO.util.ImageLoader.group.prototype._getFetchTimeout = function() {
   /// <summary> Returns the group's fetch method, with the proper closure, for use with setTimeout </summary>
   /// <private />
   /// <returns type="Function" />
};
YAHOO.util.ImageLoader.group.prototype.registerSrcImage = function(domId, url, width, height) {
   /// <summary> Registers a src image with the group </summary>
   /// <returns type="Object" />
 /// <param name="domId" type="String"> HTML DOM id of the image element</param>
 /// <param name="url" type="String"> URL for the image</param>
 /// <param name="width" type="Int"> pixel width of the image - defaults to image's natural size</param>
 /// <param name="height" type="Int"> pixel height of the image - defaults to image's natural size</param>
};
YAHOO.util.ImageLoader.group.prototype.registerPngBgImage = function(domId, url, ailProps) {
   /// <summary> Registers an alpha-channel-type png background image with the group </summary>
   /// <returns type="Object" />
 /// <param name="domId" type="String"> HTML DOM id of the image element</param>
 /// <param name="url" type="String"> URL for the image</param>
 /// <param name="ailProps" type="Object"> The AlphaImageLoader properties to be set for the imageValid properties are 'sizingMethod' and 'enabled'</param>
};
YAHOO.util.ImageLoader.group.prototype._onloadTasks = function() {
   /// <summary> Setup to do in the window's onloadInitiates time limit for group; executes the fold check for the images </summary>
   /// <private />
};
YAHOO.util.ImageLoader.group.prototype._foldCheck = function() {
   /// <summary> Checks the position of each image in the group. If any part of the image is within the client viewport, shows the image immediately. </summary>
   /// <private />
};
YAHOO.util.ImageLoader.group.prototype.fetch = function() {
   /// <summary> Displays the images in the group </summary>
};
YAHOO.util.ImageLoader.group.prototype._fetchByClass = function() {
   /// <summary> Finds all elements in the Dom with the class name specified in the group. Removes the class from the element in order to let the style definitions trigger the image fetching </summary>
   /// <private />
};
YAHOO.util.ImageLoader.imgObj.prototype.fetch = function() {
   /// <summary> Displays the image; puts the URL into the DOM </summary>
};
YAHOO.util.ImageLoader.imgObj.prototype._applyUrl = function(el) {
   /// <summary> Inserts the image URL into the DOM so that the image is displayed.Must be overridden by child class </summary>
   /// <private />
 /// <param name="el" type="Object"> HTML DOM element</param>
};
YAHOO.util.ImageLoader.pngBgImgObj.prototype._applyUrl = function(el) {
   /// <summary> Inserts the image URL into the DOM so that the image is displayed.If the browser is determined to be IE6 (or older), sets the AlphaImageLoader src; otherwise sets style.backgroundImage </summary>
   /// <private />
 /// <param name="el" type="Object"> HTML DOM element</param>
};
YAHOO.util.ImageLoader.srcImgObj.prototype._applyUrl = function(el) {
   /// <summary> Inserts the image URL into the DOM so that the image is displayed.Sets src </summary>
   /// <private />
 /// <param name="el" type="Object"> HTML DOM element</param>
};
YAHOO.util.KeyListener.prototype.handleKeyPress = function(e, obj) {
   /// <summary> Handles the key event when a key is pressed. </summary>
   /// <private />
 /// <param name="e" type="DOMEvent">   The keypress DOM event</param>
 /// <param name="obj" type="Object"> The DOM event scope object</param>
};
YAHOO.util.KeyListener.prototype.enable = function() {
   /// <summary> Enables the KeyListener by attaching the DOM event listeners to the target DOM element </summary>
};
YAHOO.util.KeyListener.prototype.toString = function() {
   /// <summary> Returns a String representation of the object. </summary>
   /// <returns type="String" />
};
YAHOO.util.KeyListener.prototype.disable = function() {
   /// <summary> Disables the KeyListener by removing the DOM event listeners from the target DOM element </summary>
};
YAHOO.util.Number.format = function(nData, oConfig) {
   /// <summary> Takes a native JavaScript Number and formats to string for display to user. </summary>
   /// <returns type="String" />
 /// <param name="nData" type="Number">  Number.</param>
 /// <param name="oConfig" type="Object} (Optional) Optional configuration values:prefix {String}String prepended before each number, like a currency designator "$"decimalPlaces {Number}Number of decimal places to round.decimalSeparator {String}Decimal separatorthousandsSeparator {String}Thousands separatorsuffix {String"> String appended after each number, like " items" (note the space)negativeFormatString used as a guide for how to indicate negative numbers.  The first '#' character in the string will be replaced by the number.  Default '-#'.</param>
};
YAHOO.util.ObjectAssert.hasProperty = function(propertyName, object, message) {
   /// <summary> Asserts that an object has a property with the given name. </summary>
 /// <param name="propertyName" type="String"> The name of the property to test.</param>
 /// <param name="object" type="Object"> The object to search.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.ObjectAssert.propertiesAreEqual = function(expected, actual, message) {
   /// <summary> Asserts that all properties in the object exist in another object. </summary>
 /// <param name="expected" type="Object"> An object with the expected properties.</param>
 /// <param name="actual" type="Object"> An object with the actual properties.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YAHOO.util.Region.prototype.getArea = function() {
   /// <summary> Returns the area of the region </summary>
   /// <returns type="Int" />
};
YAHOO.util.Region.getRegion = function(el) {
   /// <summary> Returns a region that is occupied by the DOM element </summary>
   /// <returns type="Region" />
 /// <param name="el" type="HTMLElement"> The element</param>
};
YAHOO.util.Region.prototype.contains = function(region) {
   /// <summary> Returns true if this region contains the region passed in </summary>
   /// <returns type="Boolean" />
 /// <param name="region" type="Region"> The region to evaluate</param>
};
YAHOO.util.Region.prototype.union = function(region) {
   /// <summary> Returns the region representing the smallest region that can contain boththe passed in region and this region. </summary>
   /// <returns type="Region" />
 /// <param name="region" type="Region"> The region that to create the union with</param>
};
YAHOO.util.Region.prototype.toString = function() {
   /// <summary> toString </summary>
   /// <returns type="" />
};
YAHOO.util.Region.prototype.intersect = function(region) {
   /// <summary> Returns the region where the passed in region overlaps with this one </summary>
   /// <returns type="Region" />
 /// <param name="region" type="Region"> The region that intersects</param>
};
YAHOO.util.Resize.prototype._handle_for_bl = function(args) {
   /// <summary> Handles the sizes for the Bottom Left handle. </summary>
   /// <private />
 /// <param name="args" type="Object"> The arguments from the CustomEvent.</param>
};
YAHOO.util.Resize.prototype._setHeight = function(ev, flip) {
   /// <summary> Calculated the height based on the mouse event. </summary>
   /// <private />
   /// <returns type="Number" />
 /// <param name="ev" type="Event"> The mouse event.</param>
 /// <param name="flip" type="Boolean"> Argument to determine the direction of the movement.</param>
};
YAHOO.util.Resize.prototype.lock = function(dd) {
   /// <summary> Lock the resize so it can't be resized </summary>
   /// <returns type="YAHOO.util.Resize" />
 /// <param name="dd" type="Boolean"> If the draggable config is set, lock it too</param>
};
YAHOO.util.Resize.prototype._handleStartDrag = function(args, dd) {
   /// <summary> Resizes the proxy, sets up the YAHOO.util.DragDrop handlers, updates the status div and preps the cache </summary>
   /// <private />
 /// <param name="args" type="Object"> The args passed from the CustomEvent.</param>
 /// <param name="dd" type="Object"> The YAHOO.util.DragDrop object we are working with.</param>
};
YAHOO.util.Resize.prototype._handle_for_t = function(args) {
   /// <summary> Handles the sizes for the Top handle. </summary>
   /// <private />
 /// <param name="args" type="Object"> The arguments from the CustomEvent.</param>
};
YAHOO.util.Resize.prototype.unlock = function(dd) {
   /// <summary> Unlock the resize so it can be resized </summary>
   /// <returns type="YAHOO.util.Resize" />
 /// <param name="dd" type="Boolean"> If the draggable config is set, unlock it too</param>
};
YAHOO.util.Resize.prototype.initAttributes = function(attr) {
   /// <summary> Initializes all of the configuration attributes used to create a resizable element. </summary>
   /// <private />
 /// <param name="attr" type="Object"> Object literal specifying a set of configuration attributes used to create the utility.</param>
};
YAHOO.util.Resize.prototype._handleMouseOver = function(ev) {
   /// <summary> Adds CSS class names to the handles </summary>
   /// <private />
 /// <param name="ev" type="Event"> A mouse event.</param>
};
YAHOO.util.Resize.prototype._handle_for_br = function(args) {
   /// <summary> Handles the sizes for the Bottom Right handle. </summary>
   /// <private />
 /// <param name="args" type="Object"> The arguments from the CustomEvent.</param>
};
YAHOO.util.Resize.getResizeById = function() {
   /// <summary> Get's a resize object by the HTML id of the element associated with the Resize object. </summary>
   /// <returns type="Object" />
};
YAHOO.util.Resize.prototype._handleMouseDown = function(ev) {
   /// <summary> This method preps the autoRatio on MouseDown. </summary>
   /// <private />
 /// <param name="ev" type="Event"> A mouse event.</param>
};
YAHOO.util.Resize.prototype._snapTick = function(size, pix) {
   /// <summary> Adjusts the number based on the ticks used. </summary>
   /// <private />
   /// <returns type="Number" />
 /// <param name="size" type="Number"> The size to tick against.</param>
 /// <param name="pix" type="Number"> The tick pixels.</param>
};
YAHOO.util.Resize.prototype._handle_for_tr = function(args) {
   /// <summary> Handles the sizes for the Top Right handle. </summary>
   /// <private />
 /// <param name="args" type="Object"> The arguments from the CustomEvent.</param>
};
YAHOO.util.Resize.prototype.isLocked = function() {
   /// <summary> Check the locked status of the resize instance </summary>
   /// <returns type="Boolean" />
};
YAHOO.util.Resize.prototype.init = function() {
   /// <summary> The Resize class's initialization method </summary>
   /// <private />
};
YAHOO.util.Resize.prototype.toString = function() {
   /// <summary> Returns a string representing the Resize Object. </summary>
   /// <returns type="String" />
};
YAHOO.util.Resize.prototype.resize = function(ev, h, w, t, l, force, silent) {
   /// <summary> Resizes the element, wrapper or proxy based on the data from the handlers. </summary>
   /// <private />
   /// <returns type="YAHOO.util.Resize" />
 /// <param name="ev" type="Event"> The mouse event.</param>
 /// <param name="h" type="Number"> The new height setting.</param>
 /// <param name="w" type="Number"> The new width setting.</param>
 /// <param name="t" type="Number"> The new top setting.</param>
 /// <param name="l" type="Number"> The new left setting.</param>
 /// <param name="force" type="Boolean"> Resize the element (used for proxy resize).</param>
 /// <param name="silent" type="Boolean"> Don't fire the beforeResize Event.</param>
};
YAHOO.util.Resize.prototype.destroy = function() {
   /// <summary> Destroys the resize object and all of it's elements & listeners. </summary>
};
YAHOO.util.Resize.prototype._handleMouseUp = function(ev) {
   /// <summary> Cleans up listeners, hides proxy element and removes class names. </summary>
   /// <private />
 /// <param name="ev" type="Event"> A mouse event.</param>
};
YAHOO.util.Resize.prototype._setAutoRatio = function(ev) {
   /// <summary> This method checks to see if the "autoRatio" config is set. If it is, we will check to see if the "Shift Key" is pressed. If so, we will set the config ratio to true. </summary>
   /// <private />
 /// <param name="ev" type="Event"> A mouse event.</param>
};
YAHOO.util.Resize.prototype._ieSelectFix = function() {
   /// <summary> The function we use as the onselectstart handler when we start a drag in Internet Explorer </summary>
   /// <private />
};
YAHOO.util.Resize.prototype.reset = function() {
   /// <summary> Resets the element to is start state. </summary>
   /// <returns type="YAHOO.util.Resize" />
};
YAHOO.util.Resize.prototype._handle_for_tl = function(args) {
   /// <summary> Handles the sizes for the Top Left handle. </summary>
   /// <private />
 /// <param name="args" type="Object"> The arguments from the CustomEvent.</param>
};
YAHOO.util.Resize.prototype._createWrap = function() {
   /// <summary> Creates the wrap element if the wrap config is true. It will auto wrap the following element types: img, textarea, input, iframe, select </summary>
   /// <private />
};
YAHOO.util.Resize.prototype.getStatusEl = function() {
   /// <summary> Get the HTML reference for the status element. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.util.Resize.prototype.getWrapEl = function() {
   /// <summary> Get the HTML reference for the wrap element, returns the current element if not wrapped. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.util.Resize.prototype._setupDragDrop = function() {
   /// <summary> Setup the YAHOO.util.DragDrop instance on the element </summary>
   /// <private />
};
YAHOO.util.Resize.prototype._setCache = function() {
   /// <summary> Sets up the this._cache hash table. </summary>
   /// <private />
};
YAHOO.util.Resize.prototype._createHandles = function() {
   /// <summary> Creates the handles as specified in the config </summary>
   /// <private />
};
YAHOO.util.Resize.prototype._createProxy = function() {
   /// <summary> Creates the proxy element if the proxy config is true </summary>
   /// <private />
};
YAHOO.util.Resize.prototype._checkWidth = function(w) {
   /// <summary> Checks the value passed against the maxWidth and minWidth. </summary>
   /// <private />
   /// <returns type="Number" />
 /// <param name="w" type="Number"> The width to check.</param>
};
YAHOO.util.Resize.prototype._setRatio = function(h, w, t, l) {
   /// <summary> Using the Height, Width, Top & Left, it recalcuates them based on the original element size. </summary>
   /// <private />
   /// <returns type="Array" />
 /// <param name="h" type="Number"> The height offset.</param>
 /// <param name="w" type="Number"> The with offset.</param>
 /// <param name="t" type="Number"> The top offset.</param>
 /// <param name="l" type="Number"> The left offset.</param>
};
YAHOO.util.Resize.prototype._setWidth = function(ev, flip) {
   /// <summary> Calculates the width based on the mouse event. </summary>
   /// <private />
   /// <returns type="Number" />
 /// <param name="ev" type="Event"> The mouse event.</param>
 /// <param name="flip" type="Boolean"> Argument to determine the direction of the movement.</param>
};
YAHOO.util.Resize.prototype._checkHeight = function(h) {
   /// <summary> Checks the value passed against the maxHeight and minHeight. </summary>
   /// <private />
   /// <returns type="Number" />
 /// <param name="h" type="Number"> The height to check.</param>
};
YAHOO.util.Resize.prototype.getActiveHandleEl = function() {
   /// <summary> Get the HTML reference for the currently active resize handle. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.util.Resize.prototype._handle_for_r = function(args) {
   /// <summary> Handles the sizes for the Right handle. </summary>
   /// <private />
 /// <param name="args" type="Object"> The arguments from the CustomEvent.</param>
};
YAHOO.util.Resize.prototype.getProxyEl = function() {
   /// <summary> Get the HTML reference for the proxy, returns null if no proxy. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.util.Resize.prototype._updateStatus = function(h, w, t, l) {
   /// <summary> Using the Height, Width, Top & Left, it updates the status element with the elements sizes. </summary>
   /// <private />
 /// <param name="h" type="Number"> The new height setting.</param>
 /// <param name="w" type="Number"> The new width setting.</param>
 /// <param name="t" type="Number"> The new top setting.</param>
 /// <param name="l" type="Number"> The new left setting.</param>
};
YAHOO.util.Resize.prototype.isActive = function() {
   /// <summary> Returns true or false if a resize operation is currently active on the element. </summary>
   /// <returns type="Boolean" />
};
YAHOO.util.Resize.prototype._handle_for_l = function(args) {
   /// <summary> Handles the sizes for the Left handle. </summary>
   /// <private />
 /// <param name="args" type="Object"> The arguments from the CustomEvent.</param>
};
YAHOO.util.Resize.prototype._handleMouseOut = function(ev) {
   /// <summary> Removes CSS class names to the handles </summary>
   /// <private />
 /// <param name="ev" type="Event"> A mouse event.</param>
};
YAHOO.util.Resize.prototype._handle_for_b = function(args) {
   /// <summary> Handles the sizes for the Bottom handle. </summary>
   /// <private />
 /// <param name="args" type="Object"> The arguments from the CustomEvent.</param>
};
YAHOO.util.SWFStore.prototype.setUseCompression = function(Whether) {
   /// <summary> Public accessor to the unique name of the SWFStore instance. </summary>
 /// <param name="Whether" type="Boolean"> or to compress stored data</param>
};
YAHOO.util.SWFStore.prototype.on = function(type, listener) {
   /// <summary> Method to attach listeners to events </summary>
 /// <param name="type" type="String">  The tyep of event to listen for</param>
 /// <param name="listener" type="String">  The function to call</param>
};
YAHOO.util.SWFStore.prototype.addListener = function(type, listener) {
   /// <summary> Method to attach listeners to events </summary>
 /// <param name="type" type="String">  The tyep of event to listen for</param>
 /// <param name="listener" type="String">  The function to call</param>
};
YAHOO.util.SWFStore.prototype.calculateCurrentSize = function() {
   /// <summary> Gets the current size, in KB, of the amount of space taken by the current store.Note that this is calculated, and may take time depending on the number of items stored </summary>
   /// <returns type="Number" />
};
YAHOO.util.SWFStore.prototype.displaySettings = function() {
   /// <summary> Displays the settings dialog to allow the user to configurestorage settings manually. If the SWF height and width are smaller thanwhat is allowable to display the local settings panel,an openExternalDialog message will be sent to JavaScript. </summary>
};
YAHOO.util.SWFStore.prototype.hasAdequateDimensions = function() {
   /// <summary> Determines if SWF's visible area is large enough to fit the settings panel </summary>
   /// <returns type="Boolean" />
};
YAHOO.util.SWFStore.prototype.getLength = function() {
   /// <summary> Returns the number of items in storage, if any. </summary>
   /// <returns type="Number" />
};
YAHOO.util.SWFStore.prototype.clear = function() {
   /// <summary> Removes all data in local storage for this domain.Be careful when using this method, as it may remove stored information that is used by other applicationsin this domain  </summary>
};
YAHOO.util.SWFStore.prototype.getValueAt = function(index) {
   /// <summary> Returns the value of the store at the specified index, if any. </summary>
   /// <returns type="Object" />
 /// <param name="index" type="Number">  The index of the stored item</param>
};
YAHOO.util.SWFStore.prototype.getTypeOf = function(location) {
   /// <summary> Returns the data type of of the storage.May be one of the following types:booleanfunctionnumberobjectstringnumberxml </summary>
   /// <returns type="String" />
 /// <param name="location" type="String">  The name of the "cookie" or store</param>
};
YAHOO.util.SWFStore.prototype.setShareData = function(Whether) {
   /// <summary> Public accessor to the unique name of the SWFStore instance. </summary>
 /// <param name="Whether" type="Boolean"> or not to share among browsers</param>
};
YAHOO.util.SWFStore.prototype.getValueOf = function(location) {
   /// <summary> Returns the value of the item in storage, if any. </summary>
   /// <returns type="Object" />
 /// <param name="location" type="String">  The name of the "cookie" or store</param>
};
YAHOO.util.SWFStore.prototype.getItems = function() {
   /// <summary> Returns the items in storage as an array. </summary>
   /// <returns type="Object" />
};
YAHOO.util.SWFStore.prototype.getTypeAt = function(location) {
   /// <summary> Returns the data type of of the storage.May be one of the following types:booleanfunctionnumberobjectstringnumberxml </summary>
   /// <returns type="String" />
 /// <param name="location" type="Number">  The index of the "cookie" or store</param>
};
YAHOO.util.SWFStore.prototype.toString = function() {
   /// <summary> Public accessor to the unique name of the SWFStore instance. </summary>
   /// <returns type="String" />
};
YAHOO.util.SWFStore.prototype.getUseCompression = function() {
   /// <summary> Public accessor to the unique name of the SWFStore instance. </summary>
   /// <returns type="Boolean" />
};
YAHOO.util.SWFStore.prototype.setItem = function(data, location) {
   /// <summary> Saves data to local storage. It returns a String that canbe one of three values: "true" if the storage succeeded; "false" if the userhas denied storage on their machine, and "pending" if storage is permitted,but the storage space allotted is not sufficient.The size limit for the passed parameters is ~40Kb. </summary>
   /// <returns type="Boolean" />
 /// <param name="data" type="Object">  The data to store</param>
 /// <param name="location" type="String">  The name of the "cookie" or store</param>
};
YAHOO.util.SWFStore.prototype.removeItem = function(location) {
   /// <summary> Removes the item in storage, if any. </summary>
 /// <param name="location" type="String">  The name of the "cookie" or store</param>
};
YAHOO.util.SWFStore.prototype.getShareData = function() {
   /// <summary> Public accessor to the unique name of the SWFStore instance. </summary>
   /// <returns type="Boolean" />
};
YAHOO.util.SWFStore.prototype.setSize = function(value) {
   /// <summary> This method requests more storage (if the amount is above 100KB or the current setting).The request dialog has to be displayed within the Flash player itselfso the SWF it is called from must be visible and at least 215px x 138px (w x h) in size. </summary>
   /// <returns type="String" />
 /// <param name="value" type="Number">  The size, in KB</param>
};
YAHOO.util.SWFStore.prototype.getModificationDate = function() {
   /// <summary> Gets the timestamp of the last store. This value is automatically set when data is stored. </summary>
   /// <returns type="Date" />
};
YAHOO.util.ScriptNodeDataSource.prototype.doBeforeGetScriptNode = function(URI) {
   /// <summary> Overridable method gives implementers access to modify the URI before the dynamicscript node gets inserted. Implementers should take care not to return aninvalid URI. </summary>
   /// <returns type="String" />
 /// <param name="URI" type="String"> to the script</param>
};
YAHOO.util.ScriptNodeDataSource.prototype.makeConnection = function(oRequest, oCallback, oCaller) {
   /// <summary> Overriding method passes query to Get Utility. The returnedresponse is then forwarded to the handleResponse function. </summary>
   /// <returns type="Number" />
 /// <param name="oRequest" type="Object">  Request object.</param>
 /// <param name="oCallback" type="Object">  Callback object literal.</param>
 /// <param name="oCaller" type="Object">  (deprecated) Use oCallback.scope.</param>
};
YAHOO.util.ScriptNodeDataSource.prototype.generateRequestCallback = function() {
   /// <summary> Creates a request callback that gets appended to the script URI. Implementerscan customize this string to match their server's query syntax. </summary>
   /// <returns type="String" />
};
YAHOO.util.Selector.test = function(node, selector) {
   /// <summary> Test if the supplied node matches the supplied selector. </summary>
   /// <returns type="boolean" />
 /// <param name="node" type="HTMLElement | String"> An id or node reference to the HTMLElement being tested.</param>
 /// <param name="selector" type="string"> The CSS Selector to test the node against.</param>
};
YAHOO.util.Selector.filter = function(nodes, selector) {
   /// <summary> Filters a set of nodes based on a given CSS selector. </summary>
   /// <returns type="array" />
 /// <param name="nodes" type="array"> A set of nodes/ids to filter.</param>
 /// <param name="selector" type="string"> The selector used to test each node.</param>
};
YAHOO.util.Selector._tokenize = function() {
   /// <summary> Break selector into token units per simple selector.Combinator is attached to left-hand selector. </summary>
};
YAHOO.util.Selector.query = function(selector, root, firstOnly) {
   /// <summary> Retrieves a set of nodes based on a given CSS selector. </summary>
   /// <returns type="Array" />
 /// <param name="selector" type="string"> The CSS Selector to test the node against.</param>
 /// <param name="root" type="HTMLElement | String"> optional An id or HTMLElement to start the query from. Defaults to Selector.document.</param>
 /// <param name="firstOnly" type="Boolean"> optional Whether or not to return only the first match.</param>
};
YAHOO.util.Sort.compare = function(a, b, desc) {
   /// <summary> Comparator function for simple case-insensitive string sorting. </summary>
 /// <param name="a" type="Object">  First sort argument.</param>
 /// <param name="b" type="Object">  Second sort argument.</param>
 /// <param name="desc" type="Boolean">  True if sort direction is descending, false ifsort direction is ascending.</param>
};
YAHOO.util.Storage.prototype.key = function(index) {
   /// <summary> Retrieve the key stored at the provided index; should be overwritten by storage engine. </summary>
   /// <returns type="String" />
 /// <param name="index" type="Number">  Required. The index to retrieve (unsigned long in HTML 5 spec).</param>
};
YAHOO.util.Storage.prototype._clear = function() {
   /// <summary> Implementation of the clear login; should be overwritten by storage engine. </summary>
};
YAHOO.util.Storage.prototype.clear = function() {
   /// <summary> Clears any existing key/value pairs. </summary>
};
YAHOO.util.Storage.prototype.setItem = function(key) {
   /// <summary> Remove an item from the data storage. </summary>
 /// <param name="key" type="String">  Required. The key to remove (DOMString in HTML 5 spec).</param>
};
YAHOO.util.Storage.prototype._getItem = function(key) {
   /// <summary> Implementation of the getItem login; should be overwritten by storage engine. </summary>
   /// <returns type="String|NULL" />
 /// <param name="key" type="String">  Required. The key used to reference this value.</param>
};
YAHOO.util.Storage.prototype._key = function(index) {
   /// <summary> Implementation of the key logic; should be overwritten by storage engine. </summary>
   /// <returns type="String|NULL" />
 /// <param name="index" type="Number">  Required. The index to retrieve (unsigned long in HTML 5 spec).</param>
};
YAHOO.util.Storage.prototype._createValue = function(s) {
   /// <summary> Converts the object into a string, with meta data (type), so it can be restored later. </summary>
 /// <param name="s" type="Object">  Required. An object to store.</param>
};
YAHOO.util.Storage.prototype._getValue = function(s) {
   /// <summary> Converts the stored value into its appropriate type. </summary>
 /// <param name="s" type="String">  Required. The stored value.</param>
};
YAHOO.util.Storage.prototype.getItem = function(key) {
   /// <summary> Fetches the data stored and the provided key. </summary>
   /// <returns type="String|NULL" />
 /// <param name="key" type="String">  Required. The key used to reference this value (DOMString in HTML 5 spec).</param>
};
YAHOO.util.Storage.prototype._removeItem = function(key) {
   /// <summary> Implementation of the removeItem login; should be overwritten by storage engine. </summary>
 /// <param name="key" type="String">  Required. The key to remove.</param>
};
YAHOO.util.Storage.prototype.hasKey = function(key) {
   /// <summary> Tests if the key has been set (not in HTML 5 spec); should be overwritten by storage engine. </summary>
   /// <returns type="Boolean" />
 /// <param name="key" type="String">  Required. The key to search for.</param>
};
YAHOO.util.Storage.prototype._setItem = function(key, data) {
   /// <summary> Implementation of the setItem login; should be overwritten by storage engine. </summary>
   /// <returns type="Boolean" />
 /// <param name="key" type="String">  Required. The key used to reference this value.</param>
 /// <param name="data" type="Object">  Required. The data to storage at key.</param>
};
YAHOO.util.Storage.prototype.getName = function() {
   /// <summary> Fetches the storage object's name; should be overwritten by storage engine. </summary>
   /// <returns type="String" />
};
YAHOO.util.StorageEngineKeyed.prototype._indexOfKey = function(key) {
   /// <summary> Evaluates if a key exists in the keys array; indexOf does not work in all flavors of IE. </summary>
 /// <param name="key" type="String">  Required. The key to evaluate.</param>
};
YAHOO.util.StorageEngineKeyed.prototype._addKey = function(key) {
   /// <summary> Adds the key to the set. </summary>
 /// <param name="key" type="String">  Required. The key to evaluate.</param>
};
YAHOO.util.StorageEngineKeyed.prototype._removeKey = function(key) {
   /// <summary> Removes a key from the keys array. </summary>
 /// <param name="key" type="String">  Required. The key to remove.</param>
};
YAHOO.util.StorageManager._getStorageEngine = function(location, klass, conf) {
   /// <summary> Fetches the storage engine from the cache, or creates and caches it. </summary>
   /// <private />
 /// <param name="location" type="String">  Required. The location to store.</param>
 /// <param name="klass" type="Function">  Required. A pointer to the engineType Class.</param>
 /// <param name="conf" type="Object">  Optional. Additional configuration for the data source engine.</param>
};
YAHOO.util.StorageManager._getClass = function(klass) {
   /// <summary> Fetches a storage constructor if it is available, otherwise returns NULL. </summary>
   /// <private />
   /// <returns type="Function" />
 /// <param name="klass" type="Function">  Required. The storage constructor to test.</param>
};
YAHOO.util.StorageManager.register = function(engineConstructor) {
   /// <summary> Registers a engineType Class with the StorageManager singleton; first in is the first out. </summary>
   /// <returns type="Boolean" />
 /// <param name="engineConstructor" type="Function">  Required. The engine constructor function, see engines.</param>
};
YAHOO.util.StorageManager._getValidLocation = function(location) {
   /// <summary> Ensures that the location is valid before returning it or a default value. </summary>
   /// <private />
 /// <param name="location" type="String">  Required. The location to evaluate.</param>
};
YAHOO.util.StorageManager["get"] = function(engineType, location, conf) {
   /// <summary> Fetches the desired engine type or first available engine type. </summary>
 /// <param name="engineType" type="String">  Optional. The engine type, see engines.</param>
 /// <param name="location" type="String">  Optional. The storage location - LOCATION_SESSION & LOCATION_LOCAL; default is LOCAL.</param>
 /// <param name="conf" type="Object} Optional. Additional configuration for the getting the storage engine.{engine: {Object} configuration parameters for the desired engineorder: {Array} an array of storage engine names; the desired order to try engines}"></param>
};
YAHOO.util.StyleSheet.prototype.enable = function() {
   /// <summary> Enable all the rules in the sheet </summary>
   /// <returns type="StyleSheet" />
};
YAHOO.util.StyleSheet.prototype["set"] = function(sel, css) {
   /// <summary> Set style properties for a provided selector string.If the selector includes commas, it will be split into individualselectors and applied accordingly.  If the selector string does nothave a corresponding rule in the sheet, it will be added.The second parameter can be either a string of CSS text,formatted as CSS ("font-size: 10px;"), or an object collection ofproperties and their new values.  Object properties must be inJavaScript format ({ fontSize: "10px" }).The float style property will be set by any of &quot;float&quot;,&quot;styleFloat&quot;, or &quot;cssFloat&quot; if passed in theobject map.  Use "float: left;" format when passing a CSS textstring. </summary>
   /// <returns type="StyleSheet" />
 /// <param name="sel" type="String">  the selector string to apply the changes to</param>
 /// <param name="css" type="Object|String">  Object literal of style properties andnew values, or a string of cssText</param>
};
YAHOO.util.StyleSheetisValidSelector = function(sel) {
   /// <summary> Determines if a selector string is safe to use.  Used internallyin set to prevent IE from locking up when attempting to add a rule for a&quot;bad selector&quot;.Bad selectors are considered to be any string containing unescaped`~!@$%^&()+=|{}[];'"? </summary>
   /// <returns type="Boolean" />
 /// <param name="sel" type="String">  the selector string</param>
};
YAHOO.util.StyleSheet.prototype.isEnabled = function() {
   /// <summary> Returns boolean indicating whether the StyleSheet is enabled </summary>
   /// <returns type="Boolean" />
};
YAHOO.util.StyleSheet.prototype.getId = function() {
   /// <summary> Get the unique yuiSSID for this StyleSheet instance </summary>
   /// <returns type="Number" />
};
YAHOO.util.StyleSheet.prototype.disable = function() {
   /// <summary> Disable all the rules in the sheet.  Rules may be changed while theStyleSheet is disabled. </summary>
   /// <returns type="StyleSheet" />
};
YAHOO.util.StyleSheet.prototype.unset = function(sel, css) {
   /// <summary> Unset style properties for a provided selector string, removingtheir effect from the style cascade.If the selector includes commas, it will be split into individualselectors and applied accordingly.  If there are no propertiesremaining in the rule after unsetting, the rule is removed.The style property or properties in the second parameter must be theJavaScript style property names. E.g. fontSize rather than font-size.The float style property will be unset by any of &quot;float&quot;,&quot;styleFloat&quot;, or &quot;cssFloat&quot;. </summary>
   /// <returns type="StyleSheet" />
 /// <param name="sel" type="String">  the selector string to apply the changes to</param>
 /// <param name="css" type="String|Array">  style property name or Array of names</param>
};
YAHOO.util.StyleSheetregister = function(name, sheet) {
   /// <summary> Registers a StyleSheet instance in the static registry by the given name </summary>
   /// <returns type="Boolean" />
 /// <param name="name" type="String">  the name to assign the StyleSheet in the registry</param>
 /// <param name="sheet" type="StyleSheet">  The StyleSheet instance</param>
};
YAHOO.util.StyleSheet.prototype.getCssText = function(sel) {
   /// <summary> Get the current cssText for a rule or the entire sheet.  If theselector param is supplied, only the cssText for that rule will bereturned, if found.  If the selector string targets multipleselectors separated by commas, the cssText of the first rule onlywill be returned.  If no selector string, the stylesheet's fullcssText will be returned. </summary>
   /// <returns type="String" />
 /// <param name="sel" type="String">  Selector string</param>
};
YAHOO.util.StyleSheettoCssText = function(css, cssText) {
   /// <summary> Converts an object literal of style properties and values into a stringof css text.  This can then be assigned to el.style.cssText.The optional second parameter is a cssText string representing thestarting state of the style prior to alterations.  This is most oftenextracted from the eventual target's current el.style.cssText. </summary>
   /// <returns type="String" />
 /// <param name="css" type="Object">  object literal of style properties and values</param>
 /// <param name="cssText" type="String">  OPTIONAL starting cssText value</param>
};
YAHOO.util.Subscriber.prototype.getScope = function(defaultScope) {
   /// <summary> Returns the execution context for this listener.  If overrideContext was set to truethe custom obj will be the context.  If overrideContext is an object, that is thecontext, otherwise the default context will be used. </summary>
 /// <param name="defaultScope" type="Object"> the context to use if this listener does notoverride it.</param>
};
YAHOO.util.Subscriber.prototype.contains = function(fn, obj) {
   /// <summary> Returns true if the fn and obj match this objects properties.Used by the unsubscribe method to match the right subscriber. </summary>
   /// <returns type="boolean" />
 /// <param name="fn" type="Function"> the function to execute</param>
 /// <param name="obj" type="Object"> an object to be passed along when the event fires</param>
};
YAHOO.util.Subscriber.prototype.toString = function() {
};
YAHOO.util.UnexpectedValue.prototype.getMessage = function() {
   /// <summary> Returns a fully formatted error for an assertion failure. The messagecontains information about the unexpected value that was encountered. </summary>
   /// <returns type="String" />
};
YAHOO.util.UserAction.fireKeyEvent = function(type, targetter, options) {
   /// <summary> Fires an event that normally would be fired by the keyboard (keyup,keydown, keypress). Make sure to specify either keyCode or charCode asan option. </summary>
   /// <private />
 /// <param name="type" type="String"> The type of event ("keyup", "keydown" or "keypress").</param>
 /// <param name="target" type="HTMLElement"> The target of the event.</param>
 /// <param name="options" type="Object"> Options for the event. Either keyCode or charCodeare required.</param>
};
YAHOO.util.UserAction.mouseEvent = function(targetter, type, options) {
   /// <summary> Simulates a mouse event on a particular element. </summary>
 /// <param name="target" type="HTMLElement"> The element to click on.</param>
 /// <param name="type" type="String"> The type of event to fire. This can be any one ofthe following: click, dblclick, mousedown, mouseup, mouseout,mouseover, and mousemove.</param>
 /// <param name="options" type="Object"> Additional event options (use DOM standard names).</param>
};
YAHOO.util.UserAction.keypress = function(targetter, options) {
   /// <summary> Simulates a keypress on a particular element. </summary>
 /// <param name="target" type="HTMLElement"> The element to act on.</param>
 /// <param name="options" type="Object"> Additional event options (use DOM standard names).</param>
};
YAHOO.util.UserAction.keyup = function(targetter, options) {
   /// <summary> Simulates a keyup event on a particular element. </summary>
 /// <param name="target" type="HTMLElement"> The element to act on.</param>
 /// <param name="options" type="Object"> Additional event options (use DOM standard names).</param>
};
YAHOO.util.UserAction.mouseup = function(targetter, options) {
   /// <summary> Simulates a mouseup on a particular element. </summary>
 /// <param name="target" type="HTMLElement"> The element to act on.</param>
 /// <param name="options" type="Object"> Additional event options (use DOM standard names).</param>
};
YAHOO.util.UserAction.keydown = function(targetter, options) {
   /// <summary> Simulates a keydown event on a particular element. </summary>
 /// <param name="target" type="HTMLElement"> The element to act on.</param>
 /// <param name="options" type="Object"> Additional event options (use DOM standard names).</param>
};
YAHOO.util.UserAction.mousemove = function(targetter, options) {
   /// <summary> Simulates a mousemove on a particular element. </summary>
 /// <param name="target" type="HTMLElement"> The element to act on.</param>
 /// <param name="options" type="Object"> Additional event options (use DOM standard names).</param>
};
YAHOO.util.UserAction.simulateMouseEvent = function(targetter, type, bubbles, cancelable, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTargetter) {
   /// <summary> Simulates a mouse event using the given event information to populatethe generated event object. This method does browser-equalizingcalculations to account for differences in the DOM and IE event modelsas well as different browser quirks. </summary>
   /// <private />
 /// <param name="target" type="HTMLElement"> The target of the given event.</param>
 /// <param name="type" type="String"> The type of event to fire. This can be any one ofthe following: click, dblclick, mousedown, mouseup, mouseout,mouseover, and mousemove.</param>
 /// <param name="bubbles" type="Boolean"> (Optional) Indicates if the event can bebubbled up. DOM Level 2 specifies that all mouse events bubble bydefault. The default is true.</param>
 /// <param name="cancelable" type="Boolean"> (Optional) Indicates if the event can becanceled using preventDefault(). DOM Level 2 specifies that allmouse events except mousemove can be cancelled. The default is true for all events except mousemove, for which the default is false.</param>
 /// <param name="view" type="Window"> (Optional) The view containing the target. This istypically the window object. The default is window.</param>
 /// <param name="detail" type="int"> (Optional) The number of times the mouse button hasbeen used. The default value is 1.</param>
 /// <param name="screenX" type="int"> (Optional) The x-coordinate on the screen at whichpoint the event occured. The default is 0.</param>
 /// <param name="screenY" type="int"> (Optional) The y-coordinate on the screen at whichpoint the event occured. The default is 0.</param>
 /// <param name="clientX" type="int"> (Optional) The x-coordinate on the client at whichpoint the event occured. The default is 0.</param>
 /// <param name="clientY" type="int"> (Optional) The y-coordinate on the client at whichpoint the event occured. The default is 0.</param>
 /// <param name="ctrlKey" type="Boolean"> (Optional) Indicates if one of the CTRL keysis pressed while the event is firing. The default is false.</param>
 /// <param name="altKey" type="Boolean"> (Optional) Indicates if one of the ALT keysis pressed while the event is firing. The default is false.</param>
 /// <param name="shiftKey" type="Boolean"> (Optional) Indicates if one of the SHIFT keysis pressed while the event is firing. The default is false.</param>
 /// <param name="metaKey" type="Boolean"> (Optional) Indicates if one of the META keysis pressed while the event is firing. The default is false.</param>
 /// <param name="button" type="int"> (Optional) The button being pressed while the eventis executing. The value should be 0 for the primary mouse button(typically the left button), 1 for the terciary mouse button(typically the middle button), and 2 for the secondary mouse button(typically the right button). The default is 0.</param>
 /// <param name="relatedTarget" type="HTMLElement"> (Optional) For mouseout events,this is the element that the mouse has moved to. For mouseoverevents, this is the element that the mouse has moved from. Thisargument is ignored for all other events. The default is null.</param>
};
YAHOO.util.UserAction.mousedown = function(targetter, options) {
   /// <summary> Simulates a mousedown on a particular element. </summary>
 /// <param name="target" type="HTMLElement"> The element to act on.</param>
 /// <param name="options" type="Object"> Additional event options (use DOM standard names).</param>
};
YAHOO.util.UserAction.mouseout = function(targetter, options) {
   /// <summary> Simulates a mouseout event on a particular element. Use "relatedTarget"on the options object to specify where the mouse moved to.Quirks: Firefox less than 2.0 doesn't set relatedTarget properly, sotoElement is assigned in its place. IE doesn't allow toElement to bebe assigned, so relatedTarget is assigned in its place. Both of theseconcessions allow YAHOO.util.Event.getRelatedTarget() to work correctlyin both browsers. </summary>
 /// <param name="target" type="HTMLElement"> The element to act on.</param>
 /// <param name="options" type="Object"> Additional event options (use DOM standard names).</param>
};
YAHOO.util.UserAction.simulateKeyEvent = function(targetter, type, bubbles, cancelable, view, ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode) {
   /// <summary> Simulates a key event using the given event information to populatethe generated event object. This method does browser-equalizingcalculations to account for differences in the DOM and IE event modelsas well as different browser quirks. Note: keydown causes Safari 2.x tocrash. </summary>
   /// <private />
 /// <param name="target" type="HTMLElement"> The target of the given event.</param>
 /// <param name="type" type="String"> The type of event to fire. This can be any one ofthe following: keyup, keydown, and keypress.</param>
 /// <param name="bubbles" type="Boolean"> (Optional) Indicates if the event can bebubbled up. DOM Level 3 specifies that all key events bubble bydefault. The default is true.</param>
 /// <param name="cancelable" type="Boolean"> (Optional) Indicates if the event can becanceled using preventDefault(). DOM Level 3 specifies that allkey events can be cancelled. The default is true.</param>
 /// <param name="view" type="Window"> (Optional) The view containing the target. This istypically the window object. The default is window.</param>
 /// <param name="ctrlKey" type="Boolean"> (Optional) Indicates if one of the CTRL keysis pressed while the event is firing. The default is false.</param>
 /// <param name="altKey" type="Boolean"> (Optional) Indicates if one of the ALT keysis pressed while the event is firing. The default is false.</param>
 /// <param name="shiftKey" type="Boolean"> (Optional) Indicates if one of the SHIFT keysis pressed while the event is firing. The default is false.</param>
 /// <param name="metaKey" type="Boolean"> (Optional) Indicates if one of the META keysis pressed while the event is firing. The default is false.</param>
 /// <param name="keyCode" type="int"> (Optional) The code for the key that is in use. The default is 0.</param>
 /// <param name="charCode" type="int"> (Optional) The Unicode code for the characterassociated with the key being used. The default is 0.</param>
};
YAHOO.util.UserAction.mouseover = function(targetter, options) {
   /// <summary> Simulates a mouseover event on a particular element. Use "relatedTarget"on the options object to specify where the mouse moved from.Quirks: Firefox less than 2.0 doesn't set relatedTarget properly, sofromElement is assigned in its place. IE doesn't allow fromElement to bebe assigned, so relatedTarget is assigned in its place. Both of theseconcessions allow YAHOO.util.Event.getRelatedTarget() to work correctlyin both browsers. </summary>
 /// <param name="target" type="HTMLElement"> The element to act on.</param>
 /// <param name="options" type="Object"> Additional event options (use DOM standard names).</param>
};
YAHOO.util.UserAction.click = function(targetter, options) {
   /// <summary> Simulates a click on a particular element. </summary>
 /// <param name="target" type="HTMLElement"> The element to click on.</param>
 /// <param name="options" type="Object"> Additional event options (use DOM standard names).</param>
};
YAHOO.util.UserAction.dblclick = function(targetter, options) {
   /// <summary> Simulates a double click on a particular element. </summary>
 /// <param name="target" type="HTMLElement"> The element to double click on.</param>
 /// <param name="options" type="Object"> Additional event options (use DOM standard names).</param>
};
YAHOO.util.XHRDataSource.prototype._xhrFailure = function(oResponse) {
   /// <summary> Define Connection Manager failure handler </summary>
   /// <private />
 /// <param name="oResponse" type="Object">  HTTPXMLRequest object</param>
};
YAHOO.util.XHRDataSource.prototype._xhrSuccess = function(oResponse) {
   /// <summary> Define Connection Manager success handler </summary>
   /// <private />
 /// <param name="oResponse" type="Object">  HTTPXMLRequest object</param>
};
YAHOO.util.XHRDataSource.prototype.makeConnection = function(oRequest, oCallback, oCaller) {
   /// <summary> Overriding method passes query to Connection Manager. The returnedresponse is then forwarded to the handleResponse function. </summary>
   /// <returns type="Number" />
 /// <param name="oRequest" type="Object">  Request object.</param>
 /// <param name="oCallback" type="Object">  Callback object literal.</param>
 /// <param name="oCaller" type="Object">  (deprecated) Use oCallback.scope.</param>
};
YAHOO.util.YUILoader.prototype._pushEvents = function(optional) {
   /// <summary> In IE, the onAvailable/onDOMReady events need help when Event isloaded dynamically </summary>
   /// <private />
 /// <param name="optional" type="Function"> function reference</param>
};
YAHOO.util.YUILoader.prototype.getRequires = function(mod) {
   /// <summary> Returns an object containing properties for all modules requiredin order to load the requested module </summary>
 /// <param name="mod" type=""> The module definition from moduleInfo</param>
};
YAHOO.util.YUILoader.prototype.formatSkin = function(skin, mod) {
   /// <summary> Returns the skin module name for the specified skin name.  If amodule name is supplied, the returned skin module name is specific to the module passed in. </summary>
   /// <returns type="string" />
 /// <param name="skin" type="string">  the name of the skin</param>
 /// <param name="mod" type="string">  optional: the name of a module to skin</param>
};
YAHOO.util.YUILoader.prototype.onTimeout = function() {
   /// <summary> Callback that will be executed if a timeout occurs </summary>
};
YAHOO.util.YUILoader.prototype.getProvides = function(name, notMe) {
   /// <summary> Returns an object literal of the modules the supplied module satisfies </summary>
   /// <returns type="" />
 /// <param name="name" type="string"> The name of the module</param>
 /// <param name="notMe" type="string">  don't add this module name, only include superseded modules</param>
};
YAHOO.util.YUILoader.prototype._reduce = function() {
   /// <summary> Remove superceded modules and loaded modules.  Called bycalculate() after we have the mega list of all dependencies </summary>
   /// <private />
};
YAHOO.util.YUILoader.prototype.calculate = function(o) {
   /// <summary> Calculates the dependency tree, the result is stored in the sorted property </summary>
 /// <param name="o" type=""> optional options object</param>
};
YAHOO.util.YUILoader.prototype._filter = function() {
   /// <summary> Applies filtermethod _filter </summary>
   /// <private />
   /// <returns type="string" />
};
YAHOO.util.YUILoader.prototype._addSkin = function(skin, mod) {
   /// <summary> Adds the skin def to the module info </summary>
   /// <private />
   /// <returns type="string" />
 /// <param name="skin" type="string">  the name of the skin</param>
 /// <param name="mod" type="string">  the name of the module</param>
};
YAHOO.util.YUILoader.prototype._explode = function() {
   /// <summary> Inspects the required modules list looking for additional dependencies.  Expands the required list to include all required modules.  Called by calculate() </summary>
   /// <private />
};
YAHOO.util.YUILoader.prototype.onProgress = function() {
   /// <summary> Callback that will be executed each time a new module is loaded </summary>
};
YAHOO.util.YUILoader.prototype.parseSkin = function(mod) {
   /// <summary> Reverses formatSkin, providing the skin name andmodule name if the string matches the pattern for skins. </summary>
   /// <returns type="skin: string, module: string" />
 /// <param name="mod" type="string">  the module name to parse</param>
};
YAHOO.util.YUILoader.prototype.addModule = function(o) {
   /// <summary> Add a new module to the component metadata.         name:       required, the component nametype:       required, the component type (js or css)path:       required, the path to the script from "base"requires:   array of modules required by this componentoptional:   array of optional modules for this componentsupersedes: array of the modules this component replacesafter:      array of modules the components which, if present, should be sorted above this onerollup:     the number of superseded modules required for automatic rollupfullpath:   If fullpath is specified, this is used instead of the configured base + pathskinnable:  flag to determine if skin assets should automatically be pulled in </summary>
   /// <returns type="boolean" />
 /// <param name="o" type=""> An object containing the module data</param>
};
YAHOO.util.YUILoader.prototype.loadNext = function(mname) {
   /// <summary> Executed every time a module is loaded, and if we are in a loadcycle, we attempt to load the next script.  Public so that itis possible to call this if using a method other thanYAHOO.register to determine when scripts are fully loaded </summary>
 /// <param name="mname" type="string">  optional the name of the module that hasbeen loaded (which is usually why it is time to load the nextone)</param>
};
YAHOO.util.YUILoader.prototype._rollup = function() {
   /// <summary> Look for rollup packages to determine if all of the modules arollup supersedes are required.  If so, include the rollup tohelp reduce the total number of connections required.  Calledby calculate() </summary>
   /// <private />
};
YAHOO.util.YUILoader.prototype.insert = function(o, type) {
   /// <summary> inserts the requested modules and their dependencies.  type can be "js" or "css".  Both script and css are inserted if type is not provided. </summary>
 /// <param name="o" type=""> optional options object</param>
 /// <param name="type" type="string">  the type of dependency to insert</param>
};
YAHOO.util.YUILoader.prototype.onFailure = function() {
   /// <summary> Callback that will be executed if there is a failure </summary>
};
YAHOO.util.YUILoader.prototype._sort = function() {
   /// <summary> Sorts the dependency tree.  The last step of calculate() </summary>
   /// <private />
};
YAHOO.util.YUILoader.prototype["require"] = function(what) {
   /// <summary> Add a requirement for one or more module </summary>
 /// <param name="what" type="string[] | string*">  the modules to load</param>
};
YAHOO.util.YUILoader.prototype._setup = function() {
   /// <summary> Investigates the current YUI configuration on the page.  By default,modules already detected will not be loaded again unless a forceoption is encountered.  Called by calculate() </summary>
   /// <private />
};
YAHOO.util.YUILoader.prototype.onSuccess = function() {
   /// <summary> Callback that will be executed when the loader is finishedwith an insert </summary>
};
YAHOO.util.YUILoader.prototype.sandbox = function(callback) {
   /// <summary> Interns the script for the requested modules.  The callback isprovided a reference to the sandboxed YAHOO object.  This onlyapplies to the script: css can not be sandboxed; css will beloaded into the page normally if specified. </summary>
 /// <param name="callback" type="Function">  the callback to exectued when the load iscomplete.</param>
};
YAHOO.util.YUILoader.prototype._skin = function() {
   /// <summary> Sets up the requirements for the skin assets if any of therequested modules are skinnable </summary>
   /// <private />
};
YAHOO.util.YUILoader.prototype._url = function(path) {
   /// <summary> Generates the full url for a modulemethod _url </summary>
   /// <private />
   /// <returns type="string" />
 /// <param name="path" type="string">  the path fragment</param>
};
YAHOO.widget.AutoComplete.prototype._onTextboxKeyPress = function(v, oSelf) {
   /// <summary> Handles textbox keypress events. </summary>
   /// <private />
 /// <param name="v" type="HTMLEvent">  The keypress event.</param>
 /// <param name="oSelf" type="YAHOO.widget.AutoComplete">  The AutoComplete instance.</param>
};
YAHOO.widget.AutoComplete.prototype._selectText = function(elTextbox, nStart, nEnd) {
   /// <summary> Selects text in the input field. </summary>
   /// <private />
 /// <param name="elTextbox" type="HTMLElement">  Text input box element in which to select text.</param>
 /// <param name="nStart" type="Number">  Starting index of text string to select.</param>
 /// <param name="nEnd" type="Number">  Ending index of text selection.</param>
};
YAHOO.widget.AutoComplete.prototype.snapContainer = function() {
   /// <summary> Snaps container to bottom-left corner of input element </summary>
};
YAHOO.widget.AutoComplete.prototype._initContainerEl = function() {
   /// <summary> Initializes the results container once at object creation </summary>
   /// <private />
};
YAHOO.widget.AutoComplete.prototype._clearInterval = function(oSelf) {
   /// <summary> Cancels text input detection by intervals. </summary>
   /// <private />
 /// <param name="oSelf" type="YAHOO.widget.AutoComplete">  The AutoComplete instance.</param>
};
YAHOO.widget.AutoComplete.prototype._populateListItem = function(elListItem, oResult, sCurQuery) {
   /// <summary> Populates the given &lt;li&gt; element with return value from formatResult(). </summary>
   /// <private />
 /// <param name="elListItem" type="HTMLElement">  The LI element.</param>
 /// <param name="oResult" type="Object">  The result object.</param>
 /// <param name="sCurQuery" type="String">  The query string.</param>
};
YAHOO.widget.AutoComplete.prototype._initListEl = function() {
   /// <summary> Clears out contents of container body and creates up toYAHOO.widget.AutoComplete#maxResultsDisplayed &lt;li&gt; elements in an&lt;ul&gt; element. </summary>
   /// <private />
};
YAHOO.widget.AutoComplete.prototype.getSubsetMatches = function(sQuery) {
   /// <summary> Handles subset matching for when queryMatchSubset is enabled. </summary>
   /// <returns type="Object" />
 /// <param name="sQuery" type="String">  Query string.</param>
};
YAHOO.widget.AutoComplete.prototype._typeAhead = function(elListItem, sQuery) {
   /// <summary> Updates in the text input box with the first query result as the user types,selecting the substring that the user has not typed. </summary>
   /// <private />
 /// <param name="elListItem" type="HTMLElement">  The &lt;li&gt; element item whose data populates the input field.</param>
 /// <param name="sQuery" type="String">  Query string.</param>
};
YAHOO.widget.AutoComplete.prototype.getListItems = function() {
};
YAHOO.widget.AutoComplete.prototype._toggleHighlight = function(elNewListItem, sType) {
   /// <summary> Toggles the highlight on or off for an item in the container, and also cleansup highlighting of any previous item. </summary>
   /// <private />
 /// <param name="elNewListItem" type="HTMLElement">  The &lt;li&gt; element item to receive highlight behavior.</param>
 /// <param name="sType" type="String">  Type "mouseover" will toggle highlight on, and "mouseout" will toggle highlight off.</param>
};
YAHOO.widget.AutoComplete.prototype._onTextboxFocus = function(v, oSelf) {
   /// <summary> Handles text input box receiving focus. </summary>
   /// <private />
 /// <param name="v" type="HTMLEvent">  The focus event.</param>
 /// <param name="oSelf" type="YAHOO.widget.AutoComplete">  The AutoComplete instance.</param>
};
YAHOO.widget.AutoComplete.prototype.enableIntervalDetection = function() {
   /// <summary> Enables interval detection for a less performant but brute force mechanism todetect input values at an interval set by queryInterval and send queries ifinput value has changed. Needed to support right-click+paste or shift+insertedge cases. Please note that intervals are cleared at the end of each interaction,so enableIntervalDetection must be called for each new interaction. Therecommended approach is to call it in response to textboxFocusEvent. </summary>
};
YAHOO.widget.AutoComplete.prototype.expandContainer = function() {
   /// <summary> Expands container. </summary>
};
YAHOO.widget.AutoComplete.prototype.getListItemIndex = function(elListItem) {
   /// <summary> Public accessor to the index of the associated with a given &lt;li&gt; result. </summary>
   /// <returns type="Number" />
 /// <param name="elListItem" type="HTMLElement">  Reference to &lt;LI&gt; element.</param>
};
YAHOO.widget.AutoComplete.prototype._isIgnoreKey = function(nKeycode) {
   /// <summary> Whether or not key is functional or should be ignored. Note that the rightarrow key is NOT an ignored key since it triggers queries for certain intlcharsets. </summary>
   /// <private />
   /// <returns type="Boolean" />
 /// <param name="nKeycode" type="Number">  Code of key pressed.</param>
};
YAHOO.widget.AutoComplete.prototype._initContainerHelperEls = function() {
   /// <summary> Initializes the results container helpers if they are enabled and donot exist </summary>
   /// <private />
};
YAHOO.widget.AutoComplete.prototype._onInterval = function() {
   /// <summary> Enables query triggers based on text input detection by intervals (ratherthan by key events). </summary>
   /// <private />
};
YAHOO.widget.AutoComplete.prototype.setBody = function(sBody) {
   /// <summary> Sets HTML markup for the results container body. This markup will beinserted within a &lt;div&gt; tag with a class of "yui-ac-bd". </summary>
 /// <param name="sBody" type="String">  HTML markup for results container body.</param>
};
YAHOO.widget.AutoComplete.prototype.filterResults = function(sQuery, oFullResponse, oParsedResponse, oCallback) {
   /// <summary> Executed by DataSource (within DataSource scope via doBeforeCallback()) tofilter results through a simple client-side matching algorithm. </summary>
   /// <returns type="Object" />
 /// <param name="sQuery" type="String">  Original request.</param>
 /// <param name="oFullResponse" type="Object">  Full response object.</param>
 /// <param name="oParsedResponse" type="Object">  Parsed response object.</param>
 /// <param name="oCallback" type="Object">  Callback object.</param>
};
YAHOO.widget.AutoComplete.prototype.getListEl = function() {
   /// <summary> Public accessor to the &lt;ul&gt; element that displays query results within the results container. </summary>
   /// <returns type="HTMLElement[]" />
};
YAHOO.widget.AutoComplete.prototype._updateValue = function(elListItem) {
   /// <summary> Updates the text input box value with selected query result. If a delimiterhas been defined, then the value gets appended with the delimiter. </summary>
   /// <private />
 /// <param name="elListItem" type="HTMLElement">  The &lt;li&gt; element item with which to update the value.</param>
};
YAHOO.widget.AutoComplete.prototype._populateList = function(sQuery, oResponse, oPayload) {
   /// <summary> Populates the array of &lt;li&gt; elements in the container with queryresults. </summary>
   /// <private />
 /// <param name="sQuery" type="String">  Original request.</param>
 /// <param name="oResponse" type="Object">  Response object.</param>
 /// <param name="oPayload" type="MIXED">  (optional) Additional argument(s)</param>
};
YAHOO.widget.AutoComplete.prototype._focus = function() {
   /// <summary> Focuses input field. </summary>
   /// <private />
};
YAHOO.widget.AutoComplete.prototype.doBeforeExpandContainer = function(elTextbox, elContainer, sQuery, aResults) {
   /// <summary> Overridable method called before container expands allows implementers to access dataand DOM elements. </summary>
   /// <returns type="Boolean" />
 /// <param name="elTextbox" type="HTMLElement">  The text input box.</param>
 /// <param name="elContainer" type="HTMLElement">  The container element.</param>
 /// <param name="sQuery" type="String">  The query string.</param>
 /// <param name="aResults" type="Object[]">   An array of query results.</param>
};
YAHOO.widget.AutoComplete.prototype.setFooter = function(sFooter) {
   /// <summary> Sets HTML markup for the results container footer. This markup will beinserted within a &lt;div&gt; tag with a class of "yui-ac-ft". </summary>
 /// <param name="sFooter" type="String">  HTML markup for results container footer.</param>
};
YAHOO.widget.AutoComplete.prototype.toString = function() {
   /// <summary> Public accessor to the unique name of the AutoComplete instance. </summary>
   /// <returns type="String" />
};
YAHOO.widget.AutoComplete.prototype.isContainerOpen = function() {
   /// <summary> Returns true if container is in an expanded state, false otherwise. </summary>
   /// <returns type="Boolean" />
};
YAHOO.widget.AutoComplete.prototype.destroy = function() {
   /// <summary> Nulls out the entire AutoComplete instance and related objects, removes attachedevent listeners, and clears out DOM elements inside the container. Aftercalling this method, the instance reference should be expliclitly nulled byimplementer, as in myAutoComplete = null. Use with caution! </summary>
};
YAHOO.widget.AutoComplete_cloneObject = function(o) {
   /// <summary> Clones object literal or array of object literals. </summary>
   /// <private />
 /// <param name="o" type="Object">  Object.</param>
};
YAHOO.widget.AutoComplete.prototype.doBeforeSendQuery = function() {
};
YAHOO.widget.AutoComplete.prototype.getListItemData = function(elListItem) {
   /// <summary> Public accessor to the result data associated with a given &lt;li&gt; result. </summary>
   /// <returns type="Object" />
 /// <param name="elListItem" type="HTMLElement">  Reference to &lt;LI&gt; element.</param>
};
YAHOO.widget.AutoComplete.prototype.generateRequest = function(sQuery) {
   /// <summary> A function that converts an AutoComplete query into a request value which is thenpassed to the DataSource's sendRequest method in order to retrieve data for the query. By default, returns a String with the syntax: "query={query}"Implementers can customize this method for custom request syntaxes. </summary>
   /// <returns type="MIXED" />
 /// <param name="sQuery" type="String">  Query string</param>
};
YAHOO.widget.AutoComplete.prototype._togglePrehighlight = function(elNewListItem, sType) {
   /// <summary> Toggles the pre-highlight on or off for an item in the container, and also cleansup pre-highlighting of any previous item. </summary>
   /// <private />
 /// <param name="elNewListItem" type="HTMLElement">  The &lt;li&gt; element item to receive highlight behavior.</param>
 /// <param name="sType" type="String">  Type "mouseover" will toggle highlight on, and "mouseout" will toggle highlight off.</param>
};
YAHOO.widget.AutoComplete.prototype._onContainerClick = function(v, oSelf) {
   /// <summary> Handles container click events. </summary>
   /// <private />
 /// <param name="v" type="HTMLEvent">  The click event.</param>
 /// <param name="oSelf" type="YAHOO.widget.AutoComplete">  The AutoComplete instance.</param>
};
YAHOO.widget.AutoComplete.prototype._moveSelection = function(nKeyCode) {
   /// <summary> Triggered by up and down arrow keys, changes the current highlighted&lt;li&gt; element item. Scrolls container if necessary. </summary>
   /// <private />
 /// <param name="nKeyCode" type="Number">  Code of key pressed.</param>
};
YAHOO.widget.AutoComplete.prototype._selectItem = function(elListItem) {
   /// <summary> Selects a result item from the container </summary>
   /// <private />
 /// <param name="elListItem" type="HTMLElement">  The selected &lt;li&gt; element item.</param>
};
YAHOO.widget.AutoComplete.prototype._onWindowUnload = function(v, oSelf) {
   /// <summary> Handles window unload event. </summary>
   /// <private />
 /// <param name="v" type="HTMLEvent">  The unload event.</param>
 /// <param name="oSelf" type="YAHOO.widget.AutoComplete">  The AutoComplete instance.</param>
};
YAHOO.widget.AutoComplete.prototype.handleResponse = function(sQuery, oResponse, oPayload) {
   /// <summary> Handles response for display. This is the callback function method passed toYAHOO.util.DataSourceBase#sendRequest so results from the DataSource arereturned to the AutoComplete instance. </summary>
 /// <param name="sQuery" type="String">  Original request.</param>
 /// <param name="oResponse" type="Object">  Response object.</param>
 /// <param name="oPayload" type="MIXED">  (optional) Additional argument(s)</param>
};
YAHOO.widget.AutoComplete.prototype._enableIntervalDetection = function() {
   /// <summary> Enables interval detection for IME support. </summary>
   /// <private />
};
YAHOO.widget.AutoComplete.prototype.sendQuery = function(sQuery) {
   /// <summary> Makes query request to the DataSource. </summary>
 /// <param name="sQuery" type="String">  Query string.</param>
};
YAHOO.widget.AutoComplete.prototype.getContainerEl = function() {
   /// <summary> Returns DOM reference to container element. </summary>
   /// <returns type="HTMLELement" />
};
YAHOO.widget.AutoComplete.prototype._extractQuery = function(sQuery) {
   /// <summary> Extracts rightmost query from delimited string. </summary>
   /// <private />
   /// <returns type="Object" />
 /// <param name="sQuery" type="String">  String to parse</param>
};
YAHOO.widget.AutoComplete.prototype.getInputEl = function() {
   /// <summary> Returns DOM reference to input element. </summary>
   /// <returns type="HTMLELement" />
};
YAHOO.widget.AutoComplete.prototype._onContainerScroll = function(v, oSelf) {
   /// <summary> Handles container scroll events. </summary>
   /// <private />
 /// <param name="v" type="HTMLEvent">  The scroll event.</param>
 /// <param name="oSelf" type="YAHOO.widget.AutoComplete">  The AutoComplete instance.</param>
};
YAHOO.widget.AutoComplete.prototype._toggleContainerHelpers = function(bShow) {
   /// <summary> Syncs results container with its helpers. </summary>
   /// <private />
 /// <param name="bShow" type="Boolean">  True if container is expanded, false if collapsed</param>
};
YAHOO.widget.AutoComplete.prototype._clearSelection = function() {
   /// <summary> When forceSelection is true and the user attemptsleave the text input box without selecting an item from the query results,the user selection is cleared. </summary>
   /// <private />
};
YAHOO.widget.AutoComplete.prototype.__initProps = function() {
   /// <summary> Updates and validates latest public config properties. </summary>
   /// <private />
};
YAHOO.widget.AutoComplete.prototype.doBeforeLoadData = function(sQuery, oResponse, oPayload) {
   /// <summary> Overridable method called before container is loaded with result data. </summary>
   /// <returns type="Boolean" />
 /// <param name="sQuery" type="String">  Original request.</param>
 /// <param name="oResponse" type="Object">  Response object.</param>
 /// <param name="oPayload" type="MIXED">  (optional) Additional argument(s)</param>
};
YAHOO.widget.AutoComplete.prototype.preparseRawResponse = function(sQuery) {
   /// <summary> Executed by DataSource (within DataSource scope via doBeforeParseData()) tohandle responseStripAfter cleanup. </summary>
   /// <returns type="Object" />
 /// <param name="sQuery" type="String">  Query string.</param>
};
YAHOO.widget.AutoComplete.prototype._toggleContainer = function(bShow) {
   /// <summary> Animates expansion or collapse of the container. </summary>
   /// <private />
 /// <param name="bShow" type="Boolean">  True if container should be expanded, false if container should be collapsed</param>
};
YAHOO.widget.AutoComplete.prototype.formatResult = function(oResultData, sQuery, sResultMatch) {
   /// <summary> Overridable method that returns HTML markup for one result to be populatedas innerHTML of an &lt;LI&gt; element. </summary>
   /// <returns type="String" />
 /// <param name="oResultData" type="Object">  Result data object.</param>
 /// <param name="sQuery" type="String">  The corresponding query string.</param>
 /// <param name="sResultMatch" type="HTMLElement">  The current query string.</param>
};
YAHOO.widget.AutoComplete.prototype._textMatchesOption = function() {
   /// <summary> Whether or not user-typed value in the text input box matches any of thequery results. </summary>
   /// <private />
   /// <returns type="HTMLElement" />
};
YAHOO.widget.AutoComplete.prototype.collapseContainer = function() {
   /// <summary> Collapses container. </summary>
};
YAHOO.widget.AutoComplete.prototype._onTextboxKeyDown = function(v, oSelf) {
   /// <summary> Handles textbox keydown events of functional keys, mainly for UI behavior. </summary>
   /// <private />
 /// <param name="v" type="HTMLEvent">  The keydown event.</param>
 /// <param name="oSelf" type="YAHOO.widget.AutoComplete">  The AutoComplete instance.</param>
};
YAHOO.widget.AutoComplete.prototype.getListItemMatch = function(elListItem) {
   /// <summary> Public accessor to the matching string associated with a given &lt;li&gt; result. </summary>
   /// <returns type="String" />
 /// <param name="elListItem" type="HTMLElement">  Reference to &lt;LI&gt; element.</param>
};
YAHOO.widget.AutoComplete.prototype._onTextboxBlur = function(v, oSelf) {
   /// <summary> Handles text input box losing focus. </summary>
   /// <private />
 /// <param name="v" type="HTMLEvent">  The focus event.</param>
 /// <param name="oSelf" type="YAHOO.widget.AutoComplete">  The AutoComplete instance.</param>
};
YAHOO.widget.AutoComplete.prototype._sendQuery = function(sQuery) {
   /// <summary> Makes query request to the DataSource. </summary>
   /// <private />
 /// <param name="sQuery" type="String">  Query string.</param>
};
YAHOO.widget.AutoComplete.prototype._onTextboxKeyUp = function(v, oSelf) {
   /// <summary> Handles textbox keyup events to trigger queries. </summary>
   /// <private />
 /// <param name="v" type="HTMLEvent">  The keyup event.</param>
 /// <param name="oSelf" type="YAHOO.widget.AutoComplete">  The AutoComplete instance.</param>
};
YAHOO.widget.AutoComplete.prototype.isFocused = function() {
   /// <summary> Returns true if widget instance is currently active. </summary>
   /// <returns type="Boolean" />
};
YAHOO.widget.AutoComplete.prototype._doBeforeExpandContainer = function(elTextbox, elContainer, sQuery, aResults) {
   /// <summary> Called before container expands, by default snaps container to thebottom-left corner of the input element, then calls public overrideable method. </summary>
   /// <private />
   /// <returns type="Boolean" />
 /// <param name="elTextbox" type="HTMLElement">  The text input box.</param>
 /// <param name="elContainer" type="HTMLElement">  The container element.</param>
 /// <param name="sQuery" type="String">  The query string.</param>
 /// <param name="aResults" type="Object[]">   An array of query results.</param>
};
YAHOO.widget.AutoComplete.prototype.clearList = function() {
   /// <summary> Clears entire list of suggestions. </summary>
};
YAHOO.widget.AutoComplete.prototype._onContainerMouseout = function(v, oSelf) {
   /// <summary> Handles container mouseout events. </summary>
   /// <private />
 /// <param name="v" type="HTMLEvent">  The mouseout event.</param>
 /// <param name="oSelf" type="YAHOO.widget.AutoComplete">  The AutoComplete instance.</param>
};
YAHOO.widget.AutoComplete.prototype._jumpSelection = function() {
   /// <summary> If an item is highlighted in the container, the right arrow key jumps to theend of the textbox and selects the highlighted item, otherwise the containeris closed. </summary>
   /// <private />
};
YAHOO.widget.AutoComplete.prototype._onContainerMouseover = function(v, oSelf) {
   /// <summary> Handles container mouseover events. </summary>
   /// <private />
 /// <param name="v" type="HTMLEvent">  The mouseover event.</param>
 /// <param name="oSelf" type="YAHOO.widget.AutoComplete">  The AutoComplete instance.</param>
};
YAHOO.widget.AutoComplete.prototype.setHeader = function(sHeader) {
   /// <summary> Sets HTML markup for the results container header. This markup will beinserted within a &lt;div&gt; tag with a class of "yui-ac-hd". </summary>
 /// <param name="sHeader" type="String">  HTML markup for results container header.</param>
};
YAHOO.widget.AutoComplete.prototype._onContainerResize = function(v, oSelf) {
   /// <summary> Handles container resize events. </summary>
   /// <private />
 /// <param name="v" type="HTMLEvent">  The resize event.</param>
 /// <param name="oSelf" type="YAHOO.widget.AutoComplete">  The AutoComplete instance.</param>
};
YAHOO.widget.BaseCellEditor.prototype._initEvents = function() {
   /// <summary> Initialize Custom Events. </summary>
   /// <private />
};
YAHOO.widget.BaseCellEditor.prototype.getColumn = function() {
   /// <summary> Returns reference to associated Column instance. </summary>
   /// <returns type="YAHOO.widget.Column" />
};
YAHOO.widget.BaseCellEditor.prototype.getDataTable = function() {
   /// <summary> Returns reference to associated DataTable instance. </summary>
   /// <returns type="YAHOO.widget.DataTable" />
};
YAHOO.widget.BaseCellEditor.prototype.render = function() {
   /// <summary> Renders DOM elements and attaches event listeners. </summary>
};
YAHOO.widget.BaseCellEditor.prototype.show = function() {
   /// <summary> Displays CellEditor UI in the correct position. </summary>
};
YAHOO.widget.BaseCellEditor.prototype.move = function() {
   /// <summary> Moves container into position for display. </summary>
};
YAHOO.widget.BaseCellEditor.prototype.focus = function() {
   /// <summary> Sets focus in CellEditor. </summary>
};
YAHOO.widget.BaseCellEditor.prototype.renderBtns = function() {
   /// <summary> Renders Save/Cancel buttons. </summary>
};
YAHOO.widget.BaseCellEditor.prototype.unblock = function() {
   /// <summary> Fires unblockEvent </summary>
};
YAHOO.widget.BaseCellEditor.prototype.cancel = function() {
   /// <summary> Cancels CellEditor input and hides UI. </summary>
};
YAHOO.widget.BaseCellEditor.prototype.doAfterRender = function() {
   /// <summary> Access to add additional event listeners. </summary>
};
YAHOO.widget.BaseCellEditor.prototype.renderForm = function() {
   /// <summary> Renders form elements. </summary>
};
YAHOO.widget.BaseCellEditor.prototype.getRecord = function() {
   /// <summary> Returns reference to associated Record instance. </summary>
   /// <returns type="YAHOO.widget.Record" />
};
YAHOO.widget.BaseCellEditor.prototype.getId = function() {
   /// <summary> CellEditor unique ID. </summary>
   /// <returns type="String" />
};
YAHOO.widget.BaseCellEditor.prototype.attach = function(oDataTable, elCell) {
   /// <summary> Attach CellEditor for a new interaction. </summary>
 /// <param name="oDataTable" type="YAHOO.widget.DataTable">  Associated DataTable instance.</param>
 /// <param name="elCell" type="HTMLElement">  Cell to edit.</param>
};
YAHOO.widget.BaseCellEditor.prototype.toString = function() {
   /// <summary> CellEditor instance name, for logging. </summary>
   /// <returns type="String" />
};
YAHOO.widget.BaseCellEditor.prototype.getInputValue = function() {
   /// <summary> Retrieves input value from CellEditor. </summary>
};
YAHOO.widget.BaseCellEditor.prototype.destroy = function() {
   /// <summary> Nulls out the entire CellEditor instance and related objects, removes attachedevent listeners, and clears out DOM elements inside the container, removescontainer from the DOM. </summary>
};
YAHOO.widget.BaseCellEditor.prototype.save = function() {
   /// <summary> Saves value of CellEditor and hides UI. </summary>
};
YAHOO.widget.BaseCellEditor.prototype.handleDisabledBtns = function() {
   /// <summary> After rendering form, if disabledBtns is set to true, then sets up a mechanismto save input without them. </summary>
};
YAHOO.widget.BaseCellEditor.prototype.resetForm = function() {
   /// <summary> Resets CellEditor UI to initial state. </summary>
};
YAHOO.widget.BaseCellEditor.prototype.getContainerEl = function() {
   /// <summary> Returns container element. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.BaseCellEditor.prototype.getTdEl = function() {
   /// <summary> Returns reference to associated TD element. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.BaseCellEditor.prototype._initConfigs = function() {
   /// <summary> Initialize configs. </summary>
   /// <private />
};
YAHOO.widget.BaseCellEditor.prototype.block = function() {
   /// <summary> Fires blockEvent </summary>
};
YAHOO.widget.Button.prototype._showMenu = function(p_oEvent) {
   /// <summary> Shows the button's menu. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object passed back by the event utility (YAHOO.util.Event) that triggered the display of the menu.</param>
};
YAHOO.widget.Button.prototype._isSplitButtonOptionKey = function(p_oEvent) {
   /// <summary> Determines if the specified keycode is one that toggles  the display of the split button's menu. </summary>
   /// <returns type="Boolean" />
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype.createInputElement = function(p_sType, p_sName, p_sValue, p_bChecked) {
   /// <summary> Creates an &#60;input&#62; element of the specified type. </summary>
   /// <private />
   /// <returns type="HTMLInputElement" />
 /// <param name="p_sType" type="String"> String specifying the type of &#60;input&#62; element to create.</param>
 /// <param name="p_sName" type="String"> String specifying the name of &#60;input&#62; element to create.</param>
 /// <param name="p_sValue" type="String"> String specifying the value of &#60;input&#62; element to create.</param>
 /// <param name="p_bChecked" type="String"> Boolean specifying if the  &#60;input&#62; element is to be checked.</param>
};
YAHOO.widget.Button.prototype.createButtonElement = function(p_sType) {
   /// <summary> Creates the button's HTML elements. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="p_sType" type="String"> String indicating the type of element to create.</param>
};
YAHOO.widget.Button.prototype._isActivationKey = function(p_nKeyCode) {
   /// <summary> Determines if the specified keycode is one that toggles  the button's "active" state. </summary>
   /// <returns type="Boolean" />
 /// <param name="p_nKeyCode" type="Number"> Number representing the keycode to be evaluated.</param>
};
YAHOO.widget.Button.prototype.hasFocus = function() {
   /// <summary> Returns a boolean indicating whether or not the button has focus. </summary>
   /// <returns type="Boolean" />
};
YAHOO.widget.Button.prototype.getForm = function() {
   /// <summary> Returns a reference to the button's parent form. </summary>
   /// <returns type="HTMLFormElement" />
};
YAHOO.widget.Button.prototype._hideMenu = function() {
   /// <summary> Hides the button's menu. </summary>
};
YAHOO.widget.Button.prototype._addListenersToForm = function() {
   /// <summary> Adds event handlers to the button's form. </summary>
};
YAHOO.widget.Button.prototype._setLabel = function(p_sLabel) {
   /// <summary> Sets the value of the button's "label" attribute. </summary>
 /// <param name="p_sLabel" type="String"> String indicating the value for the button's "label" attribute.</param>
};
YAHOO.widget.Button.prototype._onOption = function(p_oEvent) {
   /// <summary> "option" event handler for the button. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype.initAttributes = function(p_oAttributes) {
   /// <summary> Initializes all of the configuration attributes used to  create the button. </summary>
 /// <param name="p_oAttributes" type="Object"> Object literal specifying a set of configuration attributes used to create the button.</param>
};
YAHOO.widget.Button.prototype.initConfig = function(Object) {
   /// <summary> Initializes the set of configuration attributes that are used to instantiate the button. </summary>
   /// <private />
 /// <param name="Object" type="Object"> representing the button's set of configuration attributes.</param>
};
YAHOO.widget.Button.prototype._onSelectedMenuItemChange = function(event) {
   /// <summary> "selectedMenuItemChange" event handler for the Button's"selectedMenuItem" attribute. </summary>
 /// <param name="event" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype._onDocumentKeyUp = function(p_oEvent) {
   /// <summary> "keyup" event handler for the document. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype._onClick = function(p_oEvent) {
   /// <summary> "click" event handler for the button. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype.removeStateCSSClasses = function() {
   /// <summary> Removes state-specific CSS classes to the button's root DOM element. </summary>
};
YAHOO.widget.Button.getButton = function(p_sId) {
   /// <summary> Returns a button with the specified id. </summary>
   /// <returns type="YAHOO.widget.Button" />
 /// <param name="p_sId" type="String"> String specifying the id of the root node of the HTML element representing the button to be retrieved.</param>
};
YAHOO.widget.Button.addHiddenFieldsToForm = function(p_oForm) {
   /// <summary> Searches the specified form and adds hidden fields for  instances of YAHOO.widget.Button that are of type "radio," "checkbox," "menu," and "split." </summary>
 /// <param name="p_oForm" type="HTMLFormElement"> Object reference for the form to search.</param>
};
YAHOO.widget.Button.prototype._setTitle = function(p_nTabIndex) {
   /// <summary> Sets the value of the button's "title" attribute. </summary>
 /// <param name="p_nTabIndex" type="String"> Number indicating the value for the button's "title" attribute.</param>
};
YAHOO.widget.Button.prototype._setDisabled = function(p_bDisabled) {
   /// <summary> Sets the value of the button's "disabled" attribute. </summary>
 /// <param name="p_bDisabled" type="Boolean"> Boolean indicating the value for the button's "disabled" attribute.</param>
};
YAHOO.widget.Button.prototype.getMenu = function() {
   /// <summary> Returns a reference to the button's menu. </summary>
   /// <returns type="YAHOO.widget.Overlay|YAHOO.widget.Menu" />
};
YAHOO.widget.Button.prototype._setChecked = function(p_bChecked) {
   /// <summary> Sets the value of the button's "target" attribute. </summary>
 /// <param name="p_bChecked" type="Boolean"> Boolean indicating the value for  the button's "checked" attribute.</param>
};
YAHOO.widget.Button.prototype._setHref = function(p_sHref) {
   /// <summary> Sets the value of the button's "href" attribute. </summary>
 /// <param name="p_sHref" type="String"> String indicating the value for the button's "href" attribute.</param>
};
YAHOO.widget.Button.prototype._onMouseOver = function(p_oEvent) {
   /// <summary> "mouseover" event handler for the button. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype.getHiddenFields = function() {
   /// <summary> Returns an &#60;input&#62; element or array of form elements used to represent the button when its parent form is submitted. </summary>
   /// <returns type="HTMLInputElement|Array" />
};
YAHOO.widget.Button.prototype.init = function(p_oElement, p_oAttributes) {
   /// <summary> The Button class's initialization method. </summary>
 /// <param name="p_oElement" type="String"> String specifying the id attribute of the &#60;input&#62;, &#60;button&#62;,&#60;a&#62;, or &#60;span&#62; element to be used to create the button.</param>
 /// <param name="p_oElement" type="HTMLInputElement|HTMLButtonElement|HTMLElement"> Object reference for the &#60;input&#62;, &#60;button&#62;, &#60;a&#62;, or &#60;span&#62; element to be used to create the button.</param>
 /// <param name="p_oElement" type="Object"> Object literal specifying a set of configuration attributes used to create the button.</param>
 /// <param name="p_oAttributes" type="Object"> Optional. Object literal specifying a set of configuration attributes used to create the button.</param>
};
YAHOO.widget.Button.prototype.toString = function() {
   /// <summary> Returns a string representing the button. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Button.prototype._setOnClick = function(p_oObject) {
   /// <summary> Sets the value of the button's "onclick" attribute. </summary>
 /// <param name="p_oObject" type="Object"> Object indicating the value for the button's "onclick" attribute.</param>
};
YAHOO.widget.Button.prototype.destroy = function() {
   /// <summary> Removes the button's element from its parent element and removes all event handlers. </summary>
};
YAHOO.widget.Button.prototype._setMenu = function(p_oMenu) {
   /// <summary> Sets the value of the button's "menu" attribute. </summary>
 /// <param name="p_oMenu" type="Object"> Object indicating the value for the button's "menu" attribute.</param>
};
YAHOO.widget.Button.prototype._onMenuHide = function(p_sType) {
   /// <summary> "hide" event handler for the button's menu. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event  that was fired.</param>
};
YAHOO.widget.Button.prototype._onLabelClick = function(event) {
   /// <summary> "click" event handler for the Button's&#60;label&#62; element. </summary>
 /// <param name="event" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype.submitForm = function() {
   /// <summary> Submits the form to which the button belongs.  Returns  true if the form was submitted successfully, false if the submission was cancelled. </summary>
   /// <returns type="Boolean" />
};
YAHOO.widget.Button.prototype._onDblClick = function(p_oEvent) {
   /// <summary> "dblclick" event handler for the button. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype._onFormSubmit = function(p_oEvent) {
   /// <summary> "submit" event handler for the button's form. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype._onFocus = function(p_oEvent) {
   /// <summary> "focus" event handler for the button. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype._onMouseDown = function(p_oEvent) {
   /// <summary> "mousedown" event handler for the button. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype.blur = function() {
   /// <summary> Causes the button to lose focus and fires the button's"blur" event. </summary>
};
YAHOO.widget.Button.prototype._onMenuShow = function(p_sType) {
   /// <summary> "show" event handler for the button's menu. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event  that was fired.</param>
};
YAHOO.widget.Button.prototype.setAttributesFromSrcElement = function(p_oElement, p_oAttributes) {
   /// <summary> Gets the values for all the attributes of the source element (either &#60;input&#62; or &#60;a&#62;) that map to Button configuration attributes and sets them into a collection that is passed to the Button constructor. </summary>
   /// <private />
 /// <param name="p_oElement" type="HTMLInputElement|HTMLAnchorElement"> Object reference to the HTML element (either &#60;input&#62; or &#60;span&#62;) used to create the button.</param>
 /// <param name="p_oAttributes" type="Object"> Object reference for the collection of configuration attributes used to create the button.</param>
};
YAHOO.widget.Button.prototype.focus = function() {
   /// <summary> Causes the button to receive the focus and fires the button's "focus" event. </summary>
};
YAHOO.widget.Button.prototype.setFormElementProperties = function() {
   /// <summary> Gets the value of the attributes from the form element  and sets them into the collection of configuration attributes used to configure the button. </summary>
   /// <private />
};
YAHOO.widget.Button.prototype._onFormReset = function(p_oEvent) {
   /// <summary> "reset" event handler for the button's form. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype._onMouseUp = function(p_oEvent) {
   /// <summary> "mouseup" event handler for the button. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype._setType = function(p_sType) {
   /// <summary> Sets the value of the button's "type" attribute. </summary>
 /// <param name="p_sType" type="String"> String indicating the value for the button's "type" attribute.</param>
};
YAHOO.widget.Button.prototype._onMenuRender = function(p_sType) {
   /// <summary> "render" event handler for the button's menu. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the  event thatwas fired.</param>
};
YAHOO.widget.Button.prototype._onDocumentMouseDown = function(p_oEvent) {
   /// <summary> "mousedown" event handler for the document. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype.isActive = function() {
   /// <summary> Returns a boolean indicating whether or not the button is active. </summary>
   /// <returns type="Boolean" />
};
YAHOO.widget.Button.prototype._onMouseMove = function(p_oEvent) {
   /// <summary> "mousemove" event handler for the button. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype._onMenuKeyDown = function(p_sType, p_aArgs) {
   /// <summary> "keydown" event handler for the button's menu. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event  that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.Button.prototype.createHiddenFields = function() {
   /// <summary> Creates the button's hidden form field and appends it to its parent form. </summary>
   /// <returns type="HTMLInputElement|Array" />
};
YAHOO.widget.Button.prototype.addStateCSSClasses = function() {
   /// <summary> Appends state-specific CSS classes to the button's root DOM element. </summary>
};
YAHOO.widget.Button.prototype._onMenuClick = function(p_sType, p_aArgs) {
   /// <summary> "click" event handler for the button's menu. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event  that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.Button.onFormKeyPress = function(p_oEvent) {
   /// <summary> "keypress" event handler for the button's form. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype._onMouseOut = function(p_oEvent) {
   /// <summary> "mouseout" event handler for the button. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype.setAttributeFromDOMAttribute = function(p_sAttribute) {
   /// <summary> Gets the value of the specified DOM attribute and sets it into the collection of configuration attributes used to configure the button. </summary>
   /// <private />
 /// <param name="p_sAttribute" type="String"> String representing the name of the attribute to retrieve from the DOM element.</param>
};
YAHOO.widget.Button.prototype._setTabIndex = function(p_nTabIndex) {
   /// <summary> Sets the value of the button's "tabindex" attribute. </summary>
 /// <param name="p_nTabIndex" type="Number"> Number indicating the value for the button's "tabindex" attribute.</param>
};
YAHOO.widget.Button.prototype._setTarget = function(p_sTargetter) {
   /// <summary> Sets the value of the button's "target" attribute. </summary>
 /// <param name="p_sTarget" type="String"> String indicating the value for the button's "target" attribute.</param>
};
YAHOO.widget.Button.prototype._onDocumentMouseUp = function(p_oEvent) {
   /// <summary> "mouseup" event handler for the button. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype.removeHiddenFields = function() {
   /// <summary> Removes the button's hidden form field(s) from its parent form. </summary>
};
YAHOO.widget.Button.prototype._onKeyUp = function(p_oEvent) {
   /// <summary> "keyup" event handler for the button. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype._onAppendTo = function(p_oEvent) {
   /// <summary> "appendTo" event handler for the button. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype._onKeyDown = function(p_oEvent) {
   /// <summary> "keydown" event handler for the button. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.Button.prototype._onBlur = function(p_oEvent) {
   /// <summary> "blur" event handler for the button. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.ButtonGroup.prototype.getButton = function(p_nIndex) {
   /// <summary> Returns the button at the specified index. </summary>
   /// <returns type="YAHOO.widget.Button" />
 /// <param name="p_nIndex" type="Number"> The index of the button to retrieve from the button group.</param>
};
YAHOO.widget.ButtonGroup.prototype.init = function(p_oElement, p_oAttributes) {
   /// <summary> The ButtonGroup class's initialization method. </summary>
 /// <param name="p_oElement" type="String"> String specifying the id attribute of the &#60;div&#62; element of the button group.</param>
 /// <param name="p_oElement" type="HTMLDivElement"> Object specifying the &#60;div&#62; element of the button group.</param>
 /// <param name="p_oElement" type="Object"> Object literal specifying a set of  configuration attributes used to create the button group.</param>
 /// <param name="p_oAttributes" type="Object"> Optional. Object literal specifying aset of configuration attributes used to create the button group.</param>
};
YAHOO.widget.ButtonGroup.prototype._setDisabled = function(p_bDisabled) {
   /// <summary> Sets the value of the button groups's "disabled" attribute. </summary>
 /// <param name="p_bDisabled" type="Boolean"> Boolean indicating the value forthe button group's "disabled" attribute.</param>
};
YAHOO.widget.ButtonGroup.prototype.getButtons = function() {
   /// <summary> Returns an array of the buttons in the button group. </summary>
   /// <returns type="Array" />
};
YAHOO.widget.ButtonGroup.prototype.focus = function(p_nIndex) {
   /// <summary> Sets focus to the button at the specified index. </summary>
 /// <param name="p_nIndex" type="Number"> Number indicating the index of the button to focus.</param>
};
YAHOO.widget.ButtonGroup.prototype.addButton = function(p_oButton) {
   /// <summary> Adds the button to the button group. </summary>
   /// <returns type="YAHOO.widget.Button" />
 /// <param name="p_oButton" type="YAHOO.widget.Button"> Object reference for the YAHOO.widget.Button instance to be added to the button group.</param>
 /// <param name="p_oButton" type="String"> String specifying the id attribute of the &#60;input&#62; or &#60;span&#62; element to be used to create the button to be added to the button group.</param>
 /// <param name="p_oButton" type="HTMLInputElement|HTMLElement"> Object reference for the &#60;input&#62; or &#60;span&#62; element to be used to create the button to be added to the button group.</param>
 /// <param name="p_oButton" type="Object"> Object literal specifying a set of YAHOO.widget.Button configuration attributes used to configure the button to be added to the button group.</param>
};
YAHOO.widget.ButtonGroup.prototype._onAppendTo = function(p_oEvent) {
   /// <summary> "appendTo" event handler for the button group. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the event that was fired.</param>
};
YAHOO.widget.ButtonGroup.prototype.addButtons = function(p_aButtons) {
   /// <summary> Adds the array of buttons to the button group. </summary>
   /// <returns type="Array" />
 /// <param name="p_aButtons" type="Array"> Array of YAHOO.widget.Button instances to be added to the button group.</param>
 /// <param name="p_aButtons" type="Array"> Array of strings specifying the id attribute of the &#60;input&#62; or &#60;span&#62; elements to be used to create the buttons to be added to the button group.</param>
 /// <param name="p_aButtons" type="Array"> Array of object references for the &#60;input&#62; or &#60;span&#62; elements to be used to create the buttons to be added to the button group.</param>
 /// <param name="p_aButtons" type="Array"> Array of object literals, each containinga set of YAHOO.widget.Button  configuration attributes used to configure each button to be added to the button group.</param>
};
YAHOO.widget.ButtonGroup.prototype.initAttributes = function(p_oAttributes) {
   /// <summary> Initializes all of the configuration attributes used to  create the button group. </summary>
 /// <param name="p_oAttributes" type="Object"> Object literal specifying a set of configuration attributes used to create the button group.</param>
};
YAHOO.widget.ButtonGroup.prototype.toString = function() {
   /// <summary> Returns a string representing the button group. </summary>
   /// <returns type="String" />
};
YAHOO.widget.ButtonGroup.prototype._onButtonCheckedChange = function(p_oEvent, p_oButton) {
   /// <summary> "checkedChange" event handler for each button in the button group. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the event that was fired.</param>
 /// <param name="p_oButton" type="YAHOO.widget.Button"> Object representing the button that fired the event.</param>
};
YAHOO.widget.ButtonGroup.prototype.getCount = function() {
   /// <summary> Returns the number of buttons in the button group. </summary>
   /// <returns type="Number" />
};
YAHOO.widget.ButtonGroup.prototype.removeButton = function(p_nIndex) {
   /// <summary> Removes the button at the specified index from the button group. </summary>
 /// <param name="p_nIndex" type="Number"> Number specifying the index of the button to be removed from the button group.</param>
};
YAHOO.widget.ButtonGroup.prototype.destroy = function() {
   /// <summary> Removes the button group's element from its parent element and removes all event handlers. </summary>
};
YAHOO.widget.ButtonGroup.prototype._onKeyDown = function(p_oEvent) {
   /// <summary> "keydown" event handler for the button group. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.ButtonGroup.prototype.check = function(p_nIndex) {
   /// <summary> Checks the button at the specified index. </summary>
 /// <param name="p_nIndex" type="Number"> Number indicating the index of the button to check.</param>
};
YAHOO.widget.ButtonGroup.prototype._createGroupElement = function() {
   /// <summary> Creates the button group's element. </summary>
   /// <returns type="HTMLDivElement" />
};
YAHOO.widget.Calendar.prototype.show = function() {
   /// <summary> Shows the Calendar's outer container. </summary>
};
YAHOO.widget.Calendar.prototype.nextYear = function() {
   /// <summary> Navigates to the next year in the currently selected month in the calendar widget. </summary>
};
YAHOO.widget.Calendar.prototype.configLocale = function() {
   /// <summary> The default handler for all configuration locale properties </summary>
};
YAHOO.widget.Calendar.prototype.subtractYears = function(count) {
   /// <summary> Subtcats the designated number of years from the current calendar, and sets the currentcalendar page date to the new month. </summary>
 /// <param name="count" type="Number"> The number of years to subtract from the current calendar</param>
};
YAHOO.widget.Calendar.prototype.buildWeekdays = function(html) {
   /// <summary> Renders the Calendar's weekday headers. </summary>
   /// <returns type="Array" />
 /// <param name="html" type="Array"> The current working HTML array</param>
};
YAHOO.widget.Calendar.prototype._parseArgs = function(Function) {
   /// <summary> Protected helper used to parse Calendar constructor/init arguments.As of 2.4.0, Calendar supports a simpler constructor signature. This method reconciles argumentsreceived in the pre 2.4.0 and 2.4.0 formats. </summary>
   /// <returns type="Object" />
 /// <param name="Function" type="Array"> "arguments" array</param>
};
YAHOO.widget.Calendar.prototype.previousMonth = function() {
   /// <summary> Navigates to the previous month page in the calendar widget. </summary>
};
YAHOO.widget.Calendar.prototype.getSelectedDates = function() {
   /// <summary> Gets the list of currently selected dates from the calendar. </summary>
   /// <returns type="Date[]" />
};
YAHOO.widget.Calendar.prototype.renderOutOfBoundsDate = function(workingDate, cell) {
   /// <summary> Renders a cell that falls before the minimum date or after the maximum date.widget class. </summary>
   /// <returns type="String" />
 /// <param name="workingDate" type="Date">  The current working Date object being used to generate the calendar</param>
 /// <param name="cell" type="HTMLTableCellElement">   The current working cell in the calendar</param>
};
YAHOO.widget.Calendar.prototype.previousYear = function() {
   /// <summary> Navigates to the previous year in the currently selected month in the calendar widget. </summary>
};
YAHOO.widget.Calendar.prototype.resetRenderers = function() {
   /// <summary> Resets the render stack of the current calendar to its original pre-render value. </summary>
};
YAHOO.widget.Calendar.prototype.renderBody = function(workingDate, html) {
   /// <summary> Renders the calendar body. </summary>
   /// <returns type="Array" />
 /// <param name="workingDate" type="Date"> The current working Date being used for the render process</param>
 /// <param name="html" type="Array"> The current working HTML array</param>
};
YAHOO.widget.Calendar.prototype.addMonthRenderer = function(month, fnRender) {
   /// <summary> Adds a month to the render stack. The function reference passed to this method will be executedwhen a date cell matches the month passed to this method. </summary>
 /// <param name="month" type="Number">  The month (1-12) to associate with this renderer</param>
 /// <param name="fnRender" type="Function"> The function executed to render cells that match the render rules for this renderer.</param>
};
YAHOO.widget.Calendar.prototype.addWeekdayRenderer = function(weekday, fnRender) {
   /// <summary> Adds a weekday to the render stack. The function reference passed to this method will be executedwhen a date cell matches the weekday passed to this method. </summary>
 /// <param name="weekday" type="Number">  The weekday (Sunday = 1, Monday = 2 ... Saturday = 7) to associate with this renderer</param>
 /// <param name="fnRender" type="Function"> The function executed to render cells that match the render rules for this renderer.</param>
};
YAHOO.widget.Calendar.prototype.createTitleBar = function(strTitle) {
   /// <summary> Creates the title bar element and adds it to Calendar container DIV </summary>
   /// <returns type="" />
 /// <param name="strTitle" type="String"> The title to display in the title bar</param>
};
YAHOO.widget.Calendar.prototype.applyListeners = function() {
   /// <summary> Applies the Calendar's DOM listeners to applicable elements. </summary>
};
YAHOO.widget.Calendar.prototype.clearAllBodyCellStyles = function(style) {
   /// <summary> Removes all styles from all body cells in the current calendar table. </summary>
 /// <param name="style" type="style"> The CSS class name to remove from all calendar body cells</param>
};
YAHOO.widget.Calendar.prototype._parsePageDate = function(date) {
   /// <summary> Parses a pagedate configuration property value. The value can either be specified as a string of form "mm/yyyy" or a Date object and is parsed into a Date object normalized to the first day of the month. If no value is passed in, the month and year from today's date are used to create the Date object </summary>
   /// <private />
   /// <returns type="Date" />
 /// <param name="date" type="Date|String"> Pagedate value which needs to be parsed</param>
};
YAHOO.widget.Calendar.prototype.getIndexFromId = function(strId) {
   /// <summary> Given the id used to mark each Calendar cell, this methodextracts the index number from the id. </summary>
   /// <returns type="Number" />
 /// <param name="strId" type="String"> The cell id</param>
};
YAHOO.widget.Calendar.prototype.addRenderer = function(sDates, fnRender) {
   /// <summary> Adds a renderer to the render stack. The function reference passed to this method will be executedwhen a date cell matches the conditions specified in the date string for this renderer. </summary>
 /// <param name="sDates" type="String">  A date string to associate with the specified renderer. Valid formatsinclude date (12/24/2005), month/day (12/24), and range (12/1/2004-1/1/2005)</param>
 /// <param name="fnRender" type="Function"> The function executed to render cells that match the render rules for this renderer.</param>
};
YAHOO.widget.Calendar.prototype.onBeforeSelect = function() {
   /// <summary> Event executed before a date is selected in the calendar widget. </summary>
};
YAHOO.widget.Calendar.prototype.removeCloseButton = function() {
   /// <summary> Removes the close button HTML element from the DOM </summary>
};
YAHOO.widget.Calendar.prototype.renderCellStyleHighlight2 = function(workingDate, cell) {
   /// <summary> Renders a single standard calendar cell using the CSS hightlight2 style </summary>
 /// <param name="workingDate" type="Date">  The current working Date object being used to generate the calendar</param>
 /// <param name="cell" type="HTMLTableCellElement">   The current working cell in the calendar</param>
};
YAHOO.widget.Calendar.prototype.renderCellStyleHighlight3 = function(workingDate, cell) {
   /// <summary> Renders a single standard calendar cell using the CSS hightlight3 style </summary>
 /// <param name="workingDate" type="Date">  The current working Date object being used to generate the calendar</param>
 /// <param name="cell" type="HTMLTableCellElement">   The current working cell in the calendar</param>
};
YAHOO.widget.Calendar.prototype.renderCellStyleHighlight1 = function(workingDate, cell) {
   /// <summary> Renders a single standard calendar cell using the CSS hightlight1 style </summary>
 /// <param name="workingDate" type="Date">  The current working Date object being used to generate the calendar</param>
 /// <param name="cell" type="HTMLTableCellElement">   The current working cell in the calendar</param>
};
YAHOO.widget.Calendar.prototype.renderCellStyleHighlight4 = function(workingDate, cell) {
   /// <summary> Renders a single standard calendar cell using the CSS hightlight4 style </summary>
 /// <param name="workingDate" type="Date">  The current working Date object being used to generate the calendar</param>
 /// <param name="cell" type="HTMLTableCellElement">   The current working cell in the calendar</param>
};
YAHOO.widget.Calendar.prototype.renderHeader = function(html) {
   /// <summary> Renders the calendar header. </summary>
   /// <returns type="Array" />
 /// <param name="html" type="Array"> The current working HTML array</param>
};
YAHOO.widget.Calendar.prototype.addYears = function(count) {
   /// <summary> Adds the designated number of years to the current calendar, and sets the currentcalendar page date to the new month. </summary>
 /// <param name="count" type="Number"> The number of years to add to the current calendar</param>
};
YAHOO.widget.Calendar.prototype.deselectCell = function(cellIndex) {
   /// <summary> Deselects a date on the current calendar by referencing the index of the cell that should be deselected.This method is used to easily deselect a single cell (usually with a mouse click) without having to doa full render. The selected style is removed from the cell directly.If the cell is not marked with the CSS_CELL_SELECTABLE class (as is the case by default for out of month or out of bounds cells), the method will not attempt to deselect it and in such a case, beforeDeselect and deselect events will not be fired. </summary>
   /// <returns type="Date[]" />
 /// <param name="cellIndex" type="Number"> The index of the cell to deselect in the current calendar.</param>
};
YAHOO.widget.Calendar.prototype.configTitle = function() {
   /// <summary> Default handler for the "title" property </summary>
};
YAHOO.widget.Calendar.prototype.configOptions = function() {
   /// <summary> The default handler for all configuration options properties </summary>
};
YAHOO.widget.Calendar.prototype.deselect = function(date) {
   /// <summary> Deselects a date or a collection of dates on the current calendar. This method, by default,does not call the render method explicitly. Once deselection has completed, render must be called for the changes to be reflected visually.The method will not attempt to deselect any dates which are OOB (out of bounds, and hence not selectable) and the array of deselected dates passed to the deselectEvent will not contain any OOB dates.If all dates are OOB, beforeDeselect and deselect events will not be fired. </summary>
   /// <returns type="Date[]" />
 /// <param name="date" type="String/Date/Date[]"> The date string of dates to deselect in the current calendar. Valid formats areindividual date(s) (12/24/2005,12/26/2005) or date range(s) (12/24/2005-1/1/2006).Multiple comma-delimited dates can also be passed to this method (12/24/2005,12/11/2005-12/13/2005).This method can also take a JavaScript Date object or an array of Date objects.</param>
};
YAHOO.widget.Calendar.prototype._indexOfSelectedFieldArray = function(find) {
   /// <summary> Gets the index of a date field array [yyyy,mm,dd] in the current list of selected dates. </summary>
   /// <private />
   /// <returns type="Number" />
 /// <param name="find" type="Number[]"> The date field array to search for</param>
};
YAHOO.widget.Calendar.prototype._parseRange = function(startDate, endDate) {
   /// <summary> Converts a date range to the full list of included dates </summary>
   /// <private />
   /// <returns type="" />
 /// <param name="startDate" type="Number[]"> Date field array representing the first date in the range</param>
 /// <param name="endDate" type="Number[]">  Date field array representing the last date in the range</param>
};
YAHOO.widget.Calendar.prototype.toString = function() {
   /// <summary> Returns a string representation of the object. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Calendar.prototype.renderCellNotThisMonth = function(workingDate, cell) {
   /// <summary> Applies the default style used for rendering dates that are not a part of the currentmonth (preceding or trailing the cells for the current month) </summary>
   /// <returns type="String" />
 /// <param name="workingDate" type="Date">  The current working Date object being used to generate the calendar</param>
 /// <param name="cell" type="HTMLTableCellElement">   The current working cell in the calendar</param>
};
YAHOO.widget.Calendar.prototype.configLocaleValues = function() {
   /// <summary> The default handler for all configuration locale field length properties </summary>
};
YAHOO.widget.Calendar.prototype.buildMonthLabel = function() {
   /// <summary> Builds the date label that will be displayed in the calendar header orfooter, depending on configuration. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Calendar.prototype._parseDates = function(sDates) {
   /// <summary> Converts a multi or single-date string to an array of date field arrays </summary>
   /// <private />
   /// <returns type="" />
 /// <param name="sDates" type="String">  Date string with one or more comma-delimited dates. Valid formats are mm/dd, mm/dd/yyyy, mm/dd/yyyy-mm/dd/yyyy</param>
};
YAHOO.widget.Calendar.prototype.refreshLocale = function() {
   /// <summary> Refreshes the locale values used to build the Calendar. </summary>
   /// <private />
};
YAHOO.widget.Calendar.prototype.configMaxDate = function() {
   /// <summary> The default handler for the "maxdate" property </summary>
};
YAHOO.widget.Calendar.prototype._addRenderer = function(type, aDates, fnRender) {
   /// <summary> The private method used for adding cell renderers to the local render stack.This method is called by other methods that set the renderer type prior to the method call. </summary>
   /// <private />
 /// <param name="type" type="String">  The type string that indicates the type of date renderer being added.Values are YAHOO.widget.Calendar.DATE, YAHOO.widget.Calendar.MONTH_DAY, YAHOO.widget.Calendar.WEEKDAY,YAHOO.widget.Calendar.RANGE, YAHOO.widget.Calendar.MONTH</param>
 /// <param name="aDates" type="Array">  An array of dates used to construct the renderer. The format varies basedon the renderer type</param>
 /// <param name="fnRender" type="Function"> The function executed to render cells that match the render rules for this renderer.</param>
};
YAHOO.widget.Calendar.prototype.setMonth = function(month) {
   /// <summary> Sets the calendar's month explicitly </summary>
 /// <param name="month" type="Number">  The numeric month, from 0 (January) to 11 (December)</param>
};
YAHOO.widget.Calendar.prototype._fieldArraysAreEqual = function(array1, array2) {
   /// <summary> Determines if 2 field arrays are equal. </summary>
   /// <private />
   /// <returns type="Boolean" />
 /// <param name="array1" type="Number[]"> The first date field array to compare</param>
 /// <param name="array2" type="Number[]"> The first date field array to compare</param>
};
YAHOO.widget.Calendar.prototype.styleCellDefault = function(workingDate, cell) {
   /// <summary> Styles a selectable cell. </summary>
 /// <param name="workingDate" type="Date">  The current working Date object being used to generate the calendar</param>
 /// <param name="cell" type="HTMLTableCellElement">   The current working cell in the calendar</param>
};
YAHOO.widget.Calendar.prototype.doCellMouseOver = function(e, cal) {
   /// <summary> The event that is executed when the user hovers over a cell </summary>
 /// <param name="e" type="DOMEvent"> The event</param>
 /// <param name="cal" type="Calendar"> A reference to the calendar passed by the Event utility</param>
};
YAHOO.widget.Calendar.prototype.doCellMouseOut = function(e, cal) {
   /// <summary> The event that is executed when the user moves the mouse out of a cell </summary>
 /// <param name="e" type="DOMEvent"> The event</param>
 /// <param name="cal" type="Calendar"> A reference to the calendar passed by the Event utility</param>
};
YAHOO.widget.Calendar.prototype.onClear = function() {
   /// <summary> Event executed when the calendar widget is completely cleared to the current month with no selections. </summary>
};
YAHOO.widget.Calendar.prototype.renderCellDefault = function(workingDate, cell) {
   /// <summary> Renders a single standard calendar cell in the calendar widget table.All logic for determining how a standard default cell will be rendered is encapsulated in this method, and must be accounted for when extending thewidget class. </summary>
 /// <param name="workingDate" type="Date">  The current working Date object being used to generate the calendar</param>
 /// <param name="cell" type="HTMLTableCellElement">   The current working cell in the calendar</param>
};
YAHOO.widget.Calendar.prototype.onDeselect = function(selected) {
   /// <summary> Event executed when a date is deselected in the calendar widget. </summary>
 /// <param name="selected" type="Array"> An array of date field arrays representing which date or dates were deselected. Example: [ [2006,8,6],[2006,8,7],[2006,8,8] ]</param>
};
YAHOO.widget.Calendar.prototype.configNavigator = function() {
   /// <summary> The default handler for the "navigator" property </summary>
};
YAHOO.widget.Calendar.prototype.configClose = function() {
   /// <summary> Default handler for the "close" property </summary>
};
YAHOO.widget.Calendar.prototype.render = function() {
   /// <summary> Renders the calendar after it has been configured. The render() method has a specific call chain that will executewhen the method is called: renderHeader, renderBody, renderFooter.Refer to the documentation for those methods for information on individual render tasks. </summary>
};
YAHOO.widget.Calendar.prototype._buildMonthLabel = function(date) {
   /// <summary> Helper method, to format a Month Year string, given a JavaScript Date, based on the Calendar localization settings </summary>
   /// <private />
   /// <returns type="String" />
 /// <param name="date" type="Date"></param>
};
YAHOO.widget.Calendar.prototype.initStyles = function() {
   /// <summary> Defines the style constants for the Calendar </summary>
};
YAHOO.widget.Calendar.prototype.addMonths = function(count) {
   /// <summary> Adds the designated number of months to the current calendar month, and sets the currentcalendar page date to the new month. </summary>
 /// <param name="count" type="Number"> The number of months to add to the current calendar</param>
};
YAHOO.widget.Calendar.prototype.select = function(date) {
   /// <summary> Selects a date or a collection of dates on the current calendar. This method, by default,does not call the render method explicitly. Once selection has completed, render must be called for the changes to be reflected visually.Any dates which are OOB (out of bounds, not selectable) will not be selected and the array of selected dates passed to the selectEvent will not contain OOB dates.If all dates are OOB, the no state change will occur; beforeSelect and select events will not be fired. </summary>
   /// <returns type="Date[]" />
 /// <param name="date" type="String/Date/Date[]"> The date string of dates to select in the current calendar. Valid formats areindividual date(s) (12/24/2005,12/26/2005) or date range(s) (12/24/2005-1/1/2006).Multiple comma-delimited dates can also be passed to this method (12/24/2005,12/11/2005-12/13/2005).This method can also take a JavaScript Date object or an array of Date objects.</param>
};
YAHOO.widget.Calendar.prototype.getDateFieldsByCellId = function(id) {
   /// <summary> Retrieves the Date object for the specified Calendar cell </summary>
   /// <returns type="Array" />
 /// <param name="id" type="String"> The id of the cell</param>
};
YAHOO.widget.Calendar.prototype.initEvents = function() {
   /// <summary> Initializes Calendar's built-in CustomEvents </summary>
};
YAHOO.widget.Calendar.prototype.nextMonth = function() {
   /// <summary> Navigates to the next month page in the calendar widget. </summary>
};
YAHOO.widget.Calendar.prototype.onReset = function() {
   /// <summary> Event executed when the calendar widget is reset to its original state. </summary>
};
YAHOO.widget.Calendar.prototype.init = function(id, container, config) {
   /// <summary> Initializes the Calendar widget. </summary>
 /// <param name="id" type="String"> optional The id of the table element that will represent the Calendar widget. As of 2.4.0, this argument is optional.</param>
 /// <param name="container" type="String | HTMLElement"> The id of the container div element that will wrap the Calendar table, or a reference to a DIV element which exists in the document.</param>
 /// <param name="config" type="Object"> optional The configuration object containing the initial configuration values for the Calendar.</param>
};
YAHOO.widget.Calendar.prototype.isDateOOM = function(date) {
   /// <summary> Determines whether a given date is OOM (out of month). </summary>
   /// <returns type="Boolean" />
 /// <param name="date" type="Date"> The JavaScript Date object for which to check the OOM status</param>
};
YAHOO.widget.Calendar.prototype.getCellIndex = function(date) {
   /// <summary> Find the Calendar's cell index for a given date.If the date is not found, the method returns -1.The returned index can be used to lookup the cell HTMLElement  using the Calendar's cells array or passed to selectCell to select cells by index. See cells, selectCell. </summary>
   /// <returns type="Number" />
 /// <param name="date" type="Date"> JavaScript Date object, for which to find a cell index.</param>
};
YAHOO.widget.Calendar.prototype.isDateOOB = function(date) {
   /// <summary> Determines whether a given date is OOB (out of bounds - less than the mindate or more than the maxdate). </summary>
   /// <returns type="Boolean" />
 /// <param name="date" type="Date"> The JavaScript Date object for which to check the OOB status</param>
};
YAHOO.widget.Calendar.prototype.doSelectCell = function(e, cal) {
   /// <summary> The default event handler for date cell selection. Currently attached to the Calendar's bounding box, referenced by it's oDomContainer property. </summary>
 /// <param name="e" type="DOMEvent"> The DOM event</param>
 /// <param name="cal" type="Calendar"> A reference to the calendar</param>
};
YAHOO.widget.Calendar.prototype.configStrings = function() {
   /// <summary> The default handler for the "strings" property </summary>
};
YAHOO.widget.Calendar.prototype.onRender = function() {
   /// <summary> Event executed when the calendar widget is rendered. </summary>
};
YAHOO.widget.Calendar.prototype.renderRowHeader = function(weekNum, cell) {
   /// <summary> Renders the row header for a week. </summary>
 /// <param name="weekNum" type="Number"> The week number of the current row</param>
 /// <param name="cell" type="Array"> The current working HTML array</param>
};
YAHOO.widget.Calendar.prototype.renderFooter = function(html) {
   /// <summary> Renders the calendar footer. In the default implementation, there isno footer. </summary>
   /// <returns type="Array" />
 /// <param name="html" type="Array"> The current working HTML array</param>
};
YAHOO.widget.Calendar.prototype.configSelected = function() {
   /// <summary> The default handler for the "selected" property </summary>
};
YAHOO.widget.Calendar.prototype.renderRowFooter = function(weekNum, cell) {
   /// <summary> Renders the row footer for a week. </summary>
 /// <param name="weekNum" type="Number"> The week number of the current row</param>
 /// <param name="cell" type="Array"> The current working HTML array</param>
};
YAHOO.widget.Calendar.prototype.reset = function() {
   /// <summary> Resets the calendar widget to the originally selected month and year, and sets the calendar to the initial selection(s). </summary>
};
YAHOO.widget.Calendar.prototype.deselectAll = function() {
   /// <summary> Deselects all dates on the current calendar. </summary>
   /// <returns type="Date[]" />
};
YAHOO.widget.Calendar.prototype.renderBodyCellRestricted = function(workingDate, cell) {
   /// <summary> Renders the current calendar cell as a non-selectable "black-out" date using the defaultrestricted style. </summary>
   /// <returns type="String" />
 /// <param name="workingDate" type="Date">  The current working Date object being used to generate the calendar</param>
 /// <param name="cell" type="HTMLTableCellElement">   The current working cell in the calendar</param>
};
YAHOO.widget.Calendar.prototype.onBeforeDeselect = function() {
   /// <summary> Event executed before a date is deselected in the calendar widget. </summary>
};
YAHOO.widget.Calendar.prototype.onChangePage = function() {
   /// <summary> Event executed when the user navigates to a different calendar page. </summary>
};
YAHOO.widget.Calendar.prototype._toFieldArray = function(date) {
   /// <summary> Converts a date (either a JavaScript Date object, or a date string) to the internal data structureused to represent dates: [[yyyy,mm,dd],[yyyy,mm,dd]]. </summary>
   /// <private />
   /// <returns type="Array[](Number[])" />
 /// <param name="date" type="String/Date/Date[]"> The date string of dates to deselect in the current calendar. Valid formats areindividual date(s) (12/24/2005,12/26/2005) or date range(s) (12/24/2005-1/1/2006).Multiple comma-delimited dates can also be passed to this method (12/24/2005,12/11/2005-12/13/2005).This method can also take a JavaScript Date object or an array of Date objects.</param>
};
YAHOO.widget.Calendar.prototype.renderCellStyleSelected = function(workingDate, cell) {
   /// <summary> Applies the default style used for rendering selected dates to the current calendar cell </summary>
   /// <returns type="String" />
 /// <param name="workingDate" type="Date">  The current working Date object being used to generate the calendar</param>
 /// <param name="cell" type="HTMLTableCellElement">   The current working cell in the calendar</param>
};
YAHOO.widget.Calendar.prototype.configToday = function() {
   /// <summary> The default handler for the "today" property </summary>
};
YAHOO.widget.Calendar.prototype.clearElement = function(cell) {
   /// <summary> Clears the inner HTML, CSS class and style information from the specified cell. </summary>
 /// <param name="cell" type="HTMLTableCellElement"> The cell to clear</param>
};
YAHOO.widget.Calendar.prototype._parseDate = function(sDate) {
   /// <summary> Converts a date string to a date field array </summary>
   /// <private />
   /// <returns type="" />
 /// <param name="sDate" type="String">   Date string. Valid formats are mm/dd and mm/dd/yyyy.</param>
};
YAHOO.widget.Calendar.prototype._toDate = function(dateFieldArray) {
   /// <summary> Converts a date field array [yyyy,mm,dd] to a JavaScript Date object. </summary>
   /// <private />
   /// <returns type="Date" />
 /// <param name="dateFieldArray" type="Number[]"> The date field array to convert to a JavaScript Date.</param>
};
YAHOO.widget.Calendar.prototype.buildDayLabel = function(workingDate) {
   /// <summary> Builds the date digit that will be displayed in calendar cells </summary>
   /// <returns type="String" />
 /// <param name="workingDate" type="Date"> The current working date</param>
};
YAHOO.widget.Calendar.prototype.toDate = function(dateFieldArray) {
   /// <summary> Converts a date field array [yyyy,mm,dd] to a JavaScript Date object. The date field arrayis the format in which dates are as provided as arguments to selectEvent and deselectEvent listeners. </summary>
   /// <returns type="Date" />
 /// <param name="dateFieldArray" type="Number[]"> The date field array to convert to a JavaScript Date.</param>
};
YAHOO.widget.Calendar.prototype.configPageDate = function() {
   /// <summary> The default handler for the "pagedate" property </summary>
};
YAHOO.widget.Calendar.prototype.createCloseButton = function() {
   /// <summary> Creates the close button HTML element and adds it to Calendar container DIV </summary>
   /// <returns type="" />
};
YAHOO.widget.Calendar.prototype.destroy = function() {
   /// <summary> Destroys the Calendar instance. The method will remove referencesto HTML elements, remove any event listeners added by the Calendar,and destroy the Config and CalendarNavigator instances it has created. </summary>
};
YAHOO.widget.Calendar.prototype.removeRenderers = function() {
   /// <summary> Removes all custom renderers added to the Calendar through the addRenderer, addMonthRenderer and addWeekdayRenderer methods. Calendar's render method needs to be called after removing renderers to re-render the Calendar without custom renderers applied. </summary>
};
YAHOO.widget.Calendar.prototype.selectCell = function(cellIndex) {
   /// <summary> Selects a date on the current calendar by referencing the index of the cell that should be selected.This method is used to easily select a single cell (usually with a mouse click) without having to doa full render. The selected style is applied to the cell directly.If the cell is not marked with the CSS_CELL_SELECTABLE class (as is the case by default for out of month or out of bounds cells), it will not be selected and in such a case beforeSelect and select events will not be fired. </summary>
   /// <returns type="Date[]" />
 /// <param name="cellIndex" type="Number"> The index of the cell to select in the current calendar.</param>
};
YAHOO.widget.Calendar.prototype.doPreviousMonthNav = function(e, cal) {
   /// <summary> The default event handler for clicks on the "Previous Month" navigation UI </summary>
 /// <param name="e" type="DOMEvent"> The DOM event</param>
 /// <param name="cal" type="Calendar"> A reference to the calendar</param>
};
YAHOO.widget.Calendar.prototype.removeTitleBar = function() {
   /// <summary> Removes the title bar element from the DOM </summary>
};
YAHOO.widget.Calendar.prototype.configMinDate = function() {
   /// <summary> The default handler for the "mindate" property </summary>
};
YAHOO.widget.Calendar.prototype.hide = function() {
   /// <summary> Hides the Calendar's outer container from view. </summary>
};
YAHOO.widget.Calendar.prototype.validate = function() {
   /// <summary> Validates the calendar widget. This method has no default implementationand must be extended by subclassing the widget. </summary>
   /// <returns type="" />
};
YAHOO.widget.Calendar.prototype.getDateByCellId = function(id) {
   /// <summary> Retrieves the Date object for the specified Calendar cell </summary>
   /// <returns type="Date" />
 /// <param name="id" type="String"> The id of the cell</param>
};
YAHOO.widget.Calendar.prototype.clear = function() {
   /// <summary> Clears the selected dates in the current calendar widget and sets the calendarto the current month and year. </summary>
};
YAHOO.widget.Calendar.prototype.configIframe = function() {
   /// <summary> Default Config listener for the iframe property. If the iframe config property is set to true, renders the built-in IFRAME shim if the container is relatively or absolutely positioned. </summary>
};
YAHOO.widget.Calendar.prototype.subtractMonths = function(count) {
   /// <summary> Subtracts the designated number of months from the current calendar month, and sets the currentcalendar page date to the new month. </summary>
 /// <param name="count" type="Number"> The number of months to subtract from the current calendar</param>
};
YAHOO.widget.Calendar.prototype.onSelect = function(selected) {
   /// <summary> Event executed when a date is selected in the calendar widget. </summary>
 /// <param name="selected" type="Array"> An array of date field arrays representing which date or dates were selected. Example: [ [2006,8,6],[2006,8,7],[2006,8,8] ]</param>
};
YAHOO.widget.Calendar.prototype.setYear = function(year) {
   /// <summary> Sets the calendar's year explicitly. </summary>
 /// <param name="year" type="Number">  The numeric 4-digit year</param>
};
YAHOO.widget.Calendar.prototype.renderCellStyleToday = function(workingDate, cell) {
   /// <summary> Applies the default style used for rendering today's date to the current calendar cell </summary>
 /// <param name="workingDate" type="Date">  The current working Date object being used to generate the calendar</param>
 /// <param name="cell" type="HTMLTableCellElement">   The current working cell in the calendar</param>
};
YAHOO.widget.Calendar.prototype.doNextMonthNav = function(e, cal) {
   /// <summary> The default event handler for clicks on the "Next Month" navigation UI </summary>
 /// <param name="e" type="DOMEvent"> The DOM event</param>
 /// <param name="cal" type="Calendar"> A reference to the calendar</param>
};
YAHOO.widget.CalendarGroup.prototype.deselectCell = function(cellIndex) {
   /// <summary> Deselects dates in the CalendarGroup based on the cell index provided. This method is used to select cells without having to do a full render. The selected style is applied to the cells directly.deselectCell will deselect the cell at the specified index on each displayed Calendar page. </summary>
   /// <returns type="Date[]" />
 /// <param name="cellIndex" type="Number"> The index of the cell to deselect.</param>
};
YAHOO.widget.CalendarGroup.prototype.addWeekdayRenderer = function(weekday, fnRender) {
   /// <summary> Adds a weekday to the render stack. The function reference passed to this method will be executedwhen a date cell matches the weekday passed to this method. </summary>
 /// <param name="weekday" type="Number">  The weekday (1-7) to associate with this renderer. 1=Sunday, 2=Monday etc.</param>
 /// <param name="fnRender" type="Function"> The function executed to render cells that match the render rules for this renderer.</param>
};
YAHOO.widget.CalendarGroup.prototype.render = function() {
   /// <summary> Calls the render function of all child calendars within the group. </summary>
};
YAHOO.widget.CalendarGroup.prototype.nextYear = function() {
   /// <summary> Navigates to the next year in the currently selected month in the calendar widget. </summary>
};
YAHOO.widget.CalendarGroup.prototype.delegateConfig = function(type, args, obj) {
   /// <summary> Delegates a configuration property to the CustomEvents associated with the CalendarGroup's children </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.CalendarGroup.prototype.configPageDate = function(type, args, obj) {
   /// <summary> The default Config handler for the "pagedate" property </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.CalendarGroup.prototype.subtractYears = function(count) {
   /// <summary> Subtcats the designated number of years from the current calendar, and sets the currentcalendar page date to the new month. </summary>
 /// <param name="count" type="Number"> The number of years to subtract from the current calendar</param>
};
YAHOO.widget.CalendarGroup.prototype.previousMonth = function() {
   /// <summary> Navigates to the previous month page in the calendar widget. </summary>
};
YAHOO.widget.CalendarGroup.prototype.select = function(date) {
   /// <summary> Selects a date or a collection of dates on the current calendar. This method, by default,does not call the render method explicitly. Once selection has completed, render must be called for the changes to be reflected visually. </summary>
   /// <returns type="Date[]" />
 /// <param name="date" type="String/Date/Date[]">    The date string of dates to select in the current calendar. Valid formats areindividual date(s) (12/24/2005,12/26/2005) or date range(s) (12/24/2005-1/1/2006).Multiple comma-delimited dates can also be passed to this method (12/24/2005,12/11/2005-12/13/2005).This method can also take a JavaScript Date object or an array of Date objects.</param>
};
YAHOO.widget.CalendarGroup.prototype.callChildFunction = function(fnName, args) {
   /// <summary> Calls a function within all child Calendars within this CalendarGroup. </summary>
 /// <param name="fnName" type="String">  The name of the function</param>
 /// <param name="args" type="Array">  The arguments to pass to the function</param>
};
YAHOO.widget.CalendarGroup.prototype.deselect = function(date) {
   /// <summary> Deselects a date or a collection of dates on the current calendar. This method, by default,does not call the render method explicitly. Once deselection has completed, render must be called for the changes to be reflected visually. </summary>
   /// <returns type="Date[]" />
 /// <param name="date" type="String/Date/Date[]"> The date string of dates to deselect in the current calendar. Valid formats areindividual date(s) (12/24/2005,12/26/2005) or date range(s) (12/24/2005-1/1/2006).Multiple comma-delimited dates can also be passed to this method (12/24/2005,12/11/2005-12/13/2005).This method can also take a JavaScript Date object or an array of Date objects.</param>
};
YAHOO.widget.CalendarGroup.prototype.sub = function(fn, obj, bOverride) {
   /// <summary> Proxy subscriber to subscribe to the CalendarGroup's child Calendars' CustomEvents </summary>
   /// <private />
 /// <param name="fn" type="Function"> The function to subscribe to this CustomEvent</param>
 /// <param name="obj" type="Object"> The CustomEvent's scope object</param>
 /// <param name="bOverride" type="Boolean"> Whether or not to apply scope correction</param>
};
YAHOO.widget.CalendarGroup.prototype.initEvents = function() {
   /// <summary> Initializes CalendarGroup's built-in CustomEvents </summary>
};
YAHOO.widget.CalendarGroup.prototype.previousYear = function() {
   /// <summary> Navigates to the previous year in the currently selected month in the calendar widget. </summary>
};
YAHOO.widget.CalendarGroup.prototype.nextMonth = function() {
   /// <summary> Navigates to the next month page in the calendar widget. </summary>
};
YAHOO.widget.CalendarGroup.prototype.configPages = function(type, args, obj) {
   /// <summary> The default Config handler for the "pages" property </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.CalendarGroup.prototype.setChildFunction = function(fnName, fn) {
   /// <summary> Adds a function to all child Calendars within this CalendarGroup. </summary>
 /// <param name="fnName" type="String">  The name of the function</param>
 /// <param name="fn" type="Function">   The function to apply to each Calendar page object</param>
};
YAHOO.widget.CalendarGroup.prototype.addMonthRenderer = function(month, fnRender) {
   /// <summary> Adds a month to the render stack. The function reference passed to this method will be executedwhen a date cell matches the month passed to this method. </summary>
 /// <param name="month" type="Number">  The month (1-12) to associate with this renderer</param>
 /// <param name="fnRender" type="Function"> The function executed to render cells that match the render rules for this renderer.</param>
};
YAHOO.widget.CalendarGroup.prototype.init = function(id, container, config) {
   /// <summary> Initializes the calendar group. All subclasses must call this method in order for thegroup to be initialized properly. </summary>
 /// <param name="id" type="String"> optional The id of the table element that will represent the CalendarGroup widget. As of 2.4.0, this argument is optional.</param>
 /// <param name="container" type="String | HTMLElement"> The id of the container div element that will wrap the CalendarGroup table, or a reference to a DIV element which exists in the document.</param>
 /// <param name="config" type="Object"> optional The configuration object containing the initial configuration values for the CalendarGroup.</param>
};
YAHOO.widget.CalendarGroup.prototype.toString = function() {
   /// <summary> Returns a string representation of the object. </summary>
   /// <returns type="String" />
};
YAHOO.widget.CalendarGroup.prototype.destroy = function() {
   /// <summary> Destroys the CalendarGroup instance. The method will remove referencesto HTML elements, remove any event listeners added by the CalendarGroup.It will also destroy the Config and CalendarNavigator instances created by the CalendarGroup and the individual Calendar instances created for each page. </summary>
};
YAHOO.widget.CalendarGroup.prototype.addRenderer = function(sDates, fnRender) {
   /// <summary> Adds a renderer to the render stack. The function reference passed to this method will be executedwhen a date cell matches the conditions specified in the date string for this renderer. </summary>
 /// <param name="sDates" type="String">  A date string to associate with the specified renderer. Valid formatsinclude date (12/24/2005), month/day (12/24), and range (12/1/2004-1/1/2005)</param>
 /// <param name="fnRender" type="Function"> The function executed to render cells that match the render rules for this renderer.</param>
};
YAHOO.widget.CalendarGroup.prototype.removeRenderers = function() {
   /// <summary> Removes all custom renderers added to the CalendarGroup through the addRenderer, addMonthRenderer and addWeekRenderer methods. CalendarGroup's render method needs to be called to after removing renderers to see the changes applied. </summary>
};
YAHOO.widget.CalendarGroup.prototype.selectCell = function(cellIndex) {
   /// <summary> Selects dates in the CalendarGroup based on the cell index provided. This method is used to select cells without having to do a full render. The selected style is applied to the cells directly.The value of the MULTI_SELECT Configuration attribute will determine the set of dates which get selected. If MULTI_SELECT is false, selectCell will select the cell at the specified index for only the last displayed Calendar page.If MULTI_SELECT is true, selectCell will select the cell at the specified index, on each displayed Calendar page. </summary>
   /// <returns type="Date[]" />
 /// <param name="cellIndex" type="Number"> The index of the cell to be selected.</param>
};
YAHOO.widget.CalendarGroup.prototype.renderFooter = function() {
   /// <summary> Renders a footer for the 2-up calendar container. By default, this method isunimplemented. </summary>
};
YAHOO.widget.CalendarGroup.prototype.configSelected = function(type, args, obj) {
   /// <summary> The default Config handler for the CalendarGroup "selected" property </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.CalendarGroup.prototype.unsub = function(fn, obj) {
   /// <summary> Proxy unsubscriber to unsubscribe from the CalendarGroup's child Calendars' CustomEvents </summary>
   /// <private />
 /// <param name="fn" type="Function"> The function to subscribe to this CustomEvent</param>
 /// <param name="obj" type="Object"> The CustomEvent's scope object</param>
};
YAHOO.widget.CalendarGroup.prototype.getSelectedDates = function() {
   /// <summary> Gets the list of currently selected dates from the calendar. </summary>
   /// <returns type="" />
};
YAHOO.widget.CalendarGroup.prototype.constructChild = function(id, containerId, config) {
   /// <summary> Constructs a child calendar. This method can be overridden if a subclassed version of the defaultcalendar is to be used. </summary>
   /// <returns type="YAHOO.widget.Calendar" />
 /// <param name="id" type="String">   The id of the table element that will represent the calendar widget</param>
 /// <param name="containerId" type="String"> The id of the container div element that will wrap the calendar table</param>
 /// <param name="config" type="Object">  The configuration object containing the Calendar's arguments</param>
};
YAHOO.widget.CalendarGroup.prototype._setMonthOnDate = function(date, iMonth) {
   /// <summary> Sets the month on a Date object, taking into account year rollover if the month is less than 0 or greater than 11.The Date object passed in is modified. It should be cloned before passing it into this method if the original value needs to be maintained </summary>
   /// <private />
 /// <param name="date" type="Date"> The Date object on which to set the month index</param>
 /// <param name="iMonth" type="Number"> The month index to set</param>
};
YAHOO.widget.CalendarGroup.prototype.reset = function() {
   /// <summary> Resets the calendar widget to the originally selected month and year, and sets the calendar to the initial selection(s). </summary>
};
YAHOO.widget.CalendarGroup.prototype.deselectAll = function() {
   /// <summary> Deselects all dates on the current calendar. </summary>
   /// <returns type="Date[]" />
};
YAHOO.widget.CalendarGroup.prototype.setMonth = function(month) {
   /// <summary> Sets the calendar group's month explicitly. This month will be set into the firstpage of the multi-page calendar, and all other months will be iterated appropriately. </summary>
 /// <param name="month" type="Number">  The numeric month, from 0 (January) to 11 (December)</param>
};
YAHOO.widget.CalendarGroup.prototype.clear = function() {
   /// <summary> Clears the selected dates in the current calendar widget and sets the calendarto the current month and year. </summary>
};
YAHOO.widget.CalendarGroup.prototype.getCalendarPage = function(date) {
   /// <summary> Returns the Calendar page instance which has a pagedate (month/year) matching the given date. Returns null if no match is found. </summary>
   /// <returns type="Calendar" />
 /// <param name="date" type="Date"> The JavaScript Date object for which a Calendar page is to be found.</param>
};
YAHOO.widget.CalendarGroup.prototype.addMonths = function(count) {
   /// <summary> Adds the designated number of months to the current calendar month, and sets the currentcalendar page date to the new month. </summary>
 /// <param name="count" type="Number"> The number of months to add to the current calendar</param>
};
YAHOO.widget.CalendarGroup.prototype.subtractMonths = function(count) {
   /// <summary> Subtracts the designated number of months from the current calendar month, and sets the currentcalendar page date to the new month. </summary>
 /// <param name="count" type="Number"> The number of months to subtract from the current calendar</param>
};
YAHOO.widget.CalendarGroup.prototype._fixWidth = function() {
   /// <summary> Fixes the width of the CalendarGroup container element, to account for miswrapped floats </summary>
   /// <private />
};
YAHOO.widget.CalendarGroup.prototype.setYear = function(year) {
   /// <summary> Sets the calendar group's year explicitly. This year will be set into the firstpage of the multi-page calendar, and all other months will be iterated appropriately. </summary>
 /// <param name="year" type="Number">  The numeric 4-digit year</param>
};
YAHOO.widget.CalendarGroup.prototype.renderHeader = function() {
   /// <summary> Renders the header for the CalendarGroup. </summary>
};
YAHOO.widget.CalendarGroup.prototype.addYears = function(count) {
   /// <summary> Adds the designated number of years to the current calendar, and sets the currentcalendar page date to the new month. </summary>
 /// <param name="count" type="Number"> The number of years to add to the current calendar</param>
};
YAHOO.widget.CalendarNavigator.prototype._getMonthFromUI = function() {
   /// <summary> Returns the month value (index), from the month UI element </summary>
   /// <returns type="Number" />
};
YAHOO.widget.CalendarNavigator.prototype.createNav = function() {
   /// <summary> Creates the navigator's containing HTMLElement, it's contents, and appends the containg element to the Calendar/CalendarGroup's container. </summary>
};
YAHOO.widget.CalendarNavigator.prototype._update = function(cal) {
   /// <summary> Updates the Calendar rendered state, based on the state of the CalendarNavigator </summary>
 /// <param name="cal" type=""> The Calendar instance to update</param>
};
YAHOO.widget.CalendarNavigator.prototype._handleDirectionKeys = function(e) {
   /// <summary> Default Keyboard event handler to capture up/down/pgup/pgdownon the Navigator's year control (yearEl). </summary>
 /// <param name="e" type="Event"> The DOM event being handled</param>
};
YAHOO.widget.CalendarNavigator.prototype.render = function() {
   /// <summary> Renders the HTML for the navigator, adding it to the document and attaches event listeners if it has not already been rendered. </summary>
};
YAHOO.widget.CalendarNavigator.prototype.show = function() {
   /// <summary> Displays the navigator and mask, updating the input controls to reflect the currently set month and year. The show method will invoke the render methodif the navigator has not been renderered already, allowing for lazy renderingof the control.The show method will fire the Calendar/CalendarGroup's beforeShowNav and showNav events </summary>
};
YAHOO.widget.CalendarNavigator.prototype.erase = function() {
   /// <summary> Removes all renderered HTML elements for the Navigator fromthe DOM, purges event listeners and clears (nulls) any propertyreferences to HTML references </summary>
};
YAHOO.widget.CalendarNavigator.prototype._handleShiftTabKey = function(e) {
   /// <summary> Default Keyboard event handler to capture Shift-Tab on the first control (firstCtrl) in the Navigator. </summary>
 /// <param name="e" type="Event"> The DOM event being handled</param>
};
YAHOO.widget.CalendarNavigator.prototype.cancel = function() {
   /// <summary> Hides the navigator and mask, without updating the Calendar/CalendarGroup's state </summary>
};
YAHOO.widget.CalendarNavigator.prototype.applyKeyListeners = function() {
   /// <summary> Attaches DOM listeners for keyboard support. Tab/Shift-Tab looping, Enter Key Submit on Year element,Up/Down/PgUp/PgDown year increment on Year elementNOTE: MacOSX Safari 2.x doesn't let you tab to buttons and MacOSX Gecko does not let you tab to buttons or select controls,so for these browsers, Tab/Shift-Tab looping is limited to the elements which can be reached using the tab key. </summary>
};
YAHOO.widget.CalendarNavigator.prototype.validate = function() {
   /// <summary> Validates the current state of the UI controls </summary>
   /// <returns type="Boolean" />
};
YAHOO.widget.CalendarNavigator.prototype.hideMask = function() {
   /// <summary> Hides the navigator's mask element </summary>
};
YAHOO.widget.CalendarNavigator.prototype._updateMonthUI = function() {
   /// <summary> Updates the Navigator's month UI, based on the month value set on the Navigator object </summary>
};
YAHOO.widget.CalendarNavigator.prototype.hide = function() {
   /// <summary> Hides the navigator and maskThe show method will fire the Calendar/CalendarGroup's beforeHideNav event and hideNav events </summary>
};
YAHOO.widget.CalendarNavigator.prototype.submit = function() {
   /// <summary> Updates the Calendar/CalendarGroup's pagedate with the currently set month and year if valid.If the currently set month/year is invalid, a validation error will be displayed and the Calendar/CalendarGroup's pagedate will not be updated. </summary>
};
YAHOO.widget.CalendarNavigator.prototype.renderNavContents = function(html) {
   /// <summary> Renders the contents of the navigator </summary>
   /// <returns type="Array" />
 /// <param name="html" type="Array"> The HTML buffer to append the HTML to.</param>
};
YAHOO.widget.CalendarNavigator.prototype.init = function(cal) {
   /// <summary> Init lifecycle method called as part of construction </summary>
 /// <param name="cal" type="Calendar"> The instance of the Calendar or CalendarGroup to which this CalendarNavigator should be attached</param>
};
YAHOO.widget.CalendarNavigator.prototype.setYearError = function() {
   /// <summary> Displays the validation error UI for the year control </summary>
};
YAHOO.widget.CalendarNavigator.prototype._getYearFromUI = function() {
   /// <summary> Returns the year value, from the Navitator's year UI element </summary>
   /// <returns type="Number" />
};
YAHOO.widget.CalendarNavigator.prototype._syncMask = function() {
   /// <summary> Used to set the width/height of the mask in pixels to match the Calendar Container.Currently only used for IE6 or IE in quirks mode. The other A-Grade browser are handled using CSS (width/height 100%).The method is also registered as an HTMLElement resize listener on the Calendars container element. </summary>
};
YAHOO.widget.CalendarNavigator.prototype.getYear = function() {
   /// <summary> Returns the current year set on the navigatorNote: This may not be the year set in the UI, if the UI contains an invalid value. </summary>
   /// <returns type="Number" />
};
YAHOO.widget.CalendarNavigator.prototype.destroy = function() {
   /// <summary> Destroys the Navigator object and any HTML references </summary>
};
YAHOO.widget.CalendarNavigator.prototype.getMonth = function() {
   /// <summary> Returns the current month set on the navigatorNote: This may not be the month set in the UI, if the UI contains an invalid value. </summary>
   /// <returns type="Number" />
};
YAHOO.widget.CalendarNavigator.prototype.showMask = function() {
   /// <summary> Displays the navigator's mask element </summary>
};
YAHOO.widget.CalendarNavigator.prototype.renderButton = function() {
   /// <summary> Renders the submit/cancel buttons for the navigator </summary>
   /// <returns type="String" />
};
YAHOO.widget.CalendarNavigator.prototype.clearErrors = function() {
   /// <summary> Clears all validation and error messages in the UI </summary>
};
YAHOO.widget.CalendarNavigator.prototype.applyListeners = function() {
   /// <summary> Attaches DOM event listeners to the rendered elementsThe method will call applyKeyListeners, to setup keyboard specific listeners </summary>
};
YAHOO.widget.CalendarNavigator.prototype.setMonth = function(nMonth) {
   /// <summary> Sets the current month on the Navigator, and updates the UI </summary>
 /// <param name="nMonth" type="Number"> The month index, from 0 (Jan) through 11 (Dec).</param>
};
YAHOO.widget.CalendarNavigator.prototype.clearYearError = function() {
   /// <summary> Removes the validation error UI for the year control </summary>
};
YAHOO.widget.CalendarNavigator.prototype.clearError = function() {
   /// <summary> Clears the navigator's error message and hides the error panel </summary>
};
YAHOO.widget.CalendarNavigator.prototype.setError = function(msg) {
   /// <summary> Displays an error message in the Navigator's error panel </summary>
 /// <param name="msg" type="String"> The error message to display</param>
};
YAHOO.widget.CalendarNavigator.prototype.purgeListeners = function() {
   /// <summary> Removes/purges DOM event listeners from the rendered elements </summary>
};
YAHOO.widget.CalendarNavigator.prototype._setFirstLastElements = function() {
   /// <summary> Sets up references to the first and last focusable element in the Navigator's UIin terms of tab order (Naviagator's firstEl and lastEl properties). The referencesare used to control modality by looping around from the first to the last controland visa versa for tab/shift-tab navigation.See applyKeyListeners </summary>
};
YAHOO.widget.CalendarNavigator.prototype._show = function() {
   /// <summary> Protected implementation to handle how UI elements are hidden/shown. </summary>
};
YAHOO.widget.CalendarNavigator.prototype.setInitialFocus = function() {
   /// <summary> Sets the initial focus, based on the configured value </summary>
};
YAHOO.widget.CalendarNavigator.prototype._handleEnterKey = function(e) {
   /// <summary> Default Keyboard event handler to capture Enter on the Navigator's year control (yearEl) </summary>
 /// <param name="e" type="Event"> The DOM event being handled</param>
};
YAHOO.widget.CalendarNavigator.prototype.__getCfg = function(Case, True) {
   /// <summary> Retrieve Navigator configuration values from the parent Calendar/CalendarGroup's config value.If it has not been set in the user provided configuration, the method will return the default value of the configuration property, as set in DEFAULT_CONFIG </summary>
   /// <private />
   /// <returns type="" />
 /// <param name="Case" type="String"> sensitive property name.</param>
 /// <param name="true," type="Boolean"> if the property is a string property, false if not.</param>
};
YAHOO.widget.CalendarNavigator.prototype.setYear = function(nYear) {
   /// <summary> Sets the current year on the Navigator, and updates the UI. If the provided year is invalid, it will not be set. </summary>
 /// <param name="nYear" type="Number"> The full year value to set the Navigator to.</param>
};
YAHOO.widget.CalendarNavigator.prototype._handleTabKey = function(e) {
   /// <summary> Default Keyboard event handler to capture Tab on the last control (lastCtrl) in the Navigator. </summary>
 /// <param name="e" type="Event"> The DOM event being handled</param>
};
YAHOO.widget.CalendarNavigator.prototype.createMask = function() {
   /// <summary> Creates the Mask HTMLElement and appends it to the Calendar/CalendarGroupscontainer. </summary>
};
YAHOO.widget.CalendarNavigator.prototype.purgeKeyListeners = function() {
   /// <summary> Removes/purges DOM listeners for keyboard support </summary>
};
YAHOO.widget.CalendarNavigator.prototype.renderYear = function(html) {
   /// <summary> Renders the year label and control for the navigator </summary>
   /// <returns type="Array" />
 /// <param name="html" type="Array"> The HTML buffer to append the HTML to.</param>
};
YAHOO.widget.CalendarNavigator.prototype._updateYearUI = function() {
   /// <summary> Updates the Navigator's year UI, based on the year value set on the Navigator object </summary>
};
YAHOO.widget.Carousel.prototype.registerPagination = function(template) {
   /// <summary> Register carousels pagination template, append to interface, and populate. </summary>
 /// <param name="template" type="String">  Pagination template as passed to lang.substitute</param>
};
YAHOO.widget.Carousel.prototype.show = function() {
   /// <summary> Display the Carousel. </summary>
};
YAHOO.widget.Carousel.prototype.focus = function() {
   /// <summary> Set focus on the Carousel. </summary>
};
YAHOO.widget.Carousel.prototype._setupCarouselNavigation = function() {
   /// <summary> Setup/Create the Carousel navigation element (if needed). </summary>
};
YAHOO.widget.Carousel.prototype.initAttributes = function(attrs) {
   /// <summary> Initialize the configuration attributes used to create the Carousel. </summary>
 /// <param name="attrs" type="Object">  The set of configuration attributes forcreating the Carousel.</param>
};
YAHOO.widget.Carousel.prototype._setRevealAmount = function(val) {
   /// <summary> Set the value for the reveal amount percentage in the Carousel. </summary>
   /// <returns type="Number" />
 /// <param name="val" type="Number">  The new value for revealAmount</param>
};
YAHOO.widget.Carousel.prototype.scrollPageBackward = function(ev, obj) {
   /// <summary> Scroll the Carousel by a page backward. </summary>
   /// <private />
 /// <param name="ev" type="Event"> The event object</param>
 /// <param name="obj" type="Object"> The context object</param>
};
YAHOO.widget.Carousel.prototype._validateScrollIncrement = function(val) {
   /// <summary> Validate the scrollIncrement value. </summary>
   /// <returns type="Boolean" />
 /// <param name="val" type="Number">  The scrollIncrement value</param>
};
YAHOO.widget.Carousel.prototype.syncPagerUi = function() {
   /// <summary> Synchronize and redraw the Pager UI if necessary. </summary>
   /// <private />
};
YAHOO.widget.Carousel.prototype._updateNavButtons = function(el, setterFocus) {
   /// <summary> Set the correct class for the navigation buttons. </summary>
 /// <param name="el" type="Object">  The target button</param>
 /// <param name="setFocus" type="Boolean">  True to set focus ring, false otherwise.</param>
};
YAHOO.widget.Carousel.prototype.init = function(el, attrs) {
   /// <summary> Initialize the Carousel. </summary>
 /// <param name="el" type="HTMLElement | String">  The html element that representsthe Carousel container.</param>
 /// <param name="attrs" type="Object">  The set of configuration attributes forcreating the Carousel.</param>
};
YAHOO.widget.Carousel.prototype.isAnimating = function() {
   /// <summary> Return true if the Carousel is still animating, or false otherwise. </summary>
   /// <returns type="Boolean" />
};
YAHOO.widget.Carousel.prototype.syncNavigation = function() {
   /// <summary> Fire custom events for enabling/disabling navigation elements. </summary>
   /// <private />
};
YAHOO.widget.Carousel.prototype._validateNavigation = function(cfg) {
   /// <summary> Validate and navigation parameters. </summary>
   /// <returns type="Boolean" />
 /// <param name="cfg" type="Object">  The navigation configuration</param>
};
YAHOO.widget.Carousel.prototype.updateStateAfterScroll = function(item, sentinel) {
   /// <summary> Update the state variables after scrolling the Carousel view port. </summary>
   /// <private />
 /// <param name="item" type="Integer"> The index to which the Carousel has scrolled to.</param>
 /// <param name="sentinel" type="Integer"> The last element in the view port.</param>
};
YAHOO.widget.Carousel.prototype.parseCarouselItems = function() {
   /// <summary> Find the items within the Carousel and add them to the items table.A Carousel item is identified by elements that matches the carouselitem element tag. </summary>
};
YAHOO.widget.Carousel.prototype._syncUiForItemReplace = function() {
   /// <summary> Synchronize and redraw the UI after an item is replaced. </summary>
};
YAHOO.widget.Carousel.prototype.getDimensions = function(el, which) {
   /// <summary> Get full dimensions of an element. </summary>
   /// <private />
 /// <param name="el" type="Object"> The element to get the dimensions of</param>
 /// <param name="which" type="String"> Get the height or width of an element</param>
};
YAHOO.widget.Carousel.prototype._pagerClickHandler = function(ev) {
   /// <summary> The "click" handler for anchor pagination. </summary>
 /// <param name="ev" type="Event"> The event object</param>
};
YAHOO.widget.Carousel.prototype.removeItem = function(index) {
   /// <summary> Remove an item at index from the Carousel. </summary>
   /// <returns type="Boolean" />
 /// <param name="index" type="Number">  The position to where in the list (starts fromzero).</param>
};
YAHOO.widget.Carousel.prototype._validateRevealAmount = function(val) {
   /// <summary> Validate the revealAmount value. </summary>
   /// <returns type="Boolean" />
 /// <param name="val" type="Number">  The revealAmount value</param>
};
YAHOO.widget.Carousel.prototype.stopAutoPlay = function() {
   /// <summary> Stop auto-playing the Carousel. </summary>
};
YAHOO.widget.Carousel.prototype.isAutoPlayOn = function() {
   /// <summary> Return true if the auto-scrolling of Carousel is "on", or falseotherwise. </summary>
   /// <returns type="Boolean" />
};
YAHOO.widget.Carousel.prototype._refreshUi = function() {
   /// <summary> Refresh the widget UI if it is not already rendered, on first itemaddition. </summary>
};
YAHOO.widget.Carousel.prototype.getElementForItems = function() {
   /// <summary> Return the carouselItemEl for all items in the Carousel. </summary>
   /// <returns type="Array" />
};
YAHOO.widget.Carousel.prototype._validateNumVisible = function(val) {
   /// <summary> Validate the numVisible value. </summary>
   /// <returns type="Boolean" />
 /// <param name="val" type="Number">  The numVisible value</param>
};
YAHOO.widget.Carousel.prototype.getPageForItem = function(index) {
   /// <summary> Get the page an item is on within carousel. </summary>
   /// <returns type="Number" />
 /// <param name="index" type="Number">  Index of item</param>
};
YAHOO.widget.Carousel.prototype._animationCompleteHandler = function(ev, p, o) {
   /// <summary> Handle the animation complete event. </summary>
 /// <param name="ev" type="Event"> The event.</param>
 /// <param name="p" type="Array"> The event parameters.</param>
 /// <param name="o" type="Object"> The object that has the state of the Carousel</param>
};
YAHOO.widget.Carousel.prototype._pagerChangeHandler = function(ev) {
   /// <summary> The "onchange" handler for select box pagination. </summary>
 /// <param name="ev" type="Event"> The event object</param>
};
YAHOO.widget.Carousel.prototype._autoScroll = function() {
   /// <summary> Automatically scroll the contents of the Carousel. </summary>
};
YAHOO.widget.Carousel.prototype.hide = function() {
   /// <summary> Hide the Carousel. </summary>
};
YAHOO.widget.Carousel.prototype.scrollForward = function() {
   /// <summary> Scroll the Carousel by an item forward. </summary>
};
YAHOO.widget.Carousel.prototype.getCarouselItemPosition = function(position) {
   /// <summary> Compute and return the position of a Carousel item based on itsposition. </summary>
   /// <private />
 /// <param name="position" type="Number">  The position of the Carousel item.</param>
};
YAHOO.widget.Carousel.prototype._setSelectedItem = function(val) {
   /// <summary> Set the value for the selected item. </summary>
 /// <param name="val" type="Number">  The new value for "selected" item</param>
};
YAHOO.widget.Carousel.prototype._numVisibleSetter = function(val) {
   /// <summary> Set the value for the number of visible items in the Carousel. </summary>
   /// <returns type="Number" />
 /// <param name="val" type="Number">  The new value for numVisible</param>
};
YAHOO.widget.Carousel.prototype.getItems = function() {
   /// <summary> Return all items as an array. </summary>
   /// <returns type="Array" />
};
YAHOO.widget.Carousel.prototype.toString = function() {
   /// <summary> Return the string representation of the Carousel. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Carousel.prototype.replaceItem = function(item, index) {
   /// <summary> Replace an item at index witin Carousel. </summary>
   /// <returns type="Boolean" />
 /// <param name="item" type="String | Object | HTMLElement">  The item to be appendedto the Carousel. If the parameter is a string, it is assumed to bethe content of the newly created item. If the parameter is anobject, it is assumed to supply the content and an optional classand an optional id of the newly created item.</param>
 /// <param name="index" type="Number">  The position to where in the list (starts fromzero).</param>
};
YAHOO.widget.Carousel.prototype.blur = function() {
   /// <summary> Remove focus from the Carousel. </summary>
};
YAHOO.widget.Carousel.prototype.addItems = function(items) {
   /// <summary> Insert or append multiple items to the Carousel. </summary>
   /// <returns type="Boolean" />
 /// <param name="items" type="Array} An array containing an array of new items each linked to theindex where the insertion should take place.E.g. [[{content:''}, index1], [{content:''"> , index2]]NOTE: An item at index must already exist.</param>
};
YAHOO.widget.Carousel.prototype._updatePagerButtons = function() {
   /// <summary> Update the UI for the pager buttons based on the current page andthe number of pages. </summary>
};
YAHOO.widget.Carousel.prototype._syncUiItems = function() {
   /// <summary> Redraw the UI for item positioning. </summary>
};
YAHOO.widget.Carousel.prototype.addItem = function(item, index) {
   /// <summary> Insert or append an item to the Carousel.E.g. if Object: ({content:"Your Content", id:"", className:""}, index) </summary>
   /// <returns type="Boolean" />
 /// <param name="item" type="String | Object | HTMLElement">  The item to be appendedto the Carousel. If the parameter is a string, it is assumed to bethe content of the newly created item. If the parameter is anobject, it is assumed to supply the content and an optional classand an optional id of the newly created item.</param>
 /// <param name="index" type="Number">  optional The position to where in the list(starts from zero).</param>
};
YAHOO.widget.Carousel.prototype._setContainerSize = function(clip, attr) {
   /// <summary> Set the container size. </summary>
 /// <param name="clip" type="HTMLElement">  The clip container element.</param>
 /// <param name="attr" type="String">  Either set the height or width.</param>
};
YAHOO.widget.Carousel.prototype._setNumItems = function(val) {
   /// <summary> Set the number of items in the Carousel.Warning: Setting this to a lower number than the current removesitems from the end. </summary>
   /// <returns type="Number" />
 /// <param name="val" type="Number">  The new value for numItems</param>
};
YAHOO.widget.Carousel.prototype.getLoadingItems = function() {
   /// <summary> Return all loading items as an array. </summary>
   /// <returns type="Array" />
};
YAHOO.widget.Carousel.prototype.scrollBackward = function() {
   /// <summary> Scroll the Carousel by an item backward. </summary>
};
YAHOO.widget.Carousel.prototype.selectNextItem = function() {
   /// <summary> Select the next item in the Carousel. </summary>
};
YAHOO.widget.Carousel.prototype._animateAndSetCarouselOffset = function(offsetter, item, sentinel) {
   /// <summary> Set the Carousel offset to the passed offset after animating. </summary>
 /// <param name="offset" type="Integer"> The offset to which the Carousel has to bescrolled to.</param>
 /// <param name="item" type="Integer"> The index to which the Carousel will scroll.</param>
 /// <param name="sentinel" type="Integer"> The last element in the view port.</param>
};
YAHOO.widget.Carousel.prototype._selectedItemSetter = function(val) {
   /// <summary> Set the value for selectedItem. </summary>
   /// <returns type="Number" />
 /// <param name="val" type="Number">  The new value for selectedItem</param>
};
YAHOO.widget.Carousel.prototype._validateFirstVisible = function(val) {
   /// <summary> Validate the firstVisible value. </summary>
   /// <returns type="Boolean" />
 /// <param name="val" type="Number">  The first visible value</param>
};
YAHOO.widget.Carousel.prototype.updatePagination = function() {
   /// <summary> Update interface's pagination data within a registered template. </summary>
};
YAHOO.widget.Carousel.prototype.getVisibleItems = function() {
   /// <summary> Return all visible items as an array. </summary>
   /// <returns type="Array" />
};
YAHOO.widget.Carousel.prototype.getFirstVisibleForPosition = function(pos) {
   /// <summary> Return the index of the first item in the view port for displaying itemin "pos". </summary>
   /// <private />
 /// <param name="pos" type="Number">  The position of the item to be displayed</param>
};
YAHOO.widget.Carousel.prototype.render = function(appendTo) {
   /// <summary> Render the Carousel. </summary>
   /// <returns type="Boolean" />
 /// <param name="appendTo" type="HTMLElement | String">  The element to which theCarousel should be appended prior to rendering.</param>
};
YAHOO.widget.Carousel.prototype.replaceItems = function(items) {
   /// <summary> Replace multiple items at specified indexes.NOTE: item at index must already exist. </summary>
   /// <returns type="Boolean" />
 /// <param name="items" type="Array} An array containing an array of replacement items each linked to theindex where the substitution should take place.E.g. [[{content:''}, index1], [{content:''"> , index2]]</param>
};
YAHOO.widget.Carousel.prototype.getElementForItem = function(index) {
   /// <summary> Return the carouselItemEl at index or null if the index is notfound. </summary>
   /// <returns type="Element" />
 /// <param name="index" type="Number">  The index of the item to be returned</param>
};
YAHOO.widget.Carousel.prototype._setNumVisible = function(val) {
   /// <summary> Clip the container size every time numVisible is set. </summary>
   /// <returns type="Number" />
 /// <param name="val" type="Number">  The new value for numVisible</param>
};
YAHOO.widget.Carousel.prototype._keyboardEventHandler = function(ev) {
   /// <summary> The keyboard event handler for Carousel. </summary>
 /// <param name="ev" type="Event">  The event that is being handled.</param>
};
YAHOO.widget.Carousel.prototype.getFirstVisibleOnpage = function(page) {
   /// <summary> Get the first visible item's index on any given page. </summary>
   /// <returns type="Number" />
 /// <param name="page" type="Number">  Page</param>
};
YAHOO.widget.Carousel.prototype.scrollPageForward = function(ev, obj) {
   /// <summary> Scroll the Carousel by a page forward. </summary>
   /// <private />
 /// <param name="ev" type="Event"> The event object</param>
 /// <param name="obj" type="Object"> The context object</param>
};
YAHOO.widget.Carousel.prototype.initEvents = function() {
   /// <summary> Initialize and bind the event handlers. </summary>
};
YAHOO.widget.Carousel.prototype._getSelectedItem = function(val) {
   /// <summary> Get the value for the selected item. </summary>
   /// <returns type="Number" />
 /// <param name="val" type="Number">  The new value for "selected" item</param>
};
YAHOO.widget.Carousel.prototype._syncUiForLazyLoading = function() {
   /// <summary> Synchronize and redraw the UI for lazy loading. </summary>
};
YAHOO.widget.Carousel.prototype.createCarouselClip = function() {
   /// <summary> Create the Carousel clip container. </summary>
};
YAHOO.widget.Carousel.prototype._updatePagerMenu = function() {
   /// <summary> Update the UI for the pager menu based on the current page andthe number of pages.  If the number of pages is greater thanMAX_PAGER_BUTTONS, then the selection of pages is provided by a dropdown menu instead of a set of buttons. </summary>
};
YAHOO.widget.Carousel.prototype.parseCarousel = function(parent) {
   /// <summary> Find the Carousel within a container. The Carousel is identified bythe first element that matches the carousel element tag or theelement that has the Carousel class. </summary>
   /// <returns type="Boolean" />
 /// <param name="parent" type="HTMLElement">  The parent element to look under</param>
};
YAHOO.widget.Carousel.prototype.getScrollOffset = function(delta) {
   /// <summary> Return the scrolling offset size given the number of elements toscroll. </summary>
   /// <private />
 /// <param name="delta" type="Number">  The delta number of elements to scroll by.</param>
};
YAHOO.widget.Carousel.prototype._getValidIndex = function(index) {
   /// <summary> Return a valid item for a possibly out of bounds index consideringthe isCircular property. </summary>
   /// <returns type="Object" />
 /// <param name="index" type="Number">  The index of the item to be returned</param>
};
YAHOO.widget.Carousel.prototype.createElement = function(el, attrs) {
   /// <summary> Create an element, set its class name and optionally install the elementto its parent. </summary>
   /// <private />
 /// <param name="el" type="String">  The element to be created</param>
 /// <param name="attrs" type="Object">  Configuration of parent, class and id attributes.If the content is specified, it is inserted after creation of theelement. The content can also be an HTML element in which case it wouldbe appended as a child node of the created element.</param>
};
YAHOO.widget.Carousel.prototype.setItemSelection = function(newpos, oldpos) {
   /// <summary> Set the selected item. </summary>
   /// <private />
 /// <param name="newpos" type="Number"> The index of the new position</param>
 /// <param name="oldpos" type="Number"> The index of the previous position</param>
};
YAHOO.widget.Carousel.prototype._syncUiForItemAdd = function() {
   /// <summary> Synchronize and redraw the UI after an item is added. </summary>
};
YAHOO.widget.Carousel.prototype.createCarouselItem = function(obj) {
   /// <summary> Create the Carousel item. </summary>
 /// <param name="obj" type="Object">  The attributes of the element to be created</param>
};
YAHOO.widget.Carousel.prototype._setFirstVisible = function(val) {
   /// <summary> Set the value for the Carousel's first visible item. </summary>
   /// <returns type="Number" />
 /// <param name="val" type="Number">  The new value for firstVisible</param>
};
YAHOO.widget.Carousel.prototype._validateNumItems = function(val) {
   /// <summary> Validate the numItems value. </summary>
   /// <returns type="Boolean" />
 /// <param name="val" type="Number">  The numItems value</param>
};
YAHOO.widget.Carousel.prototype.getItemPositionById = function(index) {
   /// <summary> Return the position of the Carousel item that has the id "id", or -1if the id is not found. </summary>
 /// <param name="index" type="Number">  The index of the item to be returned</param>
};
YAHOO.widget.Carousel.prototype.scrollTo = function(item, dontSelect) {
   /// <summary> Scroll the Carousel to make the item the first visible item. </summary>
 /// <param name="item" type=""> Number The index of the element to position at.</param>
 /// <param name="dontSelect" type=""> Boolean True if select should be avoided</param>
};
YAHOO.widget.Carousel.prototype._getNumPages = function() {
   /// <summary> Get the total number of pages. </summary>
};
YAHOO.widget.Carousel.prototype.selectPreviousItem = function() {
   /// <summary> Select the previous item in the Carousel. </summary>
};
YAHOO.widget.Carousel.prototype.getRevealSize = function() {
   /// <summary> Return the size of a part of the item (reveal). </summary>
   /// <private />
};
YAHOO.widget.Carousel.prototype.syncUi = function(o) {
   /// <summary> Handle UI update.Call the appropriate methods on events fired when an item is added, orremoved for synchronizing the DOM. </summary>
   /// <private />
 /// <param name="o" type="Object"> The item that needs to be added or removed</param>
};
YAHOO.widget.Carousel.prototype._updateTabIndex = function(el) {
   /// <summary> Set the correct tab index for the Carousel items. </summary>
 /// <param name="el" type="Object">  The element to be focussed</param>
};
YAHOO.widget.Carousel.prototype.clearItems = function() {
   /// <summary> Clears the items from Carousel. </summary>
};
YAHOO.widget.Carousel.prototype._validateAnimation = function(cfg) {
   /// <summary> Validate animation parameters. </summary>
   /// <returns type="Boolean" />
 /// <param name="cfg" type="Object">  The animation configuration</param>
};
YAHOO.widget.Carousel.prototype._getLastVisible = function() {
   /// <summary> Get the last visible item. </summary>
};
YAHOO.widget.Carousel.prototype.setStyles = function(el, style) {
   /// <summary> Set multiple styles on one element. </summary>
   /// <private />
 /// <param name="el" type="HTMLElement">  The element to set styles on</param>
 /// <param name="style" type="Object">  top:"10px", left:"0px", etc.</param>
};
YAHOO.widget.Carousel.prototype._setNavigation = function(cfg) {
   /// <summary> Set the value for the Carousel's navigation. </summary>
   /// <returns type="Object" />
 /// <param name="cfg" type="Object">  The navigation configuration</param>
};
YAHOO.widget.Carousel.getById = function() {
   /// <summary> Return the appropriate Carousel object based on the id associated withthe Carousel element or false if none match. </summary>
};
YAHOO.widget.Carousel.prototype._setOrientation = function(val) {
   /// <summary> Set the orientation of the Carousel. </summary>
   /// <returns type="Boolean" />
 /// <param name="val" type="Boolean">  The new value for isVertical</param>
};
YAHOO.widget.Carousel.prototype._itemClickHandler = function(ev) {
   /// <summary> The "click" handler for the item. </summary>
 /// <param name="ev" type="Event"> The event object</param>
};
YAHOO.widget.Carousel.prototype._setCarouselOffset = function() {
   /// <summary> Set the Carousel offset to the passed offset. </summary>
};
YAHOO.widget.Carousel.prototype.getStyle = function(el, style, type) {
   /// <summary> Get the computed style of an element. </summary>
   /// <private />
 /// <param name="el" type="HTMLElement">  The element for which the style needs to bereturned.</param>
 /// <param name="style" type="String">  The style attribute</param>
 /// <param name="type" type="String">  "int", "float", etc. (defaults to int)</param>
};
YAHOO.widget.Carousel.prototype.createCarousel = function(elId) {
   /// <summary> Create the Carousel. </summary>
 /// <param name="elId" type="String">  The id of the element to be created</param>
};
YAHOO.widget.Carousel.prototype.getItem = function(index) {
   /// <summary> Return the item at index or null if the index is not found. </summary>
   /// <returns type="Object" />
 /// <param name="index" type="Number">  The index of the item to be returned</param>
};
YAHOO.widget.Carousel.prototype._loadItems = function() {
   /// <summary> The load the required set of items that are needed for display. </summary>
};
YAHOO.widget.Carousel.prototype.parseCarouselNavigation = function(parent) {
   /// <summary> Find the Carousel navigation within a container. The navigationelements need to match the carousel navigation class names. </summary>
   /// <returns type="Boolean" />
 /// <param name="parent" type="HTMLElement">  The parent element to look under</param>
};
YAHOO.widget.Carousel.prototype.getCarouselItemSize = function(which) {
   /// <summary> Compute and return the height or width of a single Carousel itemdepending upon the orientation. </summary>
   /// <private />
 /// <param name="which" type="String">  "height" or "width" to be returned.  If this ispassed explicitly, the calculated size is not cached.</param>
};
YAHOO.widget.Carousel.prototype._setClipContainerSize = function(clip, num) {
   /// <summary> Set the clip container size (based on the new numVisible value). </summary>
 /// <param name="clip" type="HTMLElement">  The clip container element.</param>
 /// <param name="num" type="Number">  optional The number of items per page.</param>
};
YAHOO.widget.Carousel.prototype.startAutoPlay = function() {
   /// <summary> Start auto-playing the Carousel. </summary>
};
YAHOO.widget.CartesianChart.prototype._setYAxis = function() {
   /// <summary> Setter for the yAxis attribute. </summary>
   /// <private />
};
YAHOO.widget.CartesianChart.prototype._setXField = function() {
   /// <summary> Setter for the xField attribute. </summary>
   /// <private />
};
YAHOO.widget.CartesianChart.prototype.setSeriesStylesByIndex = function(index, style) {
   /// <summary> Sets the style object for a single series based on its index </summary>
 /// <param name="index" type="Number">  The position within the series definition to apply the style</param>
 /// <param name="style" type="object">  Style object to be applied to the selected series</param>
};
YAHOO.widget.CartesianChart.prototype._setXAxes = function() {
   /// <summary> Setter for the xAxes attribute </summary>
   /// <private />
};
YAHOO.widget.CartesianChart.prototype._setConstrainViewport = function() {
   /// <summary> Setter for the constrainViewport attribute </summary>
   /// <private />
};
YAHOO.widget.CartesianChart.prototype._getYField = function() {
   /// <summary> Getter for the yField attribute. </summary>
   /// <private />
};
YAHOO.widget.CartesianChart.prototype._setYAxes = function() {
   /// <summary> Setter for the yAxes attribute. </summary>
   /// <private />
};
YAHOO.widget.CartesianChart.prototype._initAttributes = function() {
   /// <summary> Initializes the attributes. </summary>
   /// <private />
};
YAHOO.widget.CartesianChart.prototype._setXAxis = function() {
   /// <summary> Setter for the xAxis attribute. </summary>
   /// <private />
};
YAHOO.widget.CartesianChart.prototype._getXField = function() {
   /// <summary> Getter for the xField attribute. </summary>
   /// <private />
};
YAHOO.widget.CartesianChart.prototype._removeAxisFunctions = function() {
   /// <summary> Removes axis functions contained in an array </summary>
   /// <private />
};
YAHOO.widget.CartesianChart.prototype._setYField = function() {
   /// <summary> Setter for the yField attribute. </summary>
   /// <private />
};
YAHOO.widget.CartesianChart.prototype._getClonedAxis = function() {
   /// <summary> Receives an axis object, creates a proxy function for the labelFunction and returns the updated object. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype._loadHandler = function() {
   /// <summary> Called when the SWF is ready for communication. Sets the type, initializesthe styles, and sets the DataSource. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype._getDataSource = function() {
   /// <summary> Getter for the dataSource attribute. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype.refreshData = function() {
   /// <summary> Sends (or resends) the request to the DataSource. </summary>
};
YAHOO.widget.Chart.prototype._initAttributes = function() {
   /// <summary> Initializes the attributes. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype._setLegendLabelFunction = function() {
   /// <summary> Setter for the legendLabelFunction attribute. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype._setPolling = function() {
   /// <summary> Setter for the polling attribute. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype._getSeriesDefs = function() {
   /// <summary> Getter for the series attribute. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype._setCategoryNames = function() {
   /// <summary> Setter for the categoryNames attribute. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype.setStyles = function(styles) {
   /// <summary> Resets all styles on the Chart instance. </summary>
 /// <param name="styles" type="Object">  Initializer for all Chart styles.</param>
};
YAHOO.widget.Chart.prototype.toString = function() {
   /// <summary> Public accessor to the unique name of the Chart instance. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Chart.prototype._eventHandler = function() {
   /// <summary> Handles swfReady event from SWF. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype._getAltText = function() {
   /// <summary> Getter for altText attribute. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype._getRequest = function() {
   /// <summary> Getter for the request attribute. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype._setAltText = function() {
   /// <summary> Setter for altText attribute. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype._setDataTipFunction = function() {
   /// <summary> Setter for the dataTipFunction attribute. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype._setSeriesDefs = function() {
   /// <summary> Setter for the series attribute. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype._setRequest = function() {
   /// <summary> Setter for the request attribute. </summary>
   /// <private />
};
YAHOO.widget.Chart.getFunctionReference = function() {
   /// <summary> Uses YAHOO.widget.Chart.createProxyFunction to return stringreference to a function. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype._loadDataHandler = function() {
   /// <summary> Called when the DataSource receives new data. The series definitions are usedto build a data provider for the SWF chart. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype._getSWFURL = function() {
   /// <summary> Getter for swfURL attribute. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype.setSeriesStyles = function(styles) {
   /// <summary> Sets the styles on all series in the Chart. </summary>
 /// <param name="styles" type="Array">  Initializer for all Chart series styles.</param>
};
YAHOO.widget.Chart.createProxyFunction = function() {
   /// <summary> Creates a globally accessible function that wraps a function reference.Returns the proxy function's name as a string for use by the SWF throughExternalInterface. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype._getPolling = function() {
   /// <summary> Getter for the polling attribute. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype._getCategoryNames = function() {
   /// <summary> Getter for the categoryNames attribute. </summary>
   /// <private />
};
YAHOO.widget.Chart.prototype.setStyle = function(name, value) {
   /// <summary> Sets a single style value on the Chart instance. </summary>
 /// <param name="name" type="String">  Name of the Chart style value to change.</param>
 /// <param name="value" type="Object">  New value to pass to the Chart style.</param>
};
YAHOO.widget.Chart.prototype._setDataSource = function() {
   /// <summary> Setter for the dataSource attribute. </summary>
   /// <private />
};
YAHOO.widget.Chart.removeProxyFunction = function() {
   /// <summary> Removes a function created with createProxyFunction() </summary>
   /// <private />
};
YAHOO.widget.CheckboxCellEditor.prototype.renderForm = function() {
   /// <summary> Render a form with input(s) type=checkbox. </summary>
};
YAHOO.widget.CheckboxCellEditor.prototype.handleDisabledBtns = function() {
   /// <summary> After rendering form, if disabledBtns is set to true, then sets up a mechanismto save input without them. </summary>
};
YAHOO.widget.CheckboxCellEditor.prototype.focus = function() {
   /// <summary> Sets focus in CheckboxCellEditor. </summary>
};
YAHOO.widget.CheckboxCellEditor.prototype.getInputValue = function() {
   /// <summary> Retrieves input value from CheckboxCellEditor. </summary>
};
YAHOO.widget.CheckboxCellEditor.prototype.resetForm = function() {
   /// <summary> Resets CheckboxCellEditor UI to initial state. </summary>
};
YAHOO.widget.ColorPicker.prototype._hexFieldKeypress = function(e, el, prop) {
   /// <summary> Handle keydown on the hex field </summary>
 /// <param name="e" type="Event">  the keypress event</param>
 /// <param name="el" type="HTMLElement">  the field</param>
 /// <param name="prop" type="string">  the key to the linked property</param>
};
YAHOO.widget.ColorPicker.prototype._updateRGBFromHSV = function() {
   /// <summary> Updates the RGB values from the current state of the HSVvalues.  Executed when the one of the HSV form fields areupdated_updateRGBFromHSV </summary>
};
YAHOO.widget.ColorPicker.prototype.initAttributes = function(attr) {
   /// <summary> Sets up the config attributes and the change listeners for thisproperties </summary>
 /// <param name="attr" type=""> An object containing default attribute values</param>
};
YAHOO.widget.ColorPicker.prototype._initSliders = function() {
   /// <summary> Creates the Hue and Value/Saturation Sliders. </summary>
};
YAHOO.widget.ColorPicker.prototype._onHueSliderChange = function(newOffsetter) {
   /// <summary> Event handler for the hue slider. </summary>
 /// <param name="newOffset" type="int">  pixels from the start position</param>
};
YAHOO.widget.ColorPicker.prototype._updatePickerSlider = function() {
   /// <summary> Moves the picker slider into the position dictated by the current stateof the control </summary>
};
YAHOO.widget.ColorPicker.prototype._getCommand = function(e) {
   /// <summary> Key map to well-known commands for txt field input </summary>
   /// <returns type="int" />
 /// <param name="e" type="Event">  the keypress or keydown event</param>
};
YAHOO.widget.ColorPicker.prototype._useFieldValue = function(e, el, prop) {
   /// <summary> Use the value of the text field to update the control </summary>
 /// <param name="e" type="Event">  an event</param>
 /// <param name="el" type="HTMLElement">  the field</param>
 /// <param name="prop" type="string">  the key to the linked property</param>
};
YAHOO.widget.ColorPicker.prototype.getElement = function(id) {
   /// <summary> Returns the element reference that is saved.  The id can be eitherthe element id, or the key for this id in the "id" config attribute.For instance, the host element id can be obtained by passing itsid (default: "yui_picker") or by its key "YUI_PICKER". </summary>
   /// <returns type="HTMLElement" />
 /// <param name="id" type="string">  the element id, or key</param>
};
YAHOO.widget.ColorPicker.prototype._bindUI = function() {
   /// <summary> Adds event listeners to Sliders and UI elements.  Wires everythingup. </summary>
};
YAHOO.widget.ColorPicker.prototype._updateSwatch = function() {
   /// <summary> Updates the background of the swatch with the current rbg value.Also updates the websafe swatch to the closest websafe color </summary>
};
YAHOO.widget.ColorPicker.prototype._initElements = function() {
   /// <summary> Creates any missing DOM structure. </summary>
};
YAHOO.widget.ColorPicker.prototype._updateSliders = function() {
   /// <summary> Moves the sliders into the position dictated by the current stateof the control </summary>
};
YAHOO.widget.ColorPicker.prototype._createHostElement = function() {
   /// <summary> Creates the host element if it doesn't exist </summary>
};
YAHOO.widget.ColorPicker.prototype._onPickerSliderChange = function(newOffsetter) {
   /// <summary> Event handler for the picker slider, which controls thesaturation and value/brightness. </summary>
 /// <param name="newOffset" type="{x: int, y: int}">  x/y pixels from the start position</param>
};
YAHOO.widget.ColorPicker.prototype._updateRGB = function() {
   /// <summary> Updates the rgb attribute with the current state of the r,g,bfields.  This is invoked from change listeners on theseattributes to facilitate updating these values from theindividual form fields </summary>
};
YAHOO.widget.ColorPicker.prototype.setValue = function(rgb, silent) {
   /// <summary> Sets the control to the specified rgb value andmoves the sliders to the proper positions </summary>
 /// <param name="rgb" type="[int, int, int]">  the rgb value</param>
 /// <param name="silent" type="boolean">  whether or not to fire the change event</param>
};
YAHOO.widget.ColorPicker.prototype._updateHex = function() {
   /// <summary> Parses the hex string to normalize shorthand values, convertsthe hex value to rgb and updates the rgb attribute (whichupdates the state for all of the other values)method _updateHex </summary>
};
YAHOO.widget.ColorPicker.prototype._updateFormFields = function() {
   /// <summary> Updates the form field controls with the state data containedin the control. </summary>
};
YAHOO.widget.ColorPicker.prototype._hexOnly = function(e, numbersOnly) {
   /// <summary> Allows numbers and special chars, and by default allows a-f.  Used for the hex field keypress handler. </summary>
   /// <returns type="boolean" />
 /// <param name="e" type="Event">  the event</param>
 /// <param name="numbersOnly" type=""> omits a-f if set to true</param>
};
YAHOO.widget.ColorPicker.prototype.initPicker = function() {
   /// <summary> Sets the initial state of the sliders </summary>
};
YAHOO.widget.ColorPicker.prototype._hideShowEl = function(id, on) {
   /// <summary> Returns the cached element reference.  If the id is not a string, itis assumed that it is an element and this is returned. </summary>
 /// <param name="id" type="string|HTMLElement">  the element key, id, or ref</param>
 /// <param name="on" type="boolean">  hide or show.  If true, show</param>
};
YAHOO.widget.ColorPicker.prototype._updateHueSlider = function() {
   /// <summary> Moves the hue slider into the position dictated by the current stateof the control </summary>
};
YAHOO.widget.ColorPicker.prototype._numbersOnly = function(e) {
   /// <summary> Allows numbers and special chars only.  Used for thergb and hsv fields keypress handler. </summary>
   /// <returns type="boolean" />
 /// <param name="e" type="Event">  the event</param>
};
YAHOO.widget.ColorPicker.prototype.syncUI = function(skipAnim) {
   /// <summary> Wrapper for _updateRGB, but allows setting </summary>
 /// <param name="skipAnim" type="Boolean">  Omit Slider animation for this action</param>
};
YAHOO.widget.ColorPicker.prototype._getS = function() {
   /// <summary> Translates the slider value into saturation, int[0,1], left to right </summary>
   /// <returns type="int" />
};
YAHOO.widget.ColorPicker.prototype._getValuesFromSliders = function() {
   /// <summary> Reads the sliders and converts the values to RGB, updating theinternal state for all the individual form fields </summary>
};
YAHOO.widget.ColorPicker.prototype._getV = function() {
   /// <summary> Translates the slider value into value/brightness, int[0,1], topto bottom </summary>
   /// <returns type="int" />
};
YAHOO.widget.ColorPicker.prototype._getH = function() {
   /// <summary> Translates the slider value into hue, int[0,359] </summary>
   /// <returns type="int" />
};
YAHOO.widget.ColorPicker.prototype._rgbFieldKeypress = function(e, el, prop) {
   /// <summary> Handle keypress on one of the rgb or hsv fields. </summary>
 /// <param name="e" type="Event">  the keypress event</param>
 /// <param name="el" type="HTMLElement">  the field</param>
 /// <param name="prop" type="string">  the key to the linked property</param>
};
YAHOO.widget.Column.prototype.getSanitizedKey = function() {
   /// <summary> Returns Column key which has been sanitized for DOM (class and ID) usagestarts with letter, contains only letters, numbers, hyphen, or period. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Column.prototype.getTreeIndex = function() {
   /// <summary> Public accessor returns Column's current position index within itsColumnSet's tree array, if applicable. Only non-nested and top-level parentColumns will return a value; </summary>
   /// <returns type="Number" />
};
YAHOO.widget.Column.prototype.getParent = function() {
   /// <summary> Public accessor returns Column's parent instance if any, or null otherwise. </summary>
   /// <returns type="YAHOO.widget.Column" />
};
YAHOO.widget.Column.prototype.getField = function() {
   /// <summary> Returns field. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Column.prototype.getDefinition = function() {
   /// <summary> Returns object literal definition. </summary>
   /// <returns type="Object" />
};
YAHOO.widget.Column.prototype.getId = function() {
   /// <summary> Returns unique ID string. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Column.prototype.getKey = function() {
   /// <summary> Returns unique Column key. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Column.prototype.getKeyIndex = function() {
   /// <summary> Public accessor returns Column's current position index within itsColumnSet's keys array, if applicable. Only non-nested and bottom-levelchild Columns will return a value. </summary>
   /// <returns type="Number" />
};
YAHOO.widget.Column.prototype.getColspan = function() {
   /// <summary> Public accessor returns Column's calculated COLSPAN value. </summary>
   /// <returns type="Number" />
};
YAHOO.widget.Column.prototype.getRowspan = function() {
   /// <summary> Public accessor returns Column's calculated ROWSPAN value. </summary>
   /// <returns type="Number" />
};
YAHOO.widget.Column.prototype.toString = function() {
   /// <summary> Column instance name, for logging. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Column.prototype.getColEl = function() {
};
YAHOO.widget.Column.prototype.getThLInerEl = function() {
   /// <summary> Returns DOM reference to the TH's liner DIV element. Introduced sinceresizeable Columns may have an extra resizer liner, making the DIV linernot reliably the TH element's first child. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.Column.prototype.getThEl = function() {
   /// <summary> Returns DOM reference to the key TH element. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.Column.prototype.getResizerEl = function() {
   /// <summary> Returns DOM reference to the resizer element, or null. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.ColumnSet.prototype.getColumn = function(column) {
   /// <summary> Returns Column instance with given key or ColumnSet key index. </summary>
   /// <returns type="YAHOO.widget.Column" />
 /// <param name="column" type="String | Number">  Column key or ColumnSet key index.</param>
};
YAHOO.widget.ColumnSet.prototype.getDefinitions = function() {
   /// <summary> Public accessor to the definitions array. </summary>
   /// <returns type="Object[]" />
};
YAHOO.widget.ColumnSet.prototype._init = function(aDefinitions) {
   /// <summary> Initializes ColumnSet instance with data from Column definitions. </summary>
   /// <private />
 /// <param name="aDefinitions" type="Object[]">  Array of object literals that define cells inthe THEAD .</param>
};
YAHOO.widget.ColumnSet.prototype.getId = function() {
   /// <summary> Returns unique name of the ColumnSet instance. </summary>
   /// <returns type="String" />
};
YAHOO.widget.ColumnSet.prototype.getColumnById = function(column) {
   /// <summary> Returns Column instance with given ID. </summary>
   /// <returns type="YAHOO.widget.Column" />
 /// <param name="column" type="String">  Column ID.</param>
};
YAHOO.widget.ColumnSet.prototype.toString = function() {
   /// <summary> ColumnSet instance name, for logging. </summary>
   /// <returns type="String" />
};
YAHOO.widget.ColumnSet.prototype.getDescendants = function() {
   /// <summary> Public accessor returns array of given Column's desendants (if any), including itself. </summary>
   /// <returns type="Array" />
};
YAHOO.widget.ContainerEffect.prototype.handleStartAnimateIn = function(type, args, obj) {
   /// <summary> The default onStart handler for the in-animation. </summary>
 /// <param name="type" type="String"> The CustomEvent type</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments</param>
 /// <param name="obj" type="Object"> The scope object</param>
};
YAHOO.widget.ContainerEffect.prototype.handleStartAnimateOut = function(type, args, obj) {
   /// <summary> The default onStart handler for the out-animation. </summary>
 /// <param name="type" type="String"> The CustomEvent type</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments</param>
 /// <param name="obj" type="Object"> The scope object</param>
};
YAHOO.widget.ContainerEffect.prototype.animateOut = function() {
   /// <summary> Triggers the out-animation. </summary>
};
YAHOO.widget.ContainerEffect.SLIDE = function(overlay, dur) {
   /// <summary> A pre-configured ContainerEffect instance that can be used for sliding an overlay in and out. </summary>
   /// <returns type="YAHOO.widget.ContainerEffect" />
 /// <param name="overlay" type="YAHOO.widget.Overlay"> The Overlay object to animate</param>
 /// <param name="dur" type="Number"> The duration of the animation</param>
};
YAHOO.widget.ContainerEffect.prototype.handleCompleteAnimateOut = function(type, args, obj) {
   /// <summary> The default onComplete handler for the out-animation. </summary>
 /// <param name="type" type="String"> The CustomEvent type</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments</param>
 /// <param name="obj" type="Object"> The scope object</param>
};
YAHOO.widget.ContainerEffect.prototype.handleTweenAnimateOut = function(type, args, obj) {
   /// <summary> The default onTween handler for the out-animation. </summary>
 /// <param name="type" type="String"> The CustomEvent type</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments</param>
 /// <param name="obj" type="Object"> The scope object</param>
};
YAHOO.widget.ContainerEffect.prototype.handleTweenAnimateIn = function(type, args, obj) {
   /// <summary> The default onTween handler for the in-animation. </summary>
 /// <param name="type" type="String"> The CustomEvent type</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments</param>
 /// <param name="obj" type="Object"> The scope object</param>
};
YAHOO.widget.ContainerEffect.prototype.init = function() {
   /// <summary> Initializes the animation classes and events. </summary>
};
YAHOO.widget.ContainerEffect.prototype.toString = function() {
   /// <summary> Returns a string representation of the object. </summary>
   /// <returns type="String" />
};
YAHOO.widget.ContainerEffect.FADE = function(overlay, dur) {
   /// <summary> A pre-configured ContainerEffect instance that can be used for fading an overlay in and out. </summary>
   /// <returns type="YAHOO.widget.ContainerEffect" />
 /// <param name="overlay" type="YAHOO.widget.Overlay"> The Overlay object to animate</param>
 /// <param name="dur" type="Number"> The duration of the animation</param>
};
YAHOO.widget.ContainerEffect.prototype.handleCompleteAnimateIn = function(type, args, obj) {
   /// <summary> The default onComplete handler for the in-animation. </summary>
 /// <param name="type" type="String"> The CustomEvent type</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments</param>
 /// <param name="obj" type="Object"> The scope object</param>
};
YAHOO.widget.ContainerEffect.prototype.animateIn = function() {
   /// <summary> Triggers the in-animation. </summary>
};
YAHOO.widget.ContextMenu.prototype.initEvents = function() {
   /// <summary> Initializes the custom events for the context menu. </summary>
};
YAHOO.widget.ContextMenu.prototype._onTriggerClick = function(p_oEvent, p_oMenu) {
   /// <summary> "click" event handler for the HTML element(s) identified as the "trigger" for the context menu.  Used to cancel default behaviors in Opera. </summary>
   /// <private />
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object passed back by the event utility (YAHOO.util.Event).</param>
 /// <param name="p_oMenu" type="YAHOO.widget.ContextMenu"> Object representing the context menu that is handling the event.</param>
};
YAHOO.widget.ContextMenu.prototype.init = function(p_oElement, p_oConfig) {
   /// <summary> The ContextMenu class's initialization method. This method is automatically called by the constructor, and sets up all DOM references for pre-existing markup, and creates required markup if it is not already present. </summary>
 /// <param name="p_oElement" type="String"> String specifying the id attribute of the &#60;div&#62; element of the context menu.</param>
 /// <param name="p_oElement" type="String"> String specifying the id attribute of the &#60;select&#62; element to be used as the data source for the context menu.</param>
 /// <param name="p_oElement" type="HTMLDivElement"> Object specifying the &#60;div&#62; element of the context menu.</param>
 /// <param name="p_oElement" type="HTMLSelectElement"> Object specifying the &#60;select&#62; element to be used as the data source for the context menu.</param>
 /// <param name="p_oConfig" type="Object"> Optional. Object literal specifying the configuration for the context menu. See configuration class documentation for more details.</param>
};
YAHOO.widget.ContextMenu.prototype.toString = function() {
   /// <summary> Returns a string representing the context menu. </summary>
   /// <returns type="String" />
};
YAHOO.widget.ContextMenu.prototype._removeEventHandlers = function() {
   /// <summary> Removes all of the DOM event handlers from the HTML element(s) whose "context menu" event ("click" for Opera) trigger the display of the context menu. </summary>
   /// <private />
};
YAHOO.widget.ContextMenu.prototype.position = function(p_sType, p_aArgs, p_aPos) {
   /// <summary> "beforeShow" event handler used to position the contextmenu. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_aPos" type="Array"> Array representing the xy position for the context menu.</param>
};
YAHOO.widget.ContextMenu.prototype.cancel = function() {
   /// <summary> Cancels the display of the context menu. </summary>
};
YAHOO.widget.ContextMenu.prototype.destroy = function() {
   /// <summary> Removes the context menu's &#60;div&#62; element (and accompanying child nodes) from the document. </summary>
};
YAHOO.widget.ContextMenu.prototype._onTriggerContextMenu = function(p_oEvent, p_oMenu) {
   /// <summary> "contextmenu" event handler ("mousedown" for Opera) for the HTML element(s) that trigger the display of the context menu. </summary>
   /// <private />
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object passed back by the event utility (YAHOO.util.Event).</param>
 /// <param name="p_oMenu" type="YAHOO.widget.ContextMenu"> Object representing the context menu that is handling the event.</param>
};
YAHOO.widget.ContextMenu.prototype.initDefaultConfig = function() {
   /// <summary> Initializes the class's configurable properties which can be changed using the context menu's Config object ("cfg"). </summary>
};
YAHOO.widget.ContextMenu.prototype.configTrigger = function(p_sType, p_aArgs, p_oMenu) {
   /// <summary> Event handler for when the value of the "trigger" configuration property changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oMenu" type="YAHOO.widget.ContextMenu"> Object representing the context menu that fired the event.</param>
};
YAHOO.widget.DataTable.prototype.sortColumn = function(oColumn, sDir) {
   /// <summary> Sorts given Column. If "dynamicData" is true, current selections are purged beforea request is sent to the DataSource for data for the new state (using therequest returned by "generateRequest()"). </summary>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="sDir" type="String">  (Optional) YAHOO.widget.DataTable.CLASS_ASC orYAHOO.widget.DataTable.CLASS_DESC</param>
};
YAHOO.widget.DataTable.prototype._unselectAllTdEls = function() {
   /// <summary> Convenience method to remove the class YAHOO.widget.DataTable.CLASS_SELECTEDfrom all TD elements in the internal tracker. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype.getColumnById = function(column) {
   /// <summary> For the given Column ID, returns the associated Column instance. Note: Forgetting Columns by key, please use the method getColumn(). </summary>
   /// <returns type="YAHOO.widget.Column" />
 /// <param name="column" type="String">  Column ID string.</param>
};
YAHOO.widget.DataTable.prototype.renderPaginator = function() {
   /// <summary> Renders the Paginator to the DataTable UI </summary>
};
YAHOO.widget.DataTable.prototype._handleCellRangeSelectionByKey = function(e) {
   /// <summary> Determines selection behavior resulting from a key event when selection modeis set to "cellrange". </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  Event object.</param>
};
YAHOO.widget.DataTable.prototype.updateCell = function(oRecord, oColumn, oData) {
   /// <summary> For the given row and column, updates the Record with the given data. If thecell is on current page, the corresponding DOM elements are also updated. </summary>
 /// <param name="oRecord" type="YAHOO.widget.Record">  Record instance.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column | String | Number">  A Column key, or a ColumnSet key index.</param>
 /// <param name="oData" type="Object">  New data value for the cell.</param>
};
YAHOO.widget.DataTable_cloneObject = function(o) {
   /// <summary> Clones object literal or array of object literals. </summary>
   /// <private />
 /// <param name="o" type="Object">  Object.</param>
};
YAHOO.widget.DataTable.prototype.setColumnWidth = function(oColumn, nWidth) {
   /// <summary> Sets given Column to given pixel width. If new width is less than minimumwidth, sets to minimum width. Updates oColumn.width value. </summary>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="nWidth" type="Number">  New width in pixels. A null value auto-sizes Column,subject to minWidth and maxAutoWidth validations.</param>
};
YAHOO.widget.DataTable.prototype.focus = function() {
   /// <summary> Brings focus to the TBODY element. Alias to focusTbodyEl. </summary>
};
YAHOO.widget.DataTable.prototype._handleSingleCellSelectionByMouse = function(event, targetter) {
   /// <summary> Determines selection behavior resulting from a mouse event when selection modeis set to "singlecell". </summary>
   /// <private />
 /// <param name="oArgs.event" type="HTMLEvent">  Event object.</param>
 /// <param name="oArgs.target" type="HTMLElement">  Target element.</param>
};
YAHOO.widget.DataTable.prototype._setColumnWidthDynStyles = function(oColumn, sWidth) {
   /// <summary> Updates width of a Column's liner DIV elements by dynamically creating aSTYLE node and writing and updating CSS style rules to it. If this fails duringruntime, the fallback method _setColumnWidthDynFunction() will be called.Notes: This technique is not performant in IE6. IE7 crashes if DataTable isnested within another TABLE element. For these cases, it is recommended touse the method _setColumnWidthDynFunction by setting _bDynStylesFallback to TRUE. </summary>
   /// <private />
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="sWidth" type="String">  New width value.</param>
};
YAHOO.widget.DataTableformatTextarea = function(el, oRecord, oColumn, oData) {
   /// <summary> Formats TEXTAREA elements. </summary>
 /// <param name="el" type="HTMLElement">  The element to format with markup.</param>
 /// <param name="oRecord" type="YAHOO.widget.Record">  Record instance.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="oData" type="Object">  (Optional) Data value for the cell.</param>
};
YAHOO.widget.DataTable.prototype.initAttributes = function(oConfigs) {
   /// <summary> Implementation of Element's abstract method. Sets up config values. </summary>
   /// <private />
 /// <param name="oConfigs" type="Object">  (Optional) Object literal definition of configuration values.</param>
};
YAHOO.widget.DataTable.prototype.onEventSelectCell = function(event, targetter) {
   /// <summary> Overridable custom event handler to select cell. </summary>
 /// <param name="oArgs.event" type="HTMLEvent">  Event object.</param>
 /// <param name="oArgs.target" type="HTMLElement">  Target element.</param>
};
YAHOO.widget.DataTable.prototype.getId = function() {
   /// <summary> Returns unique id assigned to instance, which is a useful prefix forgenerating unique DOM ID strings. </summary>
   /// <returns type="String" />
};
YAHOO.widget.DataTable.prototype._repaintGecko = function() {
   /// <summary> Forces Gecko repaint. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype._formatTdEl = function(oColumn, elTd, index, isLast) {
   /// <summary> Formats a basic TD element. </summary>
   /// <private />
   /// <returns type="HTMLElement" />
 /// <param name="oColumn" type="YAHOO.widget.Column">  Associated Column instance.</param>
 /// <param name="elTd" type="HTMLElement">  An unformatted TD element.</param>
 /// <param name="index" type="Number">  Column key index.</param>
 /// <param name="isLast" type="Boolean">  True if Column is last key of the ColumnSet.</param>
};
YAHOO.widget.DataTable.prototype._destroyMsgTbodyEl = function() {
   /// <summary> Destroy's the DataTable message TBODY element, if available. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype.getTrIndex = function(row) {
   /// <summary> Returns the page row index of given row. Returns null if the row is not on thecurrent DataTable page. </summary>
   /// <returns type="Number" />
 /// <param name="row" type="HTMLElement | String | YAHOO.widget.Record | Number">  DOM or IDstring reference to an element within the DataTable page, a Record instance,or a Record's RecordSet index.</param>
};
YAHOO.widget.DataTable.prototype._onTheadClick = function(e, oSelf) {
   /// <summary> Handles click events on the THEAD element. </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  The click event.</param>
 /// <param name="oSelf" type="YAHOO.wiget.DataTable">  DataTable instance.</param>
};
YAHOO.widget.DataTable.prototype._handleSingleCellSelectionByKey = function(e) {
   /// <summary> Determines selection behavior resulting from a key event when selection modeis set to "singlecell". </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  Event object.</param>
};
YAHOO.widget.DataTable.prototype._onTbodyClick = function(e, oSelf) {
   /// <summary> Handles click events on the primary TBODY element. </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  The click event.</param>
 /// <param name="oSelf" type="YAHOO.wiget.DataTable">  DataTable instance.</param>
};
YAHOO.widget.DataTable.prototype.getLastSelectedRecord = function() {
   /// <summary> Returns last selected Record ID. </summary>
   /// <returns type="String" />
};
YAHOO.widget.DataTable.prototype.onEventSaveCellEditor = function() {
   /// <summary> Overridable custom event handler to save active CellEditor input. </summary>
};
YAHOO.widget.DataTable.prototype._initTheadEl = function(elTable, Initialized) {
   /// <summary> Initializes THEAD element. </summary>
   /// <private />
 /// <param name="elTable" type="HTMLElement">  TABLE element into which to create COLGROUP.</param>
 /// <param name="Initialized" type="HTMLElement"> THEAD element.</param>
};
YAHOO.widget.DataTable.prototype._insertColgroupColEl = function(index) {
   /// <summary> Adds a COL element to COLGROUP at given index. </summary>
   /// <private />
 /// <param name="index" type="Number">  Index of new COL element.</param>
};
YAHOO.widget.DataTable.prototypeformatTheadCell = function(elCellLabel, oColumn, oSortedBy) {
   /// <summary> Outputs markup into the given TH based on given Column. </summary>
 /// <param name="elCellLabel" type="HTMLElement">  The label SPAN element within the TH liner,not the liner DIV element.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="oSortedBy" type="Object">  Sort state object literal.</param>
};
YAHOO.widget.DataTable.prototype.showTableMessage = function(sHTML, sClassName) {
   /// <summary> Displays message within secondary TBODY. </summary>
 /// <param name="sHTML" type="String">  (optional) Value for innerHTMlang.</param>
 /// <param name="sClassName" type="String">  (optional) Classname.</param>
};
YAHOO.widget.DataTable.prototype._reorderColgroupColEl = function(aKeyIndexes, newIndex) {
   /// <summary> Reorders a COL element from old index(es) to new index. </summary>
   /// <private />
 /// <param name="aKeyIndexes" type="Number[]">  Array of indexes of removed COL element.</param>
 /// <param name="newIndex" type="Number">  New index.</param>
};
YAHOO.widget.DataTable.prototype.unhighlightCell = function(cell) {
   /// <summary> Removes the class YAHOO.widget.DataTable.CLASS_HIGHLIGHTED from the given cell. </summary>
 /// <param name="cell" type="HTMLElement | String">  DOM element reference or ID string.</param>
};
YAHOO.widget.DataTable.prototype.getCell = function() {
};
YAHOO.widget.DataTable.prototype.getTableEl = function() {
   /// <summary> Returns DOM reference to the DataTable's TABLE element. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.DataTable.prototype._onEditorCancelEvent = function(oArgs) {
   /// <summary> Passes through cancelEvent of the active CellEditor. </summary>
   /// <private />
 /// <param name="oArgs" type="Object">   Custom Event args.</param>
};
YAHOO.widget.DataTable.prototypeeditTextarea = function() {
};
YAHOO.widget.DataTable.prototype._onTheadKeydown = function(e, oSelf) {
   /// <summary> Handles keydown events on the THEAD element. </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  The key event.</param>
 /// <param name="oSelf" type="YAHOO.wiget.DataTable">  DataTable instance.</param>
};
YAHOO.widget.DataTable.prototype.clearTextSelection = function() {
   /// <summary> Clears browser text selection. Useful to call on rowSelectEvent orcellSelectEvent to prevent clicks or dblclicks from selecting text in thebrowser. </summary>
};
YAHOO.widget.DataTable.prototypeeditCheckbox = function() {
};
YAHOO.widget.DataTable.prototype.getBelowTdEl = function(cell) {
   /// <summary> Returns DOM reference to the below TD element from the given cell, or null. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="cell" type="HTMLElement | String | Object} DOM element reference or string ID, orobject literal of syntax {record:oRecord, column:oColumn">  from which to get previous TD element.</param>
};
YAHOO.widget.DataTable.prototype.getFirstTdEl = function(row) {
   /// <summary> Returns DOM reference to the first TD element in the DataTable page (by default),the first TD element of the optionally given row, or null. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="row" type="HTMLElement">  (optional) row from which to get first TD</param>
};
YAHOO.widget.DataTableformatRadio = function(el, oRecord, oColumn, oData) {
   /// <summary> Formats INPUT TYPE=RADIO elements. </summary>
 /// <param name="el" type="HTMLElement">  The element to format with markup.</param>
 /// <param name="oRecord" type="YAHOO.widget.Record">  Record instance.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="oData" type="Object">  (Optional) Data value for the cell.</param>
};
YAHOO.widget.DataTable.prototype._onEditorRevertEvent = function(oArgs) {
   /// <summary> Passes through revertEvent of the active CellEditor. </summary>
   /// <private />
 /// <param name="oArgs" type="Object">   Custom Event args.</param>
};
YAHOO.widget.DataTable.prototype._handleStandardSelectionByMouse = function(event, targetter) {
   /// <summary> Determines selection behavior resulting from a mouse event when selection modeis set to "standard". </summary>
   /// <private />
 /// <param name="oArgs.event" type="HTMLEvent">  Event object.</param>
 /// <param name="oArgs.target" type="HTMLElement">  Target element.</param>
};
YAHOO.widget.DataTable.prototype._destroyTbodyEl = function() {
   /// <summary> Destroy's the DataTable TBODY element, if available. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype._updatePaginator = function(newPag) {
   /// <summary> Method executed during set() operation for the "paginator" attribute.Adds and/or severs event listeners between DataTable and Paginator </summary>
   /// <private />
 /// <param name="newPag" type="Paginator">  Paginator instance (or null) for DataTable to use</param>
};
YAHOO.widget.DataTable.prototype._onTbodyKeydown = function(e, oSelf) {
   /// <summary> Handles keydown events on the TBODY element. Handles selection behavior,provides hooks for ENTER to edit functionality. </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  The key event.</param>
 /// <param name="oSelf" type="YAHOO.wiget.DataTable">  DataTable instance.</param>
};
YAHOO.widget.DataTable.prototype._initCaptionEl = function(sCaption) {
   /// <summary> Creates HTML markup CAPTION element. </summary>
   /// <private />
 /// <param name="sCaption" type="String">  Text for caption.</param>
};
YAHOO.widget.DataTable.prototype.removeColumn = function(oColumn) {
   /// <summary> Removes given Column. NOTE: You cannot remove nested Columns. You can only removenon-nested Columns, and top-level parent Columns (which will remove allchildren Columns). </summary>
   /// <returns type="YAHOO.widget.Column" />
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
};
YAHOO.widget.DataTable.prototype.onEventHighlightRow = function(event, targetter) {
   /// <summary> Overridable custom event handler to highlight row. Accounts for spuriouscaused-by-child events. </summary>
 /// <param name="oArgs.event" type="HTMLEvent">  Event object.</param>
 /// <param name="oArgs.target" type="HTMLElement">  Target element.</param>
};
YAHOO.widget.DataTable.prototype._initCellEditorEl = function() {
   /// <summary> Backward compatibility. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype._clearMinWidth = function(oColumn) {
   /// <summary> Clears minWidth. </summary>
   /// <private />
 /// <param name="oColumn" type="YAHOO.widget.Column">  Which Column.</param>
};
YAHOO.widget.DataTable.prototype.showCellEditor = function(elCell) {
   /// <summary> Activates and shows CellEditor instance for the given cell while deactivating andcanceling previous CellEditor. It is baked into DataTable that only one CellEditorcan be active at any given time. </summary>
 /// <param name="elCell" type="HTMLElement | String">  Cell to edit.</param>
};
YAHOO.widget.DataTable.prototype.getTdLinerEl = function(cell) {
   /// <summary> Returns DOM reference to a TD liner element. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="cell" type="HTMLElement | Object} TD element or child of a TD element, orobject literal of syntax {record:oRecord, column:oColumn"> .</param>
};
YAHOO.widget.DataTable.prototype._setColumnWidth = function(oColumn, sWidth, sOverflow) {
   /// <summary> Sets liner DIV elements of given Column to given width. When value should beauto-calculated to fit content overflow is set to visible, otherwise overflowis set to hidden. No validations against minimum width and no updatingColumn.width value. </summary>
   /// <private />
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="sWidth" type="String">  New width value.</param>
 /// <param name="sOverflow" type="String">  Should be "hidden" when Column width is explicitlybeing set to a value, but should be "visible" when Column is meant to auto-fit content.</param>
};
YAHOO.widget.DataTable.prototype.getSelectedRows = function() {
   /// <summary> Returns selected rows as an array of Record IDs. </summary>
   /// <returns type="String[]" />
};
YAHOO.widget.DataTable.prototype.getTdEl = function(cell) {
   /// <summary> Returns DOM reference to a TD element. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="cell" type="HTMLElement | String | Object} TD element or child of a TD element, orobject literal of syntax {record:oRecord, column:oColumn"> .</param>
};
YAHOO.widget.DataTable.prototype.onDataReturnReplaceRows = function(oRequest, oResponse, oPayload) {
   /// <summary> Callback function receives reponse from DataSource, replaces all existingRecords in  RecordSet, updates TR elements with new data, and updates stateUI for pagination and sorting from payload data, if necessary. </summary>
 /// <param name="oRequest" type="MIXED">  Original generated request.</param>
 /// <param name="oResponse" type="Object">  Response object.</param>
 /// <param name="oPayload" type="MIXED">  (optional) Additional argument(s)</param>
};
YAHOO.widget.DataTable.prototype.addRows = function(aData, index) {
   /// <summary> Convenience method to add multiple rows. </summary>
 /// <param name="aData" type="Object[]">  Array of object literal data for the rows.</param>
 /// <param name="index" type="Number">  (optional) RecordSet position index at which to add data.</param>
};
YAHOO.widget.DataTable.prototype.onEventHighlightCell = function(event, targetter) {
   /// <summary> Overridable custom event handler to highlight cell. Accounts for spuriouscaused-by-child events. </summary>
 /// <param name="oArgs.event" type="HTMLEvent">  Event object.</param>
 /// <param name="oArgs.target" type="HTMLElement">  Target element.</param>
};
YAHOO.widget.DataTable.prototype._defaultPaginatorContainers = function(create) {
   /// <summary> Returns the default containers used for Paginators.  If create param ispassed, the containers will be created and added to the DataTable container. </summary>
   /// <private />
 /// <param name="create" type="boolean">  Create the default containers if not found</param>
};
YAHOO.widget.DataTable.prototype._onTheadFocus = function(e, oSelf) {
   /// <summary> Handles focus events on the THEAD element. </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  The focus event.</param>
 /// <param name="oSelf" type="YAHOO.wiget.DataTable">  DataTable instance.</param>
};
YAHOO.widget.DataTable.prototype._initContainerEl = function(elContainer) {
   /// <summary> Initializes the DataTable outer container element, including a mask. </summary>
   /// <private />
 /// <param name="elContainer" type="HTMLElement | String">  HTML DIV element by reference or ID.</param>
};
YAHOO.widget.DataTable.prototype._onEditorSaveEvent = function(oArgs) {
   /// <summary> Passes through saveEvent of the active CellEditor. </summary>
   /// <private />
 /// <param name="oArgs" type="Object">   Custom Event args.</param>
};
YAHOO.widget.DataTable.prototype._onTableMousedown = function(e, oSelf) {
   /// <summary> Handles mousedown events on the DataTable instance. </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  The mousedown event.</param>
 /// <param name="oSelf" type="YAHOO.wiget.DataTable">  DataTable instance.</param>
};
YAHOO.widget.DataTable.prototype._initDataSource = function(oDataSource) {
   /// <summary> Initializes DataSource. </summary>
   /// <private />
 /// <param name="oDataSource" type="YAHOO.util.DataSource">  DataSource instance.</param>
};
YAHOO.widget.DataTable.prototype._onDropdownChange = function(e, oSelf) {
   /// <summary> Handles change events on SELECT elements within DataTable. </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  The change event.</param>
 /// <param name="oSelf" type="YAHOO.wiget.DataTable">  DataTable instance.</param>
};
YAHOO.widget.DataTable.prototype.getBody = function() {
};
YAHOO.widget.DataTable_destroyColumnResizerProxyEl = function() {
   /// <summary> Destroys shared Column resizer proxy. </summary>
   /// <private />
   /// <returns type="HTMLElement" />
};
YAHOO.widget.DataTable.prototype._initEvents = function() {
   /// <summary> Initialize internal event listeners </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype._initMsgTbodyEl = function(elTable) {
   /// <summary> Initializes TBODY element for messaging. </summary>
   /// <private />
 /// <param name="elTable" type="HTMLElement">  TABLE element into which to create TBODY</param>
};
YAHOO.widget.DataTable.prototype.updateRows = function(startrow, aData) {
   /// <summary> Starting with the given row, updates associated Records with the given data.The number of rows to update are determined by the array of data provided.Undefined data (i.e., not an object literal) causes a row to be skipped. Ifany of the rows are on current page, the corresponding DOM elements are alsoupdated. </summary>
 /// <param name="startrow" type="YAHOO.widget.Record | Number | HTMLElement | String"> Starting row to update: By Record instance, by Record's RecordSetposition index, by HTMLElement reference to the TR element, or by ID stringof the TR element.</param>
 /// <param name="aData" type="Object[]">  Array of object literal of data for the rows.</param>
};
YAHOO.widget.DataTable.prototype._onTableMouseup = function(e, oSelf) {
   /// <summary> Handles mouseup events on the DataTable instance. </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  The mouseup event.</param>
 /// <param name="oSelf" type="YAHOO.wiget.DataTable">  DataTable instance.</param>
};
YAHOO.widget.DataTable.prototype.deleteRows = function(row, count) {
   /// <summary> Convenience method to delete multiple rows. </summary>
 /// <param name="row" type="HTMLElement | String | Number">  DOM element reference or ID stringto DataTable page element or RecordSet index.</param>
 /// <param name="count" type="Number">  (optional) How many rows to delete. A negative valuewill delete towards the beginning.</param>
};
YAHOO.widget.DataTable.prototype.onEventCancelCellEditor = function() {
   /// <summary> Overridable custom event handler to cancel active CellEditor. </summary>
};
YAHOO.widget.DataTable.prototype._initColumnSort = function() {
   /// <summary> Initializes Column sorting. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype.highlightColumn = function(column) {
   /// <summary> Assigns the class YAHOO.widget.DataTable.CLASS_HIGHLIGHTED to cells of the given Column.NOTE: You cannot highlight/unhighlight nested Columns. You can onlyhighlight/unhighlight non-nested Columns, and bottom-level key Columns. </summary>
 /// <param name="column" type="HTMLElement | String | Number">  DOM reference or ID string to aTH/TD element (or child of a TH/TD element), a Column key, or a ColumnSet key index.</param>
};
YAHOO.widget.DataTable.prototype.onEditorBlurEvent = function(oArgs) {
   /// <summary> Public handler of the editorBlurEvent. By default, saves on blur ifdisableBtns is true, otherwise cancels on blur. </summary>
 /// <param name="oArgs" type="Object">   Custom Event args.</param>
};
YAHOO.widget.DataTableformatText = function(el, oRecord, oColumn, oData) {
   /// <summary> Formats text strings. </summary>
 /// <param name="el" type="HTMLElement">  The element to format with markup.</param>
 /// <param name="oRecord" type="YAHOO.widget.Record">  Record instance.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="oData" type="Object">  (Optional) Data value for the cell.</param>
};
YAHOO.widget.DataTable.prototype.getThLinerEl = function(theadCell) {
   /// <summary> Returns DOM reference to a TH liner element. Needed to normalize for resizeable Columns, which have an additional resizer liner DIV element between the THelement and the liner DIV element. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="theadCell" type="YAHOO.widget.Column | HTMLElement | String">  Column instance,DOM element reference, or string ID.</param>
};
YAHOO.widget.DataTable.prototype.getRecordSet = function() {
   /// <summary> Returns the DataTable instance's RecordSet instance. </summary>
   /// <returns type="YAHOO.widget.RecordSet" />
};
YAHOO.widget.DataTable.prototype._initCellEditing = function() {
   /// <summary> Initializes CellEditor integration. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype.updateRow = function(row, oData) {
   /// <summary> For the given row, updates the associated Record with the given data. If therow is on current page, the corresponding DOM elements are also updated. </summary>
 /// <param name="row" type="YAHOO.widget.Record | Number | HTMLElement | String"> Which row to update: By Record instance, by Record's RecordSetposition index, by HTMLElement reference to the TR element, or by ID stringof the TR element.</param>
 /// <param name="oData" type="Object">  Object literal of data for the row.</param>
};
YAHOO.widget.DataTable_destroyColumnDragTargetEl = function() {
   /// <summary> Destroys shared Column drag target. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype._initColumnHelpers = function() {
   /// <summary> Initializes elements associated with Column functionality: ColumnDD and ColumnResizers. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype.hideTableMessage = function() {
   /// <summary> Hides secondary TBODY. </summary>
};
YAHOO.widget.DataTable.prototype._getColumnClassnames = function(oColumn, aAddClasses) {
   /// <summary> Retruns classnames to represent current Column states. </summary>
   /// <private />
   /// <returns type="String" />
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="aAddClasses" type="String[]">  An array of additional classnames to add to thereturn value.</param>
};
YAHOO.widget.DataTable.prototype.getMsgTdEl = function() {
   /// <summary> Returns DOM reference to the TD element within the secondary TBODY that isused to display messages. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.DataTable.prototype.onEventSelectColumn = function(event, targetter) {
   /// <summary> Overridable custom event handler to select Column. </summary>
 /// <param name="oArgs.event" type="HTMLEvent">  Event object.</param>
 /// <param name="oArgs.target" type="HTMLElement">  Target element.</param>
};
YAHOO.widget.DataTable.prototype._initTbodyEl = function(elTable) {
   /// <summary> Initializes TBODY element for data. </summary>
   /// <private />
 /// <param name="elTable" type="HTMLElement">  TABLE element into which to create TBODY .</param>
};
YAHOO.widget.DataTable.prototype._onTableMouseover = function(e, oSelf) {
   /// <summary> Handles mouseover events on the DataTable instance. </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  The mouseover event.</param>
 /// <param name="oSelf" type="YAHOO.wiget.DataTable">  DataTable instance.</param>
};
YAHOO.widget.DataTableformatCurrency = function(el, oRecord, oColumn, oData) {
   /// <summary> Formats currency. Default unit is USD. </summary>
 /// <param name="el" type="HTMLElement">  The element to format with markup.</param>
 /// <param name="oRecord" type="YAHOO.widget.Record">  Record instance.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="oData" type="Number">  Data value for the cell.</param>
};
YAHOO.widget.DataTable.prototype.isSelected = function(o) {
   /// <summary> Returns true if given item is selected, false otherwise. </summary>
   /// <returns type="Boolean" />
 /// <param name="o" type="String | HTMLElement | YAHOO.widget.Record | Number{record:YAHOO.widget.Record, column:YAHOO.widget.Column} ">  TR or TD element byreference or ID string, a Record instance, a RecordSet position index,or an object literal representationof a cell.</param>
};
YAHOO.widget.DataTable.prototype.deleteRow = function(row) {
   /// <summary> Deletes the given row's Record from the RecordSet. If the row is on current page,the corresponding DOM elements are also deleted. </summary>
 /// <param name="row" type="HTMLElement | String | Number">  DOM element reference or ID stringto DataTable page element or RecordSet index.</param>
};
YAHOO.widget.DataTable.prototype._onRenderChainEnd = function() {
   /// <summary> Validates minWidths whenever the render chain ends. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype.toString = function() {
   /// <summary> DataSource instance name, for logging. </summary>
   /// <returns type="String" />
};
YAHOO.widget.DataTable.prototype.getTbodyEl = function() {
   /// <summary> Returns DOM reference to the DataTable's primary TBODY element. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.DataTableformatLink = function(el, oRecord, oColumn, oData) {
   /// <summary> Formats links. </summary>
 /// <param name="el" type="HTMLElement">  The element to format with markup.</param>
 /// <param name="oRecord" type="YAHOO.widget.Record">  Record instance.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="oData" type="Object">  Data value for the cell, or null.</param>
};
YAHOO.widget.DataTable.prototype._unselectAllTrEls = function() {
   /// <summary> Convenience method to remove the class YAHOO.widget.DataTable.CLASS_SELECTEDfrom all TR elements on the page. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype.showColumn = function(oColumn) {
   /// <summary> Shows given Column. NOTE: You cannot hide/show nested Columns. You can onlyhide/show non-nested Columns, and top-level parent Columns (which willhide/show all children Columns). </summary>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
};
YAHOO.widget.DataTable.prototype.getColumnSet = function() {
   /// <summary> Returns the DataTable instance's ColumnSet instance. </summary>
   /// <returns type="YAHOO.widget.ColumnSet" />
};
YAHOO.widget.DataTable.prototype.onPaginatorChangeRequest = function(oPaginatorState) {
   /// <summary> Responds to new Pagination states. By default, updates the UI to reflect thenew state. If "dynamicData" is true, current selections are purged beforea request is sent to the DataSource for data for the new state (using therequest returned by "generateRequest()"). </summary>
 /// <param name="oPaginatorState" type="Object">  An object literal describing the proposed pagination state.</param>
};
YAHOO.widget.DataTable.prototype.onEventShowCellEditor = function(event, targetter) {
   /// <summary> Overridable custom event handler to edit cell. </summary>
 /// <param name="oArgs.event" type="HTMLEvent">  Event object.</param>
 /// <param name="oArgs.target" type="HTMLElement">  Target element.</param>
};
YAHOO.widget.DataTable.prototype._initColumnSet = function(aColumnDefs) {
   /// <summary> Initializes ColumnSet. </summary>
   /// <private />
 /// <param name="aColumnDefs" type="Object[]">  Array of object literal Column definitions.</param>
};
YAHOO.widget.DataTable.prototype.getPreviousTrEl = function(row) {
   /// <summary> Returns DOM reference to the previous TR element from the given TR element, or null. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="row" type="HTMLElement | String | Number | YAHOO.widget.Record">  Elementreference, ID string, page row index, or Record from which to get previous TR element.</param>
};
YAHOO.widget.DataTable.prototype.onEventUnhighlightCell = function(event, targetter) {
   /// <summary> Overridable custom event handler to unhighlight cell. Accounts for spuriouscaused-by-child events. </summary>
 /// <param name="oArgs.event" type="HTMLEvent">  Event object.</param>
 /// <param name="oArgs.target" type="HTMLElement">  Target element.</param>
};
YAHOO.widget.DataTable.prototype.unselectRow = function(row) {
   /// <summary> Sets given row to the unselected state. </summary>
 /// <param name="row" type="HTMLElement | String | YAHOO.widget.Record | Number">  HTML elementreference or ID string, Record instance, or RecordSet position index.</param>
};
YAHOO.widget.DataTable.prototype.unselectCell = function(cell) {
   /// <summary> Sets given cell to the unselected state. </summary>
 /// <param name="cell" type="HTMLElement | String">  DOM element reference or ID stringto DataTable page element or RecordSet index.</param>
};
YAHOO.widget.DataTable.prototype._onTableMouseout = function(e, oSelf) {
   /// <summary> Handles mouseout events on the DataTable instance. </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  The mouseout event.</param>
 /// <param name="oSelf" type="YAHOO.wiget.DataTable">  DataTable instance.</param>
};
YAHOO.widget.DataTable.prototype.getCellEditor = function() {
   /// <summary> Returns current CellEditor instance, or null. </summary>
   /// <returns type="YAHOO.widget.CellEditor" />
};
YAHOO.widget.DataTable.prototype.unselectColumn = function(column) {
   /// <summary> Unselects given Column. NOTE: You cannot select/unselect nested Columns. You can onlyselect/unselect non-nested Columns, and bottom-level key Columns. </summary>
 /// <param name="column" type="HTMLElement | String | Number">  DOM reference or ID string to aTH/TD element (or child of a TH/TD element), a Column key, or a ColumnSet key index.</param>
};
YAHOO.widget.DataTable.prototype.getAboveTdEl = function(cell) {
   /// <summary> Returns DOM reference to the above TD element from the given cell, or null. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="cell" type="HTMLElement | String | Object} DOM element reference or string ID, orobject literal of syntax {record:oRecord, column:oColumn">  from which to get next TD element.</param>
};
YAHOO.widget.DataTable.prototype._onEditorKeydownEvent = function(oArgs) {
   /// <summary> Passes through keydownEvent of the active CellEditor. </summary>
   /// <private />
 /// <param name="oArgs" type="Object">   Custom Event args.</param>
};
YAHOO.widget.DataTable.prototype._setRowStripes = function(row, range) {
   /// <summary> Assigns the classes DT.CLASS_EVEN and DT.CLASS_ODD to one, many, or all TR elements. </summary>
   /// <private />
 /// <param name="row" type="HTMLElement | String | Number">  (optional) HTML TR element referenceor string ID, or page row index of where to start striping.</param>
 /// <param name="range" type="Number">  (optional) If given, how many rows to stripe, otherwisestripe all the rows until the end.</param>
};
YAHOO.widget.DataTable.prototype._deleteTrEl = function(row) {
   /// <summary> Deletes TR element by DOM reference or by DataTable page row index. </summary>
   /// <private />
   /// <returns type="Boolean" />
 /// <param name="row" type="HTMLElement | Number">  TR element reference or Datatable page row index.</param>
};
YAHOO.widget.DataTable.prototype._destroyPaginator = function() {
   /// <summary> Calls Paginator's destroy() method </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype._clearTrTemplateEl = function() {
   /// <summary> Clears TR element template in response to any Column state change. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype.onEventUnhighlightRow = function(event, targetter) {
   /// <summary> Overridable custom event handler to unhighlight row. Accounts for spuriouscaused-by-child events. </summary>
 /// <param name="oArgs.event" type="HTMLEvent">  Event object.</param>
 /// <param name="oArgs.target" type="HTMLElement">  Target element.</param>
};
YAHOO.widget.DataTable.prototype.getPreviousTdEl = function(cell) {
   /// <summary> Returns DOM reference to the previous TD element from the given cell, or null. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="cell" type="HTMLElement | String | Object} DOM element reference or string ID, orobject literal of syntax {record:oRecord, column:oColumn">  from which to get previous TD element.</param>
};
YAHOO.widget.DataTable.prototype._destroyContainerEl = function(elContainer) {
   /// <summary> Destroy's the DataTable outer container element, if available. </summary>
   /// <private />
 /// <param name="elContainer" type="HTMLElement">  Reference to the container element.</param>
};
YAHOO.widget.DataTable.prototype._getTrTemplateEl = function() {
   /// <summary> Returns a new TR element template with TD elements classed with currentColumn states. </summary>
   /// <private />
   /// <returns type="HTMLElement" />
};
YAHOO.widget.DataTable.prototype._updateTrEl = function(elTr, oRecord) {
   /// <summary> Formats the contents of the given TR's TD elements with data from the givenRecord. Only innerHTML should change, nothing structural. </summary>
   /// <private />
   /// <returns type="HTMLElement" />
 /// <param name="elTr" type="HTMLElement">  The TR element to update.</param>
 /// <param name="oRecord" type="YAHOO.widget.Record">  The associated Record instance.</param>
};
YAHOO.widget.DataTable.prototype.getSelectedTdEls = function() {
   /// <summary> Returns array of selected TD elements on the page. </summary>
   /// <returns type="HTMLElement[]" />
};
YAHOO.widget.DataTable.prototype.destroyCellEditor = function() {
   /// <summary> Destroys active CellEditor instance and UI. </summary>
};
YAHOO.widget.DataTable.prototype.onDataReturnInitializeTable = function(sRequest, oResponse, oPayload) {
   /// <summary> Callback function receives data from DataSource and populates an entireDataTable with Records and TR elements, clearing previous Records, if any. </summary>
 /// <param name="sRequest" type="String">  Original request.</param>
 /// <param name="oResponse" type="Object">  Response object.</param>
 /// <param name="oPayload" type="MIXED">  (optional) Additional argument(s)</param>
};
YAHOO.widget.DataTable.prototype.onDataReturnAppendRows = function(sRequest, oResponse, oPayload) {
   /// <summary> Callback function receives data from DataSource and appends to an existingDataTable new Records and, if applicable, creates or updatescorresponding TR elements. </summary>
 /// <param name="sRequest" type="String">  Original request.</param>
 /// <param name="oResponse" type="Object">  Response object.</param>
 /// <param name="oPayload" type="MIXED">  (optional) Additional argument(s)</param>
};
YAHOO.widget.DataTable.prototype._setFirstRow = function() {
   /// <summary> Assigns the class YAHOO.widget.DataTable.CLASS_FIRST to the first TR elementof the DataTable page and updates internal tracker. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype.reorderColumn = function(oColumn, index) {
   /// <summary> Removes given Column and inserts into given tree index. NOTE: Youcan only reorder non-nested Columns and top-level parent Columns. You cannotreorder a nested Column to an existing parent. </summary>
   /// <returns type="YAHOO.widget.Column" />
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="index" type="Number">  New tree index.</param>
};
YAHOO.widget.DataTable.prototype._restoreMinWidth = function(oColumn) {
   /// <summary> Restores minWidth. </summary>
   /// <private />
 /// <param name="oColumn" type="YAHOO.widget.Column">  Which Column.</param>
};
YAHOO.widget.DataTable.prototype._onDocumentClick = function(e, oSelf) {
   /// <summary> Handles click events on the DOCUMENT. </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  The click event.</param>
 /// <param name="oSelf" type="YAHOO.wiget.DataTable">  DataTable instance.</param>
};
YAHOO.widget.DataTablevalidateNumber = function(oData) {
   /// <summary> Validates data value to type Number, doing type conversion asnecessary. A valid Number value is return, else null is returnedif input value does not validate. </summary>
 /// <param name="oData" type="Object">  Data to validate.</param>
};
YAHOO.widget.DataTable_initColumnDragTargetEl = function() {
   /// <summary> Creates HTML markup for shared Column drag target. </summary>
   /// <private />
   /// <returns type="HTMLElement" />
};
YAHOO.widget.DataTable.prototype.undisable = function() {
   /// <summary> Undisables DataTable UI. </summary>
};
YAHOO.widget.DataTable.prototype._destroyTheadEl = function() {
   /// <summary> Destroy's the DataTable THEAD element, if available. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype._onTableFocus = function(e, oSelf) {
   /// <summary> Handles focus events on the DataTable instance. </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  The focus event.</param>
 /// <param name="oSelf" type="YAHOO.wiget.DataTable">  DataTable instance.</param>
};
YAHOO.widget.DataTable.prototype.getColumn = function(column) {
   /// <summary> For the given identifier, returns the associated Column instance. Note: Forgetting Columns by Column ID string, please use the method getColumnById(). </summary>
   /// <returns type="YAHOO.widget.Column" />
 /// <param name="column" type="HTMLElement | String | Number">  TH/TD element (or child of aTH/TD element), a Column key, or a ColumnSet key index.</param>
};
YAHOO.widget.DataTableformatNumber = function(el, oRecord, oColumn, oData) {
   /// <summary> Formats numbers. </summary>
 /// <param name="el" type="HTMLElement">  The element to format with markup.</param>
 /// <param name="oRecord" type="YAHOO.widget.Record">  Record instance.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="oData" type="Object">  Data value for the cell, or null.</param>
};
YAHOO.widget.DataTable.prototype._removeColgroupColEl = function(index) {
   /// <summary> Removes a COL element to COLGROUP at given index. </summary>
   /// <private />
 /// <param name="index" type="Number">  Index of removed COL element.</param>
};
YAHOO.widget.DataTable.prototype._handleCellBlockSelectionByMouse = function(event, targetter) {
   /// <summary> Determines selection behavior resulting from a mouse event when selection modeis set to "cellblock". </summary>
   /// <private />
 /// <param name="oArgs.event" type="HTMLEvent">  Event object.</param>
 /// <param name="oArgs.target" type="HTMLElement">  Target element.</param>
};
YAHOO.widget.DataTable.prototype.validateColumnWidths = function(oArgcolumn) {
   /// <summary> For one or all Columns, when Column is not hidden, width is not set, and minWidthand/or maxAutoWidth is set, validates auto-width against minWidth and maxAutoWidth. </summary>
 /// <param name="oArg.column" type="YAHOO.widget.Column">  (optional) One Column to validate. If null, all Columns' widths are validated.</param>
};
YAHOO.widget.DataTable.prototype.onEventSelectRow = function(event, targetter) {
   /// <summary> Overridable custom event handler to manage selection according to desktop paradigm. </summary>
 /// <param name="oArgs.event" type="HTMLEvent">  Event object.</param>
 /// <param name="oArgs.target" type="HTMLElement">  Target element.</param>
};
YAHOO.widget.DataTable.prototype.getDataSource = function() {
   /// <summary> Returns the DataTable instance's DataSource instance. </summary>
   /// <returns type="YAHOO.util.DataSource" />
};
YAHOO.widget.DataTable.prototype.getColumnSortDir = function(oColumn, oSortedBy) {
   /// <summary> For the given Column instance, returns next direction to sort. </summary>
   /// <returns type="String" />
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="oSortedBy" type="Object">  (optional) Specify the state, or use current state.</param>
};
YAHOO.widget.DataTable.prototype._handleCellBlockSelectionByKey = function(e) {
   /// <summary> Determines selection behavior resulting from a key event when selection modeis set to "cellblock". </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  Event object.</param>
};
YAHOO.widget.DataTableformatDefault = function(el, oRecord, oColumn, oData) {
   /// <summary> Default cell formatter </summary>
 /// <param name="el" type="HTMLElement">  The element to format with markup.</param>
 /// <param name="oRecord" type="YAHOO.widget.Record">  Record instance.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="oData" type="Object">  (Optional) Data value for the cell.</param>
};
YAHOO.widget.DataTable.prototype.select = function() {
};
YAHOO.widget.DataTable.prototype._initRecordSet = function() {
   /// <summary> Initializes RecordSet. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype.getNextTrEl = function(row) {
   /// <summary> Returns DOM reference to the next TR element from the given TR element, or null. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="row" type="HTMLElement | String | Number | YAHOO.widget.Record">  Elementreference, ID string, page row index, or Record from which to get next TR element.</param>
};
YAHOO.widget.DataTable.prototype.unselectAllRows = function() {
   /// <summary> Clears out all row selections. </summary>
};
YAHOO.widget.DataTable.prototype._initTableEl = function(elContainer) {
   /// <summary> Creates HTML markup for TABLE, COLGROUP, THEAD and TBODY elements in outercontainer element. </summary>
   /// <private />
 /// <param name="elContainer" type="HTMLElement">  Container element into which to create TABLE.</param>
};
YAHOO.widget.DataTable.prototype.getSelectedColumns = function() {
   /// <summary> Returns an array selected Column instances. </summary>
   /// <returns type="YAHOO.widget.Column[]" />
};
YAHOO.widget.DataTable.prototype._handleSingleSelectionByKey = function(e) {
   /// <summary> Determines selection behavior resulting from a key event when selection modeis set to "single". </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  Event object.</param>
};
YAHOO.widget.DataTable.prototype._unsetFirstRow = function() {
   /// <summary> Removes the class YAHOO.widget.DataTable.CLASS_FIRST from the first TR elementof the DataTable page and updates internal tracker. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototypeeditDropdown = function() {
};
YAHOO.widget.DataTable.prototype._getSelectionAnchor = function(oTrigger) {
   /// <summary> Returns object literal of values that represent the selection anchor. Usedto determine selection behavior resulting from a user event. </summary>
   /// <private />
 /// <param name="oTrigger" type="Object">  (Optional) Object literal of selection trigger values(for key events).</param>
};
YAHOO.widget.DataTable.prototype._onEditorBlurEvent = function(oArgs) {
   /// <summary> Passes through blurEvent of the active CellEditor. </summary>
   /// <private />
 /// <param name="oArgs" type="Object">   Custom Event args.</param>
};
YAHOO.widget.DataTable.prototype.getNextTdEl = function(cell) {
   /// <summary> Returns DOM reference to the next TD element from the given cell, or null. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="cell" type="HTMLElement | String | Object} DOM element reference or string ID, orobject literal of syntax {record:oRecord, column:oColumn">  from which to get next TD element.</param>
};
YAHOO.widget.DataTable.prototype._destroyResizeableColumns = function() {
   /// <summary> Disables resizeability on key Column TH elements. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype.onDataReturnInsertRows = function(sRequest, oResponse, oPayload) {
   /// <summary> Callback function receives data from DataSource and inserts new recordsstarting at the index specified in oPayload.insertIndex. The value foroPayload.insertIndex can be populated when sending the request to the DataSource,or by accessing oPayload.insertIndex with the doBeforeLoadData() method at runtime.If applicable, creates or updates corresponding TR elements. </summary>
 /// <param name="sRequest" type="String">  Original request.</param>
 /// <param name="oResponse" type="Object">  Response object.</param>
 /// <param name="oPayload" type="MIXED">  Argument payload, looks in oPayload.insertIndex.</param>
};
YAHOO.widget.DataTableformatCheckbox = function(el, oRecord, oColumn, oData) {
   /// <summary> Formats a CHECKBOX element. </summary>
 /// <param name="el" type="HTMLElement">  The element to format with markup.</param>
 /// <param name="oRecord" type="YAHOO.widget.Record">  Record instance.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="oData" type="Object | Boolean} Data value for the cell. Can be a simpleBoolean to indicate whether checkbox is checked or not. Can be object literal{checked:bBoolean, label:sLabel"> . Other forms of oData require a customformatter.</param>
};
YAHOO.widget.DataTable.prototype.saveCellEditor = function() {
   /// <summary> Saves active CellEditor input to Record and upates DOM UI. </summary>
};
YAHOO.widget.DataTable.prototype.unhighlightRow = function(row) {
   /// <summary> Removes the class YAHOO.widget.DataTable.CLASS_HIGHLIGHTED from the given row. </summary>
 /// <param name="row" type="HTMLElement | String">  DOM element reference or ID string.</param>
};
YAHOO.widget.DataTable.prototype._setSelections = function() {
   /// <summary> Assigns the class DT.CLASS_SELECTED to TR and TD elements. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype._unsetLastRow = function() {
   /// <summary> Removes the class YAHOO.widget.DataTable.CLASS_LAST from the last TR elementof the DataTable page and updates internal tracker. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype.getSelectedCells = function() {
   /// <summary> Returns selected cells as an array of object literals:{recordId:sRecordId, columnKey:sColumnKey}. </summary>
   /// <returns type="Object[]" />
};
YAHOO.widget.DataTableformatTextbox = function(el, oRecord, oColumn, oData) {
   /// <summary> Formats INPUT TYPE=TEXT elements. </summary>
 /// <param name="el" type="HTMLElement">  The element to format with markup.</param>
 /// <param name="oRecord" type="YAHOO.widget.Record">  Record instance.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="oData" type="Object">  (Optional) Data value for the cell.</param>
};
YAHOO.widget.DataTable.prototype._setLastRow = function() {
   /// <summary> Assigns the class YAHOO.widget.DataTable.CLASS_LAST to the last TR elementof the DataTable page and updates internal tracker. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype._destroyColgroupEl = function() {
   /// <summary> Destroy's the DataTable COLGROUP element, if available. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype._initDraggableColumns = function() {
   /// <summary> Initializes top-level Column TH elements into DD instances. </summary>
   /// <private />
};
YAHOO.widget.DataTable_initColumnResizerProxyEl = function() {
   /// <summary> Creates HTML markup for shared Column resizer proxy. </summary>
   /// <private />
   /// <returns type="HTMLElement" />
};
YAHOO.widget.DataTable.prototype._onTbodyFocus = function(e, oSelf) {
   /// <summary> Handles focus events on the TBODY element. </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  The focus event.</param>
 /// <param name="oSelf" type="YAHOO.wiget.DataTable">  DataTable instance.</param>
};
YAHOO.widget.DataTable.prototype.getLastTdEl = function() {
   /// <summary> Returns DOM reference to the last TD element in the DataTable page (by default),the first TD element of the optionally given row, or null. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.DataTable.prototype.onDataReturnUpdateRows = function(sRequest, oResponse, oPayload) {
   /// <summary> Callback function receives data from DataSource and incrementally updates Recordsstarting at the index specified in oPayload.updateIndex. The value foroPayload.updateIndex can be populated when sending the request to the DataSource,or by accessing oPayload.updateIndex with the doBeforeLoadData() method at runtime.If applicable, creates or updates corresponding TR elements. </summary>
 /// <param name="sRequest" type="String">  Original request.</param>
 /// <param name="oResponse" type="Object">  Response object.</param>
 /// <param name="oPayload" type="MIXED">  Argument payload, looks in oPayload.updateIndex.</param>
};
YAHOO.widget.DataTable.prototype.selectRow = function(row) {
   /// <summary> Sets given row to the selected state. </summary>
 /// <param name="row" type="HTMLElement | String | YAHOO.widget.Record | Number">  HTML elementreference or ID string, Record instance, or RecordSet position index.</param>
};
YAHOO.widget.DataTable.prototype._runRenderChain = function() {
   /// <summary> Internal wrapper calls run() on render Chain instance. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype._getSelectionTrigger = function() {
   /// <summary> Returns object literal of values that represent the selection trigger. Usedto determine selection behavior resulting from a key event. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype._createTrEl = function(oRecord) {
   /// <summary> Create a new TR element for a given Record and appends it with the correctnumber of Column-state-classed TD elements. Striping is the responsibility ofthe calling function, which may decide to stripe the single row, a subset ofrows, or all the rows. </summary>
   /// <private />
   /// <returns type="HTMLElement" />
 /// <param name="oRecord" type="YAHOO.widget.Record">  Record instance</param>
};
YAHOO.widget.DataTable.prototype.getLastTrEl = function() {
   /// <summary> Returns DOM reference to the last TR element in the DataTable page, or null. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.DataTable.prototype.selectColumn = function(column) {
   /// <summary> Selects given Column. NOTE: You cannot select/unselect nested Columns. You can onlyselect/unselect non-nested Columns, and bottom-level key Columns. </summary>
 /// <param name="column" type="HTMLElement | String | Number">  DOM reference or ID string to aTH/TD element (or child of a TH/TD element), a Column key, or a ColumnSet key index.</param>
};
YAHOO.widget.DataTableformatDate = function(el, oRecord, oColumn, oData) {
   /// <summary> Formats JavaScript Dates. </summary>
 /// <param name="el" type="HTMLElement">  The element to format with markup.</param>
 /// <param name="oRecord" type="YAHOO.widget.Record">  Record instance.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="oData" type="Object">  Data value for the cell, or null.</param>
};
YAHOO.widget.DataTable.prototype.onEventEditCell = function() {
};
YAHOO.widget.DataTable.prototype.addRow = function(oData, index) {
   /// <summary> Adds one new Record of data into the RecordSet at the index if given,otherwise at the end. If the new Record is in page view, thecorresponding DOM elements are also updated. </summary>
 /// <param name="oData" type="Object">  Object literal of data for the row.</param>
 /// <param name="index" type="Number">  (optional) RecordSet position index at which to add data.</param>
};
YAHOO.widget.DataTable.prototype.initializeTable = function() {
   /// <summary> Resets a RecordSet with the given data and populates the page viewwith the new data. Any previous data, and selection and sort states arecleared. New data should be added as a separate step. </summary>
};
YAHOO.widget.DataTable.prototype._setColumnWidthDynFunction = function(oColumn, sWidth) {
   /// <summary> Updates width of a Column's liner DIV elements by dynamically creating afunction to update all element style properties in one pass. Note: Thistechnique is not supported in sandboxed environments that prohibit EVALs. </summary>
   /// <private />
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="sWidth" type="String">  New width value.</param>
};
YAHOO.widget.DataTable.prototype._destroyDraggableColumns = function() {
   /// <summary> Disables DD from top-level Column TH elements. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype._initConfigs = function(oConfig) {
   /// <summary> Initializes object literal of config values. </summary>
   /// <private />
 /// <param name="oConfig" type="Object">  Object literal of config values.</param>
};
YAHOO.widget.DataTable.prototype._initThEl = function(elTh, oColumn) {
   /// <summary> Populates TH element as defined by Column. </summary>
   /// <private />
 /// <param name="elTh" type="HTMLElement">  TH element reference.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column object.</param>
};
YAHOO.widget.DataTable.prototype.onPaginatorChange = function() {
   /// <summary> Alias for onPaginatorChange for backward compatibility </summary>
};
YAHOO.widget.DataTable.prototype.doBeforeSortColumn = function(oColumn, sSortDir) {
   /// <summary> Overridable method gives implementers a hook to show loading message beforesorting Column. </summary>
   /// <returns type="Boolean" />
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="sSortDir" type="String">  YAHOO.widget.DataTable.CLASS_ASC orYAHOO.widget.DataTable.CLASS_DESC.</param>
};
YAHOO.widget.DataTable.prototype.onShow = function() {
   /// <summary> Setting display:none on DataTable or any parent may impact width validations.After setting display back to "", implementers should call this method to manually perform those validations. </summary>
};
YAHOO.widget.DataTable.prototype.doBeforeShowCellEditor = function(oCellEditor) {
   /// <summary> Overridable abstract method to customize CellEditor before showing. </summary>
   /// <returns type="Boolean" />
 /// <param name="oCellEditor" type="YAHOO.widget.CellEditor">  The CellEditor instance.</param>
};
YAHOO.widget.DataTable.prototype.getTheadEl = function() {
   /// <summary> Returns DOM reference to the DataTable's THEAD element. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.DataTable.prototype._repaintWebkit = function() {
   /// <summary> Forces Webkit repaint. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype._handleStandardSelectionByKey = function(e) {
   /// <summary> Determines selection behavior resulting from a key event when selection modeis set to "standard". </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  Event object.</param>
};
YAHOO.widget.DataTable.prototypeeditTextbox = function() {
};
YAHOO.widget.DataTable.prototype.insertColumn = function(oColumn, index) {
   /// <summary> Inserts given Column at the index if given, otherwise at the end. NOTE: Youcan only add non-nested Columns and top-level parent Columns. You cannot adda nested Column to an existing parent. </summary>
   /// <returns type="YAHOO.widget.Column" />
 /// <param name="oColumn" type="Object | YAHOO.widget.Column">  Object literal Columndefinition or a Column instance.</param>
 /// <param name="index" type="Number">  (optional) New tree index.</param>
};
YAHOO.widget.DataTable.prototype.getState = function() {
   /// <summary> Returns on object literal representing the DataTable instance's currentstate with the following properties:paginationInstance of YAHOO.widget.PaginatorsortedBysortedBy.key{String} Key of sorted ColumnsortedBy.dir{String} Initial sort direction, either YAHOO.widget.DataTable.CLASS_ASC or YAHOO.widget.DataTable.CLASS_DESCselectedRowsArray of selected rows by Record ID.selectedCellsSelected cells as an array of object literals:{recordId:sRecordId, columnKey:sColumnKey} </summary>
   /// <returns type="Object" />
};
YAHOO.widget.DataTable.prototype.onEditorUnblockEvent = function(oArgs) {
   /// <summary> Public handler of the editorUnblockEvent. By default, undisables DataTable UI. </summary>
 /// <param name="oArgs" type="Object">   Custom Event args.</param>
};
YAHOO.widget.DataTable.prototype.getSelectedTrEls = function() {
   /// <summary> Returns array of selected TR elements on the page. </summary>
   /// <returns type="HTMLElement[]" />
};
YAHOO.widget.DataTable.prototype.getThEl = function(theadCell) {
   /// <summary> Returns DOM reference to a TH element. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="theadCell" type="YAHOO.widget.Column | HTMLElement | String">  Column instance,DOM element reference, or string ID.</param>
};
YAHOO.widget.DataTable.prototype._handleCellRangeSelectionByMouse = function(event, targetter) {
   /// <summary> Determines selection behavior resulting from a mouse event when selection modeis set to "cellrange". </summary>
   /// <private />
 /// <param name="oArgs.event" type="HTMLEvent">  Event object.</param>
 /// <param name="oArgs.target" type="HTMLElement">  Target element.</param>
};
YAHOO.widget.DataTableformatEmail = function(el, oRecord, oColumn, oData) {
   /// <summary> Formats emails. </summary>
 /// <param name="el" type="HTMLElement">  The element to format with markup.</param>
 /// <param name="oRecord" type="YAHOO.widget.Record">  Record instance.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="oData" type="Object">  Data value for the cell, or null.</param>
};
YAHOO.widget.DataTable.prototype._focusEl = function(el) {
   /// <summary> Sets focus on the given element. </summary>
   /// <private />
 /// <param name="el" type="HTMLElement">  Element.</param>
};
YAHOO.widget.DataTable.prototype.getFirstTrEl = function() {
   /// <summary> Returns DOM reference to the first TR element in the DataTable page, or null. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.DataTable.prototype._onEditorUnblockEvent = function(oArgs) {
   /// <summary> Passes through unblockEvent of the active CellEditor. </summary>
   /// <private />
 /// <param name="oArgs" type="Object">   Custom Event args.</param>
};
YAHOO.widget.DataTable.prototype.hideColumn = function(oColumn) {
   /// <summary> Hides given Column. NOTE: You cannot hide/show nested Columns. You can onlyhide/show non-nested Columns, and top-level parent Columns (which willhide/show all children Columns). </summary>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
};
YAHOO.widget.DataTable.prototype.onDataReturnSetRecords = function() {
   /// <summary> Alias for onDataReturnSetRows for backward compatibility </summary>
};
YAHOO.widget.DataTable.prototype.resetCellEditor = function() {
};
YAHOO.widget.DataTable.prototype.focusTheadEl = function() {
   /// <summary> Brings focus to the THEAD element. </summary>
};
YAHOO.widget.DataTable.prototype.getRecord = function(row) {
   /// <summary> For the given identifier, returns the associated Record instance. </summary>
   /// <returns type="YAHOO.widget.Record" />
 /// <param name="row" type="HTMLElement | Number | String">  DOM reference to a TR element (orchild of a TR element), RecordSet position index, or Record ID.</param>
};
YAHOO.widget.DataTable.prototype.getRow = function() {
};
YAHOO.widget.DataTable.prototype.focusTbodyEl = function() {
   /// <summary> Brings focus to the TBODY element. </summary>
};
YAHOO.widget.DataTable.prototype.onEventFormatCell = function(event, targetter) {
   /// <summary> Overridable custom event handler to format cell. </summary>
 /// <param name="oArgs.event" type="HTMLEvent">  Event object.</param>
 /// <param name="oArgs.target" type="HTMLElement">  Target element.</param>
};
YAHOO.widget.DataTable.prototype.onEventUnhighlightColumn = function(event, targetter) {
   /// <summary> Overridable custom event handler to unhighlight Column. Accounts for spuriouscaused-by-child events. </summary>
 /// <param name="oArgs.event" type="HTMLEvent">  Event object.</param>
 /// <param name="oArgs.target" type="HTMLElement">  Target element.</param>
};
YAHOO.widget.DataTable.prototype.highlightCell = function(cell) {
   /// <summary> Assigns the class YAHOO.widget.DataTable.CLASS_HIGHLIGHTED to the given cell. </summary>
 /// <param name="cell" type="HTMLElement | String">  DOM element reference or ID string.</param>
};
YAHOO.widget.DataTable.prototype._initResizeableColumns = function() {
   /// <summary> Initializes resizeability on key Column TH elements. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype.destroy = function() {
   /// <summary> Nulls out the entire DataTable instance and related objects, removes attachedevent listeners, and clears out DOM elements inside the container. Aftercalling this method, the instance reference should be expliclitly nulled byimplementer, as in myDataTable = null. Use with caution! </summary>
};
YAHOO.widget.DataTable.prototype._handlePaginatorChange = function(e) {
   /// <summary> Update the UI infrastructure in response to a "paginator" attribute change. </summary>
   /// <private />
 /// <param name="e" type="Object">  Change event object containing keys 'type','newValue',and 'prevValue'</param>
};
YAHOO.widget.DataTableformatButton = function(el, oRecord, oColumn, oData) {
   /// <summary> Formats a BUTTON element. </summary>
 /// <param name="el" type="HTMLElement">  The element to format with markup.</param>
 /// <param name="oRecord" type="YAHOO.widget.Record">  Record instance.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="oData" type="Object | Boolean">  Data value for the cell. By default, the valueis what gets written to the BUTTON.</param>
};
YAHOO.widget.DataTableformatDropdown = function(el, oRecord, oColumn, oData) {
   /// <summary> Formats SELECT elements. </summary>
 /// <param name="el" type="HTMLElement">  The element to format with markup.</param>
 /// <param name="oRecord" type="YAHOO.widget.Record">  Record instance.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="oData" type="Object">  Data value for the cell, or null.</param>
};
YAHOO.widget.DataTable.prototype.unhighlightColumn = function(column) {
   /// <summary> Removes the class YAHOO.widget.DataTable.CLASS_HIGHLIGHTED to cells of the given Column.NOTE: You cannot highlight/unhighlight nested Columns. You can onlyhighlight/unhighlight non-nested Columns, and bottom-level key Columns. </summary>
 /// <param name="column" type="HTMLElement | String | Number">  DOM reference or ID string to aTH/TD element (or child of a TH/TD element), a Column key, or a ColumnSet key index.</param>
};
YAHOO.widget.DataTable.prototype._handleSingleSelectionByMouse = function(event, targetter) {
   /// <summary> Determines selection behavior resulting from a mouse event when selection modeis set to "single". </summary>
   /// <private />
 /// <param name="oArgs.event" type="HTMLEvent">  Event object.</param>
 /// <param name="oArgs.target" type="HTMLElement">  Target element.</param>
};
YAHOO.widget.DataTable.prototype.selectCell = function(cell) {
   /// <summary> Sets given cell to the selected state. </summary>
 /// <param name="cell" type="HTMLElement | String">  DOM element reference or ID stringto DataTable page element or RecordSet index.</param>
};
YAHOO.widget.DataTable.prototype.onEditorBlockEvent = function(oArgs) {
   /// <summary> Public handler of the editorBlockEvent. By default, disables DataTable UI. </summary>
 /// <param name="oArgs" type="Object">   Custom Event args.</param>
};
YAHOO.widget.DataTable.prototype.cancelCellEditor = function() {
   /// <summary> Cancels active CellEditor. </summary>
};
YAHOO.widget.DataTable.prototypeeditRadio = function() {
};
YAHOO.widget.DataTable.prototype._destroyColumnHelpers = function() {
   /// <summary> Destroys elements associated with Column functionality: ColumnDD and ColumnResizers. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype._onEditorShowEvent = function(oArgs) {
   /// <summary> Passes through showEvent of the active CellEditor. </summary>
   /// <private />
 /// <param name="oArgs" type="Object">   Custom Event args.</param>
};
YAHOO.widget.DataTable.prototype._initDomElements = function(elContainer) {
   /// <summary> Initializes DOM elements. </summary>
   /// <private />
 /// <param name="elContainer" type="HTMLElement | String} HTML DIV element by reference or ID. return {Boolean">  False in case of error, otherwise true</param>
};
YAHOO.widget.DataTable.prototypeeditDate = function() {
};
YAHOO.widget.DataTable.prototype.render = function() {
   /// <summary> Renders the view with existing Records from the RecordSet whilemaintaining sort, pagination, and selection states. For performance, reusesexisting DOM elements when possible while deleting extraneous elements. </summary>
};
YAHOO.widget.DataTable.prototype.disable = function() {
   /// <summary> Disables DataTable UI. </summary>
};
YAHOO.widget.DataTable.prototype._destroyTableEl = function() {
   /// <summary> Destroy's the DataTable TABLE element, if available. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype.doBeforePaginatorChange = function(oPaginatorState) {
   /// <summary> Overridable method gives implementers a hook to show loading message beforechanging Paginator value. </summary>
   /// <returns type="Boolean" />
 /// <param name="oPaginatorState" type="Object">  An object literal describing the proposed pagination state.</param>
};
YAHOO.widget.DataTable.prototype.onEventSortColumn = function(event, targetter) {
   /// <summary> Overridable custom event handler to sort Column. </summary>
 /// <param name="oArgs.event" type="HTMLEvent">  Event object.</param>
 /// <param name="oArgs.target" type="HTMLElement">  Target element.</param>
};
YAHOO.widget.DataTable.prototype.getRecordIndex = function(row) {
   /// <summary> Returns Record index for given TR element or page row index. </summary>
   /// <returns type="Number" />
 /// <param name="row" type="YAHOO.widget.Record | HTMLElement | Number">  Record instance, TRelement reference or page row index.</param>
};
YAHOO.widget.DataTable.prototype._repaintOpera = function() {
   /// <summary> Forces Opera repaint. </summary>
   /// <private />
};
YAHOO.widget.DataTable.prototype.handleDataReturnPayload = function(oRequest, oResponse, oPayload) {
   /// <summary> Hook to update oPayload before consumption. </summary>
   /// <returns type="MIXED" />
 /// <param name="oRequest" type="MIXED">  Original generated request.</param>
 /// <param name="oResponse" type="Object">  Response object.</param>
 /// <param name="oPayload" type="MIXED">  State values.</param>
};
YAHOO.widget.DataTable.prototype.doBeforeLoadData = function(sRequest, oResponse, oPayload) {
   /// <summary> Overridable method gives implementers a hook to access data beforeit gets added to RecordSet and rendered to the TBODY. </summary>
   /// <returns type="Boolean" />
 /// <param name="sRequest" type="String">  Original request.</param>
 /// <param name="oResponse" type="Object">  Response object.</param>
 /// <param name="oPayload" type="MIXED">  additional arguments</param>
};
YAHOO.widget.DataTable.prototype.onDataReturnSetRows = function(oRequest, oResponse, oPayload) {
   /// <summary> Callback function receives reponse from DataSource and populates theRecordSet with the results. </summary>
 /// <param name="oRequest" type="MIXED">  Original generated request.</param>
 /// <param name="oResponse" type="Object">  Response object.</param>
 /// <param name="oPayload" type="MIXED">  (optional) Additional argument(s)</param>
};
YAHOO.widget.DataTable.prototype.getContainerEl = function() {
   /// <summary> Returns DOM reference to the DataTable's container element. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.DataTable.prototype._onTableDblclick = function(e, oSelf) {
   /// <summary> Handles dblclick events on the DataTable instance. </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  The dblclick event.</param>
 /// <param name="oSelf" type="YAHOO.wiget.DataTable">  DataTable instance.</param>
};
YAHOO.widget.DataTable.prototype.getMsgTbodyEl = function() {
   /// <summary> Returns DOM reference to the DataTable's secondary TBODY element that isused to display messages. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.DataTable.prototype.getLastSelectedCell = function() {
   /// <summary> Returns last selected cell as an object literal:{recordId:sRecordId, columnKey:sColumnKey}. </summary>
   /// <returns type="Object" />
};
YAHOO.widget.DataTable.prototype._onTableKeypress = function(e, oSelf) {
   /// <summary> Handles keypress events on the TABLE. Mainly to support stopEvent on Mac. </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  The key event.</param>
 /// <param name="oSelf" type="YAHOO.wiget.DataTable">  DataTable instance.</param>
};
YAHOO.widget.DataTable.prototype._initColgroupEl = function(elTable) {
   /// <summary> Initializes COLGROUP and COL elements for managing minWidth. </summary>
   /// <private />
 /// <param name="elTable" type="HTMLElement">  TABLE element into which to create COLGROUP.</param>
};
YAHOO.widget.DataTable.prototype.onEventHighlightColumn = function(event, targetter) {
   /// <summary> Overridable custom event handler to highlight Column. Accounts for spuriouscaused-by-child events. </summary>
 /// <param name="oArgs.event" type="HTMLEvent">  Event object.</param>
 /// <param name="oArgs.target" type="HTMLElement">  Target element.</param>
};
YAHOO.widget.DataTable.prototype._syncColWidths = function() {
};
YAHOO.widget.DataTable.prototype.getTrEl = function(row) {
   /// <summary> Returns the corresponding TR reference for a given DOM element, ID string ordirectly page row index. If the given identifier is a child of a TR element,then DOM tree is traversed until a parent TR element is returned, otherwisenull. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="row" type="HTMLElement | String | Number | YAHOO.widget.Record">  Which row toget: by element reference, ID string, page row index, or Record.</param>
};
YAHOO.widget.DataTable.prototype.formatCell = function(elLiner, oRecord, oColumn) {
   /// <summary> Outputs markup into the given TD based on given Record. </summary>
 /// <param name="elLiner" type="HTMLElement">  The liner DIV element within the TD.</param>
 /// <param name="oRecord" type="YAHOO.widget.Record">  (Optional) Record instance.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  (Optional) Column instance.</param>
};
YAHOO.widget.DataTable.prototype.refreshView = function() {
};
YAHOO.widget.DataTable.prototype.highlightRow = function(row) {
   /// <summary> Assigns the class YAHOO.widget.DataTable.CLASS_HIGHLIGHTED to the given row. </summary>
 /// <param name="row" type="HTMLElement | String">  DOM element reference or ID string.</param>
};
YAHOO.widget.DataTable.prototype.unselectAllCells = function() {
   /// <summary> Clears out all cell selections. </summary>
};
YAHOO.widget.DataTable.prototype._onEditorBlockEvent = function(oArgs) {
   /// <summary> Passes through blockEvent of the active CellEditor. </summary>
   /// <private />
 /// <param name="oArgs" type="Object">   Custom Event args.</param>
};
YAHOO.widget.DateCellEditor.prototype.renderForm = function() {
   /// <summary> Render a Calendar. </summary>
};
YAHOO.widget.DateCellEditor.prototype.handleDisabledBtns = function() {
   /// <summary> After rendering form, if disabledBtns is set to true, then sets up a mechanismto save input without them. </summary>
};
YAHOO.widget.DateCellEditor.prototype.focus = function() {
   /// <summary> Sets focus in DateCellEditor. </summary>
};
YAHOO.widget.DateCellEditor.prototype.getInputValue = function() {
   /// <summary> Retrieves input value from DateCellEditor. </summary>
};
YAHOO.widget.DateCellEditor.prototype.resetForm = function() {
   /// <summary> Resets DateCellEditor UI to initial state. </summary>
};
YAHOO.widget.DateMath.isYearOverlapWeek = function(weekBeginDate) {
   /// <summary> Determines if a given week overlaps two different years. </summary>
   /// <returns type="Boolean" />
 /// <param name="weekBeginDate" type="Date"> The JavaScript Date representing the first day of the week.</param>
};
YAHOO.widget.DateMath.getWeekNumber = function(date, firstDayOfWeek, janDate) {
   /// <summary> Calculates the week number for the given date. Can currently support standardU.S. week numbers, based on Jan 1st defining the 1st week of the year, and ISO8601 week numbers, based on Jan 4th defining the 1st week of the year. </summary>
   /// <returns type="Number" />
 /// <param name="date" type="Date"> The JavaScript date for which to find the week number</param>
 /// <param name="firstDayOfWeek" type="Number"> The index of the first day of the week (0 = Sun, 1 = Mon ... 6 = Sat).Defaults to 0</param>
 /// <param name="janDate" type="Number"> The date in the first week of January which defines week one for the yearDefaults to the value of YAHOO.widget.DateMath.WEEK_ONE_JAN_DATE, which is 1 (Jan 1st). For the U.S, this is normally Jan 1st. ISO8601 uses Jan 4th to define the first week of the year.</param>
};
YAHOO.widget.DateMath.getDayOffset = function(date, calendarYear) {
   /// <summary> Calculates the number of days the specified date is from January 1 of the specified calendar year.Passing January 1 to this function would return an offset value of zero. </summary>
   /// <returns type="Number" />
 /// <param name="date" type="Date"> The JavaScript date for which to find the offset</param>
 /// <param name="calendarYear" type="Number"> The calendar year to use for determining the offset</param>
};
YAHOO.widget.DateMath.findMonthEnd = function(date) {
   /// <summary> Gets the last day of a month containing a given date. </summary>
   /// <returns type="Date" />
 /// <param name="date" type="Date"> The JavaScript Date used to calculate the month end</param>
};
YAHOO.widget.DateMath.getFirstDayOfWeek = function(dt, startOfWeek) {
   /// <summary> Get the first day of the week, for the give date. </summary>
   /// <returns type="Date" />
 /// <param name="dt" type="Date"> The date in the week for which the first day is required.</param>
 /// <param name="startOfWeek" type="Number"> The index for the first day of the week, 0 = Sun, 1 = Mon ... 6 = Sat (defaults to 0)</param>
};
YAHOO.widget.DateMath.after = function(date, compareTo) {
   /// <summary> Determines whether a given date is after another date on the calendar. </summary>
   /// <returns type="Boolean" />
 /// <param name="date" type="Date">  The Date object to compare with the compare argument</param>
 /// <param name="compareTo" type="Date"> The Date object to use for the comparison</param>
};
YAHOO.widget.DateMath.clearTime = function(date) {
   /// <summary> Clears the time fields from a given date, effectively setting the time to 12 noon. </summary>
   /// <returns type="Date" />
 /// <param name="date" type="Date"> The JavaScript Date for which the time fields will be cleared</param>
};
YAHOO.widget.DateMath.isMonthOverlapWeek = function(weekBeginDate) {
   /// <summary> Determines if a given week overlaps two different months. </summary>
   /// <returns type="Boolean" />
 /// <param name="weekBeginDate" type="Date"> The JavaScript Date representing the first day of the week.</param>
};
YAHOO.widget.DateMath.add = function(date, field, amount) {
   /// <summary> Adds the specified amount of time to the this instance. </summary>
   /// <returns type="Date" />
 /// <param name="date" type="Date"> The JavaScript Date object to perform addition on</param>
 /// <param name="field" type="String"> The field constant to be used for performing addition.</param>
 /// <param name="amount" type="Number"> The number of units (measured in the field constant) to add to the date.</param>
};
YAHOO.widget.DateMath.getJan1 = function(calendarYear) {
   /// <summary> Retrieves a JavaScript Date object representing January 1 of any given year. </summary>
   /// <returns type="Date" />
 /// <param name="calendarYear" type="Number">  The calendar year for which to retrieve January 1</param>
};
YAHOO.widget.DateMath.between = function(date, dateBegin, dateEnd) {
   /// <summary> Determines whether a given date is between two other dates on the calendar. </summary>
   /// <returns type="Boolean" />
 /// <param name="date" type="Date">  The date to check for</param>
 /// <param name="dateBegin" type="Date"> The start of the range</param>
 /// <param name="dateEnd" type="Date">  The end of the range</param>
};
YAHOO.widget.DateMath.findMonthStart = function(date) {
   /// <summary> Gets the first day of a month containing a given date. </summary>
   /// <returns type="Date" />
 /// <param name="date" type="Date"> The JavaScript Date used to calculate the month start</param>
};
YAHOO.widget.DateMath.before = function(date, compareTo) {
   /// <summary> Determines whether a given date is before another date on the calendar. </summary>
   /// <returns type="Boolean" />
 /// <param name="date" type="Date">  The Date object to compare with the compare argument</param>
 /// <param name="compareTo" type="Date"> The Date object to use for the comparison</param>
};
YAHOO.widget.DateMath.subtract = function(date, field, amount) {
   /// <summary> Subtracts the specified amount of time from the this instance. </summary>
   /// <returns type="Date" />
 /// <param name="date" type="Date"> The JavaScript Date object to perform subtraction on</param>
 /// <param name="field" type="Number"> The this field constant to be used for performing subtraction.</param>
 /// <param name="amount" type="Number"> The number of units (measured in the field constant) to subtract from the date.</param>
};
YAHOO.widget.DateMath._addDays = function(d, nDays) {
   /// <summary> Private helper method to account for bug in Safari 2 (webkit Fix approach and original findings are available here:http://brianary.blogspot.com/2006/03/safari-date-bug.html </summary>
   /// <private />
 /// <param name="d" type="Date"> JavaScript date object</param>
 /// <param name="nDays" type="Number"> The number of days to add to the date object (can be negative)</param>
};
YAHOO.widget.DateMath.getDate = function(y, m, d) {
   /// <summary> Returns a new JavaScript Date object, representing the given year, month and date. Time fields (hr, min, sec, ms) on the new Date objectare set to 0. The method allows Date instances to be created with the a year less than 100. "new Date(year, month, date)" implementations set the year to 19xx if a year (xx) which is less than 100 is provided.NOTE:Validation on argument values is not performed. It is the caller's responsibility to ensurearguments are valid as per the ECMAScript-262 Date object specification for the new Date(year, month[, date]) constructor. </summary>
   /// <returns type="Date" />
 /// <param name="y" type="Number"> Year.</param>
 /// <param name="m" type="Number"> Month index from 0 (Jan) to 11 (Dec).</param>
 /// <param name="d" type="Number"> (optional) Date from 1 to 31. If not provided, defaults to 1.</param>
};
YAHOO.widget.DateNode.prototype.getEditorValue = function(editorData) {
   /// <summary> Returns the value from the input element.Overrides Node.getEditorValue. </summary>
   /// <returns type="string" />
 /// <param name="editorData" type="YAHOO.widget.TreeView.editorData">   a shortcut to the static object holding editing information</param>
};
YAHOO.widget.DateNode.prototype.fillEditorContainer = function(editorData) {
   /// <summary> If YAHOO.widget.Calendar is available, it will pop up a Calendar to enter a new date.  Otherwise, it falls back to a plain &lt;input&gt;  textbox </summary>
   /// <returns type="" />
 /// <param name="editorData" type="YAHOO.widget.TreeView.editorData">   a shortcut to the static object holding editing information</param>
};
YAHOO.widget.DateNode.prototype.displayEditedValue = function(value, editorData) {
   /// <summary> Finally displays the newly entered date in the tree.Overrides Node.displayEditedValue. </summary>
 /// <param name="value" type="string">  date to be displayed and stored in the node</param>
 /// <param name="editorData" type="YAHOO.widget.TreeView.editorData">   a shortcut to the static object holding editing information</param>
};
YAHOO.widget.DateNode.prototype.getNodeDefinition = function() {
   /// <summary> Returns an object which could be used to build a tree out of this node and its children.It can be passed to the tree constructor to reproduce this node as a tree.It will return false if the node or any descendant loads dynamically, regardless of whether it is loaded or not. </summary>
   /// <returns type="Object | false" />
};
YAHOO.widget.Dialog.prototype.configButtons = function(type, args, obj) {
   /// <summary> The default event handler for the "buttons" configuration property </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Dialog.prototype.getButtons = function() {
   /// <summary> Returns an array containing each of the Dialog's buttons, by default an array of HTML &#60;BUTTON&#62; elements.  If the Dialog's buttons were created using the YAHOO.widget.Button class (via the inclusion of the optional Button dependancy on the page), an array of YAHOO.widget.Button instances is returned. </summary>
   /// <returns type="Array" />
};
YAHOO.widget.Dialog.prototype.doSubmit = function() {
   /// <summary> Submits the Dialog's form depending on the value of the "postmethod" configuration property.  Please note: As of version 2.3 this method will automatically handle asyncronous file uploads should the Dialog instance's form contain &#60;input type="file"&#62; elements.  If a Dialog instance will be handling asyncronous file uploads, its callback property will need to be setup with a upload handler rather than the standard success and, or failure handlers.  For more information, see the Connection Manager documenation on file uploads. </summary>
};
YAHOO.widget.Dialog.prototype.configClose = function(type, args, obj) {
   /// <summary> The default event handler fired when the "close" property is changed. The method controls the appending or hiding of the closeicon at the top right of the Dialog. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Dialog.prototype._submitHandler = function(e) {
   /// <summary> Internal handler for the form submit event </summary>
 /// <param name="e" type="DOMEvent"> The DOM Event object</param>
};
YAHOO.widget.Dialog.prototype._doClose = function(e) {
   /// <summary> Event handler for the close icon </summary>
 /// <param name="e" type="DOMEvent"></param>
};
YAHOO.widget.Dialog.prototype.cancel = function() {
   /// <summary> Executes the cancel of the Dialog followed by a hide. </summary>
};
YAHOO.widget.Dialog.prototype.configPostMethod = function(type, args, obj) {
   /// <summary> The default event handler for the "postmethod" configuration property </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Dialog.prototype.focusFirstButton = function() {
   /// <summary> Sets the focus to the first button created via the "buttons"configuration property. </summary>
};
YAHOO.widget.Dialog.prototype.initEvents = function() {
   /// <summary> Initializes the custom events for Dialog which are fired automatically at appropriate times by the Dialog class. </summary>
};
YAHOO.widget.Dialog.prototype.focusFirst = function() {
   /// <summary> Sets focus to the first focusable element in the Dialog's form if found, else, the default button if found, else the first button defined via the "buttons" configuration property.This method is invoked when the Dialog is made visible. </summary>
};
YAHOO.widget.Dialog.prototype.submit = function() {
   /// <summary> Executes a submit of the Dialog if validation is successful. By default the Dialog is hiddenafter submission, but you can set the "hideaftersubmit"configuration property to false, to prevent the Dialogfrom being hidden. </summary>
};
YAHOO.widget.Dialog.prototype.init = function(el, userConfig) {
   /// <summary> The Dialog initialization method, which is executed for Dialog and all of its subclasses. This method is automatically called by the constructor, and  sets up all DOM references for pre-existing markup, and creates required markup if it is not already present. </summary>
 /// <param name="el" type="String"> The element ID representing the Dialog OR</param>
 /// <param name="el" type="HTMLElement"> The element representing the Dialog</param>
 /// <param name="userConfig" type="Object"> The configuration object literal containing the configuration that should be set for this Dialog. See configuration documentation for more details.</param>
};
YAHOO.widget.Dialog.prototype.toString = function() {
   /// <summary> Returns a string representation of the object. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Dialog.prototype.destroy = function() {
   /// <summary> Removes the Panel element from the DOM and sets all child elements to null. </summary>
};
YAHOO.widget.Dialog.prototype.getData = function() {
   /// <summary> Returns a JSON-compatible data structure representing the data currently contained in the form. </summary>
   /// <returns type="Object" />
};
YAHOO.widget.Dialog.prototype.blurButtons = function() {
   /// <summary> Blurs all the buttons defined via the "buttons" configuration property. </summary>
};
YAHOO.widget.Dialog.prototype.focusLast = function() {
   /// <summary> Sets focus to the last element in the Dialog's form or the last button defined via the "buttons" configuration property. </summary>
};
YAHOO.widget.Dialog.prototype.setFirstLastFocusable = function() {
   /// <summary> Configures instance properties, pointing to the first and last focusable elements in the Dialog's form. </summary>
};
YAHOO.widget.Dialog.prototype.focusDefaultButton = function() {
   /// <summary> Sets the focus to the button that is designated as the default via the "buttons" configuration property. By default, this method is called when the Dialog is made visible. </summary>
};
YAHOO.widget.Dialog.prototype.validate = function() {
   /// <summary> Built-in function hook for writing a validation function that will be checked for a "true" value prior to a submit. This function, as implemented by default, always returns true, so it should be overridden if validation is necessary. </summary>
};
YAHOO.widget.Dialog.prototype.registerForm = function() {
   /// <summary> Prepares the Dialog's internal FORM object, creating one if one isnot currently present. </summary>
};
YAHOO.widget.Dialog.prototype.focusLastButton = function() {
   /// <summary> Sets the focus to the last button created via the "buttons" configuration property. </summary>
};
YAHOO.widget.Dialog.prototype.initDefaultConfig = function() {
   /// <summary> Initializes the class's configurable properties which can be changed using the Dialog's Config object (cfg). </summary>
};
YAHOO.widget.Dialog.prototype.setTabLoop = function(firstElement, lastElement) {
   /// <summary> Sets up a tab, shift-tab loop between the first and last elementsprovided. NOTE: Sets up the preventBackTab and preventTabOut KeyListenerinstance properties, which are reset everytime this method is invoked. </summary>
 /// <param name="firstElement" type="HTMLElement"></param>
 /// <param name="lastElement" type="HTMLElement"></param>
};
YAHOO.widget.Dialog.prototype._getFormAttributes = function(oForm) {
   /// <summary> Retrieves important attributes (currently method and action) fromthe form element, accounting for any elements which may have the same name as the attributes. Defaults to "POST" and "" for method and action respectivelyif the attribute cannot be retrieved. </summary>
   /// <returns type="Object" />
 /// <param name="oForm" type="HTMLFormElement"> The HTML Form element from which to retrieve the attributes</param>
};
YAHOO.widget.Dialog.prototype._getButton = function(button) {
   /// <summary> Helper method to normalize button references. It either returns the YUI Button instance for the given element if found,or the passes back the HTMLElement reference if a corresponding YUI Buttonreference is not found or YAHOO.widget.Button does not exist on the page. </summary>
   /// <private />
   /// <returns type="YAHOO.widget.Button|HTMLElement" />
 /// <param name="button" type="HTMLElement"></param>
};
YAHOO.widget.DropdownCellEditor.prototype.renderForm = function() {
   /// <summary> Render a form with select element. </summary>
};
YAHOO.widget.DropdownCellEditor.prototype.handleDisabledBtns = function() {
   /// <summary> After rendering form, if disabledBtns is set to true, then sets up a mechanismto save input without them. </summary>
};
YAHOO.widget.DropdownCellEditor.prototype.focus = function() {
   /// <summary> Sets focus in DropdownCellEditor. </summary>
};
YAHOO.widget.DropdownCellEditor.prototype.getInputValue = function() {
   /// <summary> Retrieves input value from DropdownCellEditor. </summary>
};
YAHOO.widget.DropdownCellEditor.prototype.resetForm = function() {
   /// <summary> Resets DropdownCellEditor UI to initial state. </summary>
};
YAHOO.widget.DualSlider.prototype._handleSlideStart = function() {
   /// <summary> Executed when one of the sliders fires the slideStart event </summary>
   /// <private />
};
YAHOO.widget.DualSlider.prototype._handleMouseDown = function(e) {
   /// <summary> Delegates the onMouseDown to the appropriate Slider </summary>
 /// <param name="e" type="Event">  mouseup event</param>
};
YAHOO.widget.DualSlider.prototype._oneTimeCallback = function(o, evt, fn) {
   /// <summary> Schedule an event callback that will execute once, then unsubscribeitself. </summary>
   /// <private />
 /// <param name="o" type="EventProvider">  Object to attach the event to</param>
 /// <param name="evt" type="string">  Name of the event</param>
 /// <param name="fn" type="Function">  function to execute once</param>
};
YAHOO.widget.DualSlider.prototype._handleSlideEnd = function() {
   /// <summary> Executed when one of the sliders fires the slideEnd event </summary>
   /// <private />
};
YAHOO.widget.DualSlider.prototype._handleDrag = function() {
   /// <summary> Overrides the onDrag method for both sliders </summary>
   /// <private />
};
YAHOO.widget.DualSlider.prototype._bindKeyEvents = function() {
   /// <summary> Set up the listeners for the keydown and keypress events. </summary>
};
YAHOO.widget.DualSlider.prototype._handleMinChange = function() {
   /// <summary> Executed when the min slider fires the change event </summary>
   /// <private />
};
YAHOO.widget.DualSlider.prototype.setMinValue = function(min, skipAnim, force, silent) {
   /// <summary> Set the min thumb position to a new value. </summary>
 /// <param name="min" type="int">  Pixel offset for min thumb</param>
 /// <param name="skipAnim" type="boolean">  (optional) Set to true to skip thumb animation.Default false</param>
 /// <param name="force" type="boolean">  (optional) ignore the locked setting and setvalue anyway. Default false</param>
 /// <param name="silent" type="boolean">  (optional) Set to true to skip firing changeevents.  Default false</param>
};
YAHOO.widget.DualSlider.prototype.setMaxValue = function(max, skipAnim, force, silent) {
   /// <summary> Set the max thumb position to a new value. </summary>
 /// <param name="max" type="int">  Pixel offset for max thumb</param>
 /// <param name="skipAnim" type="boolean">  (optional) Set to true to skip thumb animation.Default false</param>
 /// <param name="force" type="boolean">  (optional) ignore the locked setting and setvalue anyway. Default false</param>
 /// <param name="silent" type="boolean">  (optional) Set to true to skip firing changeevents.  Default false</param>
};
YAHOO.widget.DualSlider.prototype._handleMaxChange = function() {
   /// <summary> Executed when the max slider fires the change event </summary>
   /// <private />
};
YAHOO.widget.DualSlider.prototype._handleKeyDown = function(e) {
   /// <summary> Delegate event handling to the active Slider.  See Slider.handleKeyDown. </summary>
 /// <param name="e" type="Event">  the mousedown DOM event</param>
};
YAHOO.widget.DualSlider.prototype.updateValue = function(silent) {
   /// <summary> Executed when one of the sliders is moved </summary>
   /// <private />
 /// <param name="silent" type="boolean">  (optional) Set to true to skip firing changeevents.  Default false</param>
};
YAHOO.widget.DualSlider.prototype._handleKeyPress = function(e) {
   /// <summary> Delegate event handling to the active Slider.  See Slider.handleKeyPress. </summary>
 /// <param name="e" type="Event">  the mousedown DOM event</param>
};
YAHOO.widget.DualSlider.prototype.selectActiveSlider = function(e) {
   /// <summary> A background click will move the slider thumb nearest to the click.Override if you need different behavior. </summary>
   /// <private />
 /// <param name="e" type="Event">  the mousedown event</param>
};
YAHOO.widget.DualSlider.prototype.setValues = function(min, max, skipAnim, force, silent) {
   /// <summary> Sets the min and max thumbs to new values. </summary>
 /// <param name="min" type="int">  Pixel offset to assign to the min thumb</param>
 /// <param name="max" type="int">  Pixel offset to assign to the max thumb</param>
 /// <param name="skipAnim" type="boolean">  (optional) Set to true to skip thumb animation.Default false</param>
 /// <param name="force" type="boolean">  (optional) ignore the locked setting and setvalue anyway. Default false</param>
 /// <param name="silent" type="boolean">  (optional) Set to true to skip firing changeevents.  Default false</param>
};
YAHOO.widget.DualSlider.prototype._cleanEvent = function(o, evt) {
   /// <summary> Clean up the slideEnd event subscribers array, since each one-timecallback will be replaced in the event's subscribers property withnull.  This will cause memory bloat and loss of performance. </summary>
   /// <private />
 /// <param name="o" type="EventProvider">  object housing the CustomEvent</param>
 /// <param name="evt" type="string">  name of the CustomEvent</param>
};
YAHOO.widget.DualSlider.prototype._handleMouseUp = function(e) {
   /// <summary> Delegates the onMouseUp to the active Slider </summary>
 /// <param name="e" type="Event">  mouseup event</param>
};
YAHOO.widget.Editor.prototype._handleWindowInputs = function(disable) {
   /// <summary> Disables/Enables all fields inside Editor windows. Used in show/hide events to keep window fields from submitting when the parent form is submitted. </summary>
 /// <param name="disable" type="Boolean"> The state to set all inputs in all Editor windows to. Defaults to: false.</param>
};
YAHOO.widget.Editor.prototype._fixNodes = function() {
   /// <summary> Fix href and imgs as well as remove invalid HTML. </summary>
   /// <private />
};
YAHOO.widget.Editor.prototype.cmd_justifyright = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('justifyright') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.Editor.prototype._defaultImageToolbar = function() {
   /// <summary> A reference to the Toolbar Object inside Image Editor Window. </summary>
   /// <private />
};
YAHOO.widget.Editor.prototype.moveWindow = function(force) {
   /// <summary> Realign the window with the currentElement and reposition the knob above the panel. </summary>
 /// <param name="force" type="Boolean"> Boolean to tell it to move but not use any animation (Usually done the first time the window is loaded.)</param>
};
YAHOO.widget.Editor.prototype.initAttributes = function(attr) {
   /// <summary> Initializes all of the configuration attributes used to create the editor. </summary>
 /// <param name="attr" type="Object"> Object literal specifying a set of configuration attributes used to create the editor.</param>
};
YAHOO.widget.Editor.prototype.openWindow = function(win) {
   /// <summary> Opens a new "window/panel" </summary>
 /// <param name="win" type="YAHOO.widget.EditorWindow"> A YAHOO.widget.EditorWindow instance</param>
};
YAHOO.widget.Editor.prototype.cmd_redo = function(value) {
   /// <summary> Pulls an item from the Undo stack and updates the Editor </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.Editor.prototype.cmd_superscript = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('superscript') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.Editor.prototype._renderCreateLinkWindow = function() {
   /// <summary> Pre renders the CreateLink window so we get faster window opening. </summary>
   /// <private />
};
YAHOO.widget.Editor.prototype._hasUndoLevel = function() {
   /// <summary> Checks to see if we have an undo level available </summary>
   /// <private />
   /// <returns type="" />
};
YAHOO.widget.Editor.prototype._defaultImageToolbarConfig = function() {
   /// <summary> Config to be used for the default Image Editor Window. </summary>
   /// <private />
};
YAHOO.widget.Editor.prototype.cmd_justifycenter = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('justifycenter') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.Editor.prototype._handleInsertImageClick = function() {
   /// <summary> Opens the Image Properties Window when the insert Image button is clicked or an Image is Double Clicked. </summary>
   /// <private />
};
YAHOO.widget.Editor.prototype._renderPanel = function() {
   /// <summary> Renders the panel used for Editor Windows to the document so we can start using it.. </summary>
   /// <private />
   /// <returns type="YAHOO.widget.Overlay" />
};
YAHOO.widget.Editor.prototype.cmd_justifyleft = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('justifyleft') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.Editor.prototype.init = function() {
   /// <summary> The Editor class' initialization method </summary>
};
YAHOO.widget.Editor.prototype.closeWindow = function() {
   /// <summary> Close the currently open EditorWindow. </summary>
};
YAHOO.widget.Editor.prototype.cmd_script = function(action, value) {
   /// <summary> This is a combined execCommand override method. It is called from the cmd_superscript and cmd_subscript methods. </summary>
 /// <param name="action" type=""> action passed from the execCommand method</param>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.Editor.prototype._windows = function() {
   /// <summary> A reference to the HTML elements used for the body of Editor Windows. </summary>
   /// <private />
};
YAHOO.widget.Editor.prototype._renderInsertImageWindow = function() {
   /// <summary> Pre renders the InsertImage window so we get faster window opening. </summary>
   /// <private />
};
YAHOO.widget.Editor.prototype.toString = function() {
   /// <summary> Returns a string representing the editor. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Editor.prototype.cmd_hiddenelements = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('hiddenelements') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.Editor.prototype._handleCreateLinkWindowClose = function() {
   /// <summary> Handles the closing of the Link Properties Window. </summary>
   /// <private />
};
YAHOO.widget.Editor.prototype._handleInsertImageWindowClose = function() {
   /// <summary> Handles the closing of the Image Properties Window. </summary>
   /// <private />
};
YAHOO.widget.Editor.prototype._storeUndo = function() {
   /// <summary> Method to call when you want to store an undo state. Currently called from nodeChange and _handleKeyUp </summary>
   /// <private />
};
YAHOO.widget.Editor.prototype._checkUndo = function() {
   /// <summary> Prunes the undo cache when it reaches the maxUndo config </summary>
   /// <private />
};
YAHOO.widget.Editor.prototype.cmd_indent = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('indent') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.Editor.prototype._getUndo = function(index) {
   /// <summary> Get's a level from the undo cache. </summary>
   /// <private />
   /// <returns type="String" />
 /// <param name="index" type="Number"> The index of the undo level we want to get.</param>
};
YAHOO.widget.Editor.prototype.cmd_heading = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('heading') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.Editor.prototype.cmd_justify = function(dir) {
   /// <summary> This is a factory method for the justify family of commands. </summary>
 /// <param name="dir" type=""> The direction to justify</param>
};
YAHOO.widget.Editor.prototype.cmd_subscript = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('subscript') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.Editor.prototype._putUndo = function(str) {
   /// <summary> Puts the content of the Editor into the _undoCache.//TODO Convert the hash to a series of TEXTAREAS to store state in. </summary>
   /// <private />
 /// <param name="str" type="String"> The content of the Editor</param>
};
YAHOO.widget.Editor.prototype.cmd_undo = function(value) {
   /// <summary> Pulls an item from the Undo stack and updates the Editor </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.Editor.prototype._undoNodeChange = function() {
   /// <summary> nodeChange listener for undo processing </summary>
   /// <private />
};
YAHOO.widget.Editor.prototype._handleKeyDown = function(ev) {
   /// <summary> Override method that handles some new keydown events inside the iFrame document. </summary>
   /// <private />
 /// <param name="ev" type="Event"> The event we are working on.</param>
};
YAHOO.widget.Editor.prototype.cmd_outdent = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('outdent') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.Editor.prototype._closeWindow = function(ev) {
   /// <summary> Close the currently open EditorWindow with the Escape key. </summary>
   /// <private />
 /// <param name="ev" type="Event"> The keypress Event that we are trapping</param>
};
YAHOO.widget.Editor.prototype.cmd_removeformat = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('removeformat') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.EditorInfo.saveAll = function(form) {
   /// <summary> Saves all Editor instances on the page. If a form reference is passed, only Editor's bound to this form will be saved. </summary>
 /// <param name="form" type="HTMLElement"> The form to check if this Editor instance belongs to</param>
};
YAHOO.widget.EditorInfo.toString = function() {
   /// <summary> Returns a string representing the EditorInfo. </summary>
   /// <returns type="String" />
};
YAHOO.widget.EditorInfo.getEditorById = function(id) {
   /// <summary> Returns a reference to the Editor object associated with the given textarea </summary>
   /// <returns type="" />
 /// <param name="id" type="String/HTMLElement"> The id or reference of the textarea to return the Editor instance of</param>
};
YAHOO.widget.EditorWindow.prototype.setFooter = function(str) {
   /// <summary> Sets the footer for the window. </summary>
 /// <param name="str" type="String/HTMLElement"> The string or DOM reference to be used as the windows footer.</param>
};
YAHOO.widget.EditorWindow.prototype.setBody = function(str) {
   /// <summary> Sets the body for the window. </summary>
 /// <param name="str" type="String/HTMLElement"> The string or DOM reference to be used as the windows body.</param>
};
YAHOO.widget.EditorWindow.prototype.toString = function() {
   /// <summary> Returns a string representing the EditorWindow. </summary>
   /// <returns type="String" />
};
YAHOO.widget.EditorWindow.prototype.setHeader = function(str) {
   /// <summary> Sets the header for the window. </summary>
 /// <param name="str" type="String/HTMLElement"> The string or DOM reference to be used as the windows header.</param>
};
YAHOO.widget.FlashAdapter.prototype._loadHandler = function() {
   /// <summary> Called when the SWF has been initialized. </summary>
   /// <private />
};
YAHOO.widget.FlashAdapter.prototype._setAltText = function() {
   /// <summary> Setter for altText attribute. </summary>
   /// <private />
};
YAHOO.widget.FlashAdapter.removeProxyFunction = function() {
   /// <summary> Removes a function created with createProxyFunction() </summary>
   /// <private />
};
YAHOO.widget.FlashAdapter.prototype._initAttributes = function() {
   /// <summary> Initializes the attributes. </summary>
   /// <private />
};
YAHOO.widget.FlashAdapter.prototype._getSWFURL = function() {
   /// <summary> Getter for swfURL attribute. </summary>
   /// <private />
};
YAHOO.widget.FlashAdapter.prototype.toString = function() {
   /// <summary> Public accessor to the unique name of the FlashAdapter instance. </summary>
   /// <returns type="String" />
};
YAHOO.widget.FlashAdapter.eventHandler = function() {
   /// <summary> Receives event messages from SWF and passes them to the correct instanceof FlashAdapter. </summary>
   /// <private />
};
YAHOO.widget.FlashAdapter.prototype._eventHandler = function() {
   /// <summary> Handles or re-dispatches events received from the SWF. </summary>
   /// <private />
};
YAHOO.widget.FlashAdapter.prototype._embedSWF = function() {
   /// <summary> Embeds the SWF in the page and associates it with this instance. </summary>
   /// <private />
};
YAHOO.widget.FlashAdapter.prototype._getAltText = function() {
   /// <summary> Getter for altText attribute. </summary>
   /// <private />
};
YAHOO.widget.FlashAdapter.prototype.destroy = function() {
   /// <summary> Nulls out the entire FlashAdapter instance and related objects and removes attachedevent listeners and clears out DOM elements inside the container. After callingthis method, the instance reference should be expliclitly nulled by implementer,as in myChart = null. Use with caution! </summary>
};
YAHOO.widget.FlashAdapter.createProxyFunction = function() {
   /// <summary> Creates a globally accessible function that wraps a function reference.Returns the proxy function's name as a string for use by the SWF throughExternalInterface. </summary>
   /// <private />
};
YAHOO.widget.HTMLNode.prototype.getNodeDefinition = function() {
   /// <summary> Returns an object which could be used to build a tree out of this node and its children.It can be passed to the tree constructor to reproduce this node as a tree.It will return false if any node loads dynamically, regardless of whether it is loaded or not. </summary>
   /// <returns type="Object | false" />
};
YAHOO.widget.ImageCropper.prototype._handleStartResizeEvent = function() {
   /// <summary> Handles the Resize Utilitys startResize event </summary>
   /// <private />
};
YAHOO.widget.ImageCropper.prototype._setBackgroundImage = function(String) {
   /// <summary> Sets the background image of the resize element </summary>
   /// <private />
 /// <param name="String" type=""> url The url of the image</param>
};
YAHOO.widget.ImageCropper.prototype.initAttributes = function(attr) {
   /// <summary> Initializes all of the configuration attributes used to create a croppable element. </summary>
   /// <private />
 /// <param name="attr" type="Object"> Object literal specifying a set of configuration attributes used to create the widget.</param>
};
YAHOO.widget.ImageCropper.prototype._handleResizeEvent = function(Event) {
   /// <summary> Handles the Resize Utilitys Resize event </summary>
   /// <private />
 /// <param name="Event" type=""> ev The Resize Utilitys resize event.</param>
};
YAHOO.widget.ImageCropper.prototype.getResizeObject = function() {
   /// <summary> Get the Resize Utility object. </summary>
   /// <returns type="YAHOO.util.Resize" />
};
YAHOO.widget.ImageCropper.prototype.getResizeMaskEl = function() {
   /// <summary> Get the HTML reference for the resizable object's mask element. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.ImageCropper.prototype._handleBeforeResizeEvent = function() {
   /// <summary> Handles the Resize Utilitys beforeResize event </summary>
   /// <private />
};
YAHOO.widget.ImageCropper.prototype._syncBackgroundPosition = function() {
   /// <summary> Syncs the packground position of the resize element with the resize elements top and left style position </summary>
   /// <private />
};
YAHOO.widget.ImageCropper.prototype._handleMouseOut = function() {
   /// <summary> Handles the mouseout event </summary>
   /// <private />
};
YAHOO.widget.ImageCropper.prototype.init = function() {
   /// <summary> The ImageCropper class's initialization method </summary>
   /// <private />
};
YAHOO.widget.ImageCropper.prototype._moveEl = function() {
   /// <summary> Moves the resize element based on the arrow keys </summary>
   /// <private />
};
YAHOO.widget.ImageCropper.getCropperById = function() {
   /// <summary> Get's an ImageCropper object by the HTML id of the image associated with the ImageCropper object. </summary>
   /// <returns type="Object" />
};
YAHOO.widget.ImageCropper.prototype.getEl = function() {
   /// <summary> Get the HTML reference for the image element. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.ImageCropper.prototype.getResizeEl = function() {
   /// <summary> Get the HTML reference for the resize element. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.ImageCropper.prototype.toString = function() {
   /// <summary> Returns a string representing the ImageCropper Object. </summary>
   /// <returns type="String" />
};
YAHOO.widget.ImageCropper.prototype._handleKeyPress = function() {
   /// <summary> Handles the keypress event </summary>
   /// <private />
};
YAHOO.widget.ImageCropper.prototype._handleDragEvent = function() {
   /// <summary> Handles the DragDrop DragEvent event </summary>
   /// <private />
};
YAHOO.widget.ImageCropper.prototype._createResize = function() {
   /// <summary> Creates the resize element and the instance of the Resize Utility </summary>
   /// <private />
};
YAHOO.widget.ImageCropper.prototype._createWrap = function() {
   /// <summary> Creates the wrapper element used to wrap the image </summary>
   /// <private />
};
YAHOO.widget.ImageCropper.prototype.getMaskEl = function() {
   /// <summary> Get the HTML reference for the mask element. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.ImageCropper.prototype._handleB4DragEvent = function() {
   /// <summary> Handles the DragDrop b4DragEvent event </summary>
   /// <private />
};
YAHOO.widget.ImageCropper.prototype.getWrapEl = function() {
   /// <summary> Get the HTML reference for the wrap element. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.ImageCropper.prototype.destroy = function() {
   /// <summary> Destroys the ImageCropper object and all of it's elements & listeners. </summary>
};
YAHOO.widget.ImageCropper.prototype.getCropCoords = function() {
   /// <summary> Returns the coordinates needed to crop the image </summary>
   /// <returns type="Object" />
};
YAHOO.widget.ImageCropper.prototype._setBackgroundPosition = function(Number) {
   /// <summary> Sets the background image position to the top and left position </summary>
   /// <private />
 /// <param name="Number" type=""> l The left position</param>
 /// <param name="Number" type=""> t The top position</param>
};
YAHOO.widget.ImageCropper.prototype._handleMouseOver = function() {
   /// <summary> Handles the mouseover event </summary>
   /// <private />
};
YAHOO.widget.ImageCropper.prototype.reset = function() {
   /// <summary> Resets the crop element back to it's original position </summary>
   /// <returns type="YAHOO.widget.ImageCropper" />
};
YAHOO.widget.ImageCropper.prototype._handleResizeMaskEl = function() {
   /// <summary> Resizes the inner mask element </summary>
   /// <private />
};
YAHOO.widget.ImageCropper.prototype._setConstraints = function(Boolean) {
   /// <summary> Set the DragDrop constraints to keep the element inside the crop area. </summary>
   /// <private />
   /// <returns type="Object" />
 /// <param name="Boolean" type=""> inside Used when called from inside a resize event, false by default (dragging)</param>
};
YAHOO.widget.ImageCropper.prototype._createMask = function() {
   /// <summary> Creates the mask element used to mask the image </summary>
   /// <private />
};
YAHOO.widget.ImageCropper.prototype._handleEndResizeEvent = function() {
   /// <summary> Handles the Resize Utilitys endResize event </summary>
   /// <private />
};
YAHOO.widget.Layout.prototype._stamp = function() {
   /// <summary> Stamps the root node with a secure classname for ease of use. Also sets the this.browser.standardsMode variable. </summary>
   /// <private />
};
YAHOO.widget.Layout.prototype._setupBodyElements = function() {
   /// <summary> Sets up the main doc element when using the body as the main element. </summary>
   /// <private />
};
YAHOO.widget.Layout.prototype.addUnit = function(cfg) {
   /// <summary> Add a unit to this layout and if the layout is rendered, resize the layout. </summary>
   /// <returns type="YAHOO.widget.LayoutUnit" />
 /// <param name="cfg" type="Object"> The config for the LayoutUnit that you want to add</param>
};
YAHOO.widget.Layout.prototype.render = function() {
   /// <summary> This method starts the render process, applying classnames and creating elements </summary>
   /// <returns type="YAHOO.widget.Layout" />
};
YAHOO.widget.Layout.prototype.removeUnit = function(unit) {
   /// <summary> Remove the unit from this layout and resize the layout. </summary>
 /// <param name="unit" type="Object"> The LayoutUnit that you want to remove</param>
};
YAHOO.widget.Layout.prototype.getUnitByPosition = function(pos) {
   /// <summary> Get the LayoutUnit by it's position in this layout </summary>
   /// <returns type="YAHOO.widget.LayoutUnit" />
 /// <param name="pos" type="String"> The position of the unit in this layout</param>
};
YAHOO.widget.Layout.prototype._setBodySize = function(setter) {
   /// <summary> Used to set the body size of the layout, sets the height and width of the parent container </summary>
   /// <private />
 /// <param name="set" type="Boolean"> If set to false, it will NOT set the size, just perform the calculations (used for collapsing units)</param>
};
YAHOO.widget.Layout.getLayoutById = function() {
   /// <summary> Get's a layout object by the HTML id of the element associated with the Layout object. </summary>
   /// <returns type="Object" />
};
YAHOO.widget.Layout.prototype._setCenter = function(setter) {
   /// <summary> Used to set the size and position of the center unit </summary>
   /// <private />
 /// <param name="set" type="Boolean"> If set to false, it will NOT set the size, just perform the calculations (used for collapsing units)</param>
};
YAHOO.widget.Layout.prototype._createUnits = function() {
   /// <summary> Private method to create units from the config that was passed in. </summary>
   /// <private />
};
YAHOO.widget.Layout.prototype.init = function() {
   /// <summary> The Layout class' initialization method </summary>
   /// <private />
};
YAHOO.widget.Layout.prototype.initAttributes = function() {
   /// <summary> Processes the config </summary>
   /// <private />
};
YAHOO.widget.Layout.prototype.toString = function() {
   /// <summary> Returns a string representing the Layout. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Layout.prototype.getSizes = function() {
   /// <summary> Get a reference to the internal Layout Unit sizes object used to build the layout wireframe </summary>
   /// <returns type="Object" />
};
YAHOO.widget.Layout.prototype.getUnitById = function(id) {
   /// <summary> Get the LayoutUnit by it's HTML id </summary>
   /// <returns type="YAHOO.widget.LayoutUnit" />
 /// <param name="id" type="String"> The HTML element id of the unit</param>
};
YAHOO.widget.Layout.prototype.destroy = function() {
   /// <summary> Removes this layout from the page and destroys all units that it contains. This will destroy all data inside the layout and it's children. </summary>
};
YAHOO.widget.Layout.prototype._setupElements = function() {
   /// <summary> Sets up the main doc element when not using the body as the main element. </summary>
   /// <private />
};
YAHOO.widget.Layout.prototype._setSides = function(setter) {
   /// <summary> Used to set the size and position of the left, right, top and bottom units </summary>
   /// <private />
 /// <param name="set" type="Boolean"> If set to false, it will NOT set the size, just perform the calculations (used for collapsing units)</param>
};
YAHOO.widget.Layout.prototype.resize = function(BooleanEvent) {
   /// <summary> Starts the chain of resize routines that will resize all the units. </summary>
   /// <returns type="YAHOO.widget.Layout" />
 /// <param name="Boolean/Event" type=""> set If set to false, it will NOT set the size, just perform the calculations (used for collapsing units). This can also have an attribute event passed to it.</param>
};
YAHOO.widget.LayoutUnit.prototype._getBoxSize = function(el) {
   /// <summary> Get's the elements clientHeight and clientWidth plus the size of the borders </summary>
   /// <private />
   /// <returns type="Array" />
 /// <param name="el" type="HTMLElement"> The HTMLElement to get the size of</param>
};
YAHOO.widget.LayoutUnit.prototype._createHeader = function() {
   /// <summary> Creates the HTMLElement for the header </summary>
   /// <private />
   /// <returns type="HTMLElement" />
};
YAHOO.widget.LayoutUnit.prototype._getBorderSizes = function(el) {
   /// <summary> Get the CSS border size of the element passed. </summary>
   /// <private />
   /// <returns type="Array" />
 /// <param name="el" type="HTMLElement"> The element to get the border size of</param>
};
YAHOO.widget.LayoutUnit.prototype._setHeight = function(el, h) {
   /// <summary> Sets the height of the element based on the border size of the element. </summary>
   /// <private />
   /// <returns type="Number" />
 /// <param name="el" type="HTMLElement"> The HTMLElement to have it's height set</param>
 /// <param name="h" type="Number"> The height that you want it the element set to</param>
};
YAHOO.widget.LayoutUnit.prototype._setWidth = function(el, w) {
   /// <summary> Sets the width of the element based on the border size of the element. </summary>
   /// <private />
   /// <returns type="Number" />
 /// <param name="el" type="HTMLElement"> The HTMLElement to have it's width set</param>
 /// <param name="w" type="Number"> The width that you want it the element set to</param>
};
YAHOO.widget.LayoutUnit.prototype._toggleClip = function() {
   /// <summary> Toggle th current state of the Clip element and set it's height, width and position </summary>
   /// <private />
};
YAHOO.widget.LayoutUnit.prototype.close = function() {
   /// <summary> Close the unit, removing it from the parent Layout. </summary>
   /// <returns type="YAHOO.widget.Layout" />
};
YAHOO.widget.LayoutUnit.prototype.init = function() {
   /// <summary> The initalization method inherited from Element. </summary>
   /// <private />
};
YAHOO.widget.LayoutUnit.getLayoutUnitById = function() {
   /// <summary> Get's a layout unit object by the HTML id of the element associated with the Layout Unit object. </summary>
   /// <returns type="Object" />
};
YAHOO.widget.LayoutUnit.prototype.toggle = function() {
   /// <summary> Toggles the Unit, replacing it with a clipped version. </summary>
   /// <returns type="YAHOO.widget.LayoutUnit" />
};
YAHOO.widget.LayoutUnit.prototype.initAttributes = function() {
   /// <summary> Processes the config </summary>
   /// <private />
};
YAHOO.widget.LayoutUnit.prototype._createClip = function() {
   /// <summary> Create the clip element used when the Unit is collapsed </summary>
   /// <private />
};
YAHOO.widget.LayoutUnit.prototype.expand = function() {
   /// <summary> Expand the Unit if it is collapsed. </summary>
   /// <returns type="YAHOO.widget.LayoutUnit" />
};
YAHOO.widget.LayoutUnit.prototype._cleanGrids = function() {
   /// <summary> This method attempts to clean up the first level of the YUI CSS Grids, YAHOO.util.Selector is required for this operation. </summary>
   /// <private />
};
YAHOO.widget.LayoutUnit.prototype.destroy = function(force) {
   /// <summary> Removes this unit from the parent and cleans up after itself. </summary>
   /// <returns type="YAHOO.widget.Layout" />
 /// <param name="force" type="Boolean"> Don't report to the parent, because we are being called from the parent.</param>
};
YAHOO.widget.LayoutUnit.prototype.loadContent = function() {
   /// <summary> Loading the content of the unit using the connection manager </summary>
   /// <returns type="object" />
};
YAHOO.widget.LayoutUnit.prototype.toString = function() {
   /// <summary> Returns a string representing the LayoutUnit. </summary>
   /// <returns type="String" />
};
YAHOO.widget.LayoutUnit.prototype._fixQuirks = function(el, dim, side) {
   /// <summary> Fixes the box calculations for IE in QuirksMode </summary>
   /// <private />
   /// <returns type="Number" />
 /// <param name="el" type="HTMLElement"> The HTMLElement to set the dimension on</param>
 /// <param name="dim" type="Number"> The number of the dimension to fix</param>
 /// <param name="side" type="String"> The dimension (h or w) to fix. Defaults to h</param>
};
YAHOO.widget.LayoutUnit.prototype.resize = function(force) {
   /// <summary> Resize either the unit or it's clipped state, also updating the box inside </summary>
   /// <returns type="YAHOO.widget.LayoutUnit" />
 /// <param name="force" type="Boolean"> This will force full calculations even when the unit is collapsed</param>
};
YAHOO.widget.LayoutUnit.prototype.getSizes = function() {
   /// <summary> Get a reference to the internal sizes object for this unit </summary>
   /// <returns type="Object" />
};
YAHOO.widget.LayoutUnit.prototype.collapse = function() {
   /// <summary> Collapse the Unit if it is not collapsed. </summary>
   /// <returns type="YAHOO.widget.LayoutUnit" />
};
YAHOO.widget.LogReader.prototype.getLastTime = function() {
   /// <summary> Gets timestamp of the last log. </summary>
   /// <returns type="Date" />
};
YAHOO.widget.LogReader.prototype._onReset = function(sType, aArgs, oSelf) {
   /// <summary> Handles Logger's resetEvent. </summary>
   /// <private />
 /// <param name="sType" type="String">  The event.</param>
 /// <param name="aArgs" type="Object[]">  Data passed from event firer.</param>
 /// <param name="oSelf" type="Object">  The LogReader instance.</param>
};
YAHOO.widget.LogReader.prototype.render = function() {
   /// <summary> Adds the UI to the DOM, attaches event listeners, and bootstraps initialUI state. </summary>
};
YAHOO.widget.LogReader.prototype.show = function() {
   /// <summary> Shows UI of LogReader. Logging functionality is not disrupted. </summary>
};
YAHOO.widget.LogReader.prototype.setTitle = function(sTitle) {
   /// <summary> Updates title to given string. </summary>
 /// <param name="sTitle" type="String">  New title.</param>
};
YAHOO.widget.LogReader.prototype._init = function(container, config) {
   /// <summary> Initializes the instance's message buffer, start time, etc </summary>
 /// <param name="container" type="String|HTMLElement">  (optional) the render target</param>
 /// <param name="config" type="Object">  (optional) instance configuration</param>
};
YAHOO.widget.LogReader.prototype.getCategories = function() {
   /// <summary> Returns array of enabled categories. </summary>
   /// <returns type="String[]" />
};
YAHOO.widget.LogReader.prototype._createSourceCheckbox = function(sSource) {
   /// <summary> Creates a checkbox in the LogReader footer element to filter by source. </summary>
   /// <private />
 /// <param name="sSource" type="String">  Source name.</param>
};
YAHOO.widget.LogReader.prototype.collapse = function() {
   /// <summary> Collapses UI of LogReader. Logging functionality is not disrupted. </summary>
};
YAHOO.widget.LogReader.prototype._initCategories = function() {
   /// <summary> Initializes category filters. </summary>
   /// <private />
};
YAHOO.widget.LogReader.prototype.pause = function() {
   /// <summary> Pauses output of log messages. While paused, log messages are not lost, butget saved to a buffer and then output upon resume of LogReader. </summary>
};
YAHOO.widget.LogReader.prototype.hide = function() {
   /// <summary> Hides UI of LogReader. Logging functionality is not disrupted. </summary>
};
YAHOO.widget.LogReader.prototype._printToConsole = function(aEntries) {
   /// <summary> Cycles through an array of log messages, and outputs each one to the consoleif its category has not been filtered out. </summary>
   /// <private />
 /// <param name="aEntries" type="Object[]">  Array of LogMsg objects to output to console.</param>
};
YAHOO.widget.LogReader.prototype._initHeaderEl = function() {
   /// <summary> Initializes the header element. </summary>
   /// <private />
};
YAHOO.widget.LogReader.prototype._initDragDrop = function() {
   /// <summary> Initializes Drag and Drop on the header element. </summary>
   /// <private />
};
YAHOO.widget.LogReader.prototype._printBuffer = function() {
   /// <summary> Sends buffer of log messages to output and clears buffer. </summary>
   /// <private />
};
YAHOO.widget.LogReader.prototype.toString = function() {
   /// <summary> Public accessor to the unique name of the LogReader instance. </summary>
   /// <returns type="String" />
};
YAHOO.widget.LogReader.prototype.showSource = function(Source) {
   /// <summary> Shows log messages associated with given source. </summary>
 /// <param name="Source" type="String"> name.</param>
};
YAHOO.widget.LogReader.prototype.destroy = function() {
   /// <summary> Removes the UI from the DOM entirely and detaches all event listeners.Implementers should note that Logger will still accumulate messages. </summary>
};
YAHOO.widget.LogReader.prototype.showCategory = function(Category) {
   /// <summary> Shows log messages associated with given category. </summary>
 /// <param name="Category" type="String"> name.</param>
};
YAHOO.widget.LogReader.prototype._onClickCollapseBtn = function(v, oSelf) {
   /// <summary> Handles click events on the collapse button. </summary>
   /// <private />
 /// <param name="v" type="HTMLEvent">  The click event.</param>
 /// <param name="oSelf" type="Object">  The LogReader instance</param>
};
YAHOO.widget.LogReader.prototype._onCategoryCreate = function(sType, aArgs, oSelf) {
   /// <summary> Handles Logger's categoryCreateEvent. </summary>
   /// <private />
 /// <param name="sType" type="String">  The event.</param>
 /// <param name="aArgs" type="Object[]">  Data passed from event firer.</param>
 /// <param name="oSelf" type="Object">  The LogReader instance.</param>
};
YAHOO.widget.LogReader.prototype._onClickClearBtn = function(v, oSelf) {
   /// <summary> Handles click events on the clear button. </summary>
   /// <private />
 /// <param name="v" type="HTMLEvent">  The click event.</param>
 /// <param name="oSelf" type="Object">  The LogReader instance.</param>
};
YAHOO.widget.LogReader.prototype.resume = function() {
   /// <summary> Resumes output of log messages, including outputting any log messages thathave been saved to buffer while paused. </summary>
};
YAHOO.widget.LogReader.prototype._onSourceCreate = function(sType, aArgs, oSelf) {
   /// <summary> Handles Logger's sourceCreateEvent. </summary>
   /// <private />
 /// <param name="sType" type="String">  The event.</param>
 /// <param name="aArgs" type="Object[]">  Data passed from event firer.</param>
 /// <param name="oSelf" type="Object">  The LogReader instance.</param>
};
YAHOO.widget.LogReader.prototype._onClickPauseBtn = function(v, oSelf) {
   /// <summary> Handles click events on the pause button. </summary>
   /// <private />
 /// <param name="v" type="HTMLEvent">  The click event.</param>
 /// <param name="oSelf" type="Object">  The LogReader instance.</param>
};
YAHOO.widget.LogReader.prototype._initFooterEl = function() {
   /// <summary> Initializes the footer element. </summary>
   /// <private />
};
YAHOO.widget.LogReader.prototype._onNewLog = function(sType, aArgs, oSelf) {
   /// <summary> Handles Logger's newLogEvent. </summary>
   /// <private />
 /// <param name="sType" type="String">  The event.</param>
 /// <param name="aArgs" type="Object[]">  Data passed from event firer.</param>
 /// <param name="oSelf" type="Object">  The LogReader instance.</param>
};
YAHOO.widget.LogReader.prototype.html2Text = function(sHtml) {
   /// <summary> Converts input chars "", and "&" to HTML entities. </summary>
   /// <private />
 /// <param name="sHtml" type="String">  String to convert.</param>
};
YAHOO.widget.LogReader.prototype._filterLogs = function() {
   /// <summary> Reprints all log messages in the stack through filters. </summary>
   /// <private />
};
YAHOO.widget.LogReader.prototype._onCheckCategory = function(v, oSelf) {
   /// <summary> Handles check events on the category filter checkboxes. </summary>
   /// <private />
 /// <param name="v" type="HTMLEvent">  The click event.</param>
 /// <param name="oSelf" type="Object">  The LogReader instance.</param>
};
YAHOO.widget.LogReader.prototype._onCheckSource = function(v, oSelf) {
   /// <summary> Handles check events on the category filter checkboxes. </summary>
   /// <private />
 /// <param name="v" type="HTMLEvent">  The click event.</param>
 /// <param name="oSelf" type="Object">  The LogReader instance.</param>
};
YAHOO.widget.LogReader.prototype.expand = function() {
   /// <summary> Expands UI of LogReader. Logging functionality is not disrupted. </summary>
};
YAHOO.widget.LogReader.prototype.getSources = function() {
   /// <summary> Returns array of enabled sources. </summary>
   /// <returns type="Array" />
};
YAHOO.widget.LogReader.prototype._initSources = function() {
   /// <summary> Initializes source filters. </summary>
   /// <private />
};
YAHOO.widget.LogReader.prototype.hideCategory = function(Category) {
   /// <summary> Hides log messages associated with given category. </summary>
 /// <param name="Category" type="String"> name.</param>
};
YAHOO.widget.LogReader.prototype._createCategoryCheckbox = function(sCategory) {
   /// <summary> Creates the UI for a category filter in the LogReader footer element. </summary>
   /// <private />
 /// <param name="sCategory" type="String">  Category name.</param>
};
YAHOO.widget.LogReader.prototype._initConsoleEl = function() {
   /// <summary> Initializes the console element. </summary>
   /// <private />
};
YAHOO.widget.LogReader.prototype._initContainerEl = function() {
   /// <summary> Initializes the primary container element. </summary>
   /// <private />
};
YAHOO.widget.LogReader.prototype.clearConsole = function() {
   /// <summary> Does not delete any log messages, but clears all printed log messages fromthe console. Log messages will be printed out again if user re-filters. Thestatic method YAHOO.widget.Logger.reset() should be called in order toactually delete log messages. </summary>
};
YAHOO.widget.LogReader.prototype.hideSource = function(Source) {
   /// <summary> Hides log messages associated with given source. </summary>
 /// <param name="Source" type="String"> name.</param>
};
YAHOO.widget.LogReader.prototype.getCheckbox = function(Category) {
   /// <summary> Returns related checkbox element for given filter (i.e., category or source). </summary>
   /// <returns type="Array" />
 /// <param name="Category" type="String"> or source name.</param>
};
YAHOO.widget.LogWriter.prototype.getSource = function() {
   /// <summary> Public accessor to get the source name. </summary>
   /// <returns type="String" />
};
YAHOO.widget.LogWriter.prototype.toString = function() {
   /// <summary> Public accessor to the unique name of the LogWriter instance. </summary>
   /// <returns type="String" />
};
YAHOO.widget.LogWriter.prototype.log = function(sMsg, sCategory) {
   /// <summary> Logs a message attached to the source of the LogWriter. </summary>
 /// <param name="sMsg" type="String">  The log message.</param>
 /// <param name="sCategory" type="String">  Category name.</param>
};
YAHOO.widget.LogWriter.prototype.setSource = function(sSource) {
   /// <summary> Public accessor to set the source name. </summary>
 /// <param name="sSource" type="String">  Source of LogWriter instance.</param>
};
YAHOO.widget.Logger.reset = function() {
   /// <summary> Resets internal stack and startTime, enables Logger, and fires logResetEvent. </summary>
};
YAHOO.widget.Logger._isNewSource = function(sSource) {
   /// <summary> Checks to see if a source already exists. </summary>
   /// <private />
   /// <returns type="Boolean" />
 /// <param name="sSource" type="String">  Source name.</param>
};
YAHOO.widget.Logger.getStack = function() {
   /// <summary> Public accessor to internal stack of log message objects. </summary>
   /// <returns type="Object[]" />
};
YAHOO.widget.Logger.log = function(sMsg, sCategory, sSource) {
   /// <summary> Saves a log message to the stack and fires newLogEvent. If the log message isassigned to an unknown category, creates a new category. If the log message isfrom an unknown source, creates a new source.  If browser console is enabled,outputs the log message to browser console. </summary>
 /// <param name="sMsg" type="String">  The log message.</param>
 /// <param name="sCategory" type="String">  Category of log message, or null.</param>
 /// <param name="sSource" type="String">  Source of LogWriter, or null if global.</param>
};
YAHOO.widget.Logger._onWindowError = function(sMsg, sUrl, sLine) {
   /// <summary> Handles logging of messages due to window error events. </summary>
   /// <private />
 /// <param name="sMsg" type="String">  The error message.</param>
 /// <param name="sUrl" type="String">  URL of the error.</param>
 /// <param name="sLine" type="String">  Line number of the error.</param>
};
YAHOO.widget.Logger._isNewCategory = function(sCategory) {
   /// <summary> Checks to see if a category has already been created. </summary>
   /// <private />
   /// <returns type="Boolean" />
 /// <param name="sCategory" type="String">  Category name.</param>
};
YAHOO.widget.Logger.handleWindowErrors = function() {
   /// <summary> Surpresses native JavaScript errors and outputs to console. By default,Logger does not handle JavaScript window error events.NB: Not all browsers support the window.onerror event. </summary>
};
YAHOO.widget.Logger._printToBrowserConsole = function(oEntry) {
   /// <summary> Outputs a log message to global console.log() function. </summary>
   /// <private />
 /// <param name="oEntry" type="Object">  Log entry object.</param>
};
YAHOO.widget.Logger._createNewCategory = function(sCategory) {
   /// <summary> Creates a new category of log messages and fires categoryCreateEvent. </summary>
   /// <private />
 /// <param name="sCategory" type="String">  Category name.</param>
};
YAHOO.widget.Logger._createNewSource = function(sSource) {
   /// <summary> Creates a new source of log messages and fires sourceCreateEvent. </summary>
   /// <private />
 /// <param name="sSource" type="String">  Source name.</param>
};
YAHOO.widget.Logger.enableBrowserConsole = function() {
   /// <summary> Enables output to the browser's global console.log() function, which is usedby the Firebug extension to Firefox as well as Safari. </summary>
};
YAHOO.widget.Logger.disableBrowserConsole = function() {
   /// <summary> Disables output to the browser's global console.log() function, which is usedby the Firebug extension to Firefox as well as Safari. </summary>
};
YAHOO.widget.Logger.unhandleWindowErrors = function() {
   /// <summary> Unsurpresses native JavaScript errors. By default,Logger does not handle JavaScript window error events.NB: Not all browsers support the window.onerror event. </summary>
};
YAHOO.widget.Logger.getStartTime = function() {
   /// <summary> Public accessor to internal start time. </summary>
   /// <returns type="Date" />
};
YAHOO.widget.Menu.prototype.addItem = function(p_oItem, p_nGroupIndex) {
   /// <summary> Appends an item to the menu. </summary>
   /// <returns type="YAHOO.widget.MenuItem" />
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object reference for the MenuItem instance to be added to the menu.</param>
 /// <param name="p_oItem" type="String"> String specifying the text of the item to be added to the menu.</param>
 /// <param name="p_oItem" type="Object"> Object literal containing a set of menu item configuration properties.</param>
 /// <param name="p_nGroupIndex" type="Number"> Optional. Number indicating the group towhich the item belongs.</param>
};
YAHOO.widget.Menu.prototype._onRender = function(p_sType, p_aArgs) {
   /// <summary> "render" event handler for the menu. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.Menu.prototype._initSubTree = function() {
   /// <summary> Iterates the childNodes of the source element to find nodes used to instantiate menu and menu items. </summary>
   /// <private />
};
YAHOO.widget.Menu.prototype._onScrollTargetMouseOut = function(p_oEvent, p_oMenu) {
   /// <summary> "mouseout" event handler for the menu's "header" and "footer" elements.  Used to stop scrolling the body of the menu up and down when the menu's "maxheight" configuration property is set to a value greater than 0. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object passed back by the event utility (YAHOO.util.Event).</param>
 /// <param name="p_oMenu" type="YAHOO.widget.Menu"> Object representing the menu that fired the event.</param>
};
YAHOO.widget.Menu.prototype.configMaxHeight = function(p_sType, p_aArgs, p_oMenu) {
   /// <summary> Event handler for when the "maxheight" configuration property of a Menu changes. </summary>
 /// <param name="p_sType" type="String"> The name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Collection of arguments sent when the event was fired.</param>
 /// <param name="p_oMenu" type="YAHOO.widget.Menu"> The Menu instance firedthe event.</param>
};
YAHOO.widget.Menu.prototype.hasFocus = function() {
   /// <summary> Returns a boolean indicating whether or not the menu has focus. </summary>
   /// <returns type="Boolean" />
};
YAHOO.widget.Menu.prototype._onVisibleChange = function(p_sType, p_aArgs) {
   /// <summary> Change event handler for the the menu's "visible" configurationproperty. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.Menu.prototype.removeItem = function(p_oObject, p_nGroupIndex) {
   /// <summary> Removes the specified item from the menu. </summary>
   /// <returns type="YAHOO.widget.MenuItem" />
 /// <param name="p_oObject" type="YAHOO.widget.MenuItem"> Object reference for the MenuItem instance to be removed from the menu.</param>
 /// <param name="p_oObject" type="Number"> Number specifying the index of the item to be removed.</param>
 /// <param name="p_nGroupIndex" type="Number"> Optional. Number specifying the group to which the item belongs.</param>
};
YAHOO.widget.Menu.prototype.positionOffScreen = function() {
   /// <summary> Positions the menu outside of the boundaries of the browser's viewport.  Called automatically when a menu is hidden to ensure that it doesn't force the browser to render uncessary scrollbars. </summary>
};
YAHOO.widget.Menu.prototype.setInitialSelection = function() {
   /// <summary> Sets the "selected" configuration property of the menu's first enabled item to "true." </summary>
};
YAHOO.widget.Menu.prototype.subscribe = function(p_type, p_fn, p_obj, p_override) {
   /// <summary> Adds the specified CustomEvent subscriber to the menu and each of its submenus. </summary>
 /// <param name="p_type" type="string">        the type, or name of the event</param>
 /// <param name="p_fn" type="function">        the function to exectute when the event fires</param>
 /// <param name="p_obj" type="Object">         An object to be passed along when the event fires</param>
 /// <param name="p_override" type="boolean">   If true, the obj passed in becomes the execution scope of the listener</param>
};
YAHOO.widget.Menu.prototype._onBeforeRender = function(p_sType, p_aArgs) {
   /// <summary> "beforerender" event handler for the menu.  Appends all of the &#60;ul&#62;, &#60;li&#62; and their accompanying title elements to the body element of the menu. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.Menu.prototype._cancelShowDelay = function() {
   /// <summary> Cancels the call to the "showMenu." </summary>
   /// <private />
};
YAHOO.widget.Menu.prototype._getItemGroup = function(p_nIndex) {
   /// <summary> Returns the menu item group at the specified index. </summary>
   /// <private />
   /// <returns type="Array" />
 /// <param name="p_nIndex" type="Number"> Number indicating the index of the menu item group to be retrieved.</param>
};
YAHOO.widget.Menu.prototype._enableScrollHeader = function() {
   /// <summary> Enables the header used for scrolling the body of the menu. </summary>
};
YAHOO.widget.Menu.prototype._onClick = function(p_sType, p_aArgs) {
   /// <summary> "click" event handler for the menu. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.Menu.prototype._onInit = function(p_sType, p_aArgs) {
   /// <summary> "init" event handler for the menu. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.Menu.prototype._updateItemProperties = function(p_nGroupIndex) {
   /// <summary> Updates the "index," "groupindex," and "className" properties of the menu items in the specified group. </summary>
   /// <private />
 /// <param name="p_nGroupIndex" type="Number"> Number indicating the group of items to update.</param>
};
YAHOO.widget.Menu.prototype._onYChange = function(p_sType, p_aArgs) {
   /// <summary> "y" event handler for a Menu instance. </summary>
 /// <param name="p_sType" type="String"> The name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Collection of arguments sent when the event was fired.</param>
};
YAHOO.widget.Menu.prototype._onHide = function(p_sType, p_aArgs) {
   /// <summary> "hide" event handler for the menu. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.Menu.prototype._removeItemFromGroupByIndex = function(p_nGroupIndex, p_nItemIndex) {
   /// <summary> Removes a menu item from a group by index.  Returns the menu item that was removed. </summary>
   /// <private />
   /// <returns type="YAHOO.widget.MenuItem" />
 /// <param name="p_nGroupIndex" type="Number"> Number indicating the group to which the menu item belongs.</param>
 /// <param name="p_nItemIndex" type="Number"> Number indicating the index of the menu item to be removed.</param>
};
YAHOO.widget.Menu.prototype._removeItemFromGroupByValue = function(p_nGroupIndex, p_oItem) {
   /// <summary> Removes a menu item from a group by reference.  Returns the menu item that was removed. </summary>
   /// <private />
   /// <returns type="YAHOO.widget.MenuItem" />
 /// <param name="p_nGroupIndex" type="Number"> Number indicating the group to which themenu item belongs.</param>
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object reference for the MenuItem instance to be removed.</param>
};
YAHOO.widget.Menu.prototype._onMouseOver = function(p_sType, p_aArgs) {
   /// <summary> "mouseover" event handler for the menu. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.Menu.prototype.init = function(p_oElement, p_oConfig) {
   /// <summary> The Menu class's initialization method. This method is automatically called by the constructor, and sets up all DOM references for pre-existing markup, and creates required markup if it is not already present. </summary>
 /// <param name="p_oElement" type="String"> String specifying the id attribute of the &#60;div&#62; element of the menu.</param>
 /// <param name="p_oElement" type="String"> String specifying the id attribute of the &#60;select&#62; element to be used as the data source for the menu.</param>
 /// <param name="p_oElement" type="HTMLDivElement"> Object specifying the &#60;div&#62; element of the menu.</param>
 /// <param name="p_oElement" type="HTMLSelectElement"> Object specifying the &#60;select&#62; element to be used as the data source for the menu.</param>
 /// <param name="p_oConfig" type="Object"> Optional. Object literal specifying the configuration for the menu. See configuration class documentation for more details.</param>
};
YAHOO.widget.Menu.prototype.clearActiveItem = function(p_bBlur) {
   /// <summary> Sets the "selected" configuration property of the menu's activeitem to "false" and hides the item's submenu. </summary>
 /// <param name="p_bBlur" type="Boolean"> Boolean indicating if the menu's active item should be blurred.</param>
};
YAHOO.widget.Menu.prototype._onMenuItemConfigChange = function(p_sType, p_aArgs, p_oItem) {
   /// <summary> "configchange" event handler for the menu's items. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object representing the menu item that fired the event.</param>
};
YAHOO.widget.Menu.prototype._onParentMenuRender = function(p_sType, p_aArgs, p_oSubmenu) {
   /// <summary> "render" event handler for a submenu.  Renders a  submenu in response to the firing of its parent's "render" event. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oSubmenu" type="YAHOO.widget.Menu"> Object representing the submenu that subscribed to the event.</param>
};
YAHOO.widget.Menu.prototype.toString = function() {
   /// <summary> Returns a string representing the menu. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Menu.prototype._cancelHideDelay = function() {
   /// <summary> Cancels the call to "hideMenu." </summary>
   /// <private />
};
YAHOO.widget.Menu.prototype.blur = function() {
   /// <summary> Causes the menu to lose focus and fires the "blur" event. </summary>
};
YAHOO.widget.Menu.prototype.destroy = function() {
   /// <summary> Removes the menu's &#60;div&#62; element (and accompanying child nodes) from the document. </summary>
};
YAHOO.widget.Menu.prototype.configVisible = function(p_sType, p_aArgs, p_oMenu) {
   /// <summary> Event handler for when the "visible" configuration property the menu changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oMenu" type="YAHOO.widget.Menu"> Object representing the menu that fired the event.</param>
};
YAHOO.widget.Menu.prototype.addItems = function(p_aItems, p_nGroupIndex) {
   /// <summary> Adds an array of items to the menu. </summary>
   /// <returns type="Array" />
 /// <param name="p_aItems" type="Array"> Array of items to be added to the menu.  The array can contain strings specifying the text for each item to be created, objectliterals specifying each of the menu item configuration properties, or MenuItem instances.</param>
 /// <param name="p_nGroupIndex" type="Number"> Optional. Number specifying the group to which the items belongs.</param>
};
YAHOO.widget.Menu.prototype._onBeforeHide = function(p_sType, p_aArgs) {
   /// <summary> "beforehide" event handler for the menu. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.Menu.prototype._getFirstEnabledItem = function() {
   /// <summary> Returns the first enabled item in the menu. </summary>
   /// <private />
   /// <returns type="YAHOO.widget.MenuItem" />
};
YAHOO.widget.Menu.prototype.checkPosition = function(p_sPosition) {
   /// <summary> Checks to make sure that the value of the "position" property is one of the supported strings. Returns true if the position is supported. </summary>
   /// <private />
   /// <returns type="Boolean" />
 /// <param name="p_sPosition" type="Object"> String specifying the position of the menu.</param>
};
YAHOO.widget.Menu.prototype._createItemGroup = function(p_nIndex) {
   /// <summary> Creates a new menu item group (array) and its associated &#60;ul&#62; element. Returns an aray of menu item groups. </summary>
   /// <private />
   /// <returns type="Array" />
 /// <param name="p_nIndex" type="Number"> Number indicating the group to create.</param>
};
YAHOO.widget.Menu.prototype.getItemGroups = function() {
   /// <summary> Multi-dimensional Array representing the menu items as they are grouped in the menu. </summary>
   /// <returns type="Array" />
};
YAHOO.widget.Menu.prototype.getItems = function() {
   /// <summary> Returns an array of all of the items in the menu. </summary>
   /// <returns type="Array" />
};
YAHOO.widget.Menu.prototype._configureSubmenu = function(p_oItem) {
   /// <summary> Subscribes the menu item's submenu to its parent menu's events. </summary>
   /// <private />
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object reference for the MenuItem instance with the submenu to be configured.</param>
};
YAHOO.widget.Menu.prototype._addItemToGroup = function(p_nGroupIndex, p_oItem, p_nItemIndex) {
   /// <summary> Adds a menu item to a group. </summary>
   /// <private />
   /// <returns type="YAHOO.widget.MenuItem" />
 /// <param name="p_nGroupIndex" type="Number"> Number indicating the group to which the item belongs.</param>
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object reference for the MenuItem instance to be added to the menu.</param>
 /// <param name="p_oItem" type="String"> String specifying the text of the item to be added to the menu.</param>
 /// <param name="p_oItem" type="Object"> Object literal containing a set of menu item configuration properties.</param>
 /// <param name="p_nItemIndex" type="Number"> Optional. Number indicating the index at which the menu item should be added.</param>
};
YAHOO.widget.Menu.prototype.configDisabled = function(p_sType, p_aArgs, p_oMenu) {
   /// <summary> Event handler for when the "disabled" configuration property of a menu changes. </summary>
 /// <param name="p_sType" type="String"> The name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Collection of arguments sent when the event was fired.</param>
 /// <param name="p_oMenu" type="YAHOO.widget.Menu"> The Menu instance fired the event.</param>
};
YAHOO.widget.Menu.prototype._disableScrollHeader = function() {
   /// <summary> Disables the header used for scrolling the body of the menu. </summary>
};
YAHOO.widget.Menu.prototype.focus = function() {
   /// <summary> Causes the menu to receive focus and fires the "focus" event. </summary>
};
YAHOO.widget.Menu.prototype.configContainer = function(p_sType, p_aArgs, p_oMenu) {
   /// <summary> Event handler for when the "container" configuration property of the menu changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oMenu" type="YAHOO.widget.Menu"> Object representing the menu that fired the event.</param>
};
YAHOO.widget.Menu.prototype.clearContent = function() {
   /// <summary> Removes all of the content from the menu, including the menu items, group titles, header and footer. </summary>
};
YAHOO.widget.Menu.prototype.configPosition = function(p_sType, p_aArgs, p_oMenu) {
   /// <summary> Event handler for when the "position" configuration property of the menu changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oMenu" type="YAHOO.widget.Menu"> Object representing the menu that fired the event.</param>
};
YAHOO.widget.Menu.prototype._onMouseMove = function(p_oEvent, p_oMenu) {
   /// <summary> "click" event handler for the menu. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object passed back by the event utility (YAHOO.util.Event).</param>
 /// <param name="p_oMenu" type="YAHOO.widget.Menu"> Object representing the menu that fired the event.</param>
};
YAHOO.widget.Menu.prototype.getItem = function(p_nItemIndex, p_nGroupIndex) {
   /// <summary> Returns the item at the specified index. </summary>
   /// <returns type="YAHOO.widget.MenuItem" />
 /// <param name="p_nItemIndex" type="Number"> Number indicating the ordinal position of the item to be retrieved.</param>
 /// <param name="p_nGroupIndex" type="Number"> Optional. Number indicating the group to which the item belongs.</param>
};
YAHOO.widget.Menu.prototype.getSubmenus = function() {
   /// <summary> Returns an array of all of the submenus that are immediate children of the menu. </summary>
   /// <returns type="Array" />
};
YAHOO.widget.Menu.prototype.insertItem = function(p_oItem, p_nItemIndex, p_nGroupIndex) {
   /// <summary> Inserts an item into the menu at the specified index. </summary>
   /// <returns type="YAHOO.widget.MenuItem" />
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object reference for the MenuItem instance to be added to the menu.</param>
 /// <param name="p_oItem" type="String"> String specifying the text of the item to be added to the menu.</param>
 /// <param name="p_oItem" type="Object"> Object literal containing a set of menu item configuration properties.</param>
 /// <param name="p_nItemIndex" type="Number"> Number indicating the ordinal position at whichthe item should be added.</param>
 /// <param name="p_nGroupIndex" type="Number"> Optional. Number indicating the group to which the item belongs.</param>
};
YAHOO.widget.Menu.prototype._onMenuItemDestroy = function(p_sType, p_aArgs, p_oItem) {
   /// <summary> "destroy" event handler for the menu's items. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object representing the menu item that fired the event.</param>
};
YAHOO.widget.Menu.prototype._setScrollHeight = function(p_nScrollHeight) {
   /// <summary>  </summary>
   /// <private />
 /// <param name="p_nScrollHeight" type="String"> Number representing the scrolling height of the Menu.</param>
};
YAHOO.widget.Menu.prototype._onShow = function(p_sType, p_aArgs) {
   /// <summary> "show" event handler for the menu. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.Menu.prototype._onParentMenuConfigChange = function(p_sType, p_aArgs, p_oSubmenu) {
   /// <summary> "configchange" event handler for a submenu. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oSubmenu" type="YAHOO.widget.Menu"> Object representing the submenu that subscribed to the event.</param>
};
YAHOO.widget.Menu.prototype.setItemGroupTitle = function(p_sGroupTitle, p_nGroupIndex) {
   /// <summary> Sets the title of a group of menu items. </summary>
 /// <param name="p_sGroupTitle" type="String"> String specifying the title of the group.</param>
 /// <param name="p_nGroupIndex" type="Number"> Optional. Number specifying the group to whichthe title belongs.</param>
};
YAHOO.widget.Menu.prototype._disableScrollFooter = function() {
   /// <summary> Disables the footer used for scrolling the body of the menu. </summary>
};
YAHOO.widget.Menu.prototype.getRoot = function() {
   /// <summary> Finds the menu's root menu. </summary>
};
YAHOO.widget.Menu.prototype._execHideDelay = function() {
   /// <summary> Hides the menu after the number of milliseconds specified by the "hidedelay" configuration property. </summary>
   /// <private />
};
YAHOO.widget.Menu.prototype.configShadow = function(p_sType, p_aArgs, p_oMenu) {
   /// <summary> Event handler for when the "shadow" configuration property of a menu changes. </summary>
 /// <param name="p_sType" type="String"> The name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Collection of arguments sent when the event was fired.</param>
 /// <param name="p_oMenu" type="YAHOO.widget.Menu"> The Menu instance fired the event.</param>
};
YAHOO.widget.Menu.prototype._setMaxHeight = function(p_sType, p_aArgs, p_nMaxHeight) {
   /// <summary> "renderEvent" handler used to defer the setting of the "maxheight" configuration property until the menu is rendered in lazy load scenarios. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> The name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Collection of arguments sent when the event was fired.</param>
 /// <param name="p_nMaxHeight" type="Number"> Number representing the value to set for the "maxheight" configuration property.</param>
};
YAHOO.widget.Menu.prototype._clearSetWidthFlag = function() {
   /// <summary> Change event listener for the "width" configuration property.  This listener is added when a Menu's "width" configuration property is set by the "_setScrollHeight" method, and is used to set the "_widthSetForScroll" property to "false" if the "width" configuration property is changed after it was set by the "_setScrollHeight" method.  If the "_widthSetForScroll" property is set to "false", and the "_setScrollHeight" method is in the process of tearing down scrolling functionality, it will maintain the Menu's new width rather than reseting it. </summary>
   /// <private />
};
YAHOO.widget.Menu.prototype.setInitialFocus = function() {
   /// <summary> Sets focus to the menu's first enabled item. </summary>
};
YAHOO.widget.Menu.prototype._onMouseOut = function(p_sType, p_aArgs) {
   /// <summary> "mouseout" event handler for the menu. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.Menu.prototype._onItemAdded = function(p_sType, p_aArgs) {
   /// <summary> "itemadded" event handler for a Menu instance. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> The name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Collection of arguments sent when the event was fired.</param>
};
YAHOO.widget.Menu.prototype.configIframe = function(p_sType, p_aArgs, p_oMenu) {
   /// <summary> Event handler for when the "iframe" configuration property of the menu changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oMenu" type="YAHOO.widget.Menu"> Object representing the menu that fired the event.</param>
};
YAHOO.widget.Menu.prototype._onScrollTargetMouseOver = function(p_oEvent, p_oMenu) {
   /// <summary> "mouseover" event handler for the menu's "header" and "footer" elements.  Used to scroll the body of the menu up and down when the menu's "maxheight" configuration property is set to a value greater than 0. </summary>
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object passed back by the event utility (YAHOO.util.Event).</param>
 /// <param name="p_oMenu" type="YAHOO.widget.Menu"> Object representing the menu that fired the event.</param>
};
YAHOO.widget.Menu.prototype.configClassName = function(p_sType, p_aArgs, p_oMenu) {
   /// <summary> Event handler for when the "classname" configuration property of a menu changes. </summary>
 /// <param name="p_sType" type="String"> The name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Collection of arguments sent when the event was fired.</param>
 /// <param name="p_oMenu" type="YAHOO.widget.Menu"> The Menu instance fired the event.</param>
};
YAHOO.widget.Menu.prototype._onKeyPress = function(p_sType, p_aArgs) {
   /// <summary> "keypress" event handler for a Menu instance. </summary>
 /// <param name="p_sType" type="String"> The name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Collection of arguments sent when the event was fired.</param>
};
YAHOO.widget.Menu.prototype.initEvents = function() {
   /// <summary> Initializes the custom events for the menu. </summary>
};
YAHOO.widget.Menu.prototype._enableScrollFooter = function() {
   /// <summary> Enables the footer used for scrolling the body of the menu. </summary>
};
YAHOO.widget.Menu.prototype.initDefaultConfig = function() {
   /// <summary> Initializes the class's configurable properties which can bechanged using the menu's Config object ("cfg"). </summary>
};
YAHOO.widget.Menu.prototype._execSubmenuHideDelay = function(p_oSubmenu, p_nMouseX, p_nHideDelay) {
   /// <summary> Hides a submenu after the number of milliseconds specified by the "submenuhidedelay" configuration property have ellapsed. </summary>
   /// <private />
 /// <param name="p_oSubmenu" type="YAHOO.widget.Menu"> Object specifying the submenu that  should be hidden.</param>
 /// <param name="p_nMouseX" type="Number"> The x coordinate of the mouse when it left the specified submenu's parent menu item.</param>
 /// <param name="p_nHideDelay" type="Number"> The number of milliseconds that should ellapsebefore the submenu is hidden.</param>
};
YAHOO.widget.Menu.prototype._onKeyDown = function(p_sType, p_aArgs) {
   /// <summary> "keydown" event handler for the menu. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.Menu.prototype._onBlur = function(p_sType, p_aArgs) {
   /// <summary> "blur" event handler for a Menu instance. </summary>
 /// <param name="p_sType" type="String"> The name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Collection of arguments sent when the event was fired.</param>
};
YAHOO.widget.Menu.prototype._subscribeToItemEvents = function(p_oItem) {
   /// <summary> Subscribes a menu to a menu item's event. </summary>
   /// <private />
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object reference for the MenuItem instance whose events should be subscribed to.</param>
};
YAHOO.widget.Menu.prototype._onBeforeShow = function(p_sType, p_aArgs) {
   /// <summary> "beforeshow" event handler for the menu. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.Menu.prototype.configHideDelay = function(p_sType, p_aArgs, p_oMenu) {
   /// <summary> Event handler for when the "hidedelay" configuration property of the menu changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oMenu" type="YAHOO.widget.Menu"> Object representing the menu that fired the event.</param>
};
YAHOO.widget.MenuBar.prototype.configSubmenuToggle = function(p_sType, p_aArgs) {
   /// <summary> Event handler for when the "submenutoggleregion" configuration property of a MenuBar changes. </summary>
 /// <param name="p_sType" type="String"> The name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Collection of arguments sent when the event was fired.</param>
};
YAHOO.widget.MenuBar.prototype.init = function(p_oElement, p_oConfig) {
   /// <summary> The MenuBar class's initialization method. This method is automatically called by the constructor, and sets up all DOM references for pre-existing markup, and creates required markup if it is not already present. </summary>
 /// <param name="p_oElement" type="String"> String specifying the id attribute of the &#60;div&#62; element of the menu bar.</param>
 /// <param name="p_oElement" type="String"> String specifying the id attribute of the &#60;select&#62; element to be used as the data source for the menu bar.</param>
 /// <param name="p_oElement" type="HTMLDivElement"> Object specifying the &#60;div&#62; element of the menu bar.</param>
 /// <param name="p_oElement" type="HTMLSelectElement"> Object specifying the &#60;select&#62; element to be used as the data source for the menu bar.</param>
 /// <param name="p_oConfig" type="Object"> Optional. Object literal specifying the configuration for the menu bar. See configuration class documentation formore details.</param>
};
YAHOO.widget.MenuBar.prototype.checkPosition = function(p_sPosition) {
   /// <summary> Checks to make sure that the value of the "position" property is one of the supported strings. Returns true if the position is supported. </summary>
   /// <private />
   /// <returns type="Boolean" />
 /// <param name="p_sPosition" type="Object"> String specifying the position of the menu.</param>
};
YAHOO.widget.MenuBar.prototype._onClick = function(p_sType, p_aArgs, p_oMenuBar) {
   /// <summary> "click" event handler for the menu bar. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oMenuBar" type="YAHOO.widget.MenuBar"> Object representing the menu bar that fired the event.</param>
};
YAHOO.widget.MenuBar.prototype.toString = function() {
   /// <summary> Returns a string representing the menu bar. </summary>
   /// <returns type="String" />
};
YAHOO.widget.MenuBar.prototype._onKeyDown = function(p_sType, p_aArgs, p_oMenuBar) {
   /// <summary> "keydown" Custom Event handler for the menu bar. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oMenuBar" type="YAHOO.widget.MenuBar"> Object representing the menu bar that fired the event.</param>
};
YAHOO.widget.MenuBar.prototype.initDefaultConfig = function() {
   /// <summary> Initializes the class's configurable properties which can bechanged using the menu bar's Config object ("cfg"). </summary>
};
YAHOO.widget.MenuBarItem.prototype.init = function(p_oObject, p_oConfig) {
   /// <summary> The MenuBarItem class's initialization method. This method is automatically called by the constructor, and sets up all DOM references for pre-existing markup, and creates required markup if it is not already present. </summary>
 /// <param name="p_oObject" type="String"> String specifying the text of the menu bar item.</param>
 /// <param name="p_oObject" type="HTMLLIElement"> Object specifying the &#60;li&#62; element of the menu bar item.</param>
 /// <param name="p_oObject" type="HTMLOptGroupElement"> Object specifying the &#60;optgroup&#62; element of the menu bar item.</param>
 /// <param name="p_oObject" type="HTMLOptionElement"> Object specifying the &#60;option&#62; element of the menu bar item.</param>
 /// <param name="p_oConfig" type="Object"> Optional. Object literal specifying the configuration for the menu bar item. See configuration class documentation for more details.</param>
};
YAHOO.widget.MenuBarItem.prototype.toString = function() {
   /// <summary> Returns a string representing the menu bar item. </summary>
   /// <returns type="String" />
};
YAHOO.widget.MenuItem.prototype._createRootNodeStructure = function() {
   /// <summary> Creates the core DOM structure for the menu item. </summary>
   /// <private />
};
YAHOO.widget.MenuItem.prototype.hasFocus = function() {
   /// <summary> Returns a boolean indicating whether or not the menu itemhas focus. </summary>
   /// <returns type="Boolean" />
};
YAHOO.widget.MenuItem.prototype.configURL = function(p_sType, p_aArgs, p_oItem) {
   /// <summary> Event handler for when the "url" configuration property of the menu item changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object representing the menu itemthat fired the event.</param>
};
YAHOO.widget.MenuItem.prototype.focus = function() {
   /// <summary> Causes the menu item to receive the focus and fires the focus event. </summary>
};
YAHOO.widget.MenuItem.prototype.configEmphasis = function(p_sType, p_aArgs, p_oItem) {
   /// <summary> Event handler for when the "emphasis" configuration propertyof the menu item changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object representing the menu itemthat fired the event.</param>
};
YAHOO.widget.MenuItem.prototype._dispatchClickEvent = function() {
   /// <summary> Dispatches a DOM "click" event to the anchor element of a MenuItem instance. </summary>
   /// <private />
};
YAHOO.widget.MenuItem.prototype.configTarget = function(p_sType, p_aArgs, p_oItem) {
   /// <summary> Event handler for when the "target" configuration property of the menu item changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object representing the menu itemthat fired the event.</param>
};
YAHOO.widget.MenuItem.prototype.removeClassNameForState = function(state) {
   /// <summary> Removes a class name from a MenuItem instance's &#60;LI&#62; and &#60;A&#62; elementsthat represents a MenuItem's state - "disabled," "checked," etc. </summary>
   /// <private />
 /// <param name="state" type="String"> String representing a state - "disabled," "checked," etc.</param>
};
YAHOO.widget.MenuItem.prototype.getClassNameForState = function(prefix, state) {
   /// <summary> Returns a class name for the specified prefix and state.  If the class name does not yet exist, it is created and stored in the CLASS_NAMES object to increase performance. </summary>
   /// <private />
 /// <param name="prefix" type="String"> String representing the prefix for the class name</param>
 /// <param name="state" type="String"> String representing a state - "disabled," "checked," etc.</param>
};
YAHOO.widget.MenuItem.prototype.configStrongEmphasis = function(p_sType, p_aArgs, p_oItem) {
   /// <summary> Event handler for when the "strongemphasis" configuration property of the menu item changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object representing the menu itemthat fired the event.</param>
};
YAHOO.widget.MenuItem.prototype._createKeyListener = function(type, args, keyData) {
   /// <summary> "show" event handler for a Menu instance - responsible for setting up the KeyListener instance for a MenuItem. </summary>
   /// <private />
 /// <param name="type" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="args" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="keyData" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.MenuItem.prototype.configSubmenu = function(p_sType, p_aArgs, p_oItem) {
   /// <summary> Event handler for when the "submenu" configuration property of the menu item changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object representing the menu itemthat fired the event.</param>
};
YAHOO.widget.MenuItem.prototype.getNextSibling = function() {
   /// <summary> Finds the menu item's next sibling. </summary>
   /// <returns type="" />
};
YAHOO.widget.MenuItem.prototype.configOnClick = function(p_sType, p_aArgs, p_oItem) {
   /// <summary> Event handler for when the "onclick" configuration property of the menu item changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object representing the menu itemthat fired the event.</param>
};
YAHOO.widget.MenuItem.prototype.getPreviousEnabledSibling = function() {
   /// <summary> Finds the menu item's previous enabled sibling. </summary>
   /// <returns type="YAHOO.widget.MenuItem" />
};
YAHOO.widget.MenuItem.prototype.init = function(p_oObject, p_oConfig) {
   /// <summary> The MenuItem class's initialization method. This method is automatically called by the constructor, and sets up all DOM references for pre-existing markup, and creates required markup if it is not already present. </summary>
 /// <param name="p_oObject" type="String"> String specifying the text of the menu item.</param>
 /// <param name="p_oObject" type="HTMLLIElement"> Object specifying the &#60;li&#62; element of the menu item.</param>
 /// <param name="p_oObject" type="HTMLOptGroupElement"> Object specifying the &#60;optgroup&#62; element of the menu item.</param>
 /// <param name="p_oObject" type="HTMLOptionElement"> Object specifying the &#60;option&#62; element of the menu item.</param>
 /// <param name="p_oConfig" type="Object"> Optional. Object literal specifying the configuration for the menu item. See configuration class documentation for more details.</param>
};
YAHOO.widget.MenuItem.prototype.toString = function() {
   /// <summary> Returns a string representing the menu item. </summary>
   /// <returns type="String" />
};
YAHOO.widget.MenuItem.prototype.addClassNameForState = function(state) {
   /// <summary> Applies a class name to a MenuItem instance's &#60;LI&#62; and &#60;A&#62; elementsthat represents a MenuItem's state - "disabled," "checked," etc. </summary>
   /// <private />
 /// <param name="state" type="String"> String representing a state - "disabled," "checked," etc.</param>
};
YAHOO.widget.MenuItem.prototype._onSubmenuBeforeHide = function(p_sType, p_aArgs) {
   /// <summary> "beforehide" Custom Event handler for a submenu. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.MenuItem.prototype.blur = function() {
   /// <summary> Causes the menu item to lose focus and fires the blur event. </summary>
};
YAHOO.widget.MenuItem.prototype.configHelpText = function(p_sType, p_aArgs, p_oItem) {
   /// <summary> Event handler for when the "helptext" configuration property of the menu item changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object representing the menu itemthat fired the event.</param>
};
YAHOO.widget.MenuItem.prototype.destroy = function() {
   /// <summary> Removes the menu item's &#60;li&#62; element from its parent &#60;ul&#62; element. </summary>
};
YAHOO.widget.MenuItem.prototype.getNextEnabledSibling = function() {
   /// <summary> Finds the menu item's next enabled sibling. </summary>
   /// <returns type="" />
};
YAHOO.widget.MenuItem.prototype.configChecked = function(p_sType, p_aArgs, p_oItem) {
   /// <summary> Event handler for when the "checked" configuration property of the menu item changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object representing the menu itemthat fired the event.</param>
};
YAHOO.widget.MenuItem.prototype.configKeyListener = function(p_sType, p_aArgs) {
   /// <summary> Event handler for when the "keylistener" configuration property of a menu item changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.MenuItem.prototype.configDisabled = function(p_sType, p_aArgs, p_oItem) {
   /// <summary> Event handler for when the "disabled" configuration property of the menu item changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object representing the menu itemthat fired the event.</param>
};
YAHOO.widget.MenuItem.prototype.configSelected = function(p_sType, p_aArgs, p_oItem) {
   /// <summary> Event handler for when the "selected" configuration property of the menu item changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object representing the menu itemthat fired the event.</param>
};
YAHOO.widget.MenuItem.prototype.getPreviousSibling = function() {
   /// <summary> Finds the menu item's previous sibling. </summary>
   /// <returns type="YAHOO.widget.MenuItem" />
};
YAHOO.widget.MenuItem.prototype._initSubTree = function() {
   /// <summary> Iterates the source element's childNodes collection and uses the child nodes to instantiate other menus. </summary>
   /// <private />
};
YAHOO.widget.MenuItem.prototype.configClassName = function(p_sType, p_aArgs, p_oItem) {
   /// <summary> Event handler for when the "classname" configuration property of a menu item changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object representing the menu itemthat fired the event.</param>
};
YAHOO.widget.MenuItem.prototype.configText = function(p_sType, p_aArgs, p_oItem) {
   /// <summary> Event handler for when the "text" configuration property of the menu item changes. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oItem" type="YAHOO.widget.MenuItem"> Object representing the menu itemthat fired the event.</param>
};
YAHOO.widget.MenuItem.prototype.initDefaultConfig = function() {
   /// <summary> Initializes an item's configurable properties. </summary>
};
YAHOO.widget.MenuManager.getVisible = function() {
   /// <summary> Returns a collection of all visible menus registeredwith the menu manger. </summary>
   /// <returns type="Object" />
};
YAHOO.widget.MenuManager.onMenuFocus = function(p_sType, p_aArgs) {
   /// <summary> "focus" event handler for a MenuItem instance. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.MenuManager.onItemDestroy = function(p_sType, p_aArgs) {
   /// <summary> "destroy" event handler for a MenuItem instance. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event  that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.MenuManager.onDOMEvent = function(p_oEvent) {
   /// <summary> Generic, global event handler for all of a menu's DOM-based events.  This listens for events against the document object.  If the target of a given event is a member of a menu or menu item's DOM, the instance's corresponding Custom Event is fired. </summary>
   /// <private />
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object  passed back by the event utility (YAHOO.util.Event).</param>
};
YAHOO.widget.MenuManager.getMenu = function(p_sId) {
   /// <summary> Returns a menu with the specified id. </summary>
   /// <returns type="YAHOO.widget.Menu" />
 /// <param name="p_sId" type="String"> String specifying the id of the &#60;div&#62; element representing the menu tobe retrieved.</param>
};
YAHOO.widget.MenuManager.onMenuVisibleConfigChange = function(p_sType, p_aArgs) {
   /// <summary> Event handler for when the "visible" configuration  property of a Menu instance changes. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event  that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.MenuManager.getMenuRootElement = function(p_oElement) {
   /// <summary> Finds the root DIV node of a menu or the root LI node of a menu item. </summary>
   /// <private />
 /// <param name="p_oElement" type="HTMLElement"> Object specifying an HTML element.</param>
};
YAHOO.widget.MenuManager.removeItem = function(p_oMenuItem) {
   /// <summary> Removes a MenuItem instance from the MenuManager's collection of MenuItems. </summary>
   /// <private />
 /// <param name="p_oMenuItem" type="MenuItem"> The MenuItem instance to be removed.</param>
};
YAHOO.widget.MenuManager.addMenu = function(p_oMenu) {
   /// <summary> Adds a menu to the collection of known menus. </summary>
 /// <param name="p_oMenu" type="YAHOO.widget.Menu"> Object specifying the Menu  instance to be added.</param>
};
YAHOO.widget.MenuManager.onMenuDestroy = function(p_sType, p_aArgs, p_oMenu) {
   /// <summary> "destroy" event handler for a menu. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oMenu" type="YAHOO.widget.Menu"> The menu that fired the event.</param>
};
YAHOO.widget.MenuManager.onMenuBlur = function(p_sType, p_aArgs) {
   /// <summary> "blur" event handler for a MenuItem instance. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event  that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.MenuManager.getFocusedMenu = function() {
   /// <summary> Returns a reference to the menu that currently has focus. </summary>
   /// <returns type="YAHOO.widget.Menu" />
};
YAHOO.widget.MenuManager.toString = function() {
   /// <summary> Returns a string representing the menu manager. </summary>
   /// <returns type="String" />
};
YAHOO.widget.MenuManager.getMenuItem = function(p_sId) {
   /// <summary> Returns a menu item with the specified id. </summary>
   /// <returns type="YAHOO.widget.MenuItem" />
 /// <param name="p_sId" type="String"> String specifying the id of the &#60;li&#62; element representing the menu item tobe retrieved.</param>
};
YAHOO.widget.MenuManager.getMenus = function() {
   /// <summary> Returns a collection of all menus registered with the menu manger. </summary>
   /// <returns type="Object" />
};
YAHOO.widget.MenuManager.getFocusedMenuItem = function() {
   /// <summary> Returns a reference to the menu item that currently has focus. </summary>
   /// <returns type="YAHOO.widget.MenuItem" />
};
YAHOO.widget.MenuManager.onItemAdded = function(p_sType, p_aArgs) {
   /// <summary> "itemadded" event handler for a Menu instance. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event  that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.MenuManager.getMenuItemGroup = function(p_sId) {
   /// <summary> Returns an array of menu item instances whose corresponding &#60;li&#62; elements are child nodes of the &#60;ul&#62; element with the specified id. </summary>
   /// <returns type="Array" />
 /// <param name="p_sId" type="String"> String specifying the id of the &#60;ul&#62; element representing the group of menu items to be retrieved.</param>
};
YAHOO.widget.MenuManager.hideVisible = function() {
   /// <summary> Hides all visible, dynamically positioned menus (excluding instances of YAHOO.widget.MenuBar). </summary>
};
YAHOO.widget.MenuManager.removeMenu = function(p_oMenu) {
   /// <summary> Removes a menu from the collection of known menus. </summary>
 /// <param name="p_oMenu" type="YAHOO.widget.Menu"> Object specifying the Menu  instance to be removed.</param>
};
YAHOO.widget.Module.prototype.render = function(appendToNode, moduleElement) {
   /// <summary> Renders the Module by inserting the elements that are not already in the main Module into their correct places. Optionally appends the Module to the specified node prior to the render's execution. For Modules without existing markup, the appendToNode argument is REQUIRED. If this argument is ommitted and the current element is not present in the document, the function will return false, indicating that the render was a failure.NOTE: As of 2.3.1, if the appendToNode is the document's body elementthen the module is rendered as the first child of the body element, and not appended to it, to avoid Operation Aborted errors in IE when rendering the module before window's load event is fired. You can use the appendtodocumentbody configuration property to change this to append to document.body if required. </summary>
   /// <returns type="Boolean" />
 /// <param name="appendToNode" type="String"> The element id to which the Module should be appended to prior to rendering OR</param>
 /// <param name="appendToNode" type="HTMLElement"> The element to which the Module should be appended to prior to rendering</param>
 /// <param name="moduleElement" type="HTMLElement"> OPTIONAL. The element that represents the actual Standard Module container.</param>
};
YAHOO.widget.Module.prototype.show = function() {
   /// <summary> Shows the Module element by setting the visible configuration property to true. Also fires two events: beforeShowEvent prior to the visibility change, and showEvent after. </summary>
};
YAHOO.widget.Module.prototype._renderBody = function(moduleElement) {
   /// <summary> Renders the currently set body into it's proper position under the module element. If the module element is not provided, "this.element" is used. </summary>
 /// <param name="moduleElement" type="HTMLElement"> Optional. A reference to the module element.</param>
};
YAHOO.widget.Module.prototype._renderHeader = function(moduleElement) {
   /// <summary> Renders the currently set header into it's proper position under the module element. If the module element is not provided, "this.element" is used. </summary>
 /// <param name="moduleElement" type="HTMLElement"> Optional. A reference to the module element</param>
};
YAHOO.widget.Module.prototype.setBody = function(bodyContent) {
   /// <summary> Sets the Module's body content to the HTML specified. If no body is present, one will be automatically created. An empty string can be passed to the method to clear the contents of the body. </summary>
 /// <param name="bodyContent" type="String"> The HTML used to set the body. As a convenience, non HTMLElement objects can also be passed into the method, and will be treated as strings, with the body innerHTMLset to their default toString implementations.OR</param>
 /// <param name="bodyContent" type="HTMLElement"> The HTMLElement to add as the first and onlychild of the body element.OR</param>
 /// <param name="bodyContent" type="DocumentFragment"> The document fragment containing elements which are to be added to the body</param>
};
YAHOO.widget.Module.prototype.hide = function() {
   /// <summary> Hides the Module element by setting the visible configuration property to false. Also fires two events: beforeHideEvent prior to the visibility change, and hideEvent after. </summary>
};
YAHOO.widget.Module.prototype.initEvents = function() {
   /// <summary> Initializes the custom events for Module which are fired automatically at appropriate times by the Module class. </summary>
};
YAHOO.widget.Module.prototype.initResizeMonitor = function() {
   /// <summary> Initialize an empty IFRAME that is placed out of the visible area that can be used to detect text resize. </summary>
};
YAHOO.widget.Module.prototype._supportsCWResize = function() {
   /// <summary> Text resize monitor helper method.Determines if the browser supports resize events on iframe content windows. </summary>
   /// <private />
};
YAHOO.widget.Module.prototype.init = function(el, userConfig) {
   /// <summary> The Module class's initialization method, which is executed forModule and all of its subclasses. This method is automatically called by the constructor, and  sets up all DOM references for pre-existing markup, and creates required markup if it is not already present.If the element passed in does not have an id, one will be generatedfor it. </summary>
 /// <param name="el" type="String"> The element ID representing the Module OR</param>
 /// <param name="el" type="HTMLElement"> The element representing the Module</param>
 /// <param name="userConfig" type="Object"> The configuration Object literal containing the configuration that should be set for this module. See configuration documentation for more details.</param>
};
YAHOO.widget.Module.prototype.toString = function() {
   /// <summary> Returns a String representation of the Object. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Module.prototype.destroy = function() {
   /// <summary> Removes the Module element from the DOM and sets all child elements to null. </summary>
};
YAHOO.widget.Module.prototype._renderFooter = function(moduleElement) {
   /// <summary> Renders the currently set footer into it's proper position under the module element. If the module element is not provided, "this.element" is used. </summary>
 /// <param name="moduleElement" type="HTMLElement"> Optional. A reference to the module element</param>
};
YAHOO.widget.Module.prototype.appendToHeader = function(element) {
   /// <summary> Appends the passed element to the header. If no header is present, one will be automatically created. </summary>
 /// <param name="element" type="HTMLElement | DocumentFragment"> The element to append to the header. In the case of a document fragment, thechildren of the fragment will be appended to the header.</param>
};
YAHOO.widget.Module.prototype.onDomResize = function(e, obj) {
   /// <summary> Event handler fired when the resize monitor element is resized. </summary>
 /// <param name="e" type="DOMEvent"> The DOM resize event</param>
 /// <param name="obj" type="Object"> The scope object passed to the handler</param>
};
YAHOO.widget.Module.prototype.setFooter = function(footerContent) {
   /// <summary> Sets the Module's footer content to the HTML specified, or appends the passed element to the footer. If no footer is present, one will be automatically created. An empty string can be passed to the methodto clear the contents of the footer. </summary>
 /// <param name="footerContent" type="String"> The HTML used to set the footer As a convenience, non HTMLElement objects can also be passed into the method, and will be treated as strings, with the footer innerHTMLset to their default toString implementations.OR</param>
 /// <param name="footerContent" type="HTMLElement"> The HTMLElement to append to the footerOR</param>
 /// <param name="footerContent" type="DocumentFragment"> The document fragment containing elements which are to be added to the footer</param>
};
YAHOO.widget.Module.forceDocumentRedraw = function() {
   /// <summary> Helper utility method, which forces a document level redraw for Opera, which can help remove repaintirregularities after applying DOM changes. </summary>
};
YAHOO.widget.Module.prototype.configMonitorResize = function(type, args, obj) {
   /// <summary> Default event handler for the "monitorresize" configuration property </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Module.prototype.appendToFooter = function(element) {
   /// <summary> Appends the passed element to the footer. If no footer is present, one will be automatically created. </summary>
 /// <param name="element" type="HTMLElement | DocumentFragment"> The element to append to the footer. In the case of a document fragment, thechildren of the fragment will be appended to the footer</param>
};
YAHOO.widget.Module.prototype.configVisible = function(type, args, obj) {
   /// <summary> Default event handler for changing the visibility property of a Module. By default, this is achieved by switching the "display" style between "block" and "none".This method is responsible for firing showEvent and hideEvent. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Module.prototype._addToParent = function(The) {
   /// <summary> This method is a protected helper, used when constructing the DOM structure for the module to account for situations which may cause Operation Aborted errors in IE. It should not be used for general DOM construction.If the parentNode is not document.body, the element is appended as the last element.If the parentNode is document.body the element is added as the first child to helpprevent Operation Aborted errors in IE. </summary>
 /// <param name="The" type="parentNode"> HTML element to which the element will be added</param>
 /// <param name="The" type="element"> HTML element to be added to parentNode's children</param>
};
YAHOO.widget.Module.prototype.appendToBody = function(element) {
   /// <summary> Appends the passed element to the body. If no body is present, one will be automatically created. </summary>
 /// <param name="element" type="HTMLElement | DocumentFragment"> The element to append to the body. In the case of a document fragment, thechildren of the fragment will be appended to the body.</param>
};
YAHOO.widget.Module.prototype._initResizeMonitor = function() {
   /// <summary> Create and initialize the text resize monitoring iframe. </summary>
};
YAHOO.widget.Module.prototype.setHeader = function(headerContent) {
   /// <summary> Sets the Module's header content to the string specified, or appends the passed element to the header. If no header is present, one will be automatically created. An empty string can be passed to the methodto clear the contents of the header. </summary>
 /// <param name="headerContent" type="String"> The string used to set the header.As a convenience, non HTMLElement objects can also be passed into the method, and will be treated as strings, with the header innerHTMLset to their default toString implementations.OR</param>
 /// <param name="headerContent" type="HTMLElement"> The HTMLElement to append to OR</param>
 /// <param name="headerContent" type="DocumentFragment"> The document fragment containing elements which are to be added to the header</param>
};
YAHOO.widget.Module.prototype.initDefaultConfig = function() {
   /// <summary> Initializes the custom events for Module which are fired automatically at appropriate times by the Module class. </summary>
};
YAHOO.widget.Node.prototype.setNodesProperty = function(name, value, refresh) {
   /// <summary> Sets the value of property for this node and all loaded descendants.  Only public and defined properties can be set, not methods.  Values for unknown properties will be assigned to the refNode.data object </summary>
 /// <param name="name" type="string">  Name of the property to be set</param>
 /// <param name="value" type="any">  value to be set</param>
 /// <param name="refresh" type="boolean">  if present and true, it does a refresh</param>
};
YAHOO.widget.Node.prototype.appendChild = function(childNode) {
   /// <summary> Appends a node to the child collection. </summary>
   /// <private />
   /// <returns type="Node" />
 /// <param name="childNode" type="Node">  the new node</param>
};
YAHOO.widget.Node.prototype.setDynamicLoad = function(fmDataLoader, iconMode) {
   /// <summary> Configures this node for dynamically obtaining the child datawhen the node is first expanded.  Calling it without the callbackwill turn off dynamic load for the node. </summary>
 /// <param name="fmDataLoader" type="function">  the function that will be used to get the data.</param>
 /// <param name="iconMode" type="int">  configures the icon that is displayed when a dynamicload node is expanded the first time without children.  By default, the "collapse" icon will be used.  If set to 1, the leaf node icon will bedisplayed.</param>
};
YAHOO.widget.Node.prototype.unhighlight = function(_silent) {
   /// <summary> Turns highlighting off a node. </summary>
 /// <param name="_silent" type="boolean">  optional, don't fire the highlightEvent</param>
};
YAHOO.widget.Node.prototype._childrenHighlighted = function() {
   /// <summary> Checks whether all or part of the children of a node are highlighted andsets the node highlight to full, none or partial highlight.If set to propagate it will further call the parent </summary>
   /// <private />
};
YAHOO.widget.Node.prototype.getChildrenEl = function() {
   /// <summary> Returns the div that was generated for this node's children </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.Node.prototype._removeFocus = function() {
   /// <summary> Removes the focus of previously selected Node </summary>
   /// <private />
};
YAHOO.widget.Node.prototype.toggle = function() {
   /// <summary> Expands if node is collapsed, collapses otherwise. </summary>
};
YAHOO.widget.Node.prototype.saveEditorValue = function(editorData) {
   /// <summary> Saves the value entered into the editor. </summary>
   /// <returns type="false or none" />
 /// <param name="editorData" type="YAHOO.widget.TreeView.editorData">   a shortcut to the static object holding editing information</param>
};
YAHOO.widget.Node.prototype.getNodeCount = function() {
   /// <summary> Count of nodes in a branch </summary>
   /// <returns type="int" />
};
YAHOO.widget.Node.prototype.collapse = function() {
   /// <summary> Hides this nodes children (creating them if necessary), changes the toggle style. </summary>
};
YAHOO.widget.Node.prototype.getEditorValue = function(editorData) {
   /// <summary> Returns the value(s) from the input element(s) .Should be overridden by each node type. </summary>
   /// <returns type="any" />
 /// <param name="editorData" type="YAHOO.widget.TreeView.editorData">   a shortcut to the static object holding editing information</param>
};
YAHOO.widget.Node.prototype.toggleHighlight = function() {
   /// <summary> Toggles the highlighted state of a Node </summary>
};
YAHOO.widget.Node.prototype.getHtml = function() {
   /// <summary> Returns the markup for this node and its children. </summary>
   /// <returns type="string" />
};
YAHOO.widget.Node.prototype.getSiblings = function() {
   /// <summary> Returns a node array of this node's siblings, null if none. </summary>
   /// <returns type="" />
};
YAHOO.widget.Node.prototype.hasChildren = function(checkForLazyLoad) {
   /// <summary> Checks if this node has children.  If this node is lazy-loading and thechildren have not been rendered, we do not know whether or not thereare actual children.  In most cases, we need to assume that there arechildren (for instance, the toggle needs to show the expandable presentation state).  In other times we want to know if there are renderedchildren.  For the latter, "checkForLazyLoad" should be false. </summary>
   /// <returns type="boolean" />
 /// <param name="checkForLazyLoad" type="boolean">  should we check for unloaded children?</param>
};
YAHOO.widget.Node.prototype.isDynamic = function() {
   /// <summary> Evaluates if this node's children should be loaded dynamically.  Looks forthe property both in this instance and the root node.  If the tree isdefined to load all children dynamically, the data callback function isdefined in the root node </summary>
   /// <returns type="boolean" />
};
YAHOO.widget.Node.prototype.getEl = function() {
   /// <summary> Returns this node's container html element </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.Node.prototype.loadComplete = function() {
   /// <summary> Load complete is the callback function we pass to the data providerin dynamic load situations. </summary>
};
YAHOO.widget.Node.prototype.init = function(oData, oParent, expanded) {
   /// <summary> Initializes this node, gets some of the properties from the parent </summary>
 /// <param name="oData" type="object">  a string or object containing the data that willbe used to render this node</param>
 /// <param name="oParent" type="Node">  this node's parent node</param>
 /// <param name="expanded" type="boolean">  the initial expanded/collapsed state</param>
};
YAHOO.widget.Node.prototype.appendTo = function(parentNode) {
   /// <summary> Appends this node to the supplied node's child collection </summary>
   /// <returns type="Node" />
 /// <param name="parentNode" type="Node">  the node to append to.</param>
};
YAHOO.widget.Node.prototype.getContentEl = function() {
   /// <summary> Returns the outer html element for this node's content </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.Node.prototype.expand = function() {
   /// <summary> Shows this nodes children (creating them if necessary), changes thetoggle style, and collapses its siblings if multiExpand is not set. </summary>
};
YAHOO.widget.Node.prototype.insertAfter = function(node) {
   /// <summary> Inserts this node after the supplied node </summary>
   /// <returns type="Node" />
 /// <param name="node" type="Node">  the node to insert after</param>
};
YAHOO.widget.Node.prototype.toString = function() {
   /// <summary> Node toString </summary>
   /// <returns type="string" />
};
YAHOO.widget.Node.prototype.getChildrenElId = function() {
   /// <summary> Returns the id for this node's children div </summary>
   /// <returns type="string" />
};
YAHOO.widget.Node.prototype.getDepthStyle = function(depth) {
   /// <summary> Returns the css class for the spacer at the specified depth forthis node.  If this node's ancestor at the specified depthhas a next sibling the presentation is different than if itdoes not have a next sibling </summary>
   /// <returns type="string" />
 /// <param name="depth" type="int"> the depth of the ancestor.</param>
};
YAHOO.widget.Node.prototype.getContentHtml = function() {
   /// <summary> Get the markup for the contents of the node.  This is designed to be overrided so that we cansupport different types of nodes. </summary>
   /// <returns type="string" />
};
YAHOO.widget.Node.prototype.expandAll = function() {
   /// <summary> Recursively expands all of this node's children. </summary>
};
YAHOO.widget.Node.prototype.getToggleEl = function() {
   /// <summary> Returns the element that is being used for this node's toggle. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.Node.prototype.getToggleLink = function() {
   /// <summary> Generates the link that will invoke this node's toggle method </summary>
   /// <returns type="string" />
};
YAHOO.widget.Node.prototype.insertBefore = function(node) {
   /// <summary> Inserts this node before this supplied node </summary>
   /// <returns type="Node" />
 /// <param name="node" type="Node">  the node to insert this node before</param>
};
YAHOO.widget.Node.prototype.editNode = function() {
   /// <summary> pops up the contents editor, if there is one and the node is declared editable </summary>
};
YAHOO.widget.Node.prototype._canHaveFocus = function() {
   /// <summary> Returns true if there are any elements in the node that can accept the real actual browser focus </summary>
   /// <private />
   /// <returns type="boolean" />
};
YAHOO.widget.Node.prototype.focus = function() {
   /// <summary> Sets the focus on the node element.It will only be able to set the focus on nodes that have anchor elements in it.  Toggle or branch icons have anchors and can be focused on.  If will fail in nodes that have no anchor </summary>
   /// <returns type="boolean" />
};
YAHOO.widget.Node.prototype.displayEditedValue = function(value, editorData) {
   /// <summary> Finally displays the newly edited value(s) in the tree.Should be overridden by each node type. </summary>
 /// <param name="value" type="any">  value to be displayed and stored in the node</param>
 /// <param name="editorData" type="YAHOO.widget.TreeView.editorData">   a shortcut to the static object holding editing information</param>
};
YAHOO.widget.Node.prototype.getStyle = function() {
   /// <summary> Returns the css style name for the toggle </summary>
   /// <returns type="string" />
};
YAHOO.widget.Node.prototype.getNodeHtml = function() {
   /// <summary> Get the markup for the node.  This may be overrided so that we cansupport different types of nodes. </summary>
   /// <returns type="string" />
};
YAHOO.widget.Node.prototype.getIconMode = function() {
   /// <summary> Returns the current icon mode.  This refers to the way childless dynamicload nodes appear (this comes into play only after the initial dynamicload request produced no children). </summary>
   /// <returns type="int" />
};
YAHOO.widget.Node.prototype._setHighlightClassName = function() {
   /// <summary> Changes the classNames on the toggle and content containers to reflect the current highlighting </summary>
   /// <private />
};
YAHOO.widget.Node.prototype.hideChildren = function() {
   /// <summary> Hides this node's children </summary>
};
YAHOO.widget.Node.prototype.getAncestor = function(depth) {
   /// <summary> Returns this node's ancestor at the specified depth. </summary>
   /// <returns type="Node" />
 /// <param name="depth" type="int"> the depth of the ancestor.</param>
};
YAHOO.widget.Node.prototype.destroyEditorContents = function(editorData) {
   /// <summary> Node-specific destroy function to empty the contents of the inline editor panel.This function is the worst case alternative that will purge all possible events and remove the editor contents.Method Event.purgeElement is somewhat costly so if it can be replaced by specifc Event.removeListeners, it is better to do so. </summary>
 /// <param name="editorData" type="YAHOO.widget.TreeView.editorData">   a shortcut to the static object holding editing information</param>
};
YAHOO.widget.Node.prototype.showChildren = function() {
   /// <summary> Shows this node's children </summary>
};
YAHOO.widget.Node.prototype.getElId = function() {
   /// <summary> Returns the id for this node's container div </summary>
   /// <returns type="string" />
};
YAHOO.widget.Node.prototype.isRoot = function() {
   /// <summary> Evaluates if this node is the root node of the tree </summary>
   /// <returns type="boolean" />
};
YAHOO.widget.Node.prototype.fillEditorContainer = function(editorData) {
   /// <summary> Placeholder for a function that should provide the inline node label editor.Leaving it set to null will indicate that this node type is not editable.It should be overridden by nodes that provide inline editing.The Node-specific editing element (input box, textarea or whatever) should be inserted into editorData.inputContainer. </summary>
   /// <returns type="" />
 /// <param name="editorData" type="YAHOO.widget.TreeView.editorData">   a shortcut to the static object holding editing information</param>
};
YAHOO.widget.Node.prototype.completeRender = function() {
   /// <summary> Called when we know we have all the child data. </summary>
   /// <returns type="string" />
};
YAHOO.widget.Node.prototype.isChildOf = function(parentNode) {
   /// <summary> Returns true if the Node is a child of supplied Node </summary>
   /// <private />
   /// <returns type="boolean" />
 /// <param name="parentNode" type="Node">  the Node to check</param>
};
YAHOO.widget.Node.prototype.getChildrenHtml = function() {
   /// <summary> Called when first rendering the tree.  We always build the div that willcontain this nodes children, but we don't render the children themselvesunless this node is expanded. </summary>
   /// <private />
   /// <returns type="string" />
};
YAHOO.widget.Node.prototype.refresh = function() {
   /// <summary> Regenerates the html for this node and its children.  To be used when thenode is expanded and new children have been added. </summary>
};
YAHOO.widget.Node.prototype.getToggleElId = function() {
   /// <summary> Returns the id for this node's toggle element </summary>
   /// <returns type="string" />
};
YAHOO.widget.Node.prototype.getNodeDefinition = function() {
   /// <summary> Returns an object which could be used to build a tree out of this node and its children.It can be passed to the tree constructor to reproduce this node as a tree.It will return false if the node or any children loads dynamically, regardless of whether it is loaded or not. </summary>
   /// <returns type="Object | false" />
};
YAHOO.widget.Node.prototype.highlight = function(_silent) {
   /// <summary> Turns highlighting on node. </summary>
 /// <param name="_silent" type="boolean">  optional, don't fire the highlightEvent</param>
};
YAHOO.widget.Node.prototype.renderChildren = function() {
   /// <summary> Generates the markup for the child nodes.  This is not done until the nodeis expanded. </summary>
   /// <private />
   /// <returns type="string" />
};
YAHOO.widget.Node.prototype.getHoverStyle = function() {
   /// <summary> Returns the hover style for the icon </summary>
   /// <returns type="string" />
};
YAHOO.widget.Node.prototype.collapseAll = function() {
   /// <summary> Recursively collapses all of this node's children. </summary>
};
YAHOO.widget.Node.prototype.applyParent = function(parentNode) {
   /// <summary> Certain properties for the node cannot be set until the parentis known. This is called after the node is inserted into a tree.the parent is also applied to this node's children in order tomake it possible to move a branch from one tree to another. </summary>
   /// <returns type="boolean" />
 /// <param name="parentNode" type="Node"> this node's parent node</param>
};
YAHOO.widget.Overlay.prototype.moveTo = function(x, y) {
   /// <summary> Moves the Overlay to the specified position. This function is  identical to calling this.cfg.setProperty("xy", [x,y]); </summary>
 /// <param name="x" type="Number"> The Overlay's new x position</param>
 /// <param name="y" type="Number"> The Overlay's new y position</param>
};
YAHOO.widget.Overlay.prototype.stackIframe = function() {
   /// <summary> Sets the zindex of the iframe shim, if it exists, based on the zindex ofthe Overlay element. The zindex of the iframe is set to be one less than the Overlay element's zindex.NOTE: This method will not bump up the zindex of the Overlay elementto ensure that the iframe shim has a non-negative zindex.If you require the iframe zindex to be 0 or higher, the zindex of the Overlay element should be set to a value greater than 0, before this method is called. </summary>
};
YAHOO.widget.Overlay.prototype.showIframe = function() {
   /// <summary> Shows the iframe shim, if it has been enabled. </summary>
};
YAHOO.widget.Overlay.prototype.configFixedCenter = function(type, args, obj) {
   /// <summary> The default event handler fired when the "fixedcenter" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Overlay.windowResizeHandler = function(e) {
   /// <summary> The DOM event handler used to fire the CustomEvent for window resize </summary>
 /// <param name="e" type="DOMEvent"> The DOM resize event</param>
};
YAHOO.widget.Overlay.prototype.showMacGeckoScrollbars = function() {
   /// <summary> Adds a CSS class ("show-scrollbars") and removes a CSS class ("hide-scrollbars") to the Overlay to fix a bug in Gecko on Mac OS X (https://bugzilla.mozilla.org/show_bug.cgi?id=187435) </summary>
};
YAHOO.widget.Overlay.prototype._getConstrainedPos = function(pos, The) {
   /// <summary> Shared implementation method for getConstrainedX and getConstrainedY.Given a coordinate value, returns the calculated coordinate required to position the Overlay if it is to be constrained to the viewport, based on the current element size, viewport dimensions, scroll values and preventoverlap settings </summary>
   /// <returns type="Number" />
 /// <param name="pos" type="String"> The coordinate which needs to be constrained, either "x" or "y"</param>
 /// <param name="The" type="Number"> coordinate value which needs to be constrained</param>
};
YAHOO.widget.Overlay.prototype.hideMacGeckoScrollbars = function() {
   /// <summary> Adds a CSS class ("hide-scrollbars") and removes a CSS class ("show-scrollbars") to the Overlay to fix a bug in Gecko on Mac OS X (https://bugzilla.mozilla.org/show_bug.cgi?id=187435) </summary>
};
YAHOO.widget.Overlay.prototype._setDomVisibility = function(visible) {
   /// <summary> Internal implementation to set the visibility of the overlay in the DOM. </summary>
 /// <param name="visible" type="boolean"> Whether to show or hide the Overlay's outer element</param>
};
YAHOO.widget.Overlay.prototype.initEvents = function() {
   /// <summary> Initializes the custom events for Overlay which are fired  automatically at appropriate times by the Overlay class. </summary>
};
YAHOO.widget.Overlay.prototype.fitsInViewport = function() {
   /// <summary> Determines if the Overlay (including the offset value defined by Overlay.VIEWPORT_OFFSET) will fit entirely inside the viewport, in both dimensions - width and height. </summary>
   /// <returns type="" />
};
YAHOO.widget.Overlay.prototype.bringToTop = function() {
   /// <summary> Places the Overlay on top of all other instances of YAHOO.widget.Overlay. </summary>
};
YAHOO.widget.Overlay.prototype._processTriggers = function(triggers, mode, fn) {
   /// <summary> Utility method that subscribes or unsubscribes the given function from the list of trigger events provided. </summary>
 /// <param name="triggers" type="Array[String|CustomEvent]"> An array of either CustomEvents, event type strings (e.g. "beforeShow", "windowScroll") to/from which the provided function should be subscribed/unsubscribed respectively.</param>
 /// <param name="mode" type="String"> Either "subscribe" or "unsubscribe", specifying whether or notwe are subscribing or unsubscribing trigger listeners</param>
 /// <param name="fn" type="Function"> The function to be subscribed/unsubscribed to/from the trigger event.Context is always set to the overlay instance, and no additional object argument get passed to the subscribed function.</param>
};
YAHOO.widget.Overlay.prototype.init = function(el, userConfig) {
   /// <summary> The Overlay initialization method, which is executed for Overlay and  all of its subclasses. This method is automatically called by the constructor, and  sets up all DOM references for pre-existing markup, and creates required markup if it is not already present. </summary>
 /// <param name="el" type="String"> The element ID representing the Overlay OR</param>
 /// <param name="el" type="HTMLElement"> The element representing the Overlay</param>
 /// <param name="userConfig" type="Object"> The configuration object literal containing the configuration that should be set for this Overlay. See configuration documentation for more details.</param>
};
YAHOO.widget.Overlay.prototype.configXY = function(type, args, obj) {
   /// <summary> The default event handler fired when the "xy" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Overlay.prototype.toString = function() {
   /// <summary> Returns a String representation of the object. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Overlay.prototype.fillHeight = function(el) {
   /// <summary> Sets the height on the provided header, body or footer element to fill out the height of the container. It determines the height of the containers content box, based on it's configured height value, and sets the height of the autofillheight element to fill out any space remaining after the other standard module element heights have been accounted for.NOTE: This method is not designed to work if an explicit height has not been set on the container, since for an "auto" height container, the heights of the header/body/footer will drive the height of the container. </summary>
 /// <param name="el" type="HTMLElement"> The element which should be resized to fill out the heightof the container element.</param>
};
YAHOO.widget.Overlay.prototype._getPreciseHeight = function(el) {
   /// <summary> Returns the sub-pixel height of the el, using getBoundingClientRect, if available,otherwise returns the offsetHeight </summary>
   /// <private />
   /// <returns type="Float" />
 /// <param name="el" type="HTMLElement"></param>
};
YAHOO.widget.Overlay.prototype.hideIframe = function() {
   /// <summary> Hides the iframe shim, if it has been enabled. </summary>
};
YAHOO.widget.Overlay.prototype.configHeight = function(type, args, obj) {
   /// <summary> The default event handler fired when the "height" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Overlay.prototype.getConstrainedXY = function(x, y) {
   /// <summary> Given x, y coordinate values, returns the calculated coordinates required to position the Overlay if it is to be constrained to the viewport, based on the current element size, viewport dimensions and scroll values. </summary>
   /// <returns type="Array" />
 /// <param name="x" type="Number"> The X coordinate value to be constrained</param>
 /// <param name="y" type="Number"> The Y coordinate value to be constrained</param>
};
YAHOO.widget.Overlay.prototype.configContext = function(type, args, obj) {
   /// <summary> The default event handler fired when the "context" propertyis changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Overlay.prototype._preventOverlap = function(pos, contextEl, overlaySize, viewportSize, docScroll) {
   /// <summary> Helper method, used to position the Overlap to prevent overlap with the context element (used when preventcontextoverlap is enabled) </summary>
   /// <returns type="Number" />
 /// <param name="pos" type="String"> The coordinate to prevent overlap for, either "x" or "y".</param>
 /// <param name="contextEl" type="HTMLElement"> The context element</param>
 /// <param name="overlaySize" type="Number"> The related overlay dimension value (for "x", the width, for "y", the height)</param>
 /// <param name="viewportSize" type="Number"> The related viewport dimension value (for "x", the width, for "y", the height)</param>
 /// <param name="docScroll" type="Object">  The related document scroll value (for "x", the scrollLeft, for "y", the scrollTop)</param>
};
YAHOO.widget.Overlay.prototype.onDomResize = function(e, obj) {
   /// <summary> Event handler fired when the resize monitor element is resized. </summary>
 /// <param name="e" type="DOMEvent"> The resize DOM event</param>
 /// <param name="obj" type="Object"> The scope object</param>
};
YAHOO.widget.Overlay.prototype.configAutoFillHeight = function(type, args, obj) {
   /// <summary> The default event handler fired when the "autofillheight" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Overlay.prototype.configzIndex = function(type, args, obj) {
   /// <summary> The default event handler fired when the "zIndex" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Overlay.prototype.configVisible = function(type, args, obj) {
   /// <summary> The default event handler fired when the "visible" property is changed.  This method is responsible for firing showEventand hideEvent. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configurationhandlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Overlay.prototype._validateAutoFillHeight = function(val) {
   /// <summary> autofillheight validator. Verifies that the autofill value is either null or one of the strings : "body", "header" or "footer". </summary>
   /// <returns type="" />
 /// <param name="val" type="String"></param>
};
YAHOO.widget.Overlay.prototype._alignOnTrigger = function(type, args) {
   /// <summary> Custom Event handler for context alignment triggers. Invokes the align method </summary>
 /// <param name="type" type="String"> The event type (not used by the default implementation)</param>
 /// <param name="args" type="Any[]"> The array of arguments for the trigger event (not used by the default implementation)</param>
};
YAHOO.widget.Overlay.prototype.configWidth = function(type, args, obj) {
   /// <summary> The default event handler fired when the "width" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Overlay.prototype.destroy = function() {
   /// <summary> Removes the Overlay element from the DOM and sets all child elements to null. </summary>
};
YAHOO.widget.Overlay.prototype.configX = function(type, args, obj) {
   /// <summary> The default event handler fired when the "x" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Overlay.prototype.forceContainerRedraw = function() {
   /// <summary> Can be used to force the container to repaint/redraw it's contents.By default applies and then removes a 1px bottom margin through the application/removal of a "yui-force-redraw" class.It is currently used by Overlay to force a repaint for webkit browsers, when centering. </summary>
};
YAHOO.widget.Overlay.prototype._primeXYFromDOM = function() {
   /// <summary> Set's the container's XY value from DOM if not already set.Differs from syncPosition, in that the XY value is only sync'd with DOM if not already set. The method also refire's the XY config property event, so anybeforeMove, Move event listeners are invoked. </summary>
};
YAHOO.widget.Overlay.prototype.configConstrainToViewport = function(type, args, obj) {
   /// <summary> The default event handler fired when the "constraintoviewport" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Overlay.windowScrollHandler = function(e) {
   /// <summary> The DOM event handler used to fire the CustomEvent for window scroll </summary>
 /// <param name="e" type="DOMEvent"> The DOM scroll event</param>
};
YAHOO.widget.Overlay.prototype.center = function() {
   /// <summary> Centers the container in the viewport. </summary>
};
YAHOO.widget.Overlay.prototype._autoFillOnHeightChange = function(type, args, el) {
   /// <summary> The default custom event handler executed when the overlay's height is changed, if the autofillheight property has been set. </summary>
 /// <param name="type" type="String"> The event type</param>
 /// <param name="args" type="Array"> The array of arguments passed to event subscribers</param>
 /// <param name="el" type="HTMLElement"> The header, body or footer element which is to be resized to fillout the containers height</param>
};
YAHOO.widget.Overlay.prototype.align = function(elementAlign, contextAlign, xyOffsetter) {
   /// <summary> Aligns the Overlay to its context element using the specified corner points (represented by the constants TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, and BOTTOM_RIGHT. </summary>
 /// <param name="elementAlign" type="String">  The String representing the corner of the Overlay that should be aligned to the context element</param>
 /// <param name="contextAlign" type="String">  The corner of the context element that the elementAlign corner should stick to.</param>
 /// <param name="xyOffset" type="Number[]"> Optional. A 2 element array specifying the x and y pixel offsets which should be appliedafter aligning the element and context corners. For example, passing in [5, -10] for this value, would offset the Overlay by 5 pixels along the X axis (horizontally) and -10 pixels along the Y axis (vertically) after aligning the specified corners.</param>
};
YAHOO.widget.Overlay.prototype.syncIframe = function() {
   /// <summary> Syncronizes the size and position of iframe shim to that of its corresponding Overlay instance. </summary>
};
YAHOO.widget.Overlay.prototype.configIframe = function(type, args, obj) {
   /// <summary> The default event handler fired when the "iframe" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Overlay.prototype._getComputedHeight = function(el) {
   /// <summary> Determines the content box height of the given element (height of the element, without padding or borders) in pixels. </summary>
   /// <private />
   /// <returns type="Number" />
 /// <param name="el" type="HTMLElement"> The element for which the content height needs to be determined</param>
};
YAHOO.widget.Overlay.prototype.configY = function(type, args, obj) {
   /// <summary> The default event handler fired when the "y" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Overlay.prototype._findTriggerCE = function(t) {
   /// <summary> Helper method to locate the custom event instance for the event name stringpassed in. As a convenience measure, any custom events passed in are returned. </summary>
   /// <private />
 /// <param name="t" type="String|CustomEvent"> Either a CustomEvent, or event type (e.g. "windowScroll") for which a custom event instance needs to be looked up from the Overlay._TRIGGER_MAP.</param>
};
YAHOO.widget.Overlay.prototype.getConstrainedY = function(y) {
   /// <summary> Given y coordinate value, returns the calculated y coordinate required to position the Overlay if it is to be constrained to the viewport, based on the current element size, viewport dimensions and scroll values. </summary>
   /// <returns type="Number" />
 /// <param name="y" type="Number"> The Y coordinate value to be constrained</param>
};
YAHOO.widget.Overlay.prototype.getConstrainedX = function(x) {
   /// <summary> Given x coordinate value, returns the calculated x coordinate required to position the Overlay if it is to be constrained to the viewport, based on the current element size, viewport dimensions and scroll values. </summary>
   /// <returns type="Number" />
 /// <param name="x" type="Number"> The X coordinate value to be constrained</param>
};
YAHOO.widget.Overlay.prototype.syncPosition = function() {
   /// <summary> Synchronizes the Panel's "xy", "x", and "y" properties with the Panel's position in the DOM. This is primarily used to update  position information during drag & drop. </summary>
};
YAHOO.widget.Overlay.prototype.doCenterOnDOMEvent = function() {
   /// <summary> Fixed center event handler used for centering on scroll/resize, but only if the overlay is visible and, if "fixedcenter" is set to "contained", only if the overlay fits within the viewport. </summary>
};
YAHOO.widget.Overlay.prototype.enforceConstraints = function(type, args, obj) {
   /// <summary> The default event handler executed when the moveEvent is fired, if the "constraintoviewport" is set to true. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Overlay.prototype.initDefaultConfig = function() {
   /// <summary> Initializes the class's configurable properties which can be changed using the Overlay's Config object (cfg). </summary>
};
YAHOO.widget.OverlayManager.prototype.toString = function() {
   /// <summary> Returns a string representation of the object. </summary>
   /// <returns type="String" />
};
YAHOO.widget.OverlayManager.prototype.blurAll = function() {
   /// <summary> Removes focus from all registered Overlays in the manager </summary>
};
YAHOO.widget.OverlayManager.prototype.focus = function(overlay) {
   /// <summary> Focuses the specified Overlay </summary>
 /// <param name="overlay" type="Overlay"> The Overlay to focus</param>
 /// <param name="overlay" type="String"> The id of the Overlay to focus</param>
};
YAHOO.widget.OverlayManager.prototype._bindBlur = function(overlay) {
   /// <summary> Subscribes to the Overlay based instance's blurEvent to allow the OverlayManager tomonitor blur state.If the instance already has a blurEvent (e.g. Menu), OverlayManager will subscribe to the existing blurEvent, however if a blurEvent or blur method does not existon the instance, the _bindBlur method will add them, and the blur method update the OverlayManager's state directly. </summary>
 /// <param name="overlay" type="Overlay"> The overlay for which blur needs to be managed</param>
};
YAHOO.widget.OverlayManager.prototype._manageBlur = function(overlay) {
   /// <summary> Updates the state of the OverlayManager and overlay, as a result of the overlaybeing blurred. </summary>
 /// <param name="overlay" type="Overlay"> The overlay instance which got blurred.</param>
};
YAHOO.widget.OverlayManager.prototype._onOverlayBlurHandler = function(p_sType, p_aArgs, p_oOverlay) {
   /// <summary> blurEvent Handler, used to delegate to _manageBlur with the correct arguments. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event  that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oOverlay" type="Overlay"> Object representing the overlay that fired the event.</param>
};
YAHOO.widget.OverlayManager.prototype._manageFocus = function(overlay) {
   /// <summary> Updates the state of the OverlayManager and overlay, as a result of the overlay receiving focus. </summary>
 /// <param name="overlay" type="Overlay"> The overlay instance which got focus.</param>
};
YAHOO.widget.OverlayManager.prototype.find = function(overlay) {
   /// <summary> Attempts to locate an Overlay by instance or ID. </summary>
   /// <returns type="Overlay" />
 /// <param name="overlay" type="Overlay">  An Overlay to locate within the manager</param>
 /// <param name="overlay" type="String">  An Overlay id to locate within the manager</param>
};
YAHOO.widget.OverlayManager.prototype.bringToTop = function(p_oOverlay) {
   /// <summary> Places the specified Overlay instance on top of all other Overlay instances. </summary>
 /// <param name="p_oOverlay" type="YAHOO.widget.Overlay"> Object representing an Overlay instance.</param>
 /// <param name="p_oOverlay" type="String"> String representing the id of an Overlay instance.</param>
};
YAHOO.widget.OverlayManager.prototype.init = function(overlays, userConfig) {
   /// <summary> Initializes the OverlayManager </summary>
 /// <param name="overlays" type="Overlay[]"> Optional. A collection of Overlays to register with the manager.</param>
 /// <param name="userConfig" type="Object">  The object literal representing the user configuration of the OverlayManager</param>
};
YAHOO.widget.OverlayManager.prototype.getActive = function() {
   /// <summary> Returns the currently focused Overlay </summary>
   /// <returns type="Overlay" />
};
YAHOO.widget.OverlayManager.prototype._bindFocus = function(overlay) {
   /// <summary> Subscribes to the Overlay based instance focusEvent, to allow the OverlayManager tomonitor focus state.If the instance already has a focusEvent (e.g. Menu), OverlayManager will subscribe to the existing focusEvent, however if a focusEvent or focus method does not existon the instance, the _bindFocus method will add them, and the focus method will update the OverlayManager's state directly. </summary>
 /// <param name="overlay" type="Overlay"> The overlay for which focus needs to be managed</param>
};
YAHOO.widget.OverlayManager.prototype._onOverlayDestroy = function(p_sType, p_aArgs, p_oOverlay) {
   /// <summary> "destroy" event handler for the Overlay. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event  that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oOverlay" type="Overlay"> Object representing the overlay that fired the event.</param>
};
YAHOO.widget.OverlayManager.prototype._bindDestroy = function(overlay) {
   /// <summary> Subscribes to the Overlay based instance's destroyEvent, to allow the Overlayto be removed for the OverlayManager when destroyed. </summary>
 /// <param name="overlay" type="Overlay"> The overlay instance being managed</param>
};
YAHOO.widget.OverlayManager.prototype.hideAll = function() {
   /// <summary> Hides all Overlays in the manager. </summary>
};
YAHOO.widget.OverlayManager.prototype._syncZIndex = function(overlay) {
   /// <summary> Ensures the zIndex configuration property on the managed overlay based instanceis set to the computed zIndex value from the DOM (with "auto" translating to 0). </summary>
 /// <param name="overlay" type="Overlay"> The overlay instance being managed</param>
};
YAHOO.widget.OverlayManager.prototype.showAll = function() {
   /// <summary> Shows all Overlays in the manager. </summary>
};
YAHOO.widget.OverlayManager.prototype._onOverlayFocusHandler = function(p_sType, p_aArgs, p_oOverlay) {
   /// <summary> focusEvent Handler, used to delegate to _manageFocus with the correct arguments. </summary>
   /// <private />
 /// <param name="p_sType" type="String"> String representing the name of the event  that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
 /// <param name="p_oOverlay" type="Overlay"> Object representing the overlay that fired the event.</param>
};
YAHOO.widget.OverlayManager.prototype.register = function(overlay) {
   /// <summary> Registers an Overlay or an array of Overlays with the manager. Upon registration, the Overlay receives functions for focus and blur, along with CustomEvents for each. </summary>
   /// <returns type="boolean" />
 /// <param name="overlay" type="Overlay">  An Overlay to register with the manager.</param>
 /// <param name="overlay" type="Overlay[]">  An array of Overlays to register with the manager.</param>
};
YAHOO.widget.OverlayManager.prototype.remove = function(overlay) {
   /// <summary> Removes the specified Overlay from the manager </summary>
 /// <param name="overlay" type="Overlay"> The Overlay to remove</param>
 /// <param name="overlay" type="String"> The id of the Overlay to remove</param>
};
YAHOO.widget.OverlayManager.prototype.compareZIndexDesc = function() {
   /// <summary> Used for sorting the manager's Overlays by z-index. </summary>
   /// <private />
   /// <returns type="Number" />
};
YAHOO.widget.OverlayManager.prototype._onOverlayElementFocus = function(p_oEvent) {
   /// <summary> Event handler for the DOM event that is used to focus the Overlay instance as specified by the "focusevent" configuration property. </summary>
   /// <private />
 /// <param name="p_oEvent" type="Event"> Object representing the DOM event object passed back by the event utility (Event).</param>
};
YAHOO.widget.OverlayManager.prototype.initDefaultConfig = function() {
   /// <summary> Initializes the default configuration of the OverlayManager </summary>
};
YAHOO.widget.Paginator.prototype.render = function() {
   /// <summary> Render the pagination controls per the format attribute into thespecified container nodes. </summary>
   /// <returns type="" />
};
YAHOO.widget.Paginator.prototype.getRowsPerPage = function() {
   /// <summary> Get the number of rows per page. </summary>
   /// <returns type="number" />
};
YAHOO.widget.Paginator.prototype._renderTemplate = function(container, template, id_base, hide) {
   /// <summary> Creates the individual ui components and renders them into a container. </summary>
 /// <param name="container" type="HTMLElement">  where to add the ui components</param>
 /// <param name="template" type="String">  the template to use as a guide for rendering</param>
 /// <param name="id_base" type="String">  id base for the container's ui components</param>
 /// <param name="hide" type="Boolean">  leave the container hidden after assembly</param>
};
YAHOO.widget.Paginator.prototype.getTotalRecords = function() {
   /// <summary> Get the total number of records. </summary>
   /// <returns type="number" />
};
YAHOO.widget.Paginator.prototype.getPreviousPage = function() {
   /// <summary> Get the page number of the previous page, or null if the current pageis the first page. </summary>
   /// <returns type="number" />
};
YAHOO.widget.Paginator.prototype.getTotalPages = function() {
   /// <summary> Get the total number of pages in the data set according to the currentrowsPerPage and totalRecords values.  If totalRecords is not set, orset to YAHOO.widget.Paginator.VALUE_UNLIMITED, returnsYAHOO.widget.Paginator.VALUE_UNLIMITED. </summary>
   /// <returns type="number" />
};
YAHOO.widget.Paginator.prototype.setState = function(state) {
   /// <summary> Convenience method to facilitate setting state attributes rowsPerPage,totalRecords, recordOffset in batch.  Also supports calculatingrecordOffset from state.page if state.recordOffset is not provided.Fires only a single pageChange event, if appropriate.This will not fire a changeRequest event. </summary>
 /// <param name="state" type="Object">  Object literal of attribute:value pairs to set</param>
};
YAHOO.widget.Paginator.prototype.updateVisibility = function() {
   /// <summary> Hides the containers if there is only one page of data and attributealwaysVisible is false.  Conversely, it displays the containers if eitherthere is more than one page worth of data or alwaysVisible is turned on. </summary>
};
YAHOO.widget.Paginator.prototype._selfSubscribe = function() {
   /// <summary> Subscribes to instance attribute change events to automate certainbehaviors. </summary>
};
YAHOO.widget.Paginator.prototype.initEvents = function() {
   /// <summary> Initialize this instance's CustomEvents. </summary>
   /// <private />
};
YAHOO.widget.Paginator.prototype._firePageChange = function(state) {
   /// <summary> Fires a pageChange event in the form of a standard attribute changeevent with additional properties prevState and newState. </summary>
 /// <param name="state" type="Object">  the result of getState(oldState)</param>
};
YAHOO.widget.Paginator.prototype.setStartIndex = function(offsetter, silent) {
   /// <summary> Move the record offset to a new starting index.  This will likely causethe calculated current page to change.  You should probably use setPage. </summary>
 /// <param name="offset" type="number">  the new record offset</param>
 /// <param name="silent" type="boolean">  whether to forcibly avoid firing the changeRequest event</param>
};
YAHOO.widget.Paginator.prototype.destroy = function() {
   /// <summary> Removes controls from the page and unhooks events. </summary>
};
YAHOO.widget.Paginator.prototype.initUIComponents = function() {
   /// <summary> Initialize registered ui components onto this instance. </summary>
   /// <private />
};
YAHOO.widget.Paginator.prototype.getState = function(changes) {
   /// <summary> Get an object literal describing the current state of the paginator.  Ifan object literal of proposed values is passed, the proposed state willbe returned as an object literal with the following keys:paginator - instance of the Paginatorpage - numbertotalRecords - numberrecordOffset - numberrowsPerPage - numberrecords - [ start_index, end_index ]before - (OPTIONAL) { state object literal for current state } </summary>
   /// <returns type="object" />
 /// <param name="changes" type="object">  OPTIONAL object literal with proposed valuesSupported change keys include:rowsPerPagetotalRecordsrecordOffset ORpage</param>
};
YAHOO.widget.Paginator.prototype.hasPreviousPage = function() {
   /// <summary> Is there a page before the current page? </summary>
   /// <returns type="boolean" />
};
YAHOO.widget.Paginator.prototype.getStartIndex = function() {
   /// <summary> Get the index of the first record on the current page </summary>
   /// <returns type="number" />
};
YAHOO.widget.Paginator.prototype.setTotalRecords = function(total, silent) {
   /// <summary> Set the total number of records. </summary>
 /// <param name="total" type="number">  the new total number of records</param>
 /// <param name="silent" type="boolean">  whether to forcibly avoid firing the changeRequest event</param>
};
YAHOO.widget.Paginator.prototype.hasPage = function(page) {
   /// <summary> Does the requested page have any records? </summary>
   /// <returns type="boolean" />
 /// <param name="page" type="number">  the page in question</param>
};
YAHOO.widget.Paginator.prototype.setRowsPerPage = function(rpp, silent) {
   /// <summary> Set the number of rows per page. </summary>
 /// <param name="rpp" type="number">  the new number of rows per page</param>
 /// <param name="silent" type="boolean">  whether to forcibly avoid firing thechangeRequest event</param>
};
YAHOO.widget.Paginator.prototype.setPage = function(newPage, silent) {
   /// <summary> Set the current page to the provided page number if possible. </summary>
 /// <param name="newPage" type="number">  the new page number</param>
 /// <param name="silent" type="boolean">  whether to forcibly avoid firing thechangeRequest event</param>
};
YAHOO.widget.Paginator.prototype.hasNextPage = function() {
   /// <summary> Are there records on the next page? </summary>
   /// <returns type="boolean" />
};
YAHOO.widget.Paginator.prototype.getCurrentPage = function() {
   /// <summary> Get the page number corresponding to the current record offset. </summary>
   /// <returns type="number" />
};
YAHOO.widget.Paginator.prototype._syncRecordOffset = function(e) {
   /// <summary> Sets recordOffset to the starting index of the previous page whentotalRecords is reduced below the current recordOffset. </summary>
 /// <param name="e" type="Event">  totalRecordsChange event</param>
};
YAHOO.widget.Paginator.prototype._handleStateChange = function(e) {
   /// <summary> Fires the pageChange event when the state attributes have changed insuch a way as to locate the current recordOffset on a new page. </summary>
 /// <param name="e" type="Event">  the attribute change event</param>
};
YAHOO.widget.PaginatorisNumeric = function(v) {
   /// <summary> Similar to YAHOO.lang.isNumber, but allows numeric strings.  This isis used for attribute validation in conjunction with getters that returnnumbers. </summary>
 /// <param name="v" type="Number|String">  value to be checked for number or numeric string</param>
};
YAHOO.widget.Paginator.prototype.initConfig = function() {
   /// <summary> Initialize the Paginator's attributes (see YAHOO.util.Element classAttributeProvider). </summary>
   /// <private />
};
YAHOO.widget.Paginator.prototype.getContainerNodes = function() {
   /// <summary> Get the configured container nodes </summary>
   /// <returns type="Array" />
};
YAHOO.widget.Paginator.prototype.getPageRecords = function(page) {
   /// <summary> Get the start and end record indexes of the specified page. </summary>
   /// <returns type="Array" />
 /// <param name="page" type="number">  (optional) The page (current page if not specified)</param>
};
YAHOO.widget.Paginator.prototype.getNextPage = function() {
   /// <summary> Get the page number of the next page, or null if the current page is thelast page. </summary>
   /// <returns type="number" />
};
YAHOO.widget.Paginator.prototype.renderUIComponent = function(marker, id_base) {
   /// <summary> Replaces a marker node with a rendered UI component, determined by theyui-pg-ui-(UI component class name) in the marker's className. e.g.yui-pg-ui-PageLinks => new YAHOO.widget.Paginator.ui.PageLinks(this) </summary>
 /// <param name="marker" type="HTMLElement">  the marker node to replace</param>
 /// <param name="id_base" type="String">  string base the component's generated id</param>
};
YAHOO.widget.PaginatortoNumber = function(n) {
   /// <summary> Return a number or null from input </summary>
   /// <returns type="" />
 /// <param name="n" type="Number|String">  a number or numeric string</param>
};
YAHOO.widget.Paginator.ui.CurrentPageReport.prototype.destroy = function() {
   /// <summary> Removes the link/span node and clears event listenersremoval. </summary>
   /// <private />
};
YAHOO.widget.Paginator.ui.CurrentPageReport.init = function(p) {
   /// <summary> Decorates Paginator instances with new attributes. Called duringPaginator instantiation. </summary>
 /// <param name="p" type="Paginator">  Paginator instance to decorate</param>
};
YAHOO.widget.Paginator.ui.CurrentPageReport.sprintf = function(template, values) {
   /// <summary> Replace place holders in a string with the named values found in anobject literal. </summary>
   /// <returns type="string" />
 /// <param name="template" type="string">  The content string containing place holders</param>
 /// <param name="values" type="object">  The key:value pairs used to replace the place holders</param>
};
YAHOO.widget.Paginator.ui.CurrentPageReport.prototype.render = function(id_base) {
   /// <summary> Generate the span containing info formatted per the pageReportTemplateattribute. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="id_base" type="string">  used to create unique ids for generated nodes</param>
};
YAHOO.widget.Paginator.ui.CurrentPageReport.prototype.update = function(e) {
   /// <summary> Regenerate the content of the span if appropriate. CallsCurrentPageReport.sprintf with the value of the pageReportTemplateattribute and the value map returned from pageReportValueGeneratorfunction. </summary>
 /// <param name="e" type="CustomEvent">  The calling change event</param>
};
YAHOO.widget.Paginator.ui.FirstPageLink.prototype.destroy = function() {
   /// <summary> Removes the link/span node and clears event listenersremoval. </summary>
   /// <private />
};
YAHOO.widget.Paginator.ui.FirstPageLink.init = function(p) {
   /// <summary> Decorates Paginator instances with new attributes. Called duringPaginator instantiation. </summary>
 /// <param name="p" type="Paginator">  Paginator instance to decorate</param>
};
YAHOO.widget.Paginator.ui.FirstPageLink.prototype.render = function(id_base) {
   /// <summary> Generate the nodes and return the appropriate node given the currentpagination state. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="id_base" type="string">  used to create unique ids for generated nodes</param>
};
YAHOO.widget.Paginator.ui.FirstPageLink.prototype.update = function(e) {
   /// <summary> Swap the link and span nodes if appropriate. </summary>
 /// <param name="e" type="CustomEvent">  The calling change event</param>
};
YAHOO.widget.Paginator.ui.FirstPageLink.prototype.onClick = function(e) {
   /// <summary> Listener for the link's onclick event.  Pass new value to setPage method. </summary>
 /// <param name="e" type="DOMEvent">  The click event</param>
};
YAHOO.widget.Paginator.ui.LastPageLink.prototype.destroy = function() {
   /// <summary> Removes the link/span node and clears event listeners </summary>
   /// <private />
};
YAHOO.widget.Paginator.ui.LastPageLink.init = function(paginator) {
   /// <summary> Decorates Paginator instances with new attributes. Called duringPaginator instantiation. </summary>
 /// <param name="paginator" type="Paginator">  Paginator instance to decorate</param>
};
YAHOO.widget.Paginator.ui.LastPageLink.prototype.render = function(id_base) {
   /// <summary> Generate the nodes and return the appropriate node given the currentpagination state. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="id_base" type="string">  used to create unique ids for generated nodes</param>
};
YAHOO.widget.Paginator.ui.LastPageLink.prototype.update = function(e) {
   /// <summary> Swap the link, span, and na nodes if appropriate. </summary>
 /// <param name="e" type="CustomEvent">  The calling change event (ignored)</param>
};
YAHOO.widget.Paginator.ui.LastPageLink.prototype.onClick = function(e) {
   /// <summary> Listener for the link's onclick event.  Passes to setPage method. </summary>
 /// <param name="e" type="DOMEvent">  The click event</param>
};
YAHOO.widget.Paginator.ui.NextPageLink.prototype.destroy = function() {
   /// <summary> Removes the link/span node and clears event listeners </summary>
   /// <private />
};
YAHOO.widget.Paginator.ui.NextPageLink.init = function(p) {
   /// <summary> Decorates Paginator instances with new attributes. Called duringPaginator instantiation. </summary>
 /// <param name="p" type="Paginator">  Paginator instance to decorate</param>
};
YAHOO.widget.Paginator.ui.NextPageLink.prototype.render = function(id_base) {
   /// <summary> Generate the nodes and return the appropriate node given the currentpagination state. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="id_base" type="string">  used to create unique ids for generated nodes</param>
};
YAHOO.widget.Paginator.ui.NextPageLink.prototype.update = function(e) {
   /// <summary> Swap the link and span nodes if appropriate. </summary>
 /// <param name="e" type="CustomEvent">  The calling change event</param>
};
YAHOO.widget.Paginator.ui.NextPageLink.prototype.onClick = function(e) {
   /// <summary> Listener for the link's onclick event.  Passes to setPage method. </summary>
 /// <param name="e" type="DOMEvent">  The click event</param>
};
YAHOO.widget.Paginator.ui.PageLinks.prototype.render = function(id_base) {
   /// <summary> Generate the nodes and return the container node containing page linksappropriate to the current pagination state. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="id_base" type="string">  used to create unique ids for generated nodes</param>
};
YAHOO.widget.Paginator.ui.PageLinks.prototype.rebuild = function(e) {
   /// <summary> Force a rebuild of the page links. </summary>
 /// <param name="e" type="CustomEvent">  The calling change event</param>
};
YAHOO.widget.Paginator.ui.PageLinks.prototype.update = function(e) {
   /// <summary> Update the links if appropriate </summary>
 /// <param name="e" type="CustomEvent">  The calling change event</param>
};
YAHOO.widget.Paginator.ui.PageLinks.init = function(p) {
   /// <summary> Decorates Paginator instances with new attributes. Called duringPaginator instantiation. </summary>
 /// <param name="p" type="Paginator">  Paginator instance to decorate</param>
};
YAHOO.widget.Paginator.ui.PageLinks.prototype.onClick = function(e) {
   /// <summary> Listener for the container's onclick event.  Looks for qualifying linkclicks, and pulls the page number from the link's page attribute.Sends link's page attribute to the Paginator's setPage method. </summary>
 /// <param name="e" type="DOMEvent">  The click event</param>
};
YAHOO.widget.Paginator.ui.PageLinks.prototype.destroy = function() {
   /// <summary> Removes the page links container node and clears event listeners </summary>
   /// <private />
};
YAHOO.widget.Paginator.ui.PageLinks.calculateRange = function(currentPage, totalPages, numPages) {
   /// <summary> Calculates start and end page numbers given a current page, attemptingto keep the current page in the middle </summary>
   /// <returns type="Array" />
 /// <param name="currentPage" type="int">  The current page</param>
 /// <param name="totalPages" type="int">   (optional) Maximum number of pages</param>
 /// <param name="numPages" type="int">     (optional) Preferred number of pages in range</param>
};
YAHOO.widget.Paginator.ui.PreviousPageLink.prototype.destroy = function() {
   /// <summary> Removes the link/span node and clears event listeners </summary>
   /// <private />
};
YAHOO.widget.Paginator.ui.PreviousPageLink.init = function(p) {
   /// <summary> Decorates Paginator instances with new attributes. Called duringPaginator instantiation. </summary>
 /// <param name="p" type="Paginator">  Paginator instance to decorate</param>
};
YAHOO.widget.Paginator.ui.PreviousPageLink.prototype.render = function(id_base) {
   /// <summary> Generate the nodes and return the appropriate node given the currentpagination state. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="id_base" type="string">  used to create unique ids for generated nodes</param>
};
YAHOO.widget.Paginator.ui.PreviousPageLink.prototype.update = function(e) {
   /// <summary> Swap the link and span nodes if appropriate. </summary>
 /// <param name="e" type="CustomEvent">  The calling change event</param>
};
YAHOO.widget.Paginator.ui.PreviousPageLink.prototype.onClick = function(e) {
   /// <summary> Listener for the link's onclick event.  Passes to setPage method. </summary>
 /// <param name="e" type="DOMEvent">  The click event</param>
};
YAHOO.widget.Paginator.ui.RowsPerPageDropdown.prototype.render = function(id_base) {
   /// <summary> Generate the select and option nodes and returns the select node. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="id_base" type="string">  used to create unique ids for generated nodes</param>
};
YAHOO.widget.Paginator.ui.RowsPerPageDropdown.prototype.rebuild = function() {
   /// <summary> (Re)generate the select options. </summary>
};
YAHOO.widget.Paginator.ui.RowsPerPageDropdown.prototype.update = function(e) {
   /// <summary> Select the appropriate option if changed. </summary>
 /// <param name="e" type="CustomEvent">  The calling change event</param>
};
YAHOO.widget.Paginator.ui.RowsPerPageDropdown.init = function(p) {
   /// <summary> Decorates Paginator instances with new attributes. Called duringPaginator instantiation. </summary>
 /// <param name="p" type="Paginator">  Paginator instance to decorate</param>
};
YAHOO.widget.Paginator.ui.RowsPerPageDropdown.prototype.destroy = function() {
   /// <summary> Removes the select node and clears event listeners </summary>
   /// <private />
};
YAHOO.widget.Paginator.ui.RowsPerPageDropdown.prototype.onChange = function(e) {
   /// <summary> Listener for the select's onchange event.  Sent to setRowsPerPage method. </summary>
 /// <param name="e" type="DOMEvent">  The change event</param>
};
YAHOO.widget.Paginator.ui.RowsPerPageDropdown.prototype._handleTotalRecordsChange = function(e) {
   /// <summary> Updates the all option value (and Paginator's rowsPerPage attribute ifnecessary) in response to a change in the Paginator's totalRecords. </summary>
 /// <param name="e" type="Event">  attribute change event</param>
};
YAHOO.widget.Paginator.ui.YourComponent.prototype.initListeners = function() {
   /// <summary> Subscribe to the Paginator's events that will affect this component's ui </summary>
};
YAHOO.widget.Paginator.ui.YourComponent.prototype.render = function(id_base) {
   /// <summary> Generate the nodes and return the appropriate node given the currentpagination state. </summary>
   /// <returns type="HTMLElement" />
 /// <param name="id_base" type="string">  used to create unique ids for generated nodes</param>
};
YAHOO.widget.Paginator.ui.YourComponent.prototype.initUI = function(id_base) {
   /// <summary> Initialize the DOM nodes managed by this component </summary>
   /// <private />
 /// <param name="id_base" type="string">  used to create unique ids for generated nodes</param>
};
YAHOO.widget.Paginator.ui.YourComponent.prototype.update = function(e) {
   /// <summary> Make any necessary changes to the component nodes </summary>
 /// <param name="e" type="CustomEvent">  The calling change event</param>
};
YAHOO.widget.Paginator.ui.YourComponent.init = function(p) {
   /// <summary> Decorates Paginator instances with new attributes. Called duringPaginator instantiation. </summary>
 /// <param name="p" type="Paginator">  Paginator instance to decorate</param>
};
YAHOO.widget.Paginator.ui.YourComponent.prototype.onClick = function(e) {
   /// <summary> Listener for a DOM event from a managed element.  Pass new value toPaginator.setStartIndex(..), .setPage(..) etc to fire off changeRequestevents.  DO NOT modify the managed element's state here.  That shouldhappen in response to the Paginator's recordOffsetChange event (et al) </summary>
 /// <param name="e" type="DOMEvent">  The click event</param>
};
YAHOO.widget.Paginator.ui.YourComponent.prototype.bindUI = function() {
   /// <summary> Attach DOM event listeners to the nodes managed by this component </summary>
   /// <private />
};
YAHOO.widget.Paginator.ui.YourComponent.prototype.destroy = function() {
   /// <summary> Remove the generated DOM structure </summary>
   /// <private />
};
YAHOO.widget.Paginator.ui.YourComponent.prototype.rebuild = function(e) {
   /// <summary> Make more substantial changes in a separate method if necessary </summary>
 /// <param name="e" type="CustomEvent">  the calling change event</param>
};
YAHOO.widget.Panel.prototype._removeFocusHandlers = function(p_sType, p_aArgs) {
   /// <summary> "hideMask" event handler that removes all "focus" event handlers added by the "addFocusEventHandlers" method. </summary>
 /// <param name="p_sType" type="String">  Event type</param>
 /// <param name="p_aArgs" type="Array">  Event Arguments</param>
};
YAHOO.widget.Panel.prototype.setFirstLastFocusable = function() {
   /// <summary> Sets the firstElement and lastElement instance propertiesto the first and last focusable elements in the Panel. </summary>
};
YAHOO.widget.Panel.prototype.configClose = function(type, args, obj) {
   /// <summary> The default event handler fired when the "close" property is changed.The method controls the appending or hiding of the close icon at the top right of the Panel. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Panel.prototype.render = function(appendToNode) {
   /// <summary> Renders the Panel by inserting the elements that are not already in the main Panel into their correct places. Optionally appends the Panel to the specified node prior to the render's execution. NOTE: For Panels without existing markup, the appendToNode argument is REQUIRED. If this argument is ommitted and the current element is not present in the document, the function will return false, indicating that the render was a failure. </summary>
   /// <returns type="boolean" />
 /// <param name="appendToNode" type="String"> The element id to which the Module should be appended to prior to rendering OR</param>
 /// <param name="appendToNode" type="HTMLElement"> The element to which the Module should be appended to prior to rendering</param>
};
YAHOO.widget.Panel.prototype._doClose = function(e) {
   /// <summary> Event handler for the close icon </summary>
 /// <param name="e" type="DOMEvent"></param>
};
YAHOO.widget.Panel.prototype.stackMask = function() {
   /// <summary> Sets the zindex of the mask, if it exists, based on the zindex of the Panel element. The zindex of the mask is set to be one less than the Panel element's zindex.NOTE: This method will not bump up the zindex of the Panelto ensure that the mask has a non-negative zindex. If you require themask zindex to be 0 or higher, the zindex of the Panel should be set to a value higher than 0, before this method is called. </summary>
};
YAHOO.widget.Panel.prototype._renderBody = function(moduleElement) {
   /// <summary> Renders the currently set body into it's proper position under the module element. If the module element is not provided, "this.innerElement" is used. </summary>
 /// <param name="moduleElement" type="HTMLElement"> Optional. A reference to the module element.</param>
};
YAHOO.widget.Panel.prototype._createHiddenFocusElement = function() {
   /// <summary> Creates a hidden focusable element, used to focus on,to enforce modality for browsers in which focus cannotbe applied to the container box. </summary>
   /// <private />
};
YAHOO.widget.Panel.prototype._renderHeader = function(moduleElement) {
   /// <summary> Renders the currently set header into it's proper position under the module element. If the module element is not provided, "this.innerElement" is used. </summary>
 /// <param name="moduleElement" type="HTMLElement"> Optional. A reference to the module element</param>
};
YAHOO.widget.Panel.prototype.hideMask = function() {
   /// <summary> Hides the modality mask. </summary>
};
YAHOO.widget.Panel.prototype.sizeMask = function() {
   /// <summary> Sets the size of the modality mask to cover the entire scrollable area of the document </summary>
};
YAHOO.widget.Panel.prototype.focusFirst = function() {
   /// <summary> Sets focus to the first element in the Panel. </summary>
};
YAHOO.widget.Panel.prototype.configModal = function(type, args, obj) {
   /// <summary> The default event handler fired when the "modal" property is changed. This handler subscribes or unsubscribes to the show and hideevents to handle the display or hide of the modality mask. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Panel.prototype.configKeyListeners = function(type, args, obj) {
   /// <summary> The default event handler fired when the "keylisteners" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configurationhandlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Panel.prototype.init = function(el, userConfig) {
   /// <summary> The Overlay initialization method, which is executed for Overlay and all of its subclasses. This method is automatically called by the constructor, and  sets up all DOM references for pre-existing markup, and creates required markup if it is not already present. </summary>
 /// <param name="el" type="String"> The element ID representing the Overlay OR</param>
 /// <param name="el" type="HTMLElement"> The element representing the Overlay</param>
 /// <param name="userConfig" type="Object"> The configuration object literal containing the configuration that should be set for this Overlay. See configuration documentation for more details.</param>
};
YAHOO.widget.Panel.prototype.toString = function() {
   /// <summary> Returns a String representation of the object. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Panel.prototype.buildWrapper = function() {
   /// <summary> Builds the wrapping container around the Panel that is used for positioning the shadow and matte underlays. The container element is assigned to a  local instance variable called container, and the element is reinserted inside of it. </summary>
};
YAHOO.widget.Panel.prototype.destroy = function() {
   /// <summary> Removes the Panel element from the DOM and sets all child elementsto null. </summary>
};
YAHOO.widget.Panel.prototype.removeMask = function() {
   /// <summary> Removes the modality mask. </summary>
};
YAHOO.widget.Panel.prototype.configHeight = function(type, args, obj) {
   /// <summary> The default event handler fired when the "height" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Panel.prototype._addFocusHandlers = function(p_sType, p_aArgs) {
   /// <summary> "showMask" event handler that adds a "focus" event handler to allfocusable elements in the document to enforce a Panel instance's modality from being compromised. </summary>
 /// <param name="p_sType" type="String">  Custom event type</param>
 /// <param name="p_aArgs" type="Array">  Custom event arguments</param>
};
YAHOO.widget.Panel.prototype.showMask = function() {
   /// <summary> Shows the modality mask. </summary>
};
YAHOO.widget.Panel.prototype.configStrings = function() {
   /// <summary> The default handler for the "strings" property </summary>
};
YAHOO.widget.Panel.prototype._onElementFocus = function(e) {
   /// <summary> "focus" event handler for a focuable element. Used to automaticallyblur the element when it receives focus to ensure that a Panelinstance's modality is not compromised. </summary>
   /// <private />
 /// <param name="e" type="Event"> The DOM event object</param>
};
YAHOO.widget.Panel.prototype.registerDragDrop = function() {
   /// <summary> Registers the Panel's header for drag & drop capability. </summary>
};
YAHOO.widget.Panel.prototype.forceUnderlayRedraw = function() {
   /// <summary> Forces the underlay element to be repainted through the application/removal of a yui-force-redraw class to the underlay element. </summary>
};
YAHOO.widget.Panel.prototype.configUnderlay = function(type, args, obj) {
   /// <summary> The default event handler fired when the "underlay" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Panel.prototype.focusLast = function() {
   /// <summary> Sets focus to the last element in the Panel. </summary>
};
YAHOO.widget.Panel.prototype.configWidth = function(type, args, obj) {
   /// <summary> The default event handler fired when the "width" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Panel.prototype.configDraggable = function(type, args, obj) {
   /// <summary> The default event handler fired when the "draggable" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Panel.prototype._renderFooter = function(moduleElement) {
   /// <summary> Renders the currently set footer into it's proper position under the module element. If the module element is not provided, "this.innerElement" is used. </summary>
 /// <param name="moduleElement" type="HTMLElement"> Optional. A reference to the module element</param>
};
YAHOO.widget.Panel.prototype.buildMask = function() {
   /// <summary> Builds the mask that is laid over the document when the Panel is configured to be modal. </summary>
};
YAHOO.widget.Panel.prototype._autoFillOnHeightChange = function(type, args, el) {
   /// <summary> The default custom event handler executed when the Panel's height is changed, if the autofillheight property has been set. </summary>
 /// <param name="type" type="String"> The event type</param>
 /// <param name="args" type="Array"> The array of arguments passed to event subscribers</param>
 /// <param name="el" type="HTMLElement"> The header, body or footer element which is to be resized to fillout the containers height</param>
};
YAHOO.widget.Panel.prototype.initEvents = function() {
   /// <summary> Initializes the custom events for Module which are fired automatically at appropriate times by the Module class. </summary>
};
YAHOO.widget.Panel.prototype.getFocusableElements = function(root) {
   /// <summary> Returns an array of the currently focusable items which reside withinPanel. The set of focusable elements the method looks for are definedin the Panel.FOCUSABLE static property </summary>
 /// <param name="root" type="HTMLElement"> element to start from.</param>
};
YAHOO.widget.Panel.prototype.configzIndex = function(type, args, obj) {
   /// <summary> The default event handler fired when the "zIndex" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Panel.prototype.sizeUnderlay = function() {
   /// <summary> Adjusts the size of the shadow based on the size of the element. </summary>
};
YAHOO.widget.Panel.prototype.setTabLoop = function(firstElement, lastElement) {
   /// <summary> Sets up a tab, shift-tab loop between the first and last elementsprovided. NOTE: Sets up the preventBackTab and preventTabOut KeyListenerinstance properties, which are reset everytime this method is invoked. </summary>
 /// <param name="firstElement" type="HTMLElement"></param>
 /// <param name="lastElement" type="HTMLElement"></param>
};
YAHOO.widget.Panel.prototype.initDefaultConfig = function() {
   /// <summary> Initializes the class's configurable properties which can be changed using the Panel's Config object (cfg). </summary>
};
YAHOO.widget.PieChart.prototype._getDataField = function() {
   /// <summary> Getter for the dataField attribute. </summary>
   /// <private />
};
YAHOO.widget.PieChart.prototype._setDataField = function() {
   /// <summary> Setter for the dataField attribute. </summary>
   /// <private />
};
YAHOO.widget.PieChart.prototype._setCategoryField = function() {
   /// <summary> Setter for the categoryField attribute. </summary>
   /// <private />
};
YAHOO.widget.PieChart.prototype._getCategoryField = function() {
   /// <summary> Getter for the categoryField attribute. </summary>
   /// <private />
};
YAHOO.widget.PieChart.prototype._initAttributes = function() {
   /// <summary> Initializes the attributes. </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype.getDataTable = function() {
   /// <summary> Returns the element containing the console's DataTableinstance. </summary>
   /// <returns type="" />
};
YAHOO.widget.ProfilerViewer.prototype.show = function() {
   /// <summary> Shows the viewer canvas. </summary>
   /// <private />
   /// <returns type="" />
};
YAHOO.widget.ProfilerViewer.prototype.refreshData = function() {
   /// <summary> Refreshes the data displayed in the ProfilerViewer. When called,this will invoke a refresh of the DataTable and (if displayed)the Chart. </summary>
   /// <returns type="" />
};
YAHOO.widget.ProfilerViewer.prototype._initViewerDOM = function() {
   /// <summary> Set up the DOM structure for the ProfilerViewer canvas,including the holder for the DataTable. </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype._drawChartLegend = function() {
   /// <summary> Set up the Chart's legend </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype._thClickHandler = function() {
   /// <summary> Event handler for clicks on the DataTable's sortable columnheads. </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype.initAttributes = function(attr) {
   /// <summary> setAttributeConfigs TabView specific properties. </summary>
   /// <private />
 /// <param name="attr" type="Object"> Hash of initial attributes</param>
};
YAHOO.widget.ProfilerViewer.prototype.getHeadEl = function() {
   /// <summary> Returns the element containing the console's header. </summary>
   /// <returns type="" />
};
YAHOO.widget.ProfilerViewer.prototype.getChartEl = function() {
   /// <summary> Returns the element containing the console's chart. </summary>
   /// <returns type="" />
};
YAHOO.widget.ProfilerViewer.prototype._createButton = function() {
   /// <summary> Create anchor elements for use as buttons. Args: labelis text to appear on the face of the button, parentElis the el to which the anchor will be attached, positionis true for inserting as the first node and false forinserting as the last node of the parentEl. </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype._refreshDataTable = function() {
   /// <summary> Refresh DataTable, getting new data from Profiler. </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype._sortedByChange = function() {
   /// <summary> Proxy the sort event in DataTable into the ProfilerViewerattribute. </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype._initDataTable = function() {
   /// <summary> Set up the DataTable. </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype._toggleVisible = function() {
   /// <summary> Toggles visibility of the viewer canvas. </summary>
   /// <private />
   /// <returns type="" />
};
YAHOO.widget.ProfilerViewer.prototype.getBodyEl = function() {
   /// <summary> Returns the element containing the console's body, includingthe chart and the datatable.. </summary>
   /// <returns type="" />
};
YAHOO.widget.ProfilerViewer.prototype.hide = function() {
   /// <summary> Hides the viewer canvas. </summary>
   /// <private />
   /// <returns type="" />
};
YAHOO.widget.ProfilerViewer.prototype._initChart = function() {
   /// <summary> Set up the Chart. </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype._getChartData = function() {
   /// <summary> Get data for the Chart from DataTable recordset </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype._dataTableRenderHandler = function() {
   /// <summary> Proxy the render event in DataTable into the ProfilerViewerattribute. </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype._sizeChartCanvas = function() {
   /// <summary> Resize the chart's canvas if based on number of recordsreturned from the chart's datasource. </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype.toString = function() {
   /// <summary> Provides a readable name for the ProfilerViewer instance. </summary>
   /// <private />
   /// <returns type="" />
};
YAHOO.widget.ProfilerViewer.prototype._initLauncherDOM = function() {
   /// <summary> Set up the DOM structure for the ProfilerViewer launcher. </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype._arraySum = function() {
   /// <summary> Utility function for array sums. </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype._createProfilerViewerElement = function() {
   /// <summary> If no element is passed in, create it as the first elementin the document. </summary>
   /// <private />
   /// <returns type="" />
};
YAHOO.widget.ProfilerViewer.prototype._getSeriesDef = function() {
   /// <summary> Build series definition based on current configuration attributes. </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype._initChartDOM = function() {
   /// <summary> Set up the DOM structure for the ProfilerViewer canvas. </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype.getTableEl = function() {
   /// <summary> Returns the element containing the console's dataTable. </summary>
   /// <returns type="" />
};
YAHOO.widget.ProfilerViewer.prototype._setBusyState = function() {
   /// <summary> Set's console busy state. </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype._refreshChart = function() {
   /// <summary> Refresh chart, getting new data from table. </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype._render = function() {
   /// <summary> Render the viewer canvas </summary>
   /// <private />
   /// <returns type="" />
};
YAHOO.widget.ProfilerViewer.prototype._getProfilerData = function() {
   /// <summary> Retrieves data from Profiler, filtering and sorting as neededbased on current widget state.  Adds calculated percentagecolumn and function name to data returned by Profiler. </summary>
   /// <private />
};
YAHOO.widget.ProfilerViewer.prototype.getChart = function() {
   /// <summary> Returns the element containing the console's Chart instance. </summary>
   /// <returns type="" />
};
YAHOO.widget.ProgressBar.prototype.redraw = function() {
   /// <summary> Recalculates the bar size and position and redraws it </summary>
   /// <returns type="" />
};
YAHOO.widget.ProgressBar.prototype.render = function(el, before) {
   /// <summary> Renders the ProgressBar into the given container.  If the container has other content, the ProgressBar will be appended to it.If the second argument is provided, the ProgressBar will be inserted before the given child.The method is chainable since it returns a reference to this instance. </summary>
   /// <returns type="YAHOO.widget.ProgressBar" />
 /// <param name="el" type="HTML Element">   HTML element that will contain the ProgressBar</param>
 /// <param name="before" type="HTML Element">   (optional) If present, the ProgressBar will be inserted before this element.</param>
};
YAHOO.widget.ProgressBar.prototype._init = function(oConfigs) {
   /// <summary> Initialization code for the widget, separate from the constructor to allow for overriding/patching.It is called after initAttributes </summary>
 /// <param name="oConfigs" type="Object">  (Optional) Object literal definition of configuration values.</param>
};
YAHOO.widget.ProgressBar.prototype._valueChange = function() {
   /// <summary> Called in response to a change in the value attribute.Moves the bar to reflect the new value </summary>
   /// <private />
   /// <returns type="" />
};
YAHOO.widget.ProgressBar.prototype._fixEdges = function() {
   /// <summary> Due to rounding differences, some browsers fail to cover the whole area with the mask quadrants when the width or height is odd.  This methodstretches the lower and/or right quadrants to make the difference. </summary>
   /// <private />
   /// <returns type="" />
};
YAHOO.widget.ProgressBar.prototype.initAttributes = function(oConfigs) {
   /// <summary> Implementation of Element's abstract method. Sets up config values. </summary>
   /// <private />
 /// <param name="oConfigs" type="Object">  (Optional) Object literal definition of configuration values.</param>
};
YAHOO.widget.ProgressBar.prototype._heightChange = function(value) {
   /// <summary> Method called when the height attribute is changed </summary>
   /// <private />
   /// <returns type="" />
 /// <param name="value" type="int or string"> New height, in pixels if int or string including units</param>
};
YAHOO.widget.ProgressBar.prototype.destroy = function() {
   /// <summary> Destroys the ProgressBar, related objects and unsubscribes from all events </summary>
   /// <returns type="" />
};
YAHOO.widget.ProgressBar.prototype._animSetter = function() {
   /// <summary> Called in response to a change in the anim attribute.It creates and sets up or destroys the instance of the animation utility that will move the bar </summary>
   /// <private />
   /// <returns type="" />
};
YAHOO.widget.ProgressBar.prototype._setAriaText = function() {
   /// <summary> Utility method to set the ARIA value attributes </summary>
   /// <private />
   /// <returns type="" />
};
YAHOO.widget.ProgressBar.prototype._widthChange = function(value) {
   /// <summary> Method called when the height attribute is changed </summary>
   /// <private />
   /// <returns type="" />
 /// <param name="value" type="int or string"> New width, in pixels if int or string including units</param>
};
YAHOO.widget.ProgressBar.prototype._recalculateConstants = function() {
   /// <summary> Calculates some auxiliary values to make the rendering faster </summary>
   /// <private />
   /// <returns type="" />
};
YAHOO.widget.RadioCellEditor.prototype.renderForm = function() {
   /// <summary> Render a form with input(s) type=radio. </summary>
};
YAHOO.widget.RadioCellEditor.prototype.handleDisabledBtns = function() {
   /// <summary> After rendering form, if disabledBtns is set to true, then sets up a mechanismto save input without them. </summary>
};
YAHOO.widget.RadioCellEditor.prototype.focus = function() {
   /// <summary> Sets focus in RadioCellEditor. </summary>
};
YAHOO.widget.RadioCellEditor.prototype.getInputValue = function() {
   /// <summary> Retrieves input value from RadioCellEditor. </summary>
};
YAHOO.widget.RadioCellEditor.prototype.resetForm = function() {
   /// <summary> Resets RadioCellEditor UI to initial state. </summary>
};
YAHOO.widget.Record.prototype.getCount = function() {
   /// <summary> Returns unique count assigned at instantiation. </summary>
   /// <returns type="" />
};
YAHOO.widget.Record.prototype.getData = function(sField) {
   /// <summary> Returns data for the Record for a field if given, or the entire objectliteral otherwise. </summary>
   /// <returns type="" />
 /// <param name="sField" type="String">  (Optional) The field from which to retrieve data value.</param>
};
YAHOO.widget.Record.prototype.getId = function() {
   /// <summary> Returns unique ID assigned at instantiation. </summary>
   /// <returns type="" />
};
YAHOO.widget.Record.prototype.setData = function(sKey, oData) {
   /// <summary> Sets given data at the given key. Use the RecordSet method setValue to triggerevents. </summary>
 /// <param name="sKey" type="String">  The key of the new value.</param>
 /// <param name="oData" type="MIXED">  The new value.</param>
};
YAHOO.widget.RecordSet.prototype.hasRecords = function(index, range) {
   /// <summary> Returns a boolean indicating whether Records exist in the RecordSet at thespecified index range.  Returns true if and only if a Record exists at eachindex in the range. </summary>
   /// <returns type="Boolean" />
 /// <param name="index" type=""></param>
 /// <param name="range" type=""></param>
};
YAHOO.widget.RecordSet.prototype.updateRecord = function(record, oData) {
   /// <summary> Updates given Record with given data. </summary>
   /// <returns type="YAHOO.widget.Record" />
 /// <param name="record" type="YAHOO.widget.Record | Number | String">  A Record instance,a RecordSet position index, or a Record ID.</param>
 /// <param name="oData" type="Object">  Object literal of new data.</param>
};
YAHOO.widget.RecordSet.prototype.replaceRecords = function(data) {
   /// <summary> Replaces all Records in RecordSet with new object literal data. </summary>
   /// <returns type="YAHOO.widget.Record || YAHOO.widget.Record[]" />
 /// <param name="data" type="Object || Object[]">  An object literal of data or an array ofdata object literals.</param>
};
YAHOO.widget.RecordSet.prototype.addRecord = function(oData, index) {
   /// <summary> Adds one Record to the RecordSet at the given index. If index is null,then adds the Record to the end of the RecordSet. </summary>
   /// <returns type="YAHOO.widget.Record" />
 /// <param name="oData" type="Object">  An object literal of data.</param>
 /// <param name="index" type="Number">  (optional) Position index.</param>
};
YAHOO.widget.RecordSet.prototype.updateKey = function() {
};
YAHOO.widget.RecordSet.prototype.deleteRecord = function(index, range) {
   /// <summary> Removes the Record at the given position index from the RecordSet. If a rangeis also provided, removes that many Records, starting from the index. Lengthof RecordSet is correspondingly shortened. </summary>
   /// <returns type="Object" />
 /// <param name="index" type="Number">  Record's RecordSet position index.</param>
 /// <param name="range" type="Number">  (optional) How many Records to delete.</param>
};
YAHOO.widget.RecordSet.prototype._setRecord = function(oData, index) {
   /// <summary> Sets/replaces one Record to the RecordSet at the given index.  ExistingRecords with higher indexes are not shifted.  If no index specified, theRecord is added to the end of the RecordSet. </summary>
   /// <private />
   /// <returns type="YAHOO.widget.Record" />
 /// <param name="oData" type="Object">  An object literal of data.</param>
 /// <param name="index" type="Number">  (optional) Position index.</param>
};
YAHOO.widget.RecordSet.prototype.getLength = function() {
   /// <summary> Returns the number of Records held in the RecordSet. </summary>
   /// <returns type="Number" />
};
YAHOO.widget.RecordSet.prototype.getRecord = function(record) {
   /// <summary> Returns Record by ID or RecordSet position index. </summary>
   /// <returns type="YAHOO.widget.Record" />
 /// <param name="record" type="YAHOO.widget.Record | Number | String">  Record instance,RecordSet position index, or Record ID.</param>
};
YAHOO.widget.RecordSet.prototype.getId = function() {
   /// <summary> Returns unique name of the RecordSet instance. </summary>
   /// <returns type="String" />
};
YAHOO.widget.RecordSet.prototype.toString = function() {
   /// <summary> Public accessor to the unique name of the RecordSet instance. </summary>
   /// <returns type="String" />
};
YAHOO.widget.RecordSet.prototype.reverseRecords = function() {
   /// <summary> Reverses all Records, so ["one", "two", "three"] becomes ["three", "two", "one"]. </summary>
   /// <returns type="YAHOO.widget.Record[]" />
};
YAHOO.widget.RecordSet.prototype.addRecords = function(aData, index) {
   /// <summary> Adds multiple Records at once to the RecordSet at the given index with thegiven object literal data. If index is null, then the new Records areadded to the end of the RecordSet. </summary>
   /// <returns type="YAHOO.widget.Record[]" />
 /// <param name="aData" type="Object[]">  An object literal data or an array of data object literals.</param>
 /// <param name="index" type="Number">  (optional) Position index.</param>
};
YAHOO.widget.RecordSet.prototype.setRecords = function(aData, index) {
   /// <summary> Sets or replaces multiple Records at once to the RecordSet with the givendata, starting at the given index. If index is not specified, then the newRecords are added to the end of the RecordSet. </summary>
   /// <returns type="YAHOO.widget.Record[]" />
 /// <param name="aData" type="Object[]">  An array of object literal data.</param>
 /// <param name="index" type="Number">  (optional) Position index.</param>
};
YAHOO.widget.RecordSet.prototype._deleteRecord = function(index, range) {
   /// <summary> Deletes Records from the RecordSet at the given index. If range is null,then only one Record is deleted. </summary>
   /// <private />
 /// <param name="index" type="Number">  Position index.</param>
 /// <param name="range" type="Number">  (optional) How many Records to delete</param>
};
YAHOO.widget.RecordSet.prototype.getRecords = function(index, range) {
   /// <summary> Returns an array of Records from the RecordSet. </summary>
   /// <returns type="YAHOO.widget.Record[]" />
 /// <param name="index" type="Number">  (optional) Recordset position index of which Record tostart at.</param>
 /// <param name="range" type="Number">  (optional) Number of Records to get.</param>
};
YAHOO.widget.RecordSet.prototype.sortRecords = function(fnSort, desc, field) {
   /// <summary> Sorts all Records by given function. Records keep their unique IDs but willhave new RecordSet position indexes. </summary>
   /// <returns type="YAHOO.widget.Record[]" />
 /// <param name="fnSort" type="Function">  Reference to a sort function.</param>
 /// <param name="desc" type="Boolean">  True if sort direction is descending, false if sortdirection is ascending.</param>
 /// <param name="field" type="String">  The field to sort by, from sortOptions.field</param>
};
YAHOO.widget.RecordSet.prototype.updateRecordValue = function(record, sKey, oData) {
   /// <summary> Sets given Record at given key to given data. </summary>
 /// <param name="record" type="YAHOO.widget.Record | Number | String">  A Record instance,a RecordSet position index, or a Record ID.</param>
 /// <param name="sKey" type="String">  Key name.</param>
 /// <param name="oData" type="Object">  New data.</param>
};
YAHOO.widget.RecordSet.prototype.getRecordIndex = function(oRecord) {
   /// <summary> Returns current position index for the given Record. </summary>
   /// <returns type="Number" />
 /// <param name="oRecord" type="YAHOO.widget.Record">  Record instance.</param>
};
YAHOO.widget.RecordSet.prototype.setRecord = function(oData, index) {
   /// <summary> Sets or replaces one Record to the RecordSet at the given index. UnlikeaddRecord, an existing Record at that index is not shifted to preserve it.If no index is specified, it adds the Record to the end of the RecordSet. </summary>
   /// <returns type="YAHOO.widget.Record" />
 /// <param name="oData" type="Object">  An object literal of data.</param>
 /// <param name="index" type="Number">  (optional) Position index.</param>
};
YAHOO.widget.RecordSet.prototype.reset = function() {
   /// <summary> Deletes all Records from the RecordSet. </summary>
};
YAHOO.widget.RecordSet.prototype.deleteRecords = function(index, range) {
   /// <summary> Removes the Record at the given position index from the RecordSet. If a rangeis also provided, removes that many Records, starting from the index. Lengthof RecordSet is correspondingly shortened. </summary>
   /// <returns type="Object[]" />
 /// <param name="index" type="Number">  Record's RecordSet position index.</param>
 /// <param name="range" type="Number">  (optional) How many Records to delete.</param>
};
YAHOO.widget.RecordSet.prototype._addRecord = function(oData, index) {
   /// <summary> Adds one Record to the RecordSet at the given index. If index is null,then adds the Record to the end of the RecordSet. </summary>
   /// <private />
   /// <returns type="YAHOO.widget.Record" />
 /// <param name="oData" type="Object">  An object literal of data.</param>
 /// <param name="index" type="Number">  (optional) Position index.</param>
};
YAHOO.widget.RootNode.prototype.getNodeCount = function() {
   /// <summary> Count of nodes in tree.  It overrides Nodes.getNodeCount because the root node should not be counted. </summary>
   /// <returns type="int" />
};
YAHOO.widget.RootNode.prototype.getNodeDefinition = function() {
   /// <summary> Returns an object which could be used to build a tree out of this node and its children.It can be passed to the tree constructor to reproduce this node as a tree.Since the RootNode is automatically created by treeView, its own definition is excluded from the returned node definitionwhich only contains its children. </summary>
   /// <returns type="Object | false" />
};
YAHOO.widget.SWF.prototype.eventHandler = function(swfid, event) {
   /// <summary> Handles an event coming from within the SWF and delegate itto a specific instance of SWF. </summary>
   /// <private />
 /// <param name="swfid" type="String">  the id of the SWF dispatching the event</param>
 /// <param name="event" type="Object">  the event being transmitted.</param>
};
YAHOO.widget.SWF.prototype.callSWF = function(func, args) {
   /// <summary> Calls a specific function exposed by the SWF'sExternalInterface. </summary>
 /// <param name="func" type="String">  the name of the function to call</param>
 /// <param name="args" type="Object">  the set of arguments to pass to the function.</param>
};
YAHOO.widget.SWF.prototype.toString = function() {
   /// <summary> Public accessor to the unique name of the SWF instance. </summary>
   /// <returns type="String" />
};
YAHOO.widget.ScrollingDataTable.prototype.clearScrollPositions = function() {
   /// <summary> Clears stored scroll positions to interrupt the automatic restore mechanism.Useful for setting scroll positions programmatically rather than as part ofthe post-render cleanup process. </summary>
   /// <private />
};
YAHOO.widget.ScrollingDataTable.prototype.onColumnChange = function(oArgs) {
   /// <summary> Handles Column mutations </summary>
 /// <param name="oArgs" type="Object">  Custom Event data.</param>
};
YAHOO.widget.ScrollingDataTable.prototype.scrollTo = function(to) {
   /// <summary> Scrolls to given row or cell </summary>
 /// <param name="to" type="YAHOO.widget.Record | HTMLElement ">  Itme to scroll to.</param>
};
YAHOO.widget.ScrollingDataTable.prototype.setColumnWidth = function(oColumn, nWidth) {
   /// <summary> Sets given Column to given pixel width. If new width is less than minWidthwidth, sets to minWidth. Updates oColumn.width value. </summary>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="nWidth" type="Number">  New width in pixels.</param>
};
YAHOO.widget.ScrollingDataTable.prototype.validateColumnWidths = function(oArgcolumn) {
   /// <summary> For one or all Columns of a ScrollingDataTable, when Column is not hidden,and width is not set, syncs widths of header and body cells and validates that width against minWidth and/or maxAutoWidth as necessary. </summary>
 /// <param name="oArg.column" type="YAHOO.widget.Column">  (optional) One Column to validate. If null, all Columns' widths are validated.</param>
};
YAHOO.widget.ScrollingDataTable.prototype.insertColumn = function(oColumn, index) {
   /// <summary> Inserts given Column at the index if given, otherwise at the end. NOTE: Youcan only add non-nested Columns and top-level parent Columns. You cannot adda nested Column to an existing parent. </summary>
   /// <returns type="YAHOO.widget.Column" />
 /// <param name="oColumn" type="Object | YAHOO.widget.Column">  Object literal Columndefinition or a Column instance.</param>
 /// <param name="index" type="Number">  (optional) New tree index.</param>
};
YAHOO.widget.ScrollingDataTable.prototype.initAttributes = function(oConfigs) {
   /// <summary> Implementation of Element's abstract method. Sets up config values. </summary>
   /// <private />
 /// <param name="oConfigs" type="Object">  (Optional) Object literal definition of configuration values.</param>
};
YAHOO.widget.ScrollingDataTable.prototype._validateColumnWidth = function(oColumn, elTd) {
   /// <summary> Helper function calculates and sets a validated width for a Column in a ScrollingDataTable. </summary>
   /// <private />
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="elTd" type="HTMLElement">  TD element to validate against.</param>
};
YAHOO.widget.ScrollingDataTable.prototype._focusEl = function(el) {
   /// <summary> Sets focus on the given element. </summary>
   /// <private />
 /// <param name="el" type="HTMLElement">  Element.</param>
};
YAHOO.widget.ScrollingDataTable.prototype._syncScrollX = function() {
   /// <summary> Snaps container height for x-scrolling tables in IE. Syncs message TBODY width. </summary>
   /// <private />
};
YAHOO.widget.ScrollingDataTable.prototype._initBdThEl = function(elTh, oColumn) {
   /// <summary> Populates TH element for the body THEAD element. </summary>
   /// <private />
 /// <param name="elTh" type="HTMLElement">  TH element reference.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column object.</param>
};
YAHOO.widget.ScrollingDataTable.prototype._destroyBdTheadEl = function() {
   /// <summary> Destroy's the DataTable body THEAD element, if available. </summary>
   /// <private />
};
YAHOO.widget.ScrollingDataTable.prototype._initTableEl = function() {
   /// <summary> Initializes ScrollingDataTable TABLE elements into the two inner containers. </summary>
   /// <private />
};
YAHOO.widget.ScrollingDataTable.prototype._initTheadEl = function(elHdTable, elTable) {
   /// <summary> Initializes ScrollingDataTable THEAD elements into the two inner containers. </summary>
   /// <private />
 /// <param name="elHdTable" type="HTMLElement">  (optional) Fixed header TABLE element reference.</param>
 /// <param name="elTable" type="HTMLElement">  (optional) TABLE element reference.</param>
};
YAHOO.widget.ScrollingDataTable.prototype.showTableMessage = function(sHTML, sClassName) {
   /// <summary> Displays message within secondary TBODY. </summary>
 /// <param name="sHTML" type="String">  (optional) Value for innerHTMlang.</param>
 /// <param name="sClassName" type="String">  (optional) Classname.</param>
};
YAHOO.widget.ScrollingDataTable.prototype._syncScrollY = function() {
   /// <summary> Snaps container width for y-scrolling tables. </summary>
   /// <private />
};
YAHOO.widget.ScrollingDataTable.prototype._destroyHdTableEl = function() {
   /// <summary> Destroy's the DataTable head TABLE element, if available. </summary>
   /// <private />
};
YAHOO.widget.ScrollingDataTable.prototype.getHdTableEl = function() {
   /// <summary> Returns DOM reference to the DataTable's fixed header TABLE element. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.ScrollingDataTable.prototype._onTheadKeydown = function(e, oSelf) {
   /// <summary> Handles keydown events on the THEAD element. </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  The key event.</param>
 /// <param name="oSelf" type="YAHOO.widget.ScrollingDataTable">  ScrollingDataTable instance.</param>
};
YAHOO.widget.ScrollingDataTable.prototype.getBdContainerEl = function() {
   /// <summary> Returns DOM reference to the DataTable's scrolling body container element. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.ScrollingDataTable.prototype._initDomElements = function(elContainer) {
   /// <summary> Initializes DOM elements for a ScrollingDataTable, including creation oftwo separate TABLE elements. </summary>
   /// <private />
 /// <param name="elContainer" type="HTMLElement | String} HTML DIV element by reference or ID. return {Boolean">  False in case of error, otherwise true</param>
};
YAHOO.widget.ScrollingDataTable.prototype._syncScroll = function() {
   /// <summary> Syncs padding around scrollable tables, including Column header right-paddingand container width and height. </summary>
   /// <private />
};
YAHOO.widget.ScrollingDataTable.prototype.disable = function() {
   /// <summary> Disables ScrollingDataTable UI. </summary>
};
YAHOO.widget.ScrollingDataTable.prototype._setOverhangValue = function(nBorderWidth) {
   /// <summary> Sets Column header overhang to given width. </summary>
   /// <private />
 /// <param name="nBorderWidth" type="Number">  Value of new border for overhang.</param>
};
YAHOO.widget.ScrollingDataTable.prototype._initCaptionEl = function(sCaption) {
   /// <summary> Creates HTML markup CAPTION element. </summary>
   /// <private />
 /// <param name="sCaption" type="String">  Text for caption.</param>
};
YAHOO.widget.ScrollingDataTable.prototype.removeColumn = function(oColumn) {
   /// <summary> Removes given Column. NOTE: You cannot remove nested Columns. You can only removenon-nested Columns, and top-level parent Columns (which will remove allchildren Columns). </summary>
   /// <returns type="YAHOO.widget.Column" />
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
};
YAHOO.widget.ScrollingDataTable.prototype._runRenderChain = function() {
   /// <summary> Internal wrapper calls run() on render Chain instance. </summary>
   /// <private />
};
YAHOO.widget.ScrollingDataTable.prototype._destroyContainerEl = function(elContainer) {
   /// <summary> Destroy's the DataTable outer and inner container elements, if available. </summary>
   /// <private />
 /// <param name="elContainer" type="HTMLElement">  Reference to the container element.</param>
};
YAHOO.widget.ScrollingDataTable.prototype.getBdTableEl = function() {
   /// <summary> Returns DOM reference to the DataTable's scrolling body TABLE element. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.ScrollingDataTable.prototype.getHdContainerEl = function() {
   /// <summary> Returns DOM reference to the DataTable's fixed header container element. </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.ScrollingDataTable.prototype._onScroll = function(e, oSelf) {
   /// <summary> Syncs scrolltop and scrollleft of all TABLEs. </summary>
   /// <private />
 /// <param name="e" type="HTMLEvent">  The scroll event.</param>
 /// <param name="oSelf" type="YAHOO.widget.ScrollingDataTable">  ScrollingDataTable instance.</param>
};
YAHOO.widget.ScrollingDataTable.prototype._retoreScrollPositions = function() {
   /// <summary> Restores scroll positions to stored value. </summary>
   /// <private />
};
YAHOO.widget.ScrollingDataTable.prototype._initBdTheadEl = function(elTable) {
   /// <summary> Initializes body THEAD element. </summary>
   /// <private />
   /// <returns type="HTMLElement" />
 /// <param name="elTable" type="HTMLElement">  TABLE element into which to create THEAD.</param>
};
YAHOO.widget.ScrollingDataTable.prototype._initTbodyEl = function(elTable) {
   /// <summary> Initializes ScrollingDataTable TBODY element for data </summary>
   /// <private />
 /// <param name="elTable" type="HTMLElement">  TABLE element into which to create TBODY .</param>
};
YAHOO.widget.ScrollingDataTable.prototype._storeScrollPositions = function() {
   /// <summary> Stores scroll positions so they can be restored after a render. </summary>
   /// <private />
};
YAHOO.widget.ScrollingDataTable.prototype._initContainerEl = function(elContainer) {
   /// <summary> Initializes the DataTable outer container element and creates inner headerand body container elements. </summary>
   /// <private />
 /// <param name="elContainer" type="HTMLElement | String">  HTML DIV element by reference or ID.</param>
};
YAHOO.widget.ScrollingDataTable.prototype.reorderColumn = function(oColumn, index) {
   /// <summary> Removes given Column and inserts into given tree index. NOTE: Youcan only reorder non-nested Columns and top-level parent Columns. You cannotreorder a nested Column to an existing parent. </summary>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column instance.</param>
 /// <param name="index" type="Number">  New tree index.</param>
};
YAHOO.widget.ScrollingDataTable.prototype._initThEl = function(elTh, oColumn) {
   /// <summary> SDT changes ID so as not to duplicate the accessibility TH IDs. </summary>
   /// <private />
 /// <param name="elTh" type="HTMLElement">  TH element reference.</param>
 /// <param name="oColumn" type="YAHOO.widget.Column">  Column object.</param>
};
YAHOO.widget.ScrollingDataTable.prototype._syncScrollOverhang = function() {
   /// <summary> Adds/removes Column header overhang as necesary. </summary>
   /// <private />
};
YAHOO.widget.SimpleDialog.prototype.configIcon = function(type, args, obj) {
   /// <summary> Fired when the "icon" property is set. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.SimpleDialog.prototype.init = function(el, userConfig) {
   /// <summary> The SimpleDialog initialization method, which is executed for SimpleDialog and all of its subclasses. This method is automatically called by the constructor, and  sets up all DOM references for pre-existing markup, and creates required markup if it is not already present. </summary>
 /// <param name="el" type="String"> The element ID representing the SimpleDialog OR</param>
 /// <param name="el" type="HTMLElement"> The element representing the SimpleDialog</param>
 /// <param name="userConfig" type="Object"> The configuration object literal containing the configuration that should be set for this SimpleDialog. See configuration documentation for more details.</param>
};
YAHOO.widget.SimpleDialog.prototype.setBody = function(bodyContent) {
   /// <summary> Sets the SimpleDialog's body content to the HTML specified. If no body is present, one will be automatically created. An empty string can be passed to the method to clear the contents of the body.NOTE: SimpleDialog provides the textand icon configuration properties to set the contentsof it's body element in accordance with the UI design for a SimpleDialog (an icon and message text). Calling setBody on the SimpleDialog will not enforce this UI design constraint and will replace the entire contents of the SimpleDialog body. It should only be used if you wish the replace the default icon/text body structure of a SimpleDialog with your own custom markup. </summary>
 /// <param name="bodyContent" type="String"> The HTML used to set the body. As a convenience, non HTMLElement objects can also be passed into the method, and will be treated as strings, with the body innerHTMLset to their default toString implementations.OR</param>
 /// <param name="bodyContent" type="HTMLElement"> The HTMLElement to add as the first and only child of the body element.OR</param>
 /// <param name="bodyContent" type="DocumentFragment"> The document fragment containing elements which are to be added to the body</param>
};
YAHOO.widget.SimpleDialog.prototype.toString = function() {
   /// <summary> Returns a string representation of the object. </summary>
   /// <returns type="String" />
};
YAHOO.widget.SimpleDialog.prototype.configText = function(type, args, obj) {
   /// <summary> Fired when the "text" property is set. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.SimpleDialog.prototype.registerForm = function() {
   /// <summary> Prepares the SimpleDialog's internal FORM object, creating one if one is not currently present, and adding the value hidden field. </summary>
};
YAHOO.widget.SimpleDialog.prototype.initDefaultConfig = function() {
   /// <summary> Initializes the class's configurable properties which can be changed using the SimpleDialog's Config object (cfg). </summary>
};
YAHOO.widget.SimpleEditor.prototype._setCurrentEvent = function(ev) {
   /// <summary> Sets the current event property </summary>
   /// <private />
 /// <param name="ev" type="Event"> The event to cache</param>
};
YAHOO.widget.SimpleEditor.prototype.show = function() {
   /// <summary> This method needs to be called if the Editor was hidden (like in a TabView or Panel). It is used to reset the editor after being in a container that was set to display none. </summary>
};
YAHOO.widget.SimpleEditor.prototype.focus = function() {
   /// <summary> Attempt to set the focus of the iframes window. </summary>
};
YAHOO.widget.SimpleEditor.prototype.cmd_inserthtml = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('inserthtml') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.SimpleEditor.prototype.initAttributes = function(attr) {
   /// <summary> Initializes all of the configuration attributes used to create the editor. </summary>
 /// <param name="attr" type="Object"> Object literal specifying a set of configuration attributes used to create the editor.</param>
};
YAHOO.widget.SimpleEditor.prototype.cmd_bold = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('bold') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.SimpleEditor.prototype.filter_invalid_lists = function(String) {
   /// <summary> Filters invalid ol and ul list markup, converts this: .. to this: .. </summary>
 /// <param name="String" type=""> html The HTML string to filter</param>
};
YAHOO.widget.SimpleEditor.prototype._checkLoaded = function(raw) {
   /// <summary> Called from a setTimeout loop to check if the iframes body.onload event has fired, then it will init the editor. </summary>
   /// <private />
 /// <param name="raw" type="Boolean"> Don't add events.</param>
};
YAHOO.widget.SimpleEditor.prototype._removeEditorEvents = function() {
   /// <summary> This method removes the listeners on the Editors document (for disabling). </summary>
   /// <private />
};
YAHOO.widget.SimpleEditor.prototype._toggleDesignMode = function() {
   /// <summary> Toggles the designMode property of the iFrame document on and off. </summary>
   /// <private />
   /// <returns type="String" />
};
YAHOO.widget.SimpleEditor.prototype._setupDD = function() {
   /// <summary> Sets up the DD instance used from the 'drag' config option. </summary>
   /// <private />
};
YAHOO.widget.SimpleEditor.prototype._fixNodes = function() {
   /// <summary> Fix href and imgs as well as remove invalid HTML. </summary>
   /// <private />
};
YAHOO.widget.SimpleEditor.prototype._handleAfterNodeChange = function() {
   /// <summary> Fires after a nodeChange happens to setup the things that where reset on the node change (button state). </summary>
   /// <private />
};
YAHOO.widget.SimpleEditor.prototype._fixListDupIds = function() {
   /// <summary> Some browsers will duplicate the id of an LI when created in designMode.This method will fix the duplicate id issue. However it will only preserve the first element in the document list with the unique id. </summary>
   /// <private />
};
YAHOO.widget.SimpleEditor.prototype.init = function() {
   /// <summary> The Editor class' initialization method </summary>
};
YAHOO.widget.SimpleEditor.prototype.cmd_insertunorderedlist = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('insertunorderedlist') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.SimpleEditor.prototype._handleFormSubmit = function(ev) {
   /// <summary> Handles the form submission. </summary>
   /// <private />
 /// <param name="ev" type="Object"> The Form Submit Event</param>
};
YAHOO.widget.SimpleEditor.prototype._handleMouseDown = function(ev) {
   /// <summary> Handles all mousedown events inside the iFrame document. </summary>
   /// <private />
 /// <param name="ev" type="Event"> The event we are working on.</param>
};
YAHOO.widget.SimpleEditor.prototype._handleFocus = function(e) {
   /// <summary> Handles the focus of the iframe. Note, this is window focus event, not an Editor focus event. </summary>
   /// <private />
 /// <param name="e" type="Event"> The DOM Event</param>
};
YAHOO.widget.SimpleEditor.prototype._handleFontSize = function(o) {
   /// <summary> Handles the font size button in the toolbar. </summary>
   /// <private />
 /// <param name="o" type="Object"> Object returned from Toolbar's buttonClick Event</param>
};
YAHOO.widget.SimpleEditor.prototype._initEditorEvents = function() {
   /// <summary> This method sets up the listeners on the Editors document. </summary>
   /// <private />
};
YAHOO.widget.SimpleEditor.prototype.nodeChange = function(force) {
   /// <summary> Handles setting up the toolbar buttons, getting the Dom path, fixing nodes. </summary>
 /// <param name="force" type="Boolean"> Optional paramenter to skip the threshold counter</param>
};
YAHOO.widget.SimpleEditor.prototype._updateMenuChecked = function(button, value, The) {
   /// <summary> Gets the menu from a button instance, if the menu is not rendered it will render it. It will then search the menu for the specified value, unchecking all other items and checking the specified on. </summary>
   /// <private />
 /// <param name="button" type="Object"> The command identifier of the button you want to check</param>
 /// <param name="value" type="String"> The value of the menu item you want to check</param>
 /// <param name="The" type="YAHOO.widget.Toolbar"> Toolbar instance the button belongs to (defaults to this.toolbar)</param>
};
YAHOO.widget.SimpleEditor.prototype._cleanClassName = function(str) {
   /// <summary> Makes a useable classname from dynamic data, by dropping it to lowercase and replacing spaces with -'s. </summary>
   /// <private />
   /// <returns type="String" />
 /// <param name="str" type="String"> The classname to clean up</param>
};
YAHOO.widget.SimpleEditor.prototype._setDesignMode = function(state) {
   /// <summary> Sets the designMode property of the iFrame document's body. </summary>
   /// <private />
 /// <param name="state" type="String"> This should be either on or off</param>
};
YAHOO.widget.SimpleEditor.prototype.cmd_fontname = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('fontname') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.SimpleEditor.prototype._handleMouseUp = function(ev) {
   /// <summary> Handles all mouseup events inside the iFrame document. </summary>
   /// <private />
 /// <param name="ev" type="Event"> The event we are working on.</param>
};
YAHOO.widget.SimpleEditor.prototype._render = function() {
   /// <summary> Causes the toolbar and the editor to render and replace the textarea. </summary>
   /// <private />
};
YAHOO.widget.SimpleEditor.prototype._getSelection = function() {
   /// <summary> Handles the different selection objects across the A-Grade list. </summary>
   /// <private />
   /// <returns type="Object" />
};
YAHOO.widget.SimpleEditor.prototype._createIframe = function(id) {
   /// <summary> _createIframe </summary>
   /// <private />
   /// <returns type="Object" />
 /// <param name="id" type="String"> The string ID to prefix the iframe with</param>
};
YAHOO.widget.SimpleEditor.prototype.cmd_forecolor = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('forecolor') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.SimpleEditor.prototype._handleBlur = function(e) {
   /// <summary> Handles the blur of the iframe. Note, this is window blur event, not an Editor blur event. </summary>
   /// <private />
 /// <param name="e" type="Event"> The DOM Event</param>
};
YAHOO.widget.SimpleEditor.prototype._getDoc = function() {
   /// <summary> Get the Document of the IFRAME </summary>
   /// <private />
   /// <returns type="Object" />
};
YAHOO.widget.SimpleEditor.prototype.filter_all_rgb = function(String) {
   /// <summary> Converts all RGB color strings found in passed string to a hex color, example: style="color: rgb(0, 255, 0)" converts to style="color: #00ff00" </summary>
   /// <returns type="" />
 /// <param name="String" type=""> str The HTML string to filter</param>
};
YAHOO.widget.SimpleEditor.prototype.cmd_italic = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('italic') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.SimpleEditor.prototype._handleInsertImageWindowClose = function() {
   /// <summary> Handles the closing of the Image Properties Window. </summary>
   /// <private />
};
YAHOO.widget.SimpleEditor.prototype._handleToolbarClick = function(ev) {
   /// <summary> This is an event handler attached to the Toolbar's buttonClick event. It will fire execCommand with the command identifier from the Toolbar Button. </summary>
   /// <private />
 /// <param name="ev" type="Event"> The event that triggered the button click</param>
};
YAHOO.widget.SimpleEditor.prototype.filter_rgb = function(String) {
   /// <summary> Converts an RGB color string to a hex color, example: rgb(0, 255, 0) converts to #00ff00 </summary>
   /// <returns type="" />
 /// <param name="String" type=""> css The CSS string containing rgb(#,#,#);</param>
};
YAHOO.widget.SimpleEditor.prototype.cmd_createlink = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('createlink') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.SimpleEditor.prototype.cmd_insertorderedlist = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('insertorderedlist ') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.SimpleEditor.prototype._disableEditor = function(disabled) {
   /// <summary> Creates a mask to place over the Editor. </summary>
   /// <private />
 /// <param name="disabled" type="Boolean"> Pass true to disable, false to enable</param>
};
YAHOO.widget.SimpleEditor.prototype.closeWindow = function() {
   /// <summary> Override Method for Advanced Editor </summary>
};
YAHOO.widget.SimpleEditor.prototype.toString = function() {
   /// <summary> Returns a string representing the editor. </summary>
   /// <returns type="String" />
};
YAHOO.widget.SimpleEditor.prototype.cmd_insertimage = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('insertimage') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.SimpleEditor.prototype.getEditorHTML = function() {
   /// <summary> Gets the unprocessed/unfiltered HTML from the editor </summary>
};
YAHOO.widget.SimpleEditor.prototype.saveHTML = function() {
   /// <summary> Cleans the HTML with the cleanHTML method then places that string back into the textarea. </summary>
   /// <returns type="" />
};
YAHOO.widget.SimpleEditor.prototype._setupAfterElement = function() {
   /// <summary> Creates the accessibility h2 header and places it after the iframe in the Dom for navigation. </summary>
   /// <private />
};
YAHOO.widget.SimpleEditor.prototype.cmd_underline = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('underline') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.SimpleEditor.prototype._getDomPath = function(HTMLElement) {
   /// <summary> This method will attempt to build the DOM path from the currently selected element. </summary>
   /// <private />
   /// <returns type="Array" />
 /// <param name="HTMLElement" type=""> el The element to start with, if not provided _getSelectedElement is used</param>
};
YAHOO.widget.SimpleEditor.prototype._hasParent = function(el, tag) {
   /// <summary> _hasParent </summary>
   /// <private />
   /// <returns type="" />
 /// <param name="el" type="HTMLElement"> The element to check</param>
 /// <param name="tag" type="String"> The tag that the element needs to be</param>
};
YAHOO.widget.SimpleEditor.prototype._listFix = function(ev) {
   /// <summary> Handles the Enter key, Tab Key and Shift + Tab keys for List Items. </summary>
   /// <private />
 /// <param name="ev" type="Event"> The event we are working on.</param>
};
YAHOO.widget.SimpleEditor.prototype._createCurrentElement = function(tagName, tagStyle) {
   /// <summary> This is a work around for the various browser issues with execCommand. This method will run execCommand('fontname', false, 'yui-tmp') on the given selection.It will then search the document for an element with the font-family set to yui-tmp and replace that with another span that has other information in it, then assign the new span to the this.currentElement array, so we now have element references to the elements that were just modified. At this point we can use standard DOM manipulation to change them as we see fit. </summary>
   /// <private />
 /// <param name="tagName" type="String"> (optional defaults to a) The tagname of the element that you wish to create</param>
 /// <param name="tagStyle" type="Object"> (optional) Object literal containing styles to apply to the new element.</param>
};
YAHOO.widget.SimpleEditor.prototype.cleanHTML = function(html) {
   /// <summary> Process the HTML with a few regexes to clean it up and stabilize the output </summary>
   /// <returns type="String" />
 /// <param name="html" type="String"> The unfiltered HTML</param>
};
YAHOO.widget.SimpleEditor.prototype._handleKeyDown = function(ev) {
   /// <summary> Handles all keydown events inside the iFrame document. </summary>
   /// <private />
 /// <param name="ev" type="Event"> The event we are working on.</param>
};
YAHOO.widget.SimpleEditor.prototype._closeWindow = function() {
   /// <summary> Override Method for Advanced Editor </summary>
   /// <private />
};
YAHOO.widget.SimpleEditor.prototype._nodeChange = function(force) {
   /// <summary> Fired from nodeChange in a setTimeout. </summary>
   /// <private />
 /// <param name="force" type="Boolean"> Optional paramenter to skip the threshold counter</param>
};
YAHOO.widget.SimpleEditor.prototype.render = function() {
   /// <summary> Calls the private method _render in a setTimeout to allow for other things on the page to continue to load. </summary>
};
YAHOO.widget.SimpleEditor.prototype.setEditorHTML = function(incomingHTML) {
   /// <summary> Loads HTML into the editors body </summary>
 /// <param name="incomingHTML" type="String"> The html content to load into the editor</param>
};
YAHOO.widget.SimpleEditor.prototype._cleanIncomingHTML = function(html) {
   /// <summary> Process the HTML with a few regexes to clean it up and stabilize the input </summary>
   /// <returns type="String" />
 /// <param name="html" type="String"> The unfiltered HTML</param>
};
YAHOO.widget.SimpleEditor.prototype._isLocalFile = function(url) {
   /// <summary> Checks to see if a string (href or img src) is possibly a local file reference.. </summary>
   /// <private />
 /// <param name="url" type="String"> THe url/string to check</param>
};
YAHOO.widget.SimpleEditor.prototype._swapEl = function(el, tagName, callback) {
   /// <summary> This function will create a new element in the DOM and populate it with the contents of another element. Then it will assume it's place. </summary>
   /// <private />
 /// <param name="el" type="HTMLElement"> The element to swap with</param>
 /// <param name="tagName" type="String"> The tagname of the element that you wish to create</param>
 /// <param name="callback" type="Function"> (optional) A function to run on the element after it is created, but before it is replaced. An element reference is passed to this function.</param>
};
YAHOO.widget.SimpleEditor.prototype.openWindow = function() {
   /// <summary> Override Method for Advanced Editor </summary>
};
YAHOO.widget.SimpleEditor.prototype.pre_filter_linebreaks = function(String) {
   /// <summary> HTML Pre Filter </summary>
   /// <returns type="" />
 /// <param name="String" type=""> html The HTML to filter</param>
 /// <param name="String" type=""> markup The markup type to filter to</param>
};
YAHOO.widget.SimpleEditor.prototype._getSelectedElement = function() {
   /// <summary> This method will attempt to locate the element that was last interacted with, either via selection, location or event. </summary>
   /// <private />
   /// <returns type="HTMLElement" />
};
YAHOO.widget.SimpleEditor.prototype.clearEditorDoc = function() {
   /// <summary> Clear the doc of the Editor </summary>
};
YAHOO.widget.SimpleEditor.prototype._handleInsertImageClick = function() {
   /// <summary> Opens the Image Properties Window when the insert Image button is clicked or an Image is Double Clicked. </summary>
   /// <private />
};
YAHOO.widget.SimpleEditor.prototype._handleKeyPress = function(ev) {
   /// <summary> Handles all keypress events inside the iFrame document. </summary>
   /// <private />
 /// <param name="ev" type="Event"> The event we are working on.</param>
};
YAHOO.widget.SimpleEditor.prototype._hasSelection = function() {
   /// <summary> Determines if there is a selection in the editor document. </summary>
   /// <private />
   /// <returns type="Boolean" />
};
YAHOO.widget.SimpleEditor.prototype._handleColorPicker = function(o) {
   /// <summary> Handles the colorpicker buttons in the toolbar. </summary>
   /// <private />
 /// <param name="o" type="Object"> Object returned from Toolbar's buttonClick Event</param>
};
YAHOO.widget.SimpleEditor.prototype._selectNode = function(node) {
   /// <summary> Places the highlight around a given node </summary>
   /// <private />
 /// <param name="node" type="HTMLElement"> The node to select</param>
};
YAHOO.widget.SimpleEditor.prototype._handleAutoHeight = function() {
   /// <summary> Handles resizing the editor's height based on the content </summary>
   /// <private />
};
YAHOO.widget.SimpleEditor.prototype._handleAlign = function(o) {
   /// <summary> Handles the alignment buttons in the toolbar. </summary>
   /// <private />
 /// <param name="o" type="Object"> Object returned from Toolbar's buttonClick Event</param>
};
YAHOO.widget.SimpleEditor.prototype.cmd_backcolor = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('backcolor') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.SimpleEditor.prototype.moveWindow = function() {
   /// <summary> Override Method for Advanced Editor </summary>
};
YAHOO.widget.SimpleEditor.prototype._focusWindow = function() {
   /// <summary> Attempt to set the focus of the iframes window. </summary>
   /// <private />
};
YAHOO.widget.SimpleEditor.prototype._createInsertElement = function(css) {
   /// <summary> Creates a new "currentElement" then adds some text (and other things) to make it selectable and stylable. Then the user can continue typing. </summary>
   /// <private />
   /// <returns type="HTMLElement" />
 /// <param name="css" type="Object"> (optional) Object literal containing styles to apply to the new element.</param>
};
YAHOO.widget.SimpleEditor.prototype._isNonEditable = function(Event) {
   /// <summary> Method is called at the beginning of all event handlers to check if this element or a parent element has the class yui-noedit (this.CLASS_NOEDIT) applied.If it does, then this method will stop the event and return true. The event handlers will then return false and stop the nodeChange from occuring. This method will alsodisable and enable the Editor's toolbar based on the noedit state. </summary>
   /// <private />
   /// <returns type="" />
 /// <param name="Event" type=""> ev The Dom event being checked</param>
};
YAHOO.widget.SimpleEditor.prototype._isElement = function(el, tag) {
   /// <summary> _isElement </summary>
   /// <private />
   /// <returns type="Boolean" />
 /// <param name="el" type="HTMLElement"> The element to check</param>
 /// <param name="tag" type="String"> The tag that the element needs to be</param>
};
YAHOO.widget.SimpleEditor.prototype._initEditor = function(raw) {
   /// <summary> This method is fired from _checkLoaded when the document is ready. It turns on designMode and set's up the listeners. </summary>
   /// <private />
 /// <param name="raw" type="Boolean"> Don't add events.</param>
};
YAHOO.widget.SimpleEditor.prototype._handleKeyUp = function(ev) {
   /// <summary> Handles all keyup events inside the iFrame document. </summary>
   /// <private />
 /// <param name="ev" type="Event"> The event we are working on.</param>
};
YAHOO.widget.SimpleEditor.prototype._handleFormButtonClick = function(ev) {
   /// <summary> The click listener assigned to each submit button in the Editor's parent form. </summary>
   /// <private />
 /// <param name="ev" type="Event"> The click event</param>
};
YAHOO.widget.SimpleEditor.prototype._handleCreateLinkClick = function() {
   /// <summary> Handles the opening of the Link Properties Window when the Create Link button is clicked or an href is doubleclicked. </summary>
   /// <private />
};
YAHOO.widget.SimpleEditor.prototype._getBlankImage = function() {
   /// <summary> Retrieves the full url of the image to use as the blank image. </summary>
   /// <private />
   /// <returns type="String" />
};
YAHOO.widget.SimpleEditor.prototype._setMarkupType = function(action) {
   /// <summary> This method will turn on/off the useCSS execCommand. </summary>
   /// <private />
 /// <param name="action" type="String"> The action to take. Possible values are: css, default or semantic</param>
};
YAHOO.widget.SimpleEditor.prototype.filter_safari = function(String) {
   /// <summary> Filters strings specific to Safari </summary>
   /// <returns type="" />
 /// <param name="String" type=""> html The HTML string to filter</param>
};
YAHOO.widget.SimpleEditor.prototype.destroy = function() {
   /// <summary> Destroys the editor, all of it's elements and objects. </summary>
   /// <returns type="Boolean" />
};
YAHOO.widget.SimpleEditor.prototype._handleCreateLinkWindowClose = function() {
   /// <summary> Handles the closing of the Link Properties Window. </summary>
   /// <private />
};
YAHOO.widget.SimpleEditor.prototype.filter_internals = function(String) {
   /// <summary> Filters internal RTE strings and bogus attrs we don't want </summary>
   /// <returns type="" />
 /// <param name="String" type=""> html The HTML string to filter</param>
};
YAHOO.widget.SimpleEditor.prototype.cmd_list = function(tag) {
   /// <summary> This is a combined execCommand override method. It is called from the cmd_insertorderedlist and cmd_insertunorderedlist methods. </summary>
 /// <param name="tag" type=""> The tag of the list you want to create (eg, ul or ol)</param>
};
YAHOO.widget.SimpleEditor.prototype.cmd_fontsize = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('fontsize') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.SimpleEditor.prototype._setInitialContent = function(raw) {
   /// <summary> This method will open the iframes content document and write the textareas value into it, then start the body.onload checking. </summary>
   /// <private />
 /// <param name="raw" type="Boolean"> Don't add events.</param>
};
YAHOO.widget.SimpleEditor.prototype._handleDoubleClick = function(ev) {
   /// <summary> Handles all doubleclick events inside the iFrame document. </summary>
   /// <private />
 /// <param name="ev" type="Event"> The event we are working on.</param>
};
YAHOO.widget.SimpleEditor.prototype.filter_msword = function(String) {
   /// <summary> Filters out msword html attributes and other junk. Activate with filterWord: true in config </summary>
 /// <param name="String" type=""> html The HTML string to filter</param>
};
YAHOO.widget.SimpleEditor.prototype.hide = function() {
   /// <summary> This method needs to be called if the Editor is to be hidden (like in a TabView or Panel). It should be called to clear timeouts and close open editor windows. </summary>
};
YAHOO.widget.SimpleEditor.prototype.post_filter_linebreaks = function(String) {
   /// <summary> HTML Pre Filter </summary>
   /// <returns type="" />
 /// <param name="String" type=""> html The HTML to filter</param>
 /// <param name="String" type=""> markup The markup type to filter to</param>
};
YAHOO.widget.SimpleEditor.prototype.cmd_unlink = function(value) {
   /// <summary> This is an execCommand override method. It is called from execCommand when the execCommand('unlink') is used. </summary>
 /// <param name="value" type=""> Value passed from the execCommand method</param>
};
YAHOO.widget.SimpleEditor.prototype._getWindow = function() {
   /// <summary> Get the Window of the IFRAME </summary>
   /// <private />
   /// <returns type="Object" />
};
YAHOO.widget.SimpleEditor.prototype._writeDomPath = function() {
   /// <summary> Write the current DOM path out to the dompath container below the editor. </summary>
   /// <private />
};
YAHOO.widget.SimpleEditor.prototype._handleClick = function(ev) {
   /// <summary> Handles all click events inside the iFrame document. </summary>
   /// <private />
 /// <param name="ev" type="Event"> The event we are working on.</param>
};
YAHOO.widget.SimpleEditor.prototype.execCommand = function(action, value) {
   /// <summary> This method attempts to try and level the differences in the various browsers and their support for execCommand actions </summary>
 /// <param name="action" type="String"> The "execCommand" action to try to execute (Example: bold, insertimage, inserthtml)</param>
 /// <param name="value" type="String"> (optional) The value for a given action such as action: fontname value: 'Verdana'</param>
};
YAHOO.widget.SimpleEditor.prototype._checkKey = function(k, e) {
   /// <summary> Checks a keyMap entry against a key event </summary>
   /// <private />
   /// <returns type="Boolean" />
 /// <param name="k" type="Object"> The _keyMap object</param>
 /// <param name="e" type="Event"> The Mouse Event</param>
};
YAHOO.widget.SimpleEditor.prototype._getRange = function() {
   /// <summary> Handles the different range objects across the A-Grade list. </summary>
   /// <private />
   /// <returns type="Object" />
};
YAHOO.widget.SimpleEditor.prototype._setupResize = function() {
   /// <summary> Creates the Resize instance and binds its events. </summary>
   /// <private />
};
YAHOO.widget.SimpleEditor.prototype._setEditorStyle = function(stat) {
   /// <summary> Set the editor to use CSS instead of HTML </summary>
 /// <param name="stat" type="Booleen"> True/False</param>
};
YAHOO.widget.Slider.getHorizDualSlider = function(bg, minthumb, maxthumb, range, iTickSize, initVals) {
   /// <summary> Factory method for creating a horizontal dual-thumb slider </summary>
   /// <returns type="DualSlider" />
 /// <param name="bg" type="String"> the id of the slider's background element</param>
 /// <param name="minthumb" type="String"> the id of the min thumb</param>
 /// <param name="maxthumb" type="String"> the id of the thumb thumb</param>
 /// <param name="range" type="int"> the number of pixels the thumbs can move within</param>
 /// <param name="iTickSize" type="int"> (optional) the element should move this many pixelsat a time</param>
 /// <param name="initVals" type="Array"> (optional) [min,max] Initial thumb placement</param>
};
YAHOO.widget.Slider.prototype.fireEvents = function(thumbEvent) {
   /// <summary> Fires the change event if the value has been changed.  Ignored if we are inthe middle of an animation as the event will fire when the animation iscomplete </summary>
   /// <private />
 /// <param name="thumbEvent" type="boolean"> set to true if this event is fired from an eventthat occurred on the thumb.  If it is, the state of thethumb dd object should be correct.  Otherwise, the eventoriginated on the background, so the thumb state needs tobe refreshed before proceeding.</param>
};
YAHOO.widget.Slider.prototype.moveOneTick = function(the) {
   /// <summary> Move the slider one tick mark towards its final coordinate.  Usedfor the animation when tick marks are defined </summary>
   /// <private />
 /// <param name="the" type="int[]"> destination coordinate</param>
};
YAHOO.widget.Slider.getHorizSlider = function(sBGElId, sHandleElId, iLeft, iRight, iTickSize) {
   /// <summary> Factory method for creating a horizontal slider </summary>
   /// <returns type="Slider" />
 /// <param name="sBGElId" type="String"> the id of the slider's background element</param>
 /// <param name="sHandleElId" type="String"> the id of the thumb element</param>
 /// <param name="iLeft" type="int"> the number of pixels the element can move left</param>
 /// <param name="iRight" type="int"> the number of pixels the element can move right</param>
 /// <param name="iTickSize" type="int"> optional parameter for specifying that the element should move a certain number pixels at a time.</param>
};
YAHOO.widget.Slider.prototype.focus = function() {
   /// <summary> Try to focus the element when clicked so we can addaccessibility features </summary>
   /// <private />
};
YAHOO.widget.Slider.prototype.onMouseDown = function() {
   /// <summary> Handles the mousedown event for the slider background </summary>
   /// <private />
};
YAHOO.widget.Slider.prototype._setValue = function(source, newOffsetter, skipAnim, force, silent) {
   /// <summary> Worker function to execute the value set operation.  Accepts type ofset operation in addition to the usual setValue params. </summary>
   /// <returns type="boolean" />
 /// <param name="source" type="int">  what triggered the set (e.g. Slider.SOURCE_SET_VALUE)</param>
 /// <param name="newOffset" type="int"> the number of pixels the thumb should bepositioned away from the initial start point</param>
 /// <param name="skipAnim" type="boolean"> set to true to disable the animationfor this move action (but not others).</param>
 /// <param name="force" type="boolean"> ignore the locked setting and set value anyway</param>
 /// <param name="silent" type="boolean"> when true, do not fire events</param>
};
YAHOO.widget.Slider.prototype.handleKeyDown = function(e) {
   /// <summary> Executed when a keydown event happens with the control focused.Updates the slider value and display when the keypress is anarrow key, home, or end as long as enableKeys is set to true. </summary>
 /// <param name="e" type="Event"> the keydown event</param>
};
YAHOO.widget.Slider.prototype.resetThumbConstraints = function() {
   /// <summary> Resets the X and Y contraints for the thumb.  Used in lieu of the thumbinstance's inherited resetConstraints because some logic was notapplicable. </summary>
};
YAHOO.widget.Slider.prototype.getXValue = function() {
   /// <summary> Returns the slider's thumb X offset from the start position </summary>
   /// <returns type="int" />
};
YAHOO.widget.Slider.prototype.moveThumb = function(x, y, skipAnim, midMove) {
   /// <summary> Move the associated slider moved to a timeout to try to get around the mousedown stealing moz does when I move the slider element between the cursor and the background during the mouseup event </summary>
   /// <private />
 /// <param name="x" type="int"> the X coordinate of the click</param>
 /// <param name="y" type="int"> the Y coordinate of the click</param>
 /// <param name="skipAnim" type="boolean"> don't animate if the move happend onDrag</param>
 /// <param name="midMove" type="boolean"> set to true if this is not terminatingthe slider movement</param>
};
YAHOO.widget.Slider.prototype.setRegionValue = function(newOffsetter, newOffsetter2, skipAnim, force, silent) {
   /// <summary> Provides a way to set the value of the region slider in code. </summary>
   /// <returns type="boolean" />
 /// <param name="newOffset" type="int"> the number of pixels the thumb should bepositioned away from the initial start point (x axis for region)</param>
 /// <param name="newOffset2" type="int"> the number of pixels the thumb should bepositioned away from the initial start point (y axis for region)</param>
 /// <param name="skipAnim" type="boolean"> set to true to disable the animationfor this move action (but not others).</param>
 /// <param name="force" type="boolean"> ignore the locked setting and set value anyway</param>
 /// <param name="silent" type="boolean"> when true, do not fire events</param>
};
YAHOO.widget.Slider.prototype.onSliderEnd = function() {
   /// <summary> Event that fires at the end of a slider thumb move </summary>
};
YAHOO.widget.Slider.prototype.thumbMouseUp = function() {
   /// <summary> Handles mouseup event on the thumb </summary>
   /// <private />
};
YAHOO.widget.Slider.getSliderRegion = function(sBGElId, sHandleElId, iLeft, iRight, iUp, iDown, iTickSize) {
   /// <summary> Factory method for creating a slider region like the one in the colorpicker example </summary>
   /// <returns type="Slider" />
 /// <param name="sBGElId" type="String"> the id of the slider's background element</param>
 /// <param name="sHandleElId" type="String"> the id of the thumb element</param>
 /// <param name="iLeft" type="int"> the number of pixels the element can move left</param>
 /// <param name="iRight" type="int"> the number of pixels the element can move right</param>
 /// <param name="iUp" type="int"> the number of pixels the element can move up</param>
 /// <param name="iDown" type="int"> the number of pixels the element can move down</param>
 /// <param name="iTickSize" type="int"> optional parameter for specifying that the element should move a certain number pixels at a time.</param>
};
YAHOO.widget.Slider.prototype.verifyOffset = function() {
   /// <summary> Checks the background position element position.  If it has moved from thebaseline position, the constraints for the thumb are reset </summary>
   /// <returns type="boolean" />
};
YAHOO.widget.Slider.prototype.initThumb = function(t) {
   /// <summary> Initializes the slider's thumb. Executed in the constructor. </summary>
 /// <param name="t" type="YAHOO.widget.SliderThumb"> the slider thumb</param>
};
YAHOO.widget.Slider.prototype.toString = function() {
   /// <summary> Slider toString </summary>
   /// <returns type="string" />
};
YAHOO.widget.Slider.prototype.lock = function() {
   /// <summary> Locks the slider, overrides YAHOO.util.DragDrop </summary>
};
YAHOO.widget.Slider.prototype.onChange = function(firstOffsetter, secondOffsetter) {
   /// <summary> Event that fires when the value of the slider has changed </summary>
 /// <param name="firstOffset" type="int"> the number of pixels the thumb has movedfrom its start position. Normal horizontal and vertical sliders will onlyhave the firstOffset.  Regions will have both, the first is the horizontaloffset, the second the vertical.</param>
 /// <param name="secondOffset" type="int"> the y offset for region sliders</param>
};
YAHOO.widget.Slider.prototype.initSlider = function(sType) {
   /// <summary> Initializes the slider.  Executed in the constructor </summary>
 /// <param name="sType" type="string"> the type of slider (horiz, vert, region)</param>
};
YAHOO.widget.Slider.prototype.setValue = function(newOffsetter, skipAnim, force, silent) {
   /// <summary> Provides a way to set the value of the slider in code. </summary>
   /// <returns type="boolean" />
 /// <param name="newOffset" type="int"> the number of pixels the thumb should bepositioned away from the initial start point</param>
 /// <param name="skipAnim" type="boolean"> set to true to disable the animationfor this move action (but not others).</param>
 /// <param name="force" type="boolean"> ignore the locked setting and set value anyway</param>
 /// <param name="silent" type="boolean"> when true, do not fire events</param>
};
YAHOO.widget.Slider.prototype.setThumbCenterPoint = function() {
   /// <summary> When the thumb is available, we cache the centerpoint of the element sowe can position the element correctly when the background is clicked </summary>
};
YAHOO.widget.Slider.prototype._bindKeyEvents = function() {
   /// <summary> Sets up the listeners for keydown and key press events. </summary>
};
YAHOO.widget.Slider.prototype.endMove = function() {
   /// <summary> Fired when the slider movement ends </summary>
   /// <private />
};
YAHOO.widget.Slider.prototype._setRegionValue = function(source, newOffsetter, newOffsetter2, skipAnim, force, silent) {
   /// <summary> Worker function to execute the value set operation.  Accepts type ofset operation in addition to the usual setValue params. </summary>
   /// <returns type="boolean" />
 /// <param name="source" type="int">  what triggered the set (e.g. Slider.SOURCE_SET_VALUE)</param>
 /// <param name="newOffset" type="int"> the number of pixels the thumb should bepositioned away from the initial start point (x axis for region)</param>
 /// <param name="newOffset2" type="int"> the number of pixels the thumb should bepositioned away from the initial start point (y axis for region)</param>
 /// <param name="skipAnim" type="boolean"> set to true to disable the animationfor this move action (but not others).</param>
 /// <param name="force" type="boolean"> ignore the locked setting and set value anyway</param>
 /// <param name="silent" type="boolean"> when true, do not fire events</param>
};
YAHOO.widget.Slider.prototype.getYValue = function() {
   /// <summary> Returns the slider's thumb Y offset from the start position </summary>
   /// <returns type="int" />
};
YAHOO.widget.Slider.prototype.onAvailable = function() {
   /// <summary> Executed when the slider element is available </summary>
};
YAHOO.widget.Slider.prototype.onSlideStart = function() {
   /// <summary> Event that fires when the at the beginning of the slider thumb move </summary>
};
YAHOO.widget.Slider.prototype.onDrag = function() {
   /// <summary> Handles the onDrag event for the slider background </summary>
   /// <private />
};
YAHOO.widget.Slider.prototype.getThumb = function() {
   /// <summary> Returns a reference to this slider's thumb </summary>
   /// <returns type="SliderThumb" />
};
YAHOO.widget.Slider.getVertSlider = function(sBGElId, sHandleElId, iUp, iDown, iTickSize) {
   /// <summary> Factory method for creating a vertical slider </summary>
   /// <returns type="Slider" />
 /// <param name="sBGElId" type="String"> the id of the slider's background element</param>
 /// <param name="sHandleElId" type="String"> the id of the thumb element</param>
 /// <param name="iUp" type="int"> the number of pixels the element can move up</param>
 /// <param name="iDown" type="int"> the number of pixels the element can move down</param>
 /// <param name="iTickSize" type="int"> optional parameter for specifying that the element should move a certain number pixels at a time.</param>
};
YAHOO.widget.Slider.prototype.handleKeyPress = function(e) {
   /// <summary> Executed when a keypress event happens with the control focused.Prevents the default behavior for navigation keys.  The actuallogic for moving the slider thumb in response to a key eventhappens in handleKeyDown. </summary>
 /// <param name="e" type="Event"> the keypress event</param>
};
YAHOO.widget.Slider.prototype.setStartSliderState = function() {
   /// <summary> Initialization that sets up the value offsets once the elements are ready </summary>
};
YAHOO.widget.Slider.prototype.getValue = function() {
   /// <summary> Returns the slider's thumb offset from the start position </summary>
   /// <returns type="int" />
};
YAHOO.widget.Slider.prototype.b4MouseDown = function() {
   /// <summary> Resets the constraints before moving the thumb. </summary>
   /// <private />
};
YAHOO.widget.Slider.prototype.unlock = function() {
   /// <summary> Unlocks the slider, overrides YAHOO.util.DragDrop </summary>
};
YAHOO.widget.Slider.getVertDualSlider = function(bg, minthumb, maxthumb, range, iTickSize, initVals) {
   /// <summary> Factory method for creating a vertical dual-thumb slider. </summary>
   /// <returns type="DualSlider" />
 /// <param name="bg" type="String"> the id of the slider's background element</param>
 /// <param name="minthumb" type="String"> the id of the min thumb</param>
 /// <param name="maxthumb" type="String"> the id of the thumb thumb</param>
 /// <param name="range" type="int"> the number of pixels the thumbs can move within</param>
 /// <param name="iTickSize" type="int"> (optional) the element should move this many pixelsat a time</param>
 /// <param name="initVals" type="Array"> (optional) [min,max] Initial thumb placement</param>
};
YAHOO.widget.Slider.prototype._getNextY = function() {
   /// <summary> Returns the next Y tick value based on the current coord and the target coord. </summary>
   /// <private />
};
YAHOO.widget.Slider.prototype._getNextX = function() {
   /// <summary> Returns the next X tick value based on the current coord and the target coord. </summary>
   /// <private />
};
YAHOO.widget.SliderThumb.prototype.clearTicks = function() {
   /// <summary> Clear's the slider's ticks </summary>
};
YAHOO.widget.SliderThumb.prototype.getValue = function() {
   /// <summary> Gets the current offset from the element's start position inpixels. </summary>
   /// <returns type="int" />
};
YAHOO.widget.SliderThumb.prototype.getOffsetFromParent = function(parentPos) {
   /// <summary> Returns the difference between the location of the thumb and its parent. </summary>
 /// <param name="parentPos" type="[int, int]"> Optionally accepts the position of the parent</param>
};
YAHOO.widget.SliderThumb.prototype.toString = function() {
   /// <summary> Thumb toString </summary>
   /// <returns type="string" />
};
YAHOO.widget.SliderThumb.prototype.getYValue = function() {
   /// <summary> Gets the current Y offset from the element's start position inpixels. </summary>
   /// <returns type="int" />
};
YAHOO.widget.SliderThumb.prototype.onChange = function() {
   /// <summary> The onchange event for the handle/thumb is delegated to the YAHOO.widget.Sliderinstance it belongs to. </summary>
   /// <private />
};
YAHOO.widget.SliderThumb.prototype.getXValue = function() {
   /// <summary> Gets the current X offset from the element's start position inpixels. </summary>
   /// <returns type="int" />
};
YAHOO.widget.SliderThumb.prototype.initSlider = function(iLeft, iRight, iUp, iDown, iTickSize) {
   /// <summary> Set up the slider, must be called in the constructor of all subclasses </summary>
 /// <param name="iLeft" type="int"> the number of pixels the element can move left</param>
 /// <param name="iRight" type="int"> the number of pixels the element can move right</param>
 /// <param name="iUp" type="int"> the number of pixels the element can move up</param>
 /// <param name="iDown" type="int"> the number of pixels the element can move down</param>
 /// <param name="iTickSize" type="int"> the width of the tick interval.</param>
};
YAHOO.widget.TVAnim.isValid = function(type) {
   /// <summary> Returns true if the specified animation class is available </summary>
   /// <returns type="boolean" />
 /// <param name="type" type="string">  the type of animation</param>
};
YAHOO.widget.TVAnim.getAnim = function(type, el, callback) {
   /// <summary> Returns a ygAnim instance of the given type </summary>
   /// <returns type="YAHOO.util.Animation" />
 /// <param name="type" type="string">  the type of animation</param>
 /// <param name="el" type="HTMLElement">  the element to element (probably the children div)</param>
 /// <param name="callback" type="function">  function to invoke when the animation is done.</param>
};
YAHOO.widget.TVFadeIn.prototype.onComplete = function() {
   /// <summary> Clean up and invoke callback </summary>
};
YAHOO.widget.TVFadeIn.prototype.animate = function() {
   /// <summary> Performs the animation </summary>
};
YAHOO.widget.TVFadeIn.prototype.toString = function() {
   /// <summary> toString </summary>
   /// <returns type="string" />
};
YAHOO.widget.TVFadeOut.prototype.onComplete = function() {
   /// <summary> Clean up and invoke callback </summary>
};
YAHOO.widget.TVFadeOut.prototype.animate = function() {
   /// <summary> Performs the animation </summary>
};
YAHOO.widget.TVFadeOut.prototype.toString = function() {
   /// <summary> toString </summary>
   /// <returns type="string" />
};
YAHOO.widget.Tab.prototype.initAttributes = function(attr) {
   /// <summary> setAttributeConfigs Tab specific properties. </summary>
 /// <param name="attr" type="Object"> Hash of initial attributes</param>
};
YAHOO.widget.Tab.prototype.toString = function() {
   /// <summary> Provides a readable name for the tab. </summary>
   /// <returns type="" />
};
YAHOO.widget.TabView.prototype.getTabIndex = function(tab) {
   /// <summary> Returns the index of given tab. </summary>
   /// <returns type="" />
 /// <param name="tab" type="YAHOO.widget.Tab"> The tab whose index will be returned.</param>
};
YAHOO.widget.TabView.prototype.removeTab = function(item) {
   /// <summary> Removes the specified Tab from the TabView. </summary>
   /// <returns type="" />
 /// <param name="item" type="YAHOO.widget.Tab"> The Tab instance to be removed.</param>
};
YAHOO.widget.TabView.prototype.contentTransition = function() {
   /// <summary> The transiton to use when switching between tabs. </summary>
};
YAHOO.widget.TabView.prototype._initTabs = function() {
   /// <summary> Creates Tab instances from a collection of HTMLElements. </summary>
   /// <private />
   /// <returns type="" />
};
YAHOO.widget.TabView.prototype.deselectTab = function(index) {
   /// <summary> Removes selected state from the given tab if it is the activeTab </summary>
 /// <param name="index" type="Int"> The tab index to deselect</param>
};
YAHOO.widget.TabView.prototype.initAttributes = function(attr) {
   /// <summary> setAttributeConfigs TabView specific properties. </summary>
 /// <param name="attr" type="Object"> Hash of initial attributes</param>
};
YAHOO.widget.TabView.prototype.toString = function() {
   /// <summary> Provides a readable name for the TabView instance. </summary>
   /// <returns type="" />
};
YAHOO.widget.TabView.prototype.DOMEventHandler = function(e) {
   /// <summary> Routes childNode events. </summary>
   /// <returns type="" />
 /// <param name="e" type="event"> The Dom event that is being handled.</param>
};
YAHOO.widget.TabView.prototype.addTab = function(tab, index) {
   /// <summary> Adds a Tab to the TabView instance.  If no index is specified, the tab is added to the end of the tab list. </summary>
   /// <returns type="" />
 /// <param name="tab" type="YAHOO.widget.Tab"> A Tab instance to add.</param>
 /// <param name="index" type="Integer"> The position to add the tab.</param>
};
YAHOO.widget.TabView.prototype.selectTab = function(index) {
   /// <summary> Makes the tab at the given index the active tab </summary>
 /// <param name="index" type="Int"> The tab index to be made active</param>
};
YAHOO.widget.TabView.prototype.getTab = function(index) {
   /// <summary> Returns the Tab instance at the specified index. </summary>
   /// <returns type="" />
 /// <param name="index" type="Integer"> The position of the Tab.</param>
};
YAHOO.widget.TextNode.prototype.getEditorValue = function(editorData) {
   /// <summary> Returns the value from the input element.Overrides Node.getEditorValue. </summary>
   /// <returns type="string" />
 /// <param name="editorData" type="YAHOO.widget.TreeView.editorData">   a shortcut to the static object holding editing information</param>
};
YAHOO.widget.TextNode.prototype.fillEditorContainer = function(editorData) {
   /// <summary> Places an &lt;input&gt;  textbox in the input container and loads the label text into it. </summary>
   /// <returns type="" />
 /// <param name="editorData" type="YAHOO.widget.TreeView.editorData">   a shortcut to the static object holding editing information</param>
};
YAHOO.widget.TextNode.prototype.getNodeDefinition = function() {
   /// <summary> Returns an object which could be used to build a tree out of this node and its children.It can be passed to the tree constructor to reproduce this node as a tree.It will return false if the node or any descendant loads dynamically, regardless of whether it is loaded or not. </summary>
   /// <returns type="Object | false" />
};
YAHOO.widget.TextNode.prototype.displayEditedValue = function(value, editorData) {
   /// <summary> Finally displays the newly edited value in the tree.Overrides Node.displayEditedValue. </summary>
 /// <param name="value" type="string">  value to be displayed and stored in the node</param>
 /// <param name="editorData" type="YAHOO.widget.TreeView.editorData">   a shortcut to the static object holding editing information</param>
};
YAHOO.widget.TextNode.prototype.destroyEditorContents = function(editorData) {
   /// <summary> Destroys the contents of the inline editor panel.Overrides Node.destroyEditorContent.Since we didn't set any event listeners on this inline editor, it is more efficient to avoid the generic method in Node. </summary>
 /// <param name="editorData" type="YAHOO.widget.TreeView.editorData">   a shortcut to the static object holding editing information</param>
};
YAHOO.widget.TextNode.prototype.getLabelEl = function() {
   /// <summary> Returns the label element </summary>
   /// <returns type="object" />
};
YAHOO.widget.TextNode.prototype.setUpLabel = function(oData) {
   /// <summary> Sets up the node label </summary>
 /// <param name="oData" type=""> string containing the label, or an object with a label property</param>
};
YAHOO.widget.TextareaCellEditor.prototype.handleDisabledBtns = function() {
   /// <summary> After rendering form, if disabledBtns is set to true, then sets up a mechanismto save input without them. </summary>
};
YAHOO.widget.TextareaCellEditor.prototype.renderForm = function() {
   /// <summary> Render a form with textarea. </summary>
};
YAHOO.widget.TextareaCellEditor.prototype.move = function() {
   /// <summary> Moves TextareaCellEditor UI to a cell. </summary>
};
YAHOO.widget.TextareaCellEditor.prototype.focus = function() {
   /// <summary> Sets focus in TextareaCellEditor. </summary>
};
YAHOO.widget.TextareaCellEditor.prototype.resetForm = function() {
   /// <summary> Resets TextareaCellEditor UI to initial state. </summary>
};
YAHOO.widget.TextareaCellEditor.prototype.getInputValue = function() {
   /// <summary> Retrieves input value from TextareaCellEditor. </summary>
};
YAHOO.widget.TextboxCellEditor.prototype.renderForm = function() {
   /// <summary> Render a form with input type=text. </summary>
};
YAHOO.widget.TextboxCellEditor.prototype.move = function() {
   /// <summary> Moves TextboxCellEditor UI to a cell. </summary>
};
YAHOO.widget.TextboxCellEditor.prototype.focus = function() {
   /// <summary> Sets focus in TextboxCellEditor. </summary>
};
YAHOO.widget.TextboxCellEditor.prototype.getInputValue = function() {
   /// <summary> Returns new value for TextboxCellEditor. </summary>
};
YAHOO.widget.TextboxCellEditor.prototype.resetForm = function() {
   /// <summary> Resets TextboxCellEditor UI to initial state. </summary>
};
YAHOO.widget.Toolbar.prototype.getButtons = function() {
   /// <summary> Returns an array of buttons in the current toolbar </summary>
   /// <returns type="Array" />
};
YAHOO.widget.Toolbar.prototype.enableButton = function(id) {
   /// <summary> Enables a button in the toolbar. </summary>
   /// <returns type="Boolean" />
 /// <param name="id" type="String/Number"> Enable a button by it's id, index or value.</param>
};
YAHOO.widget.Toolbar.prototype.destroyButton = function(id) {
   /// <summary> Destroy a button in the toolbar. </summary>
   /// <returns type="Boolean" />
 /// <param name="id" type="String/Number"> Destroy a button by it's id or index.</param>
};
YAHOO.widget.Toolbar.prototype._buttonClick = function(ev, info) {
   /// <summary> Click handler for all buttons in the toolbar. </summary>
 /// <param name="ev" type="String"> The event that was passed in.</param>
 /// <param name="info" type="Object"> Object literal of information about the button that was clicked.</param>
};
YAHOO.widget.Toolbar.prototype.addButton = function(oButton, after) {
   /// <summary> Add a new button to the toolbar. Buttons supported:push, split, menu, select, color, spin </summary>
 /// <param name="oButton" type="Object"> Object literal reference to the Button's Config</param>
 /// <param name="after" type="HTMLElement"> Optional HTML element to insert this button after in the DOM.</param>
};
YAHOO.widget.Toolbar.prototype.initAttributes = function(attr) {
   /// <summary> Initializes all of the configuration attributes used to create the toolbar. </summary>
 /// <param name="attr" type="Object"> Object literal specifying a set of configuration attributes used to create the toolbar.</param>
};
YAHOO.widget.Toolbar.prototype.enableAllButtons = function() {
   /// <summary> Enables all buttons in the toolbar. </summary>
   /// <returns type="Boolean" />
};
YAHOO.widget.Toolbar.prototype.selectButton = function(id, value) {
   /// <summary> Selects a button in the toolbar. </summary>
   /// <returns type="Boolean" />
 /// <param name="id" type="String/Number"> Select a button by it's id, index or value.</param>
 /// <param name="value" type="String"> If this is a Menu Button, check this item in the menu</param>
};
YAHOO.widget.Toolbar.prototype._navigateButtons = function(ev) {
   /// <summary> Handles the navigation/focus of toolbar buttons with the Arrow Keys </summary>
   /// <private />
 /// <param name="ev" type="Event"> The Key Event</param>
};
YAHOO.widget.Toolbar.prototype.isSelected = function(id) {
   /// <summary> Tells if a button is selected or not. </summary>
   /// <returns type="Boolean" />
 /// <param name="id" type="String/Number"> A button by it's id, index or value.</param>
};
YAHOO.widget.Toolbar.prototype.init = function() {
   /// <summary> The Toolbar class's initialization method </summary>
};
YAHOO.widget.Toolbar.prototype.addButtonToGroup = function(oButton, group, after) {
   /// <summary> Add a new button to a toolbar group. Buttons supported:push, split, menu, select, color, spin </summary>
 /// <param name="oButton" type="Object"> Object literal reference to the Button's Config</param>
 /// <param name="group" type="String"> The Group identifier passed into the initial config</param>
 /// <param name="after" type="HTMLElement"> Optional HTML element to insert this button after in the DOM.</param>
};
YAHOO.widget.Toolbar.prototype.toString = function() {
   /// <summary> Returns a string representing the toolbar. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Toolbar.prototype._resetColorPicker = function() {
   /// <summary> Clears the currently selected color or mouseover color in the color picker. </summary>
   /// <private />
};
YAHOO.widget.Toolbar.prototype.destroy = function() {
   /// <summary> Destroys the toolbar, all of it's elements and objects. </summary>
   /// <returns type="Boolean" />
};
YAHOO.widget.Toolbar.prototype._handleFocus = function() {
   /// <summary> Sets up the listeners for the arrow key navigation </summary>
   /// <private />
};
YAHOO.widget.Toolbar.prototype.collapse = function(collapse) {
   /// <summary> Programatically collapse the toolbar. </summary>
 /// <param name="collapse" type="Boolean"> True to collapse, false to expand.</param>
};
YAHOO.widget.Toolbar.prototype.addSeparator = function(cont, after) {
   /// <summary> Add a new button separator to the toolbar. </summary>
 /// <param name="cont" type="HTMLElement"> Optional HTML element to insert this button into.</param>
 /// <param name="after" type="HTMLElement"> Optional HTML element to insert this button after in the DOM.</param>
};
YAHOO.widget.Toolbar.prototype.getButtonByIndex = function(index) {
   /// <summary> Gets a button instance from the toolbar by is index in _buttonList. </summary>
   /// <returns type="YAHOO.widget.ToolbarButton" />
 /// <param name="index" type="Number"> The index of the button in _buttonList.</param>
};
YAHOO.widget.Toolbar.prototype.getButtonById = function(id) {
   /// <summary> Gets a button instance from the toolbar by is Dom id. </summary>
   /// <returns type="YAHOO.widget.ToolbarButton" />
 /// <param name="id" type="String"> The Dom id to query for.</param>
};
YAHOO.widget.Toolbar.prototype.resetAllButtons = function(_ex) {
   /// <summary> Resets all buttons to their initial state. </summary>
   /// <returns type="Boolean" />
 /// <param name="_ex" type="Object"> Except these buttons</param>
};
YAHOO.widget.Toolbar.prototype.deselectAllButtons = function() {
   /// <summary> Deselects all buttons in the toolbar. </summary>
   /// <returns type="Boolean" />
};
YAHOO.widget.Toolbar.prototype.disableButton = function(id) {
   /// <summary> Disables a button in the toolbar. </summary>
   /// <returns type="Boolean" />
 /// <param name="id" type="String/Number"> Disable a button by it's id, index or value.</param>
};
YAHOO.widget.Toolbar.prototype._addMenuClasses = function(ev, na, o) {
   /// <summary> This method is called from Menu's renderEvent to add a few more classes to the menu items </summary>
   /// <private />
 /// <param name="ev" type="String"> The event that fired.</param>
 /// <param name="na" type="Array"> Array of event information.</param>
 /// <param name="o" type="Object"> Button config object.</param>
};
YAHOO.widget.Toolbar.prototype._makeSpinButton = function(_button, oButton) {
   /// <summary> Create a button similar to an OS Spin button.. It has an up/down arrow combo to scroll through a range of int values. </summary>
   /// <private />
 /// <param name="_button" type="Object"> YAHOO.widget.ToolbarButton reference</param>
 /// <param name="oButton" type="Object"> Object literal containing the buttons initial config</param>
};
YAHOO.widget.Toolbar.prototype.deselectButton = function(id) {
   /// <summary> Deselects a button in the toolbar. </summary>
   /// <returns type="Boolean" />
 /// <param name="id" type="String/Number"> Deselect a button by it's id, index or value.</param>
};
YAHOO.widget.Toolbar.prototype.addButtonGroup = function(oGroup) {
   /// <summary> Add a new button group to the toolbar. (uses addButton) </summary>
 /// <param name="oGroup" type="Object"> Object literal reference to the Groups Config (contains an array of button configs as well as the group label)</param>
};
YAHOO.widget.Toolbar.prototype._createColorPicker = function(id) {
   /// <summary> Creates the core DOM reference to the color picker menu item. </summary>
   /// <private />
 /// <param name="id" type="String"> the id of the toolbar to prefix this DOM container with.</param>
};
YAHOO.widget.Toolbar.prototype._makeColorButton = function(_oButton) {
   /// <summary> Called to turn a "color" button into a menu button with an Overlay for the menu. </summary>
   /// <private />
 /// <param name="_oButton" type="Object"> YAHOO.widget.ToolbarButton reference</param>
};
YAHOO.widget.Toolbar.prototype.disableAllButtons = function() {
   /// <summary> Disables all buttons in the toolbar. </summary>
   /// <returns type="Boolean" />
};
YAHOO.widget.Toolbar.prototype.getButtonByValue = function(value) {
   /// <summary> Gets a button instance or a menuitem instance from the toolbar by it's value. </summary>
   /// <returns type="YAHOO.widget.ToolbarButton or YAHOO.widget.MenuItem" />
 /// <param name="value" type="String"> The button value to query for.</param>
};
YAHOO.widget.ToolbarButton.prototype._handleSelect = function(ev) {
   /// <summary> The event fired when a change event gets fired on a select element </summary>
   /// <private />
 /// <param name="ev" type="Event"> The change event.</param>
};
YAHOO.widget.ToolbarButton.prototype.getMenu = function() {
   /// <summary> A stub function to mimic YAHOO.widget.Button's getMenu method </summary>
};
YAHOO.widget.ToolbarButton.prototype._handleMouseOut = function() {
   /// <summary> Removes classes from the button elements on mouseout (hover) </summary>
   /// <private />
};
YAHOO.widget.ToolbarButton.prototype.init = function() {
   /// <summary> The ToolbarButton class's initialization method </summary>
};
YAHOO.widget.ToolbarButton.prototype.initAttributes = function(attr) {
   /// <summary> Initializes all of the configuration attributes used to create the toolbar. </summary>
 /// <param name="attr" type="Object"> Object literal specifying a set of configuration attributes used to create the toolbar.</param>
};
YAHOO.widget.ToolbarButton.prototype.toString = function() {
   /// <summary> Returns a string representing the toolbar. </summary>
   /// <returns type="String" />
};
YAHOO.widget.ToolbarButton.prototype.checkValue = function(value) {
   /// <summary> Select an option by value </summary>
 /// <param name="value" type="String"> The value of the option that we want to mark as selected</param>
};
YAHOO.widget.ToolbarButton.prototype.destroy = function() {
   /// <summary> Destroy the button </summary>
};
YAHOO.widget.ToolbarButton.prototype._handleMouseOver = function() {
   /// <summary> Adds classes to the button elements on mouseover (hover) </summary>
   /// <private />
};
YAHOO.widget.ToolbarButton.prototype.fireEvent = function() {
   /// <summary> Overridden fireEvent method to prevent DOM events from firing if the button is disabled. </summary>
};
YAHOO.widget.ToolbarButtonAdvanced.prototype.checkValue = function(value) {
   /// <summary> Select an option by value </summary>
 /// <param name="value" type="String"> The value of the option that we want to mark as selected</param>
};
YAHOO.widget.Tooltip.prototype.onContextMouseOver = function(e, obj) {
   /// <summary> The default event handler fired when the user mouses over the context element. </summary>
 /// <param name="e" type="DOMEvent"> The current DOM event</param>
 /// <param name="obj" type="Object"> The object argument</param>
};
YAHOO.widget.Tooltip.prototype.onRender = function(p_sType, p_aArgs) {
   /// <summary> "render" event handler for the Tooltip. </summary>
 /// <param name="p_sType" type="String"> String representing the name of the event  that was fired.</param>
 /// <param name="p_aArgs" type="Array"> Array of arguments sent when the event was fired.</param>
};
YAHOO.widget.Tooltip.prototype.initDefaultConfig = function() {
   /// <summary> Initializes the class's configurable properties which can be changed using the Overlay's Config object (cfg). </summary>
};
YAHOO.widget.Tooltip.prototype.doShow = function(e, context) {
   /// <summary> Processes the showing of the Tooltip by setting the timeout delay and offset of the Tooltip. </summary>
   /// <returns type="Number" />
 /// <param name="e" type="DOMEvent"> The current DOM event</param>
 /// <param name="context" type="HTMLElement"> The current context element</param>
};
YAHOO.widget.Tooltip.prototype.initEvents = function() {
   /// <summary> Initializes the custom events for Tooltip </summary>
};
YAHOO.widget.Tooltip.prototype._removeEventListeners = function() {
   /// <summary> Removes all of the DOM event handlers from the HTMLelement(s) that trigger the display of the tooltip. </summary>
};
YAHOO.widget.Tooltip.prototype.doHide = function() {
   /// <summary> Sets the timeout for the auto-dismiss delay, which by default is 5 seconds, meaning that a tooltip will automatically dismiss itself after 5 seconds of being displayed. </summary>
};
YAHOO.widget.Tooltip.prototype.onContextMouseOut = function(e, obj) {
   /// <summary> The default event handler fired when the user mouses out of the context element. </summary>
 /// <param name="e" type="DOMEvent"> The current DOM event</param>
 /// <param name="obj" type="Object"> The object argument</param>
};
YAHOO.widget.Tooltip.prototype.forceUnderlayRedraw = function() {
   /// <summary> Forces the underlay element to be repainted, through the application/removalof a yui-force-redraw class to the underlay element. </summary>
};
YAHOO.widget.Tooltip.prototype.configContainer = function(type, args, obj) {
   /// <summary> The default event handler fired when the "container" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers,this will usually equal the owner.</param>
};
YAHOO.widget.Tooltip.prototype.init = function(el, userConfig) {
   /// <summary> The Tooltip initialization method. This method is automatically called by the constructor. A Tooltip is automatically rendered by the init method, and it also is set to be invisible by default, and constrained to viewport by default as well. </summary>
 /// <param name="el" type="String"> The element ID representing the Tooltip OR</param>
 /// <param name="el" type="HTMLElement"> The element representing the Tooltip</param>
 /// <param name="userConfig" type="Object"> The configuration object literal containing the configuration that should be set for this Tooltip. See configuration documentation for more details.</param>
};
YAHOO.widget.Tooltip.prototype.onContextMouseMove = function(e, obj) {
   /// <summary> The default event handler fired when the user moves the mouse while over the context element. </summary>
 /// <param name="e" type="DOMEvent"> The current DOM event</param>
 /// <param name="obj" type="Object"> The object argument</param>
};
YAHOO.widget.Tooltip.prototype.configText = function(type, args, obj) {
   /// <summary> The default event handler fired when the "text" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers, this will usually equal the owner.</param>
};
YAHOO.widget.Tooltip.prototype.preventOverlay = function(pageX, pageY) {
   /// <summary> Fired when the Tooltip is moved, this event handler is used to prevent the Tooltip from overlapping with its context element. </summary>
 /// <param name="pageX" type="Number"> The x coordinate position of the mouse pointer</param>
 /// <param name="pageY" type="Number"> The y coordinate position of the mouse pointer</param>
};
YAHOO.widget.Tooltip.prototype.destroy = function() {
   /// <summary> Removes the Tooltip element from the DOM and sets all child elements to null. </summary>
};
YAHOO.widget.Tooltip.prototype.toString = function() {
   /// <summary> Returns a string representation of the object. </summary>
   /// <returns type="String" />
};
YAHOO.widget.Tooltip.prototype.configContext = function(type, args, obj) {
   /// <summary> The default event handler fired when the "context" property is changed. </summary>
 /// <param name="type" type="String"> The CustomEvent type (usually the property name)</param>
 /// <param name="args" type="Object[]"> The CustomEvent arguments. For configuration handlers, args[0] will equal the newly applied value for the property.</param>
 /// <param name="obj" type="Object"> The scope object. For configuration handlers,this will usually equal the owner.</param>
};
YAHOO.widget.TreeView.prototype.animateExpand = function(el, node) {
   /// <summary> Perform the expand animation if configured, or just show theelement if not configured or too many animations are in progress </summary>
   /// <returns type="boolean" />
 /// <param name="el" type="HTMLElement">  the element to animate</param>
 /// <param name="node" type="YAHOO.util.Node">  the node that was expanded</param>
};
YAHOO.widget.TreeView.prototype.setDynamicLoad = function(fnDataLoader, iconMode) {
   /// <summary> Configures this tree to dynamically load all child data </summary>
 /// <param name="fnDataLoader" type="function"> the function that will be called to get the data</param>
 /// <param name="iconMode" type="int">  configures the icon that is displayed when a dynamicload node is expanded the first time without children.  By default, the "collapse" icon will be used.  If set to 1, the leaf node icon will bedisplayed.</param>
};
YAHOO.widget.TreeView.prototype.render = function() {
   /// <summary> Renders the tree boilerplate and visible nodes </summary>
};
YAHOO.widget.TreeView.prototype.getNodeByIndex = function(nodeIndex) {
   /// <summary> Returns a node in the tree that has the specified index (this indexis created internally, so this function probably will only be usedin html generated for a given node.) </summary>
   /// <returns type="Node" />
 /// <param name="nodeIndex" type="int"> the index of the node wanted</param>
};
YAHOO.widget.TreeView.prototype._onMouseOverEvent = function() {
   /// <summary> Event listener for mouse over events </summary>
   /// <private />
};
YAHOO.widget.TreeView.prototype.collapseComplete = function() {
   /// <summary> Function executed when the collapse animation completes </summary>
};
YAHOO.widget.TreeView.prototype.setNodesProperty = function(name, value, refresh) {
   /// <summary> Sets the value of a property for all loaded nodes in the tree. </summary>
 /// <param name="name" type="string">  Name of the property to be set</param>
 /// <param name="value" type="any">  value to be set</param>
 /// <param name="refresh" type="boolean">  if present and true, it does a refresh</param>
};
YAHOO.widget.TreeView.prototype._onDblClickEvent = function() {
   /// <summary> Event listener for double-click events </summary>
   /// <private />
};
YAHOO.widget.TreeView.prototype.regNode = function(node) {
   /// <summary> Nodes register themselves with the tree instance when they are created. </summary>
   /// <private />
 /// <param name="node" type="Node">  the node to register</param>
};
YAHOO.widget.TreeView.prototype.onExpand = function(node) {
   /// <summary> Abstract method that is executed when a node is expanded </summary>
 /// <param name="node" type="Node">  the node that was expanded</param>
};
YAHOO.widget.TreeView.prototype._initEditor = function() {
   /// <summary> Entry point for initializing the editing plug-in.  TreeView will call this method on initializing if it exists </summary>
   /// <private />
};
YAHOO.widget.TreeView.prototype.setExpandAnim = function(type) {
   /// <summary> Sets up the animation for expanding children </summary>
 /// <param name="type" type="string"> the type of animation (acceptable values defined in YAHOO.widget.TVAnim)</param>
};
YAHOO.widget.TreeView.getTree = function(treeId) {
   /// <summary> Global method for getting a tree by its id.  Used in the generatedtree html. </summary>
   /// <returns type="TreeView" />
 /// <param name="treeId" type="String">  the id of the tree instance</param>
};
YAHOO.widget.TreeView.prototype._onMouseOutEvent = function() {
   /// <summary> Event listener for mouse out events </summary>
   /// <private />
};
YAHOO.widget.TreeView.prototype.removeNode = function(node, autoRefresh) {
   /// <summary> Removes the node and its children, and optionally refreshes the branch of the tree that was affected. </summary>
   /// <returns type="boolean" />
 /// <param name="node" type="Node"> to remove</param>
 /// <param name="autoRefresh" type="boolean"> automatically refreshes branch if true</param>
};
YAHOO.widget.TreeView.prototype._getEventTargetTdEl = function() {
   /// <summary> Returns the TD element where the event has occurred </summary>
   /// <private />
};
YAHOO.widget.TreeView.prototype.popNode = function(node) {
   /// <summary> Removes the node from the tree, preserving the child collection to make it possible to insert the branch into another part of the tree, or another tree. </summary>
 /// <param name="node" type="Node"> to remove</param>
};
YAHOO.widget.TreeView.prototype.onCollapse = function(node) {
   /// <summary> Abstract method that is executed when a node is collapsed. </summary>
 /// <param name="node" type="Node">  the node that was collapsed.</param>
};
YAHOO.widget.TreeView.prototype.getEl = function() {
   /// <summary> Returns the tree's host element </summary>
   /// <returns type="HTMLElement" />
};
YAHOO.widget.TreeView.prototype.init = function() {
   /// <summary> Initializes the tree </summary>
   /// <private />
};
YAHOO.widget.TreeView.prototype.removeChildren = function(node) {
   /// <summary> Deletes this nodes child collection, recursively.  Also collapsesthe node, and resets the dynamic load flag.  The primary use forthis method is to purge a node and allow it to fetch its datadynamically again. </summary>
 /// <param name="node" type="Node"> the node to purge</param>
};
YAHOO.widget.TreeView.prototype.toString = function() {
   /// <summary> TreeView instance toString </summary>
   /// <returns type="string" />
};
YAHOO.widget.TreeView.prototype._onKeyDownEvent = function() {
   /// <summary> Event listener for key down events </summary>
   /// <private />
};
YAHOO.widget.TreeView.prototype.animateCollapse = function(el, node) {
   /// <summary> Perform the collapse animation if configured, or just show theelement if not configured or too many animations are in progress </summary>
   /// <returns type="boolean" />
 /// <param name="el" type="HTMLElement">  the element to animate</param>
 /// <param name="node" type="YAHOO.util.Node">  the node that was expanded</param>
};
YAHOO.widget.TreeView.prototype.getHighlightedNode = function() {
   /// <summary> When in singleNodeHighlight it returns the node highlightedor null if none.  Returns null if singleNodeHighlight is false. </summary>
   /// <returns type="YAHOO.widget.Node" />
};
YAHOO.widget.TreeView.prototype.expandAll = function() {
   /// <summary> Expands all child nodes.  Note: this conflicts with the "multiExpand"node property.  If expand all is called in a tree with nodes thatdo not allow multiple siblings to be displayed, only the last siblingwill be expanded. </summary>
};
YAHOO.widget.TreeView.prototype.onEventToggleHighlight = function(oArgs) {
   /// <summary> Event listener to toggle node highlight.Can be assigned as listener to clickEvent, dblClickEvent and enterKeyPressed.It returns false to prevent the default action. </summary>
   /// <returns type="false" />
 /// <param name="oArgs" type="any">  it takes the arguments of any of the events mentioned above</param>
};
YAHOO.widget.TreeView.prototype.draw = function() {
   /// <summary> Renders the tree boilerplate and visible nodes.Alias for render </summary>
};
YAHOO.widget.TreeView.prototype.buildTreeFromObject = function(oConfig) {
   /// <summary> Builds the TreeView from an object.  This is the method called by the constructor to build the tree when it has a second argument.A tree can be described by an array of objects, each object corresponding to a node.Node descriptions may contain values for any property of a node plus the following extra properties: type:  can be one of the following: A shortname for a node type ('text','menu','html') The name of a Node class under YAHOO.widget ('TextNode', 'MenuNode', 'DateNode', etc) a reference to an actual class: YAHOO.widget.DateNodechildren: an array containing further node definitionsA string instead of an object will produce a node of type 'text' with the given string as its label. </summary>
 /// <param name="oConfig" type="Array|Object|String">   array containing a full description of the tree.An object or a string will be turned into an array with the given object or string as its only element.</param>
};
YAHOO.widget.TreeView.getNode = function(treeId, nodeIndex) {
   /// <summary> Global method for getting a node by its id.  Used in the generatedtree html. </summary>
   /// <returns type="Node" />
 /// <param name="treeId" type="String">  the id of the tree instance</param>
 /// <param name="nodeIndex" type="String">  the index of the node to return</param>
};
YAHOO.widget.TreeView.prototype.getNodeByProperty = function(property, value) {
   /// <summary> Returns a node that has a matching property and value in the dataobject that was passed into its constructor. </summary>
   /// <returns type="Node" />
 /// <param name="property" type="object"> the property to search (usually a string)</param>
 /// <param name="value" type="object"> the value we want to find (usuall an int or string)</param>
};
YAHOO.widget.TreeView.prototype.getNodesBy = function(a) {
   /// <summary> Returns a collection of nodes that have passed the test functionpassed as its only argument.  The function will receive a reference to each node to be tested. </summary>
   /// <returns type="Array" />
 /// <param name="a" type="function"> boolean function that receives a Node instance and returns true to add the node to the results list</param>
};
YAHOO.widget.TreeView.prototype._removeChildren_animComplete = function(o) {
   /// <summary> wait until the animation is complete before deleting to avoid javascript errors </summary>
   /// <private />
 /// <param name="o" type=""> the custom event payload</param>
};
YAHOO.widget.TreeView.prototype._closeEditor = function(save) {
   /// <summary> Method to be called when the inline editing is finished and the editor is to be closed </summary>
   /// <private />
 /// <param name="save" type="Boolean">  true if the edited value is to be saved, false if discarded</param>
};
YAHOO.widget.TreeView.prototype.destroy = function() {
   /// <summary> Nulls out the entire TreeView instance and related objects, removes attachedevent listeners, and clears out DOM elements inside the container. Aftercalling this method, the instance reference should be expliclitly nulled byimplementer, as in myDataTable = null. Use with caution! </summary>
};
YAHOO.widget.TreeView.prototype.getNodesByProperty = function(property, value) {
   /// <summary> Returns a collection of nodes that have a matching property and value in the data object that was passed into its constructor. </summary>
   /// <returns type="Array" />
 /// <param name="property" type="object"> the property to search (usually a string)</param>
 /// <param name="value" type="object"> the value we want to find (usuall an int or string)</param>
};
YAHOO.widget.TreeView.prototype.onEventEditNode = function(oArgs) {
   /// <summary> Method to be associated with an event (clickEvent, dblClickEvent or enterKeyPressed) to pop up the contents editorIt calls the corresponding node editNode method. </summary>
 /// <param name="oArgs" type="object">  Object passed as arguments to TreeView event listeners</param>
};
YAHOO.widget.TreeView.prototype._deleteNode = function() {
   /// <summary> Deletes the node and recurses children </summary>
   /// <private />
};
YAHOO.widget.TreeView.prototype.getRoot = function() {
   /// <summary> Returns the root node of this tree </summary>
   /// <returns type="Node" />
};
YAHOO.widget.TreeView.prototype._onClickEvent = function() {
   /// <summary> Event listener for click events </summary>
   /// <private />
};
YAHOO.widget.TreeView.prototype.collapseAll = function() {
   /// <summary> Collapses all expanded child nodes in the entire tree. </summary>
};
YAHOO.widget.TreeView.prototype.setCollapseAnim = function(type) {
   /// <summary> Sets up the animation for collapsing children </summary>
 /// <param name="type" type="string"> of animation (acceptable values defined in YAHOO.widget.TVAnim)</param>
};
YAHOO.widget.TreeView.prototype.getTreeDefinition = function() {
   /// <summary> Returns an object which could be used to rebuild the tree.It can be passed to the tree constructor to reproduce the same tree.It will return false if any node loads dynamically, regardless of whether it is loaded or not. </summary>
   /// <returns type="Object | false" />
};
YAHOO.widget.TreeView.prototype.getNodeCount = function() {
   /// <summary> Count of nodes in tree </summary>
   /// <returns type="int" />
};
YAHOO.widget.TreeView.prototype._nodeEditing = function(node) {
   /// <summary> Entry point of the editing plug-in.  TreeView will call this method if it exists when a node label is clicked </summary>
   /// <private />
   /// <returns type="Boolean" />
 /// <param name="node" type="YAHOO.widget.Node">  the node to be edited</param>
};
YAHOO.widget.TreeView.prototype.expandComplete = function() {
   /// <summary> Function executed when the expand animation completes </summary>
};
YAHOO.widget.TreeView.prototype.getNodeByElement = function(el) {
   /// <summary> Returns the treeview node reference for an ancestor elementof the node, or null if it is not contained within any nodein this tree. </summary>
   /// <returns type="YAHOO.widget.Node" />
 /// <param name="el" type="HTMLElement">  the element to test</param>
};
YAHOO.widget.TreeView.prototype._destroyEditor = function() {
   /// <summary> Entry point for TreeView's destroy method to destroy whatever the editing plug-in has created </summary>
   /// <private />
};
YAHOO.widget.TreeView.prototype.buildTreeFromMarkup = function(id) {
   /// <summary> Builds the TreeView from existing markup.   Markup should consist of &lt;UL&gt; or &lt;OL&gt; elements containing &lt;LI&gt; elements.  Each &lt;LI&gt; can have one element used as label and a second optional element which is to be a &lt;UL&gt; or &lt;OL&gt;containing nested nodes.Depending on what the first element of the &lt;LI&gt; element is, the following Nodes will be created: plain text:  a regular TextNodeanchor &lt;A&gt;: a TextNode with its href and target taken from the anchoranything else: an HTMLNodeOnly the first  outermost (un-)ordered list in the markup and its children will be parsed.Nodes will be collapsed unless  an  &lt;LI&gt;  tag has a className called 'expanded'.All other className attributes will be copied over to the Node className property.If the &lt;LI&gt; element contains an attribute called yuiConfig, its contents should be a JSON-encoded objectas the one used in method buildTreeFromObject. </summary>
 /// <param name="id" type="string|HTMLElement">  The id of the element that contains the markup or a reference to it.</param>
};
YAHOO.widget.Uploader.prototype.uploadAll = function(uploadScriptPath, method, vars, fieldName) {
   /// <summary> Starts uploading all files in the queue. If this function is called, the upload queue is automatically managed. </summary>
 /// <param name="uploadScriptPath" type="String">  The URL of the upload location.</param>
 /// <param name="method" type="String">  Either "GET" or "POST", specifying how the variables accompanying the file upload POST request should be submitted. "GET" by default.</param>
 /// <param name="vars" type="Object">  The object containing variables to be sent in the same request as the file upload.</param>
 /// <param name="fieldName" type="String">  The name of the variable in the POST request containing the file data. "Filedata" by default.</param>
};
YAHOO.widget.Uploader.prototype.enable = function() {
   /// <summary> Enables the mouse events on the Uploader.If the uploader is being rendered as a button,then the button's skin is set to "up"(first section of the button skin sprite). </summary>
};
YAHOO.widget.Uploader.prototype.setAllowLogging = function(allowLogging) {
   /// <summary> Turns the logging functionality on.Uses Flash internal trace logging, as well as YUI Logger, if available. </summary>
 /// <param name="allowLogging" type="Boolean">  If true, logs are output; otherwise, no logs are produced.</param>
};
YAHOO.widget.Uploader.prototype.clearFileList = function() {
   /// <summary> Clears the list of files queued for upload. </summary>
};
YAHOO.widget.Uploader.prototype.upload = function(fileID, uploadScriptPath, method, vars, fieldName) {
   /// <summary> Starts the upload of the file specified by fileID to the location specified by uploadScriptPath. </summary>
 /// <param name="fileID" type="String">  The id of the file to start uploading.</param>
 /// <param name="uploadScriptPath" type="String">  The URL of the upload location.</param>
 /// <param name="method" type="String">  Either "GET" or "POST", specifying how the variables accompanying the file upload POST request should be submitted. "GET" by default.</param>
 /// <param name="vars" type="Object">  The object containing variables to be sent in the same request as the file upload.</param>
 /// <param name="fieldName" type="String">  The name of the variable in the POST request containing the file data. "Filedata" by default.</param>
};
YAHOO.widget.Uploader.prototype.removeFile = function(fileID) {
   /// <summary> Removes the specified file from the upload queue. </summary>
 /// <param name="fileID" type="String">  The id of the file to remove from the upload queue.</param>
};
YAHOO.widget.Uploader.prototype.setSimUploadLimit = function(simUploadLimit) {
   /// <summary> Sets the number of simultaneous uploads when using uploadAll()The minimum value is 1, and maximum value is 5. The default value is 2. </summary>
 /// <param name="simUploadLimit" type="int">  Number of simultaneous uploads, between 1 and 5.</param>
};
YAHOO.widget.Uploader.prototype.disable = function() {
   /// <summary> Disables the mouse events on the Uploader.If the uploader is being rendered as a button,then the button's skin is set to "disabled"(fourth section of the button skin sprite). </summary>
};
YAHOO.widget.Uploader.prototype.setAllowMultipleFiles = function(allowMultipleFiles) {
   /// <summary> Sets the flag allowing users to select multiple files for the upload. </summary>
 /// <param name="allowMultipleFiles" type="Boolean">  If true, multiple files can be selected. False by default.</param>
};
YAHOO.widget.Uploader.prototype.cancel = function(fileID) {
   /// <summary> Cancels the upload of a specified file. If no file id is specified, all ongoing uploads are cancelled. </summary>
 /// <param name="fileID" type="String">  The ID of the file whose upload should be cancelled.</param>
};
YAHOO.widget.Uploader.prototype.setFileFilters = function(newFilterArray) {
   /// <summary> Sets the file filters for the "Browse" dialog. </summary>
 /// <param name="newFilterArray" type="extensions: extensionString, description: descriptionString, [optional]macType: macTypeString"> An array of sets of key-value pairs of the formThe extensions string is a semicolon-delimited list of elements of the form "*.xxx", e.g. "*.jpg;*.gif;*.png".</param>
};