
import { Icon } from "../../index";

/**
 * A component that renders the `reflect-horizontal` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-horizontal?s=sharp-thin reflect-horizontal}
 * @preview ![reflect-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/reflect-horizontal.svg)
 */
const ReflectHorizontal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 0l0 8 0 496 0 8-16 0 0-8L248 8l0-8 16 0zM180.7 244.7L192 256l-11.3 11.3L32 416l-16 0L0 416l0-16L0 112 0 96l16 0 16 0L180.7 244.7zM25.4 112L16 112l0 288 9.4 0 144-144L25.4 112zM320 256l11.3-11.3L480 96l16 0 16 0 0 16 0 288 0 16-16 0-16 0L331.3 267.3 320 256zM496 112l-9.4 0-144 144 144 144 9.4 0 0-288z" />
    </Icon>
);

export default ReflectHorizontal;