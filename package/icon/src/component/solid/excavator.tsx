
import { Icon } from "../../index";

/**
 * A component that renders the `excavator` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/excavator?s=solid excavator}
 * @preview ![excavator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/excavator.svg)
 */
const Excavator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 64l0 96 142.9 0-64-96L160 64zM384 190.5l0 17.5 0 16 0 48c0 26.5-21.5 48-48 48L48 320c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l48 0L96 48c0-26.5 21.5-48 48-48l94.9 0c21.4 0 41.4 10.7 53.3 28.5l78.4 117.7c8.8 13.1 13.4 28.6 13.4 44.4zM80 416c-8.8 0-16 7.2-16 16s7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 416zM0 432c0-44.2 35.8-80 80-80l256 0c44.2 0 80 35.8 80 80s-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80zM640 320l0 64 0 48c0 44.2-35.8 80-80 80l-78.1 0c-18.7 0-33.9-15.2-33.9-33.9c0-9 3.6-17.6 9.9-24L576 336l0-208L416 288l0-128L562.7 13.3c8.5-8.5 20-13.3 32-13.3c25 0 45.3 20.3 45.3 45.3L640 320z" />
    </Icon>
);

export default Excavator;