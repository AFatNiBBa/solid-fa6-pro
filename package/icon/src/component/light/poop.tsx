
import { Icon } from "../../index";

/**
 * A component that renders the `poop` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/poop?s=light poop}
 * @preview ![poop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/poop.svg)
 */
const Poop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M209.2 9.9c2.5-6 8.3-9.9 14.8-9.9l8 0c71.6 0 131 52.2 142.1 120.7C403.6 134.9 424 165 424 200c0 7.2-.9 14.3-2.5 21.1C455.6 233.2 480 265.7 480 304c0 16-4.3 31-11.7 43.9C494.4 363.2 512 391.5 512 424c0 48.6-39.4 88-88 88L88 512c-48.6 0-88-39.4-88-88c0-32.5 17.6-60.8 43.7-76.1C36.3 335 32 320 32 304c0-38.3 24.4-70.8 58.5-82.9C88.9 214.3 88 207.2 88 200c0-48.6 39.4-88 88-88l.9 0 17.8 0c20.6 0 37.3-16.7 37.3-37.3l0-8.9c0-12.3-4.9-24-13.5-32.7l-5.8-5.8c-4.6-4.6-5.9-11.5-3.5-17.4zM257.7 35c4.1 9.6 6.3 20.1 6.3 30.8l0 8.9c0 38.3-31 69.3-69.3 69.3l-17.8 0-.9 0c-30.9 0-56 25.1-56 56c0 9.1 2.2 17.7 6 25.2c2.4 4.7 2.3 10.2-.2 14.8s-7.1 7.7-12.3 8.3C85.7 251.6 64 275.3 64 304c0 15.3 6.2 29.2 16.2 39.4c4 4 5.5 9.9 4.1 15.4s-5.7 9.8-11.2 11.3c-23.7 6.5-41 28.3-41 54c0 30.9 25.1 56 56 56l336 0c30.9 0 56-25.1 56-56c0-25.7-17.4-47.4-41-54c-5.5-1.5-9.7-5.8-11.2-11.3s.1-11.3 4.1-15.4c10-10.1 16.2-24 16.2-39.4c0-28.7-21.7-52.4-49.5-55.6c-5.2-.6-9.8-3.7-12.3-8.3s-2.6-10.1-.2-14.8c3.8-7.6 6-16.1 6-25.2c0-24.5-15.8-45.4-37.8-53c-5.9-2-10.1-7.4-10.7-13.6C339 85.1 303.8 45.8 257.7 35z" />
    </Icon>
);

export default Poop;