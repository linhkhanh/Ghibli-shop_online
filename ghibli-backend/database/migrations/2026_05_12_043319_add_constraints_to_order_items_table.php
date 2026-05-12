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
        Schema::table('order_items', function (Blueprint $table) {
            DB::statement('ALTER TABLE order_items ADD CONSTRAINT check_order_item_quantity_min CHECK (quantity >= 1)');

        // Price must be 0 or more (to allow for free items/promotions)
            DB::statement('ALTER TABLE order_items ADD CONSTRAINT check_order_item_price_positive CHECK (price >= 0)');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('order_items', function (Blueprint $table) {
            DB::statement('ALTER TABLE order_items DROP CONSTRAINT check_order_item_quantity_min');
            DB::statement('ALTER TABLE order_items DROP CONSTRAINT check_order_item_price_positive');
        });
    }
};
