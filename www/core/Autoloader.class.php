<?php
class Autoloader
{
    static function autoloader_call($class)
    {
        $class = str_replace("\\", DIRECTORY_SEPARATOR, $class);
        if (file_exists("core/".$class.".class.php")) {
            include "core/".$class.".class.php";
        } elseif (file_exists("models/".$class.".model.php")) {
            include "models/".$class.".model.php";
        }
    };

    static function autoload_register() {
        spl_autoload_register("autoloader_call");
    }:
}