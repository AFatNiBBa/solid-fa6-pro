
import { Icon } from "../../index";

/**
 * A component that renders the `skull` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull?s=thin skull}
 * @preview ![skull](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/skull.svg)
 */
const Skull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M406.8 385.8c54.9-38.5 89.2-97 89.2-161.8C496 111.1 390.6 16 256 16S16 111.1 16 224c0 64.8 34.3 123.3 89.2 161.8c4.4 3.1 6.9 8.1 6.8 13.5l0 .8 0 64c0 17.7 14.3 32 32 32l40 0 0-48c0-4.4 3.6-8 8-8s8 3.6 8 8l0 48 48 0 0-48c0-4.4 3.6-8 8-8s8 3.6 8 8l0 48 48 0 0-48c0-4.4 3.6-8 8-8s8 3.6 8 8l0 48 40 0c17.7 0 32-14.3 32-32l0-64 0-.8c-.1-5.3 2.4-10.4 6.8-13.5zM312 512l-48 0-16 0-48 0-16 0-40 0c-26.5 0-48-21.5-48-48l0-64c0-.4 0-.7 0-1.1C37.5 357.8 0 294.7 0 224C0 100.3 114.6 0 256 0S512 100.3 512 224c0 70.7-37.5 133.8-96 174.9c0 .4 0 .7 0 1.1l0 64c0 26.5-21.5 48-48 48l-40 0-16 0zM208 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM96 256a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm256 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default Skull;