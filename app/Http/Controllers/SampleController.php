<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Response;
use Datatables;

class SampleController extends Controller
{
	public function __construct(){
		//$this->middleware('auth');
	}
    //This function is main index function
    function index()
    {
        $start = Input::get('start');
        $length = Input::get('length');
        //$userdata = DB::table('customers')->skip($start)->take($length)->get();
        $userdata = DB::table('customers')->get();
		//$userdata = DB::table('customers')->select('customerName', 'phone','city','state')->get();
		//re($users);
		$Data =  Datatables::of($userdata);
        $Data->addColumn('action', function ($dataVal) {
        });
		
        return $Data->make(true);
    }
    /*
    * This function is used to add the user
    */
    function store()
    {
        $userdata = array();
        $input = Input::all();
        foreach($input as $key=>$value)
        {
            $userdata[$key] = $value;
        }
        DB::table('customers')->insert($userdata);
        $lastInsertedId = "123";
        //return json_encode("Success");
        //
        return Response()->json([
            'id' => $lastInsertedId,
            'success'   => true,
            'message'   => 'User added successfully.'
        ]);
    }
}
