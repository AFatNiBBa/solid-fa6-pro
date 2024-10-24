
import { Icon } from "../../index";

/**
 * A component that renders the `ribbon` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ribbon?s=sharp-thin ribbon}
 * @preview ![ribbon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ribbon.svg)
 */
const Ribbon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M232 16l67.8 0L376 130.4l0 63.4-56.5 59.6 10.8 11.9 59.5-62.7 2.2-2.3 0-3.2 0-69 0-2.4-1.3-2L310.7 3.6 308.4 0l-4.3 0L224 0s0 0 0 0L144 0l-4.3 0-2.4 3.6-79.9 120-1.3 2 0 2.4 0 69 0 3.2 2.2 2.3L346.2 506.3l4.6 4.9 5.6-3.7 80-52.8 7.8-5.2-6.3-6.9L160.1 137.9l0-33.9 63.9 0 16 0 48 0 0 33.9-36.9 40.5 10.8 11.9 40-43.8 2.1-2.3 0-3.1 0-45 0-8-8 0-56 0-16 0-71.9 0-8 0 0 8 0 45 0 3.1 2.1 2.3L419.8 446.5l-66.6 44L72.1 193.8l0-63.4L148.3 16 232 16s0 0 0 0zM118.3 324L10.2 442.6l-6.3 6.9 7.8 5.2 80 52.8 5.6 3.7 4.6-4.9 94.6-99.8-11-11.6L94.9 490.4l-66.6-44 101-110.8-11-11.6z" />
    </Icon>
);

export default Ribbon;