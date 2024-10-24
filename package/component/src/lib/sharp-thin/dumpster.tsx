
import { Icon } from "../../index";

/**
 * A component that renders the `dumpster` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumpster?s=sharp-thin dumpster}
 * @preview ![dumpster](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/dumpster.svg)
 */
const Dumpster: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 160l16.5 0 543 0 16.5 0-4-16L544 32 32 32 4 144 0 160zm20.5-16l24-96 103.3 0-24 96L20.5 144zM411.8 48l24 96-295.5 0 24-96L280 48l0 96 16 0 0-96 115.8 0zm40.5 96l-24-96 103.3 0 24 96-103.3 0zM0 248l0 16 8 0 33.1 0 23 161.1 1 6.9 6.9 0 24 0 0 40 0 8 16 0 0-8 0-40 352 0 0 40 0 8 16 0 0-8 0-40 24 0 6.9 0 1-6.9 23-161.1 33.1 0 8 0 0-16-8 0-30.8 0 6.7-46.9 1.3-9.1-16.2 0-1 6.9L497.1 416 480 416l-16 0-352 0-16 0-17.1 0-31-217.1-1-6.9-16.2 0 1.3 9.1L38.8 248 8 248l-8 0z" />
    </Icon>
);

export default Dumpster;