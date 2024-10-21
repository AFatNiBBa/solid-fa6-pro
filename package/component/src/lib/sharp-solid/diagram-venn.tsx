
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-venn` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-venn?s=sharp-solid diagram-venn}
 * @preview ![diagram-venn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/diagram-venn.svg)
 */
const DiagramVenn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 412.8C216.4 372.4 192 317 192 256s24.4-116.4 64-156.8C245.7 97.1 235 96 224 96C135.6 96 64 167.6 64 256s71.6 160 160 160c11 0 21.7-1.1 32-3.2zm64 45.7c-29.1 13.8-61.6 21.6-96 21.6C100.3 480 0 379.7 0 256S100.3 32 224 32c34.4 0 66.9 7.7 96 21.6C349.1 39.7 381.6 32 416 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-34.4 0-66.9-7.7-96-21.6zM370.7 192l-101.4 0c-6.5 14.9-10.8 31.1-12.5 48l126.4 0c-1.7-16.9-6-33.1-12.5-48zM269.3 320l101.4 0c6.5-14.9 10.8-31.1 12.5-48l-126.4 0c1.7 16.9 6 33.1 12.5 48zM288 352c9.1 12.1 19.9 22.9 32 32c12.1-9.1 22.9-19.9 32-32l-64 0zm64-192c-9.1-12.1-19.9-22.9-32-32c-12.1 9.1-22.9 19.9-32 32l64 0z" />
    </Icon>
);

export default DiagramVenn;