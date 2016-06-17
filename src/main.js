import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/mode/htmlmixed/htmlmixed'

var CodeMirror = require('codemirror/lib/codemirror')

window.$ = window.$ || jQuery || window.jQuery

let sw_interval

let instantiator = function(el) {
	let instance = CodeMirror.fromTextArea(el, {
    lineNumbers: true,
    mode: "htmlmixed",
		theme: 'monokai',
		tabSize: 2,
		lineWrapping: true
  })
	return instance
}

const strict_wysiwyg = function() {
	console.log('Interval fired')
  if ((typeof $ !== "undefined" && $ !== null)) {
    clearInterval(sw_interval)
    var editors = $('.codemirror-wrapper textarea')
    if (editors.length) {
      for (var i=0;i < editors.length; i++) {
        instantiator(editors[i])
      }
    }
  }
}

acf.add_action('ready', function() {
  sw_interval = setInterval(strict_wysiwyg, 10);
});

acf.add_action('append', ( $el ) => {
  // $el will be equivalent to the new element being appended $('tr.row')
  // find a specific field
  let $field = $el.find('.codemirror-wrapper textarea')
  if ($field.length) {
    let newInstance = instantiator($field[0])
		newInstance.focus()
  }
})
