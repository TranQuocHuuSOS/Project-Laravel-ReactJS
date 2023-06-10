<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class apartments extends Model
{
    use HasFactory;
    protected $table ='apartments';
    public function users(){
        return $this->hasMany('App/users');
    }
    public function addresses(){
        return $this->hasMany('App/addresses');
    }
}
