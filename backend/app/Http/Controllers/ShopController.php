<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ShopController extends Controller
{
    public function index()
    {
        $shops = Shop::all();
        return response()->json($shops);
    }

    public function store(Request $request)
    {
        // `name`, `email`, `address`, `town`, `business`, `business_status`,
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:shops',
                'address' => 'required|string',
                'phone' => 'required|string|unique:shops',
                'town' => 'required|string|max:255',
                'business' => 'required|in:wholesale,retail)',
                'business_status' => 'required|in:active,close)',
            ]);

            $shopId = Shop::generateShopId();

            $shop = Shop::create([
                'name' => $request->name,
                'shop_id' => $shopId,
                'email' => $request->email,
                'address' => $request->address,
                'phone' => $request->phone,
                'town' => $request->town,
                'business' => $request->business,
                'business_status' => $request->business_status,
            ]);
            return response()->json($shop, 201);
        } catch (ValidationException $e) {
            return response()->json([
                'status' => false,
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Shop added Failed!',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function show($shop_id)
    {
        $shop = Shop::where('shop_id', $shop_id)->first();

        if (!$shop) {
            return response()->json(['error' => 'Shop not found'], 404);
        }

        return response()->json($shop, 200);
    }

    public function update(Request $request, $shop_id)
    {
        $request->validate([
            'name' => 'string|max:255',
            'email' => 'email|unique:shop,email,' . $shop_id,
            'address' => 'string|max:255',
            'phone' => 'string|unique:shop,phone,' . $shop_id,
            'town' => 'string|max:255',
            'business' => 'in:wholesale,retail',
            'business_status' => 'in:active,close'
        ]);

        $shop = Shop::findOrFail($shop_id);

        $updateData = $request->only([
            'name', 'email', 'address', 'phone', 'town', 'business', 'business_status'
        ]);

        $shop->update($updateData);

        return response()->json($shop, 200);
    }
    public function delete($shop_id)
    {
        try {
            $shop = Shop::findOrFail($shop_id);
            $shop->delete();

            return response()->json([
                'status' => true,
                'message' => 'Successfully deleted shop!'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to delete shop.'
            ], 500);
        }
    }
}
