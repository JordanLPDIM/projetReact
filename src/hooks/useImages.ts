export const useImage = (title: string) => {
    const imageName = `${title.toLowerCase().replace(" ", "")}`;
  
    let source;
    switch (imageName) {

        case "walterwhite jr":
            source = require("../../assets/walterwhitejr.jpg");
            break;
        case "walterwhite":
            source = require("../../assets/walterwhite.png");
            break;

        case "saulgoodman":
            source = require("../../assets/saulgoodman.jpg");
            break;
            case "gusfring":
                source = require("../../assets/gusfring.jpg");
                break;
            case "hankschrader":
            source = require("../../assets/hankschrader.png");
            break;
            case "badger":
            source = require("../../assets/badger.jpg");
            break;
            case "jessepinkman":
            source = require("../../assets/jessepinkman.jpg");
            break;
            case "skylerwhite":
            source = require("../../assets/skylerwite.jpg");
            break;
            case "gustavofring":
            source = require("../../assets/gustavo.jpg");
            break;
            case "thefly":
            source = require("../../assets/thefly.jpg");
            break;
            case "mikeehrmantraut":
                source = require("../../assets/mikeehrmantraut.jpg");
                break;
           
    }

    return source;
  };