<?php
  // Debug
  function pp($array){
    echo '<pre>'.print_r($array, true).'</pre>';
  }




  // Responsive Videos
  function alx_embed_html( $html ) {
    return '<div class="video-container">' . $html . '</div>';
  }
  add_filter( 'embed_oembed_html', 'alx_embed_html', 10, 3 );
  add_filter( 'video_embed_html', 'alx_embed_html' ); // Jetpack




  // YouTube video ID
  function youtube_video_id($url){
    $parts = parse_url($url);
    parse_str($parts['query'], $query);
    $videoID = $query['v'];
    return $videoID;
  }



  // YouTube video ID
  function facebook_video_id($url){
    $parts = explode('/',$url);
    $videoID = $parts[count($parts)-2];
    return $videoID;
  }



  // External Link
  function check_http($url){
    if( substr( $url, 0, 4 ) === "http" ){
      return;
    }
    $url = 'http://'.$url;
    return $url;
  }



  function remove_menus(){

    //remove_menu_page( 'index.php' );                  //Dashboard
    //remove_menu_page( 'jetpack' );                    //Jetpack*
    //remove_menu_page( 'edit.php' );                   //Posts
    //remove_menu_page( 'upload.php' );                 //Media
    //remove_menu_page( 'edit.php?post_type=page' );    //Pages
    remove_menu_page( 'edit-comments.php' );          //Comments
    //remove_menu_page( 'themes.php' );                 //Appearance
    //remove_menu_page( 'plugins.php' );                //Plugins
    //remove_menu_page( 'users.php' );                  //Users
    //remove_menu_page( 'tools.php' );                  //Tools
    //remove_menu_page( 'options-general.php' );        //Settings

  }
  add_action( 'admin_menu', 'remove_menus' );



  function wpse_custom_menu_order( $menu_ord ) {
      if ( !$menu_ord ) return true;

      return array(
          'index.php', // Dashboard
          'separator1', // First separator
          'edit.php', // Posts
          'edit.php?post_type=page', // Pages
          'edit.php?post_type=slider',
          'separator2', // Second separator
          'upload.php', // Media
          'separator3', // Second separator
          'themes.php', // Appearance
          'plugins.php', // Plugins
          'users.php', // Users
          'tools.php', // Tools
          'options-general.php', // Settings
          'separator-last', // Last separator
      );
  }
  add_filter( 'custom_menu_order', 'wpse_custom_menu_order', 10, 1 );
  add_filter( 'menu_order', 'wpse_custom_menu_order', 10, 1 );
