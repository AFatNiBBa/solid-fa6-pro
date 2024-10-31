
import { Icon } from "../../index";

/**
 * A component that renders the `piano` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano?s=solid piano}
 * @preview ![piano](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/piano.svg)
 */
const Piano: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 192L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-120.4c0-24.2-13.7-46.4-35.4-57.2l-58.4-29.2c-21-10.5-34.2-31.9-34.2-55.4C384 83.2 300.8 0 198.3 0L192 0C86 0 0 86 0 192zM416 352l32 0 0 96L64 448l0-96 32 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 32 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 32 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 64 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 32 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48z" />
    </Icon>
);

export default Piano;