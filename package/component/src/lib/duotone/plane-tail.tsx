
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-tail` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-tail?s=duotone plane-tail}
 * @preview ![plane-tail](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/plane-tail.svg)
 */
const PlaneTail: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.8 39L61.5 308.8c59.9-16.5 119.8-33.1 179.8-49.6c7.6-2.1 15.5-3.2 23.4-3.2L384 256 154.9 19.5C142.8 7 126.2 0 108.9 0L32 0C11.5 0-3.7 19 .8 39z" />
        <path d="M512 464l0-160 0-24 0-24-24 0-223.3 0c-7.9 0-15.8 1.1-23.4 3.2L45.9 313.1C18.8 320.5 0 345.2 0 373.4c0 26 16.1 49.3 40.4 58.5l196.1 74.4c10 3.8 20.5 5.7 31.2 5.7L488 512l24 0 0-24 0-24zM216 352l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default PlaneTail;