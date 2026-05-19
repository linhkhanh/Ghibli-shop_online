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
        Schema::table('users', function (Blueprint $table) {
            DB::statement("ALTER TABLE users ADD CONSTRAINT chk_users_phone_length CHECK (LENGTH(phone) >= 6)");
            DB::statement("ALTER TABLE users ADD CONSTRAINT chk_users_role_value CHECK (role IN ('user', 'admin'))");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            DB::statement("ALTER TABLE users DROP CONSTRAINT chk_users_phone_length");
            DB::statement("ALTER TABLE users DROP CONSTRAINT chk_users_role_value");
        });
    }
};
