(function() {
  tinymce.PluginManager.add(
    'gavickpro_tc_button',
    function( editor, url ) {
      editor.addButton( 'gavickpro_tc_button', {
        text: 'Bouton',
        icon: false,
        onclick: function() {
          editor.windowManager.open({
            title: 'Ajouter un bouton',
            body: [
              {
                type: 'textbox',
                name: 'texte',
                label: 'Texte'
              },
              {
                type: 'textbox',
                name: 'lien',
                label: 'Lien'
              },
              {
                type: 'checkbox',
                name: 'externe',
                label: 'Lien externe'
              },
              {
                type: 'listbox',
                name: 'bgcolor',
                label: 'Couleur',
                'values': [
                    {text: 'Orange', value: 'btn-orange'},
                    {text: 'Bleu', value: 'btn-blue'},
                    {text: 'Blanc', value: 'btn-white'}
                ]
              }
            ],
            onsubmit: function( e ) {
              if(e.data.externe === true) {
                editor.insertContent( '<a href="' + e.data.lien + '" class="bt '+e.data.bgcolor+'" target="_blank">'+ e.data.texte +'</a>');
              }else{
                editor.insertContent( '<a href="' + e.data.lien + '" class="bt '+e.data.bgcolor+'">'+ e.data.texte +'</a>');
              }
            }
          });
        }
      });


      editor.addButton( 'gavickpro_tc_button2', {
        text: 'Numero',
        icon: false,
        onclick: function() {
          editor.windowManager.open({
            title: 'Ajouter une puce numeroté',
            body: [
              {
                type: 'textbox',
                name: 'numero',
                label: 'Numero'
              },
              {
                type: 'listbox',
                name: 'bgcolor',
                label: 'Couleur',
                'values': [
                    {text: 'Bleu', value: 'num-blue'},
                    {text: 'Orange', value: 'num-orange'},
                    {text: 'Blanc', value: 'num-white'}
                ]
              }
            ],
            onsubmit: function( e ) {
              editor.insertContent( '<span class="num '+e.data.bgcolor+'">'+ e.data.numero +'</span> ');
            }
          });
        }
      });


    }
  );
})();
