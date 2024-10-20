
import { Icon } from "../../index";

/**
 * A component that renders the `rainbow` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rainbow?s=light rainbow}
 * @preview ![rainbow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/rainbow.svg)
 */
const Rainbow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 64C160.9 64 32 192.9 32 352l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 352C0 175.3 143.3 32 320 32s320 143.3 320 320l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112C608 192.9 479.1 64 320 64zm0 192c-53 0-96 43-96 96l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112c0-70.7 57.3-128 128-128s128 57.3 128 128l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112c0-53-43-96-96-96zM128 352l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112c0-123.7 100.3-224 224-224s224 100.3 224 224l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112c0-106-86-192-192-192s-192 86-192 192z" />
    </Icon>
);

export default Rainbow;