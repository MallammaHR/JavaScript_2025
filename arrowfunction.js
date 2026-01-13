 /**
  */ 
 let openBrowser=browserName => {
        switch(browserName){
            case 'chrome' :
                console.log('Launch Chrome');
                return true;
            
            default :
                console.log('invalid browser '+browserName);
                return false;
        }

  }

  let flag = openBrowser('chrome');
  console.log(flag);