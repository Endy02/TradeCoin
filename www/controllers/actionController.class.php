<?php
namespace Controllers;
use Core\View;

class ActionController
{

    public function defaultAction()
    {
        $myView = new View("home");
    }

    //Dashboard
    public function dashboardBackAction()
    {
        $myView = new View("dashboard", "back");
    }

    // Pages
    public function allPageAction()
    {
        $myView = new View("allPage", "pages");
    }

    public function singlePageAction()
    {
        $myView = new View("singlePage", "pages");
    }

    public function addPageAction()
    {
        $myView = new View("addPage", "pages");
    }

    // Cours
    public function allCoursesAction()
    {
        $myView = new View("allCourses", "courses");
    }

    public function singleCoursesAction()
    {
        $myView = new View("singleCourses", "courses");
    }

    //Users
    public function allUserAction()
    {
        $myView = new View("allUser", "user");
    }

    public function addUserAction()
    {
        $myView = new View("addUser", "user");
    }

    public function userAction()
    {
        $myView = new View("user", "user");
    }

    public function userRoleAction()
    {
        $myView = new View("userRole", "user");
    }

    public function userPermissionAction()
    {
        $myView = new View("userPermission", "user");
    }

    //Apparence
    public function apparenceThemeAction()
    {
        $myView = new View("apparenceTheme", "apparence");
    }

    public function apparenceSettingsAction()
    {
        $myView = new View("apparenceSettings", "apparence");
    }

    public function apparenceWidgetAction()
    {
        $myView = new View("apparenceWidget", "apparence");
    }

    //Tradeline
    public function tradlineAction()
    {
        $myView = new View("tradline", "tradline");
    }

    //Parametres
    public function settingsAction()
    {
        $myView = new View("settings", "setting");
    }
}