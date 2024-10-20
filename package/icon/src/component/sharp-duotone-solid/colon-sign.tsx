
import { Icon, generic } from "../../index";

/**
 * A component that renders the `colon-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/colon-sign?s=sharp-duotone-solid colon-sign}
 * @preview ![colon-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/colon-sign.svg)
 */
const ColonSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M80.8 488.7l62.3 14.5 15.6-66.7c-21.3-7.7-40.9-19.1-57.9-33.4L80.8 488.7zm37.5-160.5c13.6 19.9 32.7 35.8 55.1 45.4l57.3-245.4c-2.2-.1-4.4-.2-6.7-.2c-1.6 0-2.9 0-4.2 .1c-1.5 .1-2.9 .1-4.3 .2c-2.9 .2-5.6 .5-8.4 .8c-5.5 .7-10.9 1.8-16.2 3.2c-10.5 2.8-20.5 6.9-29.8 12.2L118.3 328.2zm58.5 160.5l62.3 14.5 13.4-57.4c-9.3 1.4-18.8 2.1-28.6 2.1c-6.4 0-12.6-.3-18.7-.9s-12.2-1.5-18.1-2.6l-10.3 44.3zm1.8-419.3C193.2 65.9 208.4 64 224 64c1.9 0 3.6 0 5.3 .1c1.9 .1 3.7 .1 5.4 .2c3.6 .2 7.2 .5 10.7 .9l9.8-41.9L192.8 8.7 178.7 69.4zm23 312.7c7.2 1.3 14.7 1.9 22.3 1.9c4 0 7.9-.2 11.8-.5s7.6-.9 11.4-1.5c7.5-1.4 14.8-3.4 21.7-6l48.4-207.5c-15.5-16.5-35.2-28.8-57.5-35.3l-58.1 249zM274.4 70.7c21.5 5.8 41.5 15.3 59.3 27.7l17.5-75.1L288.8 8.7l-14.5 62z" />
        <path d="M224 128c-70.7 0-128 57.3-128 128s57.3 128 128 128c41.9 0 79-20.1 102.4-51.2l51.2 38.4C342.6 417.8 286.8 448 224 448C118 448 32 362 32 256S118 64 224 64c62.8 0 118.6 30.2 153.6 76.8l-51.2 38.4C303 148.1 265.9 128 224 128z" />
    </Icon>
);

export default ColonSign;