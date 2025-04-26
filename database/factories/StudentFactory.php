<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
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
            'nisn' => fake()->unique()->numerify('##########'),
            'nis' => fake()->unique()->numerify('##########'),
            'photo' => $faker->image(storage_path('app/public/tmp'), 640, 480, false),
        ];
    }
}
