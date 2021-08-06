var response = document.getElementById("enter");
var myinput = document.getElementById("userInput");
var mylist = document.querySelector("ul");
var items = document.getElementsByTagName("li");

var secondresponse=document.getElementById("entry");
var my_input=document.getElementById("user_Input");
var my_list=document.getElementById("other");
var items2=document.getElementsByTagName("li");
function inputlen()
{
	return my_input.value.length;
}

function inputl()
{
	return myinput.value.length;
}
function listlen()
{
	return items2.length;
}
function listLength()
{
	return items.length;
}
function create_ListElement()
{
	var l=document.createElement("li");
	l.appendChild(document.createTextNode(my_input.value));
	my_list.appendChild(l);
	my_input.value="";

	function crossOut1()
	{
		l.classList.toggle("done");
	}
	l.addEventListener("click",crossOut1);

	var my_btn=document.createElement("button");
	my_btn.appendChild(document.createTextNode("DONE"));
	l.appendChild(my_btn);
	my_btn.addEventListener("click",deleteitem);

	function deleteitem()
	{
		l.classList.add("delete")
	}
}
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(myinput.value));
	mylist.appendChild(li);
	myinput.value = "";

	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);



	var mybtn = document.createElement("button");
	mybtn.appendChild(document.createTextNode("DONE"));
	li.appendChild(mybtn);
	mybtn.addEventListener("click", deleteListItem);


	function deleteListItem(){
		li.classList.add("delete")
		}

}


function addListAfterClick()
{
	if (inputl() > 0)
	 {
		createListElement();
	}
}

function addListAfterKeypress(event)
 {
	if (inputl() > 0 && event.which ===13)
	 {
		createListElement();
	}
}
function addListAfterClick1()
{
	if (inputlen() > 0)
	 {
		create_ListElement();
	}
}
function addListAfterKeypress1(event)
 {
	if (inputlen() > 0 && event.which ===13)
	 {
		create_ListElement();
	}
}
response.addEventListener("click",addListAfterClick);
myinput.addEventListener("keypress", addListAfterKeypress);
secondresponse.addEventListener("click",addListAfterClick1);
my_input.addEventListener("keypress", addListAfterKeypress1);
