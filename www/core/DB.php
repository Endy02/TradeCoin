<?php
namespace Core;

class DB
{
    private $table;
    private $pdo;

    public function __construct()
    {
        //SINGLETON
        try {
            $this->pdo = new PDO(DB_DRIVER.":host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PWD);
        } catch (Exception $e) {
            die("Erreur SQL : ".$e->getMessage());
        }

        $this->table =  DB_PREFIXE.get_called_class();
    }

    public function save()
    {
        $propChild = get_object_vars($this);
        $propDB = get_class_vars(get_class());

        $columnsData = array_diff_key($propChild, $propDB);
        $columns = array_keys($columnsData);


        if (!is_numeric($this->id)) {

            //INSERT
            $sql = "INSERT INTO ".$this->table." (".implode(",", $columns).") VALUES (:".implode(",:", $columns).");";
        } else {

            //UPDATE
            foreach ($columns as $column) {
                $sqlUpdate[] = $column."=:".$column;
            }

            $sql = "UPDATE ".$this->table." SET ".implode(",", $sqlUpdate)." WHERE id=:id;";
        }


        $queryPrepared = $this->pdo->prepare($sql);
        $queryPrepared->execute($columnsData);
    }

    public function find(int $id): ?\Models\model
    {
        $sql = 'SELECT * FROM $this->table WHERE id = :id';
        $queryPrepared = $this->pdo->prepare($sql);
        $queryPrepared->execute(['id' => $id]);
        $result = $queryPrepared->fetch();
        $obj = new $this->class();
        $obj->hydrate($result);

        return $obj;
    }

    public function findAll(): array
    {
        $sql = 'SELECT * FROM $this->table';
        $queryPrepared = $this->pdo->prepare($sql);
        $queryPrepared->execute();
        $rows = $queryPrepared->fetchAll();

        $results = array();

        foreach ($rows as $row )
        {
            $obj = new $this->class();
            array_push($results, $obj->hydrate($row) );
        }

        return $results;
    }

    public function findBy(array $params, array $order = null): ?array
    {
        $results = array();

        $sql = 'SELECT * FROM $this->table WHERE';

        foreach ($params as $key => $value)
        {
            if (is_string($value)) {
                $comparator = "LIKE";
            } else {
                $comparator = "=";
            }

            $sql .= "$key $comparator : $key and";
            $params[":$key"] = $value;
            unset($params[$key]);
        }

        $sql = rtrim($sql, "and");

        if ($order) {
            $sql .= "ORDER BY " .key[$order]. " " .$order[key($order)];
        }

        $queryPrepared = $this->pdo->prepare($sql);
        $queryPrepared->execute();
        $rows = $queryPrepared->fetchAll();

        foreach ($rows as $row )
        {
            $obj = new $this->class();
            array_push($results, $obj->hydrate($row) );
        }

        return $results;
    }

    public function count(array $params): int
    {
        $sql = 'SELECT COUNT(*) FROM $this->table WHERE';

        foreach ($params as $key => $value)
        {
            if (is_string($value)) {
                $comparator = "LIKE";
            } else {
                $comparator = "=";
            }

            $sql .= "$key $comparator : $key and";
            $params[":$key"] = $value;
            unset($params[$key]);
        }

        $sql = rtrim($sql, "and");

        $queryPrepared = $this->pdo->prepare($sql);
        $queryPrepared->execute();
        $result = $queryPrepared->fetchAll();

        return $result->fetchColumn();
    }

    public function delete(int $id): bool
    {
        $sql = 'DELETE FROM $this->table WHERE id = $id';
        $queryPrepared = $this->pdo->prepare($sql);
        $queryPrepared->execute(['id' => $id]);

        return true;
    }
}