<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MoviesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        DB::table('movies')->delete();
        
        DB::table('movies')->insert(array (
            0 => 
            array (
                'id' => 1,
                'title' => 'My Neighbor Totoro',
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776394329/my-neighbor-totoro-picture-book-new-edition-9781421561226_hr_ajkka3.jpg',
                'created_at' => '2026-04-17 03:14:57',
                'updated_at' => '2026-04-17 03:14:57',
            ),
            1 => 
            array (
                'id' => 2,
                'title' => 'Spirited Away',
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776395561/Spirit_away_ik2rd0.jpg',
                'created_at' => '2026-04-17 03:14:57',
                'updated_at' => '2026-04-17 03:14:57',
            ),
            2 => 
            array (
                'id' => 3,
                'title' => 'Howl\'s Moving Castle',
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776394532/Howl_27s_Moving_Castle_caulqy.webp',
                'created_at' => '2026-04-17 03:14:57',
                'updated_at' => '2026-04-17 03:14:57',
            ),
            3 => 
            array (
                'id' => 4,
                'title' => 'KiKi\'s Delivery Service',
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776394261/KiKi_movie_jaq1ys.jpg',
                'created_at' => '2026-04-17 03:14:57',
                'updated_at' => '2026-04-17 03:14:57',
            ),
            4 => 
            array (
                'id' => 5,
                'title' => 'Ponyo',
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776394411/1000x1480_Ponyo_FE_Ticketing.jpg_nistjw.avif',
                'created_at' => '2026-04-17 03:14:57',
                'updated_at' => '2026-04-17 03:14:57',
            ),
            5 => 
            array (
                'id' => 6,
                'title' => 'Castle in the Sky',
                'image' => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776394521/castle-in-the-sky-poster_02_tbzsqt.webp',
                'created_at' => '2026-04-17 03:14:57',
                'updated_at' => '2026-04-17 03:14:57',
            ),
        ));
        
        
    }
}