<?php
namespace Managers;
use Core\DB;
use Models\users;

class userManager extends DB
{
    public function __construct()
    {
        parent::__construct(users::class, "users");
    }
}