
import { Icon } from "../../index";

/**
 * A component that renders the `scarf` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scarf?s=sharp-light scarf}
 * @preview ![scarf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/scarf.svg)
 */
const Scarf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M174.6 0L184 0 328 0l9.4 0 4.6 8.2 72 128 2.1 3.7 0 4.2 0 64 0 6.6-4.7 4.7L374.6 256 416 297.4l3.3 3.3 8 8 3.3 3.3 68.7 68.7L510.6 392 488 414.6l-11.3-11.3L408 334.6 382.6 360l68.7 68.7L462.6 440 440 462.6l-11.3-11.3L360 382.6 334.6 408l68.7 68.7L414.6 488 392 510.6l-11.3-11.3L312 430.6l-3.3-3.3-8-8-3.3-3.3L100.7 219.3 96 214.6l0-6.6 0-64 0-4.2 2.1-3.7 72-128L174.6 0zM352 233.4l32-32 0-53.2L318.6 32 193.4 32 128 148.2l0 53.2 184 184L385.4 312l-44.7-44.7L208 134.6 208 96l96 0 16 0 0 32-16 0-57.4 0L352 233.4zM114.7 278.6l22.6 22.6L35.3 403.3 24 414.6 1.4 392l11.3-11.3L114.7 278.6zm48 48l22.6 22.6L83.3 451.3 72 462.6 49.4 440l11.3-11.3L162.7 326.6zm48 48l22.6 22.6L131.3 499.3 120 510.6 97.4 488l11.3-11.3L210.7 374.6z" />
    </Icon>
);

export default Scarf;