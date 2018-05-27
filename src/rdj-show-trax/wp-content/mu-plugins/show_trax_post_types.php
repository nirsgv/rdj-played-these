<?php

function show_trax_post_types(){
	register_post_type('Tracks',array(
		'public' => true,
		'supports' => array('title','editor','excerpt','custom-fields'),
		'rewrite' => array('slug' => 'tracks'),
		'menu_icon' => 'dashicons-format-status',
		'labels' => array(
			'name' => 'Tracks',
			'add_new_item' => 'Add new Track',
	        'edit_item' => 'Edit Track',
	        'all_item' => 'All Tracks',
	        'singular_name' => 'Track',
		)
	));
}
add_action('init','show_trax_post_types');
?>