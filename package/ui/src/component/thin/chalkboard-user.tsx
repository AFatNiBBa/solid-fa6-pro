
import { Icon } from "../../index";

/**
 * A component that renders the `chalkboard-user` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard-user?s=thin chalkboard-user}
 * @preview ![chalkboard-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chalkboard-user.svg)
 */
const ChalkboardUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 16L224 16c-26.5 0-48 21.5-48 48l0 33c-5.2-.7-10.6-1-16-1l0-32c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-32 0-8 0-144 0-8 0-47.2 0c-2.5-5.5-5.4-10.8-8.5-16l55.7 0 0-40c0-22.1 17.9-40 40-40l80 0c22.1 0 40 17.9 40 40l0 40 32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48zM528 400l0-40c0-13.3-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24l0 40 128 0zM240 224A80 80 0 1 0 80 224a80 80 0 1 0 160 0zM64 224a96 96 0 1 1 192 0A96 96 0 1 1 64 224zM16 485.3c0 5.9 4.8 10.7 10.7 10.7l266.7 0c5.9 0 10.7-4.8 10.7-10.7C304 420.5 251.5 368 186.7 368l-53.3 0C68.5 368 16 420.5 16 485.3zm-16 0C0 411.7 59.7 352 133.3 352l53.3 0C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7L26.7 512C11.9 512 0 500.1 0 485.3z" />
    </Icon>
);

export default ChalkboardUser;