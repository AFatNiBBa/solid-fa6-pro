
import { Icon } from "../../index";

/**
 * A component that renders the `box-tissue` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-tissue?s=thin box-tissue}
 * @preview ![box-tissue](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/box-tissue.svg)
 */
const BoxTissue: typeof Icon = x => (
    <Icon {...x}>
        <path d="M92.5 16L208 16c16.3 0 25.3 4.7 31.5 10.6c7.1 6.7 11.9 16 18.2 28.5l.5 1c5.7 11.3 12.8 25.5 24.3 36.5C295.3 104.7 312.3 112 336 112l85.2 0c6 0 10.8 4.8 10.8 10.8c0 1.4-.3 2.7-.8 4L369.1 282.1 360.4 304l-211.9 0-5-19.9L80.4 31.5c-.2-1-.4-2-.4-3C80 21.6 85.6 16 92.5 16zM408 304l-30.4 0 6.4-16 62.1-155.2c1.3-3.2 1.9-6.6 1.9-10C448 108 436 96 421.2 96L336 96c-40 0-52-24-64-48S248 0 208 0L92.5 0C76.8 0 64 12.8 64 28.5c0 2.3 .3 4.7 .9 6.9L128 288l4 16-28 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l304 0c4.4 0 8-3.6 8-8s-3.6-8-8-8zm29.7-64l26.3 0c17.7 0 32 14.3 32 32l0 112L16 384l0-112c0-17.7 14.3-32 32-32l35 0-4-16-31 0c-26.5 0-48 21.5-48 48L0 464c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-192c0-26.5-21.5-48-48-48l-19.9 0-6.4 16zM16 400l480 0 0 64c0 17.7-14.3 32-32 32L48 496c-17.7 0-32-14.3-32-32l0-64z" />
    </Icon>
);

export default BoxTissue;