
document.querySelector("#inject-html button").addEventListener('click',function(){


  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment').innerText
      // console.log(answerPTagWithValue)

  var imARealNumber = parseInt(answerPTagWithValue)
      // console.log(imARealNumber)

      document.querySelector('#compoundInvestment').innerText = imARealNumber * 2
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  var answerCircle = document.querySelector('#circle-bw')
  if (answerCircle.style.background === 'white'){
     answerCircle.style.background = 'black'
 } else {
    answerCircle.style.background = 'white'
}
})

document.querySelector("#blow-up button").addEventListener('click',function(){

   // (1) Properly select the element
  var circleEl = document.querySelector('.circle-red')
  console.log(circleEl)

  // (2) Capture the current height/width of element
  var elementStyles = window.getComputedStyle(circleEl)

     var elWidthString = elementStyles.width
     var elHeightString = elementStyles.height




  // (3) Convert height/width of circle element from a string to an integer-value
  var elWidthStringNumber = elWidthString.slice(0,-2)
  var elHeightStringNumber = elHeightString.slice(0,-2)

  var currentElWidth = parseInt(elWidthStringNumber)
  var currentElHeight = parseInt(elHeightStringNumber)


  // var charArray = elWidthString.split('')
  //
  // charArray.pop()
  // charArray.pop()
  //
  // console.log(charArray.join()


  // (4)Double the integer-value of the height/width value

  var doubleWidth = currentElWidth * 2
  var doubleHeight = currentElHeight * 2


  if (doubleWidth > 320) {
     circleEl.style.width = '40px'
     circleEl.style.height = '40px'
  } else {
     circleEl.style.width = doubleWidth + 'px'
     circleEl.style.height = doubleHeight + 'px'
 }

})




document.querySelector("#remove button").addEventListener('click',function(){

   var listOfUsersEl = document.querySelector('#user-list')
   // console.log(listOfUsersEl)

   var listOfUsers = document.querySelectorAll('#user-list li')
   // console.log(listOfUsers)

   for (var i = 0; i < listOfUsers.length; i += 1 ){
    var indivListers = listOfUsers[i]


    if(indivListers.classList.contains('inactive') === true){
      // console.log(indivListers)

      listOfUsersEl.removeChild(indivListers)
    }
}
  // TASK #5
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){

   var allTheSquares = document.querySelector('#reverse-squares .answer-box')
      // console.log(allTheSquares)

   var flipTheSquares = document.querySelectorAll('.square')
      // console.log(flipTheSquares)
   for(var i = flipTheSquares.length - 1; i >= 0 ; i--){
      var eachSquare = flipTheSquares[i]
      // console.log(eachSquare)

      allTheSquares.removeChild(eachSquare)
      allTheSquares.appendChild(eachSquare)
    }

  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){

   var allMyTasks = document.querySelectorAll("#tasks li")

   for(var i = 0; i < allMyTasks.length; i++){
      var taskStr = allMyTasks[i].innerText
      var taskArr = taskStr.split('')
      var reversedArr = taskArr.reverse()
      var reversedTaskStr =reversedArr.join("")

      allMyTasks[i].innerText = reversedTaskStr
   }

  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){





   //TASK #8
   var imgEl = document.querySelector('#city-img')
   console.log(imgEl.src)

   var splitSrcStrArr = imgEl.src.split('/')

   var strToModify = splitSrcStrArr.pop()
   console.log(strToModify)

   var cityPhotoXString = strToModify.split('.')[0]
   var cityPhotoXArr = cityPhotoXString.split('-')       // Consolidate these two lines -- var cityPhotoXArr = cityPhotoXString.split('-').pop()
   var numString = cityPhotoXArr.pop()                   //

   var imgNum = parseInt(numString)

   var nextImg = imgNum + 1

   if (imgNum < 10){
      imgEl.src = './images/city-photo-' + nextImg + '.jpg'
   } else {
      imgEl.src = './images/city-photo-1.jpg'
   }


   // One-line it == No if-else statement
   // var nextImgNumCapped = imgNum % 10 + 1
   // imgEl.src = './images/city-photo-' + nextImgNumCapped + '.jpg'





})
