
import { Icon } from "../../index";

/**
 * A component that renders the `trash-list` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-list?s=sharp-light trash-list}
 * @preview ![trash-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/trash-list.svg)
 */
const TrashList: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 0l-8.9 0-4.7 7.5L111.1 64 64.1 64 32 64 0 64 0 96l34.3 0L64 512l288 0L381.7 96 416 96l0-32-32 0-32.1 0-47.1 0L269.6 7.5 264.9 0 256 0 160 0zM267.1 64L148.9 64l20-32 78.3 0 20 32zM93.8 480L66.4 96l283.3 0L322.2 480 93.8 480zM640 128l-192 0 0 32 192 0 0-32zM608 256l-160 0 0 32 160 0 0-32zM448 384l0 32 96 0 0-32-96 0z" />
    </Icon>
);

export default TrashList;