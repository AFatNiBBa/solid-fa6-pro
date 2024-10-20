
import { Icon } from "../../index";

/**
 * A component that renders the `helmet-safety` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-safety?s=light helmet-safety}
 * @preview ![helmet-safety](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/helmet-safety.svg)
 */
const HelmetSafety: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M240 80l0 192c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-192c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48l0 192c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-192c0-8.8-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zm-64-1.3l0 34.7C109.9 143.7 64 210.5 64 288l0 32-32 0 0-32c0-95.5 59.8-177.1 144-209.3zm224 34.7l0-34.7c83.5 31.9 143 112.4 144 206.9l0 2.4 0 32-32 0 0-34.3c-.9-76.5-46.5-142.3-112-172.3zM537.3 384L38.7 384c-3.7 0-6.7 3-6.7 6.7c0 .4 0 .7 .1 1C58.5 408.5 136.6 448 288 448s229.5-39.5 255.9-56.3c0-.2 .1-.6 .1-1c0-3.7-3-6.7-6.7-6.7zM38.7 352l498.5 0c21.4 0 38.7 17.3 38.7 38.7c0 11-4.7 21.4-13.9 27.3C531.3 437.9 447.1 480 288 480s-243.3-42.1-274.1-61.9C4.7 412.1 0 401.7 0 390.7C0 369.3 17.3 352 38.7 352z" />
    </Icon>
);

export default HelmetSafety;