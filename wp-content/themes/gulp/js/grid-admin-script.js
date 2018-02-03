jQuery(document).ready(function($){

  document.body.className+=' folded';

  $('div[data-name="section"]').show();



  $('div[data-name="grille"] .acf-row').each(function(){
    var $this = $(this);
    var xs = $('div[data-name="xs"] option:selected', $this).val();
    var s = $('div[data-name="s"] option:selected', $this).val();
    var m = $('div[data-name="m"] option:selected', $this).val();
    var l = $('div[data-name="l"] option:selected', $this).val();
    var xl = $('div[data-name="xl"] option:selected', $this).val();
    $this.addClass( xs+' '+s+' '+m+' '+l+' '+xl);
  });
  $('div[data-name="grille"] .acf-repeater > table').addClass('container-fluid');
  $('div[data-name="grille"] .acf-repeater > table tbody').addClass('row');


  $('#post-body').on('change', 'div[data-name="xs"] select', function(){
    var $this = $(this);
    var $row = $(this).closest('.acf-row');
    $row.removeClass('col-3 col-4 col-6 col-12').addClass($(this).val());
  });


  $('#post-body').on('change', 'div[data-name="s"] select', function(){
    var $this = $(this);
    var $row = $(this).closest('.acf-row');
    $row.removeClass('col-sm-3 col-sm-4 col-sm-6 col-sm-12').addClass($(this).val());
  });


  $('#post-body').on('change', 'div[data-name="m"] select', function(){
    var $this = $(this);
    var $row = $(this).closest('.acf-row');
    $row.removeClass('col-md-3 col-md-4 col-md-6 col-md-12').addClass($(this).val());
  });


  $('#post-body').on('change', 'div[data-name="l"] select', function(){
    var $this = $(this);
    var $row = $(this).closest('.acf-row');
    $row.removeClass('col-lg-3 col-lg-4 col-lg-6 col-lg-12').addClass($(this).val());
  });


  $('#post-body').on('change', 'div[data-name="xl"] select', function(){
    var $this = $(this);
    var $row = $(this).closest('.acf-row');
    $row.removeClass('col-xl-3 col-xl-4 col-xl-6 col-xl-12').addClass($(this).val());
  });


  $('div[data-name="bords_arrondis"]').each(function(){
    var $this = $(this);
    var val = $('input[type="number"]', $this).val();
    $this.append('<div id="roundcornersexemple" style="border-radius: '+val+'px"></div>');
  });

  $('#post-body').on('change', 'div[data-name="bords_arrondis"] input[type="number"],div[data-name="bords_arrondis"] input[type="range"]', function(){
    var $this = $(this);
    var val = $this.val();
    var $parent = $this.closest('div[data-name="bords_arrondis"]');
    $('#roundcornersexemple', $parent).remove();
    $parent.append('<div id="roundcornersexemple" style="border-radius: '+val+'px"></div>');
  });


  $('div[data-name="padding"]').each(function(){
    var $this = $(this);
    var val = $('input[type="number"]', $this).val();
    $this.append('<div id="paddingexemple" style="padding: '+val+'px"><div class="gutter"></div></div>');
  });


  $('#post-body').on('change', 'div[data-name="padding"] input[type="number"],div[data-name="padding"] input[type="range"]', function(){
    var $this = $(this);
    var val = $this.val();
    var $parent = $this.closest('div[data-name="padding"]');
    $('#paddingexemple', $parent).remove();
    $parent.append('<div id="paddingexemple" style="padding: '+val+'px"><div class="gutter"></div></div>');
  });
});




jQuery(window).load(function($){

});
