<!DOCTYPE html>
<html>
<head>
	<title>ejercicio1</title>
</head>
<body>
	<script type="text/javascript">
		var calcularIMC = function(peso, estatura){
		 return peso / (estatura * estatura);
		}
		var interpretarIMC = function(peso, estatura){
		 var imc = calcularIMC(peso, estatura);
		 if (imc > 24){
		 return "sobrepeso";
		 } else if (imc > 19) {
		 return "ok";
		 } else {
		 return "bajo peso";
		 }
		}
		resultado = interpretarIMC(65,1.70);
		console.log(resultado);
	</script>
</body>
</html>