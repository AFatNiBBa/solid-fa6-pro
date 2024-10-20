
import { Icon } from "../../index";

/**
 * A component that renders the `dollar-sign` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dollar-sign?s=sharp-light dollar-sign}
 * @preview ![dollar-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/dollar-sign.svg)
 */
const DollarSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M176 16l0-16L144 0l0 16 0 47.5c-6.3 .1-12.6 .3-18.8 .9c-24 2-47.9 7.8-67.4 20.6C37.7 98.1 23.2 118 17.9 146c-3.8 20.3-1.9 38.2 5.7 53.7C31 215 43.1 226.5 57.1 235.4c26.7 17 63.6 26.7 97.2 35.5l1.7 .4c35.7 9.4 67.8 17.9 89.8 31.9c10.6 6.8 17.8 14.2 21.9 22.6c4 8.3 5.8 19 3 33.8c-3.9 20.7-18.4 36.4-42.9 46c-24.9 9.8-59.1 12.6-98 7c-24.4-3.6-61-12.1-91.3-25.2l-14.7-6.3L11 410.6l14.7 6.3c33.6 14.5 73.1 23.5 99.3 27.4c0 0 .1 0 .1 0c6.4 .9 12.7 1.6 18.9 2.1l0 49.5 0 16 32 0 0-16 0-48.6c23.2-.7 44.8-4.7 63.4-11.9c32-12.5 56.2-35.7 62.7-69.9c3.8-20.3 1.9-38.2-5.7-53.7c-7.4-15.3-19.6-26.8-33.5-35.6c-26.7-17-63.6-26.7-97.2-35.5l-1.7-.4c-35.7-9.4-67.8-17.9-89.8-31.9c-10.6-6.8-17.8-14.2-21.9-22.6c-4-8.3-5.8-19-3-33.8c3.6-19.3 13.1-31.8 26-40.2c13.4-8.8 31.5-13.7 52.6-15.5c42.3-3.5 91.3 6 124.3 14l15.5 3.8 7.6-31.1-15.5-3.8c-21.9-5.3-52.1-11.7-83.8-14.4L176 16z" />
    </Icon>
);

export default DollarSign;