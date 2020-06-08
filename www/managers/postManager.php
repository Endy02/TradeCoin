<?php
namespace Managers;
use App\Core\Connection\QueryBuilder;
use Core\DB;
use Models\users;

class postManager extends DB
{
    public function __construct()
    {
        parent::__construct(users::class, "users");
    }

    public function getUserPost(int $id)
    {
        return (new QueryBuilder())
            ->select('p.*, u.*')
            ->from('nfoz_post', 'p')
            ->join('nfoz_users','u')
            ->where('p.author = :iduser')
            ->setParameter('iduser', $id)
            ->getQuery()
            ->getArrayResult(Post::class)
            ;
    }

}