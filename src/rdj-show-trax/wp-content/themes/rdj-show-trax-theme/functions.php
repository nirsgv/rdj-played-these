
<?php

	function show_trax_files(){
		wp_enqueue_script('main-show-trax-js', get_theme_file_uri('/js/scripts-bundled.js'), NULL, microtime(), true);
		wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
	    wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
		wp_enqueue_style('show_trax_main_style', get_stylesheet_uri());
	}

add_action('wp_enqueue_scripts','show_trax_files');


function show_trax_queries($query) {
  if (!is_admin() AND is_post_type_archive('Track') ) {
  	$query->set('posts_per_page','1');
    /*$today = date('Ymd');
    $query->set('meta_key', 'event_date');
    $query->set('orderby', 'meta_value_num');
    $query->set('order', 'ASC');
    $query->set('meta_query', array(
              array(
                'key' => 'event_date',
                'compare' => '>=',
                'value' => $today,
                'type' => 'numeric'
              )
            ));*/
  }
}

add_action('pre_get_posts', 'show_trax_queries');

?>