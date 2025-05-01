<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Teacher extends Model
{
    /** @use HasFactory<\Database\Factories\TeacherFactory> */
    use HasFactory, HasUlids, SoftDeletes;

    protected $fillable = [
        'name',
        'nip',
        'nuptk',
        'photo',
    ];

    // Tambahkan 'image_url' ke properti $appends agar accessor ini
    // otomatis disertakan saat model diubah menjadi array/JSON (untuk Inertia)
    protected $appends = ['photo_url'];

    /**
     * Accessor untuk mendapatkan URL publik gambar.
     * Metode ini akan diakses sebagai $model->image_url
     * Asumsi: kolom database yang menyimpan path relatif adalah 'gambar_path'
     */
    public function getPhotoUrlAttribute()
    {
        $relativePath = $this->attributes['photo'] ?? null;

        if ($relativePath) {
            return asset('storage/tmp/'.$relativePath);
        }

        return null;
    }

    public function academicYears()
    {
        return $this->hasMany(AcademicYear::class);
    }
}
