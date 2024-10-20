
import { Icon } from "../../index";

/**
 * A component that renders the `handcuffs` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/handcuffs?s=regular handcuffs}
 * @preview ![handcuffs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/handcuffs.svg)
 */
const Handcuffs: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M240 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM192 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32 80c17.7 0 32 14.3 32 32l8 0c13.3 0 24 10.7 24 24l0 16c0 1.7-.2 3.4-.5 5.1C280.3 229.6 320 286.2 320 352c0 88.4-71.6 160-160 160S0 440.4 0 352c0-65.8 39.7-122.4 96.5-146.9c-.4-1.6-.5-3.3-.5-5.1l0-16c0-13.3 10.7-24 24-24l8 0c0-17.7 14.3-32 32-32zm0 336a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM352 352c0-25.9-5.1-50.5-14.4-73.1c16.9-32.9 44.8-59.1 78.9-73.9c-.4-1.6-.5-3.3-.5-5.1l0-16c0-13.3 10.7-24 24-24l8 0c0-17.7 14.3-32 32-32s32 14.3 32 32l8 0c13.3 0 24 10.7 24 24l0 16c0 1.7-.2 3.4-.5 5.1C600.3 229.6 640 286.2 640 352c0 88.4-71.6 160-160 160c-62 0-115.8-35.3-142.4-86.9c9.3-22.5 14.4-47.2 14.4-73.1zm240 0a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zM368 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm80 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Handcuffs;