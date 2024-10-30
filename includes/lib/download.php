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
    $request_subdomain = get_option('fbc_flight_domain');
    // $request_subdomain = isset($_REQUEST['subdomain']) ? sanitize_text_field($_REQUEST['subdomain']) : '';
    $request_app_api = isset($_REQUEST['app_api']) ? sanitize_text_field($_REQUEST['app_api']) : '';
    $request_id = isset($_REQUEST['id']) ? sanitize_text_field($_REQUEST['id']) : '';
    $request_quality = isset($_REQUEST['quality']) ? sanitize_text_field($_REQUEST['quality']) : '';
    $request_token = isset($_REQUEST['token']) ? sanitize_text_field($_REQUEST['token']) : '';


    if (isset($request_subdomain) && isset($request_app_api) && isset($request_id) && $request_subdomain && $request_app_api && $request_id) {
        $quality = $request_quality ?? 'preview';
        $url = 'https://' . $request_subdomain . '.' . $request_app_api . '/api_binary/v1/advance/image/' . $request_id . '/download/directuri?type=jpg&dpi=72';
        //    $url = 'https://' . $request_subdomain . '.' . $request_app_api . '/api_binary/v1/image/' . $request_id . '/preview';
        $args_for_get = array(
            'Authorization' => 'Bearer ' . $request_token,
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