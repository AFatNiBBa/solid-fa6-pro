
import { Icon } from "../../index";

/**
 * A component that renders the `fork` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fork?s=sharp-thin fork}
 * @preview ![fork](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/fork.svg)
 */
const Fork: typeof Icon = x => (
    <Icon {...x}>
        <path d="M277.3 89L400.8 .8l11.5 11.5L286.6 102c-2.5 1.8-4.9 3.8-7 6l-7.6 7.6c-21.9 21.9-21.9 57.3 0 79.2L317.3 240c21.9 21.9 57.3 21.9 79.2 0l7.6-7.6c2.2-2.2 4.2-4.5 6-7L499.7 99.7l11.5 11.5L423 234.7c-2.3 3.2-4.9 6.3-7.7 9.1l-7.6 7.6c-28.1 28.1-73.7 28.1-101.8 0l-17-17L17.5 505.8l-5.7 5.7L.5 500.2l5.7-5.7L277.7 223l-17-17c-28.1-28.1-28.1-73.7 0-101.8l7.6-7.6c2.8-2.8 5.8-5.4 9.1-7.7zm28.9 60.2L433.8 33.8l11.3 11.3L317 161.1l-6.2 5.6-11.3-11.3 6.8-6.2zm39 52.1L466.9 66.9l11.3 11.3L356.6 212.6l-11.3-11.3z" />
    </Icon>
);

export default Fork;