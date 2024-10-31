
import { Icon } from "../../index";

/**
 * A component that renders the `tractor` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tractor?s=sharp-solid tractor}
 * @preview ![tractor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tractor.svg)
 */
const Tractor: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 0l32 0L288 0l21.7 0 8 20.1 56 139.9L480 160l0-64 0-7.6 3.4-6.8 16-32 14.3-28.6 57.2 28.6L556.6 78.3 544 103.6l0 56.4 96 0 0 96-66.4 57c-14-5.8-29.4-9-45.6-9c-39.3 0-74.1 18.9-96 48l-80 0 0 32-40.2 0c-1.7 4.8-3.7 9.5-5.8 14.1l28.4 28.4-67.9 67.9L238.1 466c-4.6 2.2-9.3 4.1-14.1 5.8l0 40.2-96 0 0-40.2c-4.8-1.7-9.5-3.7-14.1-5.8L85.5 494.4 17.6 426.5 46 398.1c-2.2-4.6-4.1-9.3-5.8-14.1L0 384l0-96 40.2 0c1.7-4.8 3.7-9.5 5.8-14.1L17.6 245.5l67.9-67.9L96 188.1 96 160 96 32 96 0zM266.3 64L160 64l0 96 64 0 80.7 0L266.3 64zM176 256a80 80 0 1 0 0 160 80 80 0 1 0 0-160zM528 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 64c-48.6 0-88-39.4-88-88c0-29.8 14.8-56.1 37.4-72c14.3-10.1 31.8-16 50.6-16c5.7 0 11.3 .5 16.7 1.6l.1 0c40.6 7.8 71.2 43.5 71.2 86.4c0 48.6-39.4 88-88 88z" />
    </Icon>
);

export default Tractor;