
import { Icon } from "../../index";

/**
 * A component that renders the `ghost` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ghost?s=sharp-regular ghost}
 * @preview ![ghost](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ghost.svg)
 */
const Ghost: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 426.3l0 53.7-48-24-16-8-24.4 27.9L264 512l-35.9-31.9L192 448l-36.1 32.1L120 512 88.4 475.9 64 448l-16 8L0 480l0-53.7L0 192C0 86 86 0 192 0S384 86 384 192l0 234.3zm-48-24L336 192c0-79.5-64.5-144-144-144S48 112.5 48 192l0 210.3 27.7-13.8 24.4 27.9L124.3 444l35.8-31.9L192 383.8l31.9 28.3L259.7 444l24.1-27.6 24.4-27.9L336 402.3zM96 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Ghost;