/*
 * Ample SDK - JavaScript GUI Framework
 *
 * Copyright (c) 2011 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 * See: http://www.amplesdk.com/about/licensing/
 *
 */
(function () {


function fAmple_store(oNode, sName, vValue) {
	throw new cDOMException(cDOMException.NOT_SUPPORTED_ERR);
};

ample.extend({
		"store":	function(sName, vValue) {
				ample.guard(arguments, [
			["name",	cString],
			["value",	cObject, true, true]
		]);

				return fAmple_store(this, sName, vValue);
	}
});

ample.extend(ample.classes.Query.prototype, {
	"store":	function(sName, vValue) {
				ample.guard(arguments, [
			["name",	cString],
			["value",	cObject, true, true]
		]);

				return fAmple_store(this, sName, vValue);
	}
});

})()
