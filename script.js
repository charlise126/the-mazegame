function ValidateEmail(mail)
{
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(my form.emailaddr.value))

{
	return (true)
}
alert("you have entered an invalid email address!")
return(false)

}
// the color below changes the color of the navigaition bar
function changeColor(newColor){
	var navColor=document.getElementByid('navbar');
	navColor.style.backgroundColor=newColor
}