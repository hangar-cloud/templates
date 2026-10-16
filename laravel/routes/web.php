<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    try {
        $connection = DB::connection();
        $database = $connection->getDriverName() === 'sqlite'
            ? 'SQLite in the container. Add a PostgreSQL or MySQL database and set DATABASE_URL to use it.'
            : 'connected to '.$connection->getDriverTitle().' '.$connection->getServerVersion().'.';
    } catch (Throwable) {
        $database = 'the database in DATABASE_URL is not reachable. Check the variable.';
    }

    return view('welcome', ['database' => $database]);
});
