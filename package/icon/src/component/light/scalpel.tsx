
import { Icon } from "../../index";

/**
 * A component that renders the `scalpel` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scalpel?s=light scalpel}
 * @preview ![scalpel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/scalpel.svg)
 */
const Scalpel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M200 288c-6.2 0-11.9-3.6-14.5-9.3s-1.7-12.3 2.3-17.1L387.4 25.1C400.8 9.2 420.6 0 441.4 0c39 0 70.6 31.6 70.6 70.6l0 4c0 17.6-6.2 34.6-17.6 48.1L369.3 271c-9.1 10.8-22.5 17-36.7 17L200 288zM411.9 45.7L234.4 256l98.2 0c4.7 0 9.2-2.1 12.2-5.7L470 102c6.5-7.7 10-17.4 10-27.5l0-4C480 49.3 462.7 32 441.4 32c-11.4 0-22.2 5-29.5 13.7zM4.7 484.7L169.4 320l45.3 0L59.7 474.9c29.2-5 68.3-14.1 106.2-29.7C227.3 419.9 279.2 380.5 287 320l32.2 0c-8 80.6-76 128-141.1 154.8C108.1 503.6 34 512 16 512c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4z" />
    </Icon>
);

export default Scalpel;