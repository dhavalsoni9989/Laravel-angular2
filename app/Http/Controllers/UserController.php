<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Response;
use Datatables;

class UserController extends Controller
{
    /*
    *This function is used for userlisting
    */
    function index()
    {
        $userdata = DB::table('user')->get();
        //re($userdata);
		$Data =  Datatables::of($userdata);
        $Data->addColumn('action', function ($dataVal) {
        });
		
        return $Data->make(true);
    }
    /*
    * This function is used to 
    * get userdata by userid
    */
    function edit($userid)
    {
        $userdata = DB::table('user')->where("userId",$userid)->get();
        //return $userdata;
        return Response()->json($userdata);
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
        
        if(isset($userdata['userId']))
        {
            $userid = $userdata['userId'];
            unset($userdata['userId']);
            unset($userdata['insertDateTime']);
            unset($userdata['status']);
            $userdata['updateDateTime'] = date("Y-m-d H:i:s");
                DB::table('user')
                ->where('userId', $userid)
                ->update($userdata);
            $lastInsertedId = $userid;
        }
        else{
            $lastInsertedId = DB::table('user')->insertGetId($userdata);
        }
        
        //return json_encode("Success");
        //
        return Response()->json([
            'id' => $lastInsertedId,
            'success'   => true,
            'message'   => 'User added successfully.'
        ]);
    }
    /*
    * This function is used to delete the user
    */
    function destroy($userid)
    {
        DB::table('user')->where('userId',$userid)->delete();
        return Response()->json([
            'id' => $userid,
            'success'   => true,
            'message'   => 'User deleted successfully.'
        ]);
    }
    /*
    * This function is used to change the user status
    */
    function changestatus()
    {
        $userid = Input::get('id');
        $userdata = DB::table('user')->where("userId",$userid)->select("status")->first();
        $userstatus = !$userdata->status;
        DB::table('user')
        ->where('userId', $userid)
        ->update(array("status"=>$userstatus));
        return Response()->json([
            'id' => $userid,
            'success'   => true,
            'message'   => 'User status updated successfully.'
        ]);
        
    }
}
