
import { Icon } from "../../index";

/**
 * A component that renders the `shield-cross` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-cross?s=sharp-solid shield-cross}
 * @preview ![shield-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shield-cross.svg)
 */
const ShieldCross: typeof Icon = x => (
    <Icon {...x}>
        <path d="M267.5 10.1L256 5.7l-11.5 4.4L37 90.2 17.8 97.6l-1.2 20.6C13.6 167.8 21.4 243.7 53.9 318C86.6 392.8 145 467.1 243.4 509.4l12.6 5.4 12.6-5.4C367 467.1 425.4 392.8 458.1 318c32.5-74.2 40.3-150.2 37.3-199.8l-1.2-20.6L475 90.2l-207.5-80zM224 86.6l32-12.3 32 12.3 0 73.4 143.3 0c-1.2 19.4-4.2 41.2-9.4 64L288 224l0 202.8c-10 6.5-20.7 12.5-32 18c-11.3-5.5-22-11.5-32-18L224 224 90.1 224c-5.2-22.8-8.2-44.6-9.4-64L224 160l0-73.4z" />
    </Icon>
);

export default ShieldCross;