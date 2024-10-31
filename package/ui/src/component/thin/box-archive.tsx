
import { Icon } from "../../index";

/**
 * A component that renders the `box-archive` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-archive?s=thin box-archive}
 * @preview ![box-archive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/box-archive.svg)
 */
const BoxArchive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 48L32 48c-8.8 0-16 7.2-16 16l0 48c0 8.8 7.2 16 16 16l16 0 416 0 16 0c8.8 0 16-7.2 16-16l0-48c0-8.8-7.2-16-16-16zm0 96l-16 0L48 144l-16 0c-17.7 0-32-14.3-32-32L0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32l0 48c0 17.7-14.3 32-32 32zM160 232c0-4.4 3.6-8 8-8l176 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-176 0c-4.4 0-8-3.6-8-8zm304-56l16 0 0 240c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-240 16 0 0 240c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-240z" />
    </Icon>
);

export default BoxArchive;