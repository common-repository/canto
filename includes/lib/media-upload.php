<?php
/**
 * @package Netword_Shared_Media
 * @version 0.10.1
 */
// define('WP_ADMIN', FALSE);
// define('WP_LOAD_IMPORTERS', FALSE);

if (!current_user_can('upload_files')) {
    wp_die(esc_html__('You do not have permission to upload files.'));
}

// $blog_id is global var in WP

$get_blog_id = sanitize_text_field($_GET["blog_id"]);
$post_send = sanitize_text_field($_POST['send']);
$post_chromeless = sanitize_text_field($_POST['chromeless']);

if (isset($post_send) && $post_send) {
    $nsm_blog_id = (int)$get_blog_id;
    reset($post_send);
    $nsm_send_id = (int)key($post_send);
}

/* copied from wp-admin/inculdes/ajax-actions.php wp_ajax_send_attachment_to_editor() */
if (isset($nsm_blog_id) && isset($nsm_send_id) && $nsm_blog_id && $nsm_send_id) {
    //switch_to_blog( $nsm_blog_id );
    if (!current_user_can('upload_files')) {
        $current_blog_name = get_bloginfo('name');
        restore_current_blog();
        wp_die(esc_html__('You do not have permission to upload files to site: ') . esc_html($current_blog_name));
    }

    global $post;

    $attachment = sanitize_text_field(wp_unslash($_POST['attachments'][$nsm_send_id]));
    $id = $nsm_send_id;

    if (!$post = get_post($id)) {
        wp_send_json_error();
    }

    if ('attachment' != $post->post_type) {
        wp_send_json_error();
    }

    $rel = $url = '';
    $html = $title = $attachment['post_title'] ?? '';
    if (!empty($attachment['url'])) {
        $url = $attachment['url'];
        if (strpos($url, 'attachment_id') || get_attachment_link($id) == $url) {
            $rel = ' rel="attachment wp-att-' . $id . '"';
        }
        $html = '<a href="' . esc_url($url) . '"' . $rel . '>' . $html . '</a>';
    }

    if ('image' === substr($post->post_mime_type, 0, 5)) {
        $align = $attachment['align'] ?? 'none';
        $size = $attachment['image-size'] ?? 'medium';
        $alt = $attachment['image_alt'] ?? '';
        $caption = $attachment['post_excerpt'] ?? '';
        $title = ''; // We no longer insert title tags into <img> tags, as they are redundant.
        $html = get_image_send_to_editor($id, $caption, $title, $align, $url, (bool)$rel, $size, $alt);
    } elseif ('video' === substr($post->post_mime_type, 0, 5) || 'audio' === substr($post->post_mime_type, 0, 5)) {
        global $wp_embed;
        $meta = get_post_meta($id, '_wp_attachment_metadata', true);
        $html = $wp_embed->shortcode($meta, $url);
    }

    /**
* 
 * This filter is documented in wp-admin/includes/media.php 
*/
    $html = apply_filters('media_send_to_editor', $html, $id, $attachment);

    // replace wp-image-<id>, wp-att-<id> and attachment_<id>
    $html = preg_replace(
        array(
            '#(caption id="attachment_)(\d+")#', // mind the quotes!
            '#(wp-image-|wp-att-)(\d+)#'
        ),
        array(
            sprintf('${1}nsm_%s_${2}', esc_attr($nsm_blog_id)),
            sprintf('${1}nsm-%s-${2}', esc_attr($nsm_blog_id)),
        ),
        $html
    );

    if (isset($post_chromeless) && $post_chromeless) {
        // WP3.5+ media browser is identified by the 'chromeless' parameter
        exit(esc_html($html));
    } else {
        return media_send_to_editor($html);
    }
}
