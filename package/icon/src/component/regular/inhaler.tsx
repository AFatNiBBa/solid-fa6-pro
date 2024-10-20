
import { Icon } from "../../index";

/**
 * A component that renders the `inhaler` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inhaler?s=regular inhaler}
 * @preview ![inhaler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/inhaler.svg)
 */
const Inhaler: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M429.8 32.7l128 32c6.3 1.6 11.6 5.6 14.9 11.2s4.1 12.2 2.4 18.4L533.2 248 386.9 101.6l14-51.8c3.4-12.6 16.3-20.2 29-17zM389 216.9l-2.1 7.8C379.4 252.6 354 272 325.1 272L240 272l0 160 209.9 0 33-121.2-94-94zM530 290c4.1 4.1 5.6 10 4.1 15.5l-39.5 145C489.8 467.9 474 480 456 480l-224 0c-22.1 0-40-17.9-40-40l0-176c0-22.1 17.9-40 40-40l93.1 0c7.2 0 13.6-4.9 15.4-11.8L357 150.9c3.2-11.9 18.1-15.9 26.8-7.2L530 290zM0 256a32 32 0 1 1 64 0A32 32 0 1 1 0 256zm0 96a32 32 0 1 1 64 0A32 32 0 1 1 0 352zm128-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM0 448a32 32 0 1 1 64 0A32 32 0 1 1 0 448zm128-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Inhaler;