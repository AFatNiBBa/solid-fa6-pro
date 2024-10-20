
import { Icon } from "../../index";

/**
 * A component that renders the `circle-notch` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-notch?s=thin circle-notch}
 * @preview ![circle-notch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-notch.svg)
 */
const CircleNotch: typeof Icon = x => (
    <Icon {...x}>
        <path d="M199.7 14.3c1.1 4.3-1.4 8.7-5.7 9.8C91.5 51.4 16 144.9 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-111.1-75.5-204.6-178.1-231.9c-4.3-1.1-6.8-5.5-5.7-9.8s5.5-6.8 9.8-5.7C431.4 37.7 512 137.4 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 137.4 80.6 37.7 189.9 8.6c4.3-1.1 8.7 1.4 9.8 5.7z" />
    </Icon>
);

export default CircleNotch;