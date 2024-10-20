
import { Icon } from "../../index";

/**
 * A component that renders the `circle-half` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half?s=thin circle-half}
 * @preview ![circle-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-half.svg)
 */
const CircleHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M226 17.9C107.6 32.6 16 133.6 16 256s91.6 223.4 210 238.1c6.7 .8 14-4.7 14-14.2l0-448c0-9.4-7.3-15-14-14.1zM224.1 2C241.6-.2 256 14.3 256 32l0 448c0 17.7-14.4 32.2-31.9 30C97.8 494.3 0 386.6 0 256S97.8 17.7 224.1 2z" />
    </Icon>
);

export default CircleHalf;