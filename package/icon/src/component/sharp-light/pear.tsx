
import { Icon } from "../../index";

/**
 * A component that renders the `pear` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pear?s=sharp-light pear}
 * @preview ![pear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pear.svg)
 */
const Pear: typeof Icon = x => (
    <Icon {...x}>
        <path d="M507.3 27.3L453.1 81.5c39.1 50.2 35.5 122.8-10.6 169l-58.8 58.8c.2 3.5 .3 7.1 .3 10.7c0 106-86 192-192 192S0 426 0 320S86 128 192 128c3.6 0 7.2 .1 10.7 .3l58.8-58.8c46.2-46.2 118.8-49.7 169-10.6L484.7 4.7l22.6 22.6zM388.7 100.7l18.9-18.9C370.1 55 317.8 58.5 284.1 92.1l-58.8 58.8L215.2 161l-14.3-.8c-3-.2-5.9-.2-8.9-.2c-88.4 0-160 71.6-160 160s71.6 160 160 160s160-71.6 160-160c0-3-.1-6-.2-8.9l-.8-14.3 10.1-10.1 58.8-58.8c33.6-33.6 37.1-86 10.4-123.5l-18.9 18.9L400 134.6 377.4 112l11.3-11.3zM272 336l32 0c0 53-43 96-96 96l0-32c35.3 0 64-28.7 64-64z" />
    </Icon>
);

export default Pear;