<?php
//error_reporting(E_ALL ^ E_DEPRECATED);
//ini_set("display_errors", 0);
$abspath = str_replace(['\\', '/'], '\\', dirname(__FILE__));
$stringtoRemove = ['\wp-content','\plugins','\canto','\includes','\lib'];
foreach ($stringtoRemove as $str) {
    $abspath = str_replace($str, '', $abspath);
}
$abspath = str_replace('\\', '/', $abspath);

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
    // Data Must be Sanitized, Escaped, and Validated
    // $subdomain = isset($_REQUEST['subdomain']) ? sanitize_text_field($_REQUEST['subdomain']) : '';
    $app_api = isset($_REQUEST['app_api']) ? sanitize_text_field($_REQUEST['app_api']) : '';
    $ablumid = isset($_REQUEST['ablumid']) ? sanitize_text_field($_REQUEST['ablumid']) : '';
    $token = isset($_REQUEST['token']) ? sanitize_text_field($_REQUEST['token']) : '';


    if (isset($subdomain) && !empty($subdomain) && isset($app_api) && !empty($app_api)) {
        if (isset($ablumid) && !empty($ablumid)) {
            $url = 'https://' . $subdomain . '.' . $app_api . '/api/v1/tree/' . $ablumid . '?sortBy=name&sortDirection=ascending';
        } else {
            $url = 'https://' . $subdomain . '.' . $app_api . '/api/v1/tree?sortBy=name&sortDirection=ascending&layer=1';
        }

        $header = array('Authorization: Bearer ' . $token);

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
                'timeout' => 120,
            )
        );
        $body = wp_remote_retrieve_body($response);
        echo wp_json_encode($body);

    }

} else {
    // "?" is not present in the payload, handle the error or reject the request
    echo 'Error: "?" is mandatory in the payload.';
}

?>