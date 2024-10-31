
import { Icon } from "../../index";

/**
 * A component that renders the `sleigh` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sleigh?s=thin sleigh}
 * @preview ![sleigh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/sleigh.svg)
 */
const Sleigh: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8l24 0 0 208c0 70.7 57.3 128 128 128l0 80L40 464c-4.4 0-8 3.6-8 8s3.6 8 8 8l536 0c35.3 0 64-28.7 64-64l0-24c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 24c0 26.5-21.5 48-48 48l-144 0 0-80 16 0c70.7 0 128-57.3 128-128l0-144 24 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0-16 0-8 0-48 0c-22.1 0-40 17.9-40 40l0 47.3c0 31.3-25.5 56.7-56.8 56.7c-83.1 0-159.8-45.7-199.2-118.9C178.4 66.2 121.1 32 58.8 32L48 32 32 32 8 32zM416 464l-240 0 0-80 240 0 0 80zM552 112l8 0 0 144c0 61.9-50.1 112-112 112l-288 0C98.1 368 48 317.9 48 256L48 48l10.8 0c56.5 0 108.4 31 135.2 80.7C236.1 207.1 318.2 256 407.2 256c40.1 0 72.8-32.5 72.8-72.7l0-47.3c0-13.3 10.7-24 24-24l48 0z" />
    </Icon>
);

export default Sleigh;