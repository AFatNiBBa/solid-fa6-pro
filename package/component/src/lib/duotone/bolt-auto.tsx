
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bolt-auto` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-auto?s=duotone bolt-auto}
 * @preview ![bolt-auto](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bolt-auto.svg)
 */
const BoltAuto: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256c0 3.8 .7 7.6 2 11.2C6.7 279.7 18.7 288 32 288l111.5 0L66.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5C82.8 510 89.4 512 96 512c7.5 0 15.1-2.7 21.1-7.9l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L317.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5C301.2 2 294.6 0 288 0c-7.5 0-15.1 2.7-21.1 7.9l-256 224C3.8 238.1 0 247 0 256z" />
        <path d="M492.6 305.7C487.2 294.8 476.1 288 464 288s-23.2 6.8-28.6 17.7l-80 160c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3 88.4 0 7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-80-160zM480.2 424l-32.4 0L464 391.6 480.2 424z" />
    </Icon>
);

export default BoltAuto;