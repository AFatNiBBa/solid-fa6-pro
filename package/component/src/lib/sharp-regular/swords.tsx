
import { Icon } from "../../index";

/**
 * A component that renders the `swords` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swords?s=sharp-regular swords}
 * @preview ![swords](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/swords.svg)
 */
const Swords: typeof Icon = x => (
    <Icon {...x}>
        <path d="M339.3 367.4L54.5 82.6 52.2 52.2l30.5 2.3L367.4 339.3l33.9-33.9L104 8 48.4 3.7 0 0 3.7 48.4 8 104 305.4 401.4l33.9-33.9zM408 456l56 56 48-48-56-56 24-72-32-32L304 448l32 32 72-24zM137.4 278.6L88 328 64 304 32 336l24 72L0 464l48 48 56-56 72 24 32-32-24-24 49.4-49.4-33.9-33.9-49.4 49.4-28.1-28.1 49.4-49.4-33.9-33.9zm203.3-79.2l33.9 33.9L504 104l4.3-55.6L512 0 463.6 3.7 408 8 278.6 137.4l33.9 33.9L429.4 54.5l30.5-2.3-2.3 30.5L340.7 199.4z" />
    </Icon>
);

export default Swords;