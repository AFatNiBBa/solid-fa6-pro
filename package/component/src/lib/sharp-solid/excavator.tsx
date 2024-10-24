
import { Icon } from "../../index";

/**
 * A component that renders the `excavator` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/excavator?s=sharp-solid excavator}
 * @preview ![excavator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/excavator.svg)
 */
const Excavator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 0l32 0L256 0l16.6 0 9.6 13.5 96 136 5.9 8.3 0 2.2 0 8 0 56 0 96L0 320 0 160l96 0L96 32 96 0zM239.4 64L160 64l0 96 147.2 0L239.4 64zM80 416c-8.8 0-16 7.2-16 16s7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 416zM0 432c0-44.2 35.8-80 80-80l256 0c44.2 0 80 35.8 80 80s-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80zM640 320l0 64 0 48c0 44.2-35.8 80-80 80l-112 0 0-48L576 336l0-208L416 288l0-128L576 0l64 0 0 320z" />
    </Icon>
);

export default Excavator;