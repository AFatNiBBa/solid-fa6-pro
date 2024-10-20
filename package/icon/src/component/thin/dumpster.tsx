
import { Icon } from "../../index";

/**
 * A component that renders the `dumpster` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumpster?s=thin dumpster}
 * @preview ![dumpster](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/dumpster.svg)
 */
const Dumpster: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M39.9 58.9C42.1 52.4 48.2 48 55.1 48l92.7 0-24 96-96.2 0c-6.4 0-11.5-5.2-11.5-11.5c0-1.2 .2-2.5 .6-3.6L39.9 58.9zM164.2 48L280 48l0 96-139.8 0 24-96zM296 48l115.8 0 24 96L296 144l0-96zm132.2 0l92.7 0c6.9 0 13 4.4 15.2 10.9l23.3 69.9 15.2-5.1L551.3 53.9C546.9 40.8 534.7 32 520.9 32L55.1 32c-13.8 0-26 8.8-30.4 21.9L1.4 123.8c-.9 2.8-1.4 5.7-1.4 8.7C0 147.7 12.3 160 27.5 160l520.9 0c15.2 0 27.5-12.3 27.5-27.5c0-3-.5-5.9-1.4-8.7l-15.2 5.1c.4 1.2 .6 2.4 .6 3.6c0 6.4-5.2 11.5-11.5 11.5l-96.2 0-24-96zM47.9 198.9c-.6-4.4-4.7-7.4-9.1-6.8s-7.4 4.7-6.8 9.1L38.8 248 8 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l33.1 0 23 161.1c.6 3.9 3.9 6.9 7.9 6.9l24 0 0 40c0 4.4 3.6 8 8 8s8-3.6 8-8l0-40 352 0 0 40c0 4.4 3.6 8 8 8s8-3.6 8-8l0-40 24 0c4 0 7.4-2.9 7.9-6.9l23-161.1 33.1 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-30.8 0 6.7-46.9c.6-4.4-2.4-8.4-6.8-9.1s-8.4 2.4-9.1 6.8l-8 55.9 0 .3-23 161L472 416l-368 0-25.1 0-23-161 0-.3-8-55.9z" />
    </Icon>
);

export default Dumpster;