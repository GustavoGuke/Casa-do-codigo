function palindromoCheck(aString){

   let texto = aString.toLocaleLowerCase().split('').reverse().join('')
   console.log(texto === aString)
}

palindromoCheck('kayak')