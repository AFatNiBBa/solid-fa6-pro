
import { Icon } from "../../index";

/**
 * A component that renders the `business-time` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/business-time?s=light business-time}
 * @preview ![business-time](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/business-time.svg)
 */
const BusinessTime: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 48l0 48 192 0 0-48c0-8.8-7.2-16-16-16L176 32c-8.8 0-16 7.2-16 16zM128 96l0-48c0-26.5 21.5-48 48-48L336 0c26.5 0 48 21.5 48 48l0 48 64 0c35.3 0 64 28.7 64 64l0 32.7c-5.3-.5-10.6-.7-16-.7s-10.7 .2-16 .7l0-32.7c0-17.7-14.3-32-32-32l-80 0-224 0-80 0c-17.7 0-32 14.3-32 32l0 96 144 0 32 0 144 0 8.2 0c-8.1 9.8-15.2 20.6-21 32L208 288l0 48 114.9 0c-1.9 10.4-2.9 21.1-2.9 32l-112 0c-17.7 0-32-14.3-32-32l0-48L32 288l0 128c0 17.7 14.3 32 32 32l275.2 0c5.9 11.4 12.9 22.2 21 32L64 480c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l64 0zM496 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 64c8.8 0 16 7.2 16 16l0 48 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default BusinessTime;