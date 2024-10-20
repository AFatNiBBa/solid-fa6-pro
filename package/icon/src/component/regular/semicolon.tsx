
import { Icon } from "../../index";

/**
 * A component that renders the `semicolon` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/semicolon?s=regular semicolon}
 * @preview ![semicolon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/semicolon.svg)
 */
const Semicolon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M72 128a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm96 0A72 72 0 1 0 24 128a72 72 0 1 0 144 0zM84.4 347c1.4-6.4 7.1-11 13.6-11c7.3 0 13.9 6.2 13.9 14.3c0 2.7-.8 5.4-2.1 7.6L67.1 428l17.3-81zm-.7 145.8L150.8 383c6-9.8 9.2-21.2 9.2-32.7c0-34.2-27.7-62.3-61.9-62.3c-29.2 0-54.4 20.4-60.6 49L10.4 463.6C5 488.5 24 512 49.5 512c14 0 26.9-7.3 34.2-19.2z" />
    </Icon>
);

export default Semicolon;