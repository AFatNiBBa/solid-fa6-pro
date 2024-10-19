
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `question` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/question?s=regular question}
 * @preview ![question](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDQgMzkyQzEyMS45MDggMzkyIDEwNCA0MDkuOTA4IDEwNCA0MzJTMTIxLjkwOCA0NzIgMTQ0IDQ3MlMxODQgNDU0LjA5MiAxODQgNDMyUzE2Ni4wOTIgMzkyIDE0NCAzOTJaTTIwNy40MDYgMzJIMTEyLjU5NEM1MC41IDMyIDAgODIuNSAwIDE0NC41NzhWMTYwQzAgMTc3LjY3MiAxNC4zMTIgMTkyIDMyIDE5MlM2NCAxNzcuNjcyIDY0IDE2MFYxNDQuNTc4QzY0IDExNy43OTcgODUuODEyIDk2IDExMi41OTQgOTZIMjA3LjQwNkMyMzQuMTg4IDk2IDI1NiAxMTcuNzk3IDI1NiAxNDQuNTc4QzI1NiAxNjIuMjAzIDI0Ni40MzggMTc4LjQ4NCAyMzEuMDMxIDE4Ny4wNjJMMTQ0LjkzOCAyMzQuODkxQzEyNC42MjUgMjQ2LjE3MiAxMTIgMjY3LjYwOSAxMTIgMjkwLjgyOFYzMjBDMTEyIDMzNy42NzIgMTI2LjMxMiAzNTIgMTQ0IDM1MlMxNzYgMzM3LjY3MiAxNzYgMzIwVjI5MC44MjhMMjYyLjEyNSAyNDNDMjk3LjgxMiAyMjMuMTQxIDMyMCAxODUuNDIyIDMyMCAxNDQuNTc4QzMyMCA4Mi41IDI2OS41IDMyIDIwNy40MDYgMzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Question(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M144 392C121.908 392 104 409.908 104 432S121.908 472 144 472S184 454.092 184 432S166.092 392 144 392ZM207.406 32H112.594C50.5 32 0 82.5 0 144.578V160C0 177.672 14.312 192 32 192S64 177.672 64 160V144.578C64 117.797 85.812 96 112.594 96H207.406C234.188 96 256 117.797 256 144.578C256 162.203 246.438 178.484 231.031 187.062L144.938 234.891C124.625 246.172 112 267.609 112 290.828V320C112 337.672 126.312 352 144 352S176 337.672 176 320V290.828L262.125 243C297.812 223.141 320 185.422 320 144.578C320 82.5 269.5 32 207.406 32Z" />
        </Icon>
    </>
}