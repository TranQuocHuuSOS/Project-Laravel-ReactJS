<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class users extends Model
{
    use HasFactory;
    protected $table = 'users';
    protected $primaryKey = 'id';

    public function rating()
    {
        return $this->hasMany('App\Models\ratings', 'user_id');
    }

    public function contract()
    {
        return $this->hasMany('App\Models\contracts', 'user_id');
    }
    public function apartment()
    {
        return $this->hasMany('App\Models\apartments', 'user_id');
    }
    public function book_apartment()
    {
        return $this->hasMany('App\Models\book_apartments', 'user_id');
    }
    public function appointment()
    {
        return $this->hasMany('App\Models\appointments', 'user_id');
    }
    public function apartmentIssue()
    {
        return $this->hasMany('App\Models\apartmentIssue', 'user_id');
    }
}


