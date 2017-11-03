var data;

function EmptyFigurePlugin() {
    this.name = "Empty Figure";
    this.data = new Data();
    data = this.data;
    this.figure;
    this.command = new Command(this.data);
}

EmptyFigurePlugin.prototype.addToolBar = function() {
	var divT = document.getElementById("navBar");
    divT.appendChild(addToolColorItem("Color", this.command.changeColor));
    divT.appendChild(addDropDownToolItem("Width", ["1", "3", "5"], this.command.changeWidth));
    divT.appendChild(addDropDownToolItem("Type", ["Rectangle", "RoundRectangle", "Line", "Ellipse"], this.command.changeType));
	
	var divP = document.getElementById("pBody");
	divP.appendChild(addToolColorItem("Color", this.command.changeColor));
	divP.appendChild(addDropDownToolItemP("Width", ["1", "3", "5"], this.command.changeWidth));
	divP.appendChild(addTypeItemP("Type", ["Rectangle", "RoundRectangle", "Line", "Ellipse"], this.command.changeType));
	
}

function addToolColorItem(imageName, func) {
    var div = document.createElement("input");
    div.type = "color";
    div.value = data.color;

    div.style.width = 34;
    div.style.height = 34;
    div.style.marginBottom = 5;
    div.style.marginTop = 5;
	div.style.marginLeft = 5;
	
    div.onchange = function () { func(this.value); };

    return div;
}
function addDropDownToolItem(name, list, func) {
    var div = document.createElement("button");
    div.classList = "btn navbar-btn";
	div.textContent = name;
	
    div.style.marginBottom = 5;
    div.style.marginTop = 5;
	div.style.marginLeft = 5;
    div.style.marginRight = 0;
    div.style.padding = 0;
	div.style.height = 34;

    div.appendChild(getDropDownList(list, func));

    return div;
}

function getDropDownList(list, func) {

    var hover = document.createElement("select");
    hover.classList = "comboBox";

    for (var i = 0; i < list.length; i++){
        var opt = document.createElement("option");
		opt.textContent = list[i];
        hover.appendChild(opt);
    }
	hover.onchange = function () { func(hover.options[hover.selectedIndex].text); };
	
    return hover;
}

function addDropDownToolItemP(name, list, func) {
    var div = document.createElement("button");
    div.classList = "btn btn-primary";
	div.textContent = name;
	
    div.style.marginBottom = 5;
    div.style.marginTop = 5;
	div.style.marginLeft = 5;
    div.style.marginRight = 0;
    div.style.padding = 0;
	div.style.height = 34;

    div.appendChild(getDropDownList(list, func));

    return div;
}

function getDropDownListP(list, func) {

    var hover = document.createElement("select");
    hover.classList = "comboBox";
	hover.style.color = initial;
	
    for (var i = 0; i < list.length; i++){
        var opt = document.createElement("option");
		opt.textContent = list[i];
        hover.appendChild(opt);
    }
	hover.onchange = function () { func(hover.options[hover.selectedIndex].text); };
    return hover;
}
function addTypeItemP(name, list, func)
{
	var group = document.createElement("div");
	div.classList = "btn-group";
	for (var i = 0; i < list.length; i++)
	{
        var btn = document.createElement("btn btn-primary");
		btn.textContent = list[i];
        group.appendChild(opt);
		
		btn.onclick = function () {func(btn.textContext); };
    }
	return group;
}

function Command(data) {
    this.data = data;
}

Command.prototype.changeColor = function (color) {
    data.color = color;
};

Command.prototype.changeWidth = function (width) {
    data.width = parseInt(width);
};

Command.prototype.changeType = function (type) {
    switch (type) {
		case "RoundRectangle": 
			data.type = FType.RRECT; break;
        case "Rectangle": 
			data.type = FType.RECT; break;
        case "Line": 
			data.type = FType.LINE; break;
        case "Ellipse": 
			data.type = FType.ELLIPSE; break;
    }
};



