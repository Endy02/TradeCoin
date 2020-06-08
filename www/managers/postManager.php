<?php

namespace App\Managers;

use App\Core\Manager;
use App\Core\Connection\QueryBuilder;
use Models\posts;

class PostManager extends Manager {

    public function __construct()
    {
        parent::__construct(posts::class, 'posts');
    }

    public function getUserPost(int $id)
    {
        return (new QueryBuilder($this->getConnection()))
            ->select('p.*, u.*')
            ->from('nfoz_posts', 'p')
            ->join('nfoz_users', 'u')
            ->where('p.author = :iduser')
            ->setParameter('iduser', $id)
            ->getQuery()
            ->getArrayResult(posts::class);
    }
}