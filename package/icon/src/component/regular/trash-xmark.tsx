
import { Icon } from "../../index";

/**
 * A component that renders the `trash-xmark` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-xmark?s=regular trash-xmark}
 * @preview ![trash-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/trash-xmark.svg)
 */
const TrashXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80l13.7 0L416 80l8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-11.6 0L388.4 452.7c-2.5 33.4-30.3 59.3-63.8 59.3l-201.1 0c-33.5 0-61.3-25.9-63.8-59.3L35.6 128 24 128c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48.1 0 13.7 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM83.7 128l23.8 321.2c.6 8.4 7.6 14.8 16 14.8l201.1 0c8.4 0 15.3-6.5 16-14.8L364.3 128 83.7 128zm62.2 81.9c7.8-7.8 20.5-7.8 28.3 0L224 259.7l49.9-49.9c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3L252.3 288l49.9 49.9c7.8 7.8 7.8 20.5 0 28.3s-20.5 7.8-28.3 0L224 316.3l-49.9 49.9c-7.8 7.8-20.5 7.8-28.3 0s-7.8-20.5 0-28.3L195.7 288l-49.9-49.9c-7.8-7.8-7.8-20.5 0-28.3z" />
    </Icon>
);

export default TrashXmark;