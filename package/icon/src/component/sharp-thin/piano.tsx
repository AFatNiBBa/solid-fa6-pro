
import { Icon } from "../../index";

/**
 * A component that renders the `piano` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano?s=sharp-thin piano}
 * @preview ![piano](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/piano.svg)
 */
const Piano: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 352l0 64 0 16-16 0-32 0-16 0 0-16 0-64-32 0 0 144 480 0 0-144-32 0 0 64 0 16-16 0-32 0-16 0 0-16 0-64-16 0 0 64 0 16-16 0-32 0-16 0 0-16 0-64-48 0 0 64 0 16-16 0-32 0-16 0 0-16 0-64-16 0 0 64 0 16-16 0-32 0-16 0 0-16 0-64-16 0zm336 0l-32 0 0 64 32 0 0-64zm16-16l32 0 0-38.1L376.8 238.3c-5.4-2.7-8.8-8.3-8.8-14.3l0-32c0-97.2-78.8-176-176-176S16 94.8 16 192l0 144 32 0 16 0 32 0 16 0 16 0 16 0 32 0 16 0 16 0 16 0 32 0 16 0 48 0 16 0 32 0 16 0 16 0 16 0 32 0 16 0zM336 416l32 0 0-64-32 0 0 64zm-80-64l-32 0 0 64 32 0 0-64zM144 416l32 0 0-64-32 0 0 64zM96 352l-32 0 0 64 32 0 0-64zm416-64l0 48 0 8 0 8 0 144 0 16-16 0L16 512 0 512l0-16L0 352l0-8 0-8L0 192C0 86 86 0 192 0S384 86 384 192l0 32 128 64z" />
    </Icon>
);

export default Piano;