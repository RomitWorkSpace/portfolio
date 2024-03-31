<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Portfolio</title>

          <!-- Vendor CSS Files -->


      <!-- Vendor JS Files -->
      <link href="https://fonts.googleapis.com/css2?family=Lily+Script+One&display=swap" rel="stylesheet">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    </head>
    <body style="">
    <div id="app"></div>
        @viteReactRefresh
        @vite(['resources/js/main.js'])
        @vite(['resources/js/App.jsx'])
    </body>

</html>
