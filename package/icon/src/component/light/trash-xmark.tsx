
import { Icon } from "../../index";

/**
 * A component that renders the `trash-xmark` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-xmark?s=light trash-xmark}
 * @preview ![trash-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/trash-xmark.svg)
 */
const TrashXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M164.2 39.5L148.9 64l150.3 0L283.8 39.5c-2.9-4.7-8.1-7.5-13.6-7.5l-92.5 0c-5.5 0-10.6 2.8-13.6 7.5zM311 22.6L336.9 64l47.1 0L416 64l16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-18.3 0L388.2 452.6C385.9 486.1 358 512 324.4 512l-200.8 0c-33.6 0-61.4-25.9-63.8-59.4L34.3 96 16 96C7.2 96 0 88.8 0 80s7.2-16 16-16l16 0 32.1 0 47.1 0L137 22.6C145.8 8.5 161.2 0 177.7 0l92.5 0c16.6 0 31.9 8.5 40.7 22.6zM66.4 96L91.7 450.3C92.9 467 106.8 480 123.6 480l200.8 0c16.8 0 30.7-13 31.9-29.7L381.6 96 66.4 96zm82.3 116.7c6.2-6.2 16.4-6.2 22.6 0L224 265.4l52.7-52.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L246.6 288l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L224 310.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L201.4 288l-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6z" />
    </Icon>
);

export default TrashXmark;