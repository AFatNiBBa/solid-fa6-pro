
import { Icon, generic } from "../../index";

/**
 * A component that renders the `avocado` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/avocado?s=duotone avocado}
 * @preview ![avocado](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/avocado.svg)
 */
const Avocado: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 304c0 53.2 20.3 106.5 60.9 147.1c81.2 81.2 212.9 81.2 294.2 0c32.3-32.3 56.1-84.9 66.3-136.7c4.6-23.5 19.6-43.9 38.1-59.1C491.5 228.9 512 188.8 512 144C512 64.5 447.5 0 368 0c-44.8 0-84.9 20.5-111.3 52.6c-15.2 18.5-35.6 33.5-59.1 38.1c-51.9 10.2-104.5 34-136.7 66.3C20.3 197.5 0 250.8 0 304zm148.4 59.6c-32.7-32.7-25.3-93 16.4-134.8C189 204.6 219.4 192 247.1 192c20.1 0 38.7 6.7 52.5 20.4s20.4 32.4 20.4 52.5c0 27.7-12.6 58.1-36.8 82.3c-41.7 41.7-102.1 49.1-134.8 16.4z" />
        <path d="M299.6 212.4c32.7 32.7 25.3 93-16.4 134.8s-102.1 49.1-134.8 16.4s-25.3-93 16.4-134.8s102.1-49.1 134.8-16.4z" />
    </Icon>
);

export default Avocado;