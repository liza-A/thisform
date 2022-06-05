const form = () =>{
    const name = document.getElementById('name')
    const gname = document.getElementById('gname')
    const date = document.getElementById('date')
    const place = document.getElementById('place')
    const occupation = document.getElementById('occupation')
    const nationality = document.getElementById('nationality')

    if(name.value == ""){
        name.style.border = "1px solid red"
        nameError.textContent="This field is required"
        nameError.style = "color:red"
        return false
      }else{
        name.style.border="1px solid green"
      }
    if(gname.value == ""){
        gname.style.border = "1px solid red"
        givenError.textContent="This field is required"
        givenError.style = "color:red"
        return false
      }else{
        gname.style.border="1px solid green"
    }
    if(date.value == ""){
        date.style.border = "1px solid red"
        dateError.textContent="This field is required"
        dateError.style = "color:red"
        return false
      }else{
        date.style.border="1px solid green"
    }
    if(place.value == ""){
        place.style.border = "1px solid red"
        placeError.textContent="This field is required"
        placeError.style = "color:red"
        return false
      }else{
        place.style.border="1px solid green"
    }
    if(occupation.value == ""){
        occupation.style.border = "1px solid red"
        occupationError.textContent="This field is required"
        occupationError.style = "color:red"
        return false
      }else{
        occupation.style.border="1px solid green"
    }
    if(nationality.value == ""){
        nationality.style.border = "1px solid red"
        nationalityError.textContent="This field is required"
        nationalityError.style = "color:red"
        return false
      }else{
        nationality.style.border="1px solid green"
    }
}