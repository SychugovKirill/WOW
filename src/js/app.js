import "../scss/app.scss";
import Tabs from "./modules/tabs";
import imgOneError from "./modules/img";

const tabs = document.querySelectorAll(`[data-tabs]`);
if (tabs) {
  tabs.forEach((item) => new Tabs(item));
}

imgOneError();
