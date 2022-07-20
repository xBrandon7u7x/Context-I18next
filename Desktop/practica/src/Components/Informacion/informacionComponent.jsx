import { useContext } from "react";
import Contador from "../Contador/contador";
import { GlobalContext } from "../../Context/Global/global.context";
import miimagen from "../../asesst/yo.jpg" 
import iphp from "../../asesst/php.png"
import icss from "../../asesst/css.png"
import ihtml from "../../asesst/html.png"
import ijava from "../../asesst/java.png"
import { useTranslation } from "react-i18next";
import imagen from "../../asesst/gorjeo.png" 


function InformacionComponent() {
  const { i18n, t } = useTranslation();

  function changeLaguage(language) {
    i18n.changeLanguage(language);
  }
    const { handleCount } = useContext(GlobalContext);

  return (
    <div>
      <div className="barra">
        <ul>
          <li>
            <p >Home</p>
          </li>
          <li>
              <p onClick={() => changeLaguage("en")}>Ingles</p>
          </li>
          <li>
              <p  onClick={() => changeLaguage("es")} >Español</p>
          </li>
        </ul>

        <div className="n1">
          <p><b>in</b></p>
        </div>
        <div className="n1-img">
          <img src={imagen}  height="22px" class="logs"></img>
        </div>
        

      </div>
      <div className="card-info">
        <div className="container-info">
          <h1 className="tit">{t("title")}</h1>
          <p className="text-info" >{t("subtitle")}</p>
          <br/>
          <button className="botonV" onClick={() => handleCount("increment")}><p>{t("botons")}</p></button>
          <Contador />
        </div>
      </div>
      <img src={miimagen} className="miimagen"/>
      <br/><br/><br/>
      <div className="cad-info-tecnologias">
        <div className="tecnologia">
            <div className="card-tecnologia">
                <img src={iphp} className="img-tecnologia"/>
                <p className="text-tecnologia">PHP</p>
            </div>
            <div className="card-tecnologia">
                <img src={ihtml} className="img-tecnologia"/>
                <p className="text-tecnologia">HTML</p>
            </div>
            <div className="card-tecnologia">
                <img src={icss} className="img-tecnologia"/>
                <p className="text-tecnologia">CSS</p>
            </div>
            <div className="card-tecnologia">
                <img src={ijava} className="img-tecnologia"/>
                <p className="text-tecnologia">JavaS</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default InformacionComponent;