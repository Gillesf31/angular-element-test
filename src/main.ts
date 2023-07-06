import {createCustomElement} from "@angular/elements";
import {createApplication} from "@angular/platform-browser";
import {PizzaComponent} from "./app/pizza/pizza.component";
import {TotoComponent} from "./app/toto/toto.component";

(async () => {
  const app = await createApplication({
    providers: [],
  });

  const pizzaElement = createCustomElement(PizzaComponent, {
    injector: app.injector,
  });
  customElements.define('app-pizza-element', pizzaElement);

  const totoElement = createCustomElement(TotoComponent, {
    injector: app.injector,
  });
  customElements.define('app-toto-element', totoElement);
})();
