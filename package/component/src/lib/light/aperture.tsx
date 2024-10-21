
import { Icon } from "../../index";

/**
 * A component that renders the `aperture` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/aperture?s=light aperture}
 * @preview ![aperture](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/aperture.svg)
 */
const Aperture: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480c-6.1 0-12.1-.2-18.1-.7L316 344l13.8-23.9c0 0 .1-.1 .1-.1l18.5-32 67 116.1 3.3 5.8C377.9 453.1 320.1 480 256 480zm73.9-288L464 192l6.7 0c6 20.3 9.3 41.8 9.3 64c0 47.3-14.6 91.1-39.7 127.3L362.2 248l-13.7-23.7-.1-.3-18.5-32zm-55.2-32l-.2 0-37 0 67-116.1 3.4-5.8C374.6 53.9 429.7 99.5 458.4 160l-156.3 0-27.5 0zM256 32c6.1 0 12.1 .2 18.1 .7L196 168l-13.9 24-18.5 32s0 0 0 0l-67-116.1-3.3-5.8C134.1 58.9 191.9 32 256 32zM32 256c0-47.3 14.6-91.1 39.7-127.3L149.8 264l32.3 56L48 320l-6.7 0c-6-20.3-9.3-41.8-9.3-64zM204.1 473.9C137.4 458.1 82.3 412.5 53.6 352l156.3 0 64.7 0-67 116.1-3.4 5.8zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm46.1-207.9c-5.7 9.8-16.3 15.9-27.7 15.9l-36.9 0c-11.4 0-22-6.1-27.7-16l-18.5-32c-5.7-9.9-5.7-22.1 0-32l18.5-32c5.7-9.9 16.2-15.9 27.5-16l37.3 0c11.3 .1 21.7 6.1 27.4 15.8l18.7 32.4c5.6 9.8 5.6 21.9 0 31.7l-.1 .1-18.5 32-.1 .1z" />
    </Icon>
);

export default Aperture;