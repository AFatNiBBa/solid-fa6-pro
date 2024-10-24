
import { Icon } from "../../index";

/**
 * A component that renders the `square-r` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-r?s=regular square-r}
 * @preview ![square-r](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-r.svg)
 */
const SquareR: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm152 32l104 0c44.2 0 80 35.8 80 80c0 36.6-24.6 67.5-58.2 77l45.4 60.6c8 10.6 5.8 25.6-4.8 33.6s-25.6 5.8-33.6-4.8L220 288l-44 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-96 0-112c0-13.3 10.7-24 24-24zm80 112l24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0 0 64 56 0z" />
    </Icon>
);

export default SquareR;