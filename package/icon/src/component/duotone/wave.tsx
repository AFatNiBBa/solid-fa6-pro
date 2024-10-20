
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wave` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave?s=duotone wave}
 * @preview ![wave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wave.svg)
 */
const Wave: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 410.6c35 0 66.1-10.8 87.1-20.3c3.2-1.4 6.1-2.9 8.9-4.3c2.8 1.4 5.8 2.8 8.9 4.3c20.9 9.5 52 20.3 87.1 20.3s66.1-10.8 87.1-20.3c3.2-1.4 6.1-2.9 8.9-4.3c2.8 1.4 5.8 2.8 8.9 4.3c20.9 9.5 52 20.3 87.1 20.3s66.1-10.8 87.1-20.3c3.2-1.4 6.1-2.9 8.9-4.3c2.8 1.4 5.8 2.8 8.9 4.3c21 9.5 52 20.3 87.1 20.3l0 36.6c.1 2.6-.2 5.4-.8 8.1c-4 17.2-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 469.7 417 480 384 480c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.6-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9c-.6-2.4-.8-4.9-.8-7.3l0-37.4z" />
        <path d="M0 336c0-17.7 14.3-32 32-32c35.3 0 64-28.7 64-64C96 125.1 189.1 32 304 32c84.7 0 157.6 50.7 190 123.2c4.7 10.5 1.3 22.8-8.1 29.4s-22.2 5.6-30.4-2.3C441 168.5 421.5 160 400 160c-44.2 0-80 35.8-80 80c0 35.3 28.7 64 64 64c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c15 3.5 25.1 17.1 24.7 31.9v41.9c-28.7 0-55.1-8.9-73.8-17.4c-5.5-2.5-10.3-5-14.5-7.2c-4.8-2.6-10.5-2.6-15.3 0c-4.2 2.3-9.1 4.8-14.5 7.2c-18.7 8.5-45.1 17.4-73.8 17.4s-55.1-8.9-73.8-17.4c-5.5-2.5-10.3-5-14.5-7.2c-4.8-2.6-10.5-2.6-15.3 0c-4.2 2.3-9.1 4.8-14.5 7.2c-18.7 8.5-45.1 17.4-73.8 17.4s-55.1-8.9-73.8-17.4c-5.5-2.5-10.3-5-14.5-7.2c-4.8-2.6-10.5-2.6-15.3 0c-4.2 2.3-9.1 4.8-14.5 7.2C55.1 369.7 28.7 378.6 0 378.6V336z" />
    </Icon>
);

export default Wave;