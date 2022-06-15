<?php
class conection {
    function conectionPROTAFOLHO (){
         $host = "localhost";
         $portafolhoname = "dbportafolho";
         $username = "postgres";
         $password = "pegona1"
         try{
            $conn = new PDO ("pgsgl:host= $host; portafolhoname=$portafolhoname", $username, $password){
                echo "Se conecto correctamente a base de dato";
            }
            catch(PDOException $exp){
                echo ("No conecto correctamente a base de dato, $exp ")
            }
            return $conn;
         }
    }
}

?>