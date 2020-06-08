<?php

namespace Models;

use App\Core\Model;
use App\Models\users;

class Post extends Model
{
    protected $id;

    protected $title;

    protected $author;

    public function setId(int $id)
    {
        $this->id = $id;
    }

    public function setTitle(string $title)
    {
        $this->title = $title;
    }

    public function setAuthor($author)
    {
        $this->author = $author;
    }

    public function initRelation(): array
    {
        return [
            'author' => users::class,
        ];
    }
}