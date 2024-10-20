
import { Icon } from "../../index";

/**
 * A component that renders the `meter-fire` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-fire?s=sharp-regular meter-fire}
 * @preview ![meter-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/meter-fire.svg)
 */
const MeterFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 48c70.2 0 132.2 34.8 169.9 88c1.8-1.2 3.5-2.3 5.1-3.3l21.6-13.5L493.4 160C455.4 66.2 363.4 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c33.5 0 65.5-6.4 94.8-18.1c-12.7-11.5-23.8-24.7-33-39.2c-19.5 6.1-40.3 9.3-61.8 9.3C141.1 464 48 370.9 48 256S141.1 48 256 48zM368 152l0-24-48 0 0 24 0 48 0 24 14.1 0c2.9-4 5.9-7.9 8.9-11.7c8-10.1 16.5-19.5 25-28.2l0-32.1zm-176 0l0-24-48 0 0 24 0 48 0 24 48 0 0-24 0-48zm88 0l0-24-48 0 0 24 0 48 0 24 48 0 0-24 0-48zm168 8c-42.7 26.7-128 102.4-128 192c0 88.4 71.6 160 160 160s160-71.6 160-160c0-26.7-19.2-96-96-160l-32 32-64-64zm96 240.2c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-48 64-96 64-96s64 48 64 96z" />
    </Icon>
);

export default MeterFire;