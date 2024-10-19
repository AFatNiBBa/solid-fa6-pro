
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wave-triangle` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wave-triangle?s=thin wave-triangle}
 * @preview ![wave-triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MTQuNDE3IDI2MC44MTJMNDk2LjAxIDQxOC42ODhDNDg4LjM4NSA0MjguODQ0IDQ3Ni43MjkgNDM0LjY4OCA0NjQuMDEgNDM0LjY4OFM0MzkuNjM1IDQyOC44NDQgNDMyLjAxIDQxOC42NTZMMTk1LjE5OCAxMDIuOTM4QzE4Ni4wNzMgOTAuNjg4IDE2NS45NDggOTAuNzE5IDE1Ni44MjMgMTAyLjkwNkwzOC40MTcgMjYwLjgxMkMzNS43NiAyNjQuMzc1IDMwLjcyOSAyNjUuMDMxIDI3LjE5OCAyNjIuNDA2QzIzLjY2NyAyNTkuNzUgMjIuOTQ4IDI1NC43NSAyNS42MDQgMjUxLjE4OEwxNDQuMDEgOTMuMzEyQzE1OS4yNiA3MyAxOTIuNzYgNzIuOTY5IDIwOC4wMSA5My4zNDRMNDQ0LjgyMyA0MDkuMDYyQzQ1My45NDggNDIxLjMxMiA0NzQuMDczIDQyMS4yODEgNDgzLjE5OCA0MDkuMDk0TDYwMS42MDQgMjUxLjE4OEM2MDQuMjYgMjQ3LjY4OCA2MDkuMzIzIDI0NyA2MTIuODIzIDI0OS41OTRDNjE2LjM1NCAyNTIuMjUgNjE3LjA3MyAyNTcuMjUgNjE0LjQxNyAyNjAuODEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WaveTriangle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M614.417 260.812L496.01 418.688C488.385 428.844 476.729 434.688 464.01 434.688S439.635 428.844 432.01 418.656L195.198 102.938C186.073 90.688 165.948 90.719 156.823 102.906L38.417 260.812C35.76 264.375 30.729 265.031 27.198 262.406C23.667 259.75 22.948 254.75 25.604 251.188L144.01 93.312C159.26 73 192.76 72.969 208.01 93.344L444.823 409.062C453.948 421.312 474.073 421.281 483.198 409.094L601.604 251.188C604.26 247.688 609.323 247 612.823 249.594C616.354 252.25 617.073 257.25 614.417 260.812Z" />
        </Icon>
    </>
}