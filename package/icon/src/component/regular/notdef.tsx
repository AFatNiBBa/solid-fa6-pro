
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `notdef` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/notdef?s=regular notdef}
 * @preview ![notdef](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMEg0OEMyMS40OSAwIDAgMjEuNDkgMCA0OFY0NjRDMCA0OTAuNTEgMjEuNDkgNTEyIDQ4IDUxMkgzMzZDMzYyLjUxIDUxMiAzODQgNDkwLjUxIDM4NCA0NjRWNDhDMzg0IDIxLjQ5IDM2Mi41MSAwIDMzNiAwWk0zMzYgOTAuMTY0VjQyMS44MzZMMjIxLjE4OSAyNTZMMzM2IDkwLjE2NFpNMTkyIDIxMy44MzZMNzcuMTg5IDQ4SDMwNi44MTFMMTkyIDIxMy44MzZaTTE2Mi44MTEgMjU2TDQ4IDQyMS44MzZWOTAuMTY0TDE2Mi44MTEgMjU2Wk0xOTIgMjk4LjE2NEwzMDYuODExIDQ2NEg3Ny4xODlMMTkyIDI5OC4xNjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Notdef(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M336 0H48C21.49 0 0 21.49 0 48V464C0 490.51 21.49 512 48 512H336C362.51 512 384 490.51 384 464V48C384 21.49 362.51 0 336 0ZM336 90.164V421.836L221.189 256L336 90.164ZM192 213.836L77.189 48H306.811L192 213.836ZM162.811 256L48 421.836V90.164L162.811 256ZM192 298.164L306.811 464H77.189L192 298.164Z" />
        </Icon>
    </>
}