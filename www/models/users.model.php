<?php
namespace Models;

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

}












