<?php
namespace Core;

/* use autoloader for al classes */
class Autoloader
{
    static function register() {
        spl_autoload_register([__CLASS__, "autoload"]);
    }

    static function autoloader_call($class)
    {
            /*
                Constant DIRECTOTY-SEPARATOR allow to have the root of all system operator
                For Windows it's '\' and for all others systems it's '/'
             */
            $class = str_replace("\\", DIRECTORY_SEPARATOR, $class);

            if (file_exists("core/".$class.".class.php")) {
                require $_SERVER['DOCUMENT_ROOT'].'/core/'.$class.".class.php";
            } elseif (file_exists("models/".$class.".model.php")) {
                include $_SERVER['DOCUMENT_ROOT']."/models/". $class .".model.php";
            }
    }

}