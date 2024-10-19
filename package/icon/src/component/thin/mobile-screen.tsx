
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mobile-screen` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen?s=thin mobile-screen}
 * @preview ![mobile-screen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDQgNDU2SDI0MEMyNDQuNDA2IDQ1NiAyNDggNDUyLjQyMiAyNDggNDQ4UzI0NC40MDYgNDQwIDI0MCA0NDBIMTQ0QzEzOS41OTQgNDQwIDEzNiA0NDMuNTc4IDEzNiA0NDhTMTM5LjU5NCA0NTYgMTQ0IDQ1NlpNMzA0IDBIODBDNTMuNSAwIDMyIDIxLjUgMzIgNDhWNDY0QzMyIDQ5MC41IDUzLjUgNTEyIDgwIDUxMkgzMDRDMzMwLjUgNTEyIDM1MiA0OTAuNSAzNTIgNDY0VjQ4QzM1MiAyMS41IDMzMC41IDAgMzA0IDBaTTMzNiA0NjRDMzM2IDQ4MS42NDUgMzIxLjY0NSA0OTYgMzA0IDQ5Nkg4MEM2Mi4zNTUgNDk2IDQ4IDQ4MS42NDUgNDggNDY0VjQwMEgzMzZWNDY0Wk0zMzYgMzg0SDQ4VjQ4QzQ4IDMwLjM1NSA2Mi4zNTUgMTYgODAgMTZIMzA0QzMyMS42NDUgMTYgMzM2IDMwLjM1NSAzMzYgNDhWMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MobileScreen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M144 456H240C244.406 456 248 452.422 248 448S244.406 440 240 440H144C139.594 440 136 443.578 136 448S139.594 456 144 456ZM304 0H80C53.5 0 32 21.5 32 48V464C32 490.5 53.5 512 80 512H304C330.5 512 352 490.5 352 464V48C352 21.5 330.5 0 304 0ZM336 464C336 481.645 321.645 496 304 496H80C62.355 496 48 481.645 48 464V400H336V464ZM336 384H48V48C48 30.355 62.355 16 80 16H304C321.645 16 336 30.355 336 48V384Z" />
        </Icon>
    </>
}