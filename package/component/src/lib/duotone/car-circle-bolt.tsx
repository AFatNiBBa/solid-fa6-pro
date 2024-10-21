
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-circle-bolt` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-circle-bolt?s=duotone car-circle-bolt}
 * @preview ![car-circle-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/car-circle-bolt.svg)
 */
const CarCircleBolt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256L0 400l0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48 226.9 0c-1.9-10.4-2.9-21.1-2.9-32c0-88.8 65.8-162.3 151.3-174.3L437.2 96.3C423.7 57.8 387.4 32 346.6 32L165.4 32c-40.8 0-77.1 25.8-90.6 64.3L39.6 196.8C16.4 206.4 0 229.3 0 256zm128 32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-18.9-96l26.1-74.6c4.5-12.8 16.6-21.4 30.2-21.4l181.2 0c13.6 0 25.7 8.6 30.2 21.4L402.9 192l-293.8 0z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm194.5-66.2c2.8-5 1.7-11.1-2.6-14.9s-10.6-4-15.1-.6l-96 72c-4.1 3.1-5.8 8.5-4.2 13.4s6.2 8.2 11.4 8.2l35.6 0-30.1 54.2c-2.8 5-1.7 11.1 2.6 14.9s10.6 4 15.1 .6l96-72c4.1-3.1 5.8-8.5 4.2-13.4s-6.2-8.2-11.4-8.2l-35.6 0 30.1-54.2z" />
    </Icon>
);

export default CarCircleBolt;