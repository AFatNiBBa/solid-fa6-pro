
import { Icon } from "../../index";

/**
 * A component that renders the `potato` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/potato?s=sharp-regular potato}
 * @preview ![potato](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/potato.svg)
 */
const Potato: typeof Icon = x => (
    <Icon {...x}>
        <path d="M129.9 241.9l4.2-4.2 3-5.1L179 163l69.7-41.8 5.1-3 4.2-4.2L294.9 77c18.6-18.6 43.8-29 70.1-29c54.7 0 99.1 44.4 99.1 99.1c0 26.3-10.4 51.5-29 70.1l-4.9 4.9-4.8 4.8-3.3 5.9L350 362.3l-96.9 41.5-8.5 3.6-6.5 6.5L217.1 435c-18.6 18.6-43.8 29-70.1 29C92.4 464 48 419.6 48 364.9c0-26.3 10.4-51.5 29-70.1l52.9-52.9zM224 80l-80 48L96 208 43.1 260.9C15.5 288.5 0 325.9 0 364.9C0 446.2 65.8 512 147.1 512c39 0 76.4-15.5 104-43.1L272 448l112-48 80-144 4.9-4.9c27.6-27.6 43.1-65 43.1-104C512 65.8 446.2 0 364.9 0c-39 0-76.4 15.5-104 43.1L224 80zm152 88l-48 0 0 48 48 0 0-48zM216 232l-48 0 0 48 48 0 0-48zM136 360l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default Potato;