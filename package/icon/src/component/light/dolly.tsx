
import { Icon } from "../../index";

/**
 * A component that renders the `dolly` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolly?s=light dolly}
 * @preview ![dolly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/dolly.svg)
 */
const Dolly: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M24 0C15.2 0 8 7.2 8 16s7.2 16 16 16l64.9 0c6.9 0 13 4.4 15.2 10.9L211.6 365.4C190.1 379.8 176 404.2 176 432c0 44.2 35.8 80 80 80c43 0 78-33.9 79.9-76.4L565.5 351c8.3-3.1 12.5-12.3 9.5-20.5s-12.3-12.5-20.5-9.5L330.7 403.4C319.2 373.3 290.1 352 256 352c-5 0-9.9 .5-14.7 1.3L134.5 32.8C127.9 13.2 109.6 0 88.9 0L24 0zM256 384a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm96.8-201.1c3 8.3 12.2 12.6 20.5 9.6s12.6-12.2 9.6-20.5l-19.2-52.6 60.1-21.9 54.7 150.4L328.2 302.5 273.5 152.2l60.1-21.9 19.2 52.6zM243.4 163.1l54.7 150.4c6 16.6 24.4 25.2 41 19.1l150.4-54.7c16.6-6 25.2-24.4 19.1-41L453.9 86.5c-6-16.6-24.4-25.2-41-19.1L262.5 122.1c-16.6 6-25.2 24.4-19.1 41z" />
    </Icon>
);

export default Dolly;