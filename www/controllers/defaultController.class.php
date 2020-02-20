<?php

class DefaultController
{
    public function defaultAction()
    {

        //Récupéré depuis la bdd

        //View dashboard sur le template back
        $myView = new View("home");
        /*$myView->assign("firstname", $firstname);*/
    }
}
