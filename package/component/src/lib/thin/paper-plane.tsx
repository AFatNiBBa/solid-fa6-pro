
import { Icon } from "../../index";

/**
 * A component that renders the `paper-plane` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane?s=thin paper-plane}
 * @preview ![paper-plane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/paper-plane.svg)
 */
const PaperPlane: typeof Icon = x => (
    <Icon {...x}>
        <path d="M403.7 477.5L289.5 429.9l-37.7 65.9c-7.2 12.6-22 18.8-36 15.1s-23.8-16.4-23.8-30.9l0-90.7L19.7 317.5C8.4 312.8 .8 302.2 .1 290s5.5-23.7 16.1-29.8l7.9 13.9c-5.3 3-8.4 8.8-8 14.9s4.2 11.4 9.8 13.8l168.9 70.4L479.6 16c-2.6 .1-5.2 .8-7.6 2.1l-448 256-7.9-13.9 448-256c8.3-4.7 18-5.5 26.7-2.3c2.5 .9 5 2.2 7.3 3.7c1.3 .9 2.5 1.8 3.6 2.8c.9 .8 1.7 1.6 2.4 2.5c6.1 7 9 16.5 7.5 25.9l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6zm-193.6-98l85.5 35.6c0 0 0 0 .1 0l114.2 47.6c4.5 1.9 9.7 1.6 14-.8s7.2-6.7 8-11.5l64-416c.6-3.7-.2-7.4-2-10.5L210.1 379.5zM208 396l0 84c0 7.3 4.9 13.6 11.9 15.5s14.4-1.2 18-7.5l36.7-64.2L208 396z" />
    </Icon>
);

export default PaperPlane;