
import { Icon } from "../../index";

/**
 * A component that renders the `cabin` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cabin?s=sharp-thin cabin}
 * @preview ![cabin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cabin.svg)
 */
const Cabin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 240l16 0 16 0 128 0 16 0 128 0 16 0 128 0 16 0 16 0 0-55.6L256 19.4 16 184.4 16 240zm16 16l-16 0L0 256l0-16 0-64L256 0 368 77l0-37 0-8 8 0 96 0 8 0 0 8 0 114 32 22 0 64 0 16-16 0-16 0 0 48 0 16 0 48 0 16 0 48 0 16 0 48 0 16-16 0-128 0-16 0 0-16 0-48 0-16 0-48 0-16 0-48 0-16 0-48-128 0 0 48 0 16 0 48 0 16 0 48 0 16 0 48 0 16-16 0L48 512l-16 0 0-16 0-48 0-16 0-48 0-16 0-48 0-16 0-48zm144 0L48 256l0 48 128 0 0-48zm160 0l0 48 128 0 0-48-128 0zM464 143l0-95-80 0 0 40 80 55zM256 120a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm40 24a40 40 0 1 1 -80 0 40 40 0 1 1 80 0zM176 320L48 320l0 48 128 0 0-48zm0 64L48 384l0 48 128 0 0-48zM48 496l128 0 0-48L48 448l0 48zM464 320l-128 0 0 48 128 0 0-48zm0 64l-128 0 0 48 128 0 0-48zM336 496l128 0 0-48-128 0 0 48z" />
    </Icon>
);

export default Cabin;