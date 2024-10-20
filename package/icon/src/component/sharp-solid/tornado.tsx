
import { Icon } from "../../index";

/**
 * A component that renders the `tornado` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tornado?s=sharp-solid tornado}
 * @preview ![tornado](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tornado.svg)
 */
const Tornado: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 0L0 45.6C0 62.7 1.7 79.6 5 96l352.8 0c3.2-6.9 7.5-13.3 13-18.8L416 32l0-32L0 0zM352.2 128L13.6 128c12.2 35.9 32.3 68.7 58.8 96L412 224l-47.2-62.9c-7.3-9.7-11.6-21.2-12.6-33.1zm-226 138.2l116.4 68.5c8.2 4.8 15.8 10.7 22.5 17.3l178.6 0c2.8-11 4.3-22.5 4.3-34.1c0-21.6-5.1-42.8-14.7-61.9l-323.1 0c5.2 3.6 10.5 7 16 10.2zM288 384c10.3 21.4 13.8 45.5 9.9 69L288 512l108.4-86.7c14.4-11.5 26.1-25.6 34.7-41.3L288 384z" />
    </Icon>
);

export default Tornado;