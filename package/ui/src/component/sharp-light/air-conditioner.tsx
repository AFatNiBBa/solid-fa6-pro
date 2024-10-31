
import { Icon } from "../../index";

/**
 * A component that renders the `air-conditioner` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/air-conditioner?s=sharp-light air-conditioner}
 * @preview ![air-conditioner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/air-conditioner.svg)
 */
const AirConditioner: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 32l0 192 512 0 0-192L32 32zM0 0L32 0 544 0l32 0 0 32 0 192 0 32-32 0L32 256 0 256l0-32L0 32 0 0zM112 128l352 0 16 0 0 32-16 0-352 0-16 0 0-32 16 0zM256 288l0 144c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-29.6 16.1-55.5 40-69.3l16 27.7c-14.4 8.3-24 23.8-24 41.6c0 26.5 21.5 48 48 48s48-21.5 48-48l0-144 32 0zm64 112l0-112 32 0 0 112c0 26.5 21.5 48 48 48s48-21.5 48-48c0-17.7-9.6-33.3-24-41.6l16-27.7c23.9 13.8 40 39.7 40 69.3c0 44.2-35.8 80-80 80s-80-35.8-80-80z" />
    </Icon>
);

export default AirConditioner;