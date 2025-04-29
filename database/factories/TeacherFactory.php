<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teacher>
 */
class TeacherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = \Faker\Factory::create();
        $faker->addProvider(new \Smknstd\FakerPicsumImages\FakerPicsumImagesProvider($faker));

        return [
            'name' => fake()->name(),
            'nip' => fake()->unique()->numerify('NIP#####'),
            'nuptk' => fake()->unique()->numerify('NUPTK#####'),
            'photo' => $faker->image(storage_path('app/public/tmp'), 640, 480, false),
        ];
    }
}
