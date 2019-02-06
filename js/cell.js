/*
 * Tutorial CellJS: https://tutorial.celljs.org/
*/
var config = {
  apiKey: 'AIzaSyDgF_V4DZRZIj2tMIPwQUohUpY5OhM95U4',
  authDomain: 'rp6d20.firebaseapp.com',
  databaseURL: 'https://rp6d20.firebaseio.com',
  projectId: 'rp6d20'
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
let database = firebase.database()

let $ = function (e) {
  return document.querySelector(e)
}

var el = {
  $cell: true,
  style: 'font-family: Helvetica; font-size: 24px;',
  $components: [{
    $type: 'input',
    type: 'text',
    id: 'input'
  }, {
    $type: 'p',
    id: 'text'
  }],
  onkeyup: function () {
    database.ref('/').update({'test':$('#input').value})
  },
  $init: function () {
    var self = this
    database.ref('/').on('value', function (snapshot) {
      var _response = snapshot.val()
      self._update(_response.test)
    })
  },
  _update: function (v) {
    console.log(v)
    $('#input').value = v
    $('#text').$text = v
  }
}
