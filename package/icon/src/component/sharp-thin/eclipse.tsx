
import { Icon } from "../../index";

/**
 * A component that renders the `eclipse` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eclipse?s=sharp-thin eclipse}
 * @preview ![eclipse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/eclipse.svg)
 */
const Eclipse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M164.3 7.7L256 57.1 347.7 7.7 362 0l4.7 15.6L381.5 65c-5 2.1-9.8 4.5-14.6 7L352.3 23.4 263.6 71.2 256 75.3l-7.6-4.1L159.7 23.4l-29 96.6-2.5 8.3-8.3 2.5-96.6 29 47.8 88.8 4.1 7.6-4.1 7.6L23.4 352.3l96.6 29 8.3 2.5 2.5 8.3 29 96.6 88.8-47.8 7.6-4.1 7.6 4.1 88.8 47.8L366.9 440c4.8 2.5 9.6 4.9 14.6 7l-14.8 49.3L362 512l-14.4-7.7L256 454.9l-91.7 49.4L150 512l-4.7-15.6-29.9-99.7L15.6 366.7 0 362l7.7-14.4L57.1 256 7.7 164.3 0 150l15.6-4.7 99.7-29.9 29.9-99.7L150 0l14.4 7.7zM256 144c10.4 0 20.6 1.4 30.1 4.1c-2.9 4.7-5.5 9.5-8 14.5c-7.1-1.7-14.5-2.6-22.1-2.6c-53 0-96 43-96 96s43 96 96 96c7.6 0 15-.9 22.1-2.6c2.5 4.9 5.2 9.8 8 14.5c-9.6 2.7-19.7 4.1-30.1 4.1c-61.9 0-112-50.1-112-112s50.1-112 112-112zM624 256a160 160 0 1 0 -320 0 160 160 0 1 0 320 0zm-336 0a176 176 0 1 1 352 0 176 176 0 1 1 -352 0z" />
    </Icon>
);

export default Eclipse;