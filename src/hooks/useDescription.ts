export const useDescription = (title: string) => {
    const name = `${title.toLowerCase().replace(" ", "")}`;
  
    let description;

    switch (name) {
        case "walterwhite jr":
            description = "Walter Hartwell White Jr. is a fictional character in the crime drama series Breaking Bad. Played by RJ Mitte, Walt Jr. is the son of protagonist Walter White and his wife Skyler. He has cerebral palsy, as manifested in speech difficulties and impaired motor control, for which he uses crutches.";
            break;
        case "walterwhite":
            description = "Walter Hartwell White Sr., also known by his pseudonym Heisenberg, is the main protagonist of the American crime drama television series Breaking Bad, portrayed by Bryan Cranston. Walter was a skilled chemist and co-founder of a technology firm before he accepted a buy-out from his partners.";
            break;

        case "saulgoodman":
            description = "James Morgan 'Jimmy' McGill, better known by his business name Saul Goodman, is a character created by Vince Gilligan and Peter Gould and portrayed by Bob Odenkirk in the television franchise Breaking Bad. He appears as a major character in Breaking Bad and as the protagonist of its spin-off Better Call Saul.";
            break;
            
            case "gusfring":
                description = "Gustavo 'Gus' Fring is a fictional character portrayed by Giancarlo Esposito in the Breaking Bad franchise, serving as the main antagonist of the crime drama series Breaking Bad and a major character in its prequel Better Call Saul.";
                break;
            
                case "hankschrader":
            description = "Henry R. Schrader ASAC is a fictional character in the AMC drama series Breaking Bad and its spin-off series Better Call Saul. He is portrayed by Dean Norris and was created by series creator Vince Gilligan.";
            break;
            
            case "badger":
            description = "Brandon Mayhew, commonly referred to as Badger, is one of Jesse Pinkman's longtime friends and a low-level meth distributor.";
            break;
            
            case "jessepinkman":
            description = "Jesse Bruce Pinkman is a fictional character in the American crime film television series Breaking Bad, played by Aaron Paul. He is a crystal meth cook and dealer who works with his former high school chemistry teacher, Walter White. Jesse is the only character besides Walter to appear in every episode of the show. ";
            break;
            
            case "skylerwhite":
            description = "Skyler White is a fictional character in Breaking Bad, portrayed by Anna Gunn. For her performance, Gunn received critical acclaim, with some critics even lauding her character as the template for television anti-heroines.";
            break;
            
            case "gustavofring":
            description = "Gustavo 'Gus' Fring is a fictional character portrayed by Giancarlo Esposito in the Breaking Bad franchise, serving as the main antagonist of the crime drama series Breaking Bad and a major character in its prequel Better Call Saul.";
            break;
            
            case "thefly":
            description = "Flies (Diptera) are common insects that appeared in Breaking Bad. It has been speculated that the fly represents guilt, contamination, irrational obsession, and the loss of control in Walter White's life. When a fly gets into the superlab, Walt embarks on an obsessive quest to destroy it";
            break;
            
            case "mikeehrmantraut":
                description = "Michael Ehrmantraut is a fictional character in the television series Breaking Bad and its spinoff prequel Better Call Saul, portrayed by Jonathan Banks. Mike is a former Philadelphia police officer who works for Gus Fring—and, on occasion, Saul Goodman—as a private investigator, head of security, cleaner, and hitman.";
                break;
           
    }

    return description;
  };