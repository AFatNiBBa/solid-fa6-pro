
import { Icon } from "../../index";

/**
 * A component that renders the `church` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/church?s=sharp-thin church}
 * @preview ![church](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/church.svg)
 */
const Church: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M328 8l0-8L312 0l0 8 0 40-48 0-8 0 0 16 8 0 48 0 0 59.6L163.7 217.2l-3.7 2.4 0 4.4 0 272L16 496l0-131.7 112-74.7 0-19.2-4.4 3-120 80L0 355.7 0 360 0 504l0 8 8 0 168 0 8 0s0 0 0 0l72 0 16 0 96 0 16 0 88 0 8 0s0 0 0 0l152 0 8 0 0-8 0-144 0-4.3-3.6-2.4-120-80-4.4-3 0 19.2 112 74.7L624 496l-144 0 0-272 0-4.4-3.7-2.4L328 123.6 328 64l48 0 8 0 0-16-8 0-48 0 0-40zM464 496l-8 0s0 0 0 0l-72 0 0-112c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 112-80 0 0-267.6 144-90.9 144 90.9L464 496zM368 384l0 112-96 0 0-112c0-26.5 21.5-48 48-48s48 21.5 48 48z" />
    </Icon>
);

export default Church;