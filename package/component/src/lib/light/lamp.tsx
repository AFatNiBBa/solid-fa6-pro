
import { Icon } from "../../index";

/**
 * A component that renders the `lamp` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp?s=light lamp}
 * @preview ![lamp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/lamp.svg)
 */
const Lamp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M112 32L32 224l384 0L336 32 112 32zM82.5 19.7C87.4 7.8 99.1 0 112 0L336 0c12.9 0 24.6 7.8 29.5 19.7l80 192c4.1 9.9 3 21.2-2.9 30.1s-15.9 14.2-26.6 14.2L32 256c-10.7 0-20.7-5.3-26.6-14.2s-7-20.2-2.9-30.1l80-192zM160 312.2l0-24.2 32 0 0 24.2c0 14.8-6.7 27.8-16.5 36.6c-6.8 6.1-19.3 18.4-29.8 34.1C135 398.9 128 415.8 128 432c0 17.1 5.8 31.8 12.1 42.6c1 1.7 4.8 5.4 14.4 5.4l139 0c9.7 0 13.5-3.7 14.4-5.4c6.3-10.8 12.1-25.5 12.1-42.6c0-16.2-7-33.1-17.7-49.1c-10.5-15.7-23-28-29.8-34.1c-9.8-8.8-16.5-21.8-16.5-36.6l0-24.2 32 0 0 24.2c0 4.9 2.2 9.5 5.9 12.8C309.7 339.3 352 382 352 432c0 24.4-8.3 44.6-16.4 58.7c-8.5 14.7-25.2 21.3-42.1 21.3l-139 0c-17 0-33.6-6.6-42.1-21.3C104.3 476.6 96 456.4 96 432c0-50 42.3-92.7 58.1-107c3.6-3.3 5.9-7.9 5.9-12.8z" />
    </Icon>
);

export default Lamp;