<?php
namespace Core;

class Autoloader
{
    static function register() {
        spl_autoload_register([__CLASS__, "autoload"]);
    }

    static function autoload($class)
    {
	    if (strpos($class, __NAMESPACE__ . '\\') === 0){
		    //var_dump($class);
		    $class = str_replace(__NAMESPACE__ . '\\', '', $class);
		    $class = str_replace('\\', DIRECTORY_SEPARATOR, $class);
		
		    if (file_exists($_SERVER['DOCUMENT_ROOT'].'/core/'.$class.".class.php")) {
			    //var_dump($class);
			    include $_SERVER['DOCUMENT_ROOT'].'/core/'.$class.".class.php";
		    } elseif (file_exists($_SERVER['DOCUMENT_ROOT'].'/models/'.$class.".model.php")) {
			    include $_SERVER['DOCUMENT_ROOT']."/models/". $class .".model.php";
		    }
	    }
    }

}