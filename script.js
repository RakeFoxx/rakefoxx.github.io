var pc = document.getElementById("prev_comments");
var cb = document.getElementById("cbox");
var nb = document.getElementById("nbox");

// For todays date;
Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours()+":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

function postComment()
{
	var newDate = new Date();
	let datetime = newDate.today() + " @ " + newDate.timeNow();
	pc.innerHTML = "<span style='color:gray; font-size:15px'><b>" + nb.value + "</b><div style='float:right;'><i>" + datetime + "</i></div></span><br>" + cb.value + "<br><hr>" + pc.innerHTML;
	cb.value = "";
}