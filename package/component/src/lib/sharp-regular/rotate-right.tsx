
import { Icon } from "../../index";

/**
 * A component that renders the `rotate-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-right?s=sharp-regular rotate-right}
 * @preview ![rotate-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/rotate-right.svg)
 */
const RotateRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M372.2 123.8C341.2 96.5 300.5 80 256 80C158.8 80 80 158.8 80 256s78.8 176 176 176c39.7 0 76.2-13.1 105.6-35.2l28.8 38.4C353 463.3 306.4 480 256 480C132.3 480 32 379.7 32 256S132.3 32 256 32c57.8 0 110.5 21.9 150.2 57.8l15.9-15.9L456 40l33.9 33.9L496 80l0 96 0 48-48 0-96 0-6.1-6.1L312 184l33.9-33.9 26.3-26.3zm75.8-7.9L387.9 176l60.1 0 0-60.1z" />
    </Icon>
);

export default RotateRight;