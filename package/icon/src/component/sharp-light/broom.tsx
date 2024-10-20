
import { Icon } from "../../index";

/**
 * A component that renders the `broom` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broom?s=sharp-light broom}
 * @preview ![broom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/broom.svg)
 */
const Broom: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M340 212L552 0l24 24L364 236l52 52 0 32-75.9 12.6 1.4 9.8c6.6 46.3-9 93-42 126c-27.8 27.8-65.6 43.5-105 43.5L32 512 0 512l0-32 64-64 32-32-32 0 0-2.5s0 0 0 0c0-3.7 .1-7.5 .4-11.2c.5-6.2 1.3-12.3 2.5-18.3c5.8-28.4 19.7-54.7 40.5-75.5c33.1-33.1 79.7-48.6 126-42l9.8 1.4L256 160l32 0 52 52zM306.3 322.3l-52.6-52.6L229 266.2c-36.3-5.2-72.9 7-98.9 33c-14.7 14.7-25.1 33-30.3 52.9l73.5 0-54.6 54.6L45.3 480l149.2 0c30.9 0 60.5-12.3 82.4-34.1c25.9-25.9 38.1-62.6 33-98.9l-3.5-24.7zm70.5-28.2l-94.9-94.9-7.2 43.5 58.7 58.7 43.5-7.2z" />
    </Icon>
);

export default Broom;