<?php

/*
Plugin Name: Advanced Custom Fields: Code Editor
Plugin URI: http://github.com/shortlist-digital/acf-code-editor
Description: Code Editor field using CodeMirror
Version: 1.0.0
Author: Jon Sherrard
Author URI: http://jonsherrard.com
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/




// 1. set text domain
// Reference: https://codex.wordpress.org/Function_Reference/load_plugin_textdomain
load_plugin_textdomain( 'acf-code_editor', false, dirname( plugin_basename(__FILE__) ) . '/lang/' );




// 2. Include field type for ACF5
// $version = 5 and can be ignored until ACF6 exists
function include_field_types_code_editor( $version ) {

	include_once('acf-code-editor-v5.php');

}

add_action('acf/include_field_types', 'include_field_types_code_editor');



?>
