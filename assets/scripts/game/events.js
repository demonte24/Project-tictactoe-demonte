
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {

  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {

  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signUpFailure)

}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewGame = function (event) {
  event.preventDefault()

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

// const onGameBoardClick = function (event) {
//   // event.preventDefault()
//   //when a user click a space x should appear.
//   //when a user click another space o should appear.
//   // store.currentPlayer = 'X'
//   const newGame = store.game
//   const selectedDivIndex = $(this).data("cellIndex")
//
//
//
// $(this).text(store.currentPlayer)
//
//   api.playerMove(selectedDivIndex)
//     .then(ui.playerMoveSuccess)
//     .catch(ui.playerMoveFailure)
// }

const onGameBoardClick = function (event) {
  // event.preventDefault()
  //when a user click a space x should appear.
  //when a user click another space o should appear.
  // store.currentPlayer = 'X'
  const newGame = store.game
  const selectedDivIndex = $(this).data("cellIndex")
if ($(this).text() !== 'X' && $(this).text() !== 'O') {
  console.log("in my if in events")
  $(this).text(store.currentPlayer)
  api.playerMove(selectedDivIndex)
    .then(ui.playerMoveSuccess)
    .catch(ui.playerMoveFailure)
  } else {
    ui.playerMoveFailure()
  }
}



module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onGameBoardClick
}
