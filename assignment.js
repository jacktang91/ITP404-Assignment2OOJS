//Constructor
var Accordion = function(options) {

	this.$el = $(options.sel);
	this.speed = options.speed;
	this.colour = options.colour;
	this.w = options.w;

	this.closeAllButFirst();
};

Accordion.prototype.closeAllButFirst = function() {
	this.$el.find('.content').slideUp(0).eq(0).slideDown(0);
};

//Assignment prototypes
Accordion.prototype.expandAll = function(){
	this.$el.find('.content').slideDown(this.speed);
	this.$el.find('.content').css('backgroundColor',this.colour);
};

Accordion.prototype.collapseAll = function(){
	this.$el.find('.content').slideUp(this.speed);
	this.$el.find('.content').css('backgroundColor','white');
}

Accordion.prototype.resize = function(){
	this.$el.width(this.w);
}

Accordion.prototype.fade = function(){
	this.$el.fadeOut(this.speed);
	this.$el.fadeIn(this.speed);
}
