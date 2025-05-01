<?php

namespace App\Models;

use App\Enums\LevelEnum;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Monolog\Level;

class Grade extends Model
{
    /** @use HasFactory<\Database\Factories\GradeFactory> */
    use HasFactory, HasUlids, SoftDeletes;

    protected $fillable = [
        'name',
        'level',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'level' => LevelEnum::class,
        ];
    }

    /**
     * Get the attributes that should be appended.
     *
     * @return array<string>
     */
    protected $appends = [
        'level_name',
    ];
    
    /**
     * Get the level name attribute.
     *
     * @return string
     */
    public function getLevelNameAttribute(): string
    {
        // return berupa name and value dari LevelEnum
        return \collect([
            'name' => $this->level->label(), // atau ubah sesuai kebutuhan
            'code' => $this->level->value,
        ]);
    }
}
