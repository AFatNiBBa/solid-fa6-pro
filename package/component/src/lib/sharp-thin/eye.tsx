
import { Icon } from "../../index";

/**
 * A component that renders the `eye` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye?s=sharp-thin eye}
 * @preview ![eye](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/eye.svg)
 */
const Eye: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M106.9 384.5C62.9 342 32.6 291.4 17.3 256c15.2-35.4 45.5-86 89.6-128.5C153.5 82.7 214.2 48 288 48s134.5 34.7 181 79.5c44.1 42.5 74.4 93.1 89.6 128.5c-15.2 35.4-45.5 86-89.6 128.5C422.5 429.3 361.8 464 288 464s-134.5-34.7-181.1-79.5zM288 480c158.4 0 258-149.3 288-224C546 181.3 446.4 32 288 32S30 181.3 0 256c30 74.7 129.6 224 288 224zM192 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm208 0a112 112 0 1 0 -224 0 112 112 0 1 0 224 0z" />
    </Icon>
);

export default Eye;