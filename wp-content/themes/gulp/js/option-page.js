jQuery(document).ready(function($){
  /********************************************************/
  /********************************************************/
  // TYPOS //
  /********************************************************/
  /********************************************************/

  // field_5a61e1256967b: Titre de niveau 1
  // field_5a61e16732c86: Titre de niveau 2
  // field_5a64e5de3eefe: Titre de niveau 3
  // field_5a64e8902644f: Paragraphes
  var $titleContainer = $('div[data-name="typos"] .acf-accordion');

  $titleContainer.each(function(){
    var $this               = $(this);
    var $title              = $('.acf-accordion-title label, .acf-accordion-title p', $this);
    var $fontSelector       = $('.acfgfs-font-selector', $this);
    var $colorSelector      = $('.acf-color-picker ', $this);
    var $weightSelector     = $('div[data-name^="graisse"]', $this);
    var $sizeSelector       = $('div[data-name^="taille"]', $this);
    var $transformSelector  = $('div[data-name^="transformation"]', $this);
    var $styleSelector      = $('div[data-name^="style"] > div', $this);
    var new_font            = $('option:selected', $fontSelector).val()
    var variants            = $('.acfgfs-font-variants .acfgfs-list', $this);

    // Apply selected font onLoad
    $title.css({'font-family': new_font});

    // Apply selected color onLoad
    var color = $('input[type="text"]', $colorSelector).val();
    $title.css({'color': color });
    // Apply selected font onChange
    $('input[type="hidden"]', $colorSelector).on('change', function(){
      var color = $(this).val();
      $title.css({'color': color });
    });

    // Apply selected size onLoad
    var size = $('input[type="number"]', $sizeSelector).val();
    $title.css({'font-size': size+'px' });
    // Apply selected size onChange
    $('input[type="number"],input[type="range"]', $sizeSelector).on('change', function(){
      var size = $(this).val();
      $title.css({'font-size': size+'px' });
    });

    // Load avalaible weights an styles for selected font
    var availableWeights = [];
    var italic = false;
    var $weightCheckboxes = $('.acfgfs-list input[type="checkbox"]:checked', $this);

    $weightCheckboxes.each(function(){
      var val = $(this).val();
      if( val == 'regular' ){
        availableWeights.push('400');
      }else if(val == 'italic'){
        availableWeights.push('400');
        italic = true;
      }else if(val.substring(3, 4) == 'i'){
        availableWeights.push(val.substring(0,3));
        italic = true;
      }else{
        availableWeights.push($(this).val());
      }
    });
    // Load fontStyle if avalaible for font
    if( $weightCheckboxes.length > 0){
      if( italic === true ){
        $styleSelector.show();
      }else{
        $styleSelector.hide();
      }
    }
    var style = $styleSelector.val();
    if( style == "italic"){
      $title.css({'font-style': 'italic' });
    }
    // Apply selected style onChange
    $('select', $styleSelector).on('change', function(){
      var style = $(this).val();
      $title.css({'font-style': style });
    });

    // Apply selected transform onLoad
    var transform = $('select', $transformSelector).val();
    $title.css({'text-transform': transform });
    // Apply selected transformation onChange
    $('select', $transformSelector).on('change', function(){
      var transform = $(this).val();
      $title.css({'text-transform': transform });
    });

    if( $weightCheckboxes.length > 0){
      $('option', $weightSelector).each(function(){
        var val = $(this).val();
        if( availableWeights.indexOf(val) < 0 ){
          $(this).hide();
        }else{
          $(this).show();
        }
      });
    }

    // Apply selected weight onLoad
    var weight = $('option:selected', $weightSelector).val();
    if( weight == 'regular' ) weight = '400';
    $title.css({'font-weight': weight });
    // Apply selected weight onChange
    $('select', $weightSelector).on('change', function(){
      var weight = $('option:selected', $(this)).val();
      if( weight == 'regular' ) weight = '400';
      $title.css({'font-weight': weight });
    });




    /********************************************************/
    /********************************************************/
    // HEADER //
    /********************************************************/
    /********************************************************/
    var $headerContainer      = $('div[data-name="header"]');
    var $previewHeader        = $('div[data-name="preview_header"]', $headerContainer);
    var $logoSelector         = $('div[data-name="logo"]', $headerContainer);
    var $logoSizeSelector     = $('div[data-name="logo_size"]', $headerContainer);
    var $logoPositionSelector = $('div[data-name="logo_position"]', $headerContainer);
    var $bgHeaderSelector     = $('div[data-name="bg_header"]', $headerContainer);
    var $menuAlignement       = $('div[data-name="menu_alignement"]', $headerContainer);

    var $logo = $('.image-wrap img', $logoSelector);
    var logoWidth = $('input[type="number"]', $logoSizeSelector).val();

    $logo.css({'max-width': logoWidth+'px', 'height': 'auto'}).show();

    $('input[type="number"], input[type="range"]', $logoSizeSelector).on('change', function(){
      var logoWidth = $(this).val();
      $logo.css({'max-width': logoWidth+'px'});
    });




  });






});
