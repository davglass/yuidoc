/*
This file has been generated to support Visual Studio Intellisense, and is not a functional file.
It is designed to be included via the reference tag in Visual Studio.
<reference path="yui2.vsdoc.js" />
This file includes the documentation for all modules and components in the YUI Library.
It will not be able to detect if you have not included all the proper files.
All methods, classes, Components and Widgets will still be listed in Intellisense.
*/

//Starting Classes
var YUI = function(o) {
   /// <summary> The YUI global namespace object.  If YUI is already defined, theexisting YUI object will not be overwritten so that definednamespaces are preserved. </summary>
 /// <param name="o*" type=""> Up to five optional configuration objects.  This object is storedin YUI.config.  See config for the list of supported properties.</param>
};
YUI.prototype.Anim = function() {
   /// <summary> A class for constructing animation instances. </summary>
};
YUI.prototype.Array = function() {
   /// <summary> Adds the following array utilities to the YUI instance.  Additionalarray helpers can be found in the collection component. </summary>
};
YUI.prototype.Assert = function() {
   /// <summary> The Assert object provides functions to test JavaScript values againstknown and expected results. Whenever a comparison (assertion) fails,an error is thrown. </summary>
};
YUI.prototype.Assert = function() {
   /// <summary> The Assert object provides functions to test JavaScript values againstknown and expected results. Whenever a comparison (assertion) fails,an error is thrown. </summary>
};
YUI.prototype.Assert.ComparisonFailure = function(message, expected, actual) {
   /// <summary> ComparisonFailure is subclass of Error that is thrown whenevera comparison between two values fails. It provides mechanisms to retrieveboth the expected and actual value. </summary>
 /// <param name="message" type="String"> The message to display when the error occurs.</param>
 /// <param name="expected" type="Object"> The expected value.</param>
 /// <param name="actual" type="Object"> The actual value that caused the assertion to fail.</param>
};
YUI.prototype.Assert.Error = function(message) {
   /// <summary> Error is thrown whenever an assertion fails. It provides methodsto more easily get at error information and also provides a base classfrom which more specific assertion errors can be derived. </summary>
 /// <param name="message" type="String"> The message to display when the error occurs.</param>
};
YUI.prototype.Assert.ObjectAssert = function() {
   /// <summary> The ObjectAssert object provides functions to test JavaScript objectsfor a variety of cases. </summary>
};
YUI.prototype.Assert.ShouldError = function(message) {
   /// <summary> ShouldError is subclass of Error that is thrown whenevera test is expected to throw an error but doesn't. </summary>
 /// <param name="message" type="String"> The message to display when the error occurs.</param>
};
YUI.prototype.Assert.ShouldFail = function(message) {
   /// <summary> ShouldFail is subclass of Error that is thrown whenevera test was expected to fail but did not. </summary>
 /// <param name="message" type="String"> The message to display when the error occurs.</param>
};
YUI.prototype.Assert.UnexpectedError = function(cause) {
   /// <summary> UnexpectedError is subclass of Error that is thrown wheneveran error occurs within the course of a test and the test was not expectedto throw an error. </summary>
 /// <param name="cause" type="Error"> The unexpected error that caused this error to be thrown.</param>
};
YUI.prototype.Assert.UnexpectedValue = function(message, unexpected) {
   /// <summary> UnexpectedValue is subclass of Error that is thrown whenevera value was unexpected in its scope. This typically means that a testwas performed to determine that a value was *not* equal to a certainvalue. </summary>
 /// <param name="message" type="String"> The message to display when the error occurs.</param>
 /// <param name="unexpected" type="Object"> The unexpected value.</param>
};
YUI.prototype.AsyncQueue = function(callback) {
   /// <summary> A specialized queue class that supports scheduling callbacks to executesequentially, iteratively, even asynchronously.Callbacks can be function refs or objects with the following keys.  Onlythe fn key is required.fn -- The callback functioncontext -- The execution context for the callbackFn.args -- Arguments to pass to callbackFn.timeout -- Millisecond delay before executing callbackFn.(Applies to each iterative execution of callback)iterations -- Number of times to repeat the callback.until -- Repeat the callback until this function returnstrue.  This setting trumps iterations.autoContinue -- Set to false to prevent the AsyncQueue fromexecuting the next callback in the Queue afterthe callback completes.id -- Name that can be used to get, promote, get theindexOf, or delete this callback. </summary>
 /// <param name="callback*" type="Function|Object">  0..n callbacks to seed the queue</param>
};
YUI.prototype.Attribute = function() {
   /// <summary> Attribute provides configurable attribute support along with attribute change events. It is designed to be augmented onto a host class, and provides the host with the ability to configure attributes to store and retrieve state, along with attribute change events.For example, attributes added to the host can be configured:As read only.As write once.With a setter function, which can be used to manipulatevalues passed to Attribute's set method, before they are stored.With a getter function, which can be used to manipulate stored values,before they are returned by Attribute's get method.With a validator function, to validate values before they are stored.See the addAttr method, for the complete set of configurationoptions available for attributes.NOTE: Most implementations will be better off extending the Base class, instead of augmenting Attribute directly. Base augments Attribute and will handle the initial configuration of attributes for derived classes, accounting for values passed into the constructor. </summary>
};
YUI.prototype.Base = function(config) {
   /// <summary> A base class which objects requiring attributes and custom event support can extend. Base also handles the chaining of initializer and destructor methods across the hierarchy as part of object construction and destruction. Additionally, attributes configured through the static ATTRS property for each class in the hierarchy will be initialized by Base.The static NAME property of each class extending from Base will be used as the identifier for the class, and is used by Base to prefix all events fired by instances of that class. </summary>
 /// <param name="config" type="Object"> Object with configuration property name/value pairs</param>
};
YUI.prototype.Cache = function() {
   /// <summary> Base class for the YUI Cache utility. </summary>
};
YUI.prototype.ClassNameManager = function() {
   /// <summary> A singleton class providing: Easy creation of prefixed class namesCaching of previously created class names for improved performance. </summary>
};
YUI.prototype.Console = function(conf) {
   /// <summary> Console creates a visualization for messages logged through calls to a YUIinstance's Y.log( message, category, source ) method.  Thedebug versions of YUI modules will include logging statements to offer someinsight into the steps executed during that module's operation.  Includinglog statements in your code will cause those messages to also appear in theConsole.  Use Console to aid in developing your page or application.Entry categories &quot;info&quot;, &quot;warn&quot;, and &quot;error&quot;are also referred to as the log level, and entries are filtered against theconfigured logLevel. </summary>
 /// <param name="conf" type="Object">  Configuration object (see Configuration attributes)</param>
};
YUI.prototype.Cookie = function() {
   /// <summary> Cookie utility. </summary>
};
YUI.prototype.CustomEvent = function(type, o) {
   /// <summary> The CustomEvent class lets you define events for your applicationthat can be subscribed to by one or more independent component. </summary>
 /// <param name="type" type="String"> The type of event, which is passed to the callbackwhen the event fires</param>
 /// <param name="o" type=""> configuration object</param>
};
YUI.prototype.DD = function() {
};
YUI.prototype.DD.DDM = function() {
   /// <summary> Provides the base Drag Drop Manger required for making a Node draggable. </summary>
};
YUI.prototype.DD.Drag = function() {
   /// <summary> This class provides the ability to drag a Node. </summary>
};
YUI.prototype.DD.Drop = function() {
   /// <summary> This class provides the ability to create a Drop Target. </summary>
};
YUI.prototype.DD.Scroll = function() {
   /// <summary> This class is the base scroller class used to create the Plugin.DDNodeScroll and Plugin.DDWinScroll.This class should not be called on it's own, it's designed to be a plugin. </summary>
};
YUI.prototype.DOM = function() {
   /// <summary> Provides DOM helper methods. </summary>
};
YUI.prototype.DOMEventFacade = function() {
   /// <summary> Wraps a DOM event, properties requiring browser abstraction arefixed here.  Provids a security layer when required. </summary>
};
YUI.prototype.Do = function() {
}
YUI.prototype.Do.AlterArgs = function() {
   /// <summary> Return an AlterArgs object when you want to change the arguments thatwere passed into the function.  An example would be a service that scrubsout illegal characters prior to executing the core business logic. </summary>
};
YUI.prototype.Do.AlterReturn = function() {
   /// <summary> Return an AlterReturn object when you want to change the result returnedfrom the core method to the caller </summary>
};
YUI.prototype.Do.Error = function() {
   /// <summary> Return an Error object when you want to terminate the executionof all subsequent method calls. </summary>
};
YUI.prototype.Do.Halt = function() {
   /// <summary> Return a Halt object when you want to terminate the executionof all subsequent subscribers as well as the wrapped methodif it has not exectued yet. </summary>
};
YUI.prototype.Do.Method = function(obj, sFn) {
   /// <summary> Wrapper for a displaced method with aop enabled </summary>
 /// <param name="obj" type=""> The object to operate on</param>
 /// <param name="sFn" type=""> The name of the method to displace</param>
};
YUI.prototype.Do.Prevent = function() {
   /// <summary> Return a Prevent object when you want to prevent the wrapped functionfrom executing, but want the remaining listeners to execute </summary>
};
YUI.prototype.Easing = function() {
   /// <summary> The easing module provides methods for customizinghow an animation behaves during each run. </summary>
};
YUI.prototype.Event = function() {
   /// <summary> The event utility provides functions to add and remove event listeners,event cleansing.  It also tries to automatically remove listeners itregisters during the unload event. </summary>
};
YUI.prototype.EventFacade = function() {
   /// <summary> Wraps and protects a custom event for use when emitFacade is set to true.Requires the event-custom-complex module </summary>
};
YUI.prototype.EventHandle = function(evt, sub) {
   /// <summary> Return value from all subscribe operations </summary>
 /// <param name="evt" type="CustomEvent">  the custom event</param>
 /// <param name="sub" type="Subscriber">  the subscriber</param>
};
YUI.prototype.EventTarget = function() {
   /// <summary> EventTarget provides the implementation for any object topublish, subscribe and fire to custom events, and alsoalows other EventTargets to target the object with eventssourced from the other object.EventTarget is designed to be used with Y.augment to wrap EventCustom in an interface that allows events to be listened to and fired by name.  This makes it possible for implementing code tosubscribe to an event that either has not been created yet, or willnot be created at all. </summary>
};
YUI.prototype.Get = function() {
   /// <summary> Fetches and inserts one or more script or link nodes into the document </summary>
};
YUI.prototype.History = function() {
   /// <summary> This class represents an instance of the browser history utility. </summary>
};
YUI.prototype.History.Module = function(id, initialState) {
   /// <summary> This class represents a browser history module. </summary>
 /// <param name="id" type="String">  the module identifier</param>
 /// <param name="initialState" type="String">  the module's initial state</param>
};
YUI.prototype.ImgLoadGroup = function() {
   /// <summary> A group for images. A group can have one time limit and a series of triggers. Thus the images belonging to this group must share these constraints. </summary>
};
YUI.prototype.ImgLoadImgObj = function() {
   /// <summary> Image objects to be registered with the groups </summary>
};
YUI.prototype.JSON = function() {
   /// <summary> The JSON module adds support for serializing JavaScript objects intoJSON strings and parsing JavaScript objects from strings in JSON format.The JSON namespace is added to your YUI instance including static methodsY.JSON.parse(..) and Y.JSON.stringify(..).The functionality and method signatures follow the ECMAScript 5specification.  In browsers with native JSON support, the nativeimplementation is used.The json module is a rollup of json-parse andjson-stringify.As their names suggest, json-parse adds support for parsingJSON data (Y.JSON.parse) and json-stringify for serializingJavaScript data into JSON strings (Y.JSON.stringify).  You may choose toinclude either of the submodules individually if you don't need thecomplementary functionality, or include the rollup for both. </summary>
};
YUI.prototype.Lang = function() {
   /// <summary> Provides the language utilites and extensions used by the library </summary>
};
YUI.prototype.Node = function() {
   /// <summary> The Node class provides a wrapper for manipulating DOM Nodes.Node properties can be accessed via the set/get methods.Use Y.get() to retrieve Node instances.NOTE: Node properties are accessed usingthe set and get methods. </summary>
};
YUI.prototype.NodeList = function() {
   /// <summary> The NodeList class provides a wrapper for manipulating DOM NodeLists.NodeList properties can be accessed via the set/get methods.Use Y.all() to retrieve NodeList instances. </summary>
};
YUI.prototype.Object = function() {
   /// <summary> Adds the following Object utilities to the YUI instance </summary>
};
YUI.prototype.Overlay = function(object) {
   /// <summary> A basic Overlay Widget, which can be positioned based on Page XY co-ordinates and is stackable (z-index support).It also provides alignment and centering support and uses a standard module format for it's content, with header,body and footer section support. </summary>
 /// <param name="object" type="Object"> The user configuration for the instance.</param>
};
YUI.prototype.Plugin = function() {
};
YUI.prototype.Plugin.Base = function() {
   /// <summary> The base class for all Plugin instances. </summary>
};
YUI.prototype.Plugin.ConsoleFilters = function() {
   /// <summary> Provides Plugin.ConsoleFilters plugin class.This plugin adds the ability to control which Console entries display by filtering on category and source. Two groups of checkboxes are added to the Console footer, one for categories and the other for sources.  Only those messages that match a checked category or source are displayed. </summary>
};
YUI.prototype.Plugin.DDNodeScroll = function() {
   /// <summary> Extends the Scroll class to make a parent node scroll while dragging. </summary>
};
YUI.prototype.Plugin.DDProxy = function() {
   /// <summary> This plugin for dd-drag is for creating a proxy drag node, instead of dragging the original node. </summary>
};
YUI.prototype.Plugin.DDWindowScroll = function() {
   /// <summary> Extends the Scroll class to make the window scroll while dragging. </summary>
};
YUI.prototype.Plugin.Drag = function() {
   /// <summary> This is a simple Drag plugin that can be attached to a Node via the plug method. </summary>
};
YUI.prototype.Plugin.DragConstrained = function() {
   /// <summary> This is a plugin for the dd-drag module to add the constraining methods to it. It supports constraining to a renodenode or viewport. It anode* supports tick based moves and XY axis constraints. </summary>
};
YUI.prototype.Plugin.Drop = function() {
   /// <summary> This is a simple Drop plugin that can be attached to a Node via the plug method. </summary>
};
YUI.prototype.Plugin.NodeFX = function() {
   /// <summary> Binds an Anim instance to a Node instance </summary>
};
YUI.prototype.Pollable = function() {
   /// <summary> Adds polling to the DataSource Utility. </summary>
};
YUI.prototype.Profiler = function() {
   /// <summary> Profiles functions in JavaScript. </summary>
};
YUI.prototype.Queue = function() {
   /// <summary> A simple FIFO queue.  Items are added to the Queue with add(1..n items) andremoved using next(). </summary>
};
YUI.prototype.Selector = function() {
   /// <summary> Provides support for using CSS selectors to query the DOM </summary>
};
YUI.prototype.Slider = function(config) {
   /// <summary> Create a slider to represent an integer value between a given minimum andmaximum.  Sliders may be aligned vertically or horizontally, based on theaxis configuration. </summary>
 /// <param name="config" type="Object">  Configuration object</param>
};
YUI.prototype.State = function() {
   /// <summary> The State class maintains state for a collection of named items, with a varying number of properties defined.It avoids the need to create a separate class for the item, and separate instances of these classes for each item, by storing the state in a 2 level hash table, improving performance when the number of items is likely to be large. </summary>
};
YUI.prototype.StyleSheet = function(seed, name) {
   /// <summary> Create an instance of StyleSheet to encapsulate a css stylesheet.The constructor can be called using function or constructor syntax.var sheet = Y.StyleSheet(..);orvar sheet = new Y.StyleSheet(..);The first parameter passed can be any of the following things:The desired string name to register a new empty sheetThe string name of an existing StyleSheet instanceThe unique guid generated for an existing StyleSheet instanceThe id of an existing &lt;link&gt; or &lt;style&gt; nodeThe node reference for an existing &lt;link&gt; or &lt;style&gt; nodeThe Y.Node instance wrapping an existing &lt;link&gt; or &lt;style&gt; nodeA chunk of css text to create a new stylesheet fromIf a string is passed, StyleSheet will first look in its static nameregistry for an existing sheet, then in the DOM for an element with that id.If neither are found and the string contains the { character, it will beused as a the initial cssText for a new StyleSheet.  Otherwise, a new emptyStyleSheet is created, assigned the string value as a name, and registeredstatically by that name.The optional second parameter is a string name to register the sheet as.This param is largely useful when providing a node id/ref or chunk of csstext to create a populated instance. </summary>
 /// <param name="seed" type="String|HTMLElement|Node">  a style or link node, its id, or aname or guid of a StyleSheet, or a string of css text</param>
 /// <param name="name" type="String">  (optional) name to register instance for future staticaccess</param>
};
YUI.prototype.Subscriber = function(fn, context, args) {
   /// <summary> Stores the subscriber information to be used when the event fires. </summary>
 /// <param name="fn" type="Function">       The wrapped function to execute</param>
 /// <param name="context" type="Object">  The value of the keyword 'this' in the listener</param>
 /// <param name="args*" type="Array">       0..n additional arguments to supply the listener</param>
};
YUI.prototype.Test = function() {
};
YUI.prototype.Test.ArrayAssert = function() {
   /// <summary> The ArrayAssert object provides functions to test JavaScript array objectsfor a variety of cases. </summary>
};
YUI.prototype.Test.Case = function(template) {
   /// <summary> Test case containing various tests to run. </summary>
 /// <param name="template" type=""> An object containing any number of test methods, other methods,an optional name, and anything else the test case needs.</param>
};
YUI.prototype.Test.DateAssert = function() {
   /// <summary> The DateAssert object provides functions to test JavaScript Date objectsfor a variety of cases. </summary>
};
YUI.prototype.Test.Format = function() {
};
YUI.prototype.Test.Format.Mock = function(template) {
   /// <summary> Creates a new mock object. </summary>
 /// <param name="template" type="Object"> (Optional) An object whose methodsshould be stubbed out on the mock object.</param>
};
YUI.prototype.Test.Manager = function() {
   /// <summary> Runs pages containing test suite definitions. </summary>
};
YUI.prototype.Test.Reporter = function(url, format) {
   /// <summary> An object capable of sending test results to a server. </summary>
 /// <param name="url" type="String"> The URL to submit the results to.</param>
 /// <param name="format" type="Function"> (Optiona) A function that outputs the results in a specific format.Default is Y.Test.Format.XML.</param>
};
YUI.prototype.Test.Runner = function() {
   /// <summary> Runs test suites and test cases, providing events to allowing for theinterpretation of test results. </summary>
};
YUI.prototype.Test.Suite = function(data) {
   /// <summary> A test suite that can contain a collection of TestCase and TestSuite objects. </summary>
 /// <param name="data" type="String||Object"> The name of the test suite or an object containinga name property as well as setUp and tearDown methods.</param>
};
YUI.prototype.Test.TestNode = function(testObject) {
   /// <summary> A node in the test tree structure. May represent a TestSuite, TestCase, ortest function. </summary>
 /// <param name="testObject" type="Variant"> A TestSuite, TestCase, or the name of a test function.</param>
};
YUI.prototype.Test.Wait = function(segment, delay) {
   /// <summary> Represents a stoppage in test execution to wait for an amount of time beforecontinuing. </summary>
 /// <param name="segment" type="Function"> A function to run when the wait is over.</param>
 /// <param name="delay" type="int"> The number of milliseconds to wait before running the code.</param>
};
YUI.prototype.UA = function() {
   /// <summary> YUI user agent detection.Do not fork for a browser if it can be avoided.  Use feature detection whenyou can.  Use the user agent as a last resort.  UA stores a versionnumber for the browser engine, 0 otherwise.  This value may or may not mapto the version number of the browser using the engine.  The value is presented as a float so that it can easily be used for boolean evaluation as well as for looking for a particular range of versions.  Because of this, some of the granularity of the version info may be lost (e.g., Gecko 1.8.0.9 reports 1.8). </summary>
};
YUI.prototype.Widget = function(config) {
   /// <summary> A base class for widgets, providing:The render lifecycle method, in addition to the init and destroy lifecycle methods provide by BaseAbstract methods to support consistent MVC structure across widgets: renderer, renderUI, bindUI, syncUISupport for common widget attributes, such as boundingBox, contentBox, visible, disabled, focused, strings </summary>
 /// <param name="config" type="Object">  Object literal specifying widget configuration properties.</param>
};
YUI.prototype.WidgetPosition = function() {
   /// <summary> Widget extension, which can be used to add positioning support to the base Widget class, through the Base.build method. </summary>
};
YUI.prototype.WidgetPositionExt = function() {
   /// <summary> Widget extension, which can be used to add extended XY positioning support to the base Widget class,through the Base.build method. This extension requires that the WidgetPosition extension be added to the Widget (before WidgetPositionExt, if part of the same extension list passed to Base.build). </summary>
};
YUI.prototype.WidgetStack = function() {
   /// <summary> Widget extension, which can be used to add stackable (z-index) support to the base Widget class along with a shimming solution, through the Base.build method. </summary>
};
YUI.prototype.WidgetStdMod = function() {
   /// <summary> Widget extension, which can be used to add Standard Module support to the base Widget class, through the Base.build method.The extension adds header, body and footer sections to the Widget's content box and provides the corresponding methods and attributes to modify the contents of these sections. </summary>
};
YUI.prototype.config = function() {
   /// <summary> The config object contains all of the configuration options forthe YUI instance.  This object is supplied by the implementer when instantiating a YUI instance.  Some properties have defaultvalues if they are not supplied by the implementer. </summary>
};
YUI.prototype.io = function() {
   /// <summary> The io class is a utility that brokers HTTP requests through a simplifiedinterface.  Specifically, it allows JavaScript to make HTTP requests toa resource without a page reload.  The underlying transport for makingsame-domain requests is the XMLHttpRequest object.  YUI.io can also useFlash, if specified as a transport, for cross-domain requests. </summary>
};
YUI.prototype.plugin = function() {
};
YUI.prototype.plugin.NodeFocusManager = function() {
   /// <summary> The NodeFocusManager class is a plugin for a Node instance.  The class is used via the plug method of Node and should not be instantiated directly. </summary>
};
YUI.prototype.plugin.NodeMenuNav = function() {
   /// <summary> The NodeMenuNav class is a plugin for a Node instance.  The class is used via  the plug method of Node and should not be instantiated directly. </summary>
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
_yui_extend(YUI.prototype.Assert.ShouldError, YUI.prototype.Assert.Error);
_yui_extend(YUI.prototype.Assert.ShouldFail, YUI.prototype.Assert.Error);
_yui_extend(YUI.prototype.Assert.UnexpectedError, YUI.prototype.Assert.Error);
_yui_extend(YUI.prototype.Assert.UnexpectedValue, YUI.prototype.Assert.Error);
_yui_extend(YUI.prototype.DD.DDM, YUI.prototype.Base);
_yui_extend(YUI.prototype.DD.Drag, YUI.prototype.Base);
_yui_extend(YUI.prototype.DD.Drop, YUI.prototype.Base);
_yui_extend(YUI.prototype.DD.Scroll, YUI.prototype.Base);
_yui_extend(YUI.prototype.ImgLoadGroup, YUI.prototype.Base);
_yui_extend(YUI.prototype.ImgLoadImgObj, YUI.prototype.Base);
_yui_extend(YUI.prototype.Overlay, YUI.prototype.Widget);
_yui_extend(YUI.prototype.Plugin.Base, YUI.prototype.Base);
_yui_extend(YUI.prototype.Plugin.DDProxy, YUI.prototype.Base);
_yui_extend(YUI.prototype.Plugin.DDWindowScroll, YUI.prototype.DD.Scroll);
_yui_extend(YUI.prototype.Plugin.DragConstrained, YUI.prototype.Base);
_yui_extend(YUI.prototype.Plugin.NodeFX, YUI.prototype.Base);
_yui_extend(YUI.prototype.Slider, YUI.prototype.Widget);
_yui_extend(YUI.prototype.Widget, YUI.prototype.Base);
_yui_extend(YUI.prototype.Anim, YUI.prototype.Base);
_yui_extend(YUI.prototype.Assert.ComparisonFailure, YUI.prototype.Assert.Error);
_yui_extend(YUI.prototype.AsyncQueue, YUI.prototype.EventTarget);
_yui_extend(YUI.prototype.Cache, YUI.prototype.Plugin.Base);
_yui_extend(YUI.prototype.Console, YUI.prototype.Widget);
_yui_extend(YUI.prototype.Plugin.DDNodeScroll, YUI.prototype.DD.Scroll);
_yui_extend(YUI.prototype.Plugin.Drag, YUI.prototype.DD.Drag);
_yui_extend(YUI.prototype.Plugin.Drop, YUI.prototype.DD.Drop);
//Starting Methods
YUI.prototype.use = function(modules, callback) {
   /// <summary> Bind a module to a YUI instance </summary>
   /// <returns type="YUI" />
 /// <param name="modules*" type="string">  1-n modules to bind (uses arguments array)</param>
 /// <param name="*callback" type="function">  callback function executed when the instance has the required functionality.  If included, itmust be the last parameter.</param>
};
YUI.prototype.log = function(msg, cat, src, silent) {
   /// <summary> If the 'debug' config is true, a 'yui:log' event will bedispatched, which the Console widget and anything elsecan consume.  If the 'useBrowserConsole' config is true, it willwrite to the browser console if available.  YUI-specific logmessages will only be present in the -debug versions of theJS files.  The build system is supposed to remove log statementsfrom the raw and minified versions of the files. </summary>
   /// <returns type="YUI" />
 /// <param name="msg" type="String">  The message to log.</param>
 /// <param name="cat" type="String">  The log category for the message.  Defaultcategories are "info", "warn", "error", time".Custom categories can be used as well. (opt)</param>
 /// <param name="src" type="String">  The source of the the message (opt)</param>
 /// <param name="silent" type="boolean"> If true, the log event won't fire</param>
};
YUI.prototype.merge = function(arguments) {
   /// <summary> Returns a new object containing all of the properties ofall the supplied objects.  The properties from later objectswill overwrite those in earlier objects.  Passing in asingle object will create a shallow copy of it.  For a deepcopy, use clone. </summary>
   /// <returns type="object" />
 /// <param name="arguments" type="Object*">  the objects to merge</param>
};
YUI.prototype.applyTo = function(id, method, args) {
   /// <summary> Executes a method on a YUI instance withthe specified id if the specified method is whitelisted. </summary>
   /// <returns type="object" />
 /// <param name="id" type="string">  the YUI instance id</param>
 /// <param name="method" type="string">  the name of the method to exectute.Ex: 'Object.keys'</param>
 /// <param name="args" type="Array">  the arguments to apply to the method</param>
};
YUI.prototype.later = function(when, o, fn, data, periodic) {
   /// <summary> Executes the supplied function in the context of the supplied object 'when' milliseconds later.  Executes the function a single time unless periodic is set to true. </summary>
   /// <returns type="object" />
 /// <param name="when" type="int">  the number of milliseconds to wait until the fn is executed.</param>
 /// <param name="o" type=""> the context object.</param>
 /// <param name="fn" type="Function|String">  the function to execute or the name of the method in the 'o' object to execute.</param>
 /// <param name="data" type=""> [Array] data that is provided to the function.  This acceptseither a single item or an array.  If an array is provided, thefunction is executed with one parameter for each array item.  Ifyou need to pass a single array parameter, it needs to be wrapped inan array [myarray].</param>
 /// <param name="periodic" type="boolean">  if true, executes continuously at supplied interval until canceled.</param>
};
YUI.prototype["namespace"] = function(arguments) {
   /// <summary> Returns the namespace specified and creates it if it doesn't existYUI.namespace("property.package");YUI.namespace("YAHOO.property.package");Either of the above would create YUI.property, thenYUI.property.package (YAHOO is scrubbed out, this isto remain compatible with YUI2)Be careful when naming packages. Reserved words may work in some browsersand not others. For instance, the following will fail in Safari:YUI.namespace("really.long.nested.namespace");This fails because "long" is a future reserved word in ECMAScript </summary>
   /// <returns type="object" />
 /// <param name="arguments" type="string*"> 1-n namespaces to create</param>
};
YUI.prototype.mix = function(r, s, ov, wl, mode, merge) {
   /// <summary> Applies the supplier's properties to the receiver.  By defaultall prototype and static propertes on the supplier are appliedto the corresponding spot on the receiver.  By default allproperties are applied, and a property that is already on thereciever will not be overwritten.  The default behavior canbe modified by supplying the appropriate parameters. </summary>
   /// <returns type="object" />
 /// <param name="r" type="Function">  the object to receive the augmentation</param>
 /// <param name="s" type="Function">  the object that supplies the properties to augment</param>
 /// <param name="ov" type="boolean">  if true, properties already on the receiverwill be overwritten if found on the supplier.</param>
 /// <param name="wl" type="string[]">  a whitelist.  If supplied, only properties in this list will be applied to the receiver.</param>
 /// <param name="mode" type="int"> what should be copies, and to wheredefault(0): object to object1: prototype to prototype (old augment)2: prototype to prototype and object props (new augment)3: prototype to object4: object to prototype</param>
 /// <param name="merge" type="boolean">  merge objects instead of overwriting/ignoringUsed by Y.aggregate</param>
};
YUI.prototype.add = function(name, fn, version, details) {
   /// <summary> Register a module </summary>
   /// <returns type="YUI" />
 /// <param name="name" type="string">  module name</param>
 /// <param name="fn" type="Function">  entry point into the module thatis used to bind module to the YUI instance</param>
 /// <param name="version" type="string">  version string</param>
 /// <param name="details" type=""> optional config data: requires   - features that should be present before loadingoptional   - optional features that should be present if load optional defineduse  - features that should be attached automaticallyskinnable  -rollupomit - features that should not be loaded if this module is present</param>
};
YUIplug = function(plugin, config) {
   /// <summary> Registers plugins to be instantiated at the class level (plugins which should be plugged into every instance of Node by default). </summary>
 /// <param name="plugin" type="Function | Array"> Either the plugin class, an array of plugin classes or an array of objects (with fn and cfg properties defined)</param>
 /// <param name="config" type="Object"> (Optional) If plugin is the plugin class, the configuration for the plugin</param>
};
YUIunplug = function(plugin) {
   /// <summary> Unregisters any class level plugins which have been registered by the Node </summary>
 /// <param name="plugin" type="Function | Array"> The plugin class, or an array of plugin classes</param>
};
YUI.prototype.delegate = function(type, fn, el, spec, context, args) {
   /// <summary> Sets up event delegation on a container element.  The delegated eventwill use a supplied selector to test if the target or one of thedescendants of the target match it.  The supplied callback function will only be executed if a match was encountered, and, in fact, will be executed for each element that matches if you supply an ambiguous selector.The event object for the delegated event is supplied to the callbackfunction.  It is modified slightly in order to support all propertiesthat may be needed for event delegation.  'currentTarget' is set tothe element that matched the delegation specifcation.  'container' isset to the element that the listener is bound to (this normally wouldbe the 'currentTarget'). </summary>
   /// <returns type="EventHandle" />
 /// <param name="type" type="string">  the event type to delegate</param>
 /// <param name="fn" type="function">  the callback function to execute.  This functionwill be provided the event object for the delegated event.</param>
 /// <param name="el" type="string|node">  the element that is the delegation container</param>
 /// <param name="spec" type="string">  a selector that must match the target of theevent.</param>
 /// <param name="context" type=""> optional argument that specifies what 'this' refers to.</param>
 /// <param name="args*" type=""> 0..n additional arguments to pass on to the callback function.These arguments will be added after the event object.</param>
};
YUI.simulate = function(targetter, type, options) {
   /// <summary> Simulates the event with the given name on a target. </summary>
   /// <returns type="void" />
 /// <param name="target" type="HTMLElement"> The DOM element that's the target of the event.</param>
 /// <param name="type" type="String"> The type of event to simulate (i.e., "click").</param>
 /// <param name="options" type="Object"> (Optional) Extra options to copy onto the event object.</param>
};
YUI.prototype.error = function(msg, e) {
   /// <summary> Report an error.  The reporting mechanism is controled bythe 'throwFail' configuration attribute.  If throwFail isnot specified, the message is written to the Logger, otherwisea JS error is thrown </summary>
   /// <returns type="YUI" />
 /// <param name="msg" type="string">  the error message</param>
 /// <param name="e" type="Error">  Optional JS error that was caught.  If suppliedand throwFail is specified, this error will be re-thrown.</param>
};
YUI.prototype.cached = function(source, cache, refetch) {
   /// <summary> Returns a wrapper for a function which caches thereturn value of that function, keyed off of the combined argument values. </summary>
   /// <returns type="Function" />
 /// <param name="source" type="function">  the function to memoize</param>
 /// <param name="cache" type=""> an optional cache seed</param>
 /// <param name="refetch" type=""> if supplied, this value is tested against the cachedvalue.  If the values are equal, the wrapped function is executed again.</param>
};
YUI.prototype.message = function(msg, cat, src, silent) {
   /// <summary> Write a system message.  This message will be preserved in theminified and raw versions of the YUI files, unlike log statements. </summary>
   /// <returns type="YUI" />
 /// <param name="msg" type="String">  The message to log.</param>
 /// <param name="cat" type="String">  The log category for the message.  Defaultcategories are "info", "warn", "error", time".Custom categories can be used as well. (opt)</param>
 /// <param name="src" type="String">  The source of the the message (opt)</param>
 /// <param name="silent" type="boolean"> If true, the log event won't fire</param>
};
YUI.prototype.guid = function(pre) {
   /// <summary> Generate an id that is unique among all YUI instances </summary>
   /// <returns type="string" />
 /// <param name="pre" type="string">  optional guid prefix</param>
};
YUI.prototype.stamp = function(o, readOnly) {
   /// <summary> Returns a guid associated with an object.  If the objectdoes not have one, a new one is created unless readOnlyis specified. </summary>
   /// <returns type="string" />
 /// <param name="o" type=""> The object to stamp</param>
 /// <param name="readOnly" type="boolean">  if true, a valid guid will onlybe returned if the object has one assigned to it.</param>
};
YUI.prototype.Anim.getBezier = function(points, t) {
   /// <summary> Get the current position of the animated element based on t.Each point is an array of "x" and "y" values (0 = x, 1 = y)At least 2 points are required (start and end).First point is start. Last point is end.Additional control points are optional. </summary>
   /// <returns type="Array" />
 /// <param name="points" type="Array"> An array containing Bezier points</param>
 /// <param name="t" type="Number"> A number between 0 and 1 which is the basis for determining current position</param>
};
YUI.prototype.Anim.run = function() {
   /// <summary> Runs all animation instances. </summary>
};
YUI.prototype.Anim.pause = function() {
   /// <summary> Pauses all animation instances. </summary>
};
YUI.prototype.Anim.stop = function() {
   /// <summary> Stops all animation instances. </summary>
};
YUI.prototype.Array.hash = function(k, v) {
   /// <summary> Returns an object using the first array as keys, andthe second as values.  If the second array is notprovided the value is set to true for each. </summary>
   /// <returns type="object" />
 /// <param name="k" type="Array">  keyset</param>
 /// <param name="v" type="Array">  optional valueset</param>
};
YUI.prototype.Array.indexOf = function(a, val) {
   /// <summary> Returns the index of the first item in the arraythat contains the specified value, -1 if thevalue isn't found. </summary>
   /// <returns type="int" />
 /// <param name="a" type="Array">  the array to search</param>
 /// <param name="val" type=""> the value to search for</param>
};
YUI.prototype.Array.some = function(a, f, o) {
   /// <summary> Executes the supplied function on each item in the array.Returning true from the processing function will stop the processing of the remainingitems. </summary>
   /// <returns type="boolean" />
 /// <param name="a" type="Array">  the array to iterate</param>
 /// <param name="f" type="Function">  the function to execute on each item</param>
 /// <param name="o" type=""> Optional context object</param>
};
YUI.prototype.Array.each = function(a, f, o) {
   /// <summary> Executes the supplied function on each item in the array. </summary>
   /// <returns type="YUI" />
 /// <param name="a" type="Array">  the array to iterate</param>
 /// <param name="f" type="Function">  the function to execute on each item</param>
 /// <param name="o" type=""> Optional context object</param>
};
YUI.prototype.Array.test = function() {
   /// <summary> Evaluates the input to determine if it is an array, array-like, or something else.  This is used to handle the arguments collection available within functions, and HTMLElement collections </summary>
   /// <returns type="int" />
};
YUI.prototype.Array.prototype.numericSort = function() {
   /// <summary> Numeric sort convenience function.Y.ArrayAssert.itemsAreEqual([1, 2, 3], [3, 1, 2].sort(Y.Array.numericSort)); </summary>
};
YUI.prototype.Assert.isTrue = function(actual, message) {
   /// <summary> Asserts that a value is true. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isFalse = function(actual, message) {
   /// <summary> Asserts that a value is false. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isNotNull = function(actual, message) {
   /// <summary> Asserts that a value is not null. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.fail = function(message) {
   /// <summary> Forces an assertion error to occur. </summary>
 /// <param name="message" type="String"> (Optional) The message to display with the failure.</param>
};
YUI.prototype.Assert.isFunction = function(actual, message) {
   /// <summary> Asserts that a value is a function. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isNaN = function(actual, message) {
   /// <summary> Asserts that a value is not a number. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isBoolean = function(actual, message) {
   /// <summary> Asserts that a value is a Boolean. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.areNotSame = function(unexpected, actual, message) {
   /// <summary> Asserts that a value is not the same as another. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="unexpected" type="Object"> The unexpected value.</param>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isNotNaN = function(actual, message) {
   /// <summary> Asserts that a value is not the special NaN value. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.areNotEqual = function(unexpected, actual, message) {
   /// <summary> Asserts that a value is not equal to another. This uses the double equals signso type cohersion may occur. </summary>
 /// <param name="unexpected" type="Object"> The unexpected value.</param>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.areSame = function(expected, actual, message) {
   /// <summary> Asserts that a value is the same as another. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="expected" type="Object"> The expected value.</param>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert._getCount = function() {
   /// <summary> Returns the number of assertions that have been performed. </summary>
};
YUI.prototype.Assert.isUndefined = function(actual, message) {
   /// <summary> Asserts that a value is undefined. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isArray = function(actual, message) {
   /// <summary> Asserts that a value is an array. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assertassert = function(condition, message) {
   /// <summary> Asserts that a given condition is true. If not, then a Y.Assert.Error object is thrownand the test fails. </summary>
 /// <param name="condition" type="Boolean"> The condition to test.</param>
 /// <param name="message" type="String"> The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isTypeOf = function(expectedType, actualValue, message) {
   /// <summary> Asserts that a value is of a particular type. </summary>
 /// <param name="expectedType" type="String"> The expected type of the variable.</param>
 /// <param name="actualValue" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert._formatMessage = function(customMessage, defaultMessage) {
   /// <summary> Formats a message so that it can contain the original assertion messagein addition to the custom message. </summary>
   /// <returns type="String" />
 /// <param name="customMessage" type="String"> The message passed in by the developer.</param>
 /// <param name="defaultMessage" type="String"> The message created by the error by default.</param>
};
YUI.prototype.Assert._increment = function() {
   /// <summary> Increments the number of assertions that have been performed. </summary>
};
YUI.prototype.Assert.areEqual = function(expected, actual, message) {
   /// <summary> Asserts that a value is equal to another. This uses the double equals signso type cohersion may occur. </summary>
 /// <param name="expected" type="Object"> The expected value.</param>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isNumber = function(actual, message) {
   /// <summary> Asserts that a value is a number. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isObject = function(actual, message) {
   /// <summary> Asserts that a value is an object. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isString = function(actual, message) {
   /// <summary> Asserts that a value is a string. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isNotUndefined = function(actual, message) {
   /// <summary> Asserts that a value is not undefined. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isNull = function(actual, message) {
   /// <summary> Asserts that a value is null. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isInstanceOf = function(expected, actual, message) {
   /// <summary> Asserts that a value is an instance of a particular object. This may returnincorrect results when comparing objects from one frame to constructors inanother frame. For best results, don't use in a cross-frame manner. </summary>
 /// <param name="expected" type="Function"> The function that the object should be an instance of.</param>
 /// <param name="actual" type="Object"> The object to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert._reset = function() {
   /// <summary> Resets the number of assertions that have been performed to 0. </summary>
};
YUI.prototype.Assertfail = function(message) {
   /// <summary> Forces an assertion error to occur. Shortcut for Y.Assert.fail(). </summary>
 /// <param name="message" type="String"> (Optional) The message to display with the failure.</param>
};
YUI.prototype.Assert.isTrue = function(actual, message) {
   /// <summary> Asserts that a value is true. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isFalse = function(actual, message) {
   /// <summary> Asserts that a value is false. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isNotNull = function(actual, message) {
   /// <summary> Asserts that a value is not null. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.fail = function(message) {
   /// <summary> Forces an assertion error to occur. </summary>
 /// <param name="message" type="String"> (Optional) The message to display with the failure.</param>
};
YUI.prototype.Assert.isFunction = function(actual, message) {
   /// <summary> Asserts that a value is a function. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isNaN = function(actual, message) {
   /// <summary> Asserts that a value is not a number. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isBoolean = function(actual, message) {
   /// <summary> Asserts that a value is a Boolean. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.areNotSame = function(unexpected, actual, message) {
   /// <summary> Asserts that a value is not the same as another. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="unexpected" type="Object"> The unexpected value.</param>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isNotNaN = function(actual, message) {
   /// <summary> Asserts that a value is not the special NaN value. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.areNotEqual = function(unexpected, actual, message) {
   /// <summary> Asserts that a value is not equal to another. This uses the double equals signso type cohersion may occur. </summary>
 /// <param name="unexpected" type="Object"> The unexpected value.</param>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.areSame = function(expected, actual, message) {
   /// <summary> Asserts that a value is the same as another. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="expected" type="Object"> The expected value.</param>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert._getCount = function() {
   /// <summary> Returns the number of assertions that have been performed. </summary>
};
YUI.prototype.Assert.isUndefined = function(actual, message) {
   /// <summary> Asserts that a value is undefined. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isArray = function(actual, message) {
   /// <summary> Asserts that a value is an array. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assertassert = function(condition, message) {
   /// <summary> Asserts that a given condition is true. If not, then a Y.Assert.Error object is thrownand the test fails. </summary>
 /// <param name="condition" type="Boolean"> The condition to test.</param>
 /// <param name="message" type="String"> The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isTypeOf = function(expectedType, actualValue, message) {
   /// <summary> Asserts that a value is of a particular type. </summary>
 /// <param name="expectedType" type="String"> The expected type of the variable.</param>
 /// <param name="actualValue" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert._formatMessage = function(customMessage, defaultMessage) {
   /// <summary> Formats a message so that it can contain the original assertion messagein addition to the custom message. </summary>
   /// <returns type="String" />
 /// <param name="customMessage" type="String"> The message passed in by the developer.</param>
 /// <param name="defaultMessage" type="String"> The message created by the error by default.</param>
};
YUI.prototype.Assert._increment = function() {
   /// <summary> Increments the number of assertions that have been performed. </summary>
};
YUI.prototype.Assert.areEqual = function(expected, actual, message) {
   /// <summary> Asserts that a value is equal to another. This uses the double equals signso type cohersion may occur. </summary>
 /// <param name="expected" type="Object"> The expected value.</param>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isNumber = function(actual, message) {
   /// <summary> Asserts that a value is a number. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isObject = function(actual, message) {
   /// <summary> Asserts that a value is an object. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isString = function(actual, message) {
   /// <summary> Asserts that a value is a string. </summary>
 /// <param name="actual" type="Object"> The value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isNotUndefined = function(actual, message) {
   /// <summary> Asserts that a value is not undefined. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isNull = function(actual, message) {
   /// <summary> Asserts that a value is null. This uses the triple equals signso no type cohersion may occur. </summary>
 /// <param name="actual" type="Object"> The actual value to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.isInstanceOf = function(expected, actual, message) {
   /// <summary> Asserts that a value is an instance of a particular object. This may returnincorrect results when comparing objects from one frame to constructors inanother frame. For best results, don't use in a cross-frame manner. </summary>
 /// <param name="expected" type="Function"> The function that the object should be an instance of.</param>
 /// <param name="actual" type="Object"> The object to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert._reset = function() {
   /// <summary> Resets the number of assertions that have been performed to 0. </summary>
};
YUI.prototype.Assertfail = function(message) {
   /// <summary> Forces an assertion error to occur. Shortcut for Y.Assert.fail(). </summary>
 /// <param name="message" type="String"> (Optional) The message to display with the failure.</param>
};
YUI.prototype.Assert.ComparisonFailure.prototype.toString = function() {
   /// <summary> Returns a fully formatted error for an assertion failure. This messageprovides information about the expected and actual values. </summary>
   /// <returns type="String" />
};
YUI.prototype.Assert.Error.prototype.getMessage = function() {
   /// <summary> Returns a fully formatted error for an assertion failure. This shouldbe overridden by all subclasses to provide specific information. </summary>
   /// <returns type="String" />
};
YUI.prototype.Assert.Error.prototype.valueOf = function() {
   /// <summary> Returns a primitive value version of the error. Same as toString(). </summary>
   /// <returns type="String" />
};
YUI.prototype.Assert.Error.prototype.toString = function() {
   /// <summary> Returns a string representation of the error. </summary>
   /// <returns type="String" />
};
YUI.prototype.Assert.ObjectAssert.hasKey = function(propertyName, object, message) {
   /// <summary> Asserts that an object has a property with the given name. </summary>
 /// <param name="propertyName" type="String"> The name of the property to test.</param>
 /// <param name="object" type="Object"> The object to search.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.ObjectAssert.hasKeys = function(properties, object, message) {
   /// <summary> Asserts that an object has all properties of a reference object. </summary>
 /// <param name="properties" type="Array"> An array of property names that should be on the object.</param>
 /// <param name="object" type="Object"> The object to search.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.ObjectAssert.ownsNoKeys = function(object, message) {
   /// <summary> Asserts that an object owns no properties. </summary>
 /// <param name="object" type="Object"> The object to check.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.ObjectAssert.ownsKey = function(propertyName, object, message) {
   /// <summary> Asserts that a property with the given name exists on an object instance (not on its prototype). </summary>
 /// <param name="propertyName" type="String"> The name of the property to test.</param>
 /// <param name="object" type="Object"> The object to search.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.ObjectAssert.ownsKeys = function(properties, object, message) {
   /// <summary> Asserts that all properties exist on an object instance (not on its prototype). </summary>
 /// <param name="properties" type="Array"> An array of property names that should be on the object.</param>
 /// <param name="object" type="Object"> The object to search.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Assert.UnexpectedValue.prototype.getMessage = function() {
   /// <summary> Returns a fully formatted error for an assertion failure. The messagecontains information about the unexpected value that was encountered. </summary>
   /// <returns type="String" />
};
YUI.prototype.AsyncQueue.prototype._initEvents = function() {
   /// <summary> Initializes the instance events. </summary>
};
YUI.prototype.AsyncQueue.prototype.pause = function() {
   /// <summary> Pause the execution of the queue after the execution of the currentcallback completes.  If called from code outside of a queued callback,clears the timeout for the pending callback. Paused queue can berestarted with q.run() </summary>
   /// <returns type="AsyncQueue" />
};
YUI.prototype.AsyncQueue.prototype.run = function() {
   /// <summary> Sets the queue in motion.  All queued callbacks will be executed inorder unless pause() or stop() is called or if one of the callbacks isconfigured with autoContinue: false. </summary>
   /// <returns type="AsyncQueue" />
};
YUI.prototype.AsyncQueue.prototype._schedule = function(callback) {
   /// <summary> Schedules the execution of asynchronous callbacks. </summary>
   /// <returns type="Boolean" />
 /// <param name="callback" type="Object">  the callback object to execute</param>
};
YUI.prototype.AsyncQueue.prototype._defShiftFn = function(e) {
   /// <summary> Default functionality for the &quot;shift&quot; event.  Shifts thecallback stored in the event object's callback property fromthe queue if it is the first item. </summary>
 /// <param name="e" type="Event">  The event object</param>
};
YUI.prototype.AsyncQueue.prototype._execute = function(callback) {
   /// <summary> Handles the execution of callbacks. Returns a boolean indicatingwhether it is appropriate to continue running. </summary>
   /// <returns type="Boolean" />
 /// <param name="callback" type="Object">  the callback object to execute</param>
};
YUI.prototype.AsyncQueue.prototype._init = function() {
   /// <summary> Initializes the AsyncQueue instance properties and events. </summary>
};
YUI.prototype.AsyncQueue.prototype.stop = function() {
   /// <summary> Stop and clear the queue after the current execution of thecurrent callback completes. </summary>
   /// <returns type="AsyncQueue" />
};
YUI.prototype.AsyncQueue.prototype.remove = function(callback) {
   /// <summary> Removes the callback from the queue.  If the queue is active, theremoval is scheduled to occur after the current callback has completed. </summary>
   /// <returns type="AsyncQueue" />
 /// <param name="callback" type="String|Object">  the callback object or a callback's id</param>
};
YUI.prototype.AsyncQueue.prototype.next = function() {
   /// <summary> Returns the next callback needing execution.  If a callback isconfigured to repeat via iterations or until, it will be returned untilthe completion criteria is met.When the queue is empty, null is returned. </summary>
   /// <returns type="Function" />
};
YUI.prototype.AsyncQueue.prototype.indexOf = function(callback) {
   /// <summary> Returns the current index of a callback.  Pass in either the id orcallback function from getCallback. </summary>
   /// <returns type="Number" />
 /// <param name="callback" type="String|Function">  the callback or its specified id</param>
};
YUI.prototype.AsyncQueue.prototype.add = function(callback) {
   /// <summary> Add any number of callbacks to the end of the queue. Callbacks may beprovided as functions or objects. </summary>
   /// <returns type="AsyncQueue" />
 /// <param name="callback*" type="Function|Object">  0..n callbacks</param>
};
YUI.prototype.AsyncQueue.prototype._defExecFn = function(e) {
   /// <summary> Default functionality for the &quot;execute&quot; event.  Executes thecallback function </summary>
 /// <param name="e" type="Event">  the event object</param>
};
YUI.prototype.AsyncQueue.prototype.getCallback = function(id) {
   /// <summary> Retrieve a callback by its id.  Useful to modify the configurationwhile the queue is running. </summary>
   /// <returns type="Object" />
 /// <param name="id" type="String">  the id assigned to the callback</param>
};
YUI.prototype.AsyncQueue.prototype._defPromoteFn = function(e) {
   /// <summary> Default functionality for the &quot;promote&quot; event.  Promotes thenamed callback to the head of the queue.The event object will contain a property &quot;callback&quot;, whichholds the id of a callback or the callback object itself. </summary>
 /// <param name="e" type="Event">  the custom event</param>
};
YUI.prototype.AsyncQueue.prototype._defRemoveFn = function(e) {
   /// <summary> Default functionality for the &quot;remove&quot; event.  Removes thecallback from the queue.The event object will contain a property &quot;callback&quot;, whichholds the id of a callback or the callback object itself. </summary>
 /// <param name="e" type="Event">  the custom event</param>
};
YUI.prototype.AsyncQueue.prototype._prepare = function(callback) {
   /// <summary> Creates a wrapper function to execute the callback using the aggregated configuration generated by combining the static AsyncQueue.defaults, theinstance defaults, and the specified callback settings.The wrapper function is decorated with the callback configuration asproperties for runtime modification. </summary>
   /// <returns type="Function" />
 /// <param name="callback" type="Object|Function">  the raw callback</param>
};
YUI.prototype.AsyncQueue.prototype.promote = function(callback) {
   /// <summary> Promotes the named callback to the top of the queue. If a callback iscurrently executing or looping (via until or iterations), the promotionis scheduled to occur after the current callback has completed. </summary>
   /// <returns type="AsyncQueue" />
 /// <param name="callback" type="String|Object">  the callback object or a callback's id</param>
};
YUI.prototype.AsyncQueue.prototype._defAddFn = function(e) {
   /// <summary> Default functionality for the &quot;add&quot; event.  Adds the callbacksin the event facade to the queue. Callbacks successfully added to thequeue are present in the event's added property in theafter phase. </summary>
 /// <param name="e" type="Event">  the event object</param>
};
YUI.prototype.AsyncQueue.prototype.isRunning = function() {
   /// <summary> Determines if the queue is waiting for a callback to complete execution. </summary>
   /// <returns type="Boolean" />
};
YUI.prototype.AsyncQueue.prototype.size = function() {
   /// <summary> Returns the number of callbacks in the queue. </summary>
   /// <returns type="Number" />
};
YUI.prototype.Attribute.prototype["set"] = function(name, value, opts) {
   /// <summary> Sets the value of an attribute. </summary>
   /// <returns type="Object" />
 /// <param name="name" type="String"> The name of the attribute. If the current value of the attribute is an Object, dot notation can be usedto set the value of a property within the object (e.g. set("x.y.z", 5)).</param>
 /// <param name="value" type="Any"> The value to set the attribute to.</param>
 /// <param name="opts" type="Object"> (Optional) Optional event data to be mixed intothe event facade passed to subscribers of the attribute's change event. This can be used as a flexible way to identify the source of a call to set, allowing the developer to distinguish between set called internally by the host, vs. set called externally by the application developer.</param>
};
YUI.prototype.Attribute.prototype.getAttrs = function(attrs) {
   /// <summary> Gets multiple attribute values. </summary>
   /// <returns type="Object" />
 /// <param name="attrs" type="Array | boolean"> Optional. An array of attribute names. If omitted, all attribute values arereturned. If set to true, all attributes modified from their initial values are returned.</param>
};
YUI.prototype.Attribute.prototype.modifyAttr = function(name, config) {
   /// <summary> Updates the configuration of an attribute which has already been added.The properties which can be modified through this interface are limitedto the following subset of attributes, which can be safely modifiedafter a value has already been set on the attribute: readOnly, writeOnce, broadcast and getter. </summary>
 /// <param name="name" type="String"> The name of the attribute whose configuration is to be updated.</param>
 /// <param name="config" type="Object"> An object with configuration property/value pairs, specifying the configuration properties to modify.</param>
};
YUI.prototype.Attribute.prototype._setAttr = function(name, value, opts, force) {
   /// <summary> Provides the common implementation for the public set and protected _set methods.See set for argument details. </summary>
   /// <returns type="Object" />
 /// <param name="name" type="String"> The name of the attribute.</param>
 /// <param name="value" type="Any"> The value to set the attribute to.</param>
 /// <param name="opts" type="Object"> (Optional) Optional event data to be mixed intothe event facade passed to subscribers of the attribute's change event.</param>
 /// <param name="force" type="boolean"> If true, allows the caller to set values for readOnly or writeOnce attributes which have already been set.</param>
};
YUI.prototype.Attribute.prototype.reset = function(name) {
   /// <summary> Resets the attribute (or all attributes) to its initial value, as long asthe attribute is not readOnly, or writeOnce. </summary>
   /// <returns type="Object" />
 /// <param name="name" type="String"> Optional. The name of the attribute to reset.  If omitted, all attributes are reset.</param>
};
YUI.prototype.Attribute.prototype.removeAttr = function(name) {
   /// <summary> Removes an attribute from the host object </summary>
 /// <param name="name" type="String"> The name of the attribute to be removed.</param>
};
YUI.prototype.Attribute.prototype["get"] = function(name) {
   /// <summary> Returns the current value of the attribute. If the attributehas been configured with a 'getter' function, this method will delegateto the 'getter' to obtain the value of the attribute. </summary>
   /// <returns type="Any" />
 /// <param name="name" type="String"> The name of the attribute. If the value of the attribute is an Object, dot notation can be used to obtain the value of a property of the object (e.g. get("x.y.z"))</param>
};
YUI.prototype.Attribute.prototype.addAttrs = function(cfgs, values, lazy) {
   /// <summary> Configures a group of attributes, and sets initial values.NOTE: This method does not isolate the configuration object by merging/cloning. The caller is responsible for merging/cloning the configuration object if required. </summary>
   /// <returns type="Object" />
 /// <param name="cfgs" type="Object"> An object with attribute name/configuration pairs.</param>
 /// <param name="values" type="Object"> An object with attribute name/value pairs, defining the initial values to apply.Values defined in the cfgs argument will be over-written by values in this argument unless defined as read only.</param>
 /// <param name="lazy" type="boolean"> Whether or not to delay the intialization of these attributes until the first call to get/set.Individual attributes can over-ride this behavior by defining a lazyAdd configuration property in their configuration.See addAttr.</param>
};
YUI.prototype.Attribute.prototype._getAttr = function(name) {
   /// <summary> Provides the common implementation for the public get method,allowing Attribute hosts to over-ride either method.See get for argument details. </summary>
   /// <returns type="Any" />
 /// <param name="name" type="String"> The name of the attribute.</param>
};
YUI.prototype.Attribute.prototype.addAttr = function(name, config, lazy) {
   /// <summary> Adds an attribute with the provided configuration to the host object.The config argument object supports the following properties:value &#60;Any&#62;The initial value to set on the attributevalueFn &#60;Function&#62;A function, which will return the initial value to set on the attribute. This is usefulfor cases where the attribute configuration is defined statically, but needs to reference the host instance ("this") to obtain an initial value.If defined, this precedence over the value property.readOnly &#60;boolean&#62;Whether or not the attribute is read only. Attributes having readOnly set to truecannot be modified by invoking the set method.writeOnce &#60;boolean&#62;Whether or not the attribute is "write once". Attributes having writeOnce set to true, can only have their values set once, be it through the default configuration, constructor configuration arguments, or by invoking set.setter &#60;Function&#62;The setter function used to massage or normalize the value passed to the set method for the attribute. The value returned by the setter will be the final stored value. ReturningAttribute.INVALID_VALUE, from the setter will preventthe value from being stored.getter &#60;Function&#62;The getter function used to massage or normalize the value returned by the get method for the attribute.The value returned by the getter function is the value which will be returned to the user when they invoke get.validator &#60;Function&#62;The validator function invoked prior to setting the stored value. Returningfalse from the validator function will prevent the value from being stored.broadcast &#60;int&#62;If and how attribute change events for this attribute should be broadcast. See CustomEvent's broadcast property for valid values. By default attribute change events are not broadcast.lazyAdd &#60;boolean&#62;Whether or not to delay initialization of the attribute until the first call to get/set it. This flag can be used to over-ride lazy initialization on a per attribute basis, when adding multiple attributes through the addAttrs method.The setter, getter and validator are invoked with the value and name passed in as the first and second arguments, and withthe context ("this") set to the host object. </summary>
   /// <returns type="Object" />
 /// <param name="name" type="String"> The name of the attribute.</param>
 /// <param name="config" type="Object"> An object with attribute configuration property/value pairs, specifying the configuration for the attribute.NOTE: The configuration object is modified when adding an attribute, so if you need to protect the original values, you will need to merge the object.</param>
 /// <param name="lazy" type="boolean"> (optional) Whether or not to add this attribute lazily (on the first call to get/set).</param>
};
YUI.prototype.Attribute.prototype.attrAdded = function(name) {
   /// <summary> Checks if the given attribute has been added to the host </summary>
   /// <returns type="boolean" />
 /// <param name="name" type="String"> The name of the attribute to check.</param>
};
YUI.prototype.Attribute.prototype.setAttrs = function(attrs) {
   /// <summary> Sets multiple attribute values. </summary>
   /// <returns type="Object" />
 /// <param name="attrs" type="Object">  An object with attributes name/value pairs.</param>
};
YUI.prototype.Attribute.prototype._set = function(name, val, opts) {
   /// <summary> Allows setting of readOnly/writeOnce attributes. See set for argument details. </summary>
   /// <returns type="Object" />
 /// <param name="name" type="String"> The name of the attribute.</param>
 /// <param name="val" type="Any"> The value to set the attribute to.</param>
 /// <param name="opts" type="Object"> (Optional) Optional event data to be mixed intothe event facade passed to subscribers of the attribute's change event.</param>
};
YUI.prototype.Baseunplug = function() {
   /// <summary> Alias for Plugin.Host.unplug. See the aliased method for argument and return value details. </summary>
};
YUI.prototype.Base.prototype._defInitFn = function(e) {
   /// <summary> Default init event handler </summary>
 /// <param name="e" type="EventFacade"> Event object, with a cfg property which refers to the configuration object passed to the constructor.</param>
};
YUI.prototype.Base.prototype.init = function(config) {
   /// <summary> Init lifecycle method, invoked during construction.Fires the init event prior to setting up attributes and invoking initializers for the class hierarchy. </summary>
   /// <returns type="Base" />
 /// <param name="config" type="Object"> Object with configuration property name/value pairs</param>
};
YUI.prototype.Base.prototype._defDestroyFn = function(e) {
   /// <summary> Default destroy event handler </summary>
 /// <param name="e" type="EventFacade"> Event object</param>
};
YUI.prototype.Base.prototype.toString = function() {
   /// <summary> Default toString implementation. Provides the constructor NAMEand the instance ID. </summary>
   /// <returns type="String" />
};
YUI.prototype.Baseplug = function() {
   /// <summary> Alias for Plugin.Host.plug. See aliased method for argument and return value details. </summary>
};
YUI.prototype.Base.prototype._getAttrCfgs = function() {
   /// <summary> Returns an aggregated set of attribute configurations, by traversing the class hierarchy. </summary>
   /// <returns type="Object" />
};
YUI.prototype.Base.prototype._getClasses = function() {
   /// <summary> Returns the class hierarchy for this object, with Base being the last class in the array. </summary>
   /// <returns type="Function[]" />
};
YUI.prototype.Base.prototype.destroy = function() {
   /// <summary> Destroy lifecycle method. Fires the destroyevent, prior to invoking destructors for theclass hierarchy.Subscribers to the destroyevent can invoke preventDefault on the event object, to prevent destructionfrom proceeding. </summary>
   /// <returns type="Base" />
};
YUI.prototype.Basebuild = function(name, main, extensions, cfg) {
   /// <summary> Builds a custom constructor function (class) from themain function, and array of extension functions (classes)provided. The NAME field for the constructor function is defined by the first argument passed in.The cfg object supports the following propertiesdynamic &#60;boolean&#62;If true (default), a completely new classis created which extends the main class, and acts as the host on which the extension classes are augmented.If false, the extensions classes are augmented directly tothe main class, modifying the main class' prototype.aggregates &#60;String[]&#62;An array of static property names, which will get aggregatedon to the built class, in addition to the default properties build will always aggregate as defined by the main class' static _buildCfgproperty. </summary>
   /// <returns type="Function" />
 /// <param name="name" type="Function"> The name of the new class. Used to defined the NAME property for the new class.</param>
 /// <param name="main" type="Function"> The main class on which to base the built class</param>
 /// <param name="extensions" type="Function[]"> The set of extension classes which will beaugmented/aggregated to the built class.</param>
 /// <param name="cfg" type="Object"> Optional. Build configuration for the class (see description).</param>
};
YUI.prototype.Cache.prototype.retrieve = function(request) {
   /// <summary> Retrieves cached entry for given request, if available, and refreshesentry in the cache. Returns null if there is no cache match. </summary>
   /// <returns type="Object" />
 /// <param name="request" type="Object">  Request object.</param>
};
YUI.prototype.Cache.prototype._isMatch = function(request, entry) {
   /// <summary> Default overridable method compares current request with given cache entry.Returns true if current request matches the cached request, otherwisefalse. Implementers should override this method to customize thecache-matching algorithm. </summary>
   /// <returns type="Boolean" />
 /// <param name="request" type="Object">  Request object.</param>
 /// <param name="entry" type="Object">  Cached entry.</param>
};
YUI.prototype.Cache.prototype._defFlushFn = function(e) {
   /// <summary> Flushes cache. </summary>
 /// <param name="e" type="Event.Facade">  Event Facade object.</param>
};
YUI.prototype.Cache.prototype.add = function(request, response, payload) {
   /// <summary> Adds a new entry to the cache of the format{request:request, response:response, payload:payload}.If cache is full, evicts the stalest entry before adding the new one. </summary>
 /// <param name="request" type="Object">  Request value.</param>
 /// <param name="response" type="Object">  Response value.</param>
 /// <param name="payload" type="Object">  (optional) Arbitrary data payload.</param>
};
YUI.prototype.Cache.prototype.flush = function() {
   /// <summary> Flushes cache. </summary>
};
YUI.prototype.Cache.prototype._defAddFn = function(e) {
   /// <summary> Adds entry to cache. </summary>
 /// <param name="e" type="Event.Facade">  Event Facade with the following properties:entry (Object) The cached entry.</param>
};
YUI.prototype.ClassNameManager.getClassName = function() {
   /// <summary> Returns a class name prefixed with the the value of the Y.config.classNamePrefix attribute + the provided strings.Uses the Y.config.classNameDelimiter attribute to delimit the provided strings. E.g. Y.ClassNameManager.getClassName('foo','bar'); // yui-foo-bar </summary>
 /// <param name="+" type="String"> one or more classname bits to be joined and prefixed</param>
};
YUI.prototype.Console.prototype._normalizeMessage = function(e) {
   /// <summary> Create a log entry message from the inputs including the following keys:time - this momentmessage - leg messagecategory - logLevel or custom category for the messagesource - when provided, the widget or util calling Y.logsourceAndDetail - same as source but can include instance infolocalTime - readable version of timeelapsedTime - ms since last entrytotalTime - ms since Console was instantiated or reset </summary>
   /// <returns type="" />
 /// <param name="e" type="Event">  custom event containing the log message</param>
};
YUI.prototype.Console.prototype._uiUpdateCollapsed = function(v) {
   /// <summary> Updates the UI to reflect the new Collapsed state </summary>
 /// <param name="v" type="Boolean">  true for collapsed, false for expanded</param>
};
YUI.prototype.Console.prototype._afterStringsChange = function(e) {
   /// <summary> Updates the UI if changes are made to any of the strings in the stringsattribute. </summary>
 /// <param name="e" type="Event">  Custom event for the attribute change</param>
};
YUI.prototype.Console.prototype._defEntryFn = function(e) {
   /// <summary> Buffers incoming message objects and schedules the printing. </summary>
 /// <param name="e" type="Event">  The Custom event carrying the message in its payload</param>
};
YUI.prototype.Console.prototype._cancelPrintLoop = function() {
   /// <summary> Clears the timeout for printing buffered messages. </summary>
};
YUI.prototype.Console.prototype._trimOldEntries = function() {
   /// <summary> Removes the oldest message entries from the UI to maintain the limitspecified in the consoleLimit configuration. </summary>
};
YUI.prototype.Console.prototype._defResetFn = function() {
   /// <summary> Clears the console, resets the startTime attribute, enables andunpauses the widget. </summary>
};
YUI.prototype.Console.prototype._encodeHTML = function(s) {
   /// <summary> Returns the input string with ampersands (&amp;), &lt, and &gt; encodedas HTML entities. </summary>
   /// <returns type="" />
 /// <param name="s" type="String">  the raw string</param>
};
YUI.prototype.Console.prototype._uiSetHeight = function(v) {
   /// <summary> Set the height of the Console container.  Set the body height to the difference between the configured height and the calculated heights of the header and footer.Overrides Widget.prototype._uiSetHeight. </summary>
 /// <param name="v" type="String|Number">  the new height</param>
};
YUI.prototype.Console.prototype._onCollapseClick = function(e) {
   /// <summary> Event handler for clicking on the Collapse/Expand button. Sets the&quot;collapsed&quot; attribute accordingly. </summary>
 /// <param name="e" type="Event">  DOM event facade for the click event</param>
};
YUI.prototype.Console.prototype.log = function(arg) {
   /// <summary> Wrapper for Y.log. </summary>
 /// <param name="arg*" type="MIXED">  (all arguments passed through to Y.log)</param>
};
YUI.prototype.Console.prototype._initBody = function() {
   /// <summary> Create the DOM structure for the console body&#8212;where messages arerendered. </summary>
};
YUI.prototype.Console.prototype._onLogEvent = function(msg, cat, src) {
   /// <summary> Responds to log events by normalizing qualifying messages and passingthem along through the entry event for buffering etc. </summary>
 /// <param name="msg" type="String">  the log message</param>
 /// <param name="cat" type="String">  OPTIONAL the category or logLevel of the message</param>
 /// <param name="src" type="String">  OPTIONAL the source of the message (e.g. widget name)</param>
};
YUI.prototype.Console.prototype._afterPausedChange = function(e) {
   /// <summary> Updates the UI and schedules or cancels the print loop. </summary>
 /// <param name="e" type="Event">  Custom event for the attribute change</param>
};
YUI.prototype.Console.prototype._validateStyle = function(style) {
   /// <summary> Validates input value for style attribute.  Accepts only values 'inline','block', and 'separate'. </summary>
   /// <returns type="Boolean" />
 /// <param name="style" type="String">  the proposed value</param>
};
YUI.prototype.Console.prototype.destructor = function() {
   /// <summary> Tears down the instance, flushing event subscriptions and purging the UI. </summary>
};
YUI.prototype.Console.prototype._initHead = function() {
   /// <summary> Create the DOM structure for the header elements. </summary>
};
YUI.prototype.Console.prototype._afterConsoleLimitChange = function(e) {
   /// <summary> Calls this._trimOldEntries() in response to changes in the configuredconsoleLimit attribute. </summary>
 /// <param name="e" type="Event">  Custom event for the attribute change</param>
};
YUI.prototype.Console.prototype.bindUI = function() {
   /// <summary> Set up event listeners to wire up the UI to the internal state. </summary>
};
YUI.prototype.Console.prototype._schedulePrint = function() {
   /// <summary> Sets an interval for buffered messages to be output to the console. </summary>
};
YUI.prototype.Console.prototype._htmlEscapeMessage = function(m) {
   /// <summary> Performs HTML escaping on strings in the message object. </summary>
   /// <returns type="" />
 /// <param name="m" type="Object">  the normalized message object</param>
};
YUI.prototype.Console.prototype.collapse = function() {
   /// <summary> Collapses the body and footer. </summary>
};
YUI.prototype.Console.prototype._onPauseClick = function(e) {
   /// <summary> Event handler for clicking on the Pause checkbox to update the pausedattribute. </summary>
 /// <param name="e" type="Event">  DOM event facade for the click event</param>
};
YUI.prototype.Console.prototype._afterVisibleChange = function(e) {
   /// <summary> Makes adjustments to the UI if needed when the Console is hidden or shown </summary>
 /// <param name="e" type="Event">  the visibleChange event</param>
};
YUI.prototype.Console.prototype.scrollToLatest = function() {
   /// <summary> Scrolls to the most recent entry </summary>
};
YUI.prototype.Console.prototype._onClearClick = function(e) {
   /// <summary> Event handler for clicking on the Clear button.  Pass-through tothis.clearConsole(). </summary>
 /// <param name="e" type="Event">  DOM event facade for the click event</param>
};
YUI.prototype.Console.prototype.initializer = function() {
   /// <summary> Constructor code.  Set up the buffer and entry template, publishinternal events, and subscribe to the configured logEvent. </summary>
};
YUI.prototype.Console.prototype._uiUpdateFromHideShow = function(v) {
   /// <summary> Recalculates dimensions and updates appropriately when shown </summary>
 /// <param name="v" type="Boolean">  true for visible, false for hidden</param>
};
YUI.prototype.Console.prototype.clearConsole = function() {
   /// <summary> Clear the console of messages and flush the buffer of pending messages. </summary>
};
YUI.prototype.Console.prototype.expand = function() {
   /// <summary> Expands the body and footer if collapsed. </summary>
};
YUI.prototype.Console.prototype._uiUpdatePaused = function(on) {
   /// <summary> Checks or unchecks the paused checkbox </summary>
 /// <param name="on" type="Boolean">  the new checked state</param>
};
YUI.prototype.Console.prototype.reset = function() {
   /// <summary> Clears the console and resets internal timers. </summary>
};
YUI.prototype.Console.prototype.syncUI = function() {
   /// <summary> Sync the UI state to the current attribute state. </summary>
};
YUI.prototype.Console.prototype._afterCollapsedChange = function(e) {
   /// <summary> Updates the className of the contentBox, which should trigger CSS tohide or show the body and footer sections depending on the new value. </summary>
 /// <param name="e" type="Event">  Custom event for the attribute change</param>
};
YUI.prototype.Console.prototype._initFoot = function() {
   /// <summary> Create the DOM structure for the footer elements. </summary>
};
YUI.prototype.Console.prototype.printBuffer = function(limit) {
   /// <summary> Outputs buffered messages to the console UI.  This is typically calledfrom a scheduled interval until the buffer is empty (referred to as theprint loop).  The number of buffered messages output to the Console islimited to the number provided as an argument.  If no limit is passed,all buffered messages are rendered. </summary>
 /// <param name="limit" type="Number">  (optional) max number of buffered entries to write</param>
};
YUI.prototype.Console.prototype._setLogLevel = function(v) {
   /// <summary> Setter method for logLevel attribute.  Acceptable values are&quot;error&quot, &quot;warn&quot, and &quot;info&quot (caseinsensitive).  Other values are treated as &quot;info&quot;. </summary>
   /// <returns type="" />
 /// <param name="v" type="String">  the desired log level</param>
};
YUI.prototype.Console.prototype._createEntryHTML = function(m) {
   /// <summary> Translates message meta into the markup for a console entry. </summary>
   /// <returns type="" />
 /// <param name="m" type="Object">  object literal containing normalized message metadata</param>
};
YUI.prototype.Console.prototype._isInLogLevel = function() {
   /// <summary> Determine if incoming log messages are within the configured logLevelto be buffered for printing. </summary>
};
YUI.prototype.Console.prototype.renderUI = function() {
   /// <summary> Generate the Console UI. </summary>
};
YUI.prototype.Cookie.setSub = function(name, subName, value, options) {
   /// <summary> Sets a sub cookie with a given name to a particular value. </summary>
   /// <returns type="String" />
 /// <param name="name" type="String"> The name of the cookie to set.</param>
 /// <param name="subName" type="String"> The name of the subcookie to set.</param>
 /// <param name="value" type="Variant"> The value to set.</param>
 /// <param name="options" type="Object"> (Optional) An object containing one or morecookie options: path (a string), domain (a string), expires (a Date object),and secure (true/false).</param>
};
YUI.prototype.Cookie["set"] = function(name, value, options) {
   /// <summary> Sets a cookie with a given name and value. </summary>
   /// <returns type="String" />
 /// <param name="name" type="String"> The name of the cookie to set.</param>
 /// <param name="value" type="Variant"> The value to set for the cookie.</param>
 /// <param name="options" type="Object"> (Optional) An object containing one or morecookie options: path (a string), domain (a string), expires (a Date object),secure (true/false), and raw (true/false). Setting raw to true indicatesthat the cookie should not be URI encoded before being set.</param>
};
YUI.prototype.Cookie.setSubs = function(name, value, options) {
   /// <summary> Sets a cookie with a given name to contain a hash of name-value pairs. </summary>
   /// <returns type="String" />
 /// <param name="name" type="String"> The name of the cookie to set.</param>
 /// <param name="value" type="Object"> An object containing name-value pairs.</param>
 /// <param name="options" type="Object"> (Optional) An object containing one or morecookie options: path (a string), domain (a string), expires (a Date object),and secure (true/false).</param>
};
YUI.prototype.Cookie.exists = function(name) {
   /// <summary> Determines if the cookie with the given name exists. This is useful forBoolean cookies (those that do not follow the name=value convention). </summary>
   /// <returns type="Boolean" />
 /// <param name="name" type="String"> The name of the cookie to check.</param>
};
YUI.prototype.Cookie["get"] = function(name, options) {
   /// <summary> Returns the cookie value for the given name. </summary>
   /// <returns type="Variant" />
 /// <param name="name" type="String"> The name of the cookie to retrieve.</param>
 /// <param name="options" type="Function|Object"> (Optional) An object containing one or morecookie options: raw (true/false) and converter (a function).The converter function is run on the value before returning it. Thefunction is not used if the cookie doesn't exist. The function can bepassed instead of the options object for backwards compatibility. Whenraw is set to true, the cookie value is not URI decoded.</param>
};
YUI.prototype.Cookie.remove = function(name, options) {
   /// <summary> Removes a cookie from the machine by setting its expiration date tosometime in the past. </summary>
   /// <returns type="String" />
 /// <param name="name" type="String"> The name of the cookie to remove.</param>
 /// <param name="options" type="Object"> (Optional) An object containing one or morecookie options: path (a string), domain (a string), and secure (true/false). The expires option will be overwrittenby the method.</param>
};
YUI.prototype.Cookie.removeSub = function(name, subName, options) {
   /// <summary> Removes a sub cookie with a given name. </summary>
   /// <returns type="String" />
 /// <param name="name" type="String"> The name of the cookie in which the subcookie exists.</param>
 /// <param name="subName" type="String"> The name of the subcookie to remove.</param>
 /// <param name="options" type="Object"> (Optional) An object containing one or morecookie options: path (a string), domain (a string), expires (a Date object),removeIfEmpty (true/false), and secure (true/false). This must be the samesettings as the original subcookie.</param>
};
YUI.prototype.Cookie.getSubs = function(name) {
   /// <summary> Returns an object containing name-value pairs stored in the cookie with the given name. </summary>
   /// <returns type="Object" />
 /// <param name="name" type="String"> The name of the cookie to retrieve.</param>
};
YUI.prototype.Cookie.getSub = function(name, subName, converter) {
   /// <summary> Returns the value of a subcookie. </summary>
   /// <returns type="Variant" />
 /// <param name="name" type="String"> The name of the cookie to retrieve.</param>
 /// <param name="subName" type="String"> The name of the subcookie to retrieve.</param>
 /// <param name="converter" type="Function"> (Optional) A function to run on the value before returningit. The function is not used if the cookie doesn't exist.</param>
};
YUI.prototype.CustomEvent.prototype.on = function(fn) {
   /// <summary> Listen for this event </summary>
   /// <returns type="EventHandle|EventTarget" />
 /// <param name="fn" type="Function">        The function to execute</param>
};
YUI.prototype.CustomEvent.prototype.stopImmediatePropagation = function() {
   /// <summary> Stops propagation to bubble targets, and prevents any remainingsubscribers on the current target from executing. </summary>
};
YUI.prototype.CustomEvent.prototype.halt = function(immediate) {
   /// <summary> Stops the event propagation and prevents the defaultevent behavior. </summary>
 /// <param name="immediate" type="boolean">  if true additional listenerson the current target will not be executed</param>
};
YUI.prototype.CustomEvent.prototype.subscribe = function(fn) {
   /// <summary> Listen for this event </summary>
   /// <returns type="EventHandle|EventTarget" />
 /// <param name="fn" type="Function">        The function to execute</param>
};
YUI.prototype.CustomEvent.prototype.fire = function(arguments) {
   /// <summary> Notifies the subscribers.  The callback functions will be executedfrom the context specified when the event was created, and with the following parameters:The type of eventAll of the arguments fire() was executed with as an arrayThe custom object (if any) that was passed into the subscribe() method </summary>
   /// <returns type="boolean" />
 /// <param name="arguments" type="Object*"> an arbitrary set of parameters to pass to the handler.</param>
};
YUI.prototype.CustomEvent.prototype.unsubscribeAll = function() {
   /// <summary> Removes all listeners </summary>
   /// <returns type="int" />
};
YUI.prototype.CustomEvent.prototype.preventDefault = function() {
   /// <summary> Prevents the execution of this event's defaultFn </summary>
};
YUI.prototype.CustomEvent.prototype.applyConfig = function(o, force) {
   /// <summary> Apply configuration properties.  Only applies the CONFIG whitelist </summary>
 /// <param name="o" type=""> hash of properties to apply</param>
 /// <param name="force" type="boolean">  if true, properties that exist on the event will be overwritten.</param>
};
YUI.prototype.CustomEvent.prototype.detachAll = function() {
   /// <summary> Removes all listeners </summary>
   /// <returns type="int" />
};
YUI.prototype.CustomEvent.prototype.unsubscribe = function(fn, context) {
   /// <summary> Detach listeners. </summary>
   /// <returns type="boolean|EventTarget" />
 /// <param name="fn" type="Function">  The subscribed function to remove, if not suppliedall will be removed</param>
 /// <param name="context" type="Object"> The context object passed to subscribe.</param>
};
YUI.prototype.CustomEvent.prototype.detach = function(fn, context) {
   /// <summary> Detach listeners. </summary>
   /// <returns type="int|EventTarget" />
 /// <param name="fn" type="Function">  The subscribed function to remove, if not suppliedall will be removed</param>
 /// <param name="context" type="Object"> The context object passed to subscribe.</param>
};
YUI.prototype.CustomEvent.prototype.stopPropagation = function() {
   /// <summary> Stop propagation to bubble targets </summary>
};
YUI.prototype.CustomEvent.prototype.after = function(fn) {
   /// <summary> Listen for this event after the normal subscribers have been notified andthe default behavior has been applied.  If a normal subscriber prevents the default behavior, it also prevents after listeners from firing. </summary>
   /// <returns type="EventHandle|EventTarget" />
 /// <param name="fn" type="Function">        The function to execute</param>
};
YUI.prototype.CustomEvent.prototype.log = function(msg, cat) {
   /// <summary> Logger abstraction to centralize the application of the silent flag </summary>
 /// <param name="msg" type="string">  message to log</param>
 /// <param name="cat" type="string">  log category</param>
};
YUI.prototype.DD.DDM.prototype.stopDrag = function() {
   /// <summary> Method will forcefully stop a drag operation. For example calling this from inside an ESC keypress handler will stop this drag. </summary>
   /// <returns type="Self" />
};
YUI.prototype.DD.DDM.prototype.syncActiveShims = function(force) {
   /// <summary> This method will sync the position of the shims on the Drop Targets that are currently active. </summary>
 /// <param name="force" type="Boolean"> Resize/sync all Targets.</param>
};
YUI.prototype.DD.DDM.prototype.clearCache = function() {
   /// <summary> Clears the cache data used for this interaction. </summary>
};
YUI.prototype.DD.DDM.prototype.getBestMatch = function(drops, all) {
   /// <summary> This method will gather the area for all potential targets and see which has the hightest covered area and return it. </summary>
   /// <returns type="Object or Array" />
 /// <param name="drops" type="Array"> An Array of drops to scan for the best match.</param>
 /// <param name="all" type="Boolean"> If present, it returns an Array. First item is best match, second is an Array of the other items in the original Array.</param>
};
YUI.prototype.DD.DDM.prototype.isOverTarget = function(drop) {
   /// <summary> Check to see if the Drag element is over the target, method varies on current mode </summary>
   /// <returns type="Boolean" />
 /// <param name="drop" type="Object"> The drop to check against</param>
};
YUI.prototype.DD.DDM.prototype.getDrop = function(node) {
   /// <summary> Get a valid Drop instance back from a Node or a selector string, false otherwise </summary>
   /// <returns type="Object" />
 /// <param name="node" type="String/Object"> The Node instance or Selector string to check for a valid Drop Object</param>
};
YUI.prototype.DD.DDM.prototype.getDrag = function(node) {
   /// <summary> Get a valid Drag instance back from a Node or a selector string, false otherwise </summary>
   /// <returns type="Object" />
 /// <param name="node" type="String/Object"> The Node instance or Selector string to check for a valid Drag Object</param>
};
YUI.prototype.DD.Drag.addToGroup = function(g) {
   /// <summary> Add this Drag instance to a group, this should be used for on-the-fly group additions. </summary>
   /// <returns type="Self" />
 /// <param name="g" type="String"> The group to add this Drag Instance to.</param>
};
YUI.prototype.DD.Drag.stopDrag = function() {
   /// <summary> Method will forcefully stop a drag operation. For example calling this from inside an ESC keypress handler will stop this drag. </summary>
   /// <returns type="Self" />
};
YUI.prototype.DD.Drag.removeInvalid = function(str) {
   /// <summary> Remove an invalid handle added by addInvalid </summary>
   /// <returns type="Self" />
 /// <param name="str" type="String"> The invalid handle to remove from the internal list.</param>
};
YUI.prototype.DD.Drag.addHandle = function(str) {
   /// <summary> Add a handle to a drag element. Drag only initiates when a mousedown happens on this element. </summary>
   /// <returns type="Self" />
 /// <param name="str" type="String"> The selector to test for a valid handle. Must be a child of the element.</param>
};
YUI.prototype.DD.Drag.removeHandle = function(str) {
   /// <summary> Remove a Selector added by addHandle </summary>
   /// <returns type="Self" />
 /// <param name="str" type="String"> The selector for the handle to be removed.</param>
};
YUI.prototype.DD.Drag.end = function() {
   /// <summary> Ends the drag operation </summary>
   /// <returns type="Self" />
};
YUI.prototype.DD.Drag.start = function() {
   /// <summary> Starts the drag operation </summary>
   /// <returns type="Self" />
};
YUI.prototype.DD.Drag.removeFromGroup = function(g) {
   /// <summary> Remove this Drag instance from a group, this should be used for on-the-fly group removals. </summary>
   /// <returns type="Self" />
 /// <param name="g" type="String"> The group to remove this Drag Instance from.</param>
};
YUI.prototype.DD.Drag.addInvalid = function(str) {
   /// <summary> Add a selector string to test the handle against. If the test passes the drag operation will not continue. </summary>
   /// <returns type="Self" />
 /// <param name="str" type="String"> The selector to test against to determine if this is an invalid drag handle.</param>
};
YUI.prototype.DD.Drag.validClick = function() {
   /// <summary> Method first checks to see if we have handles, if so it validates the click against the handle. Then if it finds a valid handle, it checks it against the invalid handles list. Returns true if a good handle was used, false otherwise. </summary>
   /// <returns type="Boolean" />
};
YUI.prototype.DD.Drop.sizeShim = function() {
   /// <summary> Positions and sizes the shim with the raw data from the node, this can be used to programatically adjust the Targets shim for Animation.. </summary>
};
YUI.prototype.DD.Drop.inGroup = function(groups) {
   /// <summary> Check if this target is in one of the supplied groups. </summary>
   /// <returns type="" />
 /// <param name="groups" type="Array"> The groups to check against</param>
};
YUI.prototype.DD.Scroll.prototype.end = function() {
   /// <summary> Called from the drag:end event </summary>
};
YUI.prototype.DD.Scroll.prototype.align = function() {
   /// <summary> Called from the drag:align event to determine if we need to scroll. </summary>
};
YUI.prototype.DD.Scroll.prototype.start = function() {
   /// <summary> Called from the drag:start event </summary>
};
YUI.prototype.DD.Scroll.prototype.toString = function() {
   /// <summary> General toString method for logging </summary>
   /// <returns type="" />
};
YUI.prototype.DOM.replaceClass = function(element, oldClassName, newClassName) {
   /// <summary> Replace a class with another class for a given element.If no oldClassName is present, the newClassName is simply added. </summary>
 /// <param name="element" type="HTMLElement"> The DOM element.</param>
 /// <param name="oldClassName" type="String"> the class name to be replaced</param>
 /// <param name="newClassName" type="String"> the class name that will be replacing the old class name</param>
};
YUI.prototype.DOM.addHTML = function(node, content, where) {
   /// <summary> Inserts content in a node at the given location </summary>
 /// <param name="node" type="HTMLElement"> The node to insert into</param>
 /// <param name="content" type="String"> The content to be inserted</param>
 /// <param name="where" type="String"> Where to insert the content; default is after lastChild</param>
};
YUI.prototype.DOM.getText = function(element) {
   /// <summary> Returns the text content of the HTMLElement. </summary>
   /// <returns type="String" />
 /// <param name="element" type="HTMLElement"> The html element.</param>
};
YUI.prototype.DOM.setStyle = function(An, att, val) {
   /// <summary> Sets a style property for a given element. </summary>
 /// <param name="An" type="HTMLElement"> HTMLElement to apply the style to.</param>
 /// <param name="att" type="String"> The style property to set.</param>
 /// <param name="val" type="String|Number"> The value.</param>
};
YUI.prototype.DOM.getX = function(element) {
   /// <summary> Gets the current X position of an element based on page coordinates. Element must be part of the DOM tree to have page coordinates(display:none or elements not appended return false). </summary>
   /// <returns type="Int" />
 /// <param name="element" type=""> The target element</param>
};
YUI.prototype.DOM.getY = function(element) {
   /// <summary> Gets the current Y position of an element based on page coordinates. Element must be part of the DOM tree to have page coordinates(display:none or elements not appended return false). </summary>
   /// <returns type="Int" />
 /// <param name="element" type=""> The target element</param>
};
YUI.prototype.DOM.byId = function(id, doc) {
   /// <summary> Returns the HTMLElement with the given ID (Wrapper for document.getElementById). </summary>
   /// <returns type="HTMLElement | null" />
 /// <param name="id" type="String"> the id attribute</param>
 /// <param name="doc" type="Object"> optional The document to search. Defaults to current document</param>
};
YUI.prototype.DOM.create = function(html, doc) {
   /// <summary> Creates a new dom node using the provided markup string. </summary>
 /// <param name="html" type="String"> The markup used to create the element</param>
 /// <param name="doc" type="HTMLDocument"> An optional document context</param>
};
YUI.prototype.DOM.contains = function(element, needle) {
   /// <summary> Determines whether or not one HTMLElement is or contains another HTMLElement. </summary>
   /// <returns type="Boolean" />
 /// <param name="element" type="HTMLElement"> The containing html element.</param>
 /// <param name="needle" type="HTMLElement"> The html element that may be contained.</param>
};
YUI.prototype.DOM.getComputedStyle = function(An, att) {
   /// <summary> Returns the computed style for the given node. </summary>
   /// <returns type="String" />
 /// <param name="An" type="HTMLElement"> HTMLElement to get the style from.</param>
 /// <param name="att" type="String"> The style property to get.</param>
};
YUI.prototype.DOM.winHeight = function() {
   /// <summary> Returns the inner height of the viewport (exludes scrollbar). </summary>
   /// <returns type="Number" />
};
YUI.prototype.DOM.setStyles = function(node, hash) {
   /// <summary> Sets multiple style properties. </summary>
 /// <param name="node" type="HTMLElement"> An HTMLElement to apply the styles to.</param>
 /// <param name="hash" type="Object"> An object literal of property:value pairs.</param>
};
YUI.prototype.DOM.toggleClass = function(element, className) {
   /// <summary> If the className exists on the node it is removed, if it doesn't exist it is added. </summary>
 /// <param name="element" type="HTMLElement"> The DOM element.</param>
 /// <param name="className" type="String"> the class name to be toggled</param>
};
YUI.prototype.DOM.inDoc = function(element, doc) {
   /// <summary> Determines whether or not the HTMLElement is part of the document. </summary>
   /// <returns type="Boolean" />
 /// <param name="element" type="HTMLElement"> The containing html element.</param>
 /// <param name="doc" type="HTMLElement"> optional The document to check.</param>
};
YUI.prototype.DOM.addClass = function(element, className) {
   /// <summary> Adds a class name to a given DOM element. </summary>
 /// <param name="element" type="HTMLElement"> The DOM element.</param>
 /// <param name="className" type="String"> the class name to add to the class attribute</param>
};
YUI.prototype.DOM.winWidth = function() {
   /// <summary> Returns the inner width of the viewport (exludes scrollbar). </summary>
   /// <returns type="Number" />
};
YUI.prototype.DOM.removeClass = function(element, className) {
   /// <summary> Removes a class name from a given element. </summary>
 /// <param name="element" type="HTMLElement"> The DOM element.</param>
 /// <param name="className" type="String"> the class name to remove from the class attribute</param>
};
YUI.prototype.DOM.docScrollY = function() {
   /// <summary> Amount page has been scroll vertically </summary>
   /// <returns type="Number" />
};
YUI.prototype.DOM.docScrollX = function() {
   /// <summary> Amount page has been scroll horizontally </summary>
   /// <returns type="Number" />
};
YUI.prototype.DOM.docHeight = function() {
   /// <summary> Document height </summary>
   /// <returns type="Number" />
};
YUI.prototype.DOM.getStyle = function(An, att) {
   /// <summary> Returns the current style value for the given property. </summary>
 /// <param name="An" type="HTMLElement"> HTMLElement to get the style from.</param>
 /// <param name="att" type="String"> The style property to get.</param>
};
YUI.prototype.DOM.setXY = function(element, xy, noRetry) {
   /// <summary> Set the position of an html element in page coordinates.The element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false). </summary>
 /// <param name="element" type=""> The target element</param>
 /// <param name="xy" type="Array"> Contains X & Y values for new position (coordinates are page-based)</param>
 /// <param name="noRetry" type="Boolean"> By default we try and set the position a second time if the first fails</param>
};
YUI.prototype.DOM.setAttibute = function(el, attr, val) {
   /// <summary> Provides a normalized attribute interface. </summary>
 /// <param name="el" type="String | HTMLElement"> The target element for the attribute.</param>
 /// <param name="attr" type="String"> The attribute to set.</param>
 /// <param name="val" type="String"> The value of the attribute.</param>
};
YUI.prototype.DOM.setX = function(element, x) {
   /// <summary> Set the X position of an html element in page coordinates, regardless of how the element is positioned.The element(s) must be part of the DOM tree to have page coordinates (display:none or elements not appended return false). </summary>
 /// <param name="element" type=""> The target element</param>
 /// <param name="x" type="Int"> The X values for new position (coordinates are page-based)</param>
};
YUI.prototype.DOM.setY = function(element, y) {
   /// <summary> Set the Y position of an html element in page coordinates, regardless of how the element is positioned.The element(s) must be part of the DOM tree to have page coordinates (display:none or elements not appended return false). </summary>
 /// <param name="element" type=""> The target element</param>
 /// <param name="y" type="Int"> The Y values for new position (coordinates are page-based)</param>
};
YUI.prototype.DOM.getXY = function(element) {
   /// <summary> Gets the current position of an element based on page coordinates. Element must be part of the DOM tree to have page coordinates(display:none or elements not appended return false). </summary>
   /// <returns type="Array" />
 /// <param name="element" type=""> The target element</param>
};
YUI.prototype.DOM.elementByAxis = function(element, axis, fn, all) {
   /// <summary> Searches the element by the given axis for the first matching element. </summary>
   /// <returns type="HTMLElement | null" />
 /// <param name="element" type="HTMLElement"> The html element.</param>
 /// <param name="axis" type="String"> The axis to search (parentNode, nextSibling, previousSibling).</param>
 /// <param name="fn" type="Function"> optional An optional boolean test to apply.</param>
 /// <param name="all" type="Boolean"> optional Whether all node types should be returned, or just element nodes.The optional function is passed the current HTMLElement being tested as its only argument.If no function is given, the first element is returned.</param>
};
YUI.prototype.DOM.docWidth = function() {
   /// <summary> Document width </summary>
   /// <returns type="Number" />
};
YUI.prototype.DOM.setText = function(element, content) {
   /// <summary> Sets the text content of the HTMLElement. </summary>
 /// <param name="element" type="HTMLElement"> The html element.</param>
 /// <param name="content" type="String"> The content to add.</param>
};
YUI.prototype.DOM.getAttibute = function(el, attr) {
   /// <summary> Provides a normalized attribute interface. </summary>
   /// <returns type="String" />
 /// <param name="el" type="String | HTMLElement"> The target element for the attribute.</param>
 /// <param name="attr" type="String"> The attribute to get.</param>
};
YUI.prototype.DOM.hasClass = function(element, className) {
   /// <summary> Determines whether a DOM element has the given className. </summary>
   /// <returns type="Boolean" />
 /// <param name="element" type="HTMLElement"> The DOM element.</param>
 /// <param name="className" type="String"> the class name to search for</param>
};
YUI.prototype.DOMEventFacade.prototype.stopImmediatePropagation = function() {
   /// <summary> Stops the propagation to the next bubble target andprevents any additional listeners from being exectuedon the current target. </summary>
};
YUI.prototype.DOMEventFacade.prototype.stopPropagation = function() {
   /// <summary> Stops the propagation to the next bubble target </summary>
};
YUI.prototype.DOMEventFacade.prototype.preventDefault = function(returnValue) {
   /// <summary> Prevents the event's default behavior </summary>
 /// <param name="returnValue" type="string">  sets the returnValue of the event to this value(rather than the default false value).  This can be used to add a customized confirmation query to the beforeunload event).</param>
};
YUI.prototype.DOMEventFacade.prototype.halt = function(immediate) {
   /// <summary> Stops the event propagation and prevents the defaultevent behavior. </summary>
 /// <param name="immediate" type="boolean">  if true additional listenerson the current target will not be executed</param>
};
YUI.prototype.Do.detach = function(handle) {
   /// <summary> Detach a before or after subscription </summary>
 /// <param name="handle" type="string">  the subscription handle</param>
};
YUI.prototype.Do.after = function(fn, obj, sFn, c) {
   /// <summary> Execute the supplied method after the specified function </summary>
   /// <returns type="string" />
 /// <param name="fn" type="Function">  the function to execute</param>
 /// <param name="obj" type=""> the object hosting the method to displace</param>
 /// <param name="sFn" type="string">  the name of the method to displace</param>
 /// <param name="c" type=""> The execution context for fn</param>
};
YUI.prototype.Do.before = function(fn, obj, sFn, c) {
   /// <summary> Execute the supplied method before the specified function </summary>
   /// <returns type="string" />
 /// <param name="fn" type="Function">  the function to execute</param>
 /// <param name="obj" type=""> the object hosting the method to displace</param>
 /// <param name="sFn" type="string">  the name of the method to displace</param>
 /// <param name="c" type=""> The execution context for fn</param>
};
YUI.prototype.Do.Method.prototype["delete"] = function(sid, fn, when) {
   /// <summary> Unregister a aop subscriber </summary>
 /// <param name="sid" type="string">  the subscriber id</param>
 /// <param name="fn" type="Function">  the function to execute</param>
 /// <param name="when" type="string">  when to execute the function</param>
};
YUI.prototype.Do.Method.prototype.register = function(sid, fn, when) {
   /// <summary> Register a aop subscriber </summary>
 /// <param name="sid" type="string">  the subscriber id</param>
 /// <param name="fn" type="Function">  the function to execute</param>
 /// <param name="when" type="string">  when to execute the function</param>
};
YUI.prototype.Do.Method.prototype.exec = function() {
   /// <summary> Execute the wrapped method </summary>
};
YUI.prototype.Easing.easeIn = function(t, b, c, d) {
   /// <summary> Begins slowly and accelerates towards end. (quadratic) </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YUI.prototype.Easing.easeInStrong = function(t, b, c, d) {
   /// <summary> Begins slowly and accelerates towards end. (quartic) </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YUI.prototype.Easing.bounceBoth = function(t, b, c, d) {
   /// <summary> Bounces off start and end. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YUI.prototype.Easing.backOut = function(t, b, c, d, s) {
   /// <summary> Overshoots end, then reverses and comes back to end. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
 /// <param name="s" type="Number"> Overshoot (optional)</param>
};
YUI.prototype.Easing.elasticOut = function(t, b, c, d, a, p) {
   /// <summary> Snap out elastic effect. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
 /// <param name="a" type="Number"> Amplitude (optional)</param>
 /// <param name="p" type="Number"> Period (optional)</param>
};
YUI.prototype.Easing.bounceOut = function(t, b, c, d) {
   /// <summary> Bounces off end. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YUI.prototype.Easing.backBoth = function(t, b, c, d, s) {
   /// <summary> Backtracks slightly, then reverses direction, overshoots end, then reverses and comes back to end. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
 /// <param name="s" type="Number"> Overshoot (optional)</param>
};
YUI.prototype.Easing.elasticBoth = function(t, b, c, d, a, p) {
   /// <summary> Snap both elastic effect. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
 /// <param name="a" type="Number"> Amplitude (optional)</param>
 /// <param name="p" type="Number"> Period (optional)</param>
};
YUI.prototype.Easing.easeBoth = function(t, b, c, d) {
   /// <summary> Begins slowly and decelerates towards end. (quadratic) </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YUI.prototype.Easing.bounceIn = function(t, b, c, d) {
   /// <summary> Bounce off of start. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YUI.prototype.Easing.easeOutStrong = function(t, b, c, d) {
   /// <summary> Begins quickly and decelerates towards end.  (quartic) </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YUI.prototype.Easing.easeNone = function(t, b, c, d) {
   /// <summary> Uniform speed between points. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YUI.prototype.Easing.elasticIn = function(t, b, c, d, a, p) {
   /// <summary> Snap in elastic effect. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
 /// <param name="a" type="Number"> Amplitude (optional)</param>
 /// <param name="p" type="Number"> Period (optional)</param>
};
YUI.prototype.Easing.easeBothStrong = function(t, b, c, d) {
   /// <summary> Begins slowly and decelerates towards end. (quartic) </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YUI.prototype.Easing.easeOut = function(t, b, c, d) {
   /// <summary> Begins quickly and decelerates towards end.  (quadratic) </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
};
YUI.prototype.Easing.backIn = function(t, b, c, d, s) {
   /// <summary> Backtracks slightly, then reverses direction and moves to end. </summary>
   /// <returns type="Number" />
 /// <param name="t" type="Number"> Time value used to compute current value</param>
 /// <param name="b" type="Number"> Starting value</param>
 /// <param name="c" type="Number"> Delta between start and end values</param>
 /// <param name="d" type="Number"> Total length of animation</param>
 /// <param name="s" type="Number"> Overshoot (optional)</param>
};
YUI.prototype.Event.getListeners = function(el, type) {
   /// <summary> Returns all listeners attached to the given element via addListener.Optionally, you can specify a specific type of event to return. </summary>
   /// <returns type="Y.Custom.Event" />
 /// <param name="el" type="HTMLElement|string">  the element or element id to inspect</param>
 /// <param name="type" type="string">  optional type of listener to return. Ifleft out, all listeners will be returned</param>
};
YUI.prototype.Event.getEvent = function(e, el) {
   /// <summary> Finds the event in the window object, the caller's arguments, orin the arguments of another method in the callstack.  This isexecuted automatically for events registered through the eventmanager, so the implementer should not normally need to executethis function at all. </summary>
   /// <returns type="Event" />
 /// <param name="e" type="Event"> the event parameter from the handler</param>
 /// <param name="el" type="HTMLElement"> the element the listener was attached to</param>
};
YUI.prototype.Event.purgeElement = function(el, recurse, type) {
   /// <summary> Removes all listeners attached to the given element via addListener.Optionally, the node's children can also be purged.Optionally, you can specify a specific type of event to remove. </summary>
 /// <param name="el" type="HTMLElement"> the element to purge</param>
 /// <param name="recurse" type="boolean"> recursively purge this element's childrenas well.  Use with caution.</param>
 /// <param name="type" type="string"> optional type of listener to purge. Ifleft out, all listeners will be removed</param>
};
YUI.prototype.Event.onContentReady = function(id, fn, p_obj, p_override) {
   /// <summary> Works the same way as onAvailable, but additionally checks thestate of sibling elements to determine if the content of theavailable element is safe to modify.The callback is executed with a single parameter:the custom object parameter, if provided. </summary>
 /// <param name="id" type="string"> the id of the element to look for.</param>
 /// <param name="fn" type="function"> what to execute when the element is ready.</param>
 /// <param name="p_obj" type="object"> an optional object to be passed back asa parameter to fn.</param>
 /// <param name="p_override" type="boolean|object"> If set to true, fn will executein the context of p_obj.  If an object, fn willexectute in the context of that object</param>
};
YUI.prototype.Event.generateId = function(el) {
   /// <summary> Generates an unique ID for the element if it does not already have one. </summary>
   /// <returns type="string" />
 /// <param name="el" type=""> the element to create the id for</param>
};
YUI.prototype.Event.attach = function(type, fn, el, context, args) {
   /// <summary> Adds an event listener </summary>
   /// <returns type="EventHandle" />
 /// <param name="type" type="String">     The type of event to append</param>
 /// <param name="fn" type="Function">        The method the event invokes</param>
 /// <param name="el" type="String|HTMLElement|Array|NodeList"> An id, an element reference, or a collection of ids and/or elements to assign the listener to.</param>
 /// <param name="context" type="Object"> optional context object</param>
 /// <param name="args" type="Boolean|object"> 0..n arguments to pass to the callback</param>
};
YUI.prototype.Event.onAvailable = function(id, fn, p_obj, p_override, checkContent) {
   /// <summary> Executes the supplied callback when the item with the suppliedid is found.  This is meant to be used to execute behavior assoon as possible as the page loads.  If you use this after theinitial page load it will poll for a fixed time for the element.The number of times it will poll and the frequency areconfigurable.  By default it will poll for 10 seconds.The callback is executed with a single parameter:the custom object parameter, if provided. </summary>
 /// <param name="id" type="string||string[]"> the id of the element, or an arrayof ids to look for.</param>
 /// <param name="fn" type="function"> what to execute when the element is found.</param>
 /// <param name="p_obj" type="object"> an optional object to be passed back asa parameter to fn.</param>
 /// <param name="p_override" type="boolean|object"> If set to true, fn will executein the context of p_obj, if set to an object itwill execute in the context of that object</param>
 /// <param name="checkContent" type="boolean">  check child node readiness (onContentReady)</param>
};
YUI.prototype.Event.detach = function(type, fn, el) {
   /// <summary> Removes an event listener.  Supports the signature the event was boundwith, but the preferred way to remove listeners is using the handlethat is returned when using Y.on </summary>
   /// <returns type="boolean" />
 /// <param name="type" type="String"> the type of event to remove.</param>
 /// <param name="fn" type="Function"> the method the event invokes.  If fn isundefined, then all event handlers for the type of event are removed.</param>
 /// <param name="el" type="String|HTMLElement|Array|NodeList|EventHandle"> An event handle, an id, an element reference, or a collection of ids and/or elements to remove the listener from.</param>
};
YUI.prototype.EventFacade.prototype.stopImmediatePropagation = function() {
   /// <summary> Stops the propagation to the next bubble target andprevents any additional listeners from being exectuedon the current target. </summary>
};
YUI.prototype.EventFacade.prototype.stopPropagation = function() {
   /// <summary> Stops the propagation to the next bubble target </summary>
};
YUI.prototype.EventFacade.prototype.preventDefault = function() {
   /// <summary> Prevents the event's default behavior </summary>
};
YUI.prototype.EventFacade.prototype.halt = function(immediate) {
   /// <summary> Stops the event propagation and prevents the defaultevent behavior. </summary>
 /// <param name="immediate" type="boolean">  if true additional listenerson the current target will not be executed</param>
};
YUI.prototype.EventHandle.prototype.detach = function() {
   /// <summary> Detaches this subscriber </summary>
};
YUI.prototype.EventTarget.on = function(type, fn) {
   /// <summary> Subscribe to a custom event hosted by this object </summary>
   /// <returns type="" />
 /// <param name="type" type="string">       The type of the event</param>
 /// <param name="fn" type="Function">  The callback</param>
};
YUI.prototype.EventTarget.detach = function(type, fn, context) {
   /// <summary> Detach one or more listeners the from the specified event </summary>
   /// <returns type="EventTarget" />
 /// <param name="type" type="string|Object">    Either the handle to the subscriber or the type of event.  If the typeis not specified, it will attempt to removethe listener from all hosted events.</param>
 /// <param name="fn" type="Function">    The subscribed function to unsubscribe, if notsupplied, all subscribers will be removed.</param>
 /// <param name="context" type="Object">     The custom object passed to subscribe.  This isoptional, but if supplied will be used todisambiguate multiple listeners that are the same(e.g., you subscribe many object using a functionthat lives on the prototype)</param>
};
YUI.prototype.EventTarget.getEvent = function(type) {
   /// <summary> Returns the custom event of the provided type has been created, afalsy value otherwise </summary>
   /// <returns type="Event.Custom" />
 /// <param name="type" type="string">  the type, or name of the event</param>
};
YUI.prototype.EventTarget.removeTarget = function(o) {
   /// <summary> Removes a bubble target </summary>
 /// <param name="o" type="EventTarget">  the target to remove</param>
};
YUI.prototype.EventTarget.fire = function(type, arguments) {
   /// <summary> Fire a custom event by name.  The callback functions will be executedfrom the context specified when the event was created, and with the following parameters.If the custom event object hasn't been created, then the event hasn't been published and it has no subscribers.  For performance sake, we immediate exit in this case.  This means the event won't bubble, so if the intention is that a bubble target be notified, the event must be published on this object first.The first argument is the event type, and any additional arguments arepassed to the listeners as parameters.  If the first of these is anobject literal, and the event is configured to emit an event facade,that object is mixed into the event facade and the facade is provided in place of the original object. </summary>
   /// <returns type="Event.Target" />
 /// <param name="type" type="String|Object">  The type of the event, or an object that containsa 'type' property.</param>
 /// <param name="arguments" type="Object*">  an arbitrary set of parameters to pass to the handler.  If the first of these is an object literal and the event isconfigured to emit an event facade, the event facade will replace thatparameter after the properties the object literal contains are copied tothe event facade.</param>
};
YUI.prototype.EventTarget.unsubscribeAll = function(type) {
   /// <summary> Removes all listeners from the specified event.  If the event typeis not specified, all listeners from all hosted custom events willbe removed. </summary>
 /// <param name="type" type="string">    The type, or name of the event</param>
};
YUI.prototype.EventTarget.after = function(type, fn) {
   /// <summary> Subscribe to a custom event hosted by this object.  Thesupplied callback will execute after any listeners addvia the subscribe method, and after the default function,if configured for the event, has executed. </summary>
   /// <returns type="" />
 /// <param name="type" type="string">       The type of the event</param>
 /// <param name="fn" type="Function">  The callback</param>
};
YUI.prototype.EventTarget.publish = function(type, opts) {
   /// <summary> Creates a new custom event of the specified type.  If a custom eventby that name already exists, it will not be re-created.  In eithercase the custom event is returned. </summary>
   /// <returns type="Event.Custom" />
 /// <param name="type" type="string">  the type, or name of the event</param>
 /// <param name="opts" type="object">  optional config params.  Valid properties are:'broadcast': whether or not the YUI instance and YUI global are notified when the event is fired (false)'bubbles': whether or not this event bubbles (true)'context': the default execution context for the listeners (this)'defaultFn': the default function to execute when this event fires if preventDefault was not called'emitFacade': whether or not this event emits a facade (false)'prefix': the prefix for this targets events, e.g., 'menu' in 'menu:click' 'fireOnce': if an event is configured to fire once, new subscribers afterthe fire will be notified immediately.'preventable': whether or not preventDefault() has an effect (true)'preventedFn': a function that is executed when preventDefault is called'queuable': whether or not this event can be queued during bubbling (false)'silent': if silent is true, debug messages are not provided for this event.'stoppedFn': a function that is executed when stopPropagation is called'type': the event type (valid option if not provided as the first parameter to publish)</param>
};
YUI.prototype.EventTarget.detachAll = function(type) {
   /// <summary> Removes all listeners from the specified event.  If the event typeis not specified, all listeners from all hosted custom events willbe removed. </summary>
 /// <param name="type" type="string">    The type, or name of the event</param>
};
YUI.prototype.EventTarget.subscribe = function() {
   /// <summary> subscribe to an event </summary>
};
YUI.prototype.EventTarget.unsubscribe = function() {
   /// <summary> detach a listener </summary>
};
YUI.prototype.EventTarget.addTarget = function(o) {
   /// <summary> Registers another EventTarget as a bubble target.  Bubble orderis determined by the order registered.  Multiple targets canbe specified. </summary>
 /// <param name="o" type="EventTarget">  the target to add</param>
};
YUI.prototype.EventTarget.bubble = function(evt) {
   /// <summary> Propagate an event.  Requires the event-custom-complex module. </summary>
   /// <returns type="boolean" />
 /// <param name="evt" type="Event.Custom">  the custom event to propagate</param>
};
YUI.prototype.EventTarget.before = function() {
   /// <summary> Executes the callback before a DOM event, custom eventor method.  If the first argument is a function, itis assumed the target is a method.  For DOM and customevents, this is an alias for Y.on.For DOM and custom events:type, callback, context, 0-n argumentsFor methods:callback, object (method host), methodName, context, 0-n arguments </summary>
   /// <returns type="" />
};
YUI.prototype.Get.script = function(url, opts) {
   /// <summary> Fetches and inserts one or more script nodes into the headof the current document or the document in a specified window. </summary>
   /// <returns type="tId: string" />
 /// <param name="url" type="string|string[]">  the url or urls to the script(s)</param>
 /// <param name="opts" type="object">  Options: onSuccesscallback to execute when the script(s) are finished loadingThe callback receives an object back with the followingdata:winthe window the script(s) were inserted intodatathe data object passed in when the request was madenodesAn array containing references to the nodes that wereinsertedpurgeA function that, when executed, will remove the nodesthat were insertedonTimeoutcallback to execute when a timeout occurs.The callback receives an object back with the followingdata:winthe window the script(s) were inserted intodatathe data object passed in when the request was madenodesAn array containing references to the nodes that wereinsertedpurgeA function that, when executed, will remove the nodesthat were insertedonEnda function that executes when the transaction finishes, regardless of the exit pathonFailurecallback to execute when the script load operation failsThe callback receives an object back with the followingdata:winthe window the script(s) were inserted intodatathe data object passed in when the request was madenodesAn array containing references to the nodes that wereinserted successfullypurgeA function that, when executed, will remove any nodesthat were insertedcontextthe execution context for the callbackswina window other than the one the utility occupiesautopurgesetting to true will let the utilities cleanup routine purge the script once loadedpurgethresholdThe number of transaction before autopurge should be initiateddatadata that is supplied to the callback when the script(s) areloaded.insertBeforenode or node id that will become the new node's nextSiblingcharsetNode charset, default utf-8 (deprecated, use the attributes config)attributesAn object literal containing additional attributes to add to the link tagstimeoutNumber of milliseconds to wait before aborting and firing the timeout event&nbsp;&nbsp;Y.Get.script(&nbsp;&nbsp;["http://yui.yahooapis.com/2.5.2/build/yahoo/yahoo-min.js",&nbsp;&nbsp;&nbsp;"http://yui.yahooapis.com/2.5.2/build/event/event-min.js"], &#123;&nbsp;&nbsp;&nbsp;&nbsp;onSuccess: function(o) &#123;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.log("won't cause error because Y is the context");&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y.log(o.data); // foo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y.log(o.nodes.length === 2) // true&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// o.purge(); // optionally remove the script nodes immediately&nbsp;&nbsp;&nbsp;&nbsp;&#125;,&nbsp;&nbsp;&nbsp;&nbsp;onFailure: function(o) &#123;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y.log("transaction failed");&nbsp;&nbsp;&nbsp;&nbsp;&#125;,&nbsp;&nbsp;&nbsp;&nbsp;onTimeout: function(o) &#123;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y.log("transaction timed out");&nbsp;&nbsp;&nbsp;&nbsp;&#125;,&nbsp;&nbsp;&nbsp;&nbsp;data: "foo",&nbsp;&nbsp;&nbsp;&nbsp;timeout: 10000, // 10 second timeout&nbsp;&nbsp;&nbsp;&nbsp;context: Y, // make the YUI instance&nbsp;&nbsp;&nbsp;&nbsp;// win: otherframe // target another window/frame&nbsp;&nbsp;&nbsp;&nbsp;autopurge: true // allow the utility to choose when to remove the nodes&nbsp;&nbsp;&nbsp;&nbsp;purgetheshold: 1 // purge previous transaction before next transaction&nbsp;&nbsp;&#125;);</param>
};
YUI.prototype.Get.abort = function(o) {
   /// <summary> Abort a transaction </summary>
 /// <param name="o" type="string|object">  Either the tId or the object returned fromscript() or css()</param>
};
YUI.prototype.Get.css = function(url, opts) {
   /// <summary> Fetches and inserts one or more css link nodes into the head of the current document or the document in a specifiedwindow. </summary>
   /// <returns type="tId: string" />
 /// <param name="url" type="string">  the url or urls to the css file(s)</param>
 /// <param name="opts" type=""> Options: onSuccesscallback to execute when the css file(s) are finished loadingThe callback receives an object back with the followingdata:winthe window the link nodes(s) were inserted intodatathe data object passed in when the request was madenodesAn array containing references to the nodes that wereinsertedpurgeA function that, when executed, will remove the nodesthat were insertedcontextthe execution context for the callbackswina window other than the one the utility occupiesdatadata that is supplied to the callbacks when the nodes(s) areloaded.insertBeforenode or node id that will become the new node's nextSiblingcharsetNode charset, default utf-8 (deprecated, use the attributes config)attributesAn object literal containing additional attributes to add to the link tagsY.Get.css("http://yui.yahooapis.com/2.3.1/build/menu/assets/skins/sam/menu.css");&nbsp;&nbsp;Y.Get.css(&nbsp;&nbsp;["http://yui.yahooapis.com/2.3.1/build/menu/assets/skins/sam/menu.css",&nbsp;&nbsp;&nbsp;"http://yui.yahooapis.com/2.3.1/build/logger/assets/skins/sam/logger.css"], &#123;&nbsp;&nbsp;&nbsp;&nbsp;insertBefore: 'custom-styles' // nodes will be inserted before the specified node&nbsp;&nbsp;&#125;);</param>
};
YUI.prototype.History.prototype.getBookmarkedState = function(moduleId) {
   /// <summary> Returns the state of a module according to the URL fragmentidentifier. This method is useful to initialize your modulesif your application was bookmarked from a particular state. </summary>
   /// <returns type="string" />
 /// <param name="moduleId" type="string"> Non-empty string representing your module.</param>
};
YUI.prototype.History.prototype.getCurrentState = function(moduleId) {
   /// <summary> Returns the current state of the specified module. </summary>
   /// <returns type="string" />
 /// <param name="moduleId" type="string"> Non-empty string representing your module.</param>
};
YUI.prototype.History.prototype.navigate = function(module, state) {
   /// <summary> Stores a new entry in the browser history by changing the state of a registered module. </summary>
   /// <returns type="boolean" />
 /// <param name="module" type="string"> Non-empty string representing your module.</param>
 /// <param name="state" type="string"> String representing the new state of the specified module.</param>
};
YUI.prototype.History.prototype.register = function(moduleId, initialState) {
   /// <summary> Registers a new module. </summary>
   /// <returns type="History.Module" />
 /// <param name="moduleId" type="string"> Non-empty string uniquely identifying themodule you wish to register.</param>
 /// <param name="initialState" type="string"> The initial state of the specifiedmodule corresponding to its earliest history entry.</param>
};
YUI.prototype.History.prototype.initialize = function(stateField, historyIFrame) {
   /// <summary> Initializes the Browser History Manager. Call this methodfrom a script block located right after the opening body tag. </summary>
 /// <param name="stateField" type="string|HTML Element">  usedto store application states. Must be in the static markup.</param>
 /// <param name="historyIFrame" type="string|HTML Element"> IFrame used to storethe history (only required for IE6/7)</param>
};
YUI.prototype.History.prototype.getQueryStringParameter = function(paramName, queryString) {
   /// <summary> Returns the value of the specified query string parameter.This method is not used internally by the Browser History Manager.However, it is provided here as a helper since many applicationsusing the Browser History Manager will want to read the value ofurl parameters to initialize themselves. </summary>
   /// <returns type="string" />
 /// <param name="paramName" type="string"> Name of the parameter we want to look up.</param>
 /// <param name="queryString" type="string"> Optional URL to look at. If not specified,this method uses the URL in the address bar.</param>
};
YUI.prototype.History.prototype.multiNavigate = function(states) {
   /// <summary> Stores a new entry in the browser history by changing the stateof several registered modules in one atomic operation. </summary>
   /// <returns type="boolean" />
 /// <param name="states" type="object"> Associative array of module-state pairs to set simultaneously.</param>
};
YUI.prototype.ImgLoadGroup.prototype.addCustomTrigger = function(name, obj) {
   /// <summary> Adds a custom event trigger to the group. </summary>
 /// <param name="name" type="String">  The name of the event</param>
 /// <param name="obj" type="Object">  The object on which to attach the event. obj is optional - by default the event is attached to the Y instance</param>
};
YUI.prototype.ImgLoadGroup.prototype.addTrigger = function(obj, type) {
   /// <summary> Adds a trigger to the group. Arguments are passed to Y.on. </summary>
 /// <param name="obj" type="Object">  The DOM object to attach the trigger event to</param>
 /// <param name="type" type="String">  The event type</param>
};
YUI.prototype.ImgLoadGroup.prototype.registerImage = function() {
   /// <summary> Registers an image with the group.Arguments are passed through to a Y.ImgLoadImgObj constructor; see that class' attribute documentation for detailed information. "domId" is a required attribute. </summary>
   /// <returns type="Object" />
 /// <param name="*" type="Object">  A configuration object literal with attribute name/value pairs  (passed through to a Y.ImgLoadImgObj constructor)</param>
};
YUI.prototype.ImgLoadGroup.prototype.fetch = function() {
   /// <summary> Displays the images in the group.This method is called when a trigger fires or the time limit expires; it shouldn't be called externally, but is not private in the rare event that it needs to be called immediately. </summary>
};
YUI.prototype.ImgLoadImgObj.prototype.fetch = function(withinY) {
   /// <summary> Displays the image; puts the URL into the DOM.This method shouldn't be called externally, but is not private in the rare event that it needs to be called immediately. </summary>
   /// <returns type="Boolean" />
 /// <param name="withinY" type="Int">  The pixel distance from the top of the page, for which if the image lies within, it will be fetched. Undefined indicates that no check should be made, and the image should always be fetched</param>
};
YUI.prototype.JSON.parse = function(s, reviver) {
   /// <summary> Parse a JSON string, returning the native JavaScript representation. </summary>
   /// <returns type="MIXED" />
 /// <param name="s" type="string">  JSON string data</param>
 /// <param name="reviver" type="function">  (optional) function(k,v) passed each key valuepair of object literals, allowing pruning or altering values</param>
};
YUI.prototype.JSON.stringify = function(o, w, ind) {
   /// <summary> Converts an arbitrary value to a JSON string representation.Objects with cyclical references will trigger an exception.If a whitelist is provided, only matching object keys will beincluded.  Alternately, a replacer function may be passed as thesecond parameter.  This function is executed on every value in theinput, and its return value will be used in place of the original value.This is useful to serialize specialized objects or class instances.If a positive integer or non-empty string is passed as the thirdparameter, the output will be formatted with carriage returns andindentation for readability.  If a String is passed (such as "\t") itwill be used once for each indentation level.  If a number is passed,that number of spaces will be used. </summary>
   /// <returns type="string" />
 /// <param name="o" type="MIXED">  any arbitrary value to convert to JSON string</param>
 /// <param name="w" type="Array|Function">  (optional) whitelist of acceptable objectkeys to include, or a replacer function to modify theraw value before serialization</param>
 /// <param name="ind" type="Number|String">  (optional) indentation character or depth ofspaces to format the output.</param>
};
YUI.prototype.JSON.dateToString = function(d) {
   /// <summary> Serializes a Date instance as a UTC date string.  Used internally bystringify.  Override this method if you need Dates serialized in adifferent format. </summary>
   /// <returns type="String" />
 /// <param name="d" type="Date">  The Date to serialize</param>
};
YUI.prototype.Lang.isArray = function(o) {
   /// <summary> Determines whether or not the provided item is an array.Returns false for array-like collections such as thefunction arguments collection or HTMLElement collectionwill return false.  You can use @see Array.test if you want to </summary>
   /// <returns type="boolean" />
 /// <param name="o" type=""> The object to test</param>
};
YUI.prototype.Lang.trim = function(s) {
   /// <summary> Returns a string without any leading or trailing whitespace.  If the input is not a string, the input will be returned untouched. </summary>
   /// <returns type="string" />
 /// <param name="s" type="string">  the string to trim</param>
};
YUI.prototype.Lang.isDate = function(o) {
   /// <summary> Determines whether or not the supplied item is a date instance </summary>
   /// <returns type="boolean" />
 /// <param name="o" type=""> The object to test</param>
};
YUI.prototype.Lang.isString = function(o) {
   /// <summary> Determines whether or not the provided item is a string </summary>
   /// <returns type="boolean" />
 /// <param name="o" type=""> The object to test</param>
};
YUI.prototype.Lang.isBoolean = function(o) {
   /// <summary> Determines whether or not the provided item is a boolean </summary>
   /// <returns type="boolean" />
 /// <param name="o" type=""> The object to test</param>
};
YUI.prototype.Lang.isNull = function(o) {
   /// <summary> Determines whether or not the provided item is null </summary>
   /// <returns type="boolean" />
 /// <param name="o" type=""> The object to test</param>
};
YUI.prototype.Lang.isValue = function(o) {
   /// <summary> A convenience method for detecting a legitimate non-null value.Returns false for null/undefined/NaN, true for other values, including 0/false/'' </summary>
   /// <returns type="boolean" />
 /// <param name="o" type=""> The item to test</param>
};
YUI.prototype.Lang.isFunction = function(o) {
   /// <summary> Determines whether or not the provided item is a functionNote: Internet Explorer thinks certain functions are objects:var obj = document.createElement("object");Y.Lang.isFunction(obj.getAttribute) // reports false in IEvar input = document.createElement("input"); // append to bodyY.Lang.isFunction(input.focus) // reports false in IEYou will have to implement additional tests if these functionsmatter to you. </summary>
   /// <returns type="boolean" />
 /// <param name="o" type=""> The object to test</param>
};
YUI.prototype.Lang.isNumber = function(o) {
   /// <summary> Determines whether or not the provided item is a legal number </summary>
   /// <returns type="boolean" />
 /// <param name="o" type=""> The object to test</param>
};
YUI.prototype.Lang.type = function(o) {
   /// <summary> Returns a string representing the type of the item passed in. </summary>
   /// <returns type="string" />
 /// <param name="o" type=""> the item to test</param>
};
YUI.prototype.Lang.isObject = function(o, failfn) {
   /// <summary> Determines whether or not the provided item is of type objector function </summary>
   /// <returns type="boolean" />
 /// <param name="o" type=""> The object to test</param>
 /// <param name="failfn" type="boolean">  fail if the input is a function</param>
};
YUI.prototype.Lang.isUndefined = function(o) {
   /// <summary> Determines whether or not the provided item is undefined </summary>
   /// <returns type="boolean" />
 /// <param name="o" type=""> The object to test</param>
};
YUI.prototype.Node.prototype.appendChild = function(node) {
   /// <summary> Passes through to DOM method. </summary>
   /// <returns type="Node" />
 /// <param name="node" type="HTMLElement | Node"> Node to be appended</param>
};
YUI.prototype.Node.prototype.all = function(selector) {
   /// <summary> Retrieves a nodeList based on the given CSS selector. </summary>
   /// <returns type="NodeList" />
 /// <param name="selector" type="string"> The CSS selector to test against.</param>
};
YUI.prototype.Node.simulate = function(type, options) {
   /// <summary> Simulates an event on the node. </summary>
   /// <returns type="void" />
 /// <param name="type" type="String"> The type of event to simulate (i.e., "click").</param>
 /// <param name="options" type="Object"> (Optional) Extra options to copy onto the event object.</param>
};
YUI.prototype.Node.prototype.removeAttribute = function(attribute) {
   /// <summary> Passes through to DOM method. </summary>
 /// <param name="attribute" type="String"> The attribute to be removed</param>
};
YUI.prototype.Node.prototype.getAttribute = function(name) {
   /// <summary> Allows getting attributes on DOM nodes, normalizing in some cases.This passes through to the DOM node, allowing for custom attributes. </summary>
   /// <returns type="string" />
 /// <param name="name" type="string"> The attribute name</param>
};
YUI.prototype.Node.prototype.getComputedStyle = function(attr) {
   /// <summary> Returns the computed value for the given style property. </summary>
   /// <returns type="String" />
 /// <param name="attr" type="String"> The style attribute to retrieve.</param>
};
YUI.prototype.Node.prototype.focus = function() {
   /// <summary> Passes through to DOM method. </summary>
};
YUI.prototype.Node.prototype.cloneNode = function(deep) {
   /// <summary> Passes through to DOM method. </summary>
   /// <returns type="Node" />
 /// <param name="deep" type="Boolean"> Whether or not to perform a deep clone, which includessubtree and attributes</param>
};
YUI.prototype.Node.prototype.one = function(selector) {
   /// <summary> Retrieves a Node instance of nodes based on the given CSS selector. </summary>
   /// <returns type="Node" />
 /// <param name="selector" type="string"> The CSS selector to test against.</param>
};
YUI.prototype.Node.prototype.getX = function() {
   /// <summary> Gets the current position of the node in page coordinates. </summary>
   /// <returns type="Int" />
};
YUI.prototype.Node.prototype.getY = function() {
   /// <summary> Gets the current position of the node in page coordinates. </summary>
   /// <returns type="Int" />
};
YUI.prototype.Node.prototype.inRegion = function(node2, all, altRegion) {
   /// <summary> Determines whether or not the node is within the giving region. </summary>
   /// <returns type="Object" />
 /// <param name="node2" type="Node|Object"> The node or region to compare with.</param>
 /// <param name="all" type="Boolean"> Whether or not all of the node must be in the region.</param>
 /// <param name="altRegion" type="Object"> An alternate region to use (rather than this node's).</param>
};
YUI.prototype.Node.prototype.query = function(selector) {
   /// <summary> Retrieves a Node instance of nodes based on the given CSS selector. </summary>
   /// <returns type="Node" />
 /// <param name="selector" type="string"> The CSS selector to test against.</param>
};
YUI.prototype.Node.prototype.prepend = function(content) {
   /// <summary> Inserts the content as the firstChild of the node. </summary>
 /// <param name="content" type="String | Y.Node | HTMLElement"> The content to insert</param>
};
YUI.prototype.Node.prototype.queryAll = function(selector) {
   /// <summary> Retrieves a nodeList based on the given CSS selector. </summary>
   /// <returns type="NodeList" />
 /// <param name="selector" type="string"> The CSS selector to test against.</param>
};
YUI.prototype.Node.prototype.select = function() {
   /// <summary> Passes through to DOM method. </summary>
};
YUI.prototype.Node.prototype.previous = function(fn) {
   /// <summary> Returns the previous matching sibling. Returns the nearest element node sibling if no method provided. </summary>
   /// <returns type="Node" />
 /// <param name="fn" type="String | Function"> A selector or boolean method for testing elements.If a function is used, it receives the current node being tested as the only argument.</param>
};
YUI.prototype.Nodeget = function(node, doc) {
   /// <summary> Returns a single Node instance bound to the node or thefirst element matching the given selector. </summary>
 /// <param name="node" type="String | HTMLElement"> a node or Selector</param>
 /// <param name="doc" type="Y.Node || HTMLElement"> an optional document to scan. Defaults to Y.config.doc.</param>
};
YUI.prototype.NodegetDOMNode = function(node) {
   /// <summary> Retrieves the DOM node bound to a Node instance </summary>
   /// <returns type="HTMLNode" />
 /// <param name="node" type="Y.Node || HTMLNode"> The Node instance or an HTMLNode</param>
};
YUI.prototype.Node.prototype.removeChild = function(node) {
   /// <summary> Passes through to DOM method. </summary>
   /// <returns type="Node" />
 /// <param name="node" type="HTMLElement | Node"> Node to be removed</param>
};
YUI.prototype.Nodeone = function(node, doc) {
   /// <summary> Returns a single Node instance bound to the node or thefirst element matching the given selector. </summary>
 /// <param name="node" type="String | HTMLElement"> a node or Selector</param>
 /// <param name="doc" type="Y.Node || HTMLElement"> an optional document to scan. Defaults to Y.config.doc.</param>
};
YUI.prototype.Node.prototype.contains = function(needle) {
   /// <summary> Determines whether the ndoe is an ancestor of another HTML element in the DOM hierarchy. </summary>
   /// <returns type="Boolean" />
 /// <param name="needle" type="Node | HTMLElement"> The possible node or descendent</param>
};
YUI.prototype.Node.prototype.replaceClass = function(oldClassName, newClassName) {
   /// <summary> Replace a class with another class for each node.If no oldClassName is present, the newClassName is simply added. </summary>
 /// <param name="oldClassName" type="String"> the class name to be replaced</param>
 /// <param name="newClassName" type="String"> the class name that will be replacing the old class name</param>
};
YUI.prototype.Node.prototype.submit = function() {
   /// <summary> Passes through to DOM method.Only valid on FORM elements </summary>
};
YUI.prototype.Node.prototype.setStyles = function(hash) {
   /// <summary> Sets multiple style properties on the node. </summary>
 /// <param name="hash" type="Object"> An object literal of property:value pairs.</param>
};
YUI.prototype.Node.prototype.hasChildNodes = function() {
   /// <summary> Passes through to DOM method. </summary>
   /// <returns type="Boolean" />
};
YUI.prototype.Node.prototype.append = function(content) {
   /// <summary> Inserts the content as the lastChild of the node. </summary>
 /// <param name="content" type="String | Y.Node | HTMLElement"> The content to insert</param>
};
YUI.prototype.Node.prototype.intersect = function(node2, altRegion) {
   /// <summary> Compares the intersection of the node with another node or region </summary>
   /// <returns type="Object" />
 /// <param name="node2" type="Node|Object"> The node or region to compare with.</param>
 /// <param name="altRegion" type="Object"> An alternate region to use (rather than this node's).</param>
};
YUI.prototype.Node.prototype.toggleClass = function(className) {
   /// <summary> If the className exists on the node it is removed, if it doesn't exist it is added. </summary>
 /// <param name="className" type="String"> the class name to be toggled</param>
};
YUI.prototype.Node.prototype.test = function(selector) {
   /// <summary> Test if the supplied node matches the supplied selector. </summary>
   /// <returns type="boolean" />
 /// <param name="selector" type="string"> The CSS selector to test against.</param>
};
YUI.prototype.Node.prototype.size = function() {
   /// <summary> Returns the current number of items in the Node. </summary>
   /// <returns type="Int" />
};
YUI.prototype.Node.prototype.inDoc = function(doc) {
   /// <summary> Determines whether the node is appended to the document. </summary>
   /// <returns type="Boolean" />
 /// <param name="doc" type="Node|HTMLElement"> optional An optional document to check against.Defaults to current document.</param>
};
YUI.prototype.Node.prototype.addClass = function(className) {
   /// <summary> Adds a class name to each node. </summary>
 /// <param name="className" type="String"> the class name to add to the node's class attribute</param>
};
YUI.prototype.Node.prototype.reset = function() {
   /// <summary> Passes through to DOM method.Only valid on FORM elements </summary>
};
YUI.prototype.Node.prototype.removeClass = function(className) {
   /// <summary> Removes a class name from each node. </summary>
 /// <param name="className" type="String"> the class name to remove from the node's class attribute</param>
};
YUI.prototype.Node.prototype.insertBefore = function(newNode, refNode) {
   /// <summary> Passes through to DOM method. </summary>
   /// <returns type="Node" />
 /// <param name="newNode" type="HTMLElement | Node"> Node to be appended</param>
 /// <param name="refNode" type="HTMLElement | Node"> Node to be inserted before</param>
};
YUI.prototype.Node.prototype.setContent = function(content) {
   /// <summary> Replaces the node's current content with the content. </summary>
 /// <param name="content" type="String | Y.Node | HTMLElement"> The content to insert</param>
};
YUI.prototype.Node.prototype.getElementsByTagName = function(tagName) {
   /// <summary> Passes through to DOM method. </summary>
   /// <returns type="NodeList" />
 /// <param name="tagName" type="String"> The tagName to collect</param>
};
YUI.prototype.Node.prototype.blur = function() {
   /// <summary> Passes through to DOM method. </summary>
};
YUI.prototype.Node.prototype.replace = function() {
   /// <summary> Replace the node with the other node. This is a DOM update onlyand does not change the node bound to the Node instance.Shortcut for myNode.get('parentNode').replaceChild(newNode, myNode); </summary>
};
YUI.prototype.Node.prototype.next = function(fn) {
   /// <summary> Returns the next matching sibling. Returns the nearest element node sibling if no method provided. </summary>
   /// <returns type="Node" />
 /// <param name="fn" type="String | Function"> A selector or boolean method for testing elements.If a function is used, it receives the current node being tested as the only argument.</param>
};
YUI.prototype.Node.prototype.getStyle = function(attr) {
   /// <summary> Returns the style's current value. </summary>
   /// <returns type="String" />
 /// <param name="attr" type="String"> The style attribute to retrieve.</param>
};
YUI.prototype.Node.prototype.hasAttribute = function(attribute) {
   /// <summary> Passes through to DOM method. </summary>
   /// <returns type="Boolean" />
 /// <param name="attribute" type="String"> The attribute to test for</param>
};
YUI.prototype.Node.prototype.replaceChild = function(node, refNode) {
   /// <summary> Passes through to DOM method. </summary>
   /// <returns type="Node" />
 /// <param name="node" type="HTMLElement | Node"> Node to be inserted</param>
 /// <param name="refNode" type="HTMLElement | Node"> Node to be replaced</param>
};
YUI.prototype.Node.prototype.compareTo = function(refNode) {
   /// <summary> Compares nodes to determine if they match.Node instances can be compared to each other and/or HTMLElements. </summary>
   /// <returns type="Boolean" />
 /// <param name="refNode" type="HTMLElement | Node"> The reference node to compare to the node.</param>
};
YUI.prototype.Node.prototype.setStyle = function(attr, val) {
   /// <summary> Sets a style property of the node. </summary>
 /// <param name="attr" type="String"> The style attribute to set.</param>
 /// <param name="val" type="String|Number"> The value.</param>
};
YUI.prototype.Node.prototype.setX = function(x) {
   /// <summary> Set the position of the node in page coordinates, regardless of how the node is positioned. </summary>
 /// <param name="x" type="Int"> X value for new position (coordinates are page-based)</param>
};
YUI.prototype.Node.prototype.setY = function(y) {
   /// <summary> Set the position of the node in page coordinates, regardless of how the node is positioned. </summary>
 /// <param name="y" type="Int"> Y value for new position (coordinates are page-based)</param>
};
YUI.prototype.Node.prototype.getXY = function() {
   /// <summary> Gets the current position of the node in page coordinates. </summary>
   /// <returns type="Array" />
};
YUI.prototype.Node.prototype.insert = function(content, where) {
   /// <summary> Inserts the content before the reference node. </summary>
 /// <param name="content" type="String | Y.Node | HTMLElement"> The content to insert</param>
 /// <param name="where" type="Int | Y.Node | HTMLElement | String"> The position to insert at.</param>
};
YUI.prototype.Node.prototype.ancestor = function(fn) {
   /// <summary> Returns the nearest ancestor that passes the test applied by supplied boolean method. </summary>
   /// <returns type="Node" />
 /// <param name="fn" type="String | Function"> A selector string or boolean method for testing elements.If a function is used, it receives the current node being tested as the only argument.</param>
};
YUI.prototype.Node.prototype.scrollIntoView = function() {
   /// <summary> Passes through to DOM method. </summary>
};
YUI.prototype.Node.prototype.invoke = function(method, a) {
   /// <summary> Invokes a method on the Node instance </summary>
   /// <returns type="" />
 /// <param name="method" type="String"> The name of the method to invoke</param>
 /// <param name="a," type="Any"> b, c, etc. Arguments to invoke the method with.</param>
};
YUI.prototype.Node.prototype.setAttribute = function(name, value) {
   /// <summary> Allows setting attributes on DOM nodes, normalizing in some cases.This passes through to the DOM node, allowing for custom attributes. </summary>
 /// <param name="name" type="string"> The attribute name</param>
 /// <param name="value" type="string"> The value to set</param>
};
YUI.prototype.Node.prototype.remove = function() {
   /// <summary> Removes the node from its parent.Shortcut for myNode.get('parentNode').removeChild(myNode); </summary>
};
YUI.prototype.Node.prototype.item = function(index) {
   /// <summary> Retrieves the Node instance at the given index. </summary>
   /// <returns type="Node" />
 /// <param name="index" type="Number"> The index of the target Node.</param>
};
YUI.prototype.Node.prototype.delegate = function(type, fn, selector) {
   /// <summary> Functionality to make the node a delegated event container </summary>
   /// <returns type="Event.Handle" />
 /// <param name="type" type="String">  the event type to delegate</param>
 /// <param name="fn" type="Function">  the function to execute</param>
 /// <param name="selector" type="String">  a selector that must match the target of the event.</param>
};
YUI.prototype.Node.prototype.each = function(fn, context) {
   /// <summary> Applies the given function to each Node in the NodeList. </summary>
 /// <param name="fn" type="Function"> The function to apply</param>
 /// <param name="context" type="Object"> optional An optional context to apply the function withDefault context is the NodeList instance</param>
};
YUI.prototype.Node.prototype.hasClass = function(className) {
   /// <summary> Determines whether each node has the given className. </summary>
   /// <returns type="Array" />
 /// <param name="className" type="String"> the class name to search for</param>
};
YUI.prototype.Node.prototype.setXY = function(xy) {
   /// <summary> Set the position of the node in page coordinates, regardless of how the node is positioned. </summary>
 /// <param name="xy" type="Array"> Contains X & Y values for new position (coordinates are page-based)</param>
};
YUI.prototype.Node.create = function(html, doc) {
   /// <summary> Creates a new dom node using the provided markup string. </summary>
 /// <param name="html" type="String"> The markup used to create the element</param>
 /// <param name="doc" type="HTMLDocument"> An optional document context</param>
};
YUI.prototype.NodeList.prototype["set"] = function() {
   /// <summary> Called on each Node instance </summary>
};
YUI.prototype.NodeList.prototype.getAttribute = function(name) {
   /// <summary> Allows getting attributes on DOM nodes, normalizing in some cases.This passes through to the DOM node, allowing for custom attributes. </summary>
   /// <returns type="string" />
 /// <param name="name" type="string"> The attribute name</param>
};
YUI.prototype.NodeList.prototype.replaceClass = function(oldClassName, newClassName) {
   /// <summary> Replace a class with another class for each node.If no oldClassName is present, the newClassName is simply added. </summary>
 /// <param name="oldClassName" type="String"> the class name to be replaced</param>
 /// <param name="newClassName" type="String"> the class name that will be replacing the old class name</param>
};
YUI.prototype.NodeList.prototype.some = function(fn, context) {
   /// <summary> Executes the function once for each node until a true value is returned. </summary>
   /// <returns type="Boolean" />
 /// <param name="fn" type="Function"> The function to apply. It receives 3 arguments:the current node instance, the node's index, and the NodeList instance</param>
 /// <param name="context" type="Object"> optional An optional context to execute the function from.Default context is the current Node instance</param>
};
YUI.prototype.NodeList.prototype.setStyle = function(attr, val) {
   /// <summary> Sets a style property on each node. </summary>
 /// <param name="attr" type="String"> The style attribute to set.</param>
 /// <param name="val" type="String|Number"> The value.</param>
};
YUI.prototype.NodeList.prototype.on = function(type, fn, context) {
   /// <summary> Applies an event listener to each Node bound to the NodeList. </summary>
   /// <returns type="Object" />
 /// <param name="type" type="String"> The event being listened for</param>
 /// <param name="fn" type="Function"> The handler to call when the event fires</param>
 /// <param name="context" type="Object"> The context to call the handler with.Default is the NodeList instance.</param>
};
YUI.prototype.NodeList.prototype.setStyles = function(hash) {
   /// <summary> Sets multiple style properties on each node. </summary>
 /// <param name="hash" type="Object"> An object literal of property:value pairs.</param>
};
YUI.prototype.NodeList.prototype.odd = function() {
   /// <summary> Creates a new NodeList containing all nodes at odd indices(zero-based index). </summary>
   /// <returns type="NodeList" />
};
YUI.prototype.NodeList.prototype.setContent = function() {
   /// <summary> Called on each Node instance </summary>
};
YUI.prototype.NodeList.prototype.append = function() {
   /// <summary> Called on each Node instance </summary>
};
YUI.prototype.NodeList.prototype.size = function() {
   /// <summary> Returns the current number of items in the NodeList. </summary>
   /// <returns type="Int" />
};
YUI.prototype.NodeList.prototype.even = function() {
   /// <summary> Creates a new NodeList containing all nodes at even indices(zero-based index), including zero. </summary>
   /// <returns type="NodeList" />
};
YUI.prototype.NodeListgetDOMNodes = function(node) {
   /// <summary> Retrieves the DOM nodes bound to a NodeList instance </summary>
   /// <returns type="Array" />
 /// <param name="node" type="Y.NodeList"> The NodeList instance</param>
};
YUI.prototype.NodeList.prototype.getComputedStyle = function(attr) {
   /// <summary> Returns an array of the computed value for each node. </summary>
   /// <returns type="Array" />
 /// <param name="attr" type="String"> The style attribute to retrieve.</param>
};
YUI.prototype.NodeList.prototype.prepend = function() {
   /// <summary> Called on each Node instance </summary>
};
YUI.prototype.NodeList.prototype.toDocFrag = function() {
   /// <summary> Creates a documenFragment from the nodes bound to the NodeList instance </summary>
   /// <returns type="" />
};
YUI.prototype.NodeList.prototype.toggleClass = function(className) {
   /// <summary> If the className exists on the node it is removed, if it doesn't exist it is added. </summary>
 /// <param name="className" type="String"> the class name to be toggled</param>
};
YUI.prototype.NodeList.prototype.addClass = function(className) {
   /// <summary> Adds a class name to each node. </summary>
 /// <param name="className" type="String"> the class name to add to the node's class attribute</param>
};
YUI.prototype.NodeList.prototype.after = function(type, fn, context) {
   /// <summary> Applies an event listener to each Node bound to the NodeList. The handler is called only after all on() handlers are calledand the event is not prevented. </summary>
   /// <returns type="Object" />
 /// <param name="type" type="String"> The event being listened for</param>
 /// <param name="fn" type="Function"> The handler to call when the event fires</param>
 /// <param name="context" type="Object"> The context to call the handler with.Default is the NodeList instance.</param>
};
YUI.prototype.NodeList.prototype["get"] = function() {
   /// <summary> Called on each Node instance </summary>
};
YUI.prototype.NodeList.prototype.indexOf = function(node) {
   /// <summary> Returns the index of the node in the NodeList instanceor -1 if the node isn't found. </summary>
   /// <returns type="Int" />
 /// <param name="node" type="Y.Node || DOMNode"> the node to search for</param>
};
YUI.prototype.NodeList.prototype.removeClass = function(className) {
   /// <summary> Removes a class name from each node. </summary>
 /// <param name="className" type="String"> the class name to remove from the node's class attribute</param>
};
YUI.prototype.NodeList.prototype.getStyle = function(attr) {
   /// <summary> Returns an array of values for each node. </summary>
   /// <returns type="Array" />
 /// <param name="attr" type="String"> The style attribute to retrieve.</param>
};
YUI.prototype.NodeList.prototype.detach = function() {
   /// <summary> Called on each Node instance </summary>
};
YUI.prototype.NodeList.prototype.insert = function() {
   /// <summary> Called on each Node instance </summary>
};
YUI.prototype.NodeList.prototype.setAttribute = function(name, value) {
   /// <summary> Allows setting attributes on DOM nodes, normalizing in some cases.This passes through to the DOM node, allowing for custom attributes. </summary>
 /// <param name="name" type="string"> The attribute name</param>
 /// <param name="value" type="string"> The value to set</param>
};
YUI.prototype.NodeList.prototype.remove = function() {
   /// <summary> Called on each Node instance </summary>
};
YUI.prototype.NodeList.prototype.detachAll = function() {
   /// <summary> Called on each Node instance </summary>
};
YUI.prototype.NodeList.prototype.filter = function(selector) {
   /// <summary> Filters the NodeList instance down to only nodes matching the given selector. </summary>
   /// <returns type="NodeList" />
 /// <param name="selector" type="String"> The selector to filter against</param>
};
YUI.prototype.NodeList.prototype.item = function(index) {
   /// <summary> Retrieves the Node instance at the given index. </summary>
   /// <returns type="Node" />
 /// <param name="index" type="Number"> The index of the target Node.</param>
};
YUI.prototype.NodeList.prototype.each = function(fn, context) {
   /// <summary> Applies the given function to each Node in the NodeList. </summary>
 /// <param name="fn" type="Function"> The function to apply. It receives 3 arguments:the current node instance, the node's index, and the NodeList instance</param>
 /// <param name="context" type="Object"> optional An optional context to apply the function withDefault context is the current Node instance</param>
};
YUI.prototype.NodeList.prototype.hasClass = function(className) {
   /// <summary> Determines whether each node has the given className. </summary>
   /// <returns type="Array" />
 /// <param name="className" type="String"> the class name to search for</param>
};
YUI.prototype.Object.size = function(o) {
   /// <summary> Returns the size of an object </summary>
   /// <returns type="int" />
 /// <param name="o" type=""> an object</param>
};
YUI.prototype.Object.prototype.setValue = function(o, path, val) {
   /// <summary> Sets the sub-attribute value at the provided path on the value object.  Returns the modified value object, or undefined if the path is invalid. </summary>
   /// <returns type="Object" />
 /// <param name="o" type="">             The object on which to set the sub value.</param>
 /// <param name="path" type="Array">   A path array, specifying the object traversal pathat which to set the sub value.</param>
 /// <param name="val" type="Any">      The new value for the sub-attribute.</param>
};
YUI.prototype.Object.keys = function(o) {
   /// <summary> Returns an array containing the object's keys </summary>
   /// <returns type="string[]" />
 /// <param name="o" type=""> an object</param>
};
YUI.prototype.Object.hasValue = function(o, v) {
   /// <summary> Returns true if the object contains a given value </summary>
   /// <returns type="boolean" />
 /// <param name="o" type=""> an object</param>
 /// <param name="v" type=""> the value to query</param>
};
YUI.prototype.Object.prototype.getValue = function(o, path) {
   /// <summary> Retrieves the sub value at the provided path,from the value object provided. </summary>
   /// <returns type="Any" />
 /// <param name="o" type=""> The object from which to extract the property value</param>
 /// <param name="path" type="Array">  A path array, specifying the object traversal pathfrom which to obtain the sub value.</param>
};
YUI.prototype.Object.values = function(o) {
   /// <summary> Returns an array containing the object's values </summary>
   /// <returns type="Array" />
 /// <param name="o" type=""> an object</param>
};
YUI.prototype.Object.each = function(o, f, c, proto) {
   /// <summary> Executes a function on each item. The functionreceives the value, the key, and the objectas paramters (in that order). </summary>
   /// <returns type="YUI" />
 /// <param name="o" type=""> the object to iterate</param>
 /// <param name="f" type="function">  the function to execute</param>
 /// <param name="c" type=""> the execution context</param>
 /// <param name="proto" type="boolean">  include proto</param>
};
YUI.prototype.Object.hasKey = function(o, k) {
   /// <summary> Returns true if the object contains a given key </summary>
   /// <returns type="boolean" />
 /// <param name="o" type=""> an object</param>
 /// <param name="k" type=""> the key to query</param>
};
YUI.prototype.Object.owns = function(o, p) {
   /// <summary> Determines whether or not the property was addedto the object instance.  Returns false if the property is not presentin the object, or was inherited from the prototype. </summary>
   /// <returns type="boolean" />
 /// <param name="o" type="any">  The object being testing</param>
 /// <param name="p" type="string">  the property to look for</param>
};
YUI.prototype.Plugin.Base.prototype.doAfter = function(sFn, fn, context) {
   /// <summary> Listens for the "after" moment of events fired by the host, or injects code "after" a given method on the host. </summary>
   /// <returns type="EventHandle" />
 /// <param name="sFn" type="String">  The event to listen for, or method to inject logic after.</param>
 /// <param name="fn" type="Function">  The handler function. For events, the "after" moment listener. For methods, the function to execute after the given method is executed.</param>
 /// <param name="context" type="Object">  An optional context to call the handler with. The default context is the plugin instance.</param>
};
YUI.prototype.Plugin.Base.prototype.initializer = function(config) {
   /// <summary> Initializer lifecycle implementation. </summary>
 /// <param name="config" type="Object"> Configuration object with property name/value pairs.</param>
};
YUI.prototype.Plugin.Base.prototype.doBefore = function(sFn, fn, context) {
   /// <summary> Listens for the "on" moment of events fired by the host, or injects code "before" a given method on the host. </summary>
   /// <returns type="EventHandle" />
 /// <param name="sFn" type="String">  The event to listen for, or method to inject logic before.</param>
 /// <param name="fn" type="Function">  The handler function. For events, the "on" moment listener. For methods, the function to execute before the given method is executed.</param>
 /// <param name="context" type="Object">  An optional context to call the handler with. The default context is the plugin instance.</param>
};
YUI.prototype.Plugin.Base.prototype.destructor = function() {
   /// <summary> Destructor lifecycle implementation.Removes any event listeners or injected methods applied by the Plugin </summary>
};
YUI.prototype.Plugin.ConsoleFilters.prototype._createCheckbox = function(container, name) {
   /// <summary> Creates a checkbox and label from the ConsoleFilters.FILTER_TEMPLATE forthe provided type and name.  The checkbox and label are appended to thecontainer node passes as the first arg. </summary>
 /// <param name="container" type="Node">  the parentNode of the new checkbox and label</param>
 /// <param name="name" type="String">  the identifier of the filter</param>
};
YUI.prototype.Plugin.ConsoleFilters.prototype.initializer = function() {
   /// <summary> Initialize entries collection and attach listeners to host events andmethods. </summary>
};
YUI.prototype.Plugin.ConsoleFilters.prototype._onCategoryCheckboxClick = function(e) {
   /// <summary> Passes checkbox clicks on to the category attribute. </summary>
 /// <param name="e" type="Event">  the DOM event</param>
};
YUI.prototype.Plugin.ConsoleFilters.prototype._uiSetCheckbox = function(type, item, checked) {
   /// <summary> Updates the checked property of a filter checkbox of the specified type.If no checkbox is found for the input params, one is created. </summary>
 /// <param name="type" type="String">  'category' or 'source'</param>
 /// <param name="item" type="String">  the name of the filter (e.g. 'info', 'event')</param>
 /// <param name="checked" type="Boolean">  value to set the checkbox's checked property</param>
};
YUI.prototype.Plugin.ConsoleFilters.prototype._onEntry = function(e) {
   /// <summary> Ensures a filter is set up for any new categories or sources andcollects the messages in _entries.  If the message is stamped with acategory or source that is currently being filtered out, the messagewill not pass to the Console's print buffer. </summary>
 /// <param name="e" type="Event">  the custom event object</param>
};
YUI.prototype.Plugin.ConsoleFilters.prototype.refreshConsole = function() {
   /// <summary> Repopulates the Console with entries appropriate to the current filtersettings. </summary>
};
YUI.prototype.Plugin.ConsoleFilters.prototype.destructor = function() {
   /// <summary> Removes the plugin UI and unwires events. </summary>
};
YUI.prototype.Plugin.ConsoleFilters.prototype._afterCategoryChange = function(e) {
   /// <summary> Triggers the Console to update if a known category filterchanges value (e.g. visible => hidden).  Updates the appropriatecheckbox's checked state if necessary. </summary>
 /// <param name="e" type="Event">  the attribute change event object</param>
};
YUI.prototype.Plugin.ConsoleFilters.prototype.showSource = function(src) {
   /// <summary> Shows any number of sources in the UI.  Convenience method formyConsole.filter.set('source.foo', true); set('source.bar', true);and so on. </summary>
 /// <param name="src*" type="String">  1..n sources to allow to display in the UI</param>
};
YUI.prototype.Plugin.ConsoleFilters.prototype.bindUI = function() {
   /// <summary> Binds to checkbox click events and internal attribute change events tomaintain the UI state. </summary>
};
YUI.prototype.Plugin.ConsoleFilters.prototype.showCategory = function(cat) {
   /// <summary> Shows any number of categories in the UI.  Convenience method formyConsole.filter.set('category.foo', true); set('category.bar', true);and so on. </summary>
 /// <param name="cat*" type="String">  1..n categories to allow to display in the UI</param>
};
YUI.prototype.Plugin.ConsoleFilters.prototype._validateCategory = function(cat, v) {
   /// <summary> Validates category updates are objects and the subattribute is not toodeep. </summary>
   /// <returns type="" />
 /// <param name="cat" type="String">  the new category:visibility map</param>
 /// <param name="v" type="String">  the subattribute path updated</param>
};
YUI.prototype.Plugin.ConsoleFilters.prototype._onSourceCheckboxClick = function(e) {
   /// <summary> Passes checkbox clicks on to the source attribute. </summary>
 /// <param name="e" type="Event">  the DOM event</param>
};
YUI.prototype.Plugin.ConsoleFilters.prototype._validateSource = function(cat, v) {
   /// <summary> Validates source updates are objects and the subattribute is not toodeep. </summary>
   /// <returns type="" />
 /// <param name="cat" type="String">  the new source:visibility map</param>
 /// <param name="v" type="String">  the subattribute path updated</param>
};
YUI.prototype.Plugin.ConsoleFilters.prototype.hideCategory = function(cat) {
   /// <summary> Hides any number of categories from the UI.  Convenience method formyConsole.filter.set('category.foo', false); set('category.bar', false);and so on. </summary>
 /// <param name="cat*" type="String">  1..n categories to filter out of the UI</param>
};
YUI.prototype.Plugin.ConsoleFilters.prototype.syncUI = function() {
   /// <summary> Updates the UI to be in accordance with the current state of the plugin. </summary>
};
YUI.prototype.Plugin.ConsoleFilters.prototype._afterClearConsole = function() {
   /// <summary> Flushes the cached entries after a call to the Console's clearConsole(). </summary>
};
YUI.prototype.Plugin.ConsoleFilters.prototype._afterCacheLimitChange = function(e) {
   /// <summary> Trims the cache of entries to the appropriate new length. </summary>
 /// <param name="e" type="Event">  the attribute change event object</param>
};
YUI.prototype.Plugin.ConsoleFilters.prototype._afterSourceChange = function(e) {
   /// <summary> Triggers the Console to update if a known source filterchanges value (e.g. visible => hidden).  Updates the appropriatecheckbox's checked state if necessary. </summary>
 /// <param name="e" type="Event">  the attribute change event object</param>
};
YUI.prototype.Plugin.ConsoleFilters.prototype._filterBuffer = function() {
   /// <summary> Flushes the Console's print buffer of any entries that have a categoryor source that is currently being excluded. </summary>
};
YUI.prototype.Plugin.ConsoleFilters.prototype.hideSource = function(src) {
   /// <summary> Hides any number of sources from the UI.  Convenience method formyConsole.filter.set('source.foo', false); set('source.bar', false);and so on. </summary>
 /// <param name="src*" type="String">  1..n sources to filter out of the UI</param>
};
YUI.prototype.Plugin.ConsoleFilters.prototype.renderUI = function() {
   /// <summary> Adds the category and source filter sections to the Console footer. </summary>
};
YUI.prototype.Plugin.DragConstrained.getRegion = function(inc) {
   /// <summary> Get the active region: viewport, node, custom region </summary>
   /// <returns type="Object" />
 /// <param name="inc" type="Boolean"> Include the node's height and width</param>
};
YUI.prototype.Plugin.DragConstrained.align = function() {
   /// <summary> Modifies the Drag.actXY method from the after drag:align event. This is where the constraining happens. </summary>
};
YUI.prototype.Plugin.DragConstrained.inRegion = function(xy) {
   /// <summary> Checks if the XY passed or the dragNode is inside the active region. </summary>
   /// <returns type="Boolean" />
 /// <param name="xy" type="Array"> Optional XY to check, if not supplied this.get('dragNode').getXY() is used.</param>
};
YUI.prototype.Pollable.setInterval = function(msec, request, callback) {
   /// <summary> Sets up a polling mechanism to send requests at set intervals and forwardresponses to given callback. </summary>
   /// <returns type="Number" />
 /// <param name="msec" type="Number">  Length of interval in milliseconds.</param>
 /// <param name="request" type="Object">  Request object.</param>
 /// <param name="callback" type="Object">  An object literal with the following properties:successThe function to call when the data is ready.failureThe function to call upon a response failure condition.argumentArbitrary data that will be passed back to the success and failure handlers.</param>
};
YUI.prototype.Pollable.clearInterval = function(id) {
   /// <summary> Disables polling mechanism associated with the given interval ID. </summary>
 /// <param name="id" type="Number">  Interval ID.</param>
};
YUI.prototype.Pollable.clearAllIntervals = function() {
   /// <summary> Clears all intervals. </summary>
};
YUI.prototype.Profiler.getAverage = function(name) {
   /// <summary> Returns the average amount of time (in milliseconds) that the functionwith the given name takes to execute. </summary>
   /// <returns type="float" />
 /// <param name="name" type="String"> The name of the function whose data should be returned.If an object type method, it should be 'constructor.prototype.methodName';a normal object method would just be 'object.methodName'.</param>
};
YUI.prototype.Profiler.pause = function(name) {
   /// <summary> Pauses profiling information for a given name. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="String"> The name of the data point.</param>
};
YUI.prototype.Profiler.getReport = function() {
   /// <summary> Returns an object containing profiling data for a single function.The object has an entry for min, max, avg, calls, and points). </summary>
   /// <returns type="Object" />
};
YUI.prototype.Profiler.instrument = function(name, method) {
   /// <summary> Instruments a method to have profiling calls. </summary>
   /// <returns type="Function" />
 /// <param name="name" type="String"> The name of the report for the function.</param>
 /// <param name="method" type="Function"> The function to instrument.</param>
};
YUI.prototype.Profiler.getFullReport = function() {
   /// <summary> Returns an object containing profiling data for all of the functions that were profiled. The object has an entry for each function and returns all information (min, max, average, calls, etc.) for eachfunction. </summary>
   /// <returns type="Object" />
};
YUI.prototype.Profiler.registerObject = function(name, owner, recurse) {
   /// <summary> Sets up an object for profiling. It takes the object and looks for functions.When a function is found, registerMethod() is called on it. If set to recrusivemode, it will also setup objects found inside of this object for profiling, using the same methodology. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="String"> The name of the object to profile (shows up in report).</param>
 /// <param name="owner" type="Object"> (Optional) The object represented by the name.</param>
 /// <param name="recurse" type="Boolean"> (Optional) Determines if subobject methods are also profiled.</param>
};
YUI.prototype.Profiler.clear = function(name) {
   /// <summary> Removes all report data from the profiler. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="String"> (Optional) The name of the report to clear. Ifomitted, then all report data is cleared.</param>
};
YUI.prototype.Profiler.stop = function(name) {
   /// <summary> Stops profiling information for a given name. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="String"> The name of the data point.</param>
};
YUI.prototype.Profiler.getCallCount = function(name) {
   /// <summary> Returns the number of times that the given function has been called. </summary>
   /// <returns type="int" />
 /// <param name="name" type="String"> The name of the function whose data should be returned.</param>
};
YUI.prototype.Profiler.registerFunction = function(name, owner, registerPrototype) {
   /// <summary> Sets up a function for profiling. It essentially overwrites the function with onethat has instrumentation data. This method also creates an entry for the functionin the profile report. The original function is stored on the container object. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="String"> The full name of the function including namespacing. Thisis the name of the function that is stored in the report.</param>
 /// <param name="owner" type="Object"> (Optional) The object that owns the function. If the functionisn't global then this argument is required. This could be the namespace thatthe function belongs to or the object on which it'sa method.</param>
 /// <param name="registerPrototype" type="Boolean"> (Optional) Indicates that the prototype shouldalso be instrumented. Setting to true has the same effect as callingregisterConstructor().</param>
};
YUI.prototype.Profiler.start = function(name) {
   /// <summary> Start profiling information for a given name. The name cannot be the nameof a registered function or object. This is used to start timing for aparticular block of code rather than instrumenting the entire function. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="String"> The name of the data point.</param>
};
YUI.prototype.Profiler.getOriginal = function(name) {
   /// <summary> Returns the uninstrumented version of a function/object. </summary>
   /// <returns type="Function|Object" />
 /// <param name="name" type="String"> The name of the function/object to retrieve.</param>
};
YUI.prototype.Profiler.getFunctionReport = function() {
   /// <summary> Returns an object containing profiling data for a single function.The object has an entry for min, max, avg, calls, and points). </summary>
   /// <returns type="Object" />
};
YUI.prototype.Profiler.getMin = function(name) {
   /// <summary> Returns the minimum amount of time (in milliseconds) that the functionwith the given name takes to execute. </summary>
   /// <returns type="float" />
 /// <param name="name" type="String"> The name of the function whose data should be returned.If an object type method, it should be 'constructor.prototype.methodName';a normal object method would just be 'object.methodName'.</param>
};
YUI.prototype.Profiler.unregisterObject = function(name, recurse) {
   /// <summary> Unregisters an object for profiling. It takes the object and looks for functions.When a function is found, unregisterMethod() is called on it. If set to recrusivemode, it will also unregister objects found inside of this object, using the same methodology. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="String"> The name of the object to unregister.</param>
 /// <param name="recurse" type="Boolean"> (Optional) Determines if subobject methods should also beunregistered.</param>
};
YUI.prototype.Profiler.getMax = function(name) {
   /// <summary> Returns the maximum amount of time (in milliseconds) that the functionwith the given name takes to execute. </summary>
   /// <returns type="float" />
 /// <param name="name" type="String"> The name of the function whose data should be returned.If an object type method, it should be 'constructor.prototype.methodName';a normal object method would just be 'object.methodName'.</param>
};
YUI.prototype.Profiler.registerConstructor = function(name, owner) {
   /// <summary> Sets up a constructor for profiling, including all properties and methods on the prototype. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="string"> The fully-qualified name of the function including namespace information.</param>
 /// <param name="owner" type="Object"> (Optional) The object that owns the function (namespace or containing object).</param>
};
YUI.prototype.Profiler.unregisterFunction = function(name) {
   /// <summary> Removes a constructor function from profiling. Reverses the registerConstructor() method. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="String"> The full name of the function including namespacing. Thisis the name of the function that is stored in the report.</param>
};
YUI.prototype.Queue.prototype.indexOf = function(needle) {
   /// <summary> Returns the current index in the queue of the specified item </summary>
   /// <returns type="Number" />
 /// <param name="needle" type="MIXED">  the item to search for</param>
};
YUI.prototype.Queue.prototype._init = function() {
   /// <summary> Initialize the queue </summary>
};
YUI.prototype.Queue.prototype.remove = function(item) {
   /// <summary> Removes the referenced item from the queue </summary>
 /// <param name="item" type="MIXED">  an item in the queue</param>
};
YUI.prototype.Queue.prototype.next = function() {
   /// <summary> Get the next item in the queue. </summary>
   /// <returns type="MIXED" />
};
YUI.prototype.Queue.prototype.add = function(item) {
   /// <summary> Add 0..n items to the end of the queue </summary>
 /// <param name="item*" type="MIXED">  0..n items</param>
};
YUI.prototype.Queue.prototype.promote = function(item) {
   /// <summary> Moves the referenced item to the head of the queue </summary>
 /// <param name="item" type="MIXED">  an item in the queue</param>
};
YUI.prototype.Queue.prototype.size = function() {
   /// <summary> Returns the current number of queued items </summary>
   /// <returns type="Number" />
};
YUI.prototype.Selector.viewportRegion = function() {
   /// <summary> Returns an Object literal containing the following about the visible region of viewport: (top, right, bottom, left) </summary>
   /// <returns type="Object" />
};
YUI.prototype.Selector.region = function(element) {
   /// <summary> Returns an Object literal containing the following about this element: (top, right, bottom, left) </summary>
   /// <returns type="Object" />
 /// <param name="element" type="HTMLElement"> The DOM element.</param>
};
YUI.prototype.Selector._tokenize = function() {
   /// <summary> Break selector into token units per simple selector.Combinator is attached to the previous token. </summary>
};
YUI.prototype.Selector.intersect = function(element, element2, altRegion) {
   /// <summary> Find the intersect information for the passes nodes. </summary>
   /// <returns type="Object" />
 /// <param name="element" type="HTMLElement"> The first element</param>
 /// <param name="element2" type="HTMLElement | Object"> The element or region to check the interect with</param>
 /// <param name="altRegion" type="Object"> An object literal containing the region for the first element if we already have the data (for performance i.e. DragDrop)</param>
};
YUI.prototype.Selector.query = function(selector, root, firstOnly) {
   /// <summary> Retrieves a set of nodes based on a given CSS selector. </summary>
   /// <returns type="Array" />
 /// <param name="selector" type="string"> The CSS Selector to test the node against.</param>
 /// <param name="root" type="HTMLElement"> optional An HTMLElement to start the query from. Defaults to Y.config.doc</param>
 /// <param name="firstOnly" type="Boolean"> optional Whether or not to return only the first match.</param>
};
YUI.prototype.Selector.inViewportRegion = function(element, all, altRegion) {
   /// <summary> Check if any part of this element is in the viewport </summary>
   /// <returns type="Boolean" />
 /// <param name="element" type="HTMLElement"> The DOM element.</param>
 /// <param name="all" type="Boolean"> Should all of the node be inside the region</param>
 /// <param name="altRegion" type="Object"> An object literal containing the region for this node if we already have the data (for performance i.e. DragDrop)</param>
};
YUI.prototype.Selector.inRegion = function(all, altRegion) {
   /// <summary> Check if any part of this node is in the passed region </summary>
   /// <returns type="Boolean" />
 /// <param name="all" type="Object} node2 The node to get the region from or an Object literal of the region$param {Boolean"> Should all of the node be inside the region</param>
 /// <param name="altRegion" type="Object"> An object literal containing the region for this node if we already have the data (for performance i.e. DragDrop)</param>
};
YUI.prototype.Slider.prototype._setThumbFn = function(v) {
   /// <summary> Setter applied to the input when updating the thumb attribute.  Input canbe a Node, raw HTMLElement, or a selector string to locate it. </summary>
   /// <returns type="Node" />
 /// <param name="v" type="Node|String|HTMLElement">  The thumb element Node or selector</param>
};
YUI.prototype.Slider.prototype._resetDDCacheRegion = function() {
   /// <summary> Resets the cached region inside the DD constrain instance to supportrepositioning the Slider after instantiation. </summary>
};
YUI.prototype.Slider.prototype._defSyncFn = function(e) {
   /// <summary> The default synchronization behavior, updating the Slider's DOM state tomatch the current attribute values. </summary>
 /// <param name="e" type="Event">  Internal sync event</param>
};
YUI.prototype.Slider.prototype._afterRailSizeChange = function(e) {
   /// <summary> Updates the Slider UI in response to change in the railSize attribute. </summary>
 /// <param name="e" type="Event">  railSizeChange custom event</param>
};
YUI.prototype.Slider.prototype._validateNewThumbImage = function(v) {
   /// <summary> Validator applied to the thumbImage attribute.  Rejects all values afterthe Slider has been rendered. </summary>
   /// <returns type="" />
 /// <param name="v" type="MIXED">  proposed value for the thumbImage attribute</param>
};
YUI.prototype.Slider.prototype.initializer = function() {
   /// <summary> Construction logic executed durint Slider instantiation. Subscribes toafter events for min, max, and railSize.  Publishes custom eventsincluding slideStart and slideEnd. </summary>
};
YUI.prototype.Slider.prototype._uiSetRailSize = function() {
   /// <summary> Stores the rail Node's pixel height or width, depending on the Slider'saxis, for use in calculating thumb position from the value. </summary>
};
YUI.prototype.Slider.prototype._setFactor = function() {
   /// <summary> Calculates the multiplier used to translate the value into a thumbposition. </summary>
};
YUI.prototype.Slider.prototype._setRailOffsetXY = function() {
   /// <summary> Store the current XY position of the rail Node on the page.  For use incalculating thumb position from value. </summary>
};
YUI.prototype.Slider.prototype.getValue = function() {
   /// <summary> Convenience method for accessing the current value of the Slider.Equivalent to slider.get(&quot;value&quot;). </summary>
   /// <returns type="Number" />
};
YUI.prototype.Slider.prototype._setDDGutter = function() {
   /// <summary> Passes the gutter attribute value to the DDConstrain gutter attribute. </summary>
};
YUI.prototype.Slider.prototype._setThumbImageFn = function(v) {
   /// <summary> Setter applied to the input when updating the thumbImage attribute.Input can be a Node, raw HTMLElement, selector string to locate it, orthe URL for an image resource.String input will be treated as a selector.  If no element is found usingthe selector, an img Node will be created with the stringused as the src attribute. </summary>
   /// <returns type="Node" />
 /// <param name="v" type="Node|String|HTMLElement">  The thumbImage element Node, selector,or image URL</param>
};
YUI.prototype.Slider.prototype._uiPositionThumb = function(xy) {
   /// <summary> Places the thumb at a particular X or Y location based on the configuredaxis. </summary>
 /// <param name="xy" type="Number">  the desired left or top pixel position of the thumbin relation to the rail Node.</param>
};
YUI.prototype.Slider.prototype._validateNewValue = function(v) {
   /// <summary> Validator applied to the value attribute. </summary>
   /// <returns type="" />
 /// <param name="v" type="MIXED">  proposed value for the value attribute</param>
};
YUI.prototype.Slider.prototype._setAxisFn = function(v) {
   /// <summary> Setter applied to the input when updating the axis attribute. </summary>
   /// <returns type="String" />
 /// <param name="v" type="String">  proposed value for the axis attribute</param>
};
YUI.prototype.Slider.prototype._setThumbOffset = function() {
   /// <summary> Establishes the point in the thumb that should align to the railposition representing the calculated value. </summary>
};
YUI.prototype.Slider.prototype._defPositionThumbFn = function(e) {
   /// <summary> Calls _uiPositionThumb with the value of the custom event's&quot;offset&quot; property. </summary>
 /// <param name="e" type="Event">  the positionThumb custom event</param>
};
YUI.prototype.Slider.prototype._onDDDrag = function(e) {
   /// <summary> Fires the thumbDrag event to queue Slider value update. </summary>
 /// <param name="e" type="Event">  the DD instance's drag:drag custom event</param>
};
YUI.prototype.Slider.prototype._afterMaxChange = function(e) {
   /// <summary> Updates the Slider UI in response to change in the max attribute. </summary>
 /// <param name="e" type="Event">  maxChange custom event</param>
};
YUI.prototype.Slider.prototype._validateNewThumb = function(v) {
   /// <summary> Validator applied to the thumb attribute.  Rejects all values after theSlider has been rendered. </summary>
   /// <returns type="" />
 /// <param name="v" type="MIXED">  proposed value for the thumb attribute</param>
};
YUI.prototype.Slider.prototype.bindUI = function() {
   /// <summary> Creates the Y.DD instance used to handle the thumb movement and bindsSlider interaction to the configured value model. </summary>
};
YUI.prototype.Slider.prototype._initThumbImage = function() {
   /// <summary> Ensures the thumbImage is a child of the thumb element. </summary>
};
YUI.prototype.Slider.prototype._bindThumbDD = function() {
   /// <summary> Creates the Y.DD instance used to handle the thumb interaction. </summary>
};
YUI.prototype.Slider.prototype._stallDisabledChange = function(e) {
   /// <summary> Method subscribed to the disabledChange event when thumbImage is beingloaded.  Prevents manually enabling the Slider until the thumbImageresource is resolved.  Intended value is stored during load and set uponcompletion. </summary>
 /// <param name="e" type="Event">  Change event for the disabled attribute</param>
};
YUI.prototype.Slider.prototype._defThumbDragFn = function(e) {
   /// <summary> The default value update behavior in response to Slider thumbinteraction.  Calculates the value using stored offsets, the _factormultiplier and the min value. </summary>
 /// <param name="e" type="Event">  the internal thumbDrag event</param>
};
YUI.prototype.Slider.prototype._initRailDD = function() {
   /// <summary> Subscribes to the rail Node's mousedown event to actuate the thumb whenbackgroundEnabled is true. </summary>
};
YUI.prototype.Slider.prototype.setValue = function(val) {
   /// <summary> Convenience method for updating the current value of the Slider.Equivalent to slider.set(&quot;value&quot;,val). </summary>
 /// <param name="val" type="Number">  the new value</param>
};
YUI.prototype.Slider.prototype._imageLoaded = function(img, e) {
   /// <summary> Event handler assigned to the thumbImage's load and error event if itwas not loaded prior to instantiation.  Restores the disabled value. </summary>
 /// <param name="img" type="Node">  The thumbImage Node</param>
 /// <param name="e" type="Event">  load or error event fired by the thumbImage</param>
};
YUI.prototype.Slider.prototype._validateNewMax = function(v) {
   /// <summary> Validator applied to the max attribute. </summary>
   /// <returns type="" />
 /// <param name="v" type="MIXED">  proposed value for the max attribute</param>
};
YUI.prototype.Slider.prototype._refresh = function(e) {
   /// <summary> Common handler to call syncUI in response to change events that occurredafter the Slider is rendered. </summary>
 /// <param name="e" type="Event">  An attribute change event</param>
};
YUI.prototype.Slider.prototype._isImageLoading = function(img) {
   /// <summary> Used to determine if there is a current or pending request for thethumbImage resource. </summary>
   /// <returns type="" />
 /// <param name="img" type="Node">  img Node</param>
};
YUI.prototype.Slider.prototype._uiSetThumbSize = function() {
   /// <summary> Captures the thumb's pixel height or width (depending on the Slider'saxis) for use in positioning calculations. </summary>
};
YUI.prototype.Slider.prototype._validateNewRail = function(v) {
   /// <summary> Validator applied to the rail attribute. Rejects all values after theSlider has been rendered. </summary>
   /// <returns type="" />
 /// <param name="v" type="MIXED">  proposed value for the rail attribute</param>
};
YUI.prototype.Slider.prototype._handleRailMouseDown = function(e) {
   /// <summary> If the Slider is not disabled and railEnabled is true, moves the thumbto the mousedown position and hands control over to DD. </summary>
 /// <param name="e" type="Event">  Mousedown event facade</param>
};
YUI.prototype.Slider.prototype._isImageLoaded = function(img) {
   /// <summary> Used to determine if the image resource loaded successfully or there wasan error.NOTES:img load error fired xbrowser for image resources not yet resolvedimg.complete reports false in IE for images not yet loaded as well as images that failed to loadimg.complete true && img.naturalWidth == 0 in FF and Safari indicate image failed to loadimg.complete && img.width == 0 in Opera indicates image failed to load </summary>
   /// <returns type="" />
 /// <param name="img" type="Node">  img Node</param>
};
YUI.prototype.Slider.prototype._afterThumbChange = function(e) {
   /// <summary> Replaces the thumb Node in response to a change in the thumb attribute.This only has effect after the Slider is rendered. </summary>
 /// <param name="e" type="Event">  thumbChange custom event</param>
};
YUI.prototype.Slider.prototype._onDDStartDrag = function(e) {
   /// <summary> Caches the current page position of the rail element and fires theslideStart event in response to the DD's drag:start. </summary>
 /// <param name="e" type="Event">  the DD instance's drag:start custom event</param>
};
YUI.prototype.Slider.prototype._afterMinChange = function(e) {
   /// <summary> Updates the Slider UI in response to change in the min attribute. </summary>
 /// <param name="e" type="Event">  minChange custom event</param>
};
YUI.prototype.Slider.prototype._scheduleSync = function() {
   /// <summary> Binds to the load and error event on the thumbImage to sync the DOMstate with the attribute settings when the image resource is resolved.The Slider is disabled while it waits. </summary>
};
YUI.prototype.Slider.prototype._initThumb = function() {
   /// <summary> Creates the thumb element (not image) if not provided and notdiscovered via HTML_PARSER.  If the thumb is an img elementbut no thumbImage configured or discovered, reassigns the thumb elementto the thumbImage and defaults the thumb element as a div.Makes sure the thumb is a child of the rail element and calls_initThumbImage if thumbImage is provided. </summary>
};
YUI.prototype.Slider.prototype._validateNewRailSize = function(v) {
   /// <summary> Validator applied to the railSize attribute. Only strings of css sizevalues (e.g. '200px') are allowed. </summary>
   /// <returns type="" />
 /// <param name="v" type="String">  proposed value for the railSize attribute</param>
};
YUI.prototype.Slider.prototype._convertValueToOffset = function(v) {
   /// <summary> Converts a value to a pixel offset for the thumb position on the rail. </summary>
 /// <param name="v" type="Number">  value between the Slider's min and max</param>
};
YUI.prototype.Slider.prototype.syncUI = function() {
   /// <summary> Synchronizes the DOM state with the attribute settings (most notablyrailSize and value).  If thumbImage is provided and is still loading,sync is delayed until it is complete, since the image's dimensions aretaken into consideration for calculations. </summary>
};
YUI.prototype.Slider.prototype._validateNewAxis = function(v) {
   /// <summary> Validator applied to new values for the axis attribute. Only&quot;x&quot; and &quot;y&quot; are permitted. </summary>
   /// <returns type="" />
 /// <param name="v" type="String">  proposed value for the axis attribute</param>
};
YUI.prototype.Slider.prototype._afterValueChange = function(e) {
   /// <summary> Fires the internal positionThumb event in response to a change in thevalue attribute. </summary>
 /// <param name="e" type="Event">  valueChange custom event</param>
};
YUI.prototype.Slider.prototype._convertOffsetToValue = function(v) {
   /// <summary> Converts a pixel offset of the thumb on the rail to a value. </summary>
 /// <param name="v" type="Number">  pixel offset of the thumb on the rail</param>
};
YUI.prototype.Slider.prototype._initRail = function() {
   /// <summary> Creates the rail element if not provided and not discovered viaHTML_PARSER. </summary>
};
YUI.prototype.Slider.prototype._ready = function(img, error) {
   /// <summary> Applies a class to the content box if the thumbImage failed to resolve,the fires the internal sync event triggering a sync between UI andstate. </summary>
 /// <param name="img" type="Node">  the thumbImage Node</param>
 /// <param name="error" type="Boolean">  Indicates an error while loading the thumbImage</param>
};
YUI.prototype.Slider.prototype._setRailFn = function(v) {
   /// <summary> Setter applied to the input when updating the rail attribute.  Input canbe a Node, raw HTMLElement, or a selector string to locate it. </summary>
   /// <returns type="Node" />
 /// <param name="v" type="Node|String|HTMLElement">  The rail element Node or selector</param>
};
YUI.prototype.Slider.prototype._validateNewMin = function(v) {
   /// <summary> Validator applied to the min attribute. </summary>
   /// <returns type="" />
 /// <param name="v" type="MIXED">  proposed value for the min attribute</param>
};
YUI.prototype.Slider.prototype._onDDEndDrag = function(e) {
   /// <summary> Fires the slideEnd event. </summary>
 /// <param name="e" type="Event">  the DD instance's drag:end custom event</param>
};
YUI.prototype.Slider.prototype._isDisplayNone = function(el) {
   /// <summary> Helper function to search up the ancestor axis looking for a node withstyle display: none.  This is passed as a function to node.ancestor(..)to test if a given node is in the displayed DOM and can get accuratepositioning information. </summary>
   /// <returns type="Boolean" />
 /// <param name="el" type="Node">  ancestor node as the function walks up the parent axis</param>
};
YUI.prototype.Slider.prototype._afterThumbImageChange = function(e) {
   /// <summary> Sets or replaces the thumb's contained img Node with thenew Node in response to a change in the thumbImage attribute.  This onlyhas effect after the Slider is rendered. </summary>
 /// <param name="e" type="Event">  thumbImageChange custom event</param>
};
YUI.prototype.Slider.prototype.renderUI = function() {
   /// <summary> Create the DOM structure for the Slider. </summary>
};
YUI.prototype.Slider.prototype._afterDisabledChange = function(e) {
   /// <summary> Locks or unlocks the DD instance in response to a change in the disabledattribute. </summary>
 /// <param name="e" type="Event">  disabledChange custom event</param>
};
YUI.prototype.State.prototype.addAll = function(name, o) {
   /// <summary> Adds multiple properties to an item. </summary>
 /// <param name="name" type="String">  The name of the item.</param>
 /// <param name="o" type="Object">  A hash of property/value pairs.</param>
};
YUI.prototype.State.prototype["get"] = function(name, key) {
   /// <summary> For a given item, returns the value of the property requested, or undefined if not found. </summary>
   /// <returns type="Any" />
 /// <param name="name" type="String">  The name of the item</param>
 /// <param name="key" type="String">  Optional. The property value to retrieve.</param>
};
YUI.prototype.State.prototype.getAll = function(name) {
   /// <summary> For the given item, returns a disposable object with all of theitem's property/value pairs. </summary>
   /// <returns type="Object" />
 /// <param name="name" type="String">  The name of the item</param>
};
YUI.prototype.State.prototype.remove = function(name, key) {
   /// <summary> Removes a property from an item. </summary>
 /// <param name="name" type="String">  The name of the item.</param>
 /// <param name="key" type="String">  The property to remove.</param>
};
YUI.prototype.State.prototype.removeAll = function(name, o) {
   /// <summary> Removes multiple properties from an item, or remove the item completely. </summary>
 /// <param name="name" type="String">  The name of the item.</param>
 /// <param name="o" type="Object|Array">  Collection of properties to delete. If not provided, the entire item is removed.</param>
};
YUI.prototype.State.prototype.add = function(name, key, val) {
   /// <summary> Adds a property to an item. </summary>
 /// <param name="name" type="String">  The name of the item.</param>
 /// <param name="key" type="String">  The name of the property.</param>
 /// <param name="val" type="Any">  The value of the property.</param>
};
YUI.prototype.StyleSheet.prototype.enable = function() {
   /// <summary> Enable all the rules in the sheet </summary>
   /// <returns type="StyleSheet" />
};
YUI.prototype.StyleSheet.prototype["set"] = function(sel, css) {
   /// <summary> Set style properties for a provided selector string.If the selector includes commas, it will be split into individualselectors and applied accordingly.  If the selector string does nothave a corresponding rule in the sheet, it will be added.The object properties in the second parameter must be the JavaScriptnames of style properties.  E.g. fontSize rather than font-size.The float style property will be set by any of &quot;float&quot;,&quot;styleFloat&quot;, or &quot;cssFloat&quot;. </summary>
   /// <returns type="StyleSheet" />
 /// <param name="sel" type="String">  the selector string to apply the changes to</param>
 /// <param name="css" type="Object">  Object literal of style properties and new values</param>
};
YUI.prototype.StyleSheetisValidSelector = function(sel) {
   /// <summary> Determines if a selector string is safe to use.  Used internallyin set to prevent IE from locking up when attempting to add a rule for a&quot;bad selector&quot;.Bad selectors are considered to be any string containing unescaped`~!@$%^&()+=|{}[];'"? </summary>
   /// <returns type="Boolean" />
 /// <param name="sel" type="String">  the selector string</param>
};
YUI.prototype.StyleSheet.prototype.isEnabled = function() {
   /// <summary> Returns false if the StyleSheet is disabled.  Otherwise true. </summary>
   /// <returns type="Boolean" />
};
YUI.prototype.StyleSheet.prototype.getId = function() {
   /// <summary> Get the unique stamp for this StyleSheet instance </summary>
   /// <returns type="Number" />
};
YUI.prototype.StyleSheet.prototype.disable = function() {
   /// <summary> Disable all the rules in the sheet.  Rules may be changed while theStyleSheet is disabled. </summary>
   /// <returns type="StyleSheet" />
};
YUI.prototype.StyleSheet.prototype.unset = function(sel, css) {
   /// <summary> Unset style properties for a provided selector string, removingtheir effect from the style cascade.If the selector includes commas, it will be split into individualselectors and applied accordingly.  If there are no propertiesremaining in the rule after unsetting, the rule is removed.The style property or properties in the second parameter must be theJavaScript style property names. E.g. fontSize rather than font-size.The float style property will be unset by any of &quot;float&quot;,&quot;styleFloat&quot;, or &quot;cssFloat&quot;. </summary>
   /// <returns type="StyleSheet" />
 /// <param name="sel" type="String">  the selector string to apply the changes to</param>
 /// <param name="css" type="String|Array">  style property name or Array of names</param>
};
YUI.prototype.StyleSheetregister = function(name, sheet) {
   /// <summary> Registers a StyleSheet instance in the static registry by the given name </summary>
   /// <returns type="Boolean" />
 /// <param name="name" type="String">  the name to assign the StyleSheet in the registry</param>
 /// <param name="sheet" type="StyleSheet">  The StyleSheet instance</param>
};
YUI.prototype.StyleSheet.prototype.getCssText = function(sel) {
   /// <summary> Get the current cssText for a rule or the entire sheet.  If theselector param is supplied, only the cssText for that rule will bereturned, if found.  If the selector string targets multipleselectors separated by commas, the cssText of the first rule onlywill be returned.  If no selector string, the stylesheet's fullcssText will be returned. </summary>
   /// <returns type="String" />
 /// <param name="sel" type="String">  Selector string</param>
};
YUI.prototype.StyleSheettoCssText = function(css, cssText) {
   /// <summary> Converts an object literal of style properties and values into a stringof css text.  This can then be assigned to el.style.cssText.The optional second parameter is a cssText string representing thestarting state of the style prior to alterations.  This is most oftenextracted from the eventual target's current el.style.cssText. </summary>
   /// <returns type="String" />
 /// <param name="css" type="Object">  object literal of style properties and values</param>
 /// <param name="cssText" type="String">  (optional) starting cssText value</param>
};
YUI.prototype.Subscriber.prototype.contains = function(fn, context) {
   /// <summary> Returns true if the fn and obj match this objects properties.Used by the unsubscribe method to match the right subscriber. </summary>
   /// <returns type="boolean" />
 /// <param name="fn" type="Function"> the function to execute</param>
 /// <param name="context" type="Object"> optional 'this' keyword for the listener</param>
};
YUI.prototype.Subscriber.prototype.notify = function(args, ce) {
   /// <summary> Executes the subscriber. </summary>
 /// <param name="args" type="Array">  Arguments array for the subscriber</param>
 /// <param name="ce" type="CustomEvent">  The custom event that sent the notification</param>
};
YUI.prototype.Test.ArrayAssert.containsMatch = function(matcher, haystack, message) {
   /// <summary> Asserts that a value matching some condition is present in an array. This usesa function to determine a match. </summary>
 /// <param name="matcher" type="Function"> A function that returns true if the items matches or false if not.</param>
 /// <param name="haystack" type="Array"> An array of values.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Test.ArrayAssert.doesNotContain = function(needle, haystack, message) {
   /// <summary> Asserts that a value is not present in an array. This uses the triple equals Asserts that a value is not present in an array. This uses the triple equals sign so no type cohersion may occur. </summary>
 /// <param name="needle" type="Object"> The value that is expected in the array.</param>
 /// <param name="haystack" type="Array"> An array of values.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Test.ArrayAssert.indexOf = function(needle, haystack, index, message) {
   /// <summary> Asserts that the given value is contained in an array at the specified index.This uses the triple equals sign so no type cohersion will occur. </summary>
 /// <param name="needle" type="Object"> The value to look for.</param>
 /// <param name="haystack" type="Array"> The array to search in.</param>
 /// <param name="index" type="int"> The index at which the value should exist.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Test.ArrayAssert.isNotEmpty = function(actual, message) {
   /// <summary> Asserts that an array is not empty. </summary>
 /// <param name="actual" type="Array"> The array to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Test.ArrayAssert.contains = function(needle, haystack, message) {
   /// <summary> Asserts that a value is present in an array. This uses the triple equals sign so no type cohersion may occur. </summary>
 /// <param name="needle" type="Object"> The value that is expected in the array.</param>
 /// <param name="haystack" type="Array"> An array of values.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Test.ArrayAssert.containsItems = function(needles, haystack, message) {
   /// <summary> Asserts that a set of values are present in an array. This uses the triple equals sign so no type cohersion may occur. For this assertion to pass, all values mustbe found. </summary>
 /// <param name="needles" type="Object[]"> An array of values that are expected in the array.</param>
 /// <param name="haystack" type="Array"> An array of values to check.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Test.ArrayAssert.doesNotContainItems = function(needles, haystack, message) {
   /// <summary> Asserts that a set of values are not present in an array. This uses the triple equals sign so no type cohersion may occur. For this assertion to pass, all values mustnot be found. </summary>
 /// <param name="needles" type="Object[]"> An array of values that are not expected in the array.</param>
 /// <param name="haystack" type="Array"> An array of values to check.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Test.ArrayAssert.itemsAreEquivalent = function(expected, actual, comparator, message) {
   /// <summary> Asserts that the values in an array are equivalent, and in the same position,as values in another array. This uses a function to determine if the valuesare equivalent. Note that the array objects themselvesneed not be the same for this test to pass. </summary>
   /// <returns type="Void" />
 /// <param name="expected" type="Array"> An array of the expected values.</param>
 /// <param name="actual" type="Array"> Any array of the actual values.</param>
 /// <param name="comparator" type="Function"> A function that returns true if the values are equivalentor false if not.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Test.ArrayAssert.itemsAreEqual = function(expected, actual, message) {
   /// <summary> Asserts that the values in an array are equal, and in the same position,as values in another array. This uses the double equals signso type cohersion may occur. Note that the array objects themselvesneed not be the same for this test to pass. </summary>
 /// <param name="expected" type="Array"> An array of the expected values.</param>
 /// <param name="actual" type="Array"> Any array of the actual values.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Test.ArrayAssert.isEmpty = function(actual, message) {
   /// <summary> Asserts that an array is empty. </summary>
 /// <param name="actual" type="Array"> The array to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Test.ArrayAssert.lastIndexOf = function(needle, haystack, index, message) {
   /// <summary> Asserts that the given value is contained in an array at the specified index,starting from the back of the array.This uses the triple equals sign so no type cohersion will occur. </summary>
 /// <param name="needle" type="Object"> The value to look for.</param>
 /// <param name="haystack" type="Array"> The array to search in.</param>
 /// <param name="index" type="int"> The index at which the value should exist.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Test.ArrayAssert.itemsAreSame = function(expected, actual, message) {
   /// <summary> Asserts that the values in an array are the same, and in the same position,as values in another array. This uses the triple equals signso no type cohersion will occur. Note that the array objects themselvesneed not be the same for this test to pass. </summary>
 /// <param name="expected" type="Array"> An array of the expected values.</param>
 /// <param name="actual" type="Array"> Any array of the actual values.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Test.ArrayAssert.doesNotContainMatch = function(matcher, haystack, message) {
   /// <summary> Asserts that no values matching a condition are present in an array. This usesa function to determine a match. </summary>
 /// <param name="matcher" type="Function"> A function that returns true if the items matches or false if not.</param>
 /// <param name="haystack" type="Array"> An array of values.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Test.Case.prototype.tearDown = function() {
   /// <summary> Function to run after each test is executed. </summary>
   /// <returns type="Void" />
};
YUI.prototype.Test.Case.prototype.setUp = function() {
   /// <summary> Function to run before each test is executed. </summary>
   /// <returns type="Void" />
};
YUI.prototype.Test.Case.prototype.resume = function(segment) {
   /// <summary> Resumes a paused test and runs the given function. </summary>
   /// <returns type="Void" />
 /// <param name="segment" type="Function"> (Optional) The function to run.If omitted, the test automatically passes.</param>
};
YUI.prototype.Test.Case.prototype.wait = function(segment, delay) {
   /// <summary> Causes the test case to wait a specified amount of time and thencontinue executing the given code. </summary>
   /// <returns type="Void" />
 /// <param name="segment" type="Function"> (Optional) The function to run after the delay.If omitted, the TestRunner will wait until resume() is called.</param>
 /// <param name="delay" type="int"> (Optional) The number of milliseconds to wait before runningthe function. If omitted, defaults to zero.</param>
};
YUI.prototype.Test.DateAssert.datesAreEqual = function(expected, actual, message) {
   /// <summary> Asserts that a date's month, day, and year are equal to another date's. </summary>
 /// <param name="expected" type="Date"> The expected date.</param>
 /// <param name="actual" type="Date"> The actual date to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Test.DateAssert.timesAreEqual = function(expected, actual, message) {
   /// <summary> Asserts that a date's hour, minutes, and seconds are equal to another date's. </summary>
 /// <param name="expected" type="Date"> The expected date.</param>
 /// <param name="actual" type="Date"> The actual date to test.</param>
 /// <param name="message" type="String"> (Optional) The message to display if the assertion fails.</param>
};
YUI.prototype.Test.Format.Mock.verify = function(mock) {
   /// <summary> Verifies that all expectations of a mock object have been met andthrows an assertion error if not. </summary>
   /// <returns type="void" />
 /// <param name="mock" type="Object"> The object to verify..</param>
};
YUI.prototype.Test.Format.Mock.expect = function(mock, expectation) {
   /// <summary> Assigns an expectation to a mock object. This is used to createmethods and properties on the mock object that are monitored forcalls and changes, respectively. </summary>
   /// <returns type="void" />
 /// <param name="mock" type="Object"> The object to add the expectation to.</param>
 /// <param name="expectation" type="Object"> An object defining the expectation. Fora method, the keys "method" and "args" are required withan optional "returns" key available. For properties, the keys"property" and "value" are required.</param>
};
YUI.prototype.Test.Manager.load = function() {
   /// <summary> Signals that a test page has been loaded. This should be called fromwithin the test page itself to notify the TestManager that it is ready. </summary>
   /// <returns type="Void" />
};
YUI.prototype.Test.Manager.stop = function() {
   /// <summary> Stops the execution of tests. </summary>
   /// <returns type="Void" />
};
YUI.prototype.Test.Manager.setPages = function(pages) {
   /// <summary> Sets the pages to be loaded. </summary>
   /// <returns type="Void" />
 /// <param name="pages" type="String[]"> An array of URLs to load.</param>
};
YUI.prototype.Test.Manager.start = function() {
   /// <summary> Begins the process of running the tests. </summary>
   /// <returns type="Void" />
};
YUI.prototype.Test.Reporter.prototype.report = function(results) {
   /// <summary> Sends the report to the server. </summary>
   /// <returns type="Void" />
 /// <param name="results" type="Object"> The results object created by TestRunner.</param>
};
YUI.prototype.Test.Reporter.prototype.destroy = function() {
   /// <summary> Cleans up the memory associated with the TestReporter, removing DOM elementsthat were created. </summary>
   /// <returns type="Void" />
};
YUI.prototype.Test.Reporter.prototype.addField = function(name, value) {
   /// <summary> Adds a field to the form that submits the results. </summary>
   /// <returns type="Void" />
 /// <param name="name" type="String"> The name of the field.</param>
 /// <param name="value" type="Variant"> The value of the field.</param>
};
YUI.prototype.Test.Runner.disableLogging = function() {
   /// <summary> Disable logging via Y.log(). Test output will not be visible unlessTestRunner events are subscribed to. </summary>
   /// <returns type="Void" />
};
YUI.prototype.Test.Runner.run = function() {
   /// <summary> Runs the test suite. </summary>
   /// <returns type="Void" />
};
YUI.prototype.Test.Runner.resume = function(segment) {
   /// <summary> Resumes the TestRunner after wait() was called. </summary>
   /// <returns type="Void" />
 /// <param name="segment" type="Function"> The function to run as the restof the haulted test.</param>
};
YUI.prototype.Test.Runner.clear = function() {
   /// <summary> Removes all test objects from the runner. </summary>
   /// <returns type="Void" />
};
YUI.prototype.Test.Runner.enableLogging = function() {
   /// <summary> Enable logging via Y.log(). Test output is published and can be read vialogreader. </summary>
   /// <returns type="Void" />
};
YUI.prototype.Test.Runner.add = function(testObject) {
   /// <summary> Adds a test suite or test case to the list of test objects to run. </summary>
   /// <returns type="Void" />
 /// <param name="testObject" type=""> Either a TestCase or a TestSuite that should be run.</param>
};
YUI.prototype.Test.Runner.isWaiting = function() {
   /// <summary> Indicates if the TestRunner is waiting for a test to resume </summary>
   /// <returns type="Boolean" />
};
YUI.prototype.Test.Suite.prototype.tearDown = function() {
   /// <summary> Function to run after each test is executed. </summary>
   /// <returns type="Void" />
};
YUI.prototype.Test.Suite.XML = function(result) {
   /// <summary> Returns test results formatted as an XML string. </summary>
   /// <returns type="String" />
 /// <param name="result" type="Object"> The results object created by TestRunner.</param>
};
YUI.prototype.Test.Suite.prototype.add = function(testObject) {
   /// <summary> Adds a test suite or test case to the test suite. </summary>
   /// <returns type="Void" />
 /// <param name="testObject" type="Y.Test.Suite||Y.Test.Case"> The test suite or test case to add.</param>
};
YUI.prototype.Test.Suite.JSON = function(result) {
   /// <summary> Returns test results formatted as a JSON string. Requires JSON utility. </summary>
   /// <returns type="String" />
 /// <param name="result" type="Object"> The results object created by TestRunner.</param>
};
YUI.prototype.Test.Suite.prototype.setUp = function() {
   /// <summary> Function to run before each test is executed. </summary>
   /// <returns type="Void" />
};
YUI.prototype.Test.TestNode.prototype.appendChild = function(testObject) {
   /// <summary> Appends a new test object (TestSuite, TestCase, or test function name) as a childof this node. </summary>
   /// <returns type="Void" />
 /// <param name="testObject" type="Variant"> A TestSuite, TestCase, or the name of a test function.</param>
};
YUI.prototype.Widget.prototype._uiSetVisible = function(val) {
   /// <summary> Sets the visible state for the UI </summary>
 /// <param name="val" type="boolean"></param>
};
YUI.prototype.Widget.prototype.getString = function(key, locale) {
   /// <summary> Gets the string for a particular key, for a particular locale, performing locale lookup.If no values if defined for the key, for the given locale, the value for the default locale (in initial locale set for the class) is returned. </summary>
 /// <param name="key" type="String"> The key.</param>
 /// <param name="locale" type="String"> (optional) The locale for which the string value is required. Defaults to the current locale, if not provided.</param>
};
YUI.prototype.Widget.prototype.show = function() {
   /// <summary> Shows the Module element by setting the "visible" attribute to "true". </summary>
};
YUI.prototype.Widget.prototype.focus = function() {
   /// <summary> Causes the Widget to receive the focus by setting the "focused" attribute to "true". </summary>
};
YUI.prototype.Widget.prototype.initializer = function(config) {
   /// <summary> Initializer lifecycle implementation for the Widget class. Registers the widget instance, and runs through the Widget's HTML_PARSER definition. </summary>
 /// <param name="config" type="Object">  Configuration object literal for the widget</param>
};
YUI.prototype.Widget.prototype.disabled = function() {
   /// <summary> Set the Widget's "disabled" attribute to "true". </summary>
};
YUI.prototype.Widget.prototype.enable = function() {
   /// <summary> Set the Widget's "disabled" attribute to "false". </summary>
};
YUI.prototype.Widget.prototype._afterHeightChange = function(evt) {
   /// <summary> Default height attribute state change handler </summary>
 /// <param name="evt" type="EventFacade"> The event facade for the attribute change</param>
};
YUI.prototype.Widget.prototype._uiSetDisabled = function(val) {
   /// <summary> Sets the disabled state for the UI </summary>
 /// <param name="val" type="boolean"></param>
};
YUI.prototype.Widget.prototype._syncUI = function() {
   /// <summary> Updates the widget UI to reflect the attribute state. </summary>
};
YUI.prototype.Widget.prototype._uiSetHeight = function(val) {
   /// <summary> Sets the height on the widget's bounding box element </summary>
 /// <param name="val" type="String | Number"></param>
};
YUI.prototype.Widget.prototype.hide = function() {
   /// <summary> Shows the Module element by setting the "visible" attribute to "false". </summary>
};
YUI.prototype.Widget.prototype.render = function(parentNode) {
   /// <summary> Establishes the initial DOM for the widget. Invoking thismethod will lead to the creating of all DOM elements forthe widget (or the manipulation of existing DOM elements for the progressive enhancement use case).This method should only be invoked once for an initializedwidget.It delegates to the widget specific renderer method to dothe actual work. </summary>
 /// <param name="parentNode" type="Object | String">  Optional. The Node under which the Widget is to be rendered. This can be a Node instance or a CSS selector string. If the selector string returns more than one Node, the first node will be used as the parentNode. NOTE: This argument is required if both the boundingBox and contentBoxare not currently in the document. If it's not provided, the Widget will be renderedto the body of the current document in this case.</param>
};
YUI.prototype.Widget.prototype._bindUI = function() {
   /// <summary> Sets up DOM and CustomEvent listeners for the widget. </summary>
};
YUI.prototype.WidgetgetByNode = function(node) {
   /// <summary> Returns the widget instance whose bounding box contains, or is, the given node. In the case of nested widgets, the nearest bounding box ancestor is used toreturn the widget instance. </summary>
   /// <returns type="Widget" />
 /// <param name="node" type="Node | String">  The node for which to return a Widget instance. If a selectorstring is passed in, which selects more than one node, the first node found is used.</param>
};
YUI.prototype.Widget.prototype.destructor = function() {
   /// <summary> Descructor lifecycle implementation for the Widget class. Purges events attachedto the bounding box (and all child nodes) and removes the Widget from the list of registered widgets. </summary>
};
YUI.prototype.Widget.prototype.getDefaultLocale = function() {
   /// <summary> Returns the default locale for the widget (the locale value defined by thewidget class, or provided by the user during construction). </summary>
   /// <returns type="String" />
};
YUI.prototype.Widget.prototype._getStrings = function(locale) {
   /// <summary> Returns the strings key/value hash for a paricular locale, without locale lookup applied. </summary>
 /// <param name="locale" type="Object"></param>
};
YUI.prototype.Widget.prototype.toString = function() {
   /// <summary> Generic toString implementation for all widgets. </summary>
   /// <returns type="String" />
};
YUI.prototype.Widget.prototype.blur = function() {
   /// <summary> Causes the Widget to lose focus by setting the "focused" attribute to "false" </summary>
};
YUI.prototype.Widget.prototype.bindUI = function() {
   /// <summary> Configures/Sets up listeners to bind Widget State to UI/DOMThis method is not called by framework and is not chained automatically for the class hierarchy. </summary>
};
YUI.prototype.Widget.prototype._onDocMouseDown = function(evt) {
   /// <summary> "mousedown" event handler for the owner document of the widget's bounding box. </summary>
 /// <param name="evt" type="EventFacade"> The event facade for the DOM focus event</param>
};
YUI.prototype.Widget.prototype._uiSetTabIndex = function(Number) {
   /// <summary> Set the tabIndex on the widget's rendered UI </summary>
 /// <param name="Number" type=""></param>
};
YUI.prototype.Widget.prototype._uiSetFocused = function(val, src) {
   /// <summary> Sets the focused state for the UI </summary>
 /// <param name="val" type="boolean"></param>
 /// <param name="src" type="string"> String representing the source that triggered an update to the UI.</param>
};
YUI.prototype.Widget.prototype._onFocus = function(evt) {
   /// <summary> DOM focus event handler, used to sync the state of the Widget with the DOM </summary>
 /// <param name="evt" type="EventFacade"> The event facade for the DOM focus event</param>
};
YUI.prototype.Widget.prototype._afterWidthChange = function(evt) {
   /// <summary> Default widget attribute state change handler </summary>
 /// <param name="evt" type="EventFacade"> The event facade for the attribute change</param>
};
YUI.prototype.Widget.prototype._renderBoxClassNames = function() {
   /// <summary> Applies standard class names to the boundingBox and contentBox </summary>
};
YUI.prototype.Widget.prototype._afterFocusedChange = function(evt) {
   /// <summary> Default focused attribute state change handler </summary>
 /// <param name="evt" type="EventFacade"> The event facade for the attribute change</param>
};
YUI.prototype.Widget.prototype._afterVisibleChange = function(evt) {
   /// <summary> Default visible attribute state change handler </summary>
 /// <param name="evt" type="EventFacade"> The event facade for the attribute change</param>
};
YUI.prototype.Widget.prototype.getClassName = function(args) {
   /// <summary> Generate a standard prefixed classname for the Widget, prefixed by the default prefix definedby the Y.config.classNamePrefix attribute used by ClassNameManager and Widget.NAME.toLowerCase() (e.g. "yui-widget-xxxxx-yyyyy", based on default values for the prefix and widget class name).The instance based version of this method can be used to generate standard prefixed classnames,based on the instances NAME, as opposed to Widget.NAME. This method should be used when youneed to use a constant class name across different types instances. </summary>
 /// <param name="args*" type="String*"> 0..n strings which should be concatenated, using the default separator defined by ClassNameManager, to create the class name</param>
};
YUI.prototype.Widget.prototype._renderUI = function(The) {
   /// <summary> Initializes the UI state for the Widget's bounding/content boxes. </summary>
 /// <param name="The" type="Node"> parent node to rendering the widget into</param>
};
YUI.prototype.Widget.prototype._uiSetWidth = function(val) {
   /// <summary> Sets the width on the widget's bounding box element </summary>
 /// <param name="val" type="String | Number"></param>
};
YUI.prototype.Widget.prototype.syncUI = function() {
   /// <summary> Refreshes the rendered UI, based on Widget StateThis method is not called by framework and is not chainedautomatically for the class hierarchy. </summary>
};
YUI.prototype.Widget.prototype._getHtmlParser = function() {
   /// <summary> Gets the HTML_PARSER definition for this instance, by merging HTML_PARSERdefinitions across the class hierarchy. </summary>
   /// <returns type="Object" />
};
YUI.prototype.Widget.prototype._bindDOMListeners = function() {
   /// <summary> Sets up DOM listeners, on elements rendered by the widget. </summary>
};
YUI.prototype.Widget.prototype._defRenderFn = function(e, parentNode) {
   /// <summary> Default render handler </summary>
 /// <param name="e" type="EventFacade"> The Event object</param>
 /// <param name="parentNode" type="Node"> The parent node to render to, if passed in to the render method</param>
};
YUI.prototype.Widget.prototype._setStrings = function(strings, locale) {
   /// <summary> Sets strings for a particular locale, merging with any existingstrings which may already be defined for the locale. </summary>
 /// <param name="strings" type="Object"> The hash of string key/values to set</param>
 /// <param name="locale" type="Object"> The locale for the string values being set</param>
};
YUI.prototype.Widget.prototype.getStrings = function(locale) {
   /// <summary> Gets the entire strings hash for a particular locale, performing locale lookup.If no values of the key are defined for a particular locale the value for the default locale (in initial locale set for the class) is returned. </summary>
 /// <param name="locale" type="String"> (optional) The locale for which the string value is required. Defaults to the current locale, if not provided.</param>
};
YUI.prototype.Widget.prototype._afterDisabledChange = function(evt) {
   /// <summary> Default disabled attribute state change handler </summary>
 /// <param name="evt" type="EventFacade"> The event facade for the attribute change</param>
};
YUI.prototype.Widget.prototype.renderUI = function() {
   /// <summary> Adds nodes to the DOM This method is not called by framework and is not chained automatically for the class hierarchy. </summary>
};
YUI.prototype.Widget.prototype.renderer = function() {
   /// <summary> Creates DOM (or manipulates DOM for progressive enhancement)This method is invoked by render() and is not chained automatically for the class hierarchy (like initializer, destructor) so it should be chained manually for subclasses if required. </summary>
};
YUI.prototype.WidgetPosition.prototype._getX = function() {
   /// <summary> Default getter for the X attribute. The value is retrieved from the XY attribute, which is the sole store for the XY state. </summary>
   /// <returns type="Number" />
};
YUI.prototype.WidgetPosition.prototype._validateXY = function(val) {
   /// <summary> Default validator for the XY attribute </summary>
   /// <returns type="boolean" />
 /// <param name="val" type="Array"> The XY page co-ordinate value which is being set.</param>
};
YUI.prototype.WidgetPosition.prototype.syncXY = function() {
   /// <summary> Synchronizes the Panel's "xy", "x", and "y" properties with the Widget's position in the DOM. </summary>
};
YUI.prototype.WidgetPosition.prototype._uiSetXY = function(val) {
   /// <summary> Updates the UI to reflect the XY page co-ordinates passed in. </summary>
 /// <param name="val" type="String"> The XY page co-ordinates value to be reflected in the UI</param>
};
YUI.prototype.WidgetPosition.prototype.move = function(x, y, x) {
   /// <summary> Moves the Widget to the specified page xy co-ordinate position. </summary>
 /// <param name="x" type="Number"> The new x position</param>
 /// <param name="y" type="Number"> The new y positionOr</param>
 /// <param name="x," type="Array"> y values passed as an array ([x, y]), to supportsimple pass through of Node.getXY results</param>
};
YUI.prototype.WidgetPosition.prototype._syncUIPosition = function() {
   /// <summary> Synchronizes the UI to match the Widgets xy page position state.This method in invoked after syncUI is invoked for the Widget classusing YUI's aop infrastructure. </summary>
};
YUI.prototype.WidgetPosition.prototype._getY = function() {
   /// <summary> Default getter for the Y attribute. The value is retrieved from the XY attribute, which is the sole store for the XY state. </summary>
   /// <returns type="Number" />
};
YUI.prototype.WidgetPosition.prototype._setX = function(val) {
   /// <summary> Default setter for the X attribute. The setter passes the X value throughto the XY attribute, which is the sole store for the XY state. </summary>
 /// <param name="val" type="Number"> The X page co-ordinate value</param>
};
YUI.prototype.WidgetPosition.prototype._setY = function(val) {
   /// <summary> Default setter for the Y attribute. The setter passes the Y value throughto the XY attribute, which is the sole store for the XY state. </summary>
 /// <param name="val" type="Number"> The Y page co-ordinate value</param>
};
YUI.prototype.WidgetPosition.prototype._afterXYChange = function(e) {
   /// <summary> Default attribute change listener for the xy attribute, responsiblefor updating the UI, in response to attribute changes. </summary>
 /// <param name="e" type="EventFacade"> The event facade for the attribute change</param>
};
YUI.prototype.WidgetPosition.prototype._renderUIPosition = function() {
   /// <summary> Creates/Initializes the DOM to support xy page positioning.This method in invoked after renderUI is invoked for the Widget classusing YUI's aop infrastructure. </summary>
};
YUI.prototype.WidgetPosition.prototype._bindUIPosition = function() {
   /// <summary> Binds event listeners responsible for updating the UI state in response to Widget position related state changes.This method in invoked after bindUI is invoked for the Widget classusing YUI's aop infrastructure. </summary>
};
YUI.prototype.WidgetPositionExt.prototype._afterAlignChange = function(e) {
   /// <summary> Default attribute change listener for the align attribute, responsiblefor updating the UI, in response to attribute changes. </summary>
 /// <param name="e" type="EventFacade"> The event facade for the attribute change</param>
};
YUI.prototype.WidgetPositionExt.prototype._syncUIPosExtras = function() {
   /// <summary> Synchronizes the UI to match the Widgets extended positioning state.This method in invoked after syncUI is invoked for the Widget classusing YUI's aop infrastructure. </summary>
};
YUI.prototype.WidgetPositionExt.prototype.centered = function(node) {
   /// <summary> Centers the container in the viewport, or if a node is passed in,the node. </summary>
 /// <param name="node" type="Node | String"> Optional. A node reference or selector string defining the node inside which the Widget is to be centered. If not passed in, the Widget will be centered in the viewport.</param>
};
YUI.prototype.WidgetPositionExt.prototype.align = function(node, points) {
   /// <summary> Aligns the Widget to the provided node (or viewport) using the providedpoints. The method can be invoked directly, however it will result in the align attribute being out of sync with current position of the of Widget. </summary>
 /// <param name="node" type="Node | String | null"> A reference (or selector string) for the Node which with the Widget is to be aligned.If null is passed in, the Widget will be aligned with the viewport.</param>
 /// <param name="points" type="Array[2]"> A two element array, specifying the points on the Widget and node/viewport which need to be aligned. The first entry is the point on the Widget, and the second entry is the point on the node/viewport which need to align.Valid point references are defined as static constants on the WidgetPositionExt class. e.g. [WidgetPositionExt.TL, WidgetPositionExt.TR] will align the top-left corner of the Widget with the top-right corner of the node/viewport.</param>
};
YUI.prototype.WidgetPositionExt.prototype._setAlignCenter = function(The) {
   /// <summary> Default setter for center attribute changes. Sets up the appropriate value, and passes it through the to the align attribute. </summary>
   /// <returns type="Number" />
 /// <param name="The" type="boolean | node"> attribute value being set.</param>
};
YUI.prototype.WidgetPositionExt.prototype._bindUIStack = function() {
   /// <summary> Binds event listeners responsible for updating the UI state in response to Widget extended positioning related state changes.This method is invoked after bindUI is invoked for the Widget classusing YUI's aop infrastructure. </summary>
};
YUI.prototype.WidgetPositionExt.prototype._uiSetAlign = function(The) {
   /// <summary> Updates the UI to reflect the align value passed in (see the align attribute documentation, for the object stucture expected) </summary>
 /// <param name="The" type="Node | null"> node to align to, or null to indicate the viewport</param>
};
YUI.prototype.WidgetStack.prototype._renderUIStack = function() {
   /// <summary> Creates/Initializes the DOM to support stackability.This method in invoked after renderUI is invoked for the Widget classusing YUI's aop infrastructure. </summary>
};
YUI.prototype.WidgetStack.prototype._syncUIStack = function() {
   /// <summary> Synchronizes the UI to match the Widgets stack state. This method in invoked after syncUI is invoked for the Widget class using YUI's aop infrastructure. </summary>
};
YUI.prototype.WidgetStack.prototype._setZIndex = function(zIndex) {
   /// <summary> Default setter for zIndex attribute changes. Normalizes zIndex values to numbers, converting non-numerical values to 0. </summary>
   /// <returns type="Number" />
 /// <param name="zIndex" type="String | Number"></param>
};
YUI.prototype.WidgetStack.prototype.sizeShim = function() {
   /// <summary> For IE6, synchronizes the size and position of iframe shim to that of Widget bounding box which it is protecting. For all other browsers,this method does not do anything. </summary>
};
YUI.prototype.WidgetStack.prototype._uiSetShim = function(enable) {
   /// <summary> Updates the UI to enable/disable the shim. If the widget is not currently visible,creation of the shim is deferred until it is made visible, for performance reasons. </summary>
 /// <param name="enable" type="boolean"> If true, creates/renders the shim, if false, removes it.</param>
};
YUI.prototype.WidgetStack.prototype._uiSetZIndex = function(zIndex) {
   /// <summary> Updates the UI to reflect the zIndex value passed in. </summary>
 /// <param name="zIndex" type="number"> The zindex to be reflected in the UI</param>
};
YUI.prototype.WidgetStack.prototype._afterZIndexChange = function(e) {
   /// <summary> Default attribute change listener for the zIndex attribute, responsiblefor updating the UI, in response to attribute changes. </summary>
 /// <param name="e" type="EventFacade"> The event facade for the attribute change</param>
};
YUI.prototype.WidgetStack.prototype._afterShimChange = function(e) {
   /// <summary> Default attribute change listener for the shim attribute, responsiblefor updating the UI, in response to attribute changes. </summary>
 /// <param name="e" type="EventFacade"> The event facade for the attribute change</param>
};
YUI.prototype.WidgetStack.prototype._bindUIStack = function() {
   /// <summary> Binds event listeners responsible for updating the UI state in response to Widget stack related state changes.This method is invoked after bindUI is invoked for the Widget classusing YUI's aop infrastructure. </summary>
};
YUI.prototype.WidgetStdMod.prototype._afterHeaderChange = function(e) {
   /// <summary> Default attribute change listener for the headerContent attribute, responsiblefor updating the UI, in response to attribute changes. </summary>
 /// <param name="e" type="EventFacade"> The event facade for the attribute change</param>
};
YUI.prototype.WidgetStdMod.prototype._afterFooterChange = function(e) {
   /// <summary> Default attribute change listener for the footerContent attribute, responsiblefor updating the UI, in response to attribute changes. </summary>
 /// <param name="e" type="EventFacade"> The event facade for the attribute change</param>
};
YUI.prototype.WidgetStdMod.prototype._syncUIStdMod = function() {
   /// <summary> Synchronizes the UI to match the Widgets standard module state.This method is invoked after syncUI is invoked for the Widget classusing YUI's aop infrastructure. </summary>
};
YUI.prototype.WidgetStdMod.prototype._uiSetStdMod = function(section, content, where) {
   /// <summary> Updates the rendered UI, adding the provided content (either an HTML string, or node reference),to the specified section. The content is either added before, after or replaces existing contentin the section, based on the value of the where argument. </summary>
 /// <param name="section" type="String"> The section to be updated. Either WidgetStdMod.HEADER, WidgetStdMod.BODY or WidgetStdMod.FOOTER.</param>
 /// <param name="content" type="String | Node"> The new content (either as an HTML string, or Node reference) to add to the section</param>
 /// <param name="where" type="String"> Optional. Either WidgetStdMod.AFTER, WidgetStdMod.BEFORE or WidgetStdMod.REPLACE.If not provided, the content will replace existing content in the section.</param>
};
YUI.prototype.WidgetStdMod.prototype.setStdModContent = function(section, content, where) {
   /// <summary> Updates the body section of the standard module with the content provided (either an HTML string, or node reference).This method can be used instead of the corresponding section content attribute if you'd like to retain the current content of the section,and insert content before or after it, by specifying the where argument. </summary>
 /// <param name="section" type="String"> The standard module section whose content is to be updated. Either WidgetStdMod.HEADER, WidgetStdMod.BODY or WidgetStdMod.FOOTER.</param>
 /// <param name="content" type="String | Node"> The content to be added, either an HTML string or a Node reference.</param>
 /// <param name="where" type="String"> Optional. Either WidgetStdMod.AFTER, WidgetStdMod.BEFORE or WidgetStdMod.REPLACE.If not provided, the content will replace existing content in the section.</param>
};
YUI.prototype.WidgetStdMod.prototype.fillHeight = function(node) {
   /// <summary> Sets the height on the provided header, body or footer element to fill out the height of the Widget. It determines the height of the widgets bounding box, based on it's configured height value, and sets the height of the provided section to fill out any space remaining after the other standard module section heights have been accounted for.NOTE: This method is not designed to work if an explicit height has not been set on the Widget, since for an "auto" height Widget, the heights of the header/body/footer will drive the height of the Widget. </summary>
 /// <param name="node" type="Node"> The node which should be resized to fill out the heightof the Widget bounding box. Should be a standard module section node which belongsto the widget.</param>
};
YUI.prototype.WidgetStdMod.prototype._getStdModTemplate = function(section) {
   /// <summary> Gets a new Node reference for the given standard module section, by cloningthe stored template node. </summary>
   /// <returns type="Node" />
 /// <param name="section" type="String"> The section to create a new node for. Either WidgetStdMod.HEADER, WidgetStdMod.BODY or WidgetStdMod.FOOTER.</param>
};
YUI.prototype.WidgetStdMod.prototype.getStdModNode = function(section) {
   /// <summary> Returns the node reference for the given section. Note: The DOM is not queried for the node reference. The referencestored by the widget instance is returned if set. </summary>
   /// <returns type="Node" />
 /// <param name="section" type="String"> The section whose node reference is required. Either WidgetStdMod.HEADER, WidgetStdMod.BODY or WidgetStdMod.FOOTER.</param>
};
YUI.prototype.WidgetStdMod.prototype._renderUIStdMod = function() {
   /// <summary> Creates/Initializes the DOM for standard module support.This method is invoked after renderUI is invoked for the Widget classusing YUI's aop infrastructure. </summary>
};
YUI.prototype.WidgetStdMod.prototype._renderStdMod = function(section) {
   /// <summary> Creates the DOM node for the given section, and inserts it into the correct location in the contentBox. </summary>
   /// <returns type="Node" />
 /// <param name="section" type="String"> The section to create/render. Either WidgetStdMod.HEADER, WidgetStdMod.BODY or WidgetStdMod.FOOTER.</param>
};
YUI.prototype.WidgetStdMod.prototype._bindUIStdMod = function() {
   /// <summary> Binds event listeners responsible for updating the UI state in response to Widget standard module related state changes.This method is invoked after bindUI is invoked for the Widget classusing YUI's aop infrastructure. </summary>
};
YUI.prototype.WidgetStdMod.prototype._uiSetFillHeight = function(fillSection) {
   /// <summary> Updates the rendered UI, to resize the provided section so that the standard module fills out the specified widget height. Note: This method does not check whether or not a height is set on the Widget. </summary>
 /// <param name="fillSection" type="String"> A valid section specifier - one of WidgetStdMod.HEADER, WidgetStdMod.BODY or WidgetStdMod.FOOTER</param>
};
YUI.prototype.WidgetStdMod.prototype._validateFillHeight = function(val) {
   /// <summary> Default validator for the fillHeight attribute. Verifies that the value set is a valid section specifier - one of WidgetStdMod.HEADER, WidgetStdMod.BODY or WidgetStdMod.FOOTER,or a falsey value if fillHeight is to be disabled. </summary>
   /// <returns type="" />
 /// <param name="val" type="String"> The section which should be setup to fill height, or false/null to disable fillHeight</param>
};
YUI.prototype.WidgetStdMod.prototype._afterBodyChange = function(e) {
   /// <summary> Default attribute change listener for the bodyContent attribute, responsiblefor updating the UI, in response to attribute changes. </summary>
 /// <param name="e" type="EventFacade"> The event facade for the attribute change</param>
};
YUI.prototype.WidgetStdMod.prototype._afterFillHeightChange = function(e) {
   /// <summary> Default attribute change listener for the fillHeight attribute, responsiblefor updating the UI, in response to attribute changes. </summary>
 /// <param name="e" type="EventFacade"> The event facade for the attribute change</param>
};
YUI.prototype.io.header = function(l, v) {
   /// <summary> Method that stores default client headers for all transactions.If a label is passed with no value argument, the header will be deleted.This is the interface for _setHeader(). </summary>
   /// <returns type="" />
 /// <param name="l" type="string"> - HTTP header</param>
 /// <param name="v" type="string"> - HTTP header value</param>
};
YUI.prototype.io.io = function(uri, c) {
   /// <summary> Method for requesting a transaction. Thisis the interface for _io(). </summary>
   /// <returns type="" />
 /// <param name="uri" type="string"> - qualified path to transaction resource.</param>
 /// <param name="c" type="object"> - configuration object for the transaction.</param>
};
YUI.prototype.io.transport = function(o) {
   /// <summary> Method to initialize the desired transport. </summary>
   /// <returns type="" />
 /// <param name="o" type="object"> - object of transport configurations.</param>
};
YUI.prototype.io.size = function(i) {
   /// <summary> Method to query the current size of the queue, or toset a maximum queue size.  This is the interface for _size(). </summary>
   /// <returns type="" />
 /// <param name="i" type="number"> - Specified maximum size of queue.</param>
};
YUI.prototype.io.start = function() {
   /// <summary> Method for setting the queue to active. If there aretransactions pending in the queue, they will be processed from thequeue in FIFO order. This is the interface for _start(). </summary>
   /// <returns type="" />
};
YUI.prototype.io.stop = function() {
   /// <summary> Method for setting queue processing to inactive.Transaction requests to YUI.io.queue() will be stored in the queue, butnot processed until the queue is restarted. This is theinterface for _stop(). </summary>
   /// <returns type="" />
};
YUI.prototype.io.promote = function(o) {
   /// <summary> Method for promoting a transaction to the top of the queue.This is the interface for _unshift(). </summary>
   /// <returns type="" />
 /// <param name="o" type="Object"> - Reference to queued transaction.</param>
};
YUI.prototype.io.remove = function(o) {
   /// <summary> Method for removing a specific, pending transaction fromthe queue. This is the interface for _remove(). </summary>
   /// <returns type="" />
 /// <param name="o" type="Object"> - Reference to queued transaction.</param>
};
YUI.prototype.plugin.NodeFocusManager.prototype._onDocMouseDown = function(event) {
   /// <summary> "mousedown" event handler for the owner document of the Focus Manager's Node. </summary>
 /// <param name="event" type="Object">  Object representing the DOM event.</param>
};
YUI.prototype.plugin.NodeFocusManager.prototype._detachEventHandlers = function() {
   /// <summary> Detaches all event handlers used by the Focus Manager. </summary>
};
YUI.prototype.plugin.NodeFocusManager.prototype._preventScroll = function() {
   /// <summary> Prevents the viewport from scolling when the user presses the up, down, left, or right key. </summary>
};
YUI.prototype.plugin.NodeFocusManager.prototype._focusPrevious = function(event, activeDescendant) {
   /// <summary> Keydown event handler that moves focus to the previous enabled descendant. </summary>
 /// <param name="event" type="Object">  Object representing the DOM event.</param>
 /// <param name="activeDescendant" type="Number">  Number representing the index of the next descendant to be focused.</param>
};
YUI.prototype.plugin.NodeFocusManager.prototype._onDocFocus = function(event) {
   /// <summary> "focus" event handler for the owner document of the Focus Manager's Node. </summary>
 /// <param name="event" type="Object">  Object representing the DOM event.</param>
};
YUI.prototype.plugin.NodeFocusManager.prototype._initDescendants = function() {
   /// <summary> Sets the tabIndex attribute of all of the descendants to -1, except the active descendant, whose tabIndex attribute is set to 0. </summary>
};
YUI.prototype.plugin.NodeFocusManager.prototype._afterActiveDescendantChange = function(event) {
   /// <summary> afterChange event handler for the "activeDescendant" attribute. </summary>
 /// <param name="event" type="Object">  Object representing the change event.</param>
};
YUI.prototype.plugin.NodeFocusManager.prototype._detachKeyHandler = function() {
   /// <summary> Detaches the "key" event handlers used to support the "keys"attribute. </summary>
};
YUI.prototype.plugin.NodeFocusManager.prototype._isDescendant = function(node) {
   /// <summary> Determines if the specified Node instance is a descendantmanaged by the Focus Manager. </summary>
   /// <returns type="Boolean" />
 /// <param name="node" type="Node">  Node instance to be checked.</param>
};
YUI.prototype.plugin.NodeFocusManager.prototype.stop = function() {
   /// <summary> Disables the Focus Manager by detaching all event handlers. </summary>
};
YUI.prototype.plugin.NodeFocusManager.prototype.focus = function(index) {
   /// <summary> Focuses the active descendant and sets the  focused attribute to true. </summary>
 /// <param name="index" type="Number">  Optional. Number representing the index of the descendant to be set as the active descendant.</param>
 /// <param name="index" type="Node">  Optional. Node instance representing the descendant to be set as the active descendant.</param>
};
YUI.prototype.plugin.NodeFocusManager.prototype.refresh = function() {
   /// <summary> Refreshes the Focus Manager's descendants by re-executing the CSS selector query specified by the descendants attribute. </summary>
};
YUI.prototype.plugin.NodeFocusManager.prototype.start = function() {
   /// <summary> Enables the Focus Manager. </summary>
};
YUI.prototype.plugin.NodeFocusManager.prototype._removeFocusClass = function() {
   /// <summary> Removes the class name representing focus (as specified by the "focusClass" attribute) from the Node instance to which it is currently applied. </summary>
};
YUI.prototype.plugin.NodeFocusManager.prototype.blur = function() {
   /// <summary> Blurs the current active descendant and sets the focused attribute to false. </summary>
};
YUI.prototype.plugin.NodeFocusManager.prototype._focusNext = function(event, activeDescendant) {
   /// <summary> Keydown event handler that moves focus to the next enabled descendant. </summary>
 /// <param name="event" type="Object">  Object representing the DOM event.</param>
 /// <param name="activeDescendant" type="Number">  Number representing the index of the next descendant to be focused</param>
};
YUI.prototype.plugin.NodeFocusManager.prototype._attachKeyHandler = function() {
   /// <summary> Attaches the "key" event handlers used to support the "keys"attribute. </summary>
};
YUI.prototype.plugin.NodeMenuNav.prototype._showMenu = function(menu) {
   /// <summary> Shows the specified menu. </summary>
 /// <param name="menu" type="Node"> Node instance representing a menu.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._hideAndFocusLabel = function() {
   /// <summary> Hides all of the submenus of the root menu and focuses the label of the topmost submenu </summary>
};
YUI.prototype.plugin.NodeMenuNav.prototype._setActiveItem = function(item) {
   /// <summary> Sets the specified menuitem or menu label as the menu's active descendent. </summary>
 /// <param name="item" type="Node"> Node instance representing a menuitem or menu label.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._hideMenu = function(menu, activateAndFocusLabel) {
   /// <summary> Hides the specified menu. </summary>
 /// <param name="menu" type="Node"> Node instance representing a menu.</param>
 /// <param name="activateAndFocusLabel" type="Boolean"> Boolean indicating if the label for the specified menu should be focused and set as active.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._initFocusManager = function() {
   /// <summary> Initializes and updates the Focus Manager so that is is always managing descendants of the active menu. </summary>
};
YUI.prototype.plugin.NodeMenuNav.prototype._onHorizontalMenuKeyDown = function(event) {
   /// <summary> "keydown" event handler for horizontal menus. </summary>
 /// <param name="event" type="Object"> Object representing the DOM event.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._focusItem = function(item) {
   /// <summary> Focuses the specified menuitem or menu label. </summary>
 /// <param name="item" type="Node"> Node instance representing a menuitem or menu label.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._onMouseOver = function(event) {
   /// <summary> "mouseover" event handler for the menu. </summary>
 /// <param name="event" type="Object"> Object representing the DOM event.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._onVerticalMenuKeyDown = function(event) {
   /// <summary> "keydown" event handler for vertical menus. </summary>
 /// <param name="event" type="Object"> Object representing the DOM event.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._cancelHideSubmenuTimer = function() {
   /// <summary> Cancels the timer used to hide a submenu. </summary>
};
YUI.prototype.plugin.NodeMenuNav.prototype._onActiveDescendantChange = function(event, menuNav) {
   /// <summary> "activeDescendantChange" event handler for menu's Focus Manager. </summary>
 /// <param name="event" type="Object"> Object representing the Attribute change event.</param>
 /// <param name="menuNav" type="NodeMenuNav"> Object representing the NodeMenuNav instance.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._onMenuMouseOut = function(menu, event) {
   /// <summary> "mouseout" event handler for a menu. </summary>
 /// <param name="menu" type="Node"> Node instance representing a menu.</param>
 /// <param name="event" type="Object"> Object representing the DOM event.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._onDocMouseDown = function(event) {
   /// <summary> "mousedown" event handler for the owner document of the menu. </summary>
 /// <param name="event" type="Object"> Object representing the DOM event.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._onMenuLabelMouseOut = function(menuLabel, event) {
   /// <summary> "mouseout" event handler for a menu label. </summary>
 /// <param name="menuLabel" type="Node"> Node instance representing a menu label.</param>
 /// <param name="event" type="Object"> Object representing the DOM event.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._afterActiveDescendantChange = function(event, menuNav) {
   /// <summary> "activeDescendantChange" event handler for menu's Focus Manager. </summary>
 /// <param name="event" type="Object"> Object representing the Attribute change event.</param>
 /// <param name="menuNav" type="NodeMenuNav"> Object representing the NodeMenuNav instance.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._onMenuItemMouseOver = function(menuItem, event) {
   /// <summary> "mouseover" event handler for a menuitem. </summary>
 /// <param name="menuItem" type="Node"> Node instance representing a menuitem.</param>
 /// <param name="event" type="Object"> Object representing the DOM event.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._cancelShowSubmenuTimer = function() {
   /// <summary> Cancels the timer used to show a submenu. </summary>
};
YUI.prototype.plugin.NodeMenuNav.prototype._isRoot = function(menu) {
   /// <summary> Returns a boolean indicating if the specified menu is the root menu in the menu. </summary>
   /// <returns type="Boolean" />
 /// <param name="menu" type="Node"> Node instance representing a menu.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._getTopmostSubmenu = function(menu) {
   /// <summary> Returns the topmost submenu of a submenu hierarchy. </summary>
   /// <returns type="Node" />
 /// <param name="menu" type="Node"> Node instance representing a menu.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._clearActiveItem = function() {
   /// <summary> Clears the menu's active descendent. </summary>
};
YUI.prototype.plugin.NodeMenuNav.prototype._onMouseMove = function(event) {
   /// <summary> "mousemove" event handler for the menu. </summary>
 /// <param name="event" type="Object"> Object representing the DOM event.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._onMenuItemMouseOut = function(menuItem, event) {
   /// <summary> "mouseout" event handler for a menuitem. </summary>
 /// <param name="menuItem" type="Node"> Node instance representing a menuitem.</param>
 /// <param name="event" type="Object"> Object representing the DOM event.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._onDocFocus = function(event) {
   /// <summary> "focus" event handler for the owner document of the MenuNav. </summary>
 /// <param name="event" type="Object"> Object representing the DOM event.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._onMenuMouseOver = function(menu, event) {
   /// <summary> "mouseover" event handler for a menu. </summary>
 /// <param name="menu" type="Node"> Node instance representing a menu.</param>
 /// <param name="event" type="Object"> Object representing the DOM event.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._hideAllSubmenus = function(menu) {
   /// <summary> Hides all submenus of the specified menu. </summary>
 /// <param name="menu" type="Node"> Node instance representing a menu.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._onMouseOut = function(event) {
   /// <summary> "mouseout" event handler for the menu. </summary>
 /// <param name="event" type="Object"> Object representing the DOM event.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._toggleSubmenuDisplay = function(event) {
   /// <summary> "mousedown," "keydown," and "click" event handler for the menu used to toggle the display of a submenu. </summary>
 /// <param name="event" type="Object"> Object representing the DOM event.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._onKeyPress = function(event) {
   /// <summary> "keypress" event handler for the menu. </summary>
 /// <param name="event" type="Object"> Object representing the DOM event.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._onMenuLabelMouseOver = function(menuLabel, event) {
   /// <summary> "mouseover" event handler for a menu label. </summary>
 /// <param name="menuLabel" type="Node"> Node instance representing a menu label.</param>
 /// <param name="event" type="Object"> Object representing the DOM event.</param>
};
YUI.prototype.plugin.NodeMenuNav.prototype._onKeyDown = function(event) {
   /// <summary> "keydown" event handler for the menu. </summary>
 /// <param name="event" type="Object"> Object representing the DOM event.</param>
};
