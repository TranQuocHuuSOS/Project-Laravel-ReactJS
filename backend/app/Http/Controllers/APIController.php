<?php							
							
namespace App\Http\Controllers;							
							
use App\Models\apartments;							
use Illuminate\Http\Request;							
use Illuminate\Support\Facades\File;							
							
class APIController extends Controller							
{							
public function getApartments()							
{							
$apartments = apartments::all();							
return response()->json($apartments);							
}							
public function getOneApartments($id)							
{							
$apartments = apartments::find($id);							
return response()->json($apartments);							
}							
public function addApartments(Request $request)							
{							
$apartments = new apartments();							
// $apartments->name = $request->input('name');							
// $apartments->image = $request->input('image');	
$apartments->user_id = intval($request->input('user_id'));						
$apartments->description = $request->input('description');							
$apartments->price = intval($request->input('price'));													
$apartments->number_room = $request->input('number_room');							
$apartments->area = intval($request->input('area'));	
$apartments->address_id = intval($request->input('address_id'));	
$apartments-> type_room = intval($request->input('type_room'));		
$apartments->save();							
return $apartments;							
}							
public function deleteApartments($id)							
{							
$apartments = apartments::find($id);							
$fileName = 'source/image/product/' . $apartments->image;							
if (File::exists($fileName)) {							
File::delete($fileName);							
}							
$apartments->delete();							
return ['status' => 'ok', 'msg' => 'Delete successed'];							
}							
public function editApartments(Request $request, $id)							
{							
$apartments = apartments::find($id);							
$apartments->user_id = intval($request->input('user_id'));	
$apartments->description = $request->input('description');							
$apartments->price = intval($request->input('price'));													
$apartments->number_room = $request->input('number_room');							
$apartments->area = intval($request->input('area'));
$apartments->address_id = intval($request->input('address_id'));	
$apartments-> type_room = intval($request->input('type_room'));							
$apartments->save();							
return response()->json(['status' => 'ok', 'msg' => 'Edit successed']);							
}							
							
public function uploadImage(Request $request)							
{							
// process image							
if ($request->hasFile('uploadImage')) {							
$file = $request->file('uploadImage');							
$fileName = $file->getClientOriginalName();							
							
$file->move('source/image/product', $fileName);							
							
return response()->json(["message" => "ok"]);							
} else return response()->json(["message" => "false"]);							
}							
}							
							
							
							