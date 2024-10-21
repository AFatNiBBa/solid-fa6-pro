
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-venn` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-venn?s=sharp-light diagram-venn}
 * @preview ![diagram-venn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/diagram-venn.svg)
 */
const DiagramVenn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 448C118 448 32 362 32 256S118 64 224 64c21.5 0 42.1 3.5 61.4 10C228.8 114.7 192 181 192 256s36.8 141.3 93.4 182c-19.3 6.5-39.9 10-61.4 10zM415.3 240l-190.7 0c1.4-16.7 4.9-32.8 10.3-48l170.2 0c5.4 15.2 8.9 31.3 10.3 48zM224.7 272l190.7 0c-1.4 16.7-4.9 32.8-10.3 48l-170.2 0c-5.4-15.2-8.9-31.3-10.3-48zm25 80l140.6 0c-16.9 29.1-41.2 53.5-70.3 70.3c-29.1-16.9-53.5-41.2-70.3-70.3zm0-192c16.9-29.1 41.2-53.5 70.3-70.3c29.1 16.9 53.5 41.2 70.3 70.3l-140.6 0zM224 480c34.4 0 66.9-7.7 96-21.6c29.1 13.8 61.6 21.6 96 21.6c123.7 0 224-100.3 224-224S539.7 32 416 32c-34.4 0-66.9 7.7-96 21.6C290.9 39.7 258.4 32 224 32C100.3 32 0 132.3 0 256S100.3 480 224 480zM416 64c106 0 192 86 192 192s-86 192-192 192c-21.5 0-42.1-3.5-61.4-10C411.2 397.3 448 331 448 256s-36.8-141.3-93.4-182c19.3-6.5 39.9-10 61.4-10z" />
    </Icon>
);

export default DiagramVenn;