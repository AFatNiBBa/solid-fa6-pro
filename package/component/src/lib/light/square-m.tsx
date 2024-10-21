
import { Icon } from "../../index";

/**
 * A component that renders the `square-m` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-m?s=light square-m}
 * @preview ![square-m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-m.svg)
 */
const SquareM: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm125.1 38.8L224 276.1l98.9-141.3c4-5.7 11.3-8.2 17.9-6.1s11.2 8.3 11.2 15.3l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-173.2L237.1 313.2c-3 4.3-7.9 6.8-13.1 6.8s-10.1-2.5-13.1-6.8L128 194.8 128 368c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-7 4.5-13.2 11.2-15.3s13.9 .4 17.9 6.1z" />
    </Icon>
);

export default SquareM;