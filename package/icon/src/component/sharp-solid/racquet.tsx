
import { Icon } from "../../index";

/**
 * A component that renders the `racquet` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/racquet?s=sharp-solid racquet}
 * @preview ![racquet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/racquet.svg)
 */
const Racquet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M349 64c-36 0-76.4 15.8-108.8 48.2S192 184.9 192 221c0 28.2 9.6 53.2 27.7 71.3c40.4 40.4 120.7 38.9 180.1-20.5C432.2 239.4 448 199.1 448 163c0-28.2-9.6-53.2-27.7-71.3S377.1 64 349 64zm-154 2.9C238.5 23.4 294.8 0 349 0c42.8 0 84.9 14.8 116.6 46.5S512 120.2 512 163c0 54.2-23.4 110.5-66.9 154c-68.2 68.2-172.3 88.9-245.7 40.8l-48.8 48.8L160 416 64 512 0 448l96-96 9.4 9.4 48.8-48.8C136.4 285.2 128 253.3 128 221c0-54.2 23.4-110.5 66.9-154z" />
    </Icon>
);

export default Racquet;