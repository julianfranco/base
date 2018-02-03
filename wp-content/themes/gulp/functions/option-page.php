<?php
  if( function_exists('acf_add_options_page') ) {
  	// Page principale
  	acf_add_options_page(array(
  		'page_title'    => 'Options',
  		'menu_title'    => 'Options',
  		'menu_slug'     => 'options-generales',
  		'capability'    => 'edit_posts',
  		'redirect'      => true
  	));
  }


  function clear_advert_main_transient() {
    $screen = get_current_screen();

    if ( $screen->id == "toplevel_page_options-generales") {
      $output = array();
      $typos = get_field('typos', 'option');
      $header = get_field('header', 'option');
      //pp($header);
      //die();
      $output['h1'] = array(
        'font-family'     => '"'.$typos['typos']['heading_1']['font'].'", sans-serif',
        'font-size'       => $typos['typos']['taille_1'].'px',
        'font-weight'     => $typos['typos']['graisse_1'],
        'color'           => $typos['typos']['couleur_1'],
        'font-style'      => $typos['typos']['style_1'],
        'text-transform'  => $typos['typos']['transformation_1']
      );

      $output['h2'] = array(
        'font-family'     => '"'.$typos['typos']['heading_2']['font'].'", sans-serif',
        'font-size'       => $typos['typos']['taille_2'].'px',
        'font-weight'     => $typos['typos']['graisse_2'],
        'color'           => $typos['typos']['couleur_2'],
        'font-style'      => $typos['typos']['style_2'],
        'text-transform'  => $typos['typos']['transformation_2']
      );

      $output['h3'] = array(
        'font-family'     => '"'.$typos['typos']['heading_3']['font'].'", sans-serif',
        'font-size'       => $typos['typos']['taille_3'].'px',
        'font-weight'     => $typos['typos']['graisse_3'],
        'color'           => $typos['typos']['couleur_3'],
        'font-style'      => $typos['typos']['style_3'],
        'text-transform'  => $typos['typos']['transformation_3']
      );

      $output['p, ul'] = array(
        'font-family' => '"'.$typos['typos']['heading_p']['font'].'", sans-serif',
        'font-size'   => $typos['typos']['taille_p'].'px',
        'font-weight' => $typos['typos']['graisse_p'],
        'color'       => $typos['typos']['couleur_p'],
      );

      $output['header, header .navbar-nav .dropdown-menu'] = array(
        'background-color' => $header['header']['bg_header'],
      );

      $output['header .navbar-brand'] = array(
        'max-width' => $header['header']['logo_size'].'px',
        'min-width' => $header['header']['logo_size'].'px'
      );

      $output['.navbar-nav li a'] = array(
        'font-family'     => '"'.$typos['typos']['heading_menu']['font'].'", sans-serif',
        'font-size'       => $typos['typos']['taille_menu'].'px',
        'font-weight'     => $typos['typos']['graisse_menu'],
        'color'           => $typos['typos']['couleur_menu'],
        'font-style'      => $typos['typos']['style_menu'],
        'text-transform'  => $typos['typos']['transformation_menu']
      );

      $cssOutput = '';
      foreach( $output as $tag => $values ):
        $cssOutput .= $tag.'{';
          foreach( $values as $property => $value ):
            if( !empty($value) ) $cssOutput .= $property.': '.$value.';';
          endforeach;
        $cssOutput .= '}';
      endforeach;


      update_field('css', $cssOutput, 'option');
    }
  }
  add_action('acf/save_post', 'clear_advert_main_transient', 20);
