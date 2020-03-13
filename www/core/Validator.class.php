<?php
namespace Core;

class Validator{

    /**
     * @var array $patterns
     */
    public $patterns = array(
        'uri'           => '[A-Za-z0-9-\/_?&=]+',
        'url'           => '[A-Za-z0-9-:.\/_?&=#]+',
        'alpha'         => '[\p{L}]+',
        'words'         => '[\p{L}\s]+',
        'alphanum'      => '[\p{L}0-9]+',
        'int'           => '[0-9]+',
        'float'         => '[0-9\.,]+',
        'tel'           => '[0-9+\s()-]+',
        'text'          => '[\p{L}0-9\s-.,;:!"%&()?+\'°#\/@]+',
        'file'          => '[\p{L}\s0-9-_!%&()=\[\]#@,.;+]+\.[A-Za-z0-9]{2,4}',
        'folder'        => '[\p{L}\s0-9-_!%&()=\[\]#@,.;+]+',
        'address'       => '[\p{L}0-9\s.,()°-]+',
        'date_dmy'      => '[0-9]{1,2}\-[0-9]{1,2}\-[0-9]{4}',
        'date_ymd'      => '[0-9]{4}\-[0-9]{1,2}\-[0-9]{1,2}',
        'email'         => '[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+[.]+[a-z-A-Z]'
    );

    /**
     * @var array $errors
     */
    public $errors = array();

    /**
     * Nom du champ
     *
     * @param string $name
     * @return Validator
     */
    public function name($name){

        $this->name = $name;
        return $this;

    }

    /**
     * Valeur du champ
     *
     * @param mixed $value
     * @return Validator
     */
    public function value($value){

        $this->value = $value;
        return $this;

    }

    /**
     * Fichier
     *
     * @param mixed $value
     * @return Validator
     */
    public function file($value){

        $this->file = $value;
        return $this;

    }

    /**
     * Pattern
     *
     * @param string $name nom du pattern
     * @return Validator
     */
    public function pattern($name){

        if($name == 'array'){

            if(!is_array($this->value)){
                $this->errors[] = 'Format du champ '.$this->name.' non valide.';
            }

        }else{

            $regex = '/^('.$this->patterns[$name].')$/u';
            if($this->value != '' && !preg_match($regex, $this->value)){
                $this->errors[] = 'Format du champ '.$this->name.' non valide.';
            }

        }
        return $this;

    }

    /**
     * Pattern personnalisé
     *
     * @param string $pattern
     * @return Validator
     */
    public function customPattern($pattern){

        $regex = '/^('.$pattern.')$/u';
        if($this->value != '' && !preg_match($regex, $this->value)){
            $this->errors[] = 'Format du champ '.$this->name.' non valide.';
        }
        return $this;

    }

    /**
     * Champ obligatoire
     *
     * @return Validator
     */
    public function required(){

        if((isset($this->file) && $this->file['error'] == 4) || ($this->value == '' || $this->value == null)){
            $this->errors[] = 'Champ '.$this->name.' obligatoire.';
        }
        return $this;

    }

    /**
     * Taille minimal du champ
     *
     * @param $length
     * @return Validator
     */
    public function min($length){

        if(is_string($this->value)){

            if(strlen($this->value) < $length){
                $this->errors[] = 'Valeur du champ '.$this->name.' inferieur a la valeur minimal';
            }

        }else{

            if($this->value < $length){
                $this->errors[] = 'Valeur du champ '.$this->name.' inferieur a la valeur minimal';
            }

        }
        return $this;

    }

    /**
     * Taille maximum du champ
     *
     * @param $length
     * @return Validator
     */
    public function max($length){

        if(is_string($this->value)){

            if(strlen($this->value) > $length){
                $this->errors[] = 'Valeur du champ '.$this->name.' supérieur a la valeur maximal';
            }

        }else{

            if($this->value > $length){
                $this->errors[] = 'Valeur du champ '.$this->name.' supérieur a la valeur maximal';
            }

        }
        return $this;

    }

    /**
     * Comparaison de la valeur avec un autre champ
     *
     * @param mixed $value
     * @return Validator
     */
    public function equal($value){

        if($this->value != $value){
            $this->errors[] = 'Valeur du champ '.$this->name.' ne correspond pas.';
        }
        return $this;

    }

    /**
     * Dimension maximal du fichier
     *
     * @param int $size
     * @return Validator
     */
    public function maxSize($size){

        if($this->file['error'] != 4 && $this->file['size'] > $size){
            $this->errors[] = 'Le fichier '.$this->name.' dépasse la taille maximale de '.number_format($size / 1048576, 2).' MB.';
        }
        return $this;

    }

    /**
     * Extension du fichier
     *
     * @param string $extension
     * @return Validator
     */
    public function ext($extension){

        if($this->file['error'] != 4 && pathinfo($this->file['name'], PATHINFO_EXTENSION) != $extension && strtoupper(pathinfo($this->file['name'], PATHINFO_EXTENSION)) != $extension){
            $this->errors[] = 'Le fichier '.$this->name.' n\'est pas un '.$extension.'.';
        }
        return $this;

    }

    /**
     * Purification contre les failles XSS
     *
     * @param string $string
     * @return string $string
     */
    public function purify($string){
        return htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
    }

    /**
     * Champ valider
     *
     * @return boolean
     */
    public function isSuccess(){
        if(empty($this->errors)) return true;
    }

    /**
     * Erreur de validation
     *
     * @return array $this->errors
     */
    public function getErrors(){
        if(!$this->isSuccess()) return $this->errors;
    }

    /**
     * Visualisation des erreur sous forme HTML
     *
     * @return string $html
     */
    public function displayErrors(){

        $html = '<ul>';
        foreach($this->getErrors() as $error){
            $html .= '<li>'.$error.'</li>';
        }
        $html .= '</ul>';

        return $html;

    }

    /**
     * Visualisation de la validation
     *
     * @return boolean|string
     */
    public function result(){

        if(!$this->isSuccess()){

            foreach($this->getErrors() as $error){
                echo "$error\n";
            }
            exit;

        }else{
            return true;
        }

    }

    /**
     * Vérification si la valeur est un int
     *
     * @param mixed $value
     * @return boolean
     */
    public static function is_int($value){
        if(filter_var($value, FILTER_VALIDATE_INT)) return true;
    }

    /**
     * Vérification si la valeur est un float
     *
     * @param mixed $value
     * @return boolean
     */
    public static function is_float($value){
        if(filter_var($value, FILTER_VALIDATE_FLOAT)) return true;
    }

    /**
     * Vérification si la valeur est une lettre de l'alphabet
     *
     * @param mixed $value
     * @return boolean
     */
    public static function is_alpha($value){
        if(filter_var($value, FILTER_VALIDATE_REGEXP, array('options' => array('regexp' => "/^[a-zA-Z]+$/")))) return true;
    }

    /**
     * Vérification si la valeur est un caractère alpha Numeric
     *
     * @param mixed $value
     * @return boolean
     */
    public static function is_alphanum($value){
        if(filter_var($value, FILTER_VALIDATE_REGEXP, array('options' => array('regexp' => "/^[a-zA-Z0-9]+$/")))) return true;
    }

    /**
     * Vérification si la valeur est une URL
     *
     * @param mixed $value
     * @return boolean
     */
    public static function is_url($value){
        if(filter_var($value, FILTER_VALIDATE_URL)) return true;
    }

    /**
     * Vérification si la valeur est une URI
     *
     * @param mixed $value
     * @return boolean
     */
    public static function is_uri($value){
        if(filter_var($value, FILTER_VALIDATE_REGEXP, array('options' => array('regexp' => "/^[A-Za-z0-9-\/_]+$/")))) return true;
    }

    /**
     * Vérification si la valeur est vrai ou fausse
     *
     * @param mixed $value
     * @return boolean
     */
    public static function is_bool($value){
        if(is_bool(filter_var($value, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE))) return true;
    }

    /**
     * Vérification si la valeur est un Email
     *
     * @param mixed $value
     * @return boolean
     */
    public static function is_email($value){
        if(filter_var($value, FILTER_VALIDATE_EMAIL)) return true;
    }

    /**
     * @param $configForm
     * @param $data
     * @return array
     */
    public static function checkForm($configForm, $data){
		$listOfErrors = [];

		//Vérifications

		//Vérifier le nb de input
		if( count($configForm["fields"]) == count($data) ) {

			foreach ($configForm["fields"] as $name => $config) {
				
				//Vérifie que l'on a bien les champs attendus
				//Vérifier les required
				if( !array_key_exists($name, $data) || 
					( $config["required"] && empty($data[$name]))
				){
					return ["Tentative de hack !!!"];
				}
				
				//Vérifier l'email
				if($config["type"]=="email"){
					
					if(self::checkEmail($data[$name])){
						//Vérifier l'unicité de l'email
					}else{
						$listOfErrors[]=$config["errorMsg"];
					}
				}

					

				//Vérifier le captcha
				if($_SESSION["captcha"] != ""){

				}

				//Vérifier le password
					//Vérifier les confirm

				//Vérifier le min
				//Vérifier le max
			}

		}else{
			return ["Tentative de hack !!!"];
		}

		return $listOfErrors;
	}

}