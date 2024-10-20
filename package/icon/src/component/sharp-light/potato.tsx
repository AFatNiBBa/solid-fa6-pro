
import { Icon } from "../../index";

/**
 * A component that renders the `potato` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/potato?s=sharp-light potato}
 * @preview ![potato](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/potato.svg)
 */
const Potato: typeof Icon = x => (
    <Icon {...x}>
        <path d="M118.6 230.6l2.8-2.8 2-3.4 43.9-73.1 73.1-43.9 3.4-2 2.8-2.8 36.9-36.9C305.1 44.1 334.4 32 364.9 32C428.5 32 480 83.5 480 147.1c0 30.5-12.1 59.8-33.7 81.4l-4.9 4.9-3.2 3.2-2.2 3.9L361.3 374.9 259.4 418.6l-5.7 2.4-4.4 4.4-20.9 20.9c-21.6 21.6-50.9 33.7-81.4 33.7C83.5 480 32 428.5 32 364.9c0-30.5 12.1-59.8 33.7-81.4l52.9-52.9zM224 80l-80 48L96 208 43.1 260.9C15.5 288.5 0 325.9 0 364.9C0 446.2 65.8 512 147.1 512c39 0 76.4-15.5 104-43.1L272 448l112-48 80-144 4.9-4.9c27.6-27.6 43.1-65 43.1-104C512 65.8 446.2 0 364.9 0c-39 0-76.4 15.5-104 43.1L224 80zm112 96l0 32 32 0 0-32-32 0zM208 240l-32 0 0 32 32 0 0-32zM176 368l-32 0 0 32 32 0 0-32z" />
    </Icon>
);

export default Potato;