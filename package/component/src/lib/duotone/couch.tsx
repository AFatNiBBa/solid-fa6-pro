
import { Icon, generic } from "../../index";

/**
 * A component that renders the `couch` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/couch?s=duotone couch}
 * @preview ![couch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/couch.svg)
 */
const Couch: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 160l0 66.7c18.6 6.6 32 24.4 32 45.3l0 80 448 0 0-80c0-.7 0-1.3 0-1.9s.1-1.3 .1-1.9c.1-1.3 .3-2.5 .5-3.8c.4-2.5 1-4.9 1.8-7.3c1.5-4.7 3.8-9.1 6.6-13c5.7-7.9 13.7-14 23-17.3l0-66.7c0-70.7-57.3-128-128-128L192 32C121.3 32 64 89.3 64 160z" />
        <path d="M48 224c-26.5 0-48 21.5-48 48L0 448c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l448 0c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-176c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 80L96 352l0-80c0-26.5-21.5-48-48-48z" />
    </Icon>
);

export default Couch;