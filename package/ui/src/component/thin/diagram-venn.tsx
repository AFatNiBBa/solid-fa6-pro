
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-venn` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-venn?s=thin diagram-venn}
 * @preview ![diagram-venn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/diagram-venn.svg)
 */
const DiagramVenn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 464C109.1 464 16 370.9 16 256S109.1 48 224 48c27.6 0 53.9 5.4 78 15.1c-65.9 39-110 110.8-110 192.9s44.2 153.9 110 192.9c-24.1 9.8-50.4 15.1-78 15.1zM431.8 248l-223.7 0c1-25.4 6.5-49.7 15.8-72l192.1 0c9.3 22.3 14.8 46.6 15.8 72zM416 336.1l0-.1-192 0 0 .1c-9.3-22.3-14.9-46.7-15.8-72.1l223.7 0c-1 25.5-6.5 49.8-15.8 72.1zM408.6 352c-19.7 37.8-50.7 68.8-88.6 88.6c-37.8-19.7-68.8-50.7-88.6-88.6l177.1 0zM231.4 160c19.7-37.8 50.7-68.8 88.6-88.6c37.8 19.7 68.8 50.7 88.6 88.6l-177.1 0zM224 480c34.4 0 66.9-7.7 96-21.6c29.1 13.8 61.6 21.6 96 21.6c123.7 0 224-100.3 224-224S539.7 32 416 32c-34.4 0-66.9 7.7-96 21.6C290.9 39.7 258.4 32 224 32C100.3 32 0 132.3 0 256S100.3 480 224 480zM416 48c114.9 0 208 93.1 208 208s-93.1 208-208 208c-27.6 0-53.9-5.4-78-15.1c65.9-39 110-110.8 110-192.9s-44.2-153.9-110-192.9C362.1 53.4 388.4 48 416 48z" />
    </Icon>
);

export default DiagramVenn;