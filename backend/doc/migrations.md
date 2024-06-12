## Create new database table

php artisan make:migration create_shops_table --create=shops
php artisan migrate

## create model for this

php artisan make:model Shop

## Create controller for this model

php artisan make:controller ShopController --resource

## database

php artisan make:migration create_new_table
php artisan migrate --path=/database/migrations/
