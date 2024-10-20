
import { Icon } from "../../index";

/**
 * A component that renders the `bug-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bug-slash?s=regular bug-slash}
 * @preview ![bug-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bug-slash.svg)
 */
const BugSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 96c0-53 43-96 96-96s96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6zm73.7 112L432 313.3l0-49.3c0-30.9-25.1-56-56-56l-78.3 0zM477.4 348.9L630.8 469.1c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2S28.4-3.1 38.8 5.1L240 162.8c7.7-1.8 15.8-2.8 24-2.8l112 0c20 0 38.7 5.7 54.6 15.5L503 103c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72.4 72.4C474.3 225.3 480 244 480 264l72 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-72 0 0 8c0 9.9-.9 19.5-2.6 28.9zm-46.6 86.5C402.1 463 363 480 320 480c-43.7 0-83.3-17.5-112.2-45.9L137 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l75.8-75.8c-12-22.4-18.8-48.1-18.8-75.3l0-8-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0c0-12.9 2.4-25.3 6.7-36.7L208.1 260c-.1 1.3-.1 2.7-.1 4l0 56c0 53.6 37.7 98.4 88 109.4l0-100.2L344 367l0 62.4c18.3-4 34.8-12.4 48.6-24.1l38.2 30.1z" />
    </Icon>
);

export default BugSlash;