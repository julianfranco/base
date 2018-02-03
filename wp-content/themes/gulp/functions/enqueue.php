<?php
  function enqueue_custom_scripts() {
    // Javascripts
    wp_enqueue_script( 'popper'      ,'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', array( 'jquery' ), '', true );
    wp_enqueue_script( 'bootstrapJS' ,'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js', array( 'jquery' ), '', true );
    wp_enqueue_script( 'fontAwesome' ,'https://use.fontawesome.com/c09d8ee749.js', array( 'jquery' ), '', true );
    wp_enqueue_script( 'sliderJS'    ,get_stylesheet_directory_uri().'/js/slider/responsiveslides.min.js', array( 'jquery' ), '', true );
    wp_enqueue_script( 'inview'      ,get_stylesheet_directory_uri().'/js/jquery.inview.min.js', array( 'jquery' ), '', true );
    wp_enqueue_script( 'YTAPI'      ,'https://www.youtube.com/iframe_api', array( 'jquery' ), '', true );

    wp_enqueue_script( 'app'         ,get_stylesheet_directory_uri() . '/js/app.js', array( 'jquery' ), '', true );

    // Stylesheets
    wp_enqueue_style( 'sliderCss'    , get_stylesheet_directory_uri().'/js/slider/responsiveslides.css' );
    wp_enqueue_style( 'screen'       , get_stylesheet_directory_uri().'/stylesheets/styles.css' );
  }
  add_action( 'wp_enqueue_scripts', 'enqueue_custom_scripts', 101 );




  function my_custom_styles(){
    echo '<style type="text/css" media="screen">';
    echo get_field('css', 'option');
    echo '</style>';
  }
  add_action('wp_head', 'my_custom_styles', 101);



  add_editor_style( 'stylesheets/editor-styles.css' );



  function grid_admin_css($hook) {
    if($hook != 'post-new.php' && $hook != 'post.php' && $hook != 'toplevel_page_options-generales' ) {
      return;
    }

    wp_enqueue_script( 'fontAwesome' ,'https://use.fontawesome.com/c09d8ee749.js', array( 'jquery' ), '', true );
    wp_enqueue_script( 'grid-admin-script', get_template_directory_uri() . '/js/grid-admin-script.js' );

    wp_enqueue_style( 'facss', get_template_directory_uri() . '/stylesheets/fontawesome-all.min.css' );
    wp_enqueue_style( 'grid-admin-style', get_template_directory_uri() . '/stylesheets/grid-admin-style.css' );
  }
  add_action( 'admin_enqueue_scripts', 'grid_admin_css' );



  function option_page_admin_css($hook) {
    if($hook != 'toplevel_page_options-generales' ) {
      return;
    }

    wp_enqueue_script( 'option-page-admin-script', get_template_directory_uri() . '/js/option-page.js' );
    wp_enqueue_style( 'option-page-admin-style', get_template_directory_uri() . '/stylesheets/option-page.css' );
  }
  add_action( 'admin_enqueue_scripts', 'option_page_admin_css' );



  if (in_array($_SERVER['REMOTE_ADDR'], array('127.0.0.1', '::1'))) {
    wp_register_script('livereload', home_url().':35729/livereload.js?snipver=1', null, false, true);
    wp_enqueue_script('livereload');
  }
