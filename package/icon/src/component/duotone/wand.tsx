
import { Icon } from "../../index";

/**
 * A component that renders the `wand` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand?s=duotone wand}
 * @preview ![wand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wand.svg)
 */
const Wand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M497 7c-9-9-23.5-9.4-33-.9L189.3 251.9c-2.9 2.6-6.7 4.1-10.7 4.1L144 256c-8.8 0-16 7.2-16 16l0 27.6c0 4.6-1.9 8.9-5.3 11.9L11.1 411.3C4 417.7 0 426.7 0 436.2c0 8.8 3.5 17.3 9.7 23.5l42.6 42.6c6.2 6.2 14.7 9.8 23.5 9.8c9.5 0 18.5-4 24.8-11.1L372.3 197.3c3-3.4 7.4-5.3 11.9-5.3l15.8 0c8.8 0 16-7.2 16-16l0-21.4c0-3.9 1.5-7.7 4.1-10.7L505.9 48c8.5-9.5 8.1-24-.9-33l-8-8z" />
    </Icon>
);

export default Wand;