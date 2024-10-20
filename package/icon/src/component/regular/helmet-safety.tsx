
import { Icon } from "../../index";

/**
 * A component that renders the `helmet-safety` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-safety?s=regular helmet-safety}
 * @preview ![helmet-safety](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/helmet-safety.svg)
 */
const HelmetSafety: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M264 80l48 0c4.4 0 8 3.6 8 8l0 208c0 13.3 10.7 24 24 24s24-10.7 24-24l0-208c0-30.9-25.1-56-56-56l-48 0c-30.9 0-56 25.1-56 56l0 208c0 13.3 10.7 24 24 24s24-10.7 24-24l0-208c0-4.4 3.6-8 8-8zM559.4 384L16.6 384C7.4 384 0 391.4 0 400.6c0 4.7 2 9.2 5.8 11.9C27.5 428.4 111.8 480 288 480s260.5-51.6 282.2-67.5c3.8-2.8 5.8-7.2 5.8-11.9c0-9.2-7.4-16.6-16.6-16.6zM32 288l0 64 48 0 0-64c0-68.4 39-127.7 96-156.8l0-52.5C91.8 110.9 32 192.5 32 288zm464-2.2l0 66.2 48 0 0-64 0-2.4c-1-94.5-60.5-174.9-144-206.9l0 52.5c56.4 28.8 95.2 87.2 96 154.6z" />
    </Icon>
);

export default HelmetSafety;