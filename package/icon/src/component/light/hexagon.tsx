
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon?s=light hexagon}
 * @preview ![hexagon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/hexagon.svg)
 */
const Hexagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 224c-11.4 19.8-11.4 44.2 0 64l92.3 159.8c11.4 19.8 32.6 32 55.4 32l184.6 0c22.9 0 44-12.2 55.4-32L496 288c11.4-19.8 11.4-44.2 0-64L403.7 64.2c-11.4-19.8-32.6-32-55.4-32l-184.6 0c-22.9 0-44 12.2-55.4 32L16 224zm27.7 48c-5.7-9.9-5.7-22.1 0-32L136 80.2c5.7-9.9 16.3-16 27.7-16l184.6 0c11.4 0 22 6.1 27.7 16L468.3 240c5.7 9.9 5.7 22.1 0 32L376 431.8c-5.7 9.9-16.3 16-27.7 16l-184.6 0c-11.4 0-22-6.1-27.7-16L43.7 272z" />
    </Icon>
);

export default Hexagon;