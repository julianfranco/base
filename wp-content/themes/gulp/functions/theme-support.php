<?php
  register_nav_menus( array(
    'primary' => 'Primary Menu',
  ) );


  add_theme_support( 'html5', array(
    'search-form',
    'comment-form',
    'comment-list',
    'gallery',
    'caption',
  ) );

  add_editor_style();


  add_theme_support( 'post-thumbnails' );
