<?php
  function set_acf_rgba_color_picker_palette() {
    $palette = array(
      '#17b1e5',
      '#f85b42',
      '#565656'
    );

    return $palette;
  }
  add_filter('acf/rgba_color_picker/palette', 'set_acf_rgba_color_picker_palette');
