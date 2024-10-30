<?php

$abspath = str_replace(['\\', '/'], '\\', dirname(__FILE__));
$stringtoRemove = ['\wp-content','\plugins','\canto','\includes','\lib'];
foreach ($stringtoRemove as $str) {
    $abspath = str_replace($str, '', $abspath);
}
$abspath = str_replace('\\', '/', $abspath);

// Check if "?" is present in the payload
if (strpos($_SERVER['REQUEST_URI'], '?') !== false) {
    
    if (isset($abspath) && !empty($abspath)) {
        $wp_content_dir = $abspath . '/wp-admin/admin.php';
        $wp_content_dir_load = $abspath . '/wp-load.php';
        if (file_exists($wp_content_dir)) {
            require_once $wp_content_dir;
            require_once $wp_content_dir_load;
        } else {
            echo 'Error: Invalid file path.';
        }
    }
    $subdomain = get_option('fbc_flight_domain');
    // $subdomain = isset($_REQUEST['subdomain']) ? sanitize_text_field($_REQUEST['subdomain']) : '';
    $app_api = isset($_REQUEST['app_api']) ? sanitize_text_field($_REQUEST['app_api']) : '';
    $scheme = isset($_REQUEST['scheme']) ? sanitize_text_field($_REQUEST['scheme']) : '';
    $id = isset($_REQUEST['id']) ? sanitize_text_field($_REQUEST['id']) : '';
    $token = isset($_REQUEST['token']) ? sanitize_text_field($_REQUEST['token']) : '';

    if (isset($subdomain) && isset($app_api) && isset($scheme) && isset($id) && $subdomain && $app_api && $scheme && $id) {
        $url = 'https://' . $subdomain . '.' . $app_api . '/api/v1/' . $scheme . '/' . $id;
        $args_for_get = array(
            'Authorization' => 'Bearer ' . $token,
            'user-agent' => 'Wordpress Plugin',
            'Content-Type' => 'application/json;charset=utf-8'
        );

        $response = wp_safe_remote_get(
            $url,
            array(
                'method' => 'GET',
                'headers' => $args_for_get,
                'sslverify' => true, // Verify SSL certificate
            )
        );
        if (!is_wp_error($response)) {
            // Successful request, retrieve response body
            $body = wp_remote_retrieve_body($response);
            echo wp_json_encode($body);
        } else {
            // Handle error
            echo 'Error: Unable to fetch data from the specified domain.';
        }

    }
} else {
    // "?" is not present in the payload, handle the error or reject the request
    echo 'Error: "?" is mandatory in the payload.';
}
?>