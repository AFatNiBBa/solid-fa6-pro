
import { Icon, generic } from "../../index";

/**
 * A component that renders the `colon-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/colon-sign?s=duotone colon-sign}
 * @preview ![colon-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/colon-sign.svg)
 */
const ColonSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M81 472.2l17.7-70.8c16.8 14.5 36.2 26.2 57.4 34.2l-13 52.1c-3.6 14.5-16.7 24.2-31 24.2c-2.6 0-5.2-.3-7.8-1c-17.1-4.3-27.6-21.7-23.3-38.8zm36.4-145.5l45.9-183.4c9-4.9 18.7-8.7 28.9-11.3c5.1-1.3 10.3-2.3 15.6-3c2.7-.3 5.3-.6 8.1-.8c1.4-.1 2.7-.1 4.1-.2c1.3 0 2.7-.1 4.1-.1c3 0 6 .1 8.9 .3L171.8 372.9c-22.2-9.9-41.1-26-54.4-46.1zM177 472.2l7.1-28.4c6.4 1.4 13 2.4 19.7 3.1c3.3 .3 6.7 .6 10.1 .8c1.7 .1 3.4 .2 5.1 .2s3.4 .1 5.1 .1c8.6 0 17.1-.6 25.4-1.7L239 487.8c-3.6 14.5-16.7 24.2-31 24.2c-2.6 0-5.2-.3-7.8-1c-17.1-4.3-27.6-21.7-23.3-38.8zm4.9-403.6L193 24.2C197.2 7.1 214.6-3.3 231.8 1s27.6 21.7 23.3 38.8l-6.5 25.8c-4-.5-8.1-.9-12.2-1.2c-2-.1-4.1-.2-6.2-.3c-2-.1-4.1-.1-6.2-.1c-14.5 0-28.6 1.6-42.1 4.6zm17.7 313l62-248.1c7.1 2.2 14 5 20.6 8.3c3.3 1.7 6.5 3.5 9.6 5.4c1.6 1 3.1 2 4.6 3s3 2.1 4.4 3.2c6 4.5 13.2 6.6 20.2 6.4L266.8 376.7c-6.7 2.4-13.6 4.2-20.8 5.4c-3.6 .6-7.2 1.1-10.9 1.4c-1.8 .2-3.7 .3-5.5 .4s-3.7 .1-5.6 .1c-8.3 0-16.5-.8-24.4-2.3zM277.2 71.5L289 24.2C293.2 7.1 310.6-3.3 327.8 1C342.3 4.6 352 17.6 352 32c0 2.6-.3 5.2-1 7.8L336 100c-17.6-12.7-37.5-22.4-58.8-28.6z" />
        <path d="M224 128c-70.7 0-128 57.3-128 128s57.3 128 128 128c28.9 0 55.4-9.5 76.8-25.6c14.1-10.6 34.2-7.8 44.8 6.4s7.8 34.2-6.4 44.8C307.1 433.7 267.2 448 224 448C118 448 32 362 32 256S118 64 224 64c43.2 0 83.1 14.3 115.2 38.4c14.1 10.6 17 30.7 6.4 44.8s-30.7 17-44.8 6.4C279.4 137.5 252.9 128 224 128z" />
    </Icon>
);

export default ColonSign;