
import { Icon } from "../../index";

/**
 * A component that renders the `air-conditioner` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/air-conditioner?s=solid air-conditioner}
 * @preview ![air-conditioner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/air-conditioner.svg)
 */
const AirConditioner: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64l0 96c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-96c0-35.3-28.7-64-64-64L64 0zM80 128l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 160c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 256l-64 0 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-11.8 6.4-22.2 16-27.7c15.3-8.9 20.5-28.4 11.7-43.7s-28.4-20.5-43.7-11.7C83.4 349.4 64 380.4 64 416c0 53 43 96 96 96s96-43 96-96l0-160zm64 128c0 53 43 96 96 96s96-43 96-96c0-35.6-19.4-66.6-48-83.1c-15.3-8.8-34.9-3.6-43.7 11.7s-3.6 34.9 11.7 43.7c9.6 5.6 16 15.9 16 27.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-64 0 0 128z" />
    </Icon>
);

export default AirConditioner;