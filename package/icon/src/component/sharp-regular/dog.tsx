
import { Icon } from "../../index";

/**
 * A component that renders the `dog` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dog?s=sharp-regular dog}
 * @preview ![dog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dog.svg)
 */
const Dog: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 319.8l0 59.8 0 84.4 48 0 0-189.7L302.2 224l-11.5 0L144 224l-31.9 0-.1 .9L112 464l48 0 0-84.4 0-59.8 58.4 12.9c9.5 2.1 19.4 3.2 29.6 3.2s20.1-1.1 29.6-3.2L336 319.8zm1.1-130.7l52 32L394 192l40.7 0 45.3 0c26.5 0 48-21.5 48-48l0-32-32 0-19.9 0L462.1 97.9 444.1 80 368 80l-12.7 0L338 183.9l-.9 5.2zm-272.9 31c-1.1-.3-2.2-.7-3.3-1.1c-17.3-6-32.2-17.3-42.8-32.2C12 178.2 7.3 168.2 4.6 157.4c0 0 0 0 0 0s0 0 0 0L.7 141.8l46.6-11.6 3.9 15.5s0 0 0 0C55.6 163.5 71.6 176 90 176l54 0 146.7 0L313.5 39.3l3.1-18.7L320 0l24 0 3.4 4.6 16.7 22.3L368 32l96 0 32 32 32 0 48 0 0 48 0 32c0 53-43 96-96 96l-45.3 0L432 256l0 208 0 48-48 0-48 0-48 0 0-48 0-35.4 0-48.9c-10.4 2.3-21.1 3.7-32 4.2c-2.7 .1-5.3 .2-8 .2s-5.3-.1-8-.2c-10.9-.5-21.6-1.9-32-4.2l0 48.9 0 35.4 0 48-48 0-48 0-48 0 0-48 0-240c0-1.3 .1-2.6 .2-3.8zM416 112a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Dog;