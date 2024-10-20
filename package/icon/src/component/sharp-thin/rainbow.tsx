
import { Icon } from "../../index";

/**
 * A component that renders the `rainbow` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rainbow?s=sharp-thin rainbow}
 * @preview ![rainbow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/rainbow.svg)
 */
const Rainbow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 48C152.1 48 16 184.1 16 352l0 120 0 8L0 480l0-8L0 352C0 175.3 143.3 32 320 32s320 143.3 320 320l0 120 0 8-16 0 0-8 0-120C624 184.1 487.9 48 320 48zm0 192c-61.9 0-112 50.1-112 112l0 120 0 8-16 0 0-8 0-120c0-70.7 57.3-128 128-128s128 57.3 128 128l0 120 0 8-16 0 0-8 0-120c0-61.9-50.1-112-112-112zM104 360l0 112 0 8-16 0 0-8 0-112c0-128.1 103.9-232 232-232s232 103.9 232 232l0 112 0 8-16 0 0-8 0-112c0-119.3-96.7-216-216-216s-216 96.7-216 216z" />
    </Icon>
);

export default Rainbow;