<?php

namespace App\Enums;

enum LevelEnum: string
{
    case KELAS_1 = '1';
    case KELAS_2 = '2';
    case KELAS_3 = '3';
    case KELAS_4 = '4';
    case KELAS_5 = '5';
    case KELAS_6 = '6';
    case KELAS_7 = '7';
    case KELAS_8 = '8';
    case KELAS_9 = '9';
    case KELAS_10 = '10';
    case KELAS_11 = '11';
    case KELAS_12 = '12';

    public function label(): string
    {
        return match ($this) {
            self::KELAS_1 => 'Kelas 1',
            self::KELAS_2 => 'Kelas 2',
            self::KELAS_3 => 'Kelas 3',
            self::KELAS_4 => 'Kelas 4',
            self::KELAS_5 => 'Kelas 5',
            self::KELAS_6 => 'Kelas 6',
            self::KELAS_7 => 'Kelas 7',
            self::KELAS_8 => 'Kelas 8',
            self::KELAS_9 => 'Kelas 9',
            self::KELAS_10 => 'Kelas 10',
            self::KELAS_11 => 'Kelas 11',
            self::KELAS_12 => 'Kelas 12',
        };
    }
}
