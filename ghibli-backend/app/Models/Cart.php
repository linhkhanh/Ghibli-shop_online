<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cart extends Model
{
    protected $fillable = ['user_id', 'session_id'];

    public function items(): HasMany
    {
        return $this->hasMany(CartItem::class);
    }

    public static function mergeGuestCart($userId, $guestId)
    {
        // 1. Find the guest cart and the user's existing cart
        $guestCart = self::where('session_id', $guestId)->first();
        $userCart = self::firstOrCreate(['user_id' => $userId]);

        if ($guestCart) {
            foreach ($guestCart->items as $guestItem) {
                // 2. Check if the user already has this product in their permanent cart
                $existingItem = $userCart->items()
                    ->where('product_id', $guestItem->product_id)
                    ->first();

                if ($existingItem) {
                    // If exists, just add the quantities together
                    $existingItem->increment('quantity', $guestItem->quantity);
                    $guestItem->delete();
                } else {
                    // If not, reassign the item to the user's cart
                    $guestItem->update(['cart_id' => $userCart->id]);
                }
            }

            // 3. Delete the now-empty guest cart
            $guestCart->delete();
        }
    }   
}
