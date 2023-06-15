<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class apartments extends Model
{
    use HasFactory;
    protected $table ='apartments';
    protected $primaryKey ='apartment_id';

    public function users(){
        return $this->belongsTo('App/users');
    }
    public function addresses(){
        return $this->belongsTo('App/addresses');
    }
    public function appointment(){
        return $this->hasMany('App/appointments');
    }
}
