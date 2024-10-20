
import { Icon } from "../../index";

/**
 * A component that renders the `clarinet` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clarinet?s=regular clarinet}
 * @preview ![clarinet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/clarinet.svg)
 */
const Clarinet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 112c0-8.8 7.2-16 16-16l32 0 96 0 96 0 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0 0 32 44.6 0c7.9 0 15.6-2.3 22.2-6.7L602.7 116c7.4-4.9 16.8-5.4 24.6-1.2S640 127.1 640 136l0 240c0 8.9-4.9 17-12.7 21.2s-17.3 3.7-24.6-1.2l-55.9-37.3c-6.6-4.4-14.3-6.7-22.2-6.7l-411.2 0c-8.6 0-17.1-1.3-25.3-3.7L17.1 327C7 323.9 0 314.6 0 304l0-96c0-10.6 7-19.9 17.1-23l71-21.3c8.2-2.5 16.7-3.7 25.3-3.7L256 160l0-32-16 0c-8.8 0-16-7.2-16-16zm64 48l64 0 0-32-64 0 0 32zm96 0l64 0 0-32-64 0 0 32zM248 256a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm133.4-62.8C559 202.9 542 208 524.6 208l-411.2 0c-3.9 0-7.8 .6-11.5 1.7L48 225.9l0 60.3 53.9 16.2c3.7 1.1 7.6 1.7 11.5 1.7l411.2 0c17.4 0 34.4 5.1 48.8 14.8L592 331.2l0-150.3-18.6 12.4z" />
    </Icon>
);

export default Clarinet;