
import { Icon } from "../../index";

/**
 * A component that renders the `walker` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/walker?s=sharp-solid walker}
 * @preview ![walker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/walker.svg)
 */
const Walker: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M118.7 0L144 0 384 0l32 0 0 32 0 360.6c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4L352 224l-220.5 0L71.1 479.4l-7.4 31.1L1.5 495.8l7.4-31.1 104-440L118.7 0zm27.9 160L352 160l0-96L169.3 64l-22.7 96zM384 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Walker;