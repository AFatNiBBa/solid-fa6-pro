
import { Icon } from "../../index";

/**
 * A component that renders the `merge` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/merge?s=sharp-light merge}
 * @preview ![merge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/merge.svg)
 */
const Merge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64l16 0 80 0 64 0 8.1 0 4.8 6.6L296.1 240l153.2 0-52.7-52.7L385.4 176 408 153.4l11.3 11.3L494.6 240l1.4 0 0 1.4 3.3 3.3L510.6 256l-11.3 11.3-3.3 3.3 0 1.4-1.4 0-75.3 75.3L408 358.6 385.4 336l11.3-11.3L449.4 272l-153.2 0L172.9 441.4l-4.8 6.6-8.1 0-64 0-80 0L0 448l0-32 16 0 80 0 55.9 0L268.2 256 151.9 96 96 96 16 96 0 96 0 64z" />
    </Icon>
);

export default Merge;