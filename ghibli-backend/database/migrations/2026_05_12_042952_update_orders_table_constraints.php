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
        Schema::table('orders', function (Blueprint $table) {
            DB::statement('ALTER TABLE orders ADD CONSTRAINT check_total_amount_positive CHECK (total_amount >= 0)');
            DB::statement('ALTER TABLE orders ADD CONSTRAINT check_delivery_fee_positive CHECK (delivery_fee >= 0)');

            // payment_status must be "paid" or "unpaid"
            DB::statement("ALTER TABLE orders ADD CONSTRAINT check_payment_status_values CHECK (payment_status IN ('paid', 'unpaid'))");

            // status must be one of the specific categories
            DB::statement("ALTER TABLE orders ADD CONSTRAINT check_order_status_values CHECK (status IN ('pending', 'processing', 'shipped', 'delivered'))");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            DB::statement('ALTER TABLE orders DROP CONSTRAINT check_total_amount_positive');
            DB::statement('ALTER TABLE orders DROP CONSTRAINT check_delivery_fee_positive');
            DB::statement('ALTER TABLE orders DROP CONSTRAINT check_payment_status_values');
            DB::statement('ALTER TABLE orders DROP CONSTRAINT check_order_status_values');
        });
    }
};
