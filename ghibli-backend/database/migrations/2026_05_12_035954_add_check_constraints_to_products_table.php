<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            DB::statement('ALTER TABLE products ADD CONSTRAINT check_price_positive CHECK (price >= 0)');
            DB::statement('ALTER TABLE products ADD CONSTRAINT check_stock_positive CHECK (stock >= 0)');
            DB::statement('ALTER TABLE products ADD CONSTRAINT check_discount_positive CHECK (discount >= 0)');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            DB::statement('ALTER TABLE products DROP CONSTRAINT check_price_positive');
            DB::statement('ALTER TABLE products DROP CONSTRAINT check_stock_positive');
            DB::statement('ALTER TABLE products DROP CONSTRAINT check_discount_positive');
        });
    }
};
