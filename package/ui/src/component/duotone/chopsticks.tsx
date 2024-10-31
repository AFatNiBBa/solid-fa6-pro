
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chopsticks` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chopsticks?s=duotone chopsticks}
 * @preview ![chopsticks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chopsticks.svg)
 */
const Chopsticks: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 496c0 4.7 2.1 9.4 6.1 12.6C9 510.9 12.5 512 16 512c4.7 0 9.4-2.1 12.6-6.1c89.3-101.4 178.5-202.7 267.8-304c-20.2-16.1-40.3-32.3-60.5-48.4C158.4 264.4 80.9 375.2 3.4 486.1C1.1 489 0 492.5 0 496zm131.9 10.4c5.8 6.7 15.9 7.5 22.6 1.7c106-81.3 211.9-162.6 317.9-243.9c-17.8-17.8-35.5-35.5-53.2-53.2L133.6 483.9c-6.7 5.8-7.5 15.8-1.7 22.6z" />
        <path d="M296.3 201.9l-60.5-48.4L330.3 18.3C339 7.2 352.7 0 368 0c26.5 0 48 21.5 48 48c0 11.2-3.8 21.5-10.3 29.7L296.3 201.9zm175.9 62.4L419 211 560.8 75.6C569.2 68.4 580.1 64 592 64c26.5 0 48 21.5 48 48c0 14.6-6.5 27.6-16.8 36.4l-151 115.8z" />
    </Icon>
);

export default Chopsticks;