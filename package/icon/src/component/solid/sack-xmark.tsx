
import { Icon } from "../../index";

/**
 * A component that renders the `sack-xmark` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sack-xmark?s=solid sack-xmark}
 * @preview ![sack-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/sack-xmark.svg)
 */
const SackXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 96l128 0 47.4-71.1C374.5 14.2 366.9 0 354.1 0L157.9 0c-12.8 0-20.4 14.2-13.3 24.9L192 96zm128 32l-128 0c-3.8 2.5-8.1 5.3-13 8.4c0 0 0 0 0 0s0 0 0 0C122.3 172.7 0 250.9 0 416c0 53 43 96 96 96l320 0c53 0 96-43 96-96c0-165.1-122.3-243.3-179-279.6c-4.8-3.1-9.2-5.9-13-8.4zM289.9 336l47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47z" />
    </Icon>
);

export default SackXmark;