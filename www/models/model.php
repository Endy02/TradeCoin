<?php
namespace Models;
use Managers\userManager;

class model extends userManager
{
    public function _toArray()
    {
        $property = get_object_vars($this);
        return $property;
    }

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