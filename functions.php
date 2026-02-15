<?php
function mon_theme_assets() {
    
    wp_enqueue_style('main-style', get_stylesheet_uri());
    
    
    wp_enqueue_script('main-js', get_template_directory_uri() . '/js/main.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'mon_theme_assets');

add_theme_support('post-thumbnails');