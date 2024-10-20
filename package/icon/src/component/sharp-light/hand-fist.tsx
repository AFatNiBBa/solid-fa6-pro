
import { Icon } from "../../index";

/**
 * A component that renders the `hand-fist` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-fist?s=sharp-light hand-fist}
 * @preview ![hand-fist](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hand-fist.svg)
 */
const HandFist: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M176 32l0 32 0 128 48 0 0-128 0-32-48 0zM144 192l0-128L96 64l0 128 48 0zm-80 0L64 64l0-32 32 0 48 0 0-32 32 0 48 0 32 0 0 32 48 0 32 0 0 32 0 32 48 0 32 0 0 32 0 48 0 16 0 32 0 32c0 49.9-25.4 93.9-64 119.8L352 496l0 16-32 0 0-16 0-129.1 0-9.2 8-4.6c33.5-19.4 56-55.6 56-97l-48 0-32 0 0-16-48 0 0 16 0 32 0 16-16 0-96 0-16 0 0-32 16 0 80 0 0-32 0-16L64 224l0 32 0 16c0 48.3 35.8 88.4 82.3 95l13.7 2 0 13.9L160 496l0 16-32 0 0-16 0-100c-55.2-14.2-96-64.3-96-124l0-16 0-48 0-16 16 0 16 0zm192 0l0 16 48 0 0-80 0-32 0-32-48 0 0 128zm128-16l0-48-48 0 0 80 0 16 48 0 0-32 0-16z" />
    </Icon>
);

export default HandFist;