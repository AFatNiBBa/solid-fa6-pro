
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-exclamation` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-exclamation?s=light hexagon-exclamation}
 * @preview ![hexagon-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/hexagon-exclamation.svg)
 */
const HexagonExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 288c-11.4-19.8-11.4-44.2 0-64L108.3 64.2c11.4-19.8 32.6-32 55.4-32l184.6 0c22.9 0 44 12.2 55.4 32L496 224c11.4 19.8 11.4 44.2 0 64L403.7 447.8c-11.4 19.8-32.6 32-55.4 32l-184.6 0c-22.9 0-44-12.2-55.4-32L16 288zm27.7-48c-5.7 9.9-5.7 22.1 0 32L136 431.8c5.7 9.9 16.3 16 27.7 16l184.6 0c11.4 0 22-6.1 27.7-16L468.3 272c5.7-9.9 5.7-22.1 0-32L376 80.2c-5.7-9.9-16.3-16-27.7-16l-184.6 0c-11.4 0-22 6.1-27.7 16L43.7 240zM256 128c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zM232 352a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default HexagonExclamation;