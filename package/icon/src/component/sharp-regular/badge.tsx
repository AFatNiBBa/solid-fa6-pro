
import { Icon } from "../../index";

/**
 * A component that renders the `badge` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/badge?s=sharp-regular badge}
 * @preview ![badge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/badge.svg)
 */
const Badge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48c-24.1 0-45.1 13.5-55.7 33.5L191 99.1l-19-5.8c-21.6-6.6-46.1-1.4-63.1 15.7S86.6 150.4 93.2 172l5.8 19-17.5 9.3C61.5 210.9 48 231.9 48 256s13.5 45.1 33.5 55.7L99.1 321l-5.8 19c-6.6 21.6-1.4 46.1 15.7 63.1s41.5 22.3 63.1 15.7l19-5.8 9.3 17.5c10.6 20 31.6 33.5 55.7 33.5s45.1-13.5 55.7-33.5l9.3-17.5 19 5.8c21.6 6.6 46.1 1.4 63.1-15.7s22.3-41.5 15.7-63.1l-5.8-19 17.5-9.3c20-10.6 33.5-31.6 33.5-55.7s-13.5-45.1-33.5-55.7L412.9 191l5.8-19c6.6-21.6 1.4-46.1-15.7-63.1S361.6 86.6 340 93.2l-19 5.8-9.3-17.5C301.1 61.5 280.1 48 256 48zm-88.1-4.6C188.2 17 220.1 0 256 0s67.8 17 88.1 43.4c33-4.3 67.6 6.2 93 31.6s35.9 60 31.6 93C495 188.2 512 220.1 512 256s-17 67.8-43.4 88.1c4.3 33-6.2 67.6-31.6 93s-60 35.9-93 31.6C323.8 495 291.9 512 256 512s-67.8-17-88.1-43.4c-33 4.3-67.6-6.2-93-31.6s-35.9-60-31.6-93C17 323.8 0 291.9 0 256s17-67.8 43.4-88.1c-4.3-33 6.2-67.6 31.6-93s60-35.9 93-31.6z" />
    </Icon>
);

export default Badge;