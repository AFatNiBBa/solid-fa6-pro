
import { Icon } from "../../index";

/**
 * A component that renders the `rainbow` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rainbow?s=sharp-solid rainbow}
 * @preview ![rainbow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/rainbow.svg)
 */
const Rainbow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 96C178.6 96 64 210.6 64 352l0 96 0 32L0 480l0-32 0-96C0 175.3 143.3 32 320 32s320 143.3 320 320l0 96 0 32-64 0 0-32 0-96C576 210.6 461.4 96 320 96zm0 192c-35.3 0-64 28.7-64 64l0 96 0 32-64 0 0-32 0-96c0-70.7 57.3-128 128-128s128 57.3 128 128l0 96 0 32-64 0 0-32 0-96c0-35.3-28.7-64-64-64zM160 352l0 96 0 32-64 0 0-32 0-96c0-123.7 100.3-224 224-224s224 100.3 224 224l0 96 0 32-64 0 0-32 0-96c0-88.4-71.6-160-160-160s-160 71.6-160 160z" />
    </Icon>
);

export default Rainbow;