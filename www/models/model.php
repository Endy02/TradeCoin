<?php


namespace Models;
use Core\DB;

class model extends DB
{


    public function hydrate(array $donnes)
    {
        foreach ($donnes as $key => $value){

            $method = 'set'.ucfirst($key);

            if(method_exists($this, $method)){
                $this->$method($value);
            }
        }
    }
}