export const useImage = (title: string) => {
    const imageName = `${title.toLowerCase().replace(" ", "")}`;
  
    let source;
    switch (imageName) {

        case "walterwhite jr":
            source = require("../../walterwhitejr.jpg");
            break;
        case "walterwhite":
            source = require("../../walterwhite.png");
            break;

        case "saulgoodman":
            source = require("../../saulgoodman.jpg");
            break;
            case "gusfring":
                source = require("../../gusfring.jpg");
                break;
            case "hankschrader":
            source = require("../../hankschrader.png");
            break;
            case "badger":
            source = require("../../badger.jpg");
            break;
            case "jessepinkman":
            source = require("../../jessepinkman.jpg");
            break;
            case "skylerwhite":
            source = require("../../skylerwite.jpg");
            break;
            case "gustavofring":
            source = require("../../gustavo.jpg");
            break;
            case "thefly":
            source = require("../../thefly.jpg");
            break;
            case "mikeehrmantraut":
                source = require("../../mikeehrmantraut.jpg");
                break;
           
    }

    return source;
  };