
import { Icon } from "../../index";

/**
 * A component that renders the `boot-heeled` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot-heeled?s=sharp-regular boot-heeled}
 * @preview ![boot-heeled](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/boot-heeled.svg)
 */
const BootHeeled: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 48l0 240 208 96 0 80 8 0 24 0 0 48-24 0-8 0-48 0-88 0-24 0-48 0-96-32-48-16 0 16 0 32-7.8 0L80 512l-32 0L0 512l0-48 0-80L24 256 0 64 0 48 0 0 48 0 224 0l48 0 0 48zM143.2 418.5L279.8 464l40.2 0 24 0 88 0 0-49.3L251.9 331.6 224 318.7l0-30.7 0-240-80 0 0 184 0 24-48 0 0-24L96 48 48 48l0 13L71.6 250l.9 7.4-1.4 7.4L48 388.5 48 416l79.8 0c5.2 0 10.3 .8 15.4 2.5z" />
    </Icon>
);

export default BootHeeled;