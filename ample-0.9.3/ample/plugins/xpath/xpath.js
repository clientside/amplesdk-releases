/*
 * Ample SDK - JavaScript GUI Framework
 *
 * Copyright (c) 2011 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 * See: http://www.amplesdk.com/about/licensing/
 *
 */
(function () {


function cXPathEvaluator() {

};

cXPathEvaluator.prototype.createExpression	= function(sExpression, oResolver) {
		ample.guard(arguments, [
		["expression",	String],
		["resolver",	cXPathNSResolver,	true,	true]
	]);

		return new cXPathExpression(sExpression, oResolver);
};

cXPathEvaluator.prototype.createNSResolver	= function(oNode) {
		ample.guard(arguments, [
		["node",	Node]
	]);

		return new cXPathNSResolver(oNode);
};

cXPathEvaluator.prototype.evaluate	= function(sExpression, oNode, oResolver, nType, oResult) {
		ample.guard(arguments, [
		["expression",	String],
		["context",		Node],
		["resolver",	cXPathNSResolver,true,	true],
		["type",		Number,				true,	true],
		["result",		cXPathResult,	true,	true]
	]);

		var oExpression	= new cXPathExpression(sExpression, oResolver);
	return oExpression.evaluate(oNode, nType || cXPathResult.ANY_TYPE, oResult);
};


function cXPathException(nCode) {
	this.code	= nCode;
};

cXPathException.prototype.code	= null;

cXPathException.INVALID_EXPRESSION_ERR	= 51;
cXPathException.TYPE_ERR					= 52;


function cXPathExpression(sExpression, oResolver) {
	this.$expression	= fXPathExpression_parse(this, sExpression, oResolver);
};

cXPathExpression.prototype.evaluate	= function(oNode, nType, oResult) {
		ample.guard(arguments, [
		["context",		Node],
		["type",		Number,	true,	true],
		["result",		Object, true,	true]
	]);

		return fXPathExpression_evaluate(this, oNode, nType, oResult);
};


function cXPathNSResolver(oNode) {
	this.$node	= oNode;
};

cXPathNSResolver.prototype.lookupNamespaceURI	= function(sPrefix) {
		ample.guard(arguments, [
		["expression",	String]
	]);

		return this.$node.lookupNamespaceURI(sPrefix);
};


function cXPathNamespace() {

};

cXPathNamespace.prototype	= new ample.classes.Node;

cXPathNamespace.XPATH_NAMESPACE_NODE	= 13;

cXPathNamespace.ownerElement	= null;


function cXPathResult() {

};

cXPathResult.ANY_TYPE		= 0;
cXPathResult.NUMBER_TYPE		= 1;
cXPathResult.STRING_TYPE		= 2;
cXPathResult.BOOLEAN_TYPE	= 3;
cXPathResult.UNORDERED_NODE_ITERATOR_TYPE	= 4;
cXPathResult.ORDERED_NODE_ITERATOR_TYPE		= 5;
cXPathResult.UNORDERED_NODE_SNAPSHOT_TYPE	= 6;
cXPathResult.ORDERED_NODE_SNAPSHOT_TYPE 		= 7;
cXPathResult.ANY_UNORDERED_NODE_TYPE 		= 8;
cXPathResult.FIRST_ORDERED_NODE_TYPE			= 9;

cXPathResult.prototype.resultType		= null;
cXPathResult.prototype.snapshotLength	= 0;
cXPathResult.prototype.stringValue		= null;
cXPathResult.prototype.booleanValue		= null;
cXPathResult.prototype.singleNodeValue	= null;
cXPathResult.prototype.invalidIteratorState	= null;

cXPathResult.prototype.iterateNext	= function() {

};

cXPathResult.prototype.snapshotItem	= function(nIndex) {
		ample.guard(arguments, [
		["index",	Number]
	]);

	};


function fXPathExpression_evaluate(oExpression, oNode, nType, oResult) {
	var oResult	= new cXPathResult;

	return oResult;
};


function fXPathExpression_parse(oParser, sExpression, oResolver) {

};




ample.publish(cXPathEvaluator,	"XPathEvaluator");
ample.publish(cXPathException,	"XPathException");
ample.publish(cXPathExpression,	"XPathExpression");
ample.publish(cXPathNamespace,	"XPathNamespace");
ample.publish(cXPathNSResolver,	"XPathNSResolver");
ample.publish(cXPathResult,		"XPathResult");

ample.extend(ample.classes.Document.prototype, cXPathEvaluator.prototype);

})()
