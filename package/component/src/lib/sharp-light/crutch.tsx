
import { Icon } from "../../index";

/**
 * A component that renders the `crutch` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crutch?s=sharp-light crutch}
 * @preview ![crutch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/crutch.svg)
 */
const Crutch: typeof Icon = x => (
    <Icon {...x}>
        <path d="M312 1.4L289.4 24l11.3 11.3 176 176L488 222.6 510.6 200l-11.3-11.3-176-176L312 1.4zM196.6 164.8l-47.9 47.9-3.4 3.4-1 4.8-31 155.2L12.7 476.7 1.4 488 24 510.6l11.3-11.3L135.9 398.7l155.2-31 4.8-1 3.4-3.4 48-48 94.1-94.1-22.6-22.6L336 281.4 230.6 176l82.7-82.7L290.7 70.6l-94 94-.1 .1-.1 .1zM208 198.6L313.4 304l-33.3 33.3L148.4 363.6l26.3-131.7L208 198.6z" />
    </Icon>
);

export default Crutch;