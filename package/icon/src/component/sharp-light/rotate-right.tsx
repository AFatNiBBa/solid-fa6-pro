
import { Icon } from "../../index";

/**
 * A component that renders the `rotate-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-right?s=sharp-light rotate-right}
 * @preview ![rotate-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/rotate-right.svg)
 */
const RotateRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 64c48.9 0 93.6 18.3 127.5 48.5l-32.9 32.9L328 168l22.6 22.6L352 192l96 0 32 0 0-32 0-96-1.4-1.4L456 40 433.4 62.6 406.2 89.8C366.5 53.9 313.8 32 256 32C132.3 32 32 132.3 32 256s100.3 224 224 224c86.4 0 161.4-49 198.8-120.6l-28.4-14.8C394.3 406.1 330.1 448 256 448C150 448 64 362 64 256S150 64 256 64zm192 96l-66.7 0L448 93.3l0 66.7z" />
    </Icon>
);

export default RotateRight;