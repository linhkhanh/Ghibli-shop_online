<?php

namespace Database\Seeders;
use App\Models\Movie;
use Illuminate\Database\Seeder;

class MovieSeeder extends Seeder
{
    public function run(): void
    {
        Movie::create([
            'title' => 'My Neighbor Totoro',
            'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776394329/my-neighbor-totoro-picture-book-new-edition-9781421561226_hr_ajkka3.jpg',
        ]);

        Movie::create([
            'title' => 'Spirited Away',
            'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776395561/Spirit_away_ik2rd0.jpg',
        ]);

        Movie::create([
            'title' => 'Howls Moving Castle',
            'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776394532/Howl_27s_Moving_Castle_caulqy.webp',
        ]);

        Movie::create([
            'title' => 'Kiki Delivery Service',
            'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776394261/KiKi_movie_jaq1ys.jpg'
        ]);

        Movie::create([
            'title' => 'Ponyo',
            'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776394411/1000x1480_Ponyo_FE_Ticketing.jpg_nistjw.avif'
        ]);

        Movie::create([
            'title' => 'Castle in the Sky',
            'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776394521/castle-in-the-sky-poster_02_tbzsqt.webp'
        ]);
    }
}
