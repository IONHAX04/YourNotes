<?php
require 'vendor/autoload.php';

Predis\Autoloader::register();

$client = new Predis\Client([
    'scheme' => 'tcp',
    'host'   => '127.0.0.1',
    'port'   => 6379,
], [
    'exceptions' => true,
]);

try {
    $response = $client->ping();
    echo "Redis is connected: $response";
} catch (Exception $e) {
    echo "Could not connect to Redis: " . $e->getMessage();
}
