#app function :  import Field from "./components/field";
                 import Languages from "./components/languages";
                 import Translate from "./components/translate";

#DOM :   <div>
      <Field label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
    
#Usestate : const [language, setLanguage] = useState("ru");
            const [text, setText] = useState("");
#Commands : npm install -g create-react-app  (to install packages)
#image :             
<img alt="image" src={faker.image.image()}
