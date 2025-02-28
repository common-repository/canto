<?php
// define('WP_ADMIN', FALSE);
// define('WP_LOAD_IMPORTERS', FALSE);

if (!function_exists('et_core_portability_register')) {
    function et_core_portability_register($context, $args)
    {
        return true;
    }
}

$abspath = str_replace(['\\', '/'], '\\', dirname(__FILE__));
$stringtoRemove = ['\wp-content','\plugins','\canto','\includes','\lib'];
foreach ($stringtoRemove as $str) {
    $abspath = str_replace($str, '', $abspath);
}
$abspath = str_replace('\\', '/', $abspath);

if (!function_exists('apply_filters')) {
    include_once $abspath . '/wp-admin/admin.php';
}
if (!function_exists('wp_handle_upload')) {
    include_once $abspath . '/wp-admin/includes/image.php';
}

$sizes = apply_filters(
    'image_size_names_choose', array(
    'thumbnail' => __('Thumbnail'),
    'medium' => __('Medium'),
    'large' => __('Large'),
    'full' => __('Full Size'),
    )
);

$thesizes = get_image_sizes();

if (!in_array('full', $thesizes)) {
    $thesizes['full'] = array();
}

foreach ($thesizes as $k => $v) {
    $dimensions = (isset($v['width'])) ? ' - ' . $v['width'] . ' x ' . $v['height'] : '';
    $thesizes[$k]['name'] = $sizes[$k] . $dimensions;
}
//$thesizes = apply_filters( 'intermediate_image_sizes_advanced', $thesizes, $metadata );

$html = '<select data-user-setting="imgsize" data-setting="size" name="size" className="size">';

foreach ($thesizes as $value => $name) {
    if ($value != "medium_large") {
        $html .= '<option value="' . esc_attr($value) . '">';
        $html .= esc_html($name['name']) . '</option>';
    }
}

$allowed_html = array(
    'select' => array(),
    'option' => array(),
    'br' => array(),
);

$html .= '</select>';
echo wp_kses($html, $allowed_html);

?>