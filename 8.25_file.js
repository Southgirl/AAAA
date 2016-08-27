name='jerry';

var getName =function(){
	return this.name;
}

function Person(){
	console.log(this.name);
	console.log(getName.call(this));
}

var o =function{
	name:'jack'
	getName:function(){
		return this,name;
	}
}

Person.call(o);
