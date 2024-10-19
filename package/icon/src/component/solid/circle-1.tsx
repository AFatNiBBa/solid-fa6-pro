
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-1` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-1?s=solid circle-1}
 * @preview ![circle-1](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTMyMCAzODRIMTkyQzE3OC43NSAzODQgMTY4IDM3My4yNSAxNjggMzYwUzE3OC43NSAzMzYgMTkyIDMzNkgyMzJWMTk2Ljg0NEwyMTcuMzEyIDIwNi42MjVDMjA2LjI2NiAyMTMuOTM4IDE5MS4zNTkgMjEwLjk2OSAxODQuMDMxIDE5OS45NjlDMTc2LjY3MiAxODguOTM4IDE3OS42NTYgMTc0LjAzMSAxOTAuNjg4IDE2Ni42ODhMMjQyLjY4OCAxMzIuMDMxQzI1MC4wNzggMTI3LjA5NCAyNTkuNTQ3IDEyNi42NTYgMjY3LjMyOCAxMzAuODQ0QzI3NS4xMjUgMTM1LjAzMSAyODAgMTQzLjE1NiAyODAgMTUyVjMzNkgzMjBDMzMzLjI1IDMzNiAzNDQgMzQ2Ljc1IDM0NCAzNjBTMzMzLjI1IDM4NCAzMjAgMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Circle_1(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM320 384H192C178.75 384 168 373.25 168 360S178.75 336 192 336H232V196.844L217.312 206.625C206.266 213.938 191.359 210.969 184.031 199.969C176.672 188.938 179.656 174.031 190.688 166.688L242.688 132.031C250.078 127.094 259.547 126.656 267.328 130.844C275.125 135.031 280 143.156 280 152V336H320C333.25 336 344 346.75 344 360S333.25 384 320 384Z" />
        </Icon>
    </>
}