<?php
namespace Models;
use Core\helpers;
use Models\model;

class users extends model
{
    protected $id;
    protected $firstname;
    protected $lastname;
    protected $email;
    protected $pwd;
    protected $status;

    public function __construct()
    {
        parent::__construct();
    }

    /**
	 * @return mixed
	 */
	public function getId()
	{
		return $this->id;
	}
	
	/**
	 * @param mixed $id
	 */
	public function setId($id)
	{
		$this->id = $id;
	}
	
	/**
	 * @return mixed
	 */
	public function getFirstname()
	{
		return $this->firstname;
	}
	
	/**
	 * @param mixed $firstname
	 */
	public function setFirstname($firstname)
	{
		$this->firstname = $firstname;
	}
	
	/**
	 * @return mixed
	 */
	public function getLastname()
	{
		return $this->lastname;
	}
	
	/**
	 * @param mixed $lastname
	 */
	public function setLastname($lastname)
	{
		$this->lastname = $lastname;
	}
	
	/**
	 * @return mixed
	 */
	public function getEmail()
	{
		return $this->email;
	}
	
	/**
	 * @param mixed $email
	 */
	public function setEmail($email)
	{
		$this->email = $email;
	}
	
	/**
	 * @return mixed
	 */
	public function getPwd()
	{
		return $this->pwd;
	}
	
	/**
	 * @param mixed $pwd
	 */
	public function setPwd($pwd)
	{
		$this->pwd = $pwd;
	}
	
	/**
	 * @return mixed
	 */
	public function getStatus()
	{
		return $this->status;
	}
	
	/**
	 * @param mixed $status
	 */
	public function setStatus($status)
	{
		$this->status = $status;
	}

    public static function getRegisterForm(){
        return [
            "config"=>[
                "method"=>"POST",
                "action"=>helpers::getUrl("user", "register"),
                "class"=>"user",
                "id"=>"formRegisterUser",
                "submit"=>"S'inscrire"
            ],

            "fields"=>[
                "firstname"=>[
                    "type"=>"text",
                    "placeholder"=>"Votre prénom",
                    "class"=>"form-control form-control-user",
                    "id"=>"",
                    "required"=>true,
                    "min-length"=>2,
                    "max-length"=>50,
                    "errorMsg"=>"Votre prénom doit faire entre 2 et 50 caractères"
                ],
                "lastname"=>[
                    "type"=>"text",
                    "placeholder"=>"Votre nom",
                    "class"=>"form-control form-control-user",
                    "id"=>"",
                    "required"=>true,
                    "min-length"=>2,
                    "max-length"=>100,
                    "errorMsg"=>"Votre nom doit faire entre 2 et 100 caractères"
                ],
                "email"=>[
                    "type"=>"email",
                    "placeholder"=>"Votre email",
                    "class"=>"form-control form-control-user",
                    "id"=>"",
                    "required"=>true,
                    "uniq"=>["table"=>"users","column"=>"email"],
                    "errorMsg"=>"Le format de votre email ne correspond pas"
                ],
                "pwd"=>[
                    "type"=>"password",
                    "placeholder"=>"Votre mot de passe",
                    "class"=>"form-control form-control-user",
                    "id"=>"",
                    "required"=>true,
                    "errorMsg"=>"Votre mot de passe doit faire entre 6 et 20 caractères avec une minuscule et une majuscule"
                ],
                "pwdConfirm"=>[
                    "type"=>"password",
                    "placeholder"=>"Confirmation",
                    "class"=>"form-control form-control-user",
                    "id"=>"",
                    "required"=>true,
                    "confirmWith"=>"pwd",
                    "errorMsg"=>"Votre mot de passe de confirmation ne correspond pas"
                ]
                /*"captcha"=>[
                        "type"=>"captcha",
                        "class"=>"form-control form-control-user",
                        "id"=>"",
                        "required"=>true,
                        "placeholder"=>"Veuillez saisir les caractères",
                        "errorMsg"=>"Captcha incorrect"
                    ]*/
            ]
        ];
    }

    public function getLoginForm()
    {}
}












