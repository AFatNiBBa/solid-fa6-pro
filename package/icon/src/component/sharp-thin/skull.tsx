
import { Icon } from "../../index";

/**
 * A component that renders the `skull` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull?s=sharp-thin skull}
 * @preview ![skull](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/skull.svg)
 */
const Skull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M406.8 385.8c54.9-38.5 89.2-97 89.2-161.8C496 111.1 390.6 16 256 16S16 111.1 16 224c0 64.8 34.3 123.3 89.2 161.8l6.8 4.8 0 8.3 0 97.1 72 0 0-48 0-8 16 0 0 8 0 48 48 0 0-48 0-8 16 0 0 8 0 48 48 0 0-48 0-8 16 0 0 8 0 48 72 0 0-97.1 0-8.3 6.8-4.8zM312 512l-48 0-16 0-48 0-16 0-72 0-16 0 0-16 0-97.1C37.5 357.8 0 294.7 0 224C0 100.3 114.6 0 256 0S512 100.3 512 224c0 70.7-37.5 133.8-96 174.9l0 97.1 0 16-16 0-72 0-16 0zM208 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM96 256a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm256 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default Skull;