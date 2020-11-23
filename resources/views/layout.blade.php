
<!DOCTYPE html>
<html>
<head>
	<title>Mapa XML</title>
	<script type="text/javascript" src="{{ asset('js/objetoAjax.js') }}"></script>
	<script type="text/javascript" src="{{ asset('js/datos_mapa_interactivo.js') }}"></script>
	
{{-- 	<script type="text/javascript" src="{{ asset('js/mapa-interactivo-javascript.js') }}"></script> --}}
    <link rel="stylesheet" href="{{ asset('css/mapa.css') }}">

</head>
<body>
	<div class='header'>
		<h1> Mapa Interactivo </h1>
	</div>

	@yield('content')
	
	

</body>
</html>