<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        'title'       => $this->faker->sentence(3),
        'description' => $this->faker->paragraph(),
        'movie_id'    => 6, // Hardcoding to 2 as per your request
        'price'       => $this->faker->randomFloat(2, 10, 200),
        'stock'       => $this->faker->numberBetween(1, 50),
        'discount'    => $this->faker->randomElement([0, 5, 10, 15]),
        ];
    }
}
