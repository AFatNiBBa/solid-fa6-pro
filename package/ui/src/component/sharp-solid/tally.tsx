
import { Icon } from "../../index";

/**
 * A component that renders the `tally` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tally?s=sharp-solid tally}
 * @preview ![tally](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tally.svg)
 */
const Tally: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 32l0 32 0 214.5 64-22.6L224 64l0-32 64 0 0 32 0 169.4 64-22.6L352 64l0-32 64 0 0 32 0 124.2 64-22.6L480 64l0-32 64 0 0 32 0 79 37.4-13.2 30.2-10.7 21.3 60.4-30.2 10.7L544 210.9 544 448l0 32-64 0 0-32 0-214.5-64 22.6L416 448l0 32-64 0 0-32 0-169.4-64 22.6L288 448l0 32-64 0 0-32 0-124.2-64 22.6L160 448l0 32-64 0 0-32 0-79L58.6 382.2 28.5 392.8 7.2 332.5l30.2-10.6L96 301.1 96 64l0-32 64 0z" />
    </Icon>
);

export default Tally;