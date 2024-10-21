
import { Icon } from "../../index";

/**
 * A component that renders the `person` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person?s=regular person}
 * @preview ![person](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person.svg)
 */
const Person: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm32 128.1L144 304l32 0 0-127.9c-.7 0-1.5-.1-2.3-.1l-27.5 0c-.8 0-1.5 0-2.3 .1zM144 352l0 136c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-264.4L52.9 299.8c-6.5 11.5-21.2 15.6-32.7 9.1s-15.6-21.2-9.1-32.7L69.7 172.7c15.6-27.6 44.9-44.7 76.6-44.7l27.5 0c31.7 0 61 17.1 76.6 44.7l58.5 103.5c6.5 11.5 2.5 26.2-9.1 32.7s-26.2 2.5-32.7-9.1L224 223.6 224 488c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-136-32 0z" />
    </Icon>
);

export default Person;