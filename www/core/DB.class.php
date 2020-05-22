<?php
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



    public function find(int $id)
    {

        $sql = "SELECT * FROM $this->>table where id = :id";
        $result = $this->sql($sql, [':id' => $id]);
        $row = $result->fetch();

        if ($row){
            $object = new $this->class();
            return $object->hydrate($row);
        }else{
            return null;
        }

    }


    public function findAll(){
        $sql = "SELECT * FROM  $this->table";
        $result = $this->sql($sql);

        $rows = $this->fetchAll();

        $results = array();

        foreach($rows as $row){
            $object = new $this->class();
            array_push($results, $object->hydrate($row));
        }

        return $results;
    }

    public function findBy(array $params, array $order = null): array{
        $sql = "SELECT * FROM  $this->table where ";
        $results = array();

        foreach($params as $key => $value){
            if(is_string($value))
                $comparator = 'LIKE';
            else
                $comparator = '=';

            $sql .= " $key $comparator :$key AND";

            $params[":$key"] = $value;
            unset($params[$key]);
        }

        $sql = rtrim($sql, 'and');

        if ($order)
        {
            $sql .= "ORDER BY ". key($order). " " . $order[key($order)];
        }

        $result = $this->sql($sql, $params);
        $rows = $result->fetchAll();

        foreach($rows as $row)
        {
            $object = new $this->class();
            array_push($results, $object->hydrate($row));
        }

        return $results;
    }





}
