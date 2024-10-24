
import { Icon } from "../../index";

/**
 * A component that renders the `potato` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/potato?s=sharp-thin potato}
 * @preview ![potato](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/potato.svg)
 */
const Potato: typeof Icon = x => (
    <Icon {...x}>
        <path d="M107.3 219.3l1.4-1.4 1-1.7 45.9-76.6 76.6-45.9 1.7-1 1.4-1.4 36.9-36.9C296.8 29.8 330.2 16 364.9 16C437.3 16 496 74.7 496 147.1c0 34.8-13.8 68.1-38.4 92.7l-4.9 4.9-1.6 1.6-1.1 2L372.7 387.4l-107 45.8-2.8 1.2-2.2 2.2-20.9 20.9c-24.6 24.6-57.9 38.4-92.7 38.4C74.7 496 16 437.3 16 364.9c0-34.8 13.8-68.1 38.4-92.7l52.9-52.9zM224 80l-80 48L96 208 43.1 260.9C15.5 288.5 0 325.9 0 364.9C0 446.2 65.8 512 147.1 512c39 0 76.4-15.5 104-43.1L272 448l112-48 80-144 4.9-4.9c27.6-27.6 43.1-65 43.1-104C512 65.8 446.2 0 364.9 0c-39 0-76.4 15.5-104 43.1L224 80zm128 80l0 24 24 0 0-24-24 0zM184 224l-24 0 0 24 24 0 0-24zM152 384l-24 0 0 24 24 0 0-24z" />
    </Icon>
);

export default Potato;