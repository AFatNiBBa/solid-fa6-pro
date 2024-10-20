
import { Icon } from "../../index";

/**
 * A component that renders the `bug-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bug-slash?s=sharp-solid bug-slash}
 * @preview ![bug-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bug-slash.svg)
 */
const BugSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 0c53 0 96 43 96 96l0 32-192 0 0-32c0-53 43-96 96-96zM477.6 348L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1l19 14.7L235.4 160l199.3 0 54.6-54.6L512 82.7 557.3 128l-22.6 22.6L480 205.3l0 50.7 64 0 32 0 0 64-32 0-64 0c0 9.5-.8 18.9-2.4 28zM160 256l0-33.9L304 335.5l0 143.7c-34.5-3.4-65.8-17.8-90.3-39.6l-47.1 47.1L144 509.3 98.7 464l22.6-22.6L175 387.7c-9.6-20.6-15-43.5-15-67.7l-64 0-32 0 0-64 32 0 64 0zM336 479.2l0-118.5 94.8 74.7c-25.1 24.1-58.2 40.1-94.8 43.8z" />
    </Icon>
);

export default BugSlash;