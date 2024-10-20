
import { Icon } from "../../index";

/**
 * A component that renders the `key` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key?s=regular key}
 * @preview ![key](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/key.svg)
 */
const Key: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 176c0-70.7 57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128c-10.4 0-20.5-1.2-30.1-3.6c-8.1-2-16.7 .4-22.6 6.4L254.1 336 200 336c-13.3 0-24 10.7-24 24l0 40-40 0c-13.3 0-24 10.7-24 24l0 40-64 0 0-78.1L205.2 228.7c5.9-5.9 8.3-14.5 6.4-22.6c-2.3-9.6-3.6-19.7-3.6-30.1zM336 0C238.8 0 160 78.8 160 176c0 9.5 .7 18.8 2.2 27.9L7 359c-4.5 4.5-7 10.6-7 17L0 488c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l27.2-27.2c9.1 1.4 18.4 2.2 27.9 2.2c97.2 0 176-78.8 176-176S433.2 0 336 0zm32 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Key;