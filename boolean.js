function boolToWord( bool ){

    if( bool === true){
        return "yes"
    }else if ( bool === false){
        return "No"
    }else {
        return 0
    }
}

    console.log(boolToWord(true));
    console.log(boolToWord(false));