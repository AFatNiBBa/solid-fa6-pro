
import { Icon } from "../../index";

/**
 * A component that renders the `dumpster` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumpster?s=light dumpster}
 * @preview ![dumpster](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/dumpster.svg)
 */
const Dumpster: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M423.4 32L288 32s0 0 0 0s0 0 0 0L152.3 32c-.2 0-.4 0-.6 0L57 32c-14.7 0-27.5 10-31 24.2L.9 156.6c-.6 2.3-.9 4.6-.9 6.9C0 179.2 12.8 192 28.5 192l5.3 0L66 192l61.7 0 .6 0L288 192l159.7 0 .6 0 61.7 0 32.2 0 5.3 0c15.7 0 28.5-12.8 28.5-28.5c0-2.3-.3-4.7-.9-6.9L550.1 56.2C546.5 42 533.7 32 519 32l-95 0c-.2 0-.4 0-.6 0zM37.5 224l3.8 32L16 256c-8.8 0-16 7.2-16 16s7.2 16 16 16l29.1 0L64 448.9 64 464c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16 384 0 0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-15.1L530.9 288l29.1 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-25.3 0 3.8-32-32.2 0L483.7 416 92.3 416 69.8 224l-32.2 0zm490.2-64l-66.5 0L443 64l76 0 24 96-14.8 0-.4 0zM410.4 64l18.2 96L304 160l0-96 106.4 0zM272 64l0 96-124.7 0 18-96L272 64zM132.7 64l-18 96-66.5 0-.4 0L33 160 57 64l75.7 0z" />
    </Icon>
);

export default Dumpster;