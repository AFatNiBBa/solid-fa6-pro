
import { Icon } from "../../index";

/**
 * A component that renders the `face-laugh` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-laugh?s=thin face-laugh}
 * @preview ![face-laugh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-laugh.svg)
 */
const FaceLaugh: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM256 416c64.7 0 119.5-44.8 135.8-106.1c.4-1.4 .1-2.5-.9-3.6c-1.1-1.2-3-2.3-5.4-2.3l-259.1 0c-2.4 0-4.4 1.1-5.4 2.3c-1 1.1-1.2 2.2-.9 3.6C136.5 371.2 191.3 416 256 416zM126.5 288l259.1 0c14.2 0 25.4 12.3 21.8 26c-18.1 68-79 118-151.3 118s-133.2-50-151.3-118c-3.6-13.7 7.6-26 21.8-26zm33.9-96a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default FaceLaugh;