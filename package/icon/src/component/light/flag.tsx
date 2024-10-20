
import { Icon } from "../../index";

/**
 * A component that renders the `flag` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag?s=light flag}
 * @preview ![flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/flag.svg)
 */
const Flag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 16C32 7.2 24.8 0 16 0S0 7.2 0 16L0 64 0 367l0 33 0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-104 96.3-24.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-279.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L32 56l0-40zm0 73L140.7 61.8c30.7-7.7 63.1-4.1 91.4 10c55.3 27.7 120.4 27.7 175.8 0l8.1-4.1 0 278-34.7 13c-37.9 14.2-80 12-116.2-6.1c-44.7-22.4-96-28-144.5-15.9L32 359 32 89z" />
    </Icon>
);

export default Flag;