
import { Icon } from "../../index";

/**
 * A component that renders the `meter-fire` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-fire?s=sharp-solid meter-fire}
 * @preview ![meter-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/meter-fire.svg)
 */
const MeterFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 512c33.5 0 65.5-6.4 94.8-18.1c-38.6-35.1-62.8-85.7-62.8-142c0-49.2 20.9-93.1 46.1-127.8L320 224l0-32 0-32 0-32 64 0 0 32 0 8.8c17.1-15.5 33.7-27.8 47-36.1l21.6-13.5L493.4 160C455.4 66.2 363.4 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512zM192 160l0 32 0 32-64 0 0-32 0-32 0-32 64 0 0 32zm96 0l0 32 0 32-64 0 0-32 0-32 0-32 64 0 0 32zm160 0c-42.7 26.7-128 102.4-128 192c0 88.4 71.6 160 160 160s160-71.6 160-160c0-26.7-19.2-96-96-160l-32 32-64-64zm96 240.2c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-48 64-96 64-96s64 48 64 96z" />
    </Icon>
);

export default MeterFire;