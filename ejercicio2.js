
/*1*/
$('input[name="firstname"]:eq(0)').val("Nicole");

/*2*/
$('select[name="fav_day"]:eq(0)').val("Monday");

/*3*/
$("label").text("Tu nombre:");

/*4*/
var fav_day = $('select[name="fav_day"]');

/*5*/
$('input[name="sex"]').last().prop("checked", true)

/*6*/

$("form:eq(0)").prop("name", "personal_info");

/*7*/
$("form:eq(1)").prop("name", "job_info");

/*8*/
$("form:eq(0)").prepend("<h1>Entrevista personal</h1>");
$("form:eq(1)").prepend("<h1>Entrevista de trabajo</h1>");

/*9*/
$('input[name="sex"]:eq(0)').before("<h1>Seleccione genero</h1>");

/*10*/
$('input[name="lastname"]').after("<br>Email: <br><input name='email' type='email'>");

/*11*/
$('form').addClass("form")