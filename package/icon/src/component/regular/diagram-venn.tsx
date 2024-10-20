
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-venn` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-venn?s=regular diagram-venn}
 * @preview ![diagram-venn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/diagram-venn.svg)
 */
const DiagramVenn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M270 425.9c-47.8-41.1-78-102-78-169.9s30.3-128.8 78-169.9c-14.7-4-30.1-6.1-46-6.1C126.8 80 48 158.8 48 256s78.8 176 176 176c15.9 0 31.4-2.1 46-6.1zM252 320l136 0c5.9-15.1 9.8-31.2 11.3-48l-158.6 0c1.5 16.8 5.4 32.9 11.3 48zm16.5 32c13.4 20.6 31 38.1 51.5 51.5c20.6-13.4 38.1-31 51.5-51.5l-103.1 0zM252 192c-5.9 15.1-9.8 31.2-11.3 48l158.6 0c-1.5-16.8-5.4-32.9-11.3-48l-136 0zm119.5-32c-13.4-20.6-31-38.1-51.5-51.5c-20.6 13.4-38.1 31-51.5 51.5l103.1 0zM320 458.4c-29.1 13.8-61.6 21.6-96 21.6C100.3 480 0 379.7 0 256S100.3 32 224 32c34.4 0 66.9 7.7 96 21.6C349.1 39.7 381.6 32 416 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-34.4 0-66.9-7.7-96-21.6z" />
    </Icon>
);

export default DiagramVenn;