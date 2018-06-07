
<?php 
 
header('Access-Control-Allow-Origin: *');  

// if the request was made with request method post we print the data as json
if($_SERVER['REQUEST_METHOD'] === 'POST' || isset($_GET['post'])) {
	$traxObj = new WP_Query(array(
		'posts_per_page' => -1, // negative one translates to 'all-posts'
		'post_type' => 'tracks',
		'orderby' => 'title',
		'order' => 'ASC' // opposite of default 'DESC'
	));

	// maping the tracks data to an array (we are calling the function getAllFields below)
	$myObjArray = array_map("getAllFields", $traxObj->posts);

	// pringting the array as json and die
	print_r(json_encode($myObjArray));
	die;
}

// we print the react app index html to the user for standart get request and die;
$theme_path = get_template_directory(); // gets us the path of the theme folder
readfile($theme_path."/build/index.html");
die;

// this function gets a track post and returns the track data object
function getAllFields($track) {
	$track_id = $track->ID;

	$links = new stdClass();
    $links->link_youtube = get_field('link_youtube',$track_id);
    $links->link_apple_music = get_field('link_apple_music',$track_id);
    $links->link_spotify = get_field('link_spotify',$track_id);
    $links->link_deezer = get_field('link_deezer',$track_id);

    $myObjItem = new stdClass();
    $myObjItem->links = $links;
    $myObjItem->album_title = get_field('album_title',$track_id);
    $myObjItem->track_title = get_field('track_title',$track_id);
    $myObjItem->record_label = get_field('record_label',$track_id);
    $myObjItem->artist_name = get_field('artist_name',$track_id);
    $myObjItem->album_title = get_field('album_title',$track_id);
    $myObjItem->release_year = get_field('release_year',$track_id);
    $myObjItem->genres = get_field('genres',$track_id);
    $myObjItem->show = get_field('show',$track_id);
    $myObjItem->artwork = get_field('artwork',$track_id);

	return $myObjItem;
}










/*

get_header();

	while(have_posts()){
		the_post(); ?>
		<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
		<?php the_content(); ?>
		<?php
	}

echo $gmfkmrvlkmv= get_field('artist_name');


while($traxObj->have_posts()){
	$traxObj->the_post(); 
    $myObjItem = new stdClass();
    $album_title = the_field('album_title');
    $myObjItem->track_title = get_field('track_title');
    $myObjItem->artist_name = get_field('artist_name');
    $myObjItem->album_title = get_field('album_title');
    $myObjItem->release_year = get_field('release_year');
    $links = new stdClass();
    $links->link_youtube = get_field('link_youtube');
    $links->link_apple_music = get_field('link_apple_music');
    $links->link_spotify = get_field('link_spotify');
    $links->link_deezer = get_field('link_deezer');
    $myObjItem->links = $links ;
    $myObjItem->artwork = get_field('artwork');
    array_push($myObjArray,$myObjItem);
	?>
	<div class='success'><h1><?php the_field('artist_name') ?></h1></div><?php
}

	echo json_encode($myObjArray);
		echo '<h1>Yo!</h1>';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	echo "<h1>kjcbjwlncwklnclkncwhalabalula 12</h1>";

}


	echo bloginfo('name');
	echo bloginfo('description');
	get_footer();
?>
*/
