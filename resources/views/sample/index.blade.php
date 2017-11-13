<html>
<head>
    <title>Sample</title>
    <base href="/"></base>
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
   
    <!-- CSS - END -->

    <!-- 1. Libraries dependencies -->
    {{ Html::script('js/node_modules/core-js/client/shim.min.js') }}
    {{ Html::script('js/node_modules/zone.js/dist/zone.js') }}
    {{ Html::script('js/node_modules/systemjs/dist/system.src.js') }}
    {{ Html::script('js/systemjs.config.js') }}

    {{ Html::script('js/systemjs.config.js') }}
    {{HTML::style('assets/css/bootstrap.css') }}
    {{HTML::style('assets/css/dataTables.bootstrap.css') }}
    {{HTML::style('assets/css/font-awesome.css') }}
    

    <script>
      System.import('myApp').catch(function(err){ console.log(err); });
    </script>
</head>
<body class="horizontal-navigation">
<div class="container theme-showcase" role="main">
    <!-- 3. View of Application -->
    <my-app>
        <div class="loader_container">
            Loading Content    
        </div>
    </my-app>
    </div>
</body>

    {{ Html::script('assets/js/jquery-2.2.4.js') }}
    {{ Html::script('assets/js/jquery.dataTables.js') }}
    {{ Html::script('assets/js/bootstrap.js') }}
</html>