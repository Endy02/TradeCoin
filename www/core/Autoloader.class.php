<?php
class Autoloader
{
    static function autoload_register() {
        spl_autoload_register([__CLASS__, "autoloader_call"]);
    }

    static function autoloader_call($class)
    {
            /*
                Constant DIRECTOTY-SEPARATOR allow to have the root of all system operator
                For Windows it's '\' and for all others systems it's '/'
             */
            $class = str_replace("\\", DIRECTORY_SEPARATOR, $class);

            if (file_exists("core/".$class.".class.php")) {
                include "core/".$class.".class.php";
            } elseif (file_exists("models/".$class.".model.php")) {
                include "models/".$class.".model.php";
            }
    }

}