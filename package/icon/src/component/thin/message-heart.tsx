
import { Icon } from "../../index";

/**
 * A component that renders the `message-heart` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-heart?s=thin message-heart}
 * @preview ![message-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/message-heart.svg)
 */
const MessageHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 416c0-8.8-7.2-16-16-16l-96 0c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-138.7 0c-3.5 0-6.8 1.1-9.6 3.2L176 496l0-80zM64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l80 0 16 0 0 16 0 64c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zm96 169.9c0-23.2 18.8-41.9 41.9-41.9c11.1 0 21.8 4.4 29.7 12.3L250.3 159c1.5 1.5 3.5 2.3 5.7 2.3s4.2-.8 5.7-2.3l18.7-18.7c7.9-7.9 18.5-12.3 29.7-12.3c23.2 0 41.9 18.8 41.9 41.9l0 .6c0 10.6-4 20.9-11.2 28.8l-78.9 86.1c-1.5 1.7-3.7 2.6-5.9 2.6s-4.4-.9-5.9-2.6l-78.9-86.1c-7.2-7.8-11.2-18.1-11.2-28.8l0-.6zM201.9 112c-32 0-57.9 25.9-57.9 57.9l0 .6c0 14.7 5.5 28.8 15.4 39.6l78.9 86.1c4.5 5 11 7.8 17.7 7.8s13.1-2.8 17.7-7.8l78.9-86.1c9.9-10.8 15.4-24.9 15.4-39.6l0-.6c0-32-25.9-57.9-57.9-57.9c-15.4 0-30.1 6.1-41 17L256 142.1 242.9 129c-10.9-10.9-25.6-17-41-17z" />
    </Icon>
);

export default MessageHeart;