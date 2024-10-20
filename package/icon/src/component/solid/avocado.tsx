
import { Icon } from "../../index";

/**
 * A component that renders the `avocado` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/avocado?s=solid avocado}
 * @preview ![avocado](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/avocado.svg)
 */
const Avocado: typeof Icon = x => (
    <Icon {...x}>
        <path d="M459.4 255.3c-18.5 15.2-33.5 35.6-38.1 59.1c-10.2 51.9-34 104.5-66.3 136.7c-81.2 81.2-212.9 81.2-294.2 0s-81.2-212.9 0-294.2c32.3-32.3 84.9-56.1 136.7-66.3c23.5-4.6 43.9-19.6 59.1-38.1C283.1 20.5 323.2 0 368 0c79.5 0 144 64.5 144 144c0 44.8-20.5 84.9-52.6 111.3zM283.2 347.2c41.7-41.7 49.1-102.1 16.4-134.8s-93-25.3-134.8 16.4s-49.1 102.1-16.4 134.8s93 25.3 134.8-16.4z" />
    </Icon>
);

export default Avocado;