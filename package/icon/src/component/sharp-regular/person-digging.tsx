
import { Icon } from "../../index";

/**
 * A component that renders the `person-digging` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-digging?s=sharp-regular person-digging}
 * @preview ![person-digging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person-digging.svg)
 */
const PersonDigging: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M304 64a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm48 352l-64 0-16 48-16 48 50.6 0L528 512l48 0 0-48L477.5 328.6 448 288l-30.1 40.2-17.5 23.3s0 0 0 0L308.1 313 254.5 167.7l-3.9-10.5-10.5-3.8-88-32-16.7-6.1-10.7 14.2L63.6 211.2l-22.4-9.3-22.2-9.2L.6 236.9l22.2 9.2 347.9 145L352 416zM109.3 230.2l43.2-57.6 60.8 22.1 34.3 93.1L109.3 230.2zM447.4 368.8L516.6 464 376 464l14.4-19.2 57-76zm-366-67.7L55.3 290l-6.6 27.6L1.9 512l49.4 0L88.7 356.4 176 393.5l0 94.5 0 24 48 0 0-24 0-110.4 0-15.9-14.6-6.2-128-54.4z" />
    </Icon>
);

export default PersonDigging;