<?php $cid = '' ?><?php $hashcid = '' ?><?php $styles = array(); ?><?php $classes = array(); ?><?php if( $widget['couleur_de_fond'] ) $styles[] = 'background-color: '.$widget["couleur_de_fond"] ?><?php if( $widget['couleur_du_texte'] ) $styles[] = 'color: '.$widget["couleur_du_texte"].' !important' ?><?php if( $widget['padding'] ) $styles[] = 'padding: '.$widget["padding"].'px' ?><?php if( $widget['bords_arrondis'] ) $styles[] = 'border-radius: '.$widget["bords_arrondis"].'px' ?><?php if( $widget['couleur_du_texte'] ): ?><?php $cid = 'c-'.str_replace('#','',$widget["couleur_du_texte"]) ?><?php $hashcid = '#c-'.str_replace('#','',$widget["couleur_du_texte"]) ?><style><?php echo $hashcid.' h1, '.$hashcid.' h2, '.$hashcid.' h3, '.$hashcid.' p, '.$hashcid.' ul' ?>{color:<?php echo $widget["couleur_du_texte"].' !important' ?>}</style><?php endif; ?>