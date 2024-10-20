
import { Icon } from "../../index";

/**
 * A component that renders the `head-side-heart` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-heart?s=sharp-solid head-side-heart}
 * @preview ![head-side-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/head-side-heart.svg)
 */
const HeadSideHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 224.2C0 100.6 100.2 0 224 0l32 0C358.1 0 441.6 79.7 447.7 180.3L505 252l7 8.8 0 11.2 0 16 0 32-32 0-32 0 0 96 0 32-32 0-96 0 0 32 0 32-32 0L96 512l-32 0 0-32 0-98.8c-41-41.9-64-98.3-64-157zm112-37c0 16.1 6.6 31.5 18.2 42.7l82.8 79.6L224 320.1l11.1-10.7 82.8-79.6c11.6-11.2 18.2-26.6 18.2-42.7c0-32.7-26.5-59.2-59.2-59.2l-2.4 0c-15.9 0-31.2 6.2-42.7 17.2l-7.7 7.4-7.7-7.4c-11.5-11-26.8-17.2-42.7-17.2l-2.4 0c-32.7 0-59.2 26.5-59.2 59.2z" />
    </Icon>
);

export default HeadSideHeart;