
import { Icon } from "../../index";

/**
 * A component that renders the `dolly` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolly?s=sharp-thin dolly}
 * @preview ![dolly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/dolly.svg)
 */
const Dolly: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M8 0L0 0 0 16l8 0 106.1 0L231.5 388.9C208.3 398.5 192 421.3 192 448c0 35.3 28.7 64 64 64s64-28.7 64-64c0-6.4-.9-12.6-2.7-18.5l253.1-77.9 7.6-2.4L573.3 334l-7.6 2.4L310.7 414.8C299.5 396.3 279.2 384 256 384c-3.1 0-6.1 .2-9 .6L127.6 5.6c-1-3.3-4.1-5.6-7.6-5.6L8 0zM256 400a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM356.7 164.1l2.3 7.7 15.3-4.7-2.3-7.7-16.4-53.5 84.2-25.7 56.1 183.6L312.3 319.9 256.1 136.3l84.2-25.7 16.4 53.5zM236.2 125.6l4.7 15.3L297 324.6l4.7 15.3 15.3-4.7L500.6 279l15.3-4.7-4.7-15.3L455 75.5l-4.7-15.3-15.3 4.7L251.5 121l-15.3 4.7z" />
    </Icon>
);

export default Dolly;