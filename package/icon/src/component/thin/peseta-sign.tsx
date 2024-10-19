
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `peseta-sign` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/peseta-sign?s=thin peseta-sign}
 * @preview ![peseta-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzYgMTg0SDMzNkMzMzYgMTAwLjE4OCAyNjcuODEyIDMyIDE4NCAzMkg4OEM2NS45MzggMzIgNDggNDkuOTM4IDQ4IDcyVjE4NEg4QzMuNTc4IDE4NCAwIDE4Ny41OTQgMCAxOTJTMy41NzggMjAwIDggMjAwSDQ4VjQ3MkM0OCA0NzYuNDA2IDUxLjU3OCA0ODAgNTYgNDgwUzY0IDQ3Ni40MDYgNjQgNDcyVjMzNkgxODRDMjYyLjMzNCAzMzYgMzI2LjI2MiAyNzYuMjE1IDMzNC4zODMgMjAwSDM3NkMzODAuNDIyIDIwMCAzODQgMTk2LjQwNiAzODQgMTkyUzM4MC40MjIgMTg0IDM3NiAxODRaTTY0IDcyQzY0IDU4Ljc4MSA3NC43NjYgNDggODggNDhIMTg0QzI1OC45ODQgNDggMzIwIDEwOSAzMjAgMTg0SDY0VjcyWk0xODQgMzIwSDY0VjIwMEgzMTguMzgzQzMxMC4zNTQgMjY3LjM5NSAyNTMuNTA2IDMyMCAxODQgMzIwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PesetaSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M376 184H336C336 100.188 267.812 32 184 32H88C65.938 32 48 49.938 48 72V184H8C3.578 184 0 187.594 0 192S3.578 200 8 200H48V472C48 476.406 51.578 480 56 480S64 476.406 64 472V336H184C262.334 336 326.262 276.215 334.383 200H376C380.422 200 384 196.406 384 192S380.422 184 376 184ZM64 72C64 58.781 74.766 48 88 48H184C258.984 48 320 109 320 184H64V72ZM184 320H64V200H318.383C310.354 267.395 253.506 320 184 320Z" />
        </Icon>
    </>
}