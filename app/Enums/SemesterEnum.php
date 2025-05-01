<?php

namespace App\Enums;

enum SemesterEnum: string
{
    case ADD = 'ganjil';
    case EVEN = 'genap';

    public function label(): string
    {
        return match ($this) {
            self::ADD => 'Ganjil',
            self::EVEN => 'Genap',
        };
    }
}
