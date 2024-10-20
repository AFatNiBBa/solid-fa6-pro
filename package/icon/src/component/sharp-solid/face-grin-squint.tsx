
import { Icon } from "../../index";

/**
 * A component that renders the `face-grin-squint` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-squint?s=sharp-solid face-grin-squint}
 * @preview ![face-grin-squint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-grin-squint.svg)
 */
const FaceGrinSquint: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm.3-180.2c59.1 0 114.1-10.6 160.2-29C400.3 376.7 334.7 432 256.3 432s-144-55.3-160.2-129.2c46.2 18.3 101.2 29 160.2 29zM112 144l118.9 64L112 272l45.7-64L112 144zm169.1 64L400 144l-45.7 64L400 272 281.1 208z" />
    </Icon>
);

export default FaceGrinSquint;