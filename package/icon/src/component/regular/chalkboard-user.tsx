
import { Icon } from "../../index";

/**
 * A component that renders the `chalkboard-user` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard-user?s=regular chalkboard-user}
 * @preview ![chalkboard-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chalkboard-user.svg)
 */
const ChalkboardUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 48L224 48c-8.8 0-16 7.2-16 16l0 41.3c-14.8-6-31-9.3-48-9.3l0-32c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-32 0-24 0-128 0-24 0-31.2 0c-8.3-18-19.8-34.2-33.7-48l64.9 0 0-40c0-30.9 25.1-56 56-56l64 0c30.9 0 56 25.1 56 56l0 40 32 0c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16zM496 368l0-40c0-4.4-3.6-8-8-8l-64 0c-4.4 0-8 3.6-8 8l0 40 80 0zM208 224a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM64 224a96 96 0 1 1 192 0A96 96 0 1 1 64 224zM50.7 464l218.6 0c-9.5-36.8-42.9-64-82.6-64l-53.3 0c-39.8 0-73.2 27.2-82.6 64zM0 485.3C0 411.7 59.7 352 133.3 352l53.3 0C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7L26.7 512C11.9 512 0 500.1 0 485.3z" />
    </Icon>
);

export default ChalkboardUser;